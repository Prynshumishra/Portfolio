import express from "express";
import mongoose from "mongoose";
import { Contact } from "../models/Contact.js";
import { Project } from "../models/Project.js";
import { isDbReady } from "../config/db.js";
import {
  verifyAdminKey,
  createAdminSessionToken,
  requireAdmin,
} from "../middleware/authMiddleware.js";
import { adminLoginLimiter } from "../middleware/rateLimiter.js";
import { getOrSeedProjects } from "./projectRoutes.js";

const router = express.Router();

function validateProjectPayload(body) {
  const { title, category, desc, tech } = body ?? {};
  if (!title || typeof title !== "string" || title.trim().length < 2 || title.trim().length > 120) {
    return "Title must be between 2 and 120 characters.";
  }
  if (!["client", "personal"].includes(category)) {
    return "Category must be either 'client' or 'personal'.";
  }
  if (!desc || typeof desc !== "string" || desc.trim().length < 10 || desc.trim().length > 1000) {
    return "Description must be between 10 and 1000 characters.";
  }
  if (tech !== undefined && !Array.isArray(tech)) {
    return "Tech stack must be an array of strings.";
  }
  return null;
}

// POST /api/admin/login — Verify Admin Key & Issue Signed Session Token
router.post("/login", adminLoginLimiter, (req, res) => {
  const { key } = req.body ?? {};
  if (!verifyAdminKey(key)) {
    return res
      .status(401)
      .json({ success: false, error: "Invalid admin access key." });
  }
  const { token, expiresAt } = createAdminSessionToken();
  return res.json({ success: true, token, expiresAt });
});

// ── CONTACTS MANAGEMENT ──────────────────────────────────────────────────────

// GET /api/admin/contacts — List all contact submissions
router.get("/contacts", requireAdmin, async (req, res) => {
  if (!isDbReady()) {
    return res.status(503).json({ error: "Database connection is not ready." });
  }
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
    const normalized = contacts.map((c) => ({
      ...c,
      status: c.status || "unread",
    }));
    return res.json({ success: true, contacts: normalized });
  } catch (err) {
    console.error("❌ Fetch contacts error:", err);
    return res.status(500).json({ error: "Failed to fetch contacts." });
  }
});

// PATCH /api/admin/contacts/:id — Update contact status
router.patch("/contacts/:id", requireAdmin, async (req, res) => {
  if (!isDbReady()) {
    return res.status(503).json({ error: "Database connection is not ready." });
  }
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid contact ID." });
  }
  const { status } = req.body ?? {};
  if (!["unread", "read", "replied", "archived"].includes(status)) {
    return res.status(400).json({ error: "Invalid status value." });
  }
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: { status } },
      { new: true }
    ).lean();
    if (!updated) return res.status(404).json({ error: "Contact not found." });
    return res.json({ success: true, contact: updated });
  } catch (err) {
    console.error("❌ Update contact error:", err);
    return res.status(500).json({ error: "Failed to update contact status." });
  }
});

// DELETE /api/admin/contacts/:id — Delete a contact submission
router.delete("/contacts/:id", requireAdmin, async (req, res) => {
  if (!isDbReady()) {
    return res.status(503).json({ error: "Database connection is not ready." });
  }
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid contact ID." });
  }
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id).lean();
    if (!deleted) return res.status(404).json({ error: "Contact not found." });
    return res.json({ success: true, id: req.params.id });
  } catch (err) {
    console.error("❌ Delete contact error:", err);
    return res.status(500).json({ error: "Failed to delete contact." });
  }
});

// ── PROJECTS MANAGEMENT ──────────────────────────────────────────────────────

// GET /api/admin/projects — List all projects
router.get("/projects", requireAdmin, async (req, res) => {
  if (!isDbReady()) {
    return res.status(503).json({ error: "Database connection is not ready." });
  }
  try {
    const projects = await getOrSeedProjects();
    return res.json({ success: true, projects });
  } catch (err) {
    console.error("❌ Fetch admin projects error:", err);
    return res.status(500).json({ error: "Failed to fetch projects." });
  }
});

// POST /api/admin/projects — Create a new project
router.post("/projects", requireAdmin, async (req, res) => {
  if (!isDbReady()) {
    return res.status(503).json({ error: "Database connection is not ready." });
  }
  const validationError = validateProjectPayload(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { title, category, image, desc, tech, github, demo, order } = req.body;
  try {
    const count = await Project.countDocuments();
    const created = await new Project({
      title: title.trim(),
      category,
      image: (image || "").trim(),
      desc: desc.trim(),
      tech: Array.isArray(tech)
        ? tech.map((t) => String(t).trim()).filter(Boolean)
        : [],
      github: (github || "").trim(),
      demo: (demo || "").trim(),
      order: Number.isFinite(Number(order)) ? Number(order) : count + 1,
    }).save();

    return res.status(201).json({ success: true, project: created });
  } catch (err) {
    console.error("❌ Create project error:", err);
    return res.status(500).json({ error: "Failed to create project." });
  }
});

// PUT /api/admin/projects/:id — Update an existing project
router.put("/projects/:id", requireAdmin, async (req, res) => {
  if (!isDbReady()) {
    return res.status(503).json({ error: "Database connection is not ready." });
  }
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid project ID." });
  }
  const validationError = validateProjectPayload(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const { title, category, image, desc, tech, github, demo, order } = req.body;
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: title.trim(),
          category,
          image: (image || "").trim(),
          desc: desc.trim(),
          tech: Array.isArray(tech)
            ? tech.map((t) => String(t).trim()).filter(Boolean)
            : [],
          github: (github || "").trim(),
          demo: (demo || "").trim(),
          order: Number.isFinite(Number(order)) ? Number(order) : 0,
        },
      },
      { new: true }
    ).lean();

    if (!updated) return res.status(404).json({ error: "Project not found." });
    return res.json({ success: true, project: updated });
  } catch (err) {
    console.error("❌ Update project error:", err);
    return res.status(500).json({ error: "Failed to update project." });
  }
});

// DELETE /api/admin/projects/:id — Delete a project
router.delete("/projects/:id", requireAdmin, async (req, res) => {
  if (!isDbReady()) {
    return res.status(503).json({ error: "Database connection is not ready." });
  }
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid project ID." });
  }
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id).lean();
    if (!deleted) return res.status(404).json({ error: "Project not found." });
    return res.json({ success: true, id: req.params.id });
  } catch (err) {
    console.error("❌ Delete project error:", err);
    return res.status(500).json({ error: "Failed to delete project." });
  }
});

export default router;

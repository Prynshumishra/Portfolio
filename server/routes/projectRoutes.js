import express from "express";
import { Project } from "../models/Project.js";
import { isDbReady } from "../config/db.js";
import { defaultProjects } from "../config/defaultProjects.js";

const router = express.Router();

export async function getOrSeedProjects() {
  const count = await Project.countDocuments();
  if (count === 0) {
    await Project.insertMany(defaultProjects);
  }
  return Project.find().sort({ order: 1, createdAt: -1 }).lean();
}

// GET /api/projects — Public endpoint to fetch portfolio projects
router.get("/", async (_, res) => {
  if (!isDbReady()) {
    return res.json({ success: true, projects: defaultProjects });
  }
  try {
    const projects = await getOrSeedProjects();
    return res.json({ success: true, projects });
  } catch (err) {
    console.error("❌ Fetch public projects error:", err);
    return res.json({ success: true, projects: defaultProjects });
  }
});

export default router;

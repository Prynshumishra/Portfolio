import express from "express";
import { Contact } from "../models/Contact.js";
import { isDbReady } from "../config/db.js";
import { contactLimiter } from "../middleware/rateLimiter.js";
import { validateContactMiddleware } from "../middleware/validateContact.js";

const router = express.Router();

// POST /api/contact — Public contact form submission
router.post("/", contactLimiter, validateContactMiddleware, async (req, res) => {
  if (!isDbReady()) {
    return res
      .status(503)
      .json({ error: "Service temporarily unavailable. Please try again shortly." });
  }

  const { name, email, subject, message } = req.body;
  const trimmed = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
    status: "unread",
  };

  try {
    const saved = await new Contact(trimmed).save();
    console.log(`✅ Contact saved — ${trimmed.email}`);
    return res.json({ success: true, contact: saved });
  } catch (err) {
    console.error("❌ DB save error:", err);
    return res.status(500).json({ error: "Failed to save your message. Please try again." });
  }
});

export default router;

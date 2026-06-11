import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── MongoDB ──────────────────────────────────────────────────────────────────
let dbReady = false;
mongoose.connect(process.env.MONGO_URI)
  .then(() => { console.log("✅ MongoDB connected"); dbReady = true; })
  .catch((err) => { console.error("❌ MongoDB connection error:", err); });

const contactSchema = new mongoose.Schema({
  name:      { type: String, required: true, maxlength: 100 },
  email:     { type: String, required: true, maxlength: 200 },
  subject:   { type: String, required: true, maxlength: 200 },
  message:   { type: String, required: true, maxlength: 500 },
  createdAt: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", contactSchema);

// ── CORS ─────────────────────────────────────────────────────────────────────
const allowedOrigins = [
  "http://localhost:5173",
  "https://priyanshumishra.vercel.app",
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: false,
}));

app.use(express.json({ limit: "16kb" }));

// ── Security headers ─────────────────────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader("Content-Security-Policy", "default-src 'none'; frame-ancestors 'none'");
  next();
});

// ── Rate limit: 5 submissions per 15 minutes per IP ──────────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please wait before trying again." },
});

// ── Validation ───────────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContact({ name, email, subject, message }) {
  if (!name || name.trim().length < 2 || name.trim().length > 100)
    return "Name must be between 2 and 100 characters.";
  if (!email || !EMAIL_RE.test(email) || email.length > 200)
    return "Please provide a valid email address.";
  if (!subject || subject.trim().length < 2 || subject.trim().length > 200)
    return "Subject is required.";
  if (!message || message.trim().length < 10 || message.trim().length > 500)
    return "Message must be between 10 and 500 characters.";
  return null;
}

// ── Routes ────────────────────────────────────────────────────────────────────
app.get("/", (_, res) => res.json({ status: "ok", message: "Portfolio API running 🚀" }));

app.post("/api/contact", contactLimiter, async (req, res) => {
  if (!dbReady) return res.status(503).json({ error: "Service temporarily unavailable. Please try again shortly." });

  const { name, email, subject, message } = req.body ?? {};

  const validationError = validateContact({ name, email, subject, message });
  if (validationError) return res.status(400).json({ error: validationError });

  const trimmed = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
  };

  try {
    await new Contact(trimmed).save();
    console.log(`✅ Contact saved — ${trimmed.email}`);
  } catch (err) {
    console.error("❌ DB save error:", err);
    return res.status(500).json({ error: "Failed to save your message. Please try again." });
  }

  res.json({ success: true });
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// ── Graceful shutdown ─────────────────────────────────────────────────────────
process.on("SIGTERM", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

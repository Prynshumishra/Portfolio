import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── MongoDB ──────────────────────────────────────────────────────────────────
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => { console.error("❌ MongoDB connection error:", err); process.exit(1); });

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
  "http://localhost:5174",
  "http://localhost:5176",
  "https://priyanshumishra.vercel.app",
  "https://portfolio-priyanshumishra9.vercel.app",
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: false,
}));

// ── Body parser (cap at 16kb — contact forms need far less) ──────────────────
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

// ── Nodemailer transporter (optional — skipped if EMAIL_USER not set) ────────
const transporter = process.env.EMAIL_USER && process.env.EMAIL_PASS
  ? nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    })
  : null;

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

// ── Email templates ───────────────────────────────────────────────────────────
function ownerEmail(name, email, subject, message) {
  return {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `[Portfolio] New message: ${subject}`,
    html: `
      <div style="font-family:monospace;max-width:600px;margin:auto;background:#0d1117;color:#c9d1d9;padding:32px;border-radius:12px;border:1px solid #30363d">
        <h2 style="color:#58a6ff;margin:0 0 24px">📬 New Portfolio Contact</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="color:#8b949e;padding:6px 0;width:90px">Name</td><td style="color:#fff">${name}</td></tr>
          <tr><td style="color:#8b949e;padding:6px 0">Email</td><td><a href="mailto:${email}" style="color:#58a6ff">${email}</a></td></tr>
          <tr><td style="color:#8b949e;padding:6px 0">Subject</td><td style="color:#fff">${subject}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:#161b22;border-radius:8px;border:1px solid #30363d">
          <p style="color:#8b949e;margin:0 0 8px;font-size:12px">MESSAGE</p>
          <p style="margin:0;white-space:pre-wrap">${message}</p>
        </div>
      </div>`,
  };
}

function autoReplyEmail(name, email) {
  return {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thanks for reaching out — Priyanshu Mishra",
    html: `
      <div style="font-family:monospace;max-width:600px;margin:auto;background:#0d1117;color:#c9d1d9;padding:32px;border-radius:12px;border:1px solid #30363d">
        <h2 style="color:#58a6ff;margin:0 0 16px">Hi ${name} 👋</h2>
        <p>Thanks for getting in touch! I received your message and will reply within <strong>24 hours</strong>.</p>
        <p style="color:#8b949e;font-size:13px">If this is urgent, you can also reach me at <a href="mailto:prynshu09@gmail.com" style="color:#58a6ff">prynshu09@gmail.com</a>.</p>
        <p style="margin-top:24px">— Priyanshu Mishra<br><span style="color:#8b949e">Full Stack Developer</span></p>
      </div>`,
  };
}

// ── Routes ────────────────────────────────────────────────────────────────────
app.get("/", (_, res) => res.json({ status: "ok", message: "Portfolio API running 🚀" }));

app.post("/api/contact", contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body ?? {};

  const validationError = validateContact({ name, email, subject, message });
  if (validationError) return res.status(400).json({ error: validationError });

  const trimmed = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
  };

  // Save to DB
  try {
    await new Contact(trimmed).save();
    console.log(`✅ Contact saved — ${trimmed.email}`);
  } catch (err) {
    console.error("❌ DB save error:", err);
    return res.status(500).json({ error: "Failed to save your message. Please try again." });
  }

  // Send emails only if transporter is configured
  if (transporter) {
    try {
      await Promise.all([
        transporter.sendMail(ownerEmail(trimmed.name, trimmed.email, trimmed.subject, trimmed.message)),
        transporter.sendMail(autoReplyEmail(trimmed.name, trimmed.email)),
      ]);
      console.log(`✅ Emails sent — ${trimmed.email}`);
    } catch (err) {
      console.error("⚠️ Email send error (non-fatal):", err);
    }
  } else {
    console.log("ℹ️ Email skipped — EMAIL_USER/EMAIL_PASS not configured");
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

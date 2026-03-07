import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Portfolio Contact API is running 🚀");
});


// ── Health check ───────────────────────────────────────────
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

// ── Contact endpoint ────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic server-side validation
  if (
    !name?.trim() ||
    !email?.trim() ||
    !subject?.trim() ||
    !message?.trim()
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // Gmail App Password (not your main password)
      },
    });

    // ── Email to you (portfolio owner) ──
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 32px; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #7c3aed, #2563eb); padding: 24px 28px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 22px;">New Contact Message 📬</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px;">From your portfolio contact form</p>
          </div>
          <div style="background: #fff; padding: 28px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; width: 110px;">
                  <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Name</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Email</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <a href="mailto:${email}" style="color: #7c3aed; font-size: 14px;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Subject</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</strong>
              <div style="margin-top: 10px; padding: 16px; background: #f9fafb; border-radius: 8px; border-left: 3px solid #7c3aed; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
            <div style="margin-top: 24px; padding: 14px; background: #ede9fe; border-radius: 8px; text-align: center;">
              <a href="mailto:${email}?subject=Re: ${subject}" style="color: #7c3aed; font-weight: 600; font-size: 13px; text-decoration: none;">
                ↩ Reply to ${name}
              </a>
            </div>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 11px; margin-top: 20px;">Sent from your portfolio at priyanshumishra.dev</p>
        </div>
      `,
    });

    // ── Auto-reply to sender ──
    await transporter.sendMail({
      from: `"Priyanshu Mishra" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! 👋`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #7c3aed, #2563eb); padding: 24px 28px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">Message Received! 🚀</h1>
          </div>
          <div style="background: #fff; padding: 28px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none; color: #374151; font-size: 14px; line-height: 1.7;">
            <p>Hi <strong>${name}</strong>,</p>
            <p>Thanks for getting in touch! I've received your message about <strong>"${subject}"</strong> and will get back to you within <strong>24 hours</strong>.</p>
            <p style="margin-top: 16px; padding: 14px; background: #f3f4f6; border-radius: 8px; font-style: italic; color: #6b7280;">
              "${message.length > 120 ? message.substring(0, 120) + "…" : message}"
            </p>
            <p>In the meantime, feel free to check out my work on 
              <a href="https://github.com/Prynshumishra" style="color: #7c3aed;">GitHub</a> or connect on 
              <a href="https://linkedin.com/in/prynshumishr" style="color: #7c3aed;">LinkedIn</a>.
            </p>
            <p style="margin-top: 20px;">Best regards,<br/><strong>Priyanshu Mishra</strong><br/><span style="color: #7c3aed; font-size: 12px;">MERN Stack Developer</span></p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Contact API server running on http://localhost:${PORT}`);
});

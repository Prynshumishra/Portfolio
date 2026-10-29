import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB, closeDB } from "./config/db.js";
import { corsOptions } from "./config/cors.js";
import { securityHeaders } from "./middleware/securityHeaders.js";
import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── Database Connection ──────────────────────────────────────────────────────
connectDB();

// ── Global Middleware ────────────────────────────────────────────────────────
app.use(cors(corsOptions));
app.use(express.json({ limit: "32kb" }));
app.use(securityHeaders);

// ── Routes ───────────────────────────────────────────────────────────────────
app.get("/", (_, res) =>
  res.json({ status: "ok", message: "Portfolio API running 🚀" })
);
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/admin", adminRoutes);

// ── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// ── Graceful Shutdown ────────────────────────────────────────────────────────
process.on("SIGTERM", async () => {
  await closeDB();
  process.exit(0);
});

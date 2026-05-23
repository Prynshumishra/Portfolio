import { motion } from "framer-motion";

export const SectionHeader = ({ index = "01", label, title, accent, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="font-mono text-xs text-[oklch(0.78_0.15_195/0.5)]">//</span>
      <span className="font-mono text-xs tracking-widest uppercase text-[oklch(0.78_0.15_195/0.5)]">
        {String(index).padStart(2, "0")}
      </span>
      <span className="w-8 h-px bg-[oklch(0.78_0.15_195/0.3)]" />
      <span className="font-mono text-xs tracking-widest uppercase text-[oklch(0.78_0.15_195)]">
        {label}
      </span>
    </div>
    <h2
      className="text-4xl md:text-5xl font-bold tracking-tight mb-5"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {title}{" "}
      <span
        style={{
          background: "linear-gradient(135deg, oklch(0.78 0.15 195), oklch(0.72 0.18 165))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {accent}
      </span>
    </h2>
    {description && (
      <p className="text-[oklch(0.55_0.02_240)] max-w-2xl mx-auto text-sm leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

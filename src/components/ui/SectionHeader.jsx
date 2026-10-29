import { motion } from "framer-motion";

export const SectionHeader = ({ index = "01", label, title, accent, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE4] border border-[#E2D7C9] mb-4">
      <span className="font-mono text-[11px] font-semibold text-[#5C4033]">
        {String(index).padStart(2, "0")}.
      </span>
      <span className="w-3 h-px bg-[#D4C5B4]" />
      <span className="font-mono text-[11px] tracking-widest uppercase font-semibold text-[#5C4033]">
        {label}
      </span>
    </div>
    <h2
      className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#231915]"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {title}{" "}
      <span className="text-[#5C4033]">
        {accent}
      </span>
    </h2>
    {description && (
      <p className="text-[#5A4D44] max-w-2xl mx-auto text-sm md:text-[15px] leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

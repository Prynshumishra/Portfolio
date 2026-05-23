import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Server, Wrench, Layers, Code2 } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

const categories = {
  all:       { icon: Layers, label: "all()",    color: "oklch(0.78 0.15 195)" },
  languages: { icon: Code2,  label: "languages", color: "oklch(0.75 0.17 280)" },
  frontend:  { icon: Monitor, label: "frontend", color: "oklch(0.78 0.15 195)" },
  backend:   { icon: Server,  label: "backend",  color: "oklch(0.72 0.18 165)" },
  tools:     { icon: Wrench,  label: "tools",    color: "oklch(0.78 0.14 55)"  },
};

const skills = [
  // Languages
  { name: "JavaScript",  level: 92, category: "languages" },
  { name: "TypeScript",  level: 82, category: "languages" },
  { name: "Python",      level: 78, category: "languages" },
  { name: "Java",        level: 72, category: "languages" },
  { name: "C++",         level: 75, category: "languages" },
  { name: "C#",          level: 68, category: "languages" },
  { name: "SQL",         level: 80, category: "languages" },
  { name: "PHP",         level: 65, category: "languages" },
  // Frontend
  { name: "React.js",       level: 90, category: "frontend" },
  { name: "Next.js",        level: 80, category: "frontend" },
  { name: "Tailwind CSS",   level: 90, category: "frontend" },
  { name: "Redux Toolkit",  level: 80, category: "frontend" },
  { name: "React Query",    level: 75, category: "frontend" },
  { name: "HTML5",          level: 95, category: "frontend" },
  { name: "CSS3",           level: 92, category: "frontend" },
  // Backend
  { name: "Node.js",      level: 88, category: "backend" },
  { name: "Express.js",   level: 85, category: "backend" },
  { name: "Spring Boot",  level: 70, category: "backend" },
  { name: ".NET",         level: 65, category: "backend" },
  { name: "REST APIs",    level: 90, category: "backend" },
  { name: "GraphQL",      level: 75, category: "backend" },
  { name: "Socket.IO",    level: 72, category: "backend" },
  { name: "JWT Auth",     level: 85, category: "backend" },
  { name: "MongoDB",      level: 84, category: "backend" },
  { name: "Mongoose",     level: 82, category: "backend" },
  { name: "MySQL",        level: 78, category: "backend" },
  { name: "PostgreSQL",   level: 70, category: "backend" },
  { name: "Redis",        level: 65, category: "backend" },
  // Tools
  { name: "VS Code",         level: 95, category: "tools" },
  { name: "Git",             level: 90, category: "tools" },
  { name: "GitHub",          level: 90, category: "tools" },
  { name: "Postman",         level: 88, category: "tools" },
  { name: "AWS",             level: 65, category: "tools" },
  { name: "Claude",          level: 85, category: "tools" },
  { name: "Docker",          level: 68, category: "tools" },
  { name: "Vercel",          level: 85, category: "tools" },
  { name: "Firebase",        level: 72, category: "tools" },
  { name: "GitHub Actions",  level: 70, category: "tools" },
];

const levelLabel = (level) => {
  if (level >= 90) return { text: "expert", color: "oklch(0.78 0.15 195)" };
  if (level >= 80) return { text: "advanced", color: "oklch(0.72 0.18 165)" };
  if (level >= 70) return { text: "proficient", color: "oklch(0.78 0.15 195)" };
  return { text: "learning", color: "oklch(0.65 0.08 240)" };
};

export const SkillsSection = () => {
  const [active, setActive] = useState("all");
  const filtered = skills.filter((s) => active === "all" || s.category === active);
  const cat = categories[active];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.15 195 / 0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader index="03" label="tech_stack" title="My" accent="Skills"
          description="Technologies I use to build robust full-stack applications — from responsive frontends to scalable backends." />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.entries(categories).map(([key, meta]) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-medium border transition-all duration-300"
                style={isActive ? {
                  background: `${meta.color.replace(')', ' / 0.12)')}`,
                  borderColor: `${meta.color.replace(')', ' / 0.35)')}`,
                  color: meta.color,
                  boxShadow: `0 0 20px ${meta.color.replace(')', ' / 0.1)')}`,
                } : {
                  background: "oklch(1 0 0 / 0.03)",
                  borderColor: "oklch(1 0 0 / 0.08)",
                  color: "oklch(0.55 0.02 240)",
                }}
              >
                <meta.icon size={13} />
                {meta.label}
              </button>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { label: "total_skills", value: skills.length },
            { label: "languages", value: skills.filter(s => s.category === "languages").length },
            { label: "frontend", value: skills.filter(s => s.category === "frontend").length },
            { label: "backend", value: skills.filter(s => s.category === "backend").length },
            { label: "tools", value: skills.filter(s => s.category === "tools").length },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold" style={{ color: "oklch(0.78 0.15 195)" }}>{s.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider mt-1" style={{ color: "oklch(0.55 0.02 240)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((skill, i) => {
              const lv = levelLabel(skill.level);
              const catColor = categories[skill.category].color;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  className="group relative terminal-card p-5 transition-all duration-300 hover:-translate-y-0.5 glass-hover"
                >
                  <div className="absolute top-0 inset-x-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${catColor}, transparent)` }} />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium text-sm" style={{ color: "oklch(0.85 0.01 240)" }}>{skill.name}</h3>
                      <span className="font-mono text-[9px] uppercase tracking-widest mt-0.5 block" style={{ color: catColor + " / 0.7" ? catColor : "oklch(0.55 0.02 240)" }}>
                        {categories[skill.category].label}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-lg border" style={{
                      color: lv.color,
                      background: `${lv.color.replace(')', ' / 0.08)')}`,
                      borderColor: `${lv.color.replace(')', ' / 0.2)')}`,
                    }}>
                      {lv.text}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1.5">
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "oklch(1 0 0 / 0.06)" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.03 + 0.2, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${catColor}, ${catColor.replace('0.15 195', '0.18 165')})` }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        {[20, 40, 60, 80, 100].map((mark) => (
                          <span key={mark} className="text-[8px]" style={{ color: skill.level >= mark ? catColor : "oklch(1 0 0 / 0.1)" }}>▪</span>
                        ))}
                      </div>
                      <span className="font-mono text-xs font-bold" style={{ color: catColor }}>{skill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

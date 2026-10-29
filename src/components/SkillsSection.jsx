import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Server,
  Wrench,
  Layers,
  Code2,
  Database,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

const categories = {
  all: { icon: Layers, label: "all()" },
  languages: { icon: Code2, label: "languages" },
  frontend: { icon: Monitor, label: "frontend" },
  backend: { icon: Server, label: "backend" },
  database: { icon: Database, label: "database" },
  tools: { icon: Wrench, label: "tools" },
};

const skills = [
  // Languages
  { name: "JavaScript", level: 92, category: "languages" },
  { name: "TypeScript", level: 82, category: "languages" },
  { name: "PHP", level: 80, category: "languages" },
  { name: "Java", level: 72, category: "languages" },
  { name: "Python", level: 70, category: "languages" },
  { name: "SQL", level: 82, category: "languages" },
  { name: "C++", level: 68, category: "languages" },
  // Frontend
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js", level: 82, category: "frontend" },
  { name: "Angular", level: 92, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Redux Toolkit", level: 80, category: "frontend" },
  { name: "React Query", level: 75, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 92, category: "frontend" },
  // Backend
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "Spring Boot", level: 72, category: "backend" },
  { name: "REST APIs", level: 92, category: "backend" },
  { name: "GraphQL", level: 78, category: "backend" },
  { name: "Socket.IO", level: 72, category: "backend" },
  { name: "JWT Auth", level: 85, category: "backend" },
  // Database
  { name: "MongoDB", level: 85, category: "database" },
  { name: "Mongoose", level: 82, category: "database" },
  { name: "MySQL", level: 80, category: "database" },
  { name: "PostgreSQL", level: 74, category: "database" },
  { name: "Redis", level: 68, category: "database" },
  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "Postman", level: 88, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Docker", level: 68, category: "tools" },
  { name: "Vercel", level: 85, category: "tools" },
  { name: "AWS", level: 65, category: "tools" },
  { name: "Firebase", level: 72, category: "tools" },
  { name: "GitHub Actions", level: 70, category: "tools" },
  { name: "Claude / AI", level: 88, category: "tools" },
];

const levelLabel = (level) => {
  if (level >= 90) return "expert";
  if (level >= 80) return "advanced";
  if (level >= 70) return "proficient";
  return "learning";
};

const INITIAL_ALL_COUNT = 9;

export const SkillsSection = () => {
  const [active, setActive] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = skills.filter((s) => active === "all" || s.category === active);
  const visibleSkills =
    active === "all" && !showAll ? filtered.slice(0, INITIAL_ALL_COUNT) : filtered;
  const hiddenCount = filtered.length - INITIAL_ALL_COUNT;

  const handleCategoryChange = (key) => {
    setActive(key);
    setShowAll(false);
  };

  return (
    <section
      id="skills"
      className="py-24 px-4 relative overflow-hidden bg-[#F2ECE4]/80 border-y border-[#E2D7C9]"
    >
      <div className="container w-full mx-auto relative z-10">
        <SectionHeader
          index="03"
          label="tech_stack"
          title="My"
          accent="Skills"
          description="Technologies I use to build robust full-stack applications — from responsive frontends to scalable backends."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.entries(categories).map(([key, meta]) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-medium border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#231915] border-[#231915] text-[#FAF7F2] shadow-[0_6px_18px_rgba(35,25,21,0.2)]"
                    : "bg-[#FFFFFF] border-[#E2D7C9] text-[#5A4D44] hover:border-[#5C4033] hover:text-[#231915]"
                }`}
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
            { label: "languages", value: skills.filter((s) => s.category === "languages").length },
            { label: "frontend", value: skills.filter((s) => s.category === "frontend").length },
            { label: "backend", value: skills.filter((s) => s.category === "backend").length },
            { label: "database", value: skills.filter((s) => s.category === "database").length },
            { label: "tools", value: skills.filter((s) => s.category === "tools").length },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-[#231915]">{s.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider mt-1 text-[#5A4D44]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${active}-${showAll}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {visibleSkills.map((skill, i) => {
              const lv = levelLabel(skill.level);
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  className="group relative terminal-card p-5 transition-all duration-300 hover:-translate-y-0.5 glass-hover text-left"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-sm text-[#231915]">{skill.name}</h3>
                      <span className="font-mono text-[9px] uppercase tracking-widest mt-0.5 block text-[#5C4033]">
                        {categories[skill.category].label}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-lg border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] font-medium">
                      {lv}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1.5">
                    <div className="h-1.5 rounded-full overflow-hidden bg-[#F2ECE4] border border-[#E2D7C9]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.03 + 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-[#231915]"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        {[20, 40, 60, 80, 100].map((mark) => (
                          <span
                            key={mark}
                            className="text-[8px]"
                            style={{ color: skill.level >= mark ? "#5C4033" : "#E2D7C9" }}
                          >
                            ▪
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-xs font-bold text-[#231915]">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* See More / Show Less button for the "all" tab */}
        {active === "all" && filtered.length > INITIAL_ALL_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold transition-all duration-300 bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] shadow-[0_6px_18px_rgba(35,25,21,0.18)] hover:-translate-y-0.5 cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>show_less_skills()</span>
                  <ChevronUp size={15} />
                </>
              ) : (
                <>
                  <span>see_more_skills (+{hiddenCount})</span>
                  <ChevronDown size={15} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

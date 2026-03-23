import { useState } from "react";
import { cn } from "@/lib/utils";
import { Monitor, Server, Wrench, Layers } from "lucide-react";

const categoryMeta = {
  all: {
    icon: Layers,
    label: "All Skills",
    accent: "from-blue-400 to-indigo-500",
    hoverBorder: "hover:border-blue-500/40",
    hoverShadow: "hover:shadow-blue-500/8",
    bar: "from-blue-400 to-indigo-500",
    chip: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  frontend: {
    icon: Monitor,
    label: "Frontend",
    accent: "from-indigo-400 to-violet-500",
    hoverBorder: "hover:border-indigo-500/40",
    hoverShadow: "hover:shadow-indigo-500/8",
    bar: "from-indigo-400 to-violet-500",
    chip: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  },
  backend: {
    icon: Server,
    label: "Backend",
    accent: "from-sky-400 to-blue-500",
    hoverBorder: "hover:border-sky-500/40",
    hoverShadow: "hover:shadow-sky-500/8",
    bar: "from-sky-400 to-blue-500",
    chip: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  },
  tools: {
    icon: Wrench,
    label: "Tools",
    accent: "from-blue-500 to-cyan-500",
    hoverBorder: "hover:border-blue-500/40",
    hoverShadow: "hover:shadow-blue-500/8",
    bar: "from-blue-500 to-cyan-500",
    chip: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
};

const skills = [
  // ───── Frontend ─────
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "TypeScript", level: 82, category: "frontend" },
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 92, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Redux Toolkit", level: 80, category: "frontend" },
  { name: "React Query (TanStack Query)", level: 75, category: "frontend" },

  // ───── Backend ─────
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "REST API Development", level: 90, category: "backend" },
  { name: "GraphQL", level: 75, category: "backend" },
  { name: "JWT Authentication", level: 85, category: "backend" },
  { name: "Socket.io", level: 72, category: "backend" },
  { name: "MongoDB", level: 84, category: "backend" },
  { name: "Mongoose ODM", level: 82, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "Redis (Caching)", level: 65, category: "backend" },

  // ───── Tools & DevOps ─────
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 68, category: "tools" },
  { name: "Postman", level: 88, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Vercel", level: 85, category: "tools" },
  { name: "Render", level: 80, category: "tools" },
  { name: "Firebase", level: 72, category: "tools" },
  { name: "GitHub Actions (CI/CD)", level: 70, category: "tools" },
  { name: "AWS (Basics)", level: 65, category: "tools" },
  { name: "Jest Testing", level: 70, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const levelBadge = (level) => {
  if (level >= 90) return { text: "Expert",    bg: "bg-blue-500/10 text-blue-400 border-blue-500/25" };
  if (level >= 80) return { text: "Advanced",  bg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/25" };
  if (level >= 70) return { text: "Proficient",bg: "bg-sky-500/10 text-sky-400 border-sky-500/25" };
  return              { text: "Learning",   bg: "bg-blue-400/10 text-blue-300 border-blue-400/25" };
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  const activeMeta = categoryMeta[activeCategory];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* SaaS Deep Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-white/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            What I Know
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Skills</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to build robust full-stack applications —
            from responsive frontends to scalable backend architectures.
          </p>
        </div>

        {/* Category filter tabs — styled as icon+label cards */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const meta = categoryMeta[cat];
            const Icon = meta.icon;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300",
                  isActive
                    ? `bg-gradient-to-r ${meta.accent} text-white border-transparent shadow-lg shadow-blue-500/20`
                    : "bg-card text-muted-foreground border-white/5 hover:border-blue-500/30 hover:text-foreground"
                )}
              >
                <Icon size={15} />
                {meta.label}
              </button>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { label: "Total Skills",  value: skills.length },
            { label: "Frontend",      value: skills.filter(s => s.category === "frontend").length },
            { label: "Backend",       value: skills.filter(s => s.category === "backend").length },
            { label: "Tools",         value: skills.filter(s => s.category === "tools").length },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black text-primary">{s.value}</div>
              <div className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((skill) => {
            const badge = levelBadge(skill.level);
            const meta = categoryMeta[skill.category];
            return (
              <div
                key={skill.name}
                className={cn(
                  "group relative bg-card/40 backdrop-blur-2xl border border-white/5 shadow-xl p-6 rounded-3xl transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
                  meta.hoverBorder,
                  meta.hoverShadow
                )}
              >
                {/* Gradient accent top bar */}
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    meta.accent
                  )}
                />

                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm group-hover:text-foreground transition-colors">
                      {skill.name}
                    </h3>
                    <span
                      className={cn(
                        "inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full border uppercase tracking-wide",
                        meta.chip
                      )}
                    >
                      {meta.label}
                    </span>
                  </div>

                  {/* Level badge */}
                  <span
                    className={cn(
                      "text-[10px] font-bold px-2.5 py-1 rounded-lg border uppercase tracking-wide shrink-0",
                      badge.bg
                    )}
                  >
                    {badge.text}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="w-full bg-secondary/80 h-2 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full bg-gradient-to-r transition-all duration-1000",
                        meta.bar
                      )}
                      style={{ width: skill.level + "%" }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[20, 40, 60, 80, 100].map((mark) => (
                        <span
                          key={mark}
                          className={cn(
                            "text-[9px] font-medium",
                            skill.level >= mark
                              ? "text-primary/60"
                              : "text-muted-foreground/30"
                          )}
                        >
                          ●
                        </span>
                      ))}
                    </div>
                    <span className={cn("text-sm font-black", `bg-gradient-to-r ${meta.bar} bg-clip-text text-transparent`)}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
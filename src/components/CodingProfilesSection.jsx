import { motion } from "framer-motion";
import { ExternalLink, Flame, Target, BookOpen, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { SectionHeader } from "./ui/SectionHeader";
import { SpotlightEffect } from "./ui/SpotlightEffect";

const profiles = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/prynshu09/",
    color: "oklch(0.78 0.15 195)",
    badge: "1500+ rating",
    stats: [{ label: "problems_solved", value: "200+" }, { label: "contest_rating", value: "1500+" }],
    topics: ["Arrays", "Trees", "DP", "Graphs", "Binary Search", "Backtracking"],
    desc: "Daily DSA practice — arrays, sorting, binary search. Weekly contests for timed problem-solving.",
  },
  {
    name: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
    url: "https://www.geeksforgeeks.org/user/prynshumishra/",
    color: "oklch(0.72 0.18 165)",
    badge: "3 Star",
    stats: [{ label: "problems_solved", value: "150+" }, { label: "coding_score", value: "500+" }],
    topics: ["Linked Lists", "Stacks", "Queues", "Hashing", "Sorting", "Greedy"],
    desc: "Core CS fundamentals — data structures, algorithms, and competitive programming for interview prep.",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Prynshumishra",
    color: "oklch(0.78 0.15 195)",
    badge: "Active",
    stats: [{ label: "repositories", value: "20+" }, { label: "contributions", value: "150+" }],
    topics: ["MERN Stack", "Next.JS", "REST APIs", "PHP", "GraphQL", "JWT Auth", "Cloudinary", "CI/CD"],
    desc: "Building MERN projects, REST & GraphQL integrations, and collaborative development workflows.",
  },
];

const dsaTopics = [
  { label: "Arrays & Strings", solved: 60, total: 70 },
  { label: "Trees & Graphs", solved: 45, total: 70 },
  { label: "Dynamic Programming", solved: 30, total: 70 },
  { label: "Binary Search", solved: 20, total: 70 },
  { label: "Sorting & Searching", solved: 35, total: 70 },
  { label: "Backtracking", solved: 15, total: 70 },
];

const achievements = [
  { icon: Flame, label: "30 Days Streak" },
  { icon: Target, label: "200+ Solved" },
  { icon: BookOpen, label: "200+ Articles" },
  { icon: Code2, label: "8+ Projects" },
];

export const CodingProfilesSection = () => {
  return (
    <section id="coding" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.18 165 / 0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader index="02" label="problem_solving" title="Coding" accent="Profiles"
          description="Daily DSA practice and open source contributions across multiple elite coding platforms." />

        {/* Profile cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {profiles.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative terminal-card p-7 flex flex-col glass-hover transition-all duration-300 hover:-translate-y-1"
              >
                <SpotlightEffect />
                <div className="absolute top-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${p.color.replace(')', ' / 0.1)')}`, border: `1px solid ${p.color.replace(')', ' / 0.2)')}` }}>
                      <Icon style={{ color: p.color, width: 18, height: 18 }} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm" style={{ color: "oklch(0.85 0.01 240)" }}>{p.name}</h3>
                      <a href={p.url} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-[10px] flex items-center gap-1 transition-colors duration-200"
                        style={{ color: "oklch(0.55 0.02 240)" }}
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={e => e.currentTarget.style.color = p.color}
                        onMouseLeave={e => e.currentTarget.style.color = "oklch(0.55 0.02 240)"}
                      >
                        view_profile <ExternalLink size={9} />
                      </a>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] px-2.5 py-1 rounded-full"
                    style={{ color: p.color, background: `${p.color.replace(')', ' / 0.1)')}`, border: `1px solid ${p.color.replace(')', ' / 0.2)')}` }}>
                    {p.badge}
                  </span>
                </div>

                <p className="text-xs leading-relaxed mb-5" style={{ color: "oklch(0.55 0.02 240)" }}>{p.desc}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {p.stats.map((s) => (
                    <div key={s.label} className="text-center py-3 rounded-xl border font-mono"
                      style={{ background: "oklch(1 0 0 / 0.03)", borderColor: "oklch(1 0 0 / 0.07)" }}>
                      <div className="text-base font-bold" style={{ color: p.color }}>{s.value}</div>
                      <div className="text-[9px] mt-0.5 tracking-wider" style={{ color: "oklch(0.55 0.02 240)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.topics.map((t) => (
                    <span key={t} className="font-mono text-[9px] px-2 py-0.5 rounded-md border"
                      style={{ color: p.color, background: `${p.color.replace(')', ' / 0.07)')}`, borderColor: `${p.color.replace(')', ' / 0.15)')}` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="terminal-card p-6 md:p-8 mb-6"
        >
          <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.15 195 / 0.5), transparent)" }} />
          <p className="font-mono text-[10px] uppercase tracking-widest text-center mb-5" style={{ color: "oklch(0.55 0.02 240)" }}>
            // achievements_&_milestones
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {achievements.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border font-mono text-xs transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "oklch(0.78 0.15 195 / 0.06)", borderColor: "oklch(0.78 0.15 195 / 0.2)", color: "oklch(0.78 0.15 195)" }}>
                <Icon size={13} />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* DSA Progress */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="terminal-card p-6 md:p-8"
        >
          <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.18 165 / 0.5), transparent)" }} />
          <p className="font-mono text-[10px] uppercase tracking-widest text-center mb-6" style={{ color: "oklch(0.55 0.02 240)" }}>
            // dsa_topic_progress
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            {dsaTopics.map(({ label, solved, total }, i) => {
              const pct = Math.round((solved / total) * 100);
              const color = i % 2 === 0 ? "oklch(0.78 0.15 195)" : "oklch(0.72 0.18 165)";
              return (
                <div key={label} className="space-y-1.5">
                  <div className="flex justify-between font-mono text-xs">
                    <span style={{ color: "oklch(0.75 0.01 240)" }}>{label}</span>
                    <span style={{ color }}>{solved} solved</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "oklch(1 0 0 / 0.06)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08 + 0.3, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

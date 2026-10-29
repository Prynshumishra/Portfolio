import { motion } from "framer-motion";
import { ExternalLink, Flame, Target, BookOpen, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SectionHeader } from "./ui/SectionHeader";
import { SpotlightEffect } from "./ui/SpotlightEffect";

const profiles = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/prynshu09/",
    badge: "1500+ rating",
    stats: [
      { label: "problems_solved", value: "400+" },
      { label: "contest_rating", value: "1500+" },
    ],
    topics: ["Arrays", "Trees", "DP", "Graphs", "Binary Search", "Backtracking", "Database / SQL"],
    desc: "Daily DSA & SQL practice — arrays, sorting, binary search, and relational queries. Weekly contests for timed problem-solving.",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Prynshumishra",
    badge: "Active",
    stats: [
      { label: "repositories", value: "30+" },
      { label: "contributions", value: "780+" },
    ],
    topics: ["MERN Stack", "Next.JS", "Angular", "REST APIs", "PHP", "GraphQL", "JWT Auth", "Cloudinary", "CI/CD"],
    desc: "Building MERN projects, REST & GraphQL integrations, and collaborative development workflows.",
  },
];

const dsaTopics = [
  { label: "Arrays & Strings", solved: 120, total: 140 },
  { label: "Trees & Graphs", solved: 85, total: 110 },
  { label: "Dynamic Programming", solved: 65, total: 90 },
  { label: "Binary Search", solved: 45, total: 60 },
  { label: "Sorting & Searching", solved: 55, total: 70 },
  { label: "Backtracking", solved: 35, total: 50 },
  { label: "Database / SQL", solved: 30, total: 40 },
  { label: "Greedy & Heaps", solved: 40, total: 55 },
];

const achievements = [
  { icon: Flame, label: "30 Days Streak" },
  { icon: Target, label: "400+ Solved" },
  { icon: BookOpen, label: "200+ Articles" },
  { icon: Code2, label: "17+ Projects" },
];

export const CodingProfilesSection = () => {
  return (
    <section id="coding" className="py-24 px-4 relative overflow-hidden">
      <div className="container w-full mx-auto relative z-10">
        <SectionHeader
          index="02"
          label="problem_solving"
          title="Coding"
          accent="Profiles"
          description="Daily DSA practice and open source contributions across elite coding platforms."
        />

        {/* Profile cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {profiles.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative terminal-card p-7 flex flex-col glass-hover transition-all duration-300 hover:-translate-y-1 text-left"
              >
                <SpotlightEffect />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110 bg-[#FAF7F2] border border-[#E2D7C9]">
                      <Icon className="text-[#231915]" style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[#231915]">{p.name}</h3>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] flex items-center gap-1 text-[#5A4D44] hover:text-[#5C4033] transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        view_profile <ExternalLink size={9} />
                      </a>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] font-semibold px-3 py-1 rounded-full bg-[#231915] text-[#FAF7F2]">
                    {p.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed mb-5 text-[#5A4D44]">{p.desc}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {p.stats.map((s) => (
                    <div
                      key={s.label}
                      className="text-center py-3.5 rounded-xl border border-[#E2D7C9] bg-[#FAF7F2] font-mono"
                    >
                      <div className="text-lg font-bold text-[#231915]">{s.value}</div>
                      <div className="text-[10px] mt-0.5 tracking-wider text-[#5A4D44]">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.topics.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-lg border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] font-medium"
                    >
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
          <p className="font-mono text-[10px] uppercase tracking-widest text-center mb-5 text-[#5A4D44]">
            // achievements_&amp;_milestones
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {achievements.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] font-mono text-xs font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon size={13} className="text-[#5C4033]" />
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
          <p className="font-mono text-[10px] uppercase tracking-widest text-center mb-6 text-[#5A4D44]">
            // dsa_topic_progress
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            {dsaTopics.map(({ label, solved, total }, i) => {
              const pct = Math.round((solved / total) * 100);
              return (
                <div key={label} className="space-y-1.5">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-[#231915] font-semibold">{label}</span>
                    <span className="text-[#5C4033] font-medium">{solved} solved</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden bg-[#F2ECE4] border border-[#E2D7C9]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08 + 0.3, ease: "easeOut" }}
                      className="h-full rounded-full bg-[#231915]"
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

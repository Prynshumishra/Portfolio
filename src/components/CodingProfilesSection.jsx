import { ExternalLink, TrendingUp, Flame, Award, BookOpen, Target, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

const profiles = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/prynshu09/",
    color: "from-indigo-400 to-blue-500",
    hoverBorder: "hover:border-indigo-400/50",
    hoverShadow: "hover:shadow-indigo-500/10",
    iconColor: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    badge: { label: "Pupil", color: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30" },
    stats: [
      { label: "Problems Solved", value: "150+" },
      { label: "Contest Rating", value: "1500+" },
    ],
    topics: ["Arrays", "Trees", "DP", "Graphs", "Binary Search", "Backtracking"],
    description:
      "Solving DSA problems daily — arrays, sorting and binary search. Participated in weekly contests to sharpen problem-solving under time pressure.",
  },
  {
    name: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
    url: "https://www.geeksforgeeks.org/user/prynshumishra/",
    color: "from-blue-400 to-sky-500",
    hoverBorder: "hover:border-blue-400/50",
    hoverShadow: "hover:shadow-blue-500/10",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    badge: { label: "3 Star", color: "bg-blue-500/15 text-blue-400 border-blue-500/30" },
    stats: [
      { label: "Problems Solved", value: "150+" },
      { label: "Coding Score", value: "500+" },
    ],
    topics: ["Linked Lists", "Stacks", "Queues", "Hashing", "Sorting", "Greedy"],
    description:
      "Practicing core CS fundamentals — data structures, algorithms, and competitive programming with a focus on interview prep and computer science theory.",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Prynshumishra",
    color: "from-sky-400 to-blue-500",
    hoverBorder: "hover:border-sky-400/50",
    hoverShadow: "hover:shadow-sky-500/10",
    iconColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
    badge: { label: "Active", color: "bg-sky-500/15 text-sky-400 border-sky-500/30" },
    stats: [
      { label: "Repositories", value: "8+" },
      { label: "Contributions", value: "40+" },
    ],
    topics: ["MERN Stack", "REST APIs", "GraphQL", "JWT Auth", "Cloudinary", "CI/CD"],
    description:
      "Building MERN stack projects, REST & GraphQL API integrations, cloud deployments, and contributing to collaborative development workflows.",
  },
];

const dsaTopics = [
  { label: "Arrays & Strings", solved: 60, color: "bg-blue-400" },
  { label: "Trees & Graphs", solved: 45, color: "bg-indigo-400" },
  { label: "Dynamic Programming", solved: 30, color: "bg-sky-400" },
  { label: "Binary Search", solved: 20, color: "bg-blue-500" },
  { label: "Sorting & Searching", solved: 35, color: "bg-indigo-500" },
  { label: "Backtracking", solved: 15, color: "bg-sky-500" },
];

const achievements = [
  { icon: Flame, label: "30 Days Streak", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Target, label: "150+ Solved", color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { icon: BookOpen, label: "200+ Articles", color: "text-sky-400", bg: "bg-sky-500/10" },
  { icon: Code2, label: "8+ Projects", color: "text-blue-500", bg: "bg-blue-500/10" },
];

export const CodingProfilesSection = () => {
  return (
    <section id="coding" className="py-24 px-4 relative overflow-hidden">
      {/* SaaS Deep Background Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* ── Section header ── */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-white/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Problem Solving
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground"
          >
            Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Profiles</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed"
          >
            I actively practice Data Structures &amp; Algorithms and contribute to
            open-source projects across multiple elite coding platforms.
          </motion.p>
        </div>

        {/* ── Profile cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                key={profile.name}
                className={`group relative bg-card/40 backdrop-blur-2xl border border-white/5 shadow-xl p-7 rounded-3xl ${profile.hoverBorder} hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300 flex flex-col overflow-hidden`}
              >
                {/* Gradient accent top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${profile.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon + name + badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl ${profile.bgColor} group-hover:scale-110 transition-transform duration-300 shrink-0`}
                    >
                      <Icon className={`w-5 h-5 ${profile.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-base group-hover:text-primary transition-colors duration-300">
                        {profile.name}
                      </h3>
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground flex items-center gap-1 hover:text-primary transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Profile <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${profile.badge.color}`}>
                    {profile.badge.label}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {profile.description}
                </p>

                {/* Stats — 2×2 grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {profile.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-secondary/50 border border-border/30 rounded-xl px-3 py-2.5 text-center"
                    >
                      <div className="text-base font-black text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-0.5 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Topic tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {profile.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-primary/8 text-primary border border-primary/15"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                
              </motion.div>
            );
          })}
        </div>

        {/* ── Achievements strip ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group relative bg-card/40 backdrop-blur-2xl border border-white/5 shadow-xl rounded-3xl p-6 md:p-8 mb-8 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80" />
          <p className="text-[10px] font-bold text-foreground uppercase tracking-widest mb-4 text-center">
            Achievements &amp; Milestones
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {achievements.map(({ icon: Icon, label, color, bg }) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl ${bg} border border-border/30 hover:-translate-y-0.5 transition-transform duration-300`}
              >
                <Icon size={14} className={color} />
                <span className="text-xs font-semibold text-foreground/80">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── DSA Topic Progress card ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="group relative bg-card/40 backdrop-blur-2xl border border-white/5 shadow-xl rounded-3xl p-6 md:p-8 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80" />
          <p className="text-[10px] font-bold text-foreground uppercase tracking-widest mb-5 text-center">
            DSA Topics Progress
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {dsaTopics.map(({ label, solved, color }, i) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                key={label}
                className="group/item relative p-3 rounded-xl border border-transparent hover:border-border/60 hover:bg-secondary/40 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-foreground/80 group-hover/item:text-foreground transition-colors duration-300">
                    {label}
                  </span>
                  <span className="text-xs font-bold text-primary group-hover/item:scale-110 inline-block transition-transform duration-300">
                    {solved} solved
                  </span>
                </div>
                <div className="w-full h-1.5 bg-secondary/70 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${color} origin-left transition-all duration-500 group-hover/item:opacity-100 group-hover/item:shadow-[0_0_8px_2px] opacity-80`}
                    style={{
                      width: `${Math.min((solved / 70) * 100, 100)}%`,
                      animation: "grow 1.5s ease-out",
                    }}
                  />
                </div>
                {/* Percentage tooltip on hover */}
                <span className="absolute right-3 -top-5 text-[10px] font-bold text-primary glass-card px-1.5 py-0.5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none shadow-sm">
                  {Math.round(Math.min((solved / 70) * 100, 100))}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};


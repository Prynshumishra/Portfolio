import { ExternalLink, TrendingUp, Flame, Award, BookOpen, Target, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

const profiles = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/prynshu09/",
    color: "from-fuchsia-500 to-purple-600",
    hoverBorder: "hover:border-fuchsia-400/50",
    hoverShadow: "hover:shadow-fuchsia-500/10",
    iconColor: "text-fuchsia-500",
    bgColor: "bg-fuchsia-500/10",
    badge: { label: "Pupil", color: "bg-fuchsia-500/15 text-fuchsia-500 border-fuchsia-500/30" },
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
    color: "from-cyan-400 to-blue-500",
    hoverBorder: "hover:border-cyan-400/50",
    hoverShadow: "hover:shadow-cyan-400/10",
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    badge: { label: "3 Star", color: "bg-cyan-400/15 text-cyan-400 border-cyan-400/30" },
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
    color: "from-blue-500 to-indigo-500",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-blue-500/10",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    badge: { label: "Active", color: "bg-blue-500/15 text-blue-500 border-blue-500/30" },
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
  { label: "Arrays & Strings", solved: 60, color: "bg-cyan-400" },
  { label: "Trees & Graphs", solved: 45, color: "bg-blue-500" },
  { label: "Dynamic Programming", solved: 30, color: "bg-indigo-500" },
  { label: "Binary Search", solved: 20, color: "bg-violet-500" },
  { label: "Sorting & Searching", solved: 35, color: "bg-purple-500" },
  { label: "Backtracking", solved: 15, color: "bg-fuchsia-500" },
];

const achievements = [
  { icon: Flame, label: "30 Days Streak", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { icon: Target, label: "150+ Solved", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: BookOpen, label: "200+ Articles", color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { icon: Code2, label: "8+ Projects", color: "text-fuchsia-400", bg: "bg-fuchsia-400/10" },
];

export const CodingProfilesSection = () => {
  return (
    <section id="coding" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/3 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-primary/3 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-2"
          >
            Problem Solving
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Coding <span className="text-primary">Profiles</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm leading-relaxed"
          >
            I actively practice Data Structures &amp; Algorithms and contribute to
            open-source projects across multiple coding platforms.
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
                className={`group relative glass-card glass-card-hover p-6 ${profile.hoverBorder} flex flex-col`}
              >
                {/* Gradient accent top bar */}
                <div
                  className={`absolute top-0 left-6 right-6 h-0.5 rounded-b-full bg-gradient-to-r ${profile.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
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
          className="group relative glass-card p-5 md:p-6 mb-6"
        >
          <div className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full bg-gradient-to-r from-blue-400 via-indigo-500 to-fuchsia-500 opacity-60" />
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
          className="group relative glass-card p-5 md:p-6"
        >
          <div className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-60" />
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


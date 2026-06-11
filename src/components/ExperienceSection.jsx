import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { SpotlightEffect } from "./ui/SpotlightEffect";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "MarTech Union",
    duration: "Aug 2025 – April 2026",
    location: "Remote",
    current: true,
    color: "oklch(0.78 0.15 195)",
    description: [
      "Collaborated on 5+ full-stack projects using Next.js, React, Node.js, and MySQL, delivering production-ready applications with user-focused UI and improved accessibility.",
      "Boosted performance and SEO scores from 50 to 90+ through advanced optimizations.",
      "Pioneered the integration of a chatbot solution into 3 WordPress sites, slashing customer wait times by 20% and directly improving user satisfaction scores.",
      "Built and customized WordPress plugins using HTML, CSS, JS, and MySQL — integrated CF7, Amelia, ChatBot, and GTM4WP.",
    ],
    skills: ["React", "Node.js", "Next.JS", "Express.js", "MongoDB", "REST APIs", "CI/CD", "WordPress", "JavaScript", "TypeScript", "MySQL"],
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "Unifindss Innovations Pvt. Ltd.",
    duration: "May 2025 – Jul 2025",
    location: "Remote",
    current: false,
    color: "oklch(0.72 0.18 165)",
    description: [
      "Designed responsive UIs using React, Framer Motion, Tailwind CSS, and MongoDB.",
      "Built a full-stack counseling platform for 100+ users — reduced load time by 25% through perf optimization.",
      "Developed scalable backend systems with secure authentication, payment integration, and analytics.",
      "Resolved critical UI/UX bugs and optimized API performance for better user experience.",
    ],
    skills: ["React", "MongoDB", "Node.js", "REST APIs", "JWT", "Tailwind CSS", "Framer Motion"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.15 195 / 0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader index="05" label="work_history" title="Professional" accent="Journey"
          description="A timeline of my professional growth delivering full-stack applications for real-world impact." />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px"
            style={{ background: "linear-gradient(to bottom, oklch(0.78 0.15 195 / 0.5), oklch(0.72 0.18 165 / 0.2), transparent)" }} />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-5 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-7 z-10 shadow-[0_0_12px_currentColor]"
                    style={{ background: exp.color, color: exp.color }}
                  >
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: exp.color }} />
                    )}
                  </div>

                  {/* Mobile card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="md:hidden pl-14"
                  >
                    <ExperienceCard exp={exp} />
                  </motion.div>

                  {/* Desktop alternating layout */}
                  <div className="hidden md:flex items-start">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className={`w-1/2 pr-12 flex justify-end ${!isLeft ? "invisible" : ""}`}
                    >
                      {isLeft && <ExperienceCard exp={exp} />}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className={`w-1/2 pl-12 flex justify-start ${isLeft ? "invisible" : ""}`}
                    >
                      {!isLeft && <ExperienceCard exp={exp} />}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp }) => (
  <div
    className="group relative terminal-card p-6 md:p-8 w-full text-left glass-hover transition-all duration-300 hover:-translate-y-1"
  >
    <SpotlightEffect />
    <div className="absolute top-0 inset-x-0 h-px opacity-80"
      style={{ background: `linear-gradient(90deg, transparent, ${exp.color}, transparent)` }} />

    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
      <div>
        <h4 className="text-lg font-bold font-display" style={{ color: "oklch(0.93 0.01 240)" }}>{exp.role}</h4>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
          <span className="text-sm font-medium" style={{ color: "oklch(0.75 0.01 240)" }}>{exp.company}</span>
          <span className="hidden sm:block w-1 h-1 rounded-full" style={{ background: "oklch(1 0 0 / 0.2)" }} />
          <span className="flex items-center gap-1 text-xs font-mono" style={{ color: "oklch(0.55 0.02 240)" }}>
            <MapPin size={10} /> {exp.location}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs shrink-0"
        style={{ background: `${exp.color.replace(')', ' / 0.08)')}`, border: `1px solid ${exp.color.replace(')', ' / 0.2)')}`, color: exp.color }}>
        <Calendar size={11} />
        {exp.duration}
      </div>
    </div>

    {/* Bullet points */}
    <ul className="space-y-2.5 mb-5">
      {exp.description.map((point, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.color }} />
          <span style={{ color: "oklch(0.55 0.02 240)" }}>{point}</span>
        </li>
      ))}
    </ul>

    {/* Skills */}
    <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: "1px solid oklch(1 0 0 / 0.07)" }}>
      {exp.skills.map((s) => (
        <span key={s} className="font-mono text-[10px] px-2.5 py-1 rounded-lg border"
          style={{ color: "oklch(0.75 0.01 240)", background: "oklch(1 0 0 / 0.03)", borderColor: "oklch(1 0 0 / 0.09)" }}>
          {s}
        </span>
      ))}
    </div>
  </div>
);

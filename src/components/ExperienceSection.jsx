import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { SpotlightEffect } from "./ui/SpotlightEffect";

const experiences = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "OnGraph Technologies",
    duration: "Jul 2026 – Sept 2026",
    location: "Remote",
    current: true,
    description: [
      "Spearheaded development of a multi-tenant airport parking SaaS and admin platform across 7+ websites and 2,500+ bookings using Node.js, Next.js, and React, increasing operational efficiency by 35% and lowering transactional overhead by 40%.",
      "Built and maintained 50+ REST APIs in Node.js and Express.js, refactoring high-traffic endpoints and indexing MySQL query joins to cut average server response latency by 45%.",
      "Architected secure tenant data isolation, hierarchical RBAC permissions, automated PDF invoice generation, and Stripe webhook pipelines for payment processing and recurring SaaS subscriptions.",
      "Engineered real-time WebSocket notification channels, automated task scheduling (node-cron for slot inventory & booking sync), transactional emailing via Nodemailer, and post-booking customer feedback surveys for successful launches.",
      "Diagnosed and resolved 10+ critical production incidents — fixing Stripe payment edge cases, SMTP timeouts, cron scheduling failures, and database deadlocks — raising system availability from 96.5% to 99.9%.",
      "Built interactive management dashboards using Tailwind CSS, Shadcn UI, and FullCalendar with ApexCharts analytics pipelines and downloadable financial reports (CSV/PDF).",
      "Implemented CI/CD pipelines and automated API validation checks in collaboration with a 4-member QA team, reducing post-release bug tickets by 30% over 3 release cycles.",
    ],
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Express.js",
      "MySQL",
      "50+ REST APIs",
      "WebSockets",
      "Stripe",
      "RBAC",
      "Tailwind CSS",
      "Shadcn UI",
      "FullCalendar",
      "ApexCharts",
      "node-cron",
      "Nodemailer / SMTP",
      "Invoice Generation",
      "CI/CD Pipelines",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "MarTech Union",
    duration: "Aug 2025 – June 2026",
    location: "Remote",
    current: false,
    description: [
      "Collaborated on 5+ full-stack projects using Next.js, React, Node.js, and MySQL, delivering production-ready applications with user-focused UI and improved accessibility.",
      "Boosted performance and SEO scores from 50 to 90+ through advanced optimizations.",
      "Pioneered the integration of a chatbot solution into 3 WordPress sites, slashing customer wait times by 20% and directly improving user satisfaction scores.",
      "Built and customized WordPress plugins using HTML, CSS, JS, and MySQL — integrated CF7, Amelia, ChatBot, and GTM4WP.",
    ],
    skills: [
      "React",
      "Node.js",
      "Next.JS",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "CI/CD",
      "WordPress",
      "JavaScript",
      "TypeScript",
      "MySQL",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 relative overflow-hidden bg-[#F2ECE4]/80 border-y border-[#E2D7C9]"
    >
      <div className="container w-full mx-auto relative z-10">
        <SectionHeader
          index="05"
          label="work_history"
          title="Professional"
          accent="Journey"
          description="A timeline of my professional growth delivering full-stack applications for real-world impact."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px bg-[#D4C5B4]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-5 md:left-1/2 w-3.5 h-3.5 rounded-full -translate-x-1/2 mt-7 z-10 bg-[#231915] border-2 border-[#FAF7F2] shadow-[0_0_0_3px_#E2D7C9]">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full animate-ping opacity-40 bg-[#5C4033]" />
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
  <div className="group relative terminal-card p-6 md:p-8 w-full text-left glass-hover transition-all duration-300 hover:-translate-y-1">
    <SpotlightEffect />

    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 pb-4 border-b border-[#E2D7C9]">
      <div>
        <h4 className="text-lg font-bold font-display text-[#231915]">{exp.role}</h4>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
          <span className="text-sm font-semibold text-[#5C4033]">{exp.company}</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D4C5B4]" />
          <span className="flex items-center gap-1 text-xs font-mono text-[#5A4D44]">
            <MapPin size={10} /> {exp.location}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs shrink-0 bg-[#FAF7F2] border border-[#E2D7C9] text-[#231915] font-medium">
        <Calendar size={11} className="text-[#5C4033]" />
        {exp.duration}
      </div>
    </div>

    {/* Bullet points */}
    <ul className="space-y-2.5 mb-5">
      {exp.description.map((point, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-[#5C4033]" />
          <span className="text-[#5A4D44]">{point}</span>
        </li>
      ))}
    </ul>

    {/* Skills */}
    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E2D7C9]">
      {exp.skills.map((s) => (
        <span
          key={s}
          className="font-mono text-[10px] px-2.5 py-1 rounded-lg border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] font-medium"
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

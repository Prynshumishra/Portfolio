import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Code2,
  GraduationCap,
  BookOpen,
  Award,
  Layout,
  Server,
  Database,
  Globe,
  Link,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { SpotlightEffect } from "./ui/SpotlightEffect";

const stats = [
  { value: "17+", label: "Production Apps", sub: "Incl. 7 freelance projects" },
  { value: "45%", label: "Latency Reduced", sub: "API & query optimization" },
  { value: "99.9%", label: "System Uptime", sub: "95+ PageSpeed scores" },
  { value: "780+", label: "GitHub Commits", sub: "Clean, resilient code" },
];

const coreStack = [
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "TypeScript",
  "Spring Boot",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "OpenAI / Gemini",
  "TensorFlow.js",
];

const services = [
  {
    icon: Layout,
    title: "Frontend Engineering",
    desc: "React, Next.js, Angular, TypeScript, and Tailwind CSS — responsive, high-speed interfaces with 95+ PageSpeed scores.",
  },
  {
    icon: Server,
    title: "Backend & API Architecture",
    desc: "Node.js, Express, and Spring Boot — low-latency REST & GraphQL APIs with RBAC & JWT authentication.",
  },
  {
    icon: Database,
    title: "Database & Caching",
    desc: "MySQL, PostgreSQL, MongoDB, and Redis — deadlock resolution, query tuning, and high-throughput caching.",
  },
  {
    icon: Globe,
    title: "Multi-Tenant SaaS Systems",
    desc: "End-to-end production platforms for Indian and international clients built for 99.9% uptime.",
  },
  {
    icon: Link,
    title: "AI & ML Integrations",
    desc: "OpenAI, Gemini, and TensorFlow.js — intelligent workflows, LLM tool calling, and RAG pipelines.",
  },
  {
    icon: Rocket,
    title: "DevOps & Production Reliability",
    desc: "Docker, CI/CD, cron systems, and live on-call bottleneck resolution to keep production systems resilient.",
  },
];

const education = [
  {
    degree: "B.Tech — Information Technology",
    school: "Madan Mohan Malaviya University of Technology",
    place: "Gorakhpur, UP",
    period: "Nov 2022 – June 2026",
    badge: "7.11 CGPA",
    icon: BookOpen,
  },
  {
    degree: "Class XII — Senior Secondary (CBSE)",
    school: "Jagat Taran Golden Jubilee School",
    place: "Prayagraj, UP",
    period: "2020 – 2021",
    badge: "89%",
    icon: Award,
  },
  {
    degree: "Class X — Secondary (CBSE)",
    school: "Jagat Taran Golden Jubilee School",
    place: "Prayagraj, UP",
    period: "2018 – 2019",
    badge: "85.8%",
    icon: Award,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export const AboutSection = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="py-24 px-4 relative overflow-hidden bg-[#F2ECE4]/80 border-y border-[#E2D7C9]"
    >
      <div className="container w-full mx-auto relative z-10">
        <SectionHeader
          index="01"
          label="who_i_am"
          title="About"
          accent="Me"
          description="Full-Stack Developer (B.Tech IT, MMMUT) building fast, scalable web platforms and multi-tenant systems."
        />

        {/* ── Top Bento Grid: Profile Card + Narrative & Metrics ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-stretch">
          {/* Left Column: Profile Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-4 terminal-card p-6 md:p-7 flex flex-col justify-between text-left"
          >
            <SpotlightEffect />

            <div className="flex flex-col flex-1">
              {/* Top status bar */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#FAF7F2] border border-[#E2D7C9] text-[#231915]">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                  Available for hire
                </span>
                <span className="font-mono text-[11px] text-[#5A4D44]">// B.Tech IT · MMMUT</span>
              </div>

              {/* Framed Portrait (Full Width & Full Height of available card space) */}
              <div className="relative w-full flex-1 min-h-[340px] sm:min-h-[400px] rounded-2xl overflow-hidden border border-[#E2D7C9] bg-[#F2ECE4] shadow-[0_12px_28px_-10px_rgba(35,25,21,0.14)] group">
                {!imgError ? (
                  <img
                    src="/projects/profile.jpg"
                    alt="Priyanshu Mishra"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#F2ECE4]">
                    <span className="font-display text-5xl font-bold text-[#231915]">PM</span>
                  </div>
                )}

                {/* Subtle bottom gradient + name overlay badge */}
                <div
                  className="absolute inset-x-0 bottom-0 p-4 pt-12 flex items-end justify-between"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(30, 21, 17, 0.92) 0%, rgba(30, 21, 17, 0.45) 55%, transparent 100%)",
                  }}
                >
                  <div>
                    <p className="font-display font-bold text-base text-[#FAF7F2] leading-tight">
                      Priyanshu Mishra
                    </p>
                    <p className="font-mono text-[11px] text-[#E2D7C9] mt-0.5">
                      Full-Stack Developer
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Compact metadata list + CTA */}
            <div className="mt-5 pt-5 border-t border-[#E2D7C9] space-y-3">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D7C9]">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#5A4D44]">
                    Location
                  </p>
                  <p className="text-xs font-semibold text-[#231915] mt-0.5 flex items-center gap-1.5">
                    <MapPin size={12} className="shrink-0 text-[#5C4033]" />
                    Prayagraj, India
                  </p>
                </div>
                <div className="px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D7C9]">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#5A4D44]">
                    Track Record
                  </p>
                  <p className="text-xs font-semibold text-[#231915] mt-0.5 flex items-center gap-1.5">
                    <Sparkles size={12} className="shrink-0 text-[#5C4033]" />
                    17+ Prod Apps
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-semibold transition-all duration-300 bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] shadow-[0_6px_18px_rgba(35,25,21,0.16)] hover:-translate-y-0.5"
              >
                <Mail size={14} />
                get_in_touch()
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Narrative Bio, Stack & Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-8 terminal-card p-7 md:p-9 flex flex-col justify-between text-left"
          >
            <SpotlightEffect />

            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#5A4D44] mb-2">
                  <span className="text-[#5C4033] font-semibold">//</span> about_me
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-[#231915] leading-snug">
                  High-Ownership Full-Stack Engineering{" "}
                  <span className="text-[#D4C5B4] font-normal">&amp;</span>{" "}
                  <span className="text-[#5C4033]">Scalable Systems</span>
                </h3>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3.5 text-sm md:text-[15px] leading-relaxed text-[#5A4D44]">
                <p>
                  I’m{" "}
                  <span className="text-[#231915] font-semibold">Priyanshu Mishra</span>, a{" "}
                  <span className="text-[#231915] font-semibold">
                    Full-Stack Developer (B.Tech IT, MMMUT)
                  </span>{" "}
                  building fast, scalable web platforms and multi-tenant systems.
                </p>
                <p>
                  Through roles at{" "}
                  <span className="text-[#231915] font-semibold">OnGraph Technologies</span> and{" "}
                  <span className="text-[#231915] font-semibold">MarTech Union</span>, plus an active freelance practice, I’ve shipped{" "}
                  <span className="text-[#231915] font-semibold">17+ production web apps</span>—including{" "}
                  <span className="text-[#231915] font-semibold">
                    7 end-to-end freelance projects
                  </span>{" "}
                  for Indian and international clients. I specialize in high-ownership engineering: cutting API latency by{" "}
                  <span className="text-[#5C4033] font-semibold">45%</span>, boosting PageSpeed scores to{" "}
                  <span className="text-[#5C4033] font-semibold">95+</span>, and resolving live on-call production bugs (deadlocks, cron failures, bottlenecks) to maintain{" "}
                  <span className="text-[#5C4033] font-semibold">99.9% uptime</span>.
                </p>
                <p>
                  <span className="text-[#231915] font-semibold">Core Stack:</span> React, Next.js, Angular, Node.js, TypeScript, and Spring Boot—backed by MySQL, PostgreSQL, MongoDB, Redis, Docker, and AI integrations (OpenAI, Gemini, TensorFlow.js).{" "}
                  <span className="text-[#231915] font-semibold">780+ GitHub commits</span> strong, I build clean, resilient software that scales.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {[
                  "17+ production apps & 7 global freelance deliveries",
                  "45% API latency reduction & 95+ PageSpeed scores",
                  "Live on-call debugging & 99.9% production uptime",
                  "780+ GitHub commits across full-stack & AI systems",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D7C9] text-xs font-medium text-[#231915]"
                  >
                    <CheckCircle2 size={14} className="text-[#5C4033] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Core Stack Pills */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#5A4D44] mb-2.5">
                  // core_stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {coreStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#E2D7C9] text-[#231915] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 4-Stat Impact Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7 pt-6 border-t border-[#E2D7C9]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border border-[#E2D7C9] bg-[#FAF7F2] text-left transition-colors hover:border-[#5C4033]"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-[#231915] leading-none">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] font-semibold text-[#5C4033] mt-2">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#5A4D44] mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Education Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="terminal-card mb-10 p-7 md:p-9"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#E2D7C9]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#231915] text-[#FAF7F2]">
                <GraduationCap size={17} />
              </div>
              <div className="text-left">
                <h3 className="font-display font-bold text-lg text-[#231915] leading-none">
                  Academic Background
                </h3>
                <p className="font-mono text-[11px] text-[#5A4D44] mt-1">
                  // education_&_qualifications
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative rounded-2xl p-5 border border-[#E2D7C9] bg-[#FAF7F2] hover:bg-[#FFFFFF] hover:border-[#5C4033] transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E2D7C9]">
                      <edu.icon size={13} className="text-[#5C4033]" />
                    </div>
                    <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#231915] text-[#FAF7F2]">
                      {edu.badge}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#5C4033] mb-1">
                    {edu.degree}
                  </p>
                  <h4 className="font-semibold text-sm leading-snug text-[#231915]">
                    {edu.school}
                  </h4>
                </div>

                <div className="flex items-center justify-between pt-3 mt-4 border-t border-[#E2D7C9] font-mono text-[11px] text-[#5A4D44]">
                  <span>{edu.place}</span>
                  <span>{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Services / Capabilities Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative terminal-card p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 glass-hover text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110 bg-[#FAF7F2] border border-[#E2D7C9] group-hover:bg-[#231915] group-hover:border-[#231915]">
                  <s.icon
                    size={16}
                    className="text-[#5C4033] group-hover:text-[#FAF7F2] transition-colors"
                  />
                </div>
                <span className="font-mono text-xs text-[#D4C5B4] group-hover:text-[#5C4033] transition-colors">
                  0{i + 1}
                </span>
              </div>
              <h4 className="font-display font-bold text-base text-[#231915] mb-2">
                {s.title}
              </h4>
              <p className="text-sm leading-relaxed text-[#5A4D44]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

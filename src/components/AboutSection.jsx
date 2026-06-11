import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Code2, GraduationCap, BookOpen, Award, Layout, Server, Database, Globe, Link, Rocket } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { SpotlightEffect } from "./ui/SpotlightEffect";

const stats = [
  { value: "12", label: "months exp", color: "oklch(0.78 0.15 195)" },
  { value: "8+", label: "projects", color: "oklch(0.72 0.18 165)" },
  { value: "20+", label: "technologies", color: "oklch(0.78 0.15 195)" },
  { value: "10+", label: "REST APIs", color: "oklch(0.72 0.18 165)" },
];

const services = [
  { icon: Layout, title: "Frontend Dev", desc: "React, Next.js, TypeScript, Tailwind — pixel-perfect, accessible UIs.", color: "oklch(0.78 0.15 195)" },
  { icon: Server, title: "Backend & APIs", desc: "Node.js, Express, Spring Boot — REST & GraphQL APIs with JWT auth.", color: "oklch(0.72 0.18 165)" },
  { icon: Database, title: "Database Design", desc: "PostgreSQL, MySQL, MongoDB, Redis — schemas, indexing, caching.", color: "oklch(0.78 0.15 195)" },
  { icon: Globe, title: "Full Stack Apps", desc: "MERN, Next.js, PHP — end-to-end apps with role-based access.", color: "oklch(0.72 0.18 165)" },
  { icon: Link, title: "API Integration", desc: "Third-party APIs, payments, chatbots, and automation pipelines.", color: "oklch(0.78 0.15 195)" },
  { icon: Rocket, title: "Deployment", desc: "CI/CD, Vercel, cloud deployment and performance tuning.", color: "oklch(0.72 0.18 165)" },
];

const education = [
  {
    degree: "B.Tech — Information Technology",
    school: "Madan Mohan Malaviya University of Technology",
    place: "Gorakhpur, UP",
    period: "Nov 2022 – May 2026",
    badge: "Pursuing",
    color: "oklch(0.78 0.15 195)",
    icon: BookOpen,
  },
  {
    degree: "Class XII — CBSE",
    school: "Jagat Taran Golden Jubilee School",
    place: "Prayagraj, UP",
    period: "2020 - 2021",
    badge: "89%",
    color: "oklch(0.72 0.18 165)",
    icon: Award,
  },
  {
    degree: "Class X — CBSE",
    school: "Jagat Taran Golden Jubilee School",
    place: "Prayagraj, UP",
    period: "2018 - 2019",
    badge: "85.8%",
    color: "oklch(0.78 0.15 195)",
    icon: Award,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export const AboutSection = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.15 195 / 0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeader index="01" label="who_i_am" title="About" accent="Me" description="A Full Stack Developer skilled in MERN, Next.js, PHP, PostgreSQL, MySQL, Redis, Spring Boot, TypeScript, GraphQL — building production-ready applications end-to-end." />

        {/* Bio + Photo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative terminal-card overflow-hidden mb-8"
        >
          <SpotlightEffect />
          {/* Cyan accent line */}
          <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.15 195 / 0.6), transparent)" }} />

          <div className="p-7 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              {/* Photo column */}
              <div className="lg:col-span-2 flex flex-col items-center gap-5">
                <div className="relative group/photo">
                  <div className="absolute -inset-[2px] rounded-2xl pointer-events-none"
                    style={{ background: "linear-gradient(135deg, oklch(0.78 0.15 195 / 0.4), transparent 40%, oklch(0.72 0.18 165 / 0.3))" }} />
                  <div className="relative w-52 h-60 md:w-full md:h-72 rounded-2xl overflow-hidden" style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}>
                    {!imgError ? (
                      <img src="/projects/profile.jpg" alt="Priyanshu Mishra"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/photo:scale-105"
                        onError={() => setImgError(true)} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ background: "oklch(0.78 0.15 195 / 0.1)" }}>
                        <span className="font-display text-5xl font-bold" style={{ color: "oklch(0.78 0.15 195 / 0.6)" }}>PM</span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-16" style={{ background: "linear-gradient(transparent, oklch(0.09 0.025 250 / 0.8))" }} />
                  </div>
                </div>

                {/* Info chips */}
                <div className="w-full space-y-2">
                  {[
                    { icon: "◉", text: "Available for hire", color: "oklch(0.72 0.18 165)" },
                    { icon: null, component: <MapPin size={12} />, text: "Prayagraj, UP, India", color: "oklch(0.55 0.02 240)" },
                    { icon: null, component: <Code2 size={12} />, text: "Full Stack Developer", color: "oklch(0.55 0.02 240)" },
                  ].map((chip, i) => (
                    <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs"
                      style={{ background: "oklch(1 0 0 / 0.03)", border: "1px solid oklch(1 0 0 / 0.07)", color: chip.color }}>
                      {chip.icon ? <span>{chip.icon}</span> : <span style={{ color: "oklch(0.78 0.15 195)" }}>{chip.component}</span>}
                      <span className={i === 0 ? "" : "text-[oklch(0.75_0.01_240)]"}>{chip.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-3 space-y-5">
                <h3 className="text-xl font-bold font-display">Full Stack Developer <span style={{ color: "oklch(0.78 0.15 195 / 0.5)" }}>|</span> Problem Solver</h3>

                <div className="space-y-3 text-sm leading-relaxed text-left" style={{ color: "oklch(0.55 0.02 240)" }}>
                  <p>
                    Full Stack Developer with{" "}
                    <span style={{ color: "oklch(0.93 0.01 240)" }}>12 months of internship experience</span>{" "}
                    shipped{" "}
                    <span style={{ color: "oklch(0.93 0.01 240)" }}>5 production client websites</span>{" "}
                    from zero to live — each delivered on time, within scope, and used by real users.
                  </p>
                  <p>
                    Built{" "}
                    <span style={{ color: "oklch(0.78 0.15 195)" }}>10+ REST & GraphQL APIs</span>{" "}
                    powering authentication, payments, and third-party integrations — reducing manual workflows by over{" "}
                    <span style={{ color: "oklch(0.78 0.15 195)" }}>60%</span>{" "}
                    across client projects.
                  </p>
                  <p>
                    Skilled across the full stack:{" "}
                    <span style={{ color: "oklch(0.93 0.01 240)" }}>MERN · Next.js · PHP · PostgreSQL · MySQL · Redis · Spring Boot · TypeScript · GraphQL · Tailwind</span>{" "}
                    — from database schema design to pixel-perfect UIs.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center py-4 rounded-xl border font-mono"
                      style={{ background: "oklch(1 0 0 / 0.03)", borderColor: "oklch(1 0 0 / 0.07)" }}>
                      <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-[10px] mt-1 tracking-wider uppercase" style={{ color: "oklch(0.55 0.02 240)" }}>{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-1">
                  <a href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold transition-all duration-300 bg-[oklch(0.78_0.15_195)] text-[oklch(0.1_0.02_240)] hover:shadow-[0_0_30px_oklch(0.78_0.15_195/0.4)] hover:-translate-y-0.5">
                    <Mail size={14} />
                    get_in_touch()
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="terminal-card mb-8 p-7 md:p-10"
        >
          <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.18 165 / 0.5), transparent)" }} />
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-lg" style={{ background: "oklch(0.78 0.15 195 / 0.08)", border: "1px solid oklch(0.78 0.15 195 / 0.15)" }}>
              <GraduationCap size={16} style={{ color: "oklch(0.78 0.15 195)" }} />
            </div>
            <h3 className="font-display font-bold text-lg">Education</h3>
            <span className="font-mono text-[10px] text-[oklch(0.55_0.02_240/0.5)] ml-2">// academic_background</span>
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
                className="group relative rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "oklch(1 0 0 / 0.02)",
                  borderColor: "oklch(1 0 0 / 0.07)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${edu.color.replace(')', ' / 0.3)')}`;
                  e.currentTarget.style.boxShadow = `0 0 20px ${edu.color.replace(')', ' / 0.06)')}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.07)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="absolute top-0 inset-x-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${edu.color}, transparent)` }} />
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg shrink-0 mt-0.5" style={{ background: `${edu.color.replace(')', ' / 0.08)')}`, border: `1px solid ${edu.color.replace(')', ' / 0.15)')}` }}>
                    <edu.icon size={12} style={{ color: edu.color }} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-widest mb-1" style={{ color: edu.color }}>{edu.degree}</p>
                    <h4 className="font-semibold text-sm leading-snug" style={{ color: "oklch(0.85 0.01 240)" }}>{edu.school}</h4>
                    <p className="text-xs mt-0.5" style={{ color: "oklch(0.55 0.02 240)" }}>{edu.place}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid oklch(1 0 0 / 0.07)" }}>
                  <span className="font-mono text-[10px]" style={{ color: "oklch(0.55 0.02 240)" }}>{edu.period}</span>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${edu.color.replace(')', ' / 0.1)')}`, color: edu.color, border: `1px solid ${edu.color.replace(')', ' / 0.2)')}` }}>{edu.badge}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative terminal-card p-7 transition-all duration-300 hover:-translate-y-1 glass-hover"
            >
              <div className="absolute top-0 inset-x-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }} />
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${s.color.replace(')', ' / 0.08)')}`, border: `1px solid ${s.color.replace(')', ' / 0.2)')}` }}>
                  <s.icon size={16} style={{ color: s.color }} />
                </div>
                <h4 className="font-display font-semibold text-sm" style={{ color: "oklch(0.85 0.01 240)" }}>{s.title}</h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.55 0.02 240)" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

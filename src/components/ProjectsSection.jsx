import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { TiltCard } from "./ui/TiltCard";
import { SpotlightEffect } from "./ui/SpotlightEffect";

const projects = [
  {
    id: 1,
    title: "Tata Capital",
    image: "https://ik.imagekit.io/zvwwmpviq/tata.png?updatedAt=1779820952625",
    desc: "A full-stack financial application for managing investment portfolios and tracking market trends.",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Prynshumishra/Tata-Capital",
    accent: "oklch(0.72 0.18 165)",
    
  },
  {
    id: 2,
    title: "Adaptive Chat",
    image: "/projects/adaptive-chat.png",
    desc: "Adaptive Chat is an intelligent, end-to-end Retrieval-Augmented Generation (RAG) system powered by agentic AI architecture.",
    tech: ["LangChain, LangGraph, FastAPI, Uvicorn, Streamlit, MongoDB, Qdrant, OpenAI, Motor, Python"],
    github: "https://github.com/Prynshumishra/Adaptive-Chat",
    
    accent: "oklch(0.72 0.18 165)",
    
  },
  {
    id: 3,
    title: "RideShare App",
    image: "/projects/RideShare.png",
    desc: "Full-stack ride-sharing platform connecting travelers going the same direction. MERN stack with Cloudinary, JWT, and real-time features.",
    tech: ["MERN Stack", "Tailwind CSS", "ShadCN UI", "JWT Auth", "REST APIs", "Cloudinary", "Bcrypt"],
    github: "https://github.com/Prynshumishra/RideShare",
    demo: "https://ride-share-pm.vercel.app/",
    accent: "oklch(0.78 0.15 195)",
  },
  {
    id: 4,
    title: "Channel Flow",
    image: "/projects/channelflow.png",
    desc: "Full-stack Hotel Channel Manager — booking management, inventory tracking, and real-time availability visualization.",
    tech: ["Next.js 15", "React 19", "Node.js", "MongoDB", "TailwindCSS", "JWT Auth"],
    github: "https://github.com/Prynshumishra/channelflow",
    demo: "https://channelflow-delta.vercel.app/",
    accent: "oklch(0.72 0.18 165)",
  },
  {
    id: 5,
    title: "Grove Vista Properties",
    image: "https://ik.imagekit.io/zvwwmpviq/image.png",
    desc: "Next.JS real estate listing platform with dynamic property pages, advanced search, and user authentication. Built with MongoDB, TailwindCSS, and JWT.",
    tech: ["Next.js 15", "React 19", "Node.js", "MongoDB", "TailwindCSS", "JWT Auth"],
    demo: "https://grove-vista-properties-ten.vercel.app/",
    accent: "oklch(0.72 0.18 165)",
  },
  {
    id: 6,
    title: "Portfolio",
    image: "/projects/Portfolio.png",
    desc: "Developer portfolio showcasing projects, skills, and experience — built with React, Framer Motion, and a custom Node.js contact API.",
    tech: ["React.js", "Framer Motion", "TailwindCSS", "Node.js", "Express.js"],
    github: "https://github.com/Prynshumishra/Portfolio",
    demo: "https://portfolio-priyanshumishra9.vercel.app/",
    accent: "oklch(0.72 0.18 165)",
  },
  {
    id: 7,
   title: "Prescripto Healthcare",
    image: "/projects/prescipto.png",
    desc: "A modern healthcare platform connecting patients, doctors, and administrators. Appointment booking, admin dashboard, JWT auth.",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "TailwindCSS", "JWT Auth", "REST APIs", "Multer"],
    github: "https://github.com/Prynshumishra/HealthCare-System",
    demo: "https://prescripto-hs.vercel.app/",
    accent: "oklch(0.78 0.15 195)",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.18 165 / 0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="container mx-auto max-w-7xl relative">
        <SectionHeader index="04" label="portfolio" title="Featured" accent="Projects"
          description="A selection of full-stack projects showcasing scalable architecture, clean APIs, and production-ready code." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <TiltCard intensity={6} className="h-full">
                <div
                  className="relative h-full rounded-2xl overflow-hidden border flex flex-col transition-all duration-500"
                  style={{
                    background: "oklch(0.1 0.025 250 / 0.9)",
                    borderColor: "oklch(1 0 0 / 0.08)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${project.accent.replace(')', ' / 0.25)')}`;
                    e.currentTarget.style.boxShadow = `0 0 40px ${project.accent.replace(')', ' / 0.1)')}`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <SpotlightEffect />

                  {/* Accent top line */}
                  <div className="absolute top-0 inset-x-0 h-px z-10"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }} />

                  {/* Browser chrome */}
                  <div className="relative flex items-center gap-2 px-4 py-3 z-10 shrink-0"
                    style={{ background: "oklch(0.11 0.025 250)", borderBottom: "1px solid oklch(1 0 0 / 0.07)" }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-2 font-mono text-[10px]" style={{ color: "oklch(0.55 0.02 240)" }}>
                      {project.demo.replace("https://", "")}
                    </span>
                  </div>

                 
                  <div className="relative h-[180px] sm:h-[220px] lg:h-[175px] xl:h-[200px] overflow-hidden shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      onError={(e) => { e.target.src = `https://via.placeholder.com/600x400/0a1628/22d3ee?text=${encodeURIComponent(project.title)}`; }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20"
                      style={{ background: "linear-gradient(transparent, oklch(0.1 0.025 250))" }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-5 lg:p-4 xl:p-5 flex flex-col flex-1">
                    <h3
                      className="text-xl lg:text-lg xl:text-xl font-bold mb-2 tracking-tight transition-colors duration-300"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.93 0.01 240)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "oklch(0.55 0.02 240)" }}>
                      {project.desc}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] px-2.5 py-1 rounded-lg border"
                          style={{
                            color: project.accent,
                            background: `${project.accent.replace(')', ' / 0.07)')}`,
                            borderColor: `${project.accent.replace(')', ' / 0.18)')}`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 mt-auto pt-4" style={{ borderTop: "1px solid oklch(1 0 0 / 0.07)" }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-mono text-xs font-medium border transition-all duration-300 hover:border-white/20 hover:text-white"
                        style={{ background: "oklch(1 0 0 / 0.04)", borderColor: "oklch(1 0 0 / 0.09)", color: "oklch(0.65 0.02 240)" }}
                      >
                        <Github size={13} />
                        source_code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          background: project.accent,
                          color: "oklch(0.1 0.02 240)",
                          boxShadow: `0 0 20px ${project.accent.replace(')', ' / 0.2)')}`,
                        }}
                      >
                        <ExternalLink size={13} />
                        live_demo
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

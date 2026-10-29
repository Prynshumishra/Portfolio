import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Briefcase,
  Code2,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { TiltCard } from "./ui/TiltCard";
import { SpotlightEffect } from "./ui/SpotlightEffect";

const filters = [
  { key: "all", label: "all_projects()", icon: Layers },
  { key: "client", label: "client_projects", icon: Briefcase },
  { key: "personal", label: "personal_projects", icon: Code2 },
];

const projects = [
  {
    id: 0,
    title: "AI Enterprise Chatbot",
    category: "client",
    image: "/projects/chatbot.png",
    desc: "Full-Stack enterprise AI platform with LLM Tool Calling to securely query live MongoDB data. Production-ready with IP rate limiting, session capping, optimistic UI updates, and a glassmorphic dashboard featuring a global floating chat widget and Scrollspy docs.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "MongoDB", "LLM Function Calling"],
    github: "https://github.com/Prynshumishra/Chatbot",
    demo: "https://chatbot-zanstack5.vercel.app/",
  },
  {
    id: 8,
    title: "Savoria",
    category: "personal",
    image: "/projects/savoria.png",
    desc: "Full-stack recipe and meal planning platform in Angular, Node.js, Express.js, and MongoDB with 15+ REST APIs and 6 TensorFlow.js models (cutting external API costs by 100%). Features real-time Socket.IO notifications, weighted MongoDB search indexes, and automated CI/CD pipelines across 50+ integration tests with a 100% pass rate.",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB", "TypeScript", "Socket.IO", "TensorFlow.js", "CI/CD"],
    demo: "https://savoria-p.vercel.app/",
  },
  {
    id: 9,
    title: "Taskflow",
    category: "personal",
    image: "/projects/taskflow.png",
    desc: "Taskflow is a full-stack task management app built with the MEAN stack and TypeScript. It offers RBAC, JWT authentication, Kanban drag-and-drop, task assignment, filtering, pagination, subtasks, comments, analytics, progress tracking, and responsive UI for teams.",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB", "TypeScript", "RBAC", "JWT Auth", "Kanban"],
    demo: "https://worksy-taskmanager.vercel.app/",
  },
  {
    id: 1,
    title: "Grove Vista Properties",
    category: "client",
    image: "https://ik.imagekit.io/zvwwmpviq/gvp.png",
    desc: "Next.JS real estate listing platform with dynamic property pages, advanced search, and user authentication. Built with MongoDB, TailwindCSS, and JWT.",
    tech: ["Next.js 15", "React 19", "Node.js", "MongoDB", "TailwindCSS", "JWT Auth"],
    demo: "https://grovevistaproperties.com/",
  },
  {
    id: 2,
    title: "Adaptive Chat",
    category: "personal",
    image: "",
    desc: "Adaptive Chat is an intelligent, end-to-end Retrieval-Augmented Generation (RAG) system powered by agentic AI architecture.",
    tech: ["LangChain", "LangGraph", "FastAPI", "Uvicorn", "Streamlit", "MongoDB", "Qdrant", "OpenAI", "Python"],
    github: "https://github.com/Prynshumishra/Adaptive-Chat",
  },
  {
    id: 3,
    title: "Tata Capital",
    category: "client",
    image: "https://ik.imagekit.io/zvwwmpviq/tata.png",
    desc: "A full-stack financial application for managing investment portfolios and tracking market trends.",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Prynshumishra/Tata-Capital",
  },
  {
    id: 4,
    title: "Channel Flow",
    category: "client",
    image: "/projects/channelflow.png",
    desc: "Full-stack Hotel Channel Manager — booking management, inventory tracking, and real-time availability visualization.",
    tech: ["Next.js 15", "React 19", "Node.js", "MongoDB", "TailwindCSS", "JWT Auth"],
    github: "https://github.com/Prynshumishra/channelflow",
    demo: "https://channelflow-delta.vercel.app/",
  },
  {
    id: 5,
    title: "RideShare App",
    category: "personal",
    image: "/projects/RideShare.png",
    desc: "Full-stack ride-sharing platform connecting travelers going the same direction. MERN stack with Cloudinary, JWT, and real-time features.",
    tech: ["MERN Stack", "Tailwind CSS", "ShadCN UI", "JWT Auth", "REST APIs", "Cloudinary", "Bcrypt"],
    github: "https://github.com/Prynshumishra/RideShare",
    demo: "https://ride-share-pm.vercel.app/",
  },
  {
    id: 6,
    title: "Portfolio",
    category: "personal",
    image: "https://ik.imagekit.io/zvwwmpviq/portfolio.png?updatedAt=1781169357940",
    desc: "Developer portfolio showcasing projects, skills, and experience — built with React, Framer Motion, and a custom Node.js contact API.",
    tech: ["React.js", "Framer Motion", "TailwindCSS", "Node.js", "Express.js"],
    github: "https://github.com/Prynshumishra/Portfolio",
    demo: "https://portfolio-priyanshumishra9.vercel.app/",
  },
  {
    id: 7,
    title: "Prescripto Healthcare",
    category: "personal",
    image: "/projects/prescipto.png",
    desc: "A modern healthcare platform connecting patients, doctors, and administrators. Appointment booking, admin dashboard, JWT auth.",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "TailwindCSS", "JWT Auth", "REST APIs", "Multer"],
    github: "https://github.com/Prynshumishra/HealthCare-System",
    demo: "https://prescripto-hs.vercel.app/",
  },
];

const INITIAL_ALL_PROJECTS = 6;

export const ProjectsSection = () => {
  const [projectList, setProjectList] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/projects`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.success && Array.isArray(data.projects) && data.projects.length > 0) {
          setProjectList(
            data.projects.map((p, idx) => ({
              ...p,
              id: p._id || p.id || idx,
            }))
          );
        }
      })
      .catch(() => {
        // Keep static fallback projects when API is offline
      });
  }, []);

  const filteredProjects = projectList.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  const visibleProjects =
    activeFilter === "all" && !showAll
      ? filteredProjects.slice(0, INITIAL_ALL_PROJECTS)
      : filteredProjects;

  const hiddenCount = filteredProjects.length - INITIAL_ALL_PROJECTS;

  const handleFilterChange = (key) => {
    setActiveFilter(key);
    setShowAll(false);
  };

  const getCount = (key) =>
    key === "all"
      ? projectList.length
      : projectList.filter((p) => p.category === key).length;

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="container w-full mx-auto relative">
        <SectionHeader
          index="04"
          label="portfolio"
          title="Featured"
          accent="Projects"
          description="A selection of client deliveries and personal full-stack systems showcasing scalable architecture, clean APIs, and production-ready code."
        />

        {/* Category Filter Tabs (All / Client / Personal) */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {filters.map(({ key, label, icon: Icon }) => {
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                onClick={() => handleFilterChange(key)}
                className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-mono text-xs font-medium border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#231915] border-[#231915] text-[#FAF7F2] shadow-[0_6px_18px_rgba(35,25,21,0.2)]"
                    : "bg-[#FFFFFF] border-[#E2D7C9] text-[#5A4D44] hover:border-[#5C4033] hover:text-[#231915]"
                }`}
              >
                <Icon size={13} />
                <span>{label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive
                      ? "bg-[#5C4033] text-[#FAF7F2]"
                      : "bg-[#F2ECE4] text-[#231915]"
                  }`}
                >
                  {getCount(key)}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${activeFilter}-${showAll}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
          >
            {visibleProjects.map((project, i) => {
              const isClient = project.category === "client";
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <TiltCard intensity={6} className="h-full">
                    <div className="relative h-full rounded-2xl overflow-hidden border border-[#E2D7C9] bg-[#FFFFFF] hover:border-[#B8A390] shadow-[0_8px_28px_-10px_rgba(35,25,21,0.06)] hover:shadow-[0_18px_38px_-12px_rgba(35,25,21,0.12)] flex flex-col transition-all duration-500 text-left">
                      <SpotlightEffect />

                      {/* Browser chrome + Project Type Badge */}
                      <div className="relative flex items-center justify-between gap-2 px-4 py-3 z-10 shrink-0 bg-[#FAF7F2] border-b border-[#E2D7C9]">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] shrink-0" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] shrink-0" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] shrink-0" />
                          <span className="ml-1.5 font-mono text-[10px] text-[#5A4D44] truncate">
                            {(project.demo ?? project.github ?? "").replace("https://", "")}
                          </span>
                        </div>

                        {/* Client vs Personal Badge */}
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[10px] font-semibold shrink-0 ${
                            isClient
                              ? "bg-[#231915] text-[#FAF7F2]"
                              : "bg-[#F2ECE4] text-[#5C4033] border border-[#E2D7C9]"
                          }`}
                        >
                          {isClient ? (
                            <>
                              <Briefcase size={10} />
                              Client
                            </>
                          ) : (
                            <>
                              <Code2 size={10} />
                              Personal
                            </>
                          )}
                        </span>
                      </div>

                      <div className="relative h-[180px] sm:h-[220px] lg:h-[175px] xl:h-[200px] overflow-hidden shrink-0 bg-[#F2ECE4]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                          onError={(e) => {
                            e.target.src = `https://via.placeholder.com/600x400/F2ECE4/231915?text=${encodeURIComponent(
                              project.title
                            )}`;
                          }}
                        />
                        <div
                          className="absolute inset-x-0 bottom-0 h-14"
                          style={{ background: "linear-gradient(transparent, #FFFFFF)" }}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 p-5 lg:p-4 xl:p-5 flex flex-col flex-1">
                        <h3
                          className="text-xl lg:text-lg xl:text-xl font-bold mb-2 tracking-tight text-[#231915]"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-sm leading-relaxed mb-5 text-[#5A4D44]">
                          {project.desc}
                        </p>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[10px] px-2.5 py-1 rounded-lg border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-3 mt-auto pt-4 border-t border-[#E2D7C9]">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-mono text-xs font-medium border border-[#E2D7C9] bg-[#FAF7F2] text-[#231915] hover:border-[#5C4033] hover:bg-[#F2ECE4] transition-all duration-300"
                            >
                              <Github size={13} />
                              source_code
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] shadow-[0_4px_14px_rgba(35,25,21,0.16)] transition-all duration-300 hover:-translate-y-0.5"
                            >
                              <ExternalLink size={13} />
                              live_demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* See More / Show Less button for the "all" tab */}
        {activeFilter === "all" && filteredProjects.length > INITIAL_ALL_PROJECTS && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold transition-all duration-300 bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] shadow-[0_6px_18px_rgba(35,25,21,0.18)] hover:-translate-y-0.5 cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>show_less_projects()</span>
                  <ChevronUp size={15} />
                </>
              ) : (
                <>
                  <span>see_more_projects (+{hiddenCount})</span>
                  <ChevronDown size={15} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

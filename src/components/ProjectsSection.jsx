import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Prescripto Healthcare",
    image: "/projects/prescipto.png",
    desc: "Prescripto is a modern healthcare platform designed to simplify the interaction between patients, doctors, and administrators.", 
    tech: ["React.js", "Context API", "Node.js", "MongoDB", "Express", "TailwindCSS", "JWT Authentication", "REST APIs", "Multer", "Bcrypt"],
    github: "https://github.com/Prynshumishra/HealthCare-System",
    demo: "https://prescripto-hs.vercel.app/"
  },
  {
    id: 2,
    title: "Portfolio",
    image: "/projects/Portfolio.png",
    desc: " A modern Developer Portfolio Website built to showcase my projects, technical skills, coding profiles, and experience as a MERN Stack Developer.", 
    tech: ["React.js", "Framer Motion", "TailwindCSS", "Lucide React", "Node.js", "Express.js"],
    github: "https://github.com/Prynshumishra/Portfolio",
    demo: "https://portfolio-priyanshumishra9.vercel.app/"
  },
  {
    id: 3,
    title: "Ride Share App",
    image: "/projects/RideShare.png",
    desc: " RideShare is a full-stack ride-sharing platform that intelligently connects people traveling in the same direction — making commuting affordable, efficient, and eco-friendly.", 
    tech: ["MERN Stack", "Tailwind CSS", "ShadCN UI", "Lucide Icons", "JWT Authentication", "REST APIs", "Multer", "Cloudinary", "Bcrypt"],
    github: "https://github.com/Prynshumishra/RideShare",
    demo: "https://ride-share-pm.vercel.app/"
  },
  {
    id: 4,
    title: "Channel Flow",
    image: "/projects/channelflow.png",
    desc: "A modern, full-stack Hotel Channel Manager web application designed to streamline hotel operations including booking management, inventory tracking, and real-time availability visualization.", 
    tech: ["Next.js 15", "React 19", "Node.js", "MongoDB", "TailwindCSS", "JWT Auth"],
    github: "https://github.com/Prynshumishra/channelflow",
    demo: "https://channelflow-delta.vercel.app/"
  },
];

export const ProjectsSection = () => {
  // No longer needed: Auto Slide and hooks for carousel
  // The layout is now a standard responsive Grid

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* SaaS Deep Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto max-w-7xl relative">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-white/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            My Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            A selection of my best work, showcasing full-stack capabilities, modern UI/UX design, and scalable architecture built for production.
          </p>
        </div>

        {/* Grid Layout instead of Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-card/40 backdrop-blur-2xl border border-white/5 shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Gradient accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Image Section */}
              <div className="relative h-[200px] sm:h-[280px] w-full overflow-hidden bg-muted/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600x400/1a1a2e/4d4dff?text=" + encodeURIComponent(project.title);
                  }}
                />
                {/* Dark gradient fade over the bottom of the image for better text blending */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-3 text-foreground tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {project.desc && (
                  <p className="text-sm md:text-base text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1.5 rounded-xl text-[11px] font-bold bg-blue-500/10 border border-white/5 text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 py-3 rounded-xl bg-secondary/50 hover:bg-secondary text-sm font-bold transition-all border border-white/5 hover:border-white/10"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 text-sm font-bold transition-all shadow-lg shadow-blue-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
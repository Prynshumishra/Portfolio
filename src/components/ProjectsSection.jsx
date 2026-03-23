import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Prescripto Healthcare",
    description:
      "Healthcare management platform connecting doctors and patients with appointment booking, admin dashboard, and secure REST API backend with Cloudinary integration.",
    image: "/projects/prescipto.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "JWT Auth", "Cloudinary"],
    demoUrl: "https://prescripto-hs.vercel.app/",
    githubUrl: "https://github.com/Prynshumishra/HealthCare-System",
    featured: false,
    color: "from-emerald-500 to-teal-500",
    hoverBorder: "hover:border-emerald-400/50",
    hoverShadow: "hover:shadow-emerald-500/10",
    
  },
  {
    id: 2,
    title: "Work Sync",
    description:
      "Real-time collaboration platform for syncing repositories and project data across multiple services. Built with the MERN stack, GraphQL APIs, and secure authentication.",
    image: "/projects/project3.png",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "GraphQL", "JWT Auth", "Tailwind CSS"],
    demoUrl: "https://work-sync.vercel.app/",
    githubUrl: "https://github.com/Prynshumishra/WORK-SYNC/",
    featured: true,
    color: "from-violet-500 to-purple-600",
    hoverBorder: "hover:border-violet-400/50",
    hoverShadow: "hover:shadow-violet-500/10",
  },
  
  {
    id: 3,
    title: "Sky Nova E-Commerce",
    description:
      "Full-stack e-commerce platform for drone and IoT components with JWT auth, secure checkout, admin dashboard, and REST APIs for product & order management.",
    image: "/projects/project1.png",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "REST API", "Redux", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    color: "from-blue-500 to-cyan-500",
    hoverBorder: "hover:border-blue-400/50",
    hoverShadow: "hover:shadow-blue-500/10",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 px-4 relative overflow-hidden">
      {/* Background decoration — mirrors CodingProfilesSection */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/3 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-primary/3 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative">
        {/* Section header — same pattern as CodingProfiles */}
        <div className="text-center mb-14">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold tracking-widest uppercase mb-2"
          >
            What I&apos;ve Built
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Full-stack MERN applications built with attention to scalability,
            clean architecture, and modern UI/UX.
          </p>
        </div>

        {/* Project cards — same grid & card style as CodingProfiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              key={project.id}
              className={`group relative glass-card glass-card-hover overflow-hidden ${project.hoverBorder} ${project.hoverShadow}`}
            >
              {/* Gradient accent top bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}
              />

              {/* Ambient glow behind card */}
              <div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-sm`}
              />

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg">
                  <Star size={11} className="fill-current" />
                  Featured
                </div>
              )}

              {/* Project image */}
              <div className="h-44 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Card body */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-primary/8 text-primary border border-primary/15 transition-colors duration-200 group-hover:bg-primary/12 group-hover:border-primary/25"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-secondary text-muted-foreground border border-border/30">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                {/* Action links */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30 group-hover:border-border/60 transition-colors duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:gap-2"
                  >
                    <Github size={13} />
                    Source Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/70 group-hover:text-primary transition-all duration-200 hover:gap-2"
                  >
                    Live Demo
                    <ExternalLink size={11} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA — consistent with rest of the site */}
        <div className="text-center mt-14">
          <a
            className="cosmic-button inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Prynshumishra"
          >
            More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

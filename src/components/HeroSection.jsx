import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Code2,
  Cpu,
  ChevronRight,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const techStack = [
  
  {
    name: "C++",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    name: "Python",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },  
  {
    name: "React.js",
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
  {
    name: "Node.js",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    name: "NextJS",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    name: "MongoDB",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    name: "Express.js",
    color: "text-zinc-500 dark:text-zinc-400",
    bg: "bg-zinc-500/10",
    border: "border-zinc-500/20",
  },
  {
    name: "TypeScript",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    name: "Tailwind CSS",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  
  {
    name: "GraphQL",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    name: "REST APIs",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  
  {
    name: "Docker",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    name: "JWT Auth",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Prynshumishra",
    label: "GitHub",
    hoverClass: "hover:bg-zinc-800 hover:text-white hover:border-zinc-600",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/prynshumishr",
    label: "LinkedIn",
    hoverClass: "hover:bg-blue-600 hover:text-white hover:border-blue-500",
  },
  {
    icon: Mail,
    href: "mailto:prynshu09@gmail.com",
    label: "Email",
    hoverClass: "hover:bg-red-500 hover:text-white hover:border-red-400",
  },
];

const roles = [
  {
    label: "MERN Stack Developer",
    icon: Code2,
    color: "from-blue-400 to-indigo-500",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    label: "Backend API Developer",
    icon: Server,
    color: "from-indigo-400 to-violet-500",
    iconColor: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
  },
  {
    label: "Database & System Design",
    icon: Database,
    color: "from-cyan-400 to-blue-500",
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
  {
    label: "Scalable Web Apps",
    icon: Cpu,
    color: "from-sky-400 to-cyan-500",
    iconColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
  },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-12 mt-6 md:pt-28 overflow-hidden"
    >
      {/* SaaS Deep Background Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Top section: Name + Typing + CTAs */}
        <div className="text-center mb-10 space-y-5 mt-10">
          {/* Availability badge */}
          <div className="opacity-0 animate-fade-in inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Available for hire
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none opacity-0 animate-fade-in">
            <span className="block text-foreground/70 text-2xl md:text-3xl font-medium mb-3">
              Hi, I&apos;m
            </span>
            <span className="text-foreground">Priyanshu</span>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Mishra
            </span>
          </h1>

          {/* Typing animation */}
          <div className="text-lg md:text-2xl font-semibold text-muted-foreground opacity-0 animate-fade-in-delay-1">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Backend API Developer",
                2000,
                "Full Stack Developer",
                2000,
                "Open Source Contributor",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary"
            />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2 leading-relaxed">
            I am a{" "}
            <span className="text-primary font-semibold">
              MERN Stack Developer
            </span>{" "}
            passionate about building{" "}
            <span className="text-foreground font-medium">
              scalable, high-performance full-stack web applications
            </span>
            . I specialize in developing{" "}
            <span className="text-foreground font-medium">
              secure RESTful & GraphQL APIs
            </span>
            , integrating modern cloud services, and crafting{" "}
            <span className="text-foreground font-medium">
              responsive user interfaces
            </span>{" "}
            using <span className="text-primary font-semibold">React</span> and{" "}
            <span className="text-primary font-semibold">Tailwind CSS</span>.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 opacity-0 animate-fade-in-delay-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold tracking-wide transition-all shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_40px_rgba(var(--primary),0.5)] hover:scale-105 active:scale-95"
            >
              View My Projects
              <ChevronRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-card/80 backdrop-blur-xl border-2 border-border/50 text-foreground font-bold tracking-wide transition-all hover:bg-secondary/80 hover:border-primary/50 hover:scale-105 active:scale-95 shadow-xl"
            >
               Let&apos;s Connect
            </a>
          </div>

          {/* Social links — CodingProfiles card style */}
          <div className="flex flex-wrap justify-center gap-3 pt-4 mb-12 opacity-0 animate-fade-in-delay-3">
            {socialLinks.map(({ icon: Icon, href, label, hoverClass }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto") ? undefined : "noopener noreferrer"
                }
                className={`flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/20 shadow-xl text-muted-foreground text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/10 ${hoverClass}`}
                aria-label={label}
              >
                <Icon size={16} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Tech stack card — single card with accent bar matching CodingProfiles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="group relative bg-card/60 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-3xl p-6 md:p-8 mb-10 overflow-hidden"
        >
          {/* Gradient accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80" />

          <p className="text-[10px] font-bold text-foreground uppercase tracking-widest mb-4 text-center">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`inline-flex items-center px-2.5 py-1 text-[11px] font-medium rounded-lg ${tech.bg} ${tech.color} border ${tech.border} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm cursor-default`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Role cards — same grid & card style as CodingProfiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 opacity-0 animate-fade-in-delay-4">
          {roles.map(({ label, icon: Icon, color, iconColor, bgColor }, index) => (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              key={label}
              className="group relative bg-card/40 backdrop-blur-2xl border border-white/5 hover:border-blue-500/30 shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] rounded-3xl p-5 text-center transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent top bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div
                className={`p-2 rounded-xl ${bgColor} group-hover:scale-110 transition-transform duration-300 w-fit mx-auto mb-2.5`}
              >
                <Icon className={`w-4 h-4 ${iconColor}`} />
              </div>
              <p className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

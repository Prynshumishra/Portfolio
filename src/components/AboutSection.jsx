import {
  Download,
  Mail,
  Layout,
  Server,
  Database,
  Globe,
  Link,
  Rocket,
  MapPin,
  Code2,
  GraduationCap,
  BookOpen,
  Award,
} from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "<1", label: "Years Experience", color: "text-blue-400" },
  { value: "8+", label: "Projects Delivered", color: "text-indigo-400" },
  { value: "15+", label: "Technologies", color: "text-sky-400" },
  { value: "10+", label: "REST APIs Built", color: "text-blue-500" },
];

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Creating modern, responsive, and high-performance user interfaces using React.js, Next.js, and Tailwind CSS with a strong focus on usability and clean UI.",
    color: "from-blue-400 to-indigo-500",
    hoverBorder: "hover:border-blue-400/50",
    hoverShadow: "hover:shadow-blue-500/10",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Building scalable backend systems using Node.js and Express.js with secure REST and GraphQL APIs, authentication, and optimized server-side logic.",
    color: "from-indigo-400 to-violet-500",
    hoverBorder: "hover:border-indigo-400/50",
    hoverShadow: "hover:shadow-indigo-500/10",
    iconColor: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Designing efficient and scalable database architectures using MongoDB and Mongoose with optimized schemas, indexing, and secure data management.",
    color: "from-sky-400 to-blue-500",
    hoverBorder: "hover:border-sky-400/50",
    hoverShadow: "hover:shadow-sky-500/10",
    iconColor: "text-sky-400",
    bgColor: "bg-sky-500/10",
  },
  {
    icon: Globe,
    title: "Full Stack MERN Development",
    description:
      "Developing complete end-to-end web applications using the MERN stack with JWT auth, role-based access control, and seamless integration.",
    color: "from-blue-500 to-cyan-500",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-blue-500/10",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Link,
    title: "API Integration & Automation",
    description:
      "Integrating third-party APIs, payment gateways, chatbots, and automation tools to enhance application functionality and workflows.",
    color: "from-indigo-500 to-blue-400",
    hoverBorder: "hover:border-indigo-500/50",
    hoverShadow: "hover:shadow-indigo-500/10",
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Rocket,
    title: "Deployment & Optimization",
    description:
      "Deploying scalable applications on cloud platforms with CI/CD pipelines, Git workflows, and performance optimization for faster load times.",
    color: "from-cyan-400 to-sky-500",
    hoverBorder: "hover:border-cyan-400/50",
    hoverShadow: "hover:shadow-cyan-500/10",
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
  },
];

export const AboutSection = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* SaaS Deep Background Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-white/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Who I Am
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Me</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            A passionate MERN Stack Developer focused on building scalable
            full-stack applications and transforming innovative ideas into
            high-performance, production-ready products.
          </p>
        </div>

        {/* ── Bio + Photo + Stats card ── */}
        <div className="group relative bg-card/40 backdrop-blur-2xl border border-white/5 shadow-2xl rounded-3xl p-6 md:p-10 mb-8 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)]">
          {/* Gradient accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* ── Photo column (full width mobile / 2 cols desktop) ── */}
            <div className="lg:col-span-2 flex flex-col items-center gap-5">
              {/* Photo frame */}
              <div className="relative group/photo">
                {/* Gradient ring */}
                <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-violet-500 via-primary to-blue-500 opacity-70 group-hover/photo:opacity-100 transition-opacity duration-500 blur-[2px]" />
                <div className="relative w-48 h-56 md:w-full md:h-72 rounded-2xl overflow-hidden border-2 border-card">
                  {!imgError ? (
                    <img
                      src="/projects/profile.jpg"
                      alt="Priyanshu Mishra"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/photo:scale-105"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    /* Initials fallback if image not found */
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                      <span className="text-6xl font-black text-primary/60 select-none">
                        PM
                      </span>
                    </div>
                  )}
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/60 to-transparent" />
                </div>
              </div>

              {/* Quick info chips */}
              <div className="w-full space-y-2">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-blue-500/10 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
                  <span className="text-xs font-medium text-blue-400">
                    Available for hire
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/60 border border-border/40">
                  <MapPin size={13} className="text-primary shrink-0" />
                  <span className="text-xs text-muted-foreground font-medium">
                    Prayagraj, UP, India
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/60 border border-border/40">
                  <Code2 size={13} className="text-primary shrink-0" />
                  <span className="text-xs text-muted-foreground font-medium">
                    MERN Stack Developer
                  </span>
                </div>
              </div>
            </div>

            {/* ── Right: bio + stats + CTAs (3 cols) ── */}
            <div className="lg:col-span-3 space-y-5">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold">
                  MERN Stack Developer | Problem Solver
                </h3>
               <p className="text-sm text-left text-muted-foreground leading-relaxed">
  I am a passionate MERN Stack Developer specializing in
  building scalable full-stack web applications using MongoDB,
  Express.js, React.js, and Node.js. With over{" "}
  <span className="text-foreground font-medium">
    10+ months of experience as a Software Development Intern
  </span>
  , I have successfully delivered{" "}
  <span className="text-foreground font-medium">
    three full-stack client websites
  </span>
  , transforming business requirements into reliable,
  production-ready digital solutions.
</p>

<p className="text-sm text-left text-muted-foreground leading-relaxed">
  My experience includes developing high-performance{" "}
  <span className="text-foreground font-medium ">
    RESTful and GraphQL APIs
  </span>
  , integrating third-party services, and building modern,
  responsive user interfaces using{" "}
  <span className="text-primary font-medium">React</span>,{" "}
  <span className="text-primary font-medium">NextJS</span>{" "}
  and{" "}
  <span className="text-primary font-medium">Tailwind CSS</span>.
  I also leverage AI-powered tools like{" "}
  <span className="text-foreground font-medium">Cursor</span>,{" "}
  <span className="text-foreground font-medium">Claude</span>,{" "}
  <span className="text-foreground font-medium">Antigravity</span>, and{" "}
  <span className="text-foreground font-medium">GitHub Copilot</span>{" "}
  to enhance UI/UX design, speed up development, and improve code quality.
</p>

<p className="text-sm text-left text-muted-foreground leading-relaxed">
 I am expanding my full-stack expertise by learning{" "}
  <span className="text-foreground font-medium ">
    PHP and WordPress
  </span>{" "}
  , while building end-to-end solutions from intuitive React frontends to scalable Node.js backends.
</p>
              </div>

              {/* Stats grid — same style as CodingProfiles stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-secondary/50 border border-border/30 rounded-xl px-3 py-4 text-center hover:border-primary/40 transition-all duration-300"
                  >
                    <div className={`text-2xl font-black ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-1 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="cosmic-button flex items-center gap-2"
                >
                  <Mail size={16} />
                  Get In Touch
                </a>

                <a
                  href="https://drive.google.com/file/d/1EVRqb4mxLCytp6PE-2k4xFqH79criaM4/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border border-primary/60 text-primary hover:bg-primary/10 transition-all duration-300 font-medium flex items-center gap-2 text-sm"
                >
                  <Download size={15} />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Education card ── */}
        <div className="group relative bg-card/40 backdrop-blur-2xl border border-white/5 shadow-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] rounded-3xl p-6 md:p-10 mb-10 overflow-hidden transition-all duration-300">
          {/* Gradient accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80" />

          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-white/5">
              <GraduationCap className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* B.Tech */}
            <div className="group/card relative col-span-1 md:col-span-1 bg-secondary/20 border border-white/5 rounded-2xl p-5 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/8 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10 shrink-0 mt-0.5">
                  <BookOpen size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-0.5">
                    Bachelor of Technology - Information Technology
                  </p>
                  <h4 className="font-bold text-sm leading-snug group-hover/card:text-blue-400 transition-colors duration-300">
                    Madan Mohan Malaviya University of Technology
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Gorakhpur, Uttar Pradesh
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-[11px] text-muted-foreground font-medium">
                  Nov 2022 – May 2026
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Pursuing
                </span>
              </div>
            </div>

            {/* 12th */}
            <div className="group/card relative bg-secondary/20 border border-white/5 rounded-2xl p-5 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/8 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 shrink-0 mt-0.5">
                  <Award size={14} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-0.5">
                    Class XII — CBSE
                  </p>
                  <h4 className="font-bold text-sm leading-snug group-hover/card:text-indigo-400 transition-colors duration-300">
                    Jagat Taran Golden Jubilee School
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Prayagraj, UP
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-[11px] text-muted-foreground font-medium">
                  Board Examination
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  89%
                </span>
              </div>
            </div>

            {/* 10th */}
            <div className="group/card relative bg-secondary/20 border border-white/5 rounded-2xl p-5 hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-500/8 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-sky-500/10 shrink-0 mt-0.5">
                  <Award size={14} className="text-sky-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-sky-400 uppercase tracking-widest mb-0.5">
                    Class X — CBSE
                  </p>
                  <h4 className="font-bold text-sm leading-snug group-hover/card:text-sky-400 transition-colors duration-300">
                    Jagat Taran Golden Jubilee School
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Prayagraj, UP
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-[11px] text-muted-foreground font-medium">
                  Board Examination
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  85.8%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Services grid — same card structure as CodingProfiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(
            ({
              icon: Icon,
              title,
              description,
              color,
              hoverBorder,
              hoverShadow,
              iconColor,
              bgColor,
            }) => (
              <div
                key={title}
                className={`group relative bg-card/40 backdrop-blur-2xl border border-white/5 shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] rounded-3xl p-7 transition-all duration-300 overflow-hidden ${hoverBorder} ${hoverShadow}`}
              >
                {/* Gradient accent top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2.5 rounded-xl ${bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <h4 className="font-bold text-base group-hover:text-primary transition-colors duration-300">
                    {title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

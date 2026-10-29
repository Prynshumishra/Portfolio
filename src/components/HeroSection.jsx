import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Prynshumishra",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/prynshumishr",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:prynshu09@gmail.com",
    label: "Email",
  },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle warm ambient light */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(242, 236, 228, 0.9) 0%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(92, 64, 51, 0.05) 0%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      <div className="container w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* ── Left Column (7 cols) ── */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full border font-mono text-xs tracking-wider bg-[#FFFFFF] border-[#E2D7C9] text-[#231915] shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="font-semibold">available_for_hire</span>
              <span className="text-[#D4C5B4]">|</span>
              <span className="text-[#5A4D44]">full-time &amp; freelance</span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-mono text-xs sm:text-sm text-[#5A4D44] mb-2.5 flex items-center gap-2">
                <span className="text-[#5C4033] font-semibold">~/dev/portfolio $</span>
                <span>whoami --verbose</span>
              </p>
              <h1
                className="text-4xl sm:text-6xl xl:text-[4.25rem] font-bold leading-[1.06] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-[#231915]">Priyanshu </span>
                <span className="text-[#5C4033]">Mishra</span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#FFFFFF] border border-[#E2D7C9] shadow-2xs font-mono text-sm"
            >
              <span className="text-[#5C4033] font-bold">//</span>
              <span className="text-[#231915] font-semibold" style={{ color: "#231915" }}>
                <TypeAnimation
                  key="hero-role-v3"
                  sequence={[
                    "Full-Stack Developer",
                    2000,
                    "Multi-Tenant SaaS Architect",
                    2000,
                    "Backend & API Engineer",
                    2000,
                    "AI & LLM Integration Specialist",
                    2000,
                  ]}
                  speed={55}
                  repeat={Infinity}
                  wrapper="span"
                  className="text-[#231915]"
                  style={{ color: "#231915" }}
                />
              </span>
              <span className="terminal-cursor" />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base leading-relaxed max-w-xl text-[#5A4D44]"
            >
              Full-Stack Developer (
              <span className="text-[#231915] font-semibold">B.Tech IT, MMMUT</span>) building fast,
              scalable web platforms, resilient APIs, and AI-powered multi-tenant systems — from
              architecture to deployment.
            </motion.p>

            {/* CTAs & Social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold transition-all duration-300 bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] shadow-[0_6px_20px_rgba(35,25,21,0.18)] hover:shadow-[0_10px_28px_rgba(92,64,51,0.25)] hover:-translate-y-0.5"
              >
                <ExternalLink size={14} />
                view_projects()
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-medium transition-all duration-300 border border-[#E2D7C9] bg-[#FFFFFF] text-[#231915] hover:border-[#5C4033] hover:bg-[#F2ECE4]"
              >
                contact_me()
              </a>

              <div className="flex items-center gap-2 sm:ml-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl border border-[#E2D7C9] bg-[#FFFFFF] flex items-center justify-center text-[#5A4D44] hover:text-[#FAF7F2] hover:border-[#231915] hover:bg-[#231915] transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Deep Espresso Engineering Terminal Card (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            {/* Terminal window in Deep Executive Espresso (#1E1511) */}
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{
                background: "#1E1511",
                borderColor: "#3B2A22",
                boxShadow: "0 28px 65px -15px rgba(35, 25, 21, 0.32), 0 0 0 1px rgba(255,255,255,0.06) inset",
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b"
                style={{ borderColor: "rgba(226, 215, 201, 0.12)", background: "#160F0C" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-2 font-mono text-xs text-[#D8C8B8]">
                    engineer.config.ts
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#5C4033] text-[#FAF7F2]">
                  v2026.1
                </span>
              </div>

              {/* Code body */}
              <pre
                className="p-6 font-mono text-xs xl:text-sm leading-relaxed overflow-x-auto text-left"
                style={{ color: "#F2ECE4" }}
              >
                <code>
                  <span style={{ color: "#C5A880" }}>const </span>
                  <span style={{ color: "#FAF7F2", fontWeight: 600 }}>engineer</span>
                  <span> = {"{"}</span>{"\n"}
                  {"  "}<span style={{ color: "#D8C8B8" }}>name</span>
                  <span>: </span>
                  <span style={{ color: "#E6C79C" }}>&quot;Priyanshu Mishra&quot;</span>
                  <span>,</span>{"\n"}
                  {"  "}<span style={{ color: "#D8C8B8" }}>education</span>
                  <span>: </span>
                  <span style={{ color: "#E6C79C" }}>&quot;B.Tech IT, MMMUT&quot;</span>
                  <span>,</span>{"\n"}
                  {"  "}<span style={{ color: "#D8C8B8" }}>experience</span>
                  <span>: [</span>
                  <span style={{ color: "#E6C79C" }}>&quot;OnGraph&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#E6C79C" }}>&quot;MarTech Union&quot;</span>
                  <span>],</span>{"\n"}
                  {"  "}<span style={{ color: "#D8C8B8" }}>stack</span>
                  <span>: [</span>{"\n"}
                  {"    "}<span style={{ color: "#E6C79C" }}>&quot;React&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#E6C79C" }}>&quot;Next.js&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#E6C79C" }}>&quot;Angular&quot;</span>
                  <span>,</span>{"\n"}
                  {"    "}<span style={{ color: "#E6C79C" }}>&quot;Node.js&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#E6C79C" }}>&quot;TypeScript&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#E6C79C" }}>&quot;Spring Boot&quot;</span>
                  <span>,</span>{"\n"}
                  {"    "}<span style={{ color: "#E6C79C" }}>&quot;PostgreSQL&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#E6C79C" }}>&quot;Redis&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#E6C79C" }}>&quot;Docker&quot;</span>{"\n"}
                  {"  "}<span>],</span>{"\n"}
                  {"  "}<span style={{ color: "#D8C8B8" }}>ai</span>
                  <span>: [</span>
                  <span style={{ color: "#E6C79C" }}>&quot;OpenAI&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#E6C79C" }}>&quot;Gemini&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#E6C79C" }}>&quot;TensorFlow.js&quot;</span>
                  <span>],</span>{"\n"}
                  {"  "}<span style={{ color: "#D8C8B8" }}>metrics</span>
                  <span>: {"{"} </span>
                  <span style={{ color: "#D8C8B8" }}>apps: </span>
                  <span style={{ color: "#86EFAC" }}>&quot;17+&quot;</span>
                  <span>, </span>
                  <span style={{ color: "#D8C8B8" }}>uptime: </span>
                  <span style={{ color: "#86EFAC" }}>&quot;99.9%&quot;</span>
                  <span> {"}"}</span>{"\n"}
                  {"}"}<span>;</span>{"\n"}{"\n"}
                  <span style={{ color: "#D8C8B8", opacity: 0.65 }}>
                    // ✓ 780+ commits · ready to scale
                  </span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-14"
        >
          <span className="font-mono text-[10px] tracking-widest text-[#5A4D44]">scroll_down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#5C4033]"
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

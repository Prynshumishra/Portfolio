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

const codeSnippet = `const developer = {
  name: "Priyanshu Mishra",
  role: "Full Stack Developer",
  stack: ["React", "Next.js", "Node", "PostgreSQL", "Redis"],
  available: true,
};`;

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.15 195 / 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.18 165 / 0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left Column ── */}
          <div className="text-left space-y-6">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border font-mono text-xs tracking-wider"
              style={{
                background: "oklch(0.78 0.15 195 / 0.06)",
                borderColor: "oklch(0.78 0.15 195 / 0.2)",
                color: "oklch(0.78 0.15 195)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.18_165)] animate-pulse" />
              available_for_hire
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-mono text-sm text-[oklch(0.78_0.15_195/0.6)] mb-2">
                ~/dev/portfolio $
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-[oklch(0.93_0.01_240)]">Priyanshu</span>
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, oklch(0.78 0.15 195), oklch(0.72 0.18 165))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Mishra
                </span>
              </h1>
            </motion.div>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-2 font-mono text-sm"
            >
              <span className="text-[oklch(0.78_0.15_195/0.5)]">//</span>
              <span className="text-[oklch(0.93_0.01_240/0.7)]">
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
                  speed={55}
                  repeat={Infinity}
                  wrapper="span"
                  className="text-[oklch(0.78_0.15_195)]"
                />
              </span>
              <span className="terminal-cursor" />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-sm leading-relaxed max-w-md text-[oklch(0.55_0.02_240)]"
            >
              Shipped{" "}
              <span className="text-[oklch(0.93_0.01_240)]">5 production websites</span>{" "}
              and{" "}
              <span className="text-[oklch(0.78_0.15_195)]">10+ REST & GraphQL APIs</span>{" "}
              across MERN, Next.js, PHP, PostgreSQL & Redis — from schema to deploy.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold transition-all duration-300 bg-[oklch(0.78_0.15_195)] text-[oklch(0.1_0.02_240)] hover:shadow-[0_0_30px_oklch(0.78_0.15_195/0.4)] hover:-translate-y-0.5"
              >
                <ExternalLink size={14} />
                view_projects()
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-medium transition-all duration-300 border border-[oklch(1_0_0/0.1)] text-[oklch(0.93_0.01_240/0.7)] hover:border-[oklch(0.78_0.15_195/0.4)] hover:text-[oklch(0.78_0.15_195)] hover:bg-[oklch(0.78_0.15_195/0.05)]"
              >
                contact_me()
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[oklch(1_0_0/0.08)] flex items-center justify-center text-[oklch(0.55_0.02_240)] hover:text-[oklch(0.78_0.15_195)] hover:border-[oklch(0.78_0.15_195/0.3)] hover:bg-[oklch(0.78_0.15_195/0.06)] transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
              <span className="text-[oklch(0.55_0.02_240/0.4)] font-mono text-xs ml-1">
                — find me here
              </span>
            </motion.div>
          </div>

          {/* ── Right Column: Code card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            {/* Terminal window */}
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{
                background: "oklch(0.09 0.025 250)",
                borderColor: "oklch(1 0 0 / 0.1)",
                boxShadow: "0 0 0 1px oklch(0.78 0.15 195 / 0.08), 0 40px 80px oklch(0 0 0 / 0.6)",
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: "oklch(1 0 0 / 0.07)", background: "oklch(0.11 0.025 250)" }}
              >
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-[oklch(0.55_0.02_240)]">
                  developer.js
                </span>
              </div>

              {/* Code body */}
              <pre
                className="p-6 font-mono text-sm leading-relaxed overflow-x-auto"
                style={{ color: "oklch(0.75 0.01 240)" }}
              >
                <code>
                  <span style={{ color: "oklch(0.72 0.18 165)" }}>const </span>
                  <span style={{ color: "oklch(0.78 0.15 195)" }}>developer</span>
                  <span> = {"{"}</span>{"\n"}
                  {"  "}<span style={{ color: "oklch(0.72 0.18 165/0.7)" }}>name</span>
                  <span>: </span>
                  <span style={{ color: "oklch(0.85 0.12 90)" }}>&quot;Priyanshu Mishra&quot;</span>
                  <span>,</span>{"\n"}
                  {"  "}<span style={{ color: "oklch(0.72 0.18 165/0.7)" }}>role</span>
                  <span>: </span>
                  <span style={{ color: "oklch(0.85 0.12 90)" }}>&quot;Full Stack Developer&quot;</span>
                  <span>,</span>{"\n"}
                  {"  "}<span style={{ color: "oklch(0.72 0.18 165/0.7)" }}>stack</span>
                  <span>: [</span>
                  <span style={{ color: "oklch(0.85 0.12 90)" }}>&quot;React&quot;</span>
                  <span>, </span>
                  <span style={{ color: "oklch(0.85 0.12 90)" }}>&quot;Next.js&quot;</span>
                  <span>, </span>
                  <span style={{ color: "oklch(0.85 0.12 90)" }}>&quot;Node&quot;</span>
                  <span>, </span>
                  <span style={{ color: "oklch(0.85 0.12 90)" }}>&quot;PostgreSQL&quot;</span>
                  <span>],</span>{"\n"}
                  {"  "}<span style={{ color: "oklch(0.72 0.18 165/0.7)" }}>location</span>
                  <span>: </span>
                  <span style={{ color: "oklch(0.85 0.12 90)" }}>&quot;Prayagraj, India&quot;</span>
                  <span>,</span>{"\n"}
                  {"  "}<span style={{ color: "oklch(0.72 0.18 165/0.7)" }}>available</span>
                  <span>: </span>
                  <span style={{ color: "oklch(0.72 0.18 165)" }}>true</span>
                  <span>,</span>{"\n"}
                  {"}"}<span>;</span>{"\n"}{"\n"}
                  <span style={{ color: "oklch(0.55 0.02 240)" }}>// ✓ open to full-time &amp; freelance</span>
                </code>
              </pre>

              {/* Scan line effect */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(transparent 40%, oklch(0.78 0.15 195 / 0.02) 50%, transparent 60%)",
                  animation: "scan 4s ease-in-out infinite",
                }}
              />
            </div>

            {/* Floating stat badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl border font-mono text-xs"
              style={{
                background: "oklch(0.1 0.025 250)",
                borderColor: "oklch(0.72 0.18 165 / 0.3)",
                boxShadow: "0 0 20px oklch(0.72 0.18 165 / 0.1)",
              }}
            >
              <div className="text-[oklch(0.72_0.18_165)] font-bold text-lg leading-none">10+</div>
              <div className="text-[oklch(0.55_0.02_240)] mt-0.5">REST APIs</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-4 px-4 py-3 rounded-xl border font-mono text-xs"
              style={{
                background: "oklch(0.1 0.025 250)",
                borderColor: "oklch(0.78 0.15 195 / 0.3)",
                boxShadow: "0 0 20px oklch(0.78 0.15 195 / 0.1)",
              }}
            >
              <div className="text-[oklch(0.78_0.15_195)] font-bold text-lg leading-none">8+</div>
              <div className="text-[oklch(0.55_0.02_240)] mt-0.5">Projects</div>
            </motion.div>
          </motion.div>
        </div>

       

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-16"
        >
          <span className="font-mono text-[10px] tracking-widest text-[oklch(0.55_0.02_240/0.5)]">scroll_down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[oklch(0.78_0.15_195/0.4)]"
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

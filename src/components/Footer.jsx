import { ArrowUp, Heart, Mail, MapPin, Phone, Globe } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "profiles", href: "#coding" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "experience", href: "#experience" },
  { name: "contact", href: "#contact" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/Prynshumishra", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/prynshumishr", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/prynshu09", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com/Prynshumishr", label: "Instagram" },
];

const contacts = [
  { icon: Mail, value: "prynshu09@gmail.com", href: "mailto:prynshu09@gmail.com" },
  { icon: Phone, value: "+91 82995 25726", href: "tel:+918299525726" },
  { icon: MapPin, value: "Prayagraj, India", href: null },
  { icon: Globe, value: "github.com/Prynshumishra", href: "https://github.com/Prynshumishra" },
];

export const Footer = () => (
  <footer className="relative mt-12 overflow-hidden" style={{ borderTop: "1px solid oklch(1 0 0 / 0.07)", background: "oklch(0.08 0.02 245)" }}>
    {/* Top accent */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
      style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.15 195 / 0.4), transparent)" }} />

    <div className="container mx-auto max-w-7xl pt-14 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center lg:text-left items-start justify-items-center lg:justify-items-start">

        {/* Brand */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start gap-4">
          <a href="#hero" className="group flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm"
              style={{ background: "oklch(0.78 0.15 195 / 0.1)", border: "1px solid oklch(0.78 0.15 195 / 0.25)", color: "oklch(0.78 0.15 195)" }}>
              PM
            </div>
            <span className="font-mono text-sm">
              <span style={{ color: "oklch(0.78 0.15 195)" }}>&lt;</span>
              <span style={{ color: "oklch(0.85 0.01 240)" }}>Priyanshu Mishra</span>
              <span style={{ color: "oklch(0.78 0.15 195)" }}>/&gt;</span>
            </span>
          </a>
          <p className="text-xs leading-relaxed max-w-xs" style={{ color: "oklch(0.55 0.02 240)" }}>
            MERN Stack Developer building scalable full-stack applications with modern technologies and performance-first approaches.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[10px]"
            style={{ background: "oklch(0.72 0.18 165 / 0.08)", border: "1px solid oklch(0.72 0.18 165 / 0.2)", color: "oklch(0.72 0.18 165)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "oklch(0.72 0.18 165)" }} />
            open_to_opportunities
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "oklch(0.78 0.15 195)" }}>// nav</p>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.name}>
                <a href={l.href}
                  className="font-mono text-xs transition-colors duration-200"
                  style={{ color: "oklch(0.55 0.02 240)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "oklch(0.78 0.15 195)"}
                  onMouseLeave={e => e.currentTarget.style.color = "oklch(0.55 0.02 240)"}
                >
                  <span style={{ color: "oklch(0.78 0.15 195 / 0.4)" }}>./</span>{l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "oklch(0.78 0.15 195)" }}>// contact</p>
          <ul className="space-y-2.5">
            {contacts.map(({ icon: Icon, value, href }) => (
              <li key={value} className="flex justify-center lg:justify-start">
                {href ? (
                  <a href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-start gap-2 font-mono text-xs transition-colors duration-200"
                    style={{ color: "oklch(0.55 0.02 240)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "oklch(0.78 0.15 195)"}
                    onMouseLeave={e => e.currentTarget.style.color = "oklch(0.55 0.02 240)"}
                  >
                    <Icon size={12} className="mt-0.5 shrink-0" style={{ color: "oklch(0.78 0.15 195 / 0.5)" }} />
                    <span className="break-all">{value}</span>
                  </a>
                ) : (
                  <span className="inline-flex items-start gap-2 font-mono text-xs" style={{ color: "oklch(0.55 0.02 240)" }}>
                    <Icon size={12} className="mt-0.5 shrink-0" style={{ color: "oklch(0.78 0.15 195 / 0.5)" }} />
                    {value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "oklch(0.78 0.15 195)" }}>// follow_me</p>
          <div className="grid grid-cols-2 gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl font-mono text-xs border transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "oklch(1 0 0 / 0.03)", borderColor: "oklch(1 0 0 / 0.08)", color: "oklch(0.55 0.02 240)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "oklch(0.78 0.15 195 / 0.3)"; e.currentTarget.style.color = "oklch(0.78 0.15 195)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "oklch(1 0 0 / 0.08)"; e.currentTarget.style.color = "oklch(0.55 0.02 240)"; }}
              >
                <Icon size={12} />
                {label.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-6" style={{ borderTop: "1px solid oklch(1 0 0 / 0.07)" }}>
        <p className="font-mono text-[10px]" style={{ color: "oklch(0.45 0.01 240)" }}>
          &copy; {new Date().getFullYear()} Priyanshu Mishra — all_rights_reserved
        </p>
        <a href="#hero" aria-label="Back to top"
          className="p-2.5 rounded-xl border transition-all duration-300 hover:-translate-y-1"
          style={{ background: "oklch(0.78 0.15 195 / 0.08)", borderColor: "oklch(0.78 0.15 195 / 0.2)", color: "oklch(0.78 0.15 195)" }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px oklch(0.78 0.15 195 / 0.3)"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
        >
          <ArrowUp size={14} />
        </a>
        <p className="font-mono text-[10px] flex items-center gap-1" style={{ color: "oklch(0.45 0.01 240)" }}>
          built_with <Heart size={9} className="fill-current" style={{ color: "oklch(0.65 0.22 25)" }} /> using MERN + Tailwind
        </p>
      </div>
    </div>
  </footer>
);

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
  <footer className="relative z-10 mt-12 overflow-hidden bg-[#1E1511] text-[#F2ECE4] border-t border-[#3B2A22]">
    <div className="container w-full mx-auto pt-14 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center lg:text-left items-start justify-items-center lg:justify-items-start">
        {/* Brand */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start gap-4">
          <a href="#hero" className="group flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm bg-[#5C4033] text-[#FAF7F2]">
              PM
            </div>
            <span className="font-mono text-sm">
              <span className="text-[#C5A880]">&lt;</span>
              <span className="text-[#FAF7F2] font-semibold">Priyanshu Mishra</span>
              <span className="text-[#C5A880]">/&gt;</span>
            </span>
          </a>
          <p className="text-xs leading-relaxed max-w-xs text-[#D8C8B8]/80">
            Full-Stack Developer building scalable web platforms and multi-tenant SaaS architectures with modern technologies and high-reliability engineering.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-[10px] bg-[#2D201A] border border-[#5C4033]/50 text-[#FAF7F2]">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#4ADE80]" />
            open_to_opportunities
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-mono text-[10px] uppercase tracking-widest mb-5 text-[#C5A880]">
            // nav
          </p>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  className="font-mono text-xs text-[#D8C8B8]/80 hover:text-[#FAF7F2] transition-colors duration-200"
                >
                  <span className="text-[#C5A880]/60">./</span>
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-mono text-[10px] uppercase tracking-widest mb-5 text-[#C5A880]">
            // contact
          </p>
          <ul className="space-y-2.5">
            {contacts.map(({ icon: Icon, value, href }) => (
              <li key={value} className="flex justify-center lg:justify-start">
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-start gap-2 font-mono text-xs text-[#D8C8B8]/80 hover:text-[#FAF7F2] transition-colors duration-200"
                  >
                    <Icon size={12} className="mt-0.5 shrink-0 text-[#C5A880]" />
                    <span className="break-all">{value}</span>
                  </a>
                ) : (
                  <span className="inline-flex items-start gap-2 font-mono text-xs text-[#D8C8B8]/80">
                    <Icon size={12} className="mt-0.5 shrink-0 text-[#C5A880]" />
                    {value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="font-mono text-[10px] uppercase tracking-widest mb-5 text-[#C5A880]">
            // follow_me
          </p>
          <div className="grid grid-cols-2 gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl font-mono text-xs border border-[#5C4033]/40 bg-[#2D201A] text-[#F2ECE4] hover:bg-[#5C4033] hover:border-[#C5A880]/50 hover:text-[#FAF7F2] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon size={12} />
                {label.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#3B2A22]">
        <p className="font-mono text-[10px] text-[#D8C8B8]/70">
          &copy; {new Date().getFullYear()} Priyanshu Mishra — all_rights_reserved
        </p>
        <a
          href="#hero"
          aria-label="Back to top"
          className="p-2.5 rounded-xl border border-[#5C4033]/50 bg-[#2D201A] text-[#FAF7F2] hover:bg-[#5C4033] transition-all duration-300 hover:-translate-y-1"
        >
          <ArrowUp size={14} />
        </a>
        <p className="font-mono text-[10px] flex items-center gap-1 text-[#D8C8B8]/70">
          built_with <Heart size={9} className="fill-current text-[#E57373]" /> using MERN + Tailwind
        </p>
      </div>
    </div>
  </footer>
);

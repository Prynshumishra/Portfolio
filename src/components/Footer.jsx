import { ArrowUp, ArrowRight, Globe, Heart, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Coding", href: "#coding" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/Prynshumishra",
    label: "GitHub",
    hoverClass: "hover:bg-zinc-800 hover:text-white hover:border-zinc-700",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/prynshumishr",
    label: "LinkedIn",
    hoverClass: "hover:bg-blue-600 hover:text-white hover:border-blue-500",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/prynshu09",
    label: "Twitter / X",
    hoverClass: "hover:bg-sky-500 hover:text-white hover:border-sky-400",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/Prynshumishr",
    label: "Instagram",
    hoverClass: "hover:bg-pink-500 hover:text-white hover:border-pink-400",
  },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 bg-card/50 backdrop-blur-sm overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto max-w-7xl pt-14 pb-6">
        {/* ── Main grid ──
             Desktop (lg): 4 equal columns, left-aligned
             Tablet (md):  2 columns, left-aligned
             Mobile:       1 column, center-aligned
        */}
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-12
text-center lg:text-left items-start justify-items-center lg:justify-items-start">
          {/* ── Brand ── */}
        <div className="md:col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start gap-4">
            <a href="#hero" className="flex items-center gap-2 group">
              <span className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-black group-hover:rotate-6 transition-transform duration-300 shadow-sm shadow-primary/30">
                P
              </span>
              <span className="flex items-center text-lg font-bold tracking-tight">
  <span className="text-foreground">Priyanshu</span>
  <span className="text-primary ml-1">Mishra</span>
</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
             MERN Stack Developer building scalable full-stack applications with modern technologies, delivering high-performance solutions and seamless user experiences.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to opportunities
            </div>
          </div>

          {/* ── Quick Links ── */}
<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
  <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-5">
    Quick Links
  </p>

  <ul className="space-y-3">
    {footerLinks.map((link) => (
      <li key={link.name}>
        <a
          href={link.href}
          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</div>

{/* ── Contact ── */}
<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
  <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-5">
    Contact
  </p>

  <ul className="space-y-3 w-full">
    {[
      { icon: Mail, value: "prynshu09@gmail.com", href: "mailto:prynshu09@gmail.com" },
      { icon: Phone, value: "+91 82995 25726", href: "tel:+918299525726" },
      { icon: MapPin, value: "Prayagraj, India", href: null },
      { icon: Globe, value: "github.com/Prynshumishra", href: "https://github.com/Prynshumishra" },
    ].map(({ icon: Icon, value, href }) => (
     <li key={value} className="flex justify-center lg:justify-start w-full">
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group max-w-full"
          >
            <Icon size={13} className="mt-0.5 shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
            <span className="break-all">{value}</span>
          </a>
        ) : (
          <span className="inline-flex items-start gap-2 text-sm text-muted-foreground">
            <Icon size={13} className="mt-0.5 shrink-0 text-primary/60" />
            {value}
          </span>
        )}
      </li>
    ))}
  </ul>
</div>

{/* ── Social ── */}
<div className="flex flex-col items-center lg:items-start text-center lg:text-left">
  <p className="text-xs font-bold text-foreground uppercase tracking-widest mb-5">
    Follow Me
  </p>

  <div className="grid grid-cols-2 gap-2.5 w-full max-w-[180px] lg:max-w-none justify-items-center lg:justify-items-start">
    {socialLinks.map(({ icon: Icon, href, label, hoverClass }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`flex items-center justify-center lg:justify-start gap-2 px-3 py-2.5 rounded-xl bg-secondary/60 text-muted-foreground border border-border/50 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${hoverClass}`}
      >
        <Icon size={13} />
        <span>{label.split(" ")[0]}</span>
      </a>
    ))}
  </div>
</div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-6 border-t border-border/40">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-foreground/70">Priyanshu Mishra</span>
            {" "}&mdash; All rights reserved.
          </p>
          <a
            href="#hero"
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/20 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25 shrink-0"
          >
            <ArrowUp size={15} />
          </a>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with{" "}
            <Heart size={10} className="text-red-500 fill-red-500 mx-0.5" />{" "}
            using MERN Stack &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
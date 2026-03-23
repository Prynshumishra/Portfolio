import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "About Me", href: "#about" },
  { name: "Coding Profiles", href: "#coding" },
  { name: "Tech Stack", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      let current = "hero";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = item.href.replace("#", "");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-500 rounded-full",
          isScrolled
            ? "py-3 bg-card/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border-2 border-border/20"
            : "py-4 bg-transparent border-2 border-transparent"
        )}
      >
        <div className="mx-auto px-4 flex items-center justify-between gap-4">

          {/* Logo */}
          <a className="flex items-center gap-2 group shrink-0" href="#hero">
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-black group-hover:rotate-6 transition-transform duration-300">
              P
            </span>

            <span className="text-base font-bold tracking-tight">
              <span className="text-foreground">Priyanshu</span>
              <span className="text-primary" > Mishra</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 mx-auto">
            {navItems.map((item) => {
              const section = item.href.replace("#", "");

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    activeSection === section
                      ? "text-primary bg-primary/10"
                      : "text-foreground/65 hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {item.name}

                  {activeSection === section && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_16px_rgba(139,92,246,0.45)] hover:-translate-y-0.5"
          >
            Let’s Connect
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg text-foreground hover:bg-secondary transition-colors z-50"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Backdrop */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-background border-l border-border shadow-2xl z-50 md:hidden flex flex-col transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <a
            href="#hero"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-xs font-black">
              P
            </span>
            <span className="text-sm font-bold">
              Priyanshu<span className="text-primary">Priyanshu</span>
            </span>
          </a>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1.5 rounded-lg hover:bg-secondary"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navItems.map((item) => {
            const section = item.href.replace("#", "");

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
                  activeSection === section
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                )}
              >
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    activeSection === section ? "bg-primary" : "bg-border"
                  )}
                />
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Drawer Footer */}
        <div className="px-6 pb-8">
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold text-center hover:shadow-lg hover:shadow-primary/30"
          >
            Hire Me
          </a>

          <p className="text-center text-xs text-muted-foreground mt-4">
            prynshu09@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};
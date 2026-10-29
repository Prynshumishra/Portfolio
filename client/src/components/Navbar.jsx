import { cn } from "@/lib/utils";
import { Menu, X, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "about", label: "About", href: "#about" },
  { name: "coding", label: "Profiles", href: "#coding" },
  { name: "skills", label: "Skills", href: "#skills" },
  { name: "projects", label: "Projects", href: "#projects" },
  { name: "experience", label: "Experience", href: "#experience" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      let current = "hero";
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = item.name;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "py-3.5 bg-[#FAF7F2]/92 backdrop-blur-xl border-b border-[#E2D7C9] shadow-[0_6px_24px_rgba(35,25,21,0.05)]"
            : "py-5 bg-transparent border-b border-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-8 h-8 rounded-lg bg-[#231915] flex items-center justify-center group-hover:bg-[#5C4033] transition-all duration-300">
              <Terminal size={14} className="text-[#FAF7F2] group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-mono text-sm font-bold tracking-tight">
              <span className="text-[#5C4033]">&lt;</span>
              <span className="text-[#231915]">PM</span>
              <span className="text-[#5C4033]">/&gt;</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 mx-auto p-1 rounded-2xl bg-[#F2ECE4]/80 border border-[#E2D7C9]">
            {navItems.map((item, i) => {
              const isActive = activeSection === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-medium rounded-xl transition-all duration-300 font-[family-name:var(--font-sans)]",
                    isActive
                      ? "text-[#231915]"
                      : "text-[#5A4D44] hover:text-[#231915]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-xl bg-[#FFFFFF] border border-[#E2D7C9] shadow-xs"
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10 font-mono text-xs tracking-wide">
                    <span className="text-[#5C4033]/75">{String(i + 1).padStart(2, "0")}.</span>{" "}
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold tracking-wide transition-all duration-300 bg-[#231915] text-[#FAF7F2] hover:bg-[#5C4033] hover:shadow-[0_6px_20px_rgba(35,25,21,0.2)] hover:-translate-y-0.5 shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            hire_me()
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[#E2D7C9] bg-[#FFFFFF] text-[#231915] hover:bg-[#F2ECE4] transition-colors"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-[#1E1511]/40 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-72 max-w-[85vw] z-50 md:hidden flex flex-col bg-[#FAF7F2] border-l border-[#E2D7C9]"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2D7C9]">
              <span className="font-mono text-sm font-bold text-[#231915]">
                <span className="text-[#5C4033]">&lt;</span>
                <span>PM</span>
                <span className="text-[#5C4033]">/&gt;</span>
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1.5 rounded-lg text-[#231915] hover:bg-[#F2ECE4] transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Drawer Nav */}
            <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-sm transition-all duration-200",
                      isActive
                        ? "text-[#231915] font-semibold bg-[#FFFFFF] border border-[#E2D7C9] shadow-xs"
                        : "text-[#5A4D44] hover:text-[#231915] hover:bg-[#F2ECE4]"
                    )}
                  >
                    <span className="text-[#5C4033] text-xs">{String(i + 1).padStart(2, "0")}.</span>
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="px-6 pb-8">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-3 rounded-xl bg-[#231915] text-[#FAF7F2] font-mono text-sm font-semibold text-center hover:bg-[#5C4033] transition-all"
              >
                hire_me()
              </a>
              <p className="text-center font-mono text-xs text-[#5A4D44] mt-4">
                prynshu09@gmail.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

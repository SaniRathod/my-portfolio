import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, FileText, ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#expertise", label: "Expertise" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const { toggleResume, toggleTerminal, toggleAdmin } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["hero", "about", "experience", "work", "skills", "expertise", "education", "contact"];
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 180 && rect.bottom >= 180;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#06080f]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="w-[min(1200px,calc(100%-40px))] mx-auto flex items-center justify-between">
          
          {/* Custom Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00e5ff] via-[#6366f1] to-[#a855f7] p-[1.5px] shadow-[0_0_20px_rgba(0,229,255,0.25)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all">
              <div className="w-full h-full bg-[#06080f] rounded-xl flex items-center justify-center font-black text-sm text-white">
                SR
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[#f1f5f9] group-hover:text-[#00e5ff] transition-colors">
                Sani Rathod
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#64748b]">
                Software Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#0c101c]/80 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg">
            {NAV_ITEMS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
                    isActive
                      ? "text-white bg-gradient-to-r from-[#00e5ff]/20 to-[#6366f1]/20 border border-[#00e5ff]/30 shadow-sm"
                      : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Terminal Shell Button */}
            <button
              onClick={toggleTerminal}
              title="Open Developer Terminal (Ctrl+K)"
              className="p-2.5 rounded-xl bg-[#0c101c] border border-white/10 text-[#94a3b8] hover:text-[#00e5ff] hover:border-[#00e5ff]/30 transition-all hover:scale-105"
            >
              <Terminal className="w-4 h-4" />
            </button>

            {/* Admin Dashboard */}
            <button
              onClick={toggleAdmin}
              title="Open Admin Dashboard"
              className="p-2.5 rounded-xl bg-[#0c101c] border border-white/10 text-[#94a3b8] hover:text-[#a855f7] hover:border-[#a855f7]/30 transition-all hover:scale-105"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>

            {/* Download CV (triggers ResumeModal with email dispatch) */}
            <button
              onClick={toggleResume}
              className="sr-btn-ghost !text-xs !py-2 !px-3.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span>Download CV</span>
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="sr-btn-primary !text-xs !py-2 !px-4"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={toggleResume}
              className="sr-btn-ghost !text-xs !py-1.5 !px-2.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 rounded-xl bg-[#0c101c] border border-white/10 text-[#f1f5f9]"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md lg:hidden animate-fade-in"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-[min(320px,85vw)] bg-[#0c101c] border-l border-white/10 p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00e5ff] to-[#6366f1] flex items-center justify-center font-bold text-xs text-white">
                    SR
                  </div>
                  <span className="font-bold text-sm text-[#f1f5f9]">Sani Rathod</span>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 text-[#94a3b8] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {NAV_ITEMS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-[#94a3b8] hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-2.5 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  toggleResume();
                }}
                className="sr-btn-ghost w-full justify-center !text-xs !py-2.5"
              >
                <FileText className="w-4 h-4 text-[#00e5ff]" />
                <span>Download CV (PDF)</span>
              </button>

              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  toggleAdmin();
                }}
                className="sr-btn-ghost w-full justify-center !text-xs !py-2.5 text-[#a855f7]"
              >
                <ShieldCheck className="w-4 h-4 text-[#a855f7]" />
                <span>Admin Dashboard</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="sr-btn-primary w-full justify-center !text-xs !py-2.5"
              >
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight, Sparkles, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Solutions" },
  { href: "#experience", label: "Trajectory" },
  { href: "#skills", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const { theme, toggleTheme, toggleResume } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["hero", "about", "work", "experience", "skills", "contact"];
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
            ? "bg-white/90 dark:bg-[#080d1a]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-[0_4px_25px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="w-[min(1200px,calc(100%-40px))] mx-auto flex items-center justify-between">
          
          {/* Custom Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0284c7] via-[#2563eb] to-[#38bdf8] p-[1.5px] shadow-[0_0_15px_rgba(2,132,199,0.2)] group-hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] transition-all">
              <div className="w-full h-full bg-white dark:bg-[#080d1a] rounded-[10px] flex items-center justify-center font-bold text-sm text-[#0f172a] dark:text-white tracking-tight">
                SR
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-[#0284c7] dark:group-hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                Sani Rathod
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-[#64748b]">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-100/80 dark:bg-[#0f172a]/70 border border-slate-200/80 dark:border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm">
            {NAV_ITEMS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all ${
                    isActive
                      ? "text-[#0284c7] dark:text-white bg-white dark:bg-gradient-to-r dark:from-[#0284c7]/25 dark:to-[#2563eb]/25 border border-slate-200 dark:border-[#38bdf8]/30 shadow-sm"
                      : "text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Theme Toggle Button (Light/Dark Switcher) */}
            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-[#94a3b8] hover:text-[#0284c7] dark:hover:text-[#38bdf8] hover:border-[#0284c7]/40 dark:hover:border-[#38bdf8]/40 transition-all hover:scale-105 shadow-sm"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#f59e0b]" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Download CV */}
            <button
              onClick={toggleResume}
              className="sr-btn-ghost !text-xs !py-2 !px-3.5"
            >
              <Download className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
              <span>Download CV</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="sr-btn-primary !text-xs !py-2 !px-4"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              title="Toggle Theme"
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-[#94a3b8]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#f59e0b]" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={toggleResume}
              className="sr-btn-ghost !text-xs !py-1.5 !px-2.5"
            >
              <Download className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-white"
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
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md md:hidden animate-fade-in"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className="absolute top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-[#0f172a] border-l border-slate-200 dark:border-white/[0.08] p-6 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-white/[0.08]">
                <span className="font-bold text-sm text-slate-900 dark:text-white">Sani Rathod</span>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 text-slate-500 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white"
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
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-[#cbd5e1] hover:bg-slate-100 dark:hover:bg-white/5 hover:text-[#0284c7] dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-white/[0.08]">
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  toggleResume();
                }}
                className="sr-btn-primary w-full justify-center !text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV (PDF)</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="sr-btn-ghost w-full justify-center !text-xs"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

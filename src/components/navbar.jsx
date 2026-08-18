import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight, Sparkles, Download, Sun, Moon, Home, User, Briefcase, Code, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./SocialIcons";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { href: "#about", label: "About", icon: User },
  { href: "#work", label: "Solutions", icon: Briefcase },
  { href: "#experience", label: "Trajectory", icon: Briefcase },
  { href: "#skills", label: "Capabilities", icon: Code },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { theme, toggleTheme, toggleResume } = useTheme();

  // Scroll detection & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["hero", "about", "work", "experience", "skills", "expertise", "education", "contact"];
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

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
            ? "bg-white/95 dark:bg-[#080d1a]/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-[0_4px_25px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2.5 sm:py-3"
            : "bg-transparent py-3.5 sm:py-5"
        }`}
      >
        <div className="w-[min(1200px,calc(100%-32px))] mx-auto flex items-center justify-between">
          
          {/* Custom Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-2.5 group select-none"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#0284c7] via-[#2563eb] to-[#38bdf8] p-[1.5px] shadow-[0_0_15px_rgba(2,132,199,0.25)] group-hover:shadow-[0_0_20px_rgba(2,132,199,0.4)] transition-all flex-shrink-0">
              <div className="w-full h-full bg-white dark:bg-[#080d1a] rounded-[10px] flex items-center justify-center font-bold text-xs sm:text-sm text-slate-900 dark:text-white tracking-tight">
                SR
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xs sm:text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-[#0284c7] dark:group-hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                Sani Rathod
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500 dark:text-[#64748b]">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-100/90 dark:bg-[#0f172a]/80 border border-slate-200/80 dark:border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm">
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

          {/* Desktop Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Theme Toggle Button (Light/Dark Switcher) */}
            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-[#94a3b8] hover:text-[#0284c7] dark:hover:text-[#38bdf8] hover:border-[#0284c7]/40 dark:hover:border-[#38bdf8]/40 transition-all hover:scale-105 shadow-sm"
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

          {/* Mobile Action Controls */}
          <div className="flex sm:hidden items-center space-x-2">
            {/* Theme Switcher on Mobile Bar */}
            <button
              onClick={toggleTheme}
              title="Toggle Theme"
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-[#94a3b8] shadow-sm"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#f59e0b]" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Compact CV Button on Mobile Bar */}
            <button
              onClick={toggleResume}
              className="sr-btn-ghost !text-xs !py-1.5 !px-2.5 font-bold flex items-center gap-1 shadow-sm"
            >
              <Download className="w-3 h-3 text-[#0284c7] dark:text-[#38bdf8]" />
              <span>CV</span>
            </button>

            {/* Hamburger Drawer Toggle */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-white shadow-sm hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md md:hidden animate-fade-in flex justify-end"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className="w-[85%] max-w-[320px] h-full bg-white dark:bg-[#0f172a] border-l border-slate-200 dark:border-white/[0.08] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0284c7] to-[#2563eb] flex items-center justify-center font-bold text-xs text-white">
                    SR
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Sani Rathod</h3>
                    <p className="text-[10px] text-slate-500 dark:text-[#64748b] font-mono">Software Developer</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-[#080d1a] text-slate-500 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with Icons */}
              <div className="space-y-1.5">
                {NAV_ITEMS.map((link) => {
                  const IconComponent = link.icon;
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-[#0284c7]/10 dark:bg-[#0284c7]/20 text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/20 dark:border-[#38bdf8]/30 shadow-sm"
                          : "text-slate-700 dark:text-[#cbd5e1] hover:bg-slate-100 dark:hover:bg-white/5 hover:text-[#0284c7] dark:hover:text-white"
                      }`}
                    >
                      <IconComponent className="w-4 h-4 flex-shrink-0" />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Theme Toggle Button inside Drawer */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-[#cbd5e1]"
                >
                  <span className="flex items-center gap-2">
                    {theme === 'dark' ? <Moon className="w-4 h-4 text-[#38bdf8]" /> : <Sun className="w-4 h-4 text-[#f59e0b]" />}
                    <span>Theme</span>
                  </span>
                  <span className="font-mono text-[10px] text-slate-500 dark:text-[#64748b] uppercase">
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-white/[0.08]">
              <button
                onClick={() => {
                  setIsDrawerOpen(false);
                  toggleResume();
                }}
                className="sr-btn-primary w-full justify-center !text-xs !py-3 !rounded-xl"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV (PDF)</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="sr-btn-ghost w-full justify-center !text-xs !py-3 !rounded-xl font-bold"
              >
                <span>Let's Talk / Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Social Links Ribbon */}
              <div className="flex items-center justify-center space-x-3 pt-2">
                <a
                  href="https://in.linkedin.com/in/sani-rathod"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-slate-100 dark:bg-[#080d1a] rounded-xl text-slate-600 dark:text-[#94a3b8] hover:text-[#0284c7] dark:hover:text-[#38bdf8]"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/SaniRathod"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-slate-100 dark:bg-[#080d1a] rounded-xl text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="mailto:sanirathod8975@gmail.com"
                  className="p-2.5 bg-slate-100 dark:bg-[#080d1a] rounded-xl text-slate-600 dark:text-[#94a3b8] hover:text-rose-500"
                >
                  <MailIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

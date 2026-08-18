import React, { useState, useEffect } from "react";
import { ArrowUp, Terminal, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { toggleTerminal, toggleAdmin } = useTheme();
  const [viewCount, setViewCount] = useState("2,184");

  useEffect(() => {
    const stored = parseInt(localStorage.getItem("portfolio-views-count") || "2180", 10);
    const updated = stored + 1;
    localStorage.setItem("portfolio-views-count", updated.toString());
    setViewCount(updated.toLocaleString());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-slate-200/80 dark:border-white/[0.06] text-xs text-slate-500 dark:text-[#64748b] bg-white dark:bg-[#060a12]">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-slate-700 dark:text-[#cbd5e1] font-medium">
            © {new Date().getFullYear()} <strong className="text-slate-900 dark:text-white font-bold">Sani Rathod</strong> — Software Developer · Next.js 16 · Java · TypeScript · PostgreSQL
          </p>
          <p className="text-[11px] text-slate-500 dark:text-[#64748b]">
            Architected with React 19 &amp; Tailwind CSS • Hinjewadi Phase 1, Pune
          </p>
        </div>

        {/* Center: Live Profile Views */}
        <div className="font-mono text-xs text-slate-600 dark:text-[#64748b] flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse"></span>
          <span><strong className="text-[#0284c7] dark:text-[#38bdf8] font-bold">{viewCount}</strong> profile telemetry views</span>
        </div>

        {/* Right: Actions & Socials */}
        <div className="flex items-center space-x-2.5">
          <a
            href="https://in.linkedin.com/in/sani-rathod"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] hover:border-[#0284c7]/40 dark:hover:border-[#38bdf8]/40 text-slate-600 dark:text-[#94a3b8] hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-all hover:scale-105 shadow-sm"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/SaniRathod"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] hover:border-slate-400 dark:hover:border-white/40 text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white transition-all hover:scale-105 shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <button
            onClick={toggleTerminal}
            title="Open Terminal (CLI)"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] hover:border-[#059669]/40 dark:hover:border-[#34d399]/40 text-slate-600 dark:text-[#94a3b8] hover:text-[#059669] dark:hover:text-[#34d399] transition-all hover:scale-105 shadow-sm"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            onClick={toggleAdmin}
            title="Admin Login"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] hover:border-[#8b5cf6]/40 text-slate-600 dark:text-[#94a3b8] hover:text-[#8b5cf6] transition-all hover:scale-105 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] hover:border-[#0284c7]/40 dark:hover:border-[#38bdf8]/40 text-slate-600 dark:text-[#94a3b8] hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-all hover:scale-105 shadow-sm"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

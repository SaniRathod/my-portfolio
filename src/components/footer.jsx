import React, { useState, useEffect } from "react";
import { ArrowUp, Terminal, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./SocialIcons";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { toggleResume, toggleTerminal, toggleAdmin } = useTheme();
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
    <footer className="py-10 border-t border-white/10 text-xs text-[#64748b] bg-[#06080f]">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p>
            © {new Date().getFullYear()} <strong className="text-[#f1f5f9]">Sani Rathod</strong> — Software Developer · Next.js 16 · Java · TypeScript · PostgreSQL
          </p>
          <p className="text-[11px] text-[#64748b]">
            Architected with React.js &amp; Tailwind CSS • Hinjewadi Phase 1, Pune
          </p>
        </div>

        {/* Center: Live Profile Views */}
        <div className="font-mono text-xs text-[#64748b] flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c101c] border border-white/10 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse"></span>
          <span><strong className="text-[#00e5ff]">{viewCount}</strong> profile views</span>
        </div>

        {/* Right: Actions & Socials */}
        <div className="flex items-center space-x-2.5">
          <a
            href="https://in.linkedin.com/in/sani-rathod"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-[#0c101c] border border-white/10 hover:border-[#00e5ff]/40 text-[#94a3b8] hover:text-[#00e5ff] transition-all hover:scale-105"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/SaniRathod"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-[#0c101c] border border-white/10 hover:border-white/40 text-[#94a3b8] hover:text-white transition-all hover:scale-105"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <button
            onClick={toggleTerminal}
            title="Open Terminal (CLI)"
            className="p-2.5 rounded-xl bg-[#0c101c] border border-white/10 hover:border-[#10b981]/40 text-[#94a3b8] hover:text-[#10b981] transition-all hover:scale-105"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            onClick={toggleAdmin}
            title="Admin Login"
            className="p-2.5 rounded-xl bg-[#0c101c] border border-white/10 hover:border-[#a855f7]/40 text-[#94a3b8] hover:text-[#a855f7] transition-all hover:scale-105"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="p-2.5 rounded-xl bg-[#0c101c] border border-white/10 hover:border-[#00e5ff]/40 text-[#94a3b8] hover:text-[#00e5ff] transition-all hover:scale-105"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

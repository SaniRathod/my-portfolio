import React, { useState, useEffect } from "react";
import { ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./SocialIcons";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 transition-colors pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-900">
          {/* Left Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-md">
              S
            </div>
            <div>
              <span className="font-extrabold text-slate-900 dark:text-white text-lg tracking-tight">Sani Rathod</span>
              <p className="text-xs text-slate-500 dark:text-slate-400">Full Stack Software Developer</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
            <a href="#work" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a
              href="https://in.linkedin.com/in/sani-rathod"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/SaniRathod"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:sanirathod8975@gmail.com"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors"
            >
              <MailIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© 2026 Sani Rathod. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>using React 19 & Tailwind CSS</span>
          </p>
        </div>

      </div>

      {/* Back to Top Floating Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 p-3 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/30 hover:bg-blue-500 transition-all hover:scale-110 z-30 animate-bounce-soft"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}

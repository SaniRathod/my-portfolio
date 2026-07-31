import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Terminal, Sparkles, Code2, Database, Building2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./SocialIcons";
import { useTheme } from "../context/ThemeContext";

const ROLES = [
  "Software Developer @ Varnilix ⚡",
  "Next.js 16 & TypeScript Engineer 🚀",
  "PostgreSQL & Supabase Specialist 🗄️",
  "Java & Spring Boot Developer ☕",
];

export default function Hero() {
  const { toggleResume, toggleTerminal, siteSettings } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting && displayText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 90);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-600/20 rounded-full filter blur-3xl animate-pulse-glow pointer-events-none delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{siteSettings.availabilityStatus}</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi There, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-600 to-indigo-600 dark:from-blue-400 dark:via-emerald-400 dark:to-indigo-400">
                  {siteSettings.name || "Sani Rathod"}
                </span>
              </h1>
              
              <div className="h-14 mt-3 flex items-center text-xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200">
                <span>I Am Into&nbsp;</span>
                <span className="text-emerald-600 dark:text-emerald-400 border-r-2 border-emerald-600 dark:border-emerald-400 pr-1 animate-pulse">
                  {displayText}
                </span>
              </div>
            </div>

            {/* Paragraph Bio */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Software Developer at <strong className="text-slate-900 dark:text-slate-100">Varnilix Pvt Ltd</strong> (Hinjewadi Phase 1, Pune). Specializing in <strong className="text-emerald-600 dark:text-emerald-400">Next.js 16, TypeScript, PostgreSQL DB, Supabase</strong>, and Java Spring Boot microservices.
            </p>

            {/* Current Position Tag */}
            <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl inline-flex items-center space-x-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Building2 className="w-4 h-4 text-emerald-500" />
              <span>Current Project: <strong>UWMS (Unified Wage Management System)</strong></span>
            </div>

            {/* CTAs Button Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-7 py-3.5 rounded-2xl text-sm font-bold shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View UWMS & Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={toggleResume}
                className="inline-flex items-center space-x-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-6 py-3.5 rounded-2xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>View Resume</span>
              </button>

              <button
                onClick={toggleTerminal}
                title="Launch Developer CLI Shell"
                className="p-3.5 rounded-2xl bg-slate-900 dark:bg-slate-800 text-emerald-400 hover:text-emerald-300 border border-slate-700 transition-all hover:scale-105"
              >
                <Terminal className="w-5 h-5" />
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex space-x-3">
                <a
                  href="https://in.linkedin.com/in/sani-rathod"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white dark:bg-slate-900 rounded-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all hover:-translate-y-1 shadow-sm"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/SaniRathod"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white dark:bg-slate-900 rounded-xl text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 border border-slate-200 dark:border-slate-800 hover:border-purple-500 transition-all hover:-translate-y-1 shadow-sm"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sanirathod8975@gmail.com"
                  className="p-3 bg-white dark:bg-slate-900 rounded-xl text-slate-700 dark:text-slate-300 hover:text-red-500 border border-slate-200 dark:border-slate-800 hover:border-red-500 transition-all hover:-translate-y-1 shadow-sm"
                >
                  <MailIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Circular Profile Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px]">
              {/* Outer Glowing Circle Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 animate-spin-slow opacity-85 blur-xl"></div>
              
              {/* Circular Container */}
              <div className="relative w-full h-full rounded-full p-3 bg-white dark:bg-slate-950 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900 relative bg-slate-950 flex items-center justify-center">
                  <img
                    src="/Sani_Profile_2.png"
                    alt="Sani Rathod Profile"
                    className="w-full h-full object-cover transition-all duration-300"
                    style={{
                      objectPosition: "50% 38%",
                    }}
                    onError={(e) => {
                      e.target.src = "/Sani_Profile.jpeg";
                    }}
                  />
                </div>
              </div>

              {/* Floating Tech Chips around Circle Avatar */}
              <div className="absolute top-2 -left-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center space-x-2 animate-float z-20">
                <Code2 className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Next.js 16 & TS</span>
              </div>

              <div className="absolute top-1/2 -right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center space-x-2 animate-float delay-500 z-20">
                <Database className="w-4 h-4 text-cyan-500" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">PostgreSQL DB</span>
              </div>

              <div className="absolute -bottom-2 left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center space-x-2 animate-float delay-1000 z-20">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">UWMS Engine</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">Varnilix Pvt Ltd</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Hinjewadi Phase 1, Pune</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400">UWMS Engine</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Multi-Client Payroll</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400">B.E (7.64)</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Computer Engineering</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400">Next.js & Java</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Core Stack</div>
          </div>
        </div>

      </div>
    </section>
  );
}

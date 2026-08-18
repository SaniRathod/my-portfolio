import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Terminal, Building2, Sparkles, CheckCircle2, ShieldCheck, Database, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "./SocialIcons";
import { useTheme } from "../context/ThemeContext";

const ROLES = [
  "Full-Stack Web Engineering",
  "Next.js 16 & TypeScript Systems",
  "Java & Spring Boot Microservices",
  "PostgreSQL & Supabase Architecture",
  "UWMS Enterprise Wage Engines",
];

export default function Hero() {
  const { toggleResume, toggleTerminal, siteSettings } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const updateSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, updateSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative pt-[calc(72px+24px)] sm:pt-[calc(72px+40px)] pb-16 sm:pb-20 border-b border-slate-200/80 dark:border-white/[0.06] overflow-hidden">
      {/* Ambient Radial Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#0284c7]/15 via-[#2563eb]/5 to-transparent blur-3xl opacity-70 dark:opacity-40"></div>
        <div className="absolute top-28 right-8 w-80 h-80 bg-[#10b981]/10 blur-3xl rounded-full"></div>
        <div className="absolute top-44 left-8 w-80 h-80 bg-[#6366f1]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="w-full max-w-[1200px] px-4 sm:px-6 mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Typewriter, Bio, CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Top Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284c7]/10 dark:bg-[#0284c7]/15 border border-[#0284c7]/20 dark:border-[#38bdf8]/30 text-xs font-bold text-[#0284c7] dark:text-[#38bdf8] backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              <span>Software Developer · Pune, India</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm{" "}
                <span className="brand-name-gradient">
                  {siteSettings.name || "Sani Rathod"}
                </span>
              </h1>

              {/* Dynamic Animated Typing Role */}
              <div className="min-h-[40px] mt-2 sm:mt-3 flex items-center justify-center lg:justify-start text-base sm:text-2xl font-bold text-slate-700 dark:text-slate-200">
                <span>I Am Into&nbsp;</span>
                <span className="text-[#0284c7] dark:text-[#38bdf8] border-r-2 border-[#0284c7] dark:border-[#38bdf8] pr-1">
                  {displayText}
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Software Developer at <strong className="text-slate-900 dark:text-white font-bold">Varnilix Pvt Ltd</strong> (Hinjewadi Phase 1, Pune). Specializing in <strong className="text-[#0284c7] dark:text-[#38bdf8] font-bold">Next.js 16, TypeScript, PostgreSQL DB, Supabase</strong>, and <strong className="text-[#2563eb] dark:text-[#818cf8] font-bold">Java Spring Boot</strong> microservices.
            </motion.p>

            {/* Current Position Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] rounded-2xl inline-flex items-center space-x-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm max-w-full text-left"
            >
              <Building2 className="w-4 h-4 text-[#059669] dark:text-[#34d399] flex-shrink-0" />
              <span className="truncate">Current: <strong className="text-slate-900 dark:text-white">UWMS (Unified Wage Platform)</strong></span>
            </motion.div>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1"
            >
              <a
                href="#work"
                className="sr-btn-primary !text-xs sm:!text-sm !py-3 sm:!py-3.5 !px-5 sm:!px-6 !rounded-xl"
              >
                <span>View UWMS &amp; Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={toggleResume}
                className="sr-btn-ghost !text-xs sm:!text-sm !py-3 sm:!py-3.5 !px-5 sm:!px-6 !rounded-xl font-bold flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>View &amp; Download Resume</span>
              </button>

              <button
                onClick={toggleTerminal}
                title="Launch Developer CLI Shell"
                className="p-3 sm:p-3.5 rounded-xl bg-slate-100 dark:bg-[#0f172a] text-slate-700 dark:text-[#34d399] border border-slate-200 dark:border-white/[0.08] hover:border-[#059669]/40 dark:hover:border-[#34d399]/40 transition-all hover:scale-105 shadow-sm"
              >
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center justify-center lg:justify-start space-x-3 pt-3"
            >
              <span className="text-xs font-bold text-slate-400 dark:text-[#64748b] uppercase tracking-wider">Connect:</span>
              
              <a
                href="https://in.linkedin.com/in/sani-rathod"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white dark:bg-[#0f172a] rounded-xl text-slate-600 dark:text-slate-300 hover:text-[#0284c7] dark:hover:text-[#38bdf8] border border-slate-200 dark:border-white/[0.08] hover:border-[#0284c7]/40 dark:hover:border-[#38bdf8]/40 transition-all hover:-translate-y-1 shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/SaniRathod"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white dark:bg-[#0f172a] rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/[0.08] hover:border-slate-400 dark:hover:border-white/40 transition-all hover:-translate-y-1 shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:sanirathod8975@gmail.com"
                className="p-2.5 bg-white dark:bg-[#0f172a] rounded-xl text-slate-600 dark:text-slate-300 hover:text-rose-500 border border-slate-200 dark:border-white/[0.08] hover:border-rose-400 transition-all hover:-translate-y-1 shadow-sm"
              >
                <MailIcon className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: Circular Glowing Profile Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-72 sm:w-[380px] sm:h-[380px]"
            >
              {/* Outer Glowing Circle Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0284c7] via-[#10b981] to-[#6366f1] blur-2xl opacity-35 dark:opacity-70 animate-pulse"></div>
              
              {/* Circular Container */}
              <div className="relative w-full h-full rounded-full p-2.5 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.1] shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 relative bg-white dark:bg-[#0f172a] flex items-center justify-center shadow-sm">
                  <img
                    src="/Sani_Profile_2.png"
                    alt="Sani Rathod"
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    style={{
                      objectPosition: "50% 25%",
                    }}
                    onError={(e) => {
                      e.target.src = "/Sani_Profile.jpg";
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Quick Stats Impact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-200/80 dark:border-white/[0.08]"
        >
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] text-center shadow-sm hover:-translate-y-1 transition-transform">
            <div className="text-lg sm:text-xl font-extrabold text-[#059669] dark:text-[#34d399]">Varnilix Pvt Ltd</div>
            <div className="text-xs text-slate-500 dark:text-[#94a3b8] mt-1 font-medium">Hinjewadi Phase 1, Pune</div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] text-center shadow-sm hover:-translate-y-1 transition-transform">
            <div className="text-lg sm:text-xl font-extrabold text-[#0284c7] dark:text-[#38bdf8]">UWMS Platform</div>
            <div className="text-xs text-slate-500 dark:text-[#94a3b8] mt-1 font-medium">Multi-Client Payroll Engine</div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] text-center shadow-sm hover:-translate-y-1 transition-transform">
            <div className="text-lg sm:text-xl font-extrabold text-[#4f46e5] dark:text-[#818cf8]">B.E (7.64 CGPA)</div>
            <div className="text-xs text-slate-500 dark:text-[#94a3b8] mt-1 font-medium">Computer Engineering</div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] text-center shadow-sm hover:-translate-y-1 transition-transform">
            <div className="text-lg sm:text-xl font-extrabold text-[#0284c7] dark:text-[#38bdf8]">Next.js &amp; Java</div>
            <div className="text-xs text-slate-500 dark:text-[#94a3b8] mt-1 font-medium">Core Production Stack</div>
          </div>
        </motion.div>

        {/* Enterprise Client Facilities Ribbon */}
        <div className="mt-12 py-5 px-6 rounded-2xl bg-slate-100/70 dark:bg-[#0f172a]/60 border border-slate-200/80 dark:border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-[#94a3b8]">
            <Building2 className="w-4 h-4 text-[#0284c7] dark:text-[#38bdf8]" />
            <span>ENTERPRISE CLIENT FACILITIES &amp; LIVE SITES:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              "Saint Gobain Facility",
              "Dana Incorporated",
              "United Breweries",
              "L&L Products",
              "The Data Tech Labs",
              "Varnilix Pvt Ltd",
            ].map((facility, fIdx) => (
              <span
                key={fIdx}
                className="text-xs font-semibold px-3 py-1 rounded-lg bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-[#cbd5e1] shadow-sm"
              >
                {facility}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

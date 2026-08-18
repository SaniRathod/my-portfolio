import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Experience() {
  const { experiences } = useTheme();

  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-slate-200/80 dark:border-white/[0.06] bg-slate-50/50 dark:bg-[#080d1a]/50 overflow-hidden">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 mx-auto">
        
        {/* Section Header */}
        <p className="section-tag">03 — Career Trajectory</p>
        <h2 className="section-heading">Engineering trajectory &amp; real-world impact</h2>
        <p className="text-slate-600 dark:text-[#94a3b8] text-sm sm:text-base max-w-xl mb-10 sm:mb-12 leading-relaxed">
          From full-stack engineering internships to architecting multi-project wage engines and secure banking microservices.
        </p>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => {
            const isCurrent = exp.badge === "Current Role" || idx === 0;
            return (
              <motion.article
                key={exp.id || idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`sr-card p-6 sm:p-8 bg-white dark:bg-[#0f172a] relative overflow-hidden transition-all shadow-md ${
                  isCurrent ? "border-[#0284c7]/40 dark:border-[#38bdf8]/35 shadow-lg" : "border-slate-200 dark:border-white/[0.08]"
                }`}
              >
                {/* Glowing Top Edge */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] ${
                    isCurrent
                      ? "bg-gradient-to-r from-[#0284c7] via-[#2563eb] to-[#38bdf8]"
                      : "bg-gradient-to-r from-[#0284c7] to-[#8b5cf6] opacity-40"
                  }`}
                ></div>

                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-xs font-bold text-[#0284c7] dark:text-[#38bdf8] bg-[#0284c7]/10 dark:bg-[#0284c7]/15 border border-[#0284c7]/20 dark:border-[#38bdf8]/25 px-2.5 py-1 rounded-md">
                    {exp.duration}
                  </span>

                  {isCurrent && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-[#059669] dark:text-[#34d399] bg-emerald-50 dark:bg-[#10b981]/15 border border-emerald-200 dark:border-[#10b981]/30 px-3 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
                      Current Position
                    </span>
                  )}

                  <span className="text-xs text-slate-600 dark:text-[#94a3b8] font-medium flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 dark:text-[#64748b]" />
                    <span className="text-slate-900 dark:text-white font-bold">{exp.company}</span>
                    <span className="text-slate-400 dark:text-[#64748b]">• {exp.location}</span>
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                  {exp.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-slate-600 dark:text-[#cbd5e1] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Accomplishments */}
                {exp.achievements && (
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 dark:text-[#cbd5e1]">
                    {exp.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] dark:bg-[#38bdf8] mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed text-slate-800 dark:text-white font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tools Chips */}
                {exp.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/[0.08]">
                    {exp.skills.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] font-semibold text-slate-700 dark:text-[#cbd5e1] px-2.5 py-1 rounded-md bg-slate-50 dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

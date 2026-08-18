import React from "react";
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Education() {
  const { educationList } = useTheme();

  return (
    <section id="education" className="py-24 border-b border-slate-200/80 dark:border-white/[0.06] bg-white dark:bg-transparent">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto">
        
        {/* Section Header */}
        <p className="section-tag">06 — Academic Foundations</p>
        <h2 className="section-heading">Academic foundation &amp; credentials</h2>
        <p className="text-slate-600 dark:text-[#94a3b8] text-base max-w-xl mb-12 leading-relaxed">
          Theoretical computer science foundations, algorithms, object-oriented design, databases, and applied software engineering.
        </p>

        {/* Education Stack */}
        <div className="space-y-4 max-w-3xl">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="sr-card p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/[0.08] hover:border-[#0284c7]/40 dark:hover:border-[#38bdf8]/30 shadow-md"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#0284c7] dark:text-[#38bdf8] bg-[#0284c7]/10 dark:bg-[#0284c7]/15 border border-[#0284c7]/20 dark:border-[#38bdf8]/25 px-2.5 py-0.5 rounded-md inline-block mb-1">
                  {edu.duration}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94a3b8] font-medium">
                  {edu.institution} • {edu.location}
                </p>
              </div>

              <div className="sm:text-right flex-shrink-0">
                <span className="inline-block font-mono text-xs font-bold text-[#059669] dark:text-[#34d399] bg-emerald-50 dark:bg-[#10b981]/15 border border-emerald-200 dark:border-[#10b981]/30 px-3.5 py-1.5 rounded-lg">
                  {edu.scoreLabel || "Score"}: {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

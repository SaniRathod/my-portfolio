import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Experience() {
  const { experiences } = useTheme();

  return (
    <section id="experience" className="py-24 border-b border-white/[0.04] bg-[#0c101c]/40">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto">
        
        {/* Section Header */}
        <p className="section-tag">02 — Career Journey</p>
        <h2 className="section-heading">Engineering trajectory &amp; impact</h2>
        <p className="text-[#94a3b8] text-sm sm:text-base max-w-xl mb-12 leading-relaxed">
          From full-stack engineering internships to architecting multi-project wage engines and banking microservices.
        </p>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => {
            const isCurrent = exp.badge === "Current Role" || idx === 0;
            return (
              <article
                key={exp.id || idx}
                className={`sr-card p-6 sm:p-8 relative overflow-hidden transition-all ${
                  isCurrent ? "border-[#10b981]/30 shadow-[0_0_40px_rgba(16,185,129,0.08)]" : ""
                }`}
              >
                {/* Glowing Top Edge */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] ${
                    isCurrent
                      ? "bg-gradient-to-r from-[#10b981] via-[#00e5ff] to-[#6366f1]"
                      : "bg-gradient-to-r from-[#00e5ff] to-[#a855f7] opacity-50"
                  }`}
                ></div>

                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-xs font-semibold text-[#00e5ff] bg-[#00e5ff]/10 border border-[#00e5ff]/25 px-2.5 py-1 rounded-md">
                    {exp.duration}
                  </span>

                  {isCurrent && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/30 px-3 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
                      Current Position
                    </span>
                  )}

                  <span className="text-xs text-[#64748b] font-medium flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.company} • {exp.location}</span>
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#f1f5f9] tracking-tight mb-2">
                  {exp.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Accomplishments */}
                {exp.achievements && (
                  <ul className="space-y-2 mb-6 text-xs sm:text-sm text-[#94a3b8]">
                    {exp.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed text-[#f1f5f9]">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tools Chips */}
                {exp.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {exp.skills.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] font-medium text-[#94a3b8] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function Building2(props) {
  return (
    <svg {...props} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
      <path d="M10 6h4"/>
      <path d="M10 10h4"/>
      <path d="M10 14h4"/>
      <path d="M10 18h4"/>
    </svg>
  );
}

import React from "react";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Education() {
  const { educationList } = useTheme();

  return (
    <section id="education" className="py-24 border-b border-white/[0.04]">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto">
        
        {/* Section Header */}
        <p className="section-tag">07 — Academic Milestones</p>
        <h2 className="section-heading">Academic foundation</h2>
        <p className="text-[#94a3b8] text-sm sm:text-base max-w-xl mb-12 leading-relaxed">
          Theoretical computer science foundations, algorithms, object-oriented design, and applied engineering.
        </p>

        {/* Education Stack */}
        <div className="space-y-4 max-w-3xl">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="sr-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs font-semibold text-[#00e5ff]">
                  {edu.duration}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#f1f5f9]">
                  {edu.degree}
                </h3>
                <p className="text-xs text-[#94a3b8]">
                  {edu.institution} • {edu.location}
                </p>
              </div>

              <div className="sm:text-right flex-shrink-0">
                <span className="inline-block font-mono text-xs font-bold text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/30 px-3.5 py-1 rounded-full">
                  {edu.scoreLabel || "Score"}: {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

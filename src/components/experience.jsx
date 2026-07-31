import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Experience() {
  const { experiences } = useTheme();

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Items */}
        <div className="relative max-w-4xl mx-auto space-y-12">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block"></div>

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id || index}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 z-10 hidden md:flex">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Content Box */}
                <div className="w-full md:w-1/2 px-0 md:px-8">
                  <div className="bg-slate-50 dark:bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full">
                        {exp.badge}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">{exp.company}</p>

                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1 mb-4">
                      <MapPin className="w-3 h-3 text-slate-400" /> {exp.location}
                    </p>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements List */}
                    {exp.achievements && (
                      <div className="space-y-2 mb-6">
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    {exp.skills && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-lg text-[11px] font-mono font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

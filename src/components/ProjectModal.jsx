import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Server, Building2, Calendar } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

export default function ProjectModal() {
  const { selectedProject, setSelectedProject } = useTheme();

  if (!selectedProject) return null;

  return (
    <div
      style={{ zIndex: 10000 }}
      className="fixed inset-0 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) setSelectedProject(null);
      }}
    >
      <div className="w-full max-w-3xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col text-slate-900 dark:text-[#f8fafc] max-h-[92dvh]">
        
        {/* Banner / Header */}
        <div className="relative bg-slate-50 dark:bg-gradient-to-r dark:from-[#080d1a] dark:via-[#0f172a] dark:to-[#1e293b] p-7 sm:p-8 border-b border-slate-200 dark:border-white/[0.08]">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0284c7]/10 dark:bg-[#0284c7]/15 border border-[#0284c7]/20 dark:border-[#38bdf8]/25 rounded-full text-xs font-mono font-bold text-[#0284c7] dark:text-[#38bdf8] mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>{selectedProject.organization}</span>
          </div>

          <h2 className="font-sans text-2xl sm:text-3xl text-slate-900 dark:text-white font-extrabold leading-tight">
            {selectedProject.title}
          </h2>

          <p className="text-slate-600 dark:text-[#94a3b8] text-xs sm:text-sm mt-1.5 font-medium">
            {selectedProject.tagline || 'Enterprise Software Solution'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-700 dark:text-[#cbd5e1] overflow-y-auto max-h-[70vh]">
          
          {/* Key Overview */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284c7] dark:text-[#38bdf8] mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" /> System Overview
            </h3>
            <p className="leading-relaxed text-sm text-slate-800 dark:text-white">
              {selectedProject.fullDescription || selectedProject.description}
            </p>
          </div>

          {/* Highlights & Architecture */}
          {selectedProject.highlights && (
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#059669] dark:text-[#34d399] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Key Engineering Accomplishments
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669] dark:bg-[#34d399] mt-2 flex-shrink-0"></span>
                    <span className="text-slate-700 dark:text-[#cbd5e1] leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Architecture */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4f46e5] dark:text-[#818cf8] mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Tech Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] text-[#0284c7] dark:text-[#38bdf8] rounded-lg text-xs font-mono font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Footer */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between flex-wrap gap-3">
            <span className="text-xs font-mono text-slate-500 dark:text-[#64748b] flex items-center gap-1 font-semibold">
              <Calendar className="w-3.5 h-3.5" /> {selectedProject.duration}
            </span>

            <div className="flex items-center space-x-3">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="sr-btn-ghost !text-xs !py-2 !px-3.5"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="sr-btn-primary !text-xs !py-2 !px-4"
              >
                <span>Close Case Study</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

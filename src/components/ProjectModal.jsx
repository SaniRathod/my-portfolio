import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Server, Building2, Calendar } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

export default function ProjectModal() {
  const { selectedProject, setSelectedProject } = useTheme();

  if (!selectedProject) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) setSelectedProject(null);
      }}
    >
      <div className="w-full max-w-3xl bg-[#0e1018] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 flex flex-col text-[#f4f6fb]">
        
        {/* Banner / Header */}
        <div className="relative bg-gradient-to-r from-[#07080d] via-[#121622] to-[#1a2236] p-7 sm:p-8 border-b border-white/10">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#9ca8bc] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4da3ff]/10 border border-[#4da3ff]/25 rounded-full text-xs font-mono font-semibold text-[#7cc4ff] mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>{selectedProject.organization}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#f4f6fb] font-normal leading-tight">
            {selectedProject.title}
          </h2>

          <p className="text-[#9ca8bc] text-xs sm:text-sm mt-1.5 font-medium">
            {selectedProject.tagline || 'Enterprise Software Solution'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-[#9ca8bc] overflow-y-auto max-h-[70vh]">
          
          {/* Key Overview */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4da3ff] mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" /> System Overview
            </h3>
            <p className="leading-relaxed text-sm text-[#f4f6fb]">
              {selectedProject.fullDescription || selectedProject.description}
            </p>
          </div>

          {/* Highlights & Architecture */}
          {selectedProject.highlights && (
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#34d399] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Key Engineering Accomplishments
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-2 flex-shrink-0"></span>
                    <span className="text-[#f4f6fb] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Architecture */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#a78bfa] mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Tech Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white/[0.04] border border-white/10 text-[#7cc4ff] rounded-xl text-xs font-mono font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
            <span className="text-xs font-mono text-[#6b7789] flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {selectedProject.duration}
            </span>

            <div className="flex items-center space-x-3">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="nj-btn-ghost !text-xs !py-2 !px-3.5"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="nj-btn-primary !text-xs !py-2 !px-4"
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

import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Server } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useTheme } from '../context/ThemeContext';

export default function ProjectModal() {
  const { selectedProject, setSelectedProject } = useTheme();

  if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 flex flex-col">
        {/* Banner / Header */}
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white">
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            {selectedProject.organization}
          </div>
          <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
          <p className="text-blue-100 text-sm mt-1">{selectedProject.tagline || 'Enterprise Software Solution'}</p>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 text-slate-700 dark:text-slate-300">
          {/* Key Overview */}
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-500" /> Project Overview
            </h3>
            <p className="leading-relaxed text-sm">{selectedProject.fullDescription || selectedProject.description}</p>
          </div>

          {/* Highlights & Architecture */}
          {selectedProject.highlights && (
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Key Engineering Accomplishments
              </h3>
              <ul className="space-y-2 text-sm">
                {selectedProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-500" /> Tech Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-mono font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400">Duration: {selectedProject.duration}</span>
            <div className="flex items-center space-x-3">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition-all"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

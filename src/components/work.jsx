import React, { useState } from "react";
import { Code2, ShoppingCart, Globe, Smartphone, ArrowUpRight, Layers } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Work() {
  const { projects, setSelectedProject } = useTheme();
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3.5 py-1.5 rounded-full mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects & Engineering</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-12">
          {["All", "Full Stack", "Frontend"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat} Projects
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Card Header Banner */}
                  <div className={`p-6 bg-gradient-to-r ${project.gradient || "from-emerald-600 to-teal-600"} text-white relative`}>
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {project.organization}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mt-4">{project.title}</h3>
                    <p className="text-white/80 text-xs mt-1 font-medium">{project.tagline}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Pills */}
                    {project.tech && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-medium rounded-xl border border-slate-200 dark:border-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold">{project.duration}</span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-all text-xs font-bold"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

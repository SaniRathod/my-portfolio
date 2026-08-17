import React from "react";
import { ArrowUpRight, Code2, Layers, ExternalLink, Cpu, CheckCircle } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { useTheme } from "../context/ThemeContext";

export default function Work() {
  const { projects, setSelectedProject } = useTheme();

  return (
    <section id="work" className="py-24 border-b border-white/[0.04]">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto">
        
        {/* Section Header */}
        <p className="section-tag">03 — Flagship Platforms</p>
        <h2 className="section-heading">Enterprise systems architecture</h2>
        <p className="text-[#94a3b8] text-sm sm:text-base max-w-xl mb-12 leading-relaxed">
          Production platforms demonstrating mathematical calculation precision, relational database integrity, and high-concurrency microservices.
        </p>

        {/* 2 Big Flagship Cards */}
        <div className="grid md:grid-cols-2 gap-7 mb-20">
          
          {/* Flagship 1: UWMS */}
          <article className="sr-card p-7 sm:p-8 bg-gradient-to-br from-[#00e5ff]/[0.08] via-[#0c101c] to-[#06080f] border-[#00e5ff]/30 relative overflow-hidden flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#00e5ff]/15 text-[#70f0ff] border border-[#00e5ff]/30">
                  Flagship · Enterprise Wage Platform
                </span>
                <span className="text-[11px] font-mono text-[#64748b]">2026 – Present</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#f1f5f9] mb-3 leading-tight group-hover:text-[#70f0ff] transition-colors">
                UWMS — Unified Wage Management System
              </h3>

              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-6">
                Multi-project payroll &amp; contractual wage calculation platform engineered for enterprise facilities. Features immutable pure-function TypeScript calculation algorithms, dynamic OT multipliers, automated attendance excel parsing, and real-time Supabase PostgreSQL ledgers.
              </p>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                  <strong className="block font-mono text-sm sm:text-base font-bold text-[#00e5ff]">0 Loss</strong>
                  <span className="text-[10px] text-[#64748b] uppercase tracking-wider">Immutable Ledgers</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                  <strong className="block font-mono text-sm sm:text-base font-bold text-[#10b981]">Next.js 16</strong>
                  <span className="text-[10px] text-[#64748b] uppercase tracking-wider">Pure TS Calculations</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                  <strong className="block font-mono text-sm sm:text-base font-bold text-[#a855f7]">Multi-Tenant</strong>
                  <span className="text-[10px] text-[#64748b] uppercase tracking-wider">Tenant Isolation</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                  <strong className="block font-mono text-sm sm:text-base font-bold text-[#f59e0b]">AWS Cloud</strong>
                  <span className="text-[10px] text-[#64748b] uppercase tracking-wider">App Runner + Docker</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="font-mono text-xs text-[#94a3b8]">Varnilix Pvt Ltd</span>
              <button
                onClick={() => setSelectedProject(projects.find((p) => p.id === "uwms") || projects[0])}
                className="sr-btn-primary !text-xs !py-2 !px-4"
              >
                <span>Explore System Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>

          {/* Flagship 2: IMSG */}
          <article className="sr-card p-7 sm:p-8 bg-gradient-to-br from-[#10b981]/[0.08] via-[#0c101c] to-[#06080f] border-[#10b981]/30 relative overflow-hidden flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30">
                  Flagship · Banking &amp; Security
                </span>
                <span className="text-[11px] font-mono text-[#64748b]">2024 – 2026</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#f1f5f9] mb-3 leading-tight group-hover:text-[#34d399] transition-colors">
                IMSG Bank Property Sourcing Platform
              </h3>

              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-6">
                Proprietary Banking Property Sourcing Application digitizing real estate property evaluations, legal validation checkpoints, and multi-tier approval workflows for financial institutions with Spring Security RBAC.
              </p>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                  <strong className="block font-mono text-sm sm:text-base font-bold text-[#10b981]">35% Faster</strong>
                  <span className="text-[10px] text-[#64748b] uppercase tracking-wider">MySQL Indexing</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                  <strong className="block font-mono text-sm sm:text-base font-bold text-[#00e5ff]">RBAC</strong>
                  <span className="text-[10px] text-[#64748b] uppercase tracking-wider">Spring Security</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                  <strong className="block font-mono text-sm sm:text-base font-bold text-[#a855f7]">100%</strong>
                  <span className="text-[10px] text-[#64748b] uppercase tracking-wider">Digitized Bank Flow</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center">
                  <strong className="block font-mono text-sm sm:text-base font-bold text-[#f59e0b]">REST APIs</strong>
                  <span className="text-[10px] text-[#64748b] uppercase tracking-wider">Microservices</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="font-mono text-xs text-[#94a3b8]">The Data Tech Labs</span>
              <button
                onClick={() => setSelectedProject(projects.find((p) => p.id === "imsg") || projects[1])}
                className="sr-btn-primary !text-xs !py-2 !px-4"
              >
                <span>Explore Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>

        </div>

        {/* Selected Deliverables Grid */}
        <p className="section-tag">04 — Project Deliverables</p>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#f1f5f9] mb-8">Selected software deliverables</h3>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((proj, idx) => {
            const num = `P.0${idx + 1}`;
            return (
              <article
                key={proj.id || idx}
                onClick={() => setSelectedProject(proj)}
                className="sr-card p-6 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-semibold text-[#00e5ff] tracking-wider">
                      {num}
                    </span>
                    <span className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
                      {proj.organization}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-[#f1f5f9] mb-2 group-hover:text-[#70f0ff] transition-colors">
                    {proj.title}
                  </h4>

                  <p className="text-xs text-[#94a3b8] leading-relaxed mb-4 line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  {proj.tech && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {proj.tech.slice(0, 5).map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[#94a3b8]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 text-xs font-semibold text-[#00e5ff] group-hover:text-[#70f0ff]">
                    <span>View Technical Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

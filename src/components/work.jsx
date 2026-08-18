import React, { useState } from "react";
import { ArrowUpRight, Code2, Layers, ExternalLink, Cpu, CheckCircle2, ShieldCheck, Database, Cloud, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const CATEGORY_TABS = [
  { id: "all", label: "All Solutions" },
  { id: "wage", label: "Wage & Payroll Engines" },
  { id: "banking", label: "Banking & Security" },
  { id: "analytics", label: "Analytics & Frontend" },
  { id: "payments", label: "Payment Gateways" },
];

export default function Work() {
  const { projects, setSelectedProject } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects = projects.filter((proj) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "wage") return proj.id === "uwms" || proj.category?.toLowerCase().includes("wage");
    if (selectedFilter === "banking") return proj.id === "imsg" || proj.category?.toLowerCase().includes("bank");
    if (selectedFilter === "analytics") return proj.id === "kpi" || proj.category?.toLowerCase().includes("front");
    if (selectedFilter === "payments") return proj.id === "paypal" || proj.category?.toLowerCase().includes("pay");
    return true;
  });

  return (
    <section id="work" className="py-20 sm:py-24 border-b border-slate-200/80 dark:border-white/[0.06] relative overflow-hidden">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-tag">02 — Enterprise Solutions</p>
            <h2 className="section-heading">Production systems &amp; software architectures</h2>
            <p className="text-slate-600 dark:text-[#94a3b8] text-sm sm:text-base max-w-xl leading-relaxed">
              Domain-specialized platforms demonstrating high mathematical calculation precision, relational database integrity, and high-concurrency microservices.
            </p>
          </div>

          {/* Dynamic Filter Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#0f172a] p-1.5 rounded-xl border border-slate-200 dark:border-white/[0.08] overflow-x-auto max-w-full shadow-sm">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedFilter === tab.id
                    ? "bg-white dark:bg-[#0284c7]/20 text-[#0284c7] dark:text-[#38bdf8] border border-slate-200 dark:border-[#38bdf8]/30 shadow-sm"
                    : "text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2 Big Flagship Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Flagship 1: UWMS */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sr-card p-7 sm:p-8 bg-white dark:bg-gradient-to-br dark:from-[#0284c7]/[0.08] dark:via-[#0f172a] dark:to-[#080d1a] border-slate-200 dark:border-[#38bdf8]/30 relative overflow-hidden flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-block text-[10px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#0284c7]/10 dark:bg-[#0284c7]/20 text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/20 dark:border-[#38bdf8]/30">
                  Flagship · Enterprise Wage Platform
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-[#64748b]">2026 – Present</span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-[#0284c7] dark:group-hover:text-[#38bdf8] transition-colors">
                UWMS — Unified Wage Management System
              </h3>

              <p className="text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed mb-6">
                Multi-project payroll &amp; contractual wage calculation platform engineered for enterprise client facilities (Saint Gobain, Dana, United Breweries). Features immutable pure-function TypeScript calculation algorithms, dynamic OT multipliers, automated attendance excel parsing, and real-time Supabase PostgreSQL ledgers.
              </p>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-6 font-mono">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#080d1a]/90 border border-slate-200 dark:border-white/[0.08] text-center shadow-sm">
                  <strong className="block text-base font-extrabold text-[#0284c7] dark:text-[#38bdf8]">0 Loss</strong>
                  <span className="text-[10px] text-slate-500 dark:text-[#64748b] uppercase tracking-wider font-semibold">Immutable Ledgers</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#080d1a]/90 border border-slate-200 dark:border-white/[0.08] text-center shadow-sm">
                  <strong className="block text-base font-extrabold text-[#059669] dark:text-[#34d399]">Next.js 16</strong>
                  <span className="text-[10px] text-slate-500 dark:text-[#64748b] uppercase tracking-wider font-semibold">Pure TS Calculations</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#080d1a]/90 border border-slate-200 dark:border-white/[0.08] text-center shadow-sm">
                  <strong className="block text-base font-extrabold text-[#4f46e5] dark:text-[#818cf8]">Multi-Tenant</strong>
                  <span className="text-[10px] text-slate-500 dark:text-[#64748b] uppercase tracking-wider font-semibold">Tenant Isolation</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#080d1a]/90 border border-slate-200 dark:border-white/[0.08] text-center shadow-sm">
                  <strong className="block text-base font-extrabold text-[#0284c7] dark:text-[#38bdf8]">AWS Cloud</strong>
                  <span className="text-[10px] text-slate-500 dark:text-[#64748b] uppercase tracking-wider font-semibold">App Runner + Docker</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/[0.08] flex-wrap gap-2">
              <span className="font-mono text-xs text-slate-600 dark:text-[#94a3b8] font-semibold">Varnilix Pvt Ltd</span>
              <button
                onClick={() => setSelectedProject(projects.find((p) => p.id === "uwms") || projects[0])}
                className="sr-btn-primary !text-xs !py-2 !px-4"
              >
                <span>Explore System Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.article>

          {/* Flagship 2: IMSG */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="sr-card p-7 sm:p-8 bg-white dark:bg-gradient-to-br dark:from-[#2563eb]/[0.08] dark:via-[#0f172a] dark:to-[#080d1a] border-slate-200 dark:border-[#2563eb]/30 relative overflow-hidden flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-block text-[10px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#2563eb]/10 dark:bg-[#2563eb]/20 text-[#2563eb] dark:text-[#93c5fd] border border-[#2563eb]/20 dark:border-[#2563eb]/30">
                  Flagship · Banking &amp; Security
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-[#64748b]">2024 – 2026</span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-[#2563eb] dark:group-hover:text-[#93c5fd] transition-colors">
                IMSG Bank Property Sourcing Platform
              </h3>

              <p className="text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed mb-6">
                Proprietary Banking Property Sourcing Application digitizing real estate property evaluations, legal validation checkpoints, and multi-tier approval workflows for financial institutions with Spring Security multi-level RBAC.
              </p>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-6 font-mono">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#080d1a]/90 border border-slate-200 dark:border-white/[0.08] text-center shadow-sm">
                  <strong className="block text-base font-extrabold text-[#059669] dark:text-[#34d399]">35% Faster</strong>
                  <span className="text-[10px] text-slate-500 dark:text-[#64748b] uppercase tracking-wider font-semibold">MySQL Indexing</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#080d1a]/90 border border-slate-200 dark:border-white/[0.08] text-center shadow-sm">
                  <strong className="block text-base font-extrabold text-[#0284c7] dark:text-[#38bdf8]">RBAC Auth</strong>
                  <span className="text-[10px] text-slate-500 dark:text-[#64748b] uppercase tracking-wider font-semibold">Spring Security</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#080d1a]/90 border border-slate-200 dark:border-white/[0.08] text-center shadow-sm">
                  <strong className="block text-base font-extrabold text-[#4f46e5] dark:text-[#818cf8]">100%</strong>
                  <span className="text-[10px] text-slate-500 dark:text-[#64748b] uppercase tracking-wider font-semibold">Digitized Bank Flow</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#080d1a]/90 border border-slate-200 dark:border-white/[0.08] text-center shadow-sm">
                  <strong className="block text-base font-extrabold text-[#0284c7] dark:text-[#38bdf8]">REST APIs</strong>
                  <span className="text-[10px] text-slate-500 dark:text-[#64748b] uppercase tracking-wider font-semibold">Microservices</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/[0.08] flex-wrap gap-2">
              <span className="font-mono text-xs text-slate-600 dark:text-[#94a3b8] font-semibold">The Data Tech Labs</span>
              <button
                onClick={() => setSelectedProject(projects.find((p) => p.id === "imsg") || projects[1])}
                className="sr-btn-primary !text-xs !py-2 !px-4"
              >
                <span>Explore Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.article>

        </div>

        {/* Categorized Deliverables Grid */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              All Categorized Deliverables ({filteredProjects.length})
            </h3>
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-5">
          <AnimatePresence>
            {filteredProjects.map((proj, idx) => {
              const num = `0${idx + 1}`;
              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  key={proj.id || idx}
                  onClick={() => setSelectedProject(proj)}
                  className="sr-card p-6 bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/[0.08] flex flex-col justify-between cursor-pointer group hover:-translate-y-1 transition-all shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#0284c7] dark:text-[#38bdf8] tracking-wider">
                        SOLUTION.{num}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-[#64748b] font-semibold uppercase tracking-wider bg-slate-100 dark:bg-[#080d1a] px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/[0.06]">
                        {proj.organization}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#0284c7] dark:group-hover:text-[#38bdf8] transition-colors">
                      {proj.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed mb-4 line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    {proj.tech && (
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/[0.08]">
                        {proj.tech.slice(0, 5).map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-slate-50 dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-[#cbd5e1] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 text-xs font-bold text-[#0284c7] dark:text-[#38bdf8] group-hover:text-[#0284c7] dark:group-hover:text-[#7dd3fc]">
                      <span>View Technical Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

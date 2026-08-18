import React from "react";
import { User, CheckCircle2, Building, Cpu, Layers, ExternalLink, ShieldCheck, Database, Cloud, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { toggleResume } = useTheme();

  return (
    <section id="about" className="py-24 border-b border-slate-200/80 dark:border-white/[0.06] relative bg-slate-50/50 dark:bg-transparent">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto">
        
        {/* Section Header */}
        <p className="section-tag">01 — Background &amp; Profile</p>
        <h2 className="section-heading">
          Engineering scalable web systems<br />&amp; mission-critical data engines
        </h2>

        {/* 2-Column Story & Config Grid */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start mt-10">
          
          {/* Left Story Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-slate-600 dark:text-[#cbd5e1] text-base leading-relaxed"
          >
            <p>
              I'm <strong className="text-slate-900 dark:text-white font-semibold">Sani Rathod</strong>, a <strong className="text-slate-900 dark:text-white font-semibold">Software Developer</strong> based in <strong className="text-[#0284c7] dark:text-[#38bdf8] font-semibold">Hinjewadi Phase 1, Pune</strong>, currently developing high-scale enterprise applications at <strong className="text-slate-900 dark:text-white font-semibold">Varnilix Pvt Ltd</strong>.
            </p>
            <p>
              My primary focus is architecting <strong className="text-[#059669] dark:text-[#34d399] font-semibold">UWMS (Unified Wage Management System)</strong>, a multi-project contractual workforce platform designed for manufacturing and enterprise client facilities (such as <em>Saint Gobain, Dana, United Breweries, and L&amp;L Products</em>).
            </p>
            <p>
              I engineer pure-function calculation engines using <strong className="text-slate-900 dark:text-white font-semibold">Next.js 16 (App Router), TypeScript, PostgreSQL, and Supabase</strong> — managing complex overtime multipliers, attendance sheet parsers, professional tax (PTAX) slabs, and Full &amp; Final (F&amp;F) settlements with 100% calculation accuracy.
            </p>
            <p>
              Previously at <strong className="text-slate-900 dark:text-white font-semibold">The Data Tech Labs</strong>, I built secure Java &amp; Spring Boot REST APIs with Spring Security for the <strong className="text-[#2563eb] dark:text-[#93c5fd] font-semibold">IMSG Banking Property Sourcing Platform</strong>, optimizing MySQL queries and digitizing multi-stage property evaluation workflows.
            </p>

            {/* Core Capability Chips */}
            <div className="flex flex-wrap gap-2 pt-3">
              {[
                "Next.js 16",
                "TypeScript",
                "Java",
                "Spring Boot",
                "Spring Security",
                "PostgreSQL",
                "Supabase DB",
                "REST Microservices",
                "AWS App Runner",
                "Docker",
                "Excel Sheet Parsers",
                "F&F Settlements",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs font-semibold px-3 py-1.5 rounded-md bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-[#cbd5e1] hover:border-[#0284c7]/40 dark:hover:border-[#38bdf8]/40 hover:text-[#0284c7] dark:hover:text-white transition-colors shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: sani.config.ts matrix */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="sr-card overflow-hidden shadow-xl border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0f172a]"
          >
            <div className="px-5 py-3.5 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#080d1a] font-mono text-xs text-slate-500 dark:text-[#64748b] flex items-center justify-between">
              <span className="text-[#0284c7] dark:text-[#38bdf8] font-bold">sani.config.ts</span>
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            </div>

            <dl className="p-5 space-y-3 font-sans text-xs">
              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-slate-100 dark:border-white/[0.04]">
                <dt className="text-slate-500 dark:text-[#64748b] font-medium font-mono text-[11px]">role</dt>
                <dd className="text-slate-900 dark:text-white font-bold text-right">Software Developer</dd>
              </div>

              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-slate-100 dark:border-white/[0.04]">
                <dt className="text-slate-500 dark:text-[#64748b] font-medium font-mono text-[11px]">company</dt>
                <dd className="text-slate-900 dark:text-white font-bold text-right">Varnilix Pvt Ltd</dd>
              </div>

              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-slate-100 dark:border-white/[0.04]">
                <dt className="text-slate-500 dark:text-[#64748b] font-medium font-mono text-[11px]">location</dt>
                <dd className="text-slate-900 dark:text-white font-bold text-right">Hinjewadi Phase 1, Pune</dd>
              </div>

              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-slate-100 dark:border-white/[0.04]">
                <dt className="text-slate-500 dark:text-[#64748b] font-medium font-mono text-[11px]">degree</dt>
                <dd className="text-slate-900 dark:text-white font-bold text-right">B.E Computer Engg (7.64)</dd>
              </div>

              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-slate-100 dark:border-white/[0.04]">
                <dt className="text-slate-500 dark:text-[#64748b] font-medium font-mono text-[11px]">email</dt>
                <dd className="text-[#0284c7] dark:text-[#38bdf8] font-bold text-right truncate">
                  <a href="mailto:sanirathod8975@gmail.com" className="hover:underline">
                    sanirathod8975@gmail.com
                  </a>
                </dd>
              </div>

              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-slate-100 dark:border-white/[0.04]">
                <dt className="text-slate-500 dark:text-[#64748b] font-medium font-mono text-[11px]">phone</dt>
                <dd className="text-slate-900 dark:text-white font-bold text-right">
                  <a href="tel:+918975223625" className="hover:underline">
                    +91 8975223625
                  </a>
                </dd>
              </div>

              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-slate-100 dark:border-white/[0.04]">
                <dt className="text-slate-500 dark:text-[#64748b] font-medium font-mono text-[11px]">linkedin</dt>
                <dd className="text-[#0284c7] dark:text-[#38bdf8] font-bold text-right">
                  <a
                    href="https://in.linkedin.com/in/sani-rathod"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    <span>sani-rathod</span> →
                  </a>
                </dd>
              </div>

              <div className="flex justify-between items-baseline gap-2">
                <dt className="text-slate-500 dark:text-[#64748b] font-medium font-mono text-[11px]">github</dt>
                <dd className="text-[#0284c7] dark:text-[#38bdf8] font-bold text-right">
                  <a
                    href="https://github.com/SaniRathod"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    <span>SaniRathod</span> →
                  </a>
                </dd>
              </div>
            </dl>
          </motion.div>

        </div>

        {/* Engineering Pillars 3-Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200/80 dark:border-white/[0.08]">
          <p className="section-tag">Core Technical Pillars</p>
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-8">What I build for enterprise teams</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="sr-card p-6 bg-white dark:bg-[#0f172a] border-slate-200 dark:border-[#38bdf8]/20 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#0284c7]/10 dark:bg-[#0284c7]/15 border border-[#0284c7]/25 dark:border-[#38bdf8]/30 flex items-center justify-center text-xl text-[#0284c7] dark:text-[#38bdf8]">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Wage &amp; Payroll Engines</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                  Next.js 16 App Router &amp; pure TypeScript calculations for multi-site contractual workforce, OT multipliers, PTAX slabs, and zero-loss ledgers.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/[0.08] font-mono text-[10px] text-[#0284c7] dark:text-[#38bdf8] font-bold">
                UWMS Architecture
              </div>
            </motion.article>

            {/* Pillar 2 */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="sr-card p-6 bg-white dark:bg-[#0f172a] border-slate-200 dark:border-[#10b981]/20 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-[#10b981]/15 border border-emerald-200 dark:border-[#10b981]/30 flex items-center justify-center text-xl text-[#059669] dark:text-[#34d399]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Banking &amp; Secure APIs</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                  Java Spring Boot REST microservices with Spring Security role-based authorization for real estate appraisal and bank property evaluation.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/[0.08] font-mono text-[10px] text-[#059669] dark:text-[#34d399] font-bold">
                IMSG Banking Engine
              </div>
            </motion.article>

            {/* Pillar 3 */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="sr-card p-6 bg-white dark:bg-[#0f172a] border-slate-200 dark:border-[#6366f1]/20 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-[#6366f1]/15 border border-indigo-200 dark:border-[#6366f1]/30 flex items-center justify-center text-xl text-[#4f46e5] dark:text-[#818cf8]">
                  <Cloud className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Cloud Containers &amp; Schemas</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                  Containerized deployments on AWS App Runner with Docker, Supabase PostgreSQL schemas, and high-performance database indexing.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/[0.08] font-mono text-[10px] text-[#4f46e5] dark:text-[#818cf8] font-bold">
                AWS App Runner + Docker
              </div>
            </motion.article>
          </div>
        </div>

      </div>
    </section>
  );
}

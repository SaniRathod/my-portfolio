import React from "react";
import { User, CheckCircle2, Building, Cpu, Layers, ExternalLink, ShieldCheck, Database, Cloud } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { toggleResume } = useTheme();

  return (
    <section id="about" className="py-24 border-b border-white/[0.04] relative">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto">
        
        {/* Section Header */}
        <p className="section-tag">01 — Developer Story</p>
        <h2 className="section-heading">
          Engineering scalable web systems<br />&amp; high-precision data engines
        </h2>

        {/* 2-Column Story & Config Grid */}
        <div className="grid lg:grid-cols-[1fr_390px] gap-12 items-start mt-10">
          
          {/* Left Story Column */}
          <div className="space-y-5 text-[#94a3b8] text-base leading-relaxed">
            <p>
              I'm <strong className="text-[#f1f5f9]">Sani Rathod</strong>, a <strong className="text-[#f1f5f9]">Software Developer</strong> based in <strong className="text-[#00e5ff]">Hinjewadi Phase 1, Pune</strong>, currently developing enterprise applications at <strong className="text-[#f1f5f9]">Varnilix Pvt Ltd</strong>.
            </p>
            <p>
              My primary focus is architecting <strong className="text-[#10b981]">UWMS (Unified Wage Management System)</strong>, a multi-project contractual workforce platform designed for manufacturing and enterprise client facilities (such as <em>Saint Gobain, Dana, United Breweries, and L&amp;L Products</em>).
            </p>
            <p>
              I engineer pure-function calculation engines using <strong className="text-[#f1f5f9]">Next.js 16 (App Router), TypeScript, PostgreSQL, and Supabase</strong> — managing complex overtime multipliers, attendance sheet parsers, professional tax (PTAX) slabs, and Full &amp; Final (F&amp;F) settlements.
            </p>
            <p>
              Previously at <strong>The Data Tech Labs</strong>, I built secure Java &amp; Spring Boot REST APIs with Spring Security for the <strong className="text-[#70f0ff]">IMSG Banking Property Sourcing Platform</strong>, optimizing MySQL queries and digitizing property evaluation workflows.
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
                  className="font-mono text-xs font-semibold px-3 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/25 text-[#70f0ff]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: sani.config.ts matrix */}
          <div className="sr-card overflow-hidden shadow-2xl">
            <div className="px-5 py-3.5 border-b border-white/10 bg-[#0c101c] font-mono text-xs text-[#64748b] flex items-center justify-between">
              <span className="text-[#00e5ff]">sani.config.ts</span>
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            </div>

            <dl className="p-5 space-y-3 font-sans text-xs">
              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-white/[0.04]">
                <dt className="text-[#64748b] font-medium font-mono text-[11px]">role</dt>
                <dd className="text-[#f1f5f9] font-semibold text-right">Software Developer</dd>
              </div>

              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-white/[0.04]">
                <dt className="text-[#64748b] font-medium font-mono text-[11px]">company</dt>
                <dd className="text-[#f1f5f9] font-semibold text-right">Varnilix Pvt Ltd</dd>
              </div>

              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-white/[0.04]">
                <dt className="text-[#64748b] font-medium font-mono text-[11px]">location</dt>
                <dd className="text-[#f1f5f9] font-semibold text-right">Hinjewadi Phase 1, Pune</dd>
              </div>

              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-white/[0.04]">
                <dt className="text-[#64748b] font-medium font-mono text-[11px]">degree</dt>
                <dd className="text-[#f1f5f9] font-semibold text-right">B.E Computer Engineering (7.64)</dd>
              </div>

              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-white/[0.04]">
                <dt className="text-[#64748b] font-medium font-mono text-[11px]">email</dt>
                <dd className="text-[#70f0ff] font-semibold text-right truncate">
                  <a href="mailto:sanirathod8975@gmail.com" className="hover:underline">
                    sanirathod8975@gmail.com
                  </a>
                </dd>
              </div>

              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-white/[0.04]">
                <dt className="text-[#64748b] font-medium font-mono text-[11px]">phone</dt>
                <dd className="text-[#f1f5f9] font-semibold text-right">
                  <a href="tel:+918975223625" className="hover:underline">
                    +91 8975223625
                  </a>
                </dd>
              </div>

              <div className="flex justify-between items-baseline gap-2 pb-2.5 border-b border-white/[0.04]">
                <dt className="text-[#64748b] font-medium font-mono text-[11px]">linkedin</dt>
                <dd className="text-[#70f0ff] font-semibold text-right">
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
                <dt className="text-[#64748b] font-medium font-mono text-[11px]">github</dt>
                <dd className="text-[#70f0ff] font-semibold text-right">
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
          </div>

        </div>

        {/* Engineering Pillars 3-Grid */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="section-tag">Core Technical Pillars</p>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#f1f5f9] mb-8">What I build for enterprise teams</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <article className="sr-card p-6 bg-gradient-to-br from-[#00e5ff]/[0.06] to-[#0c101c] border-[#00e5ff]/20 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 flex items-center justify-center text-xl text-[#00e5ff]">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#f1f5f9]">Wage &amp; Payroll Engines</h4>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Next.js 16 App Router &amp; pure TypeScript calculations for multi-site contractual workforce, OT multipliers, PTAX slabs, and zero-loss ledgers.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 font-mono text-[10px] text-[#00e5ff]">
                UWMS Architecture
              </div>
            </article>

            {/* Pillar 2 */}
            <article className="sr-card p-6 bg-gradient-to-br from-[#10b981]/[0.06] to-[#0c101c] border-[#10b981]/20 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-xl text-[#10b981]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#f1f5f9]">Banking &amp; Secure APIs</h4>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Java Spring Boot REST microservices with Spring Security role-based authorization for real estate appraisal and bank property evaluation.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 font-mono text-[10px] text-[#10b981]">
                IMSG Banking Engine
              </div>
            </article>

            {/* Pillar 3 */}
            <article className="sr-card p-6 bg-gradient-to-br from-[#6366f1]/[0.06] to-[#0c101c] border-[#6366f1]/20 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/30 flex items-center justify-center text-xl text-[#6366f1]">
                  <Cloud className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#f1f5f9]">Cloud Containers &amp; Schemas</h4>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Containerized deployments on AWS App Runner with Docker, Supabase PostgreSQL schemas, and high-performance database indexing.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 font-mono text-[10px] text-[#a855f7]">
                AWS App Runner + Docker
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}

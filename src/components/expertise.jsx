import React from "react";
import { Layers, ShieldCheck, Database, Cloud, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const DOMAIN_DOMAINS = [
  {
    title: "Wage & Payroll Architecture",
    icon: Layers,
    items: [
      "Contractual Workforce Wage Engines",
      "Multi-Project Payroll Pipelines (UWMS)",
      "Attendance Sheet Automation & Parsers",
      "Dynamic OT Multiplier Algorithms",
      "PTAX & PF Compliance Slabs",
      "Full & Final (F&F) Settlements",
    ],
  },
  {
    title: "Banking & Security Architecture",
    icon: ShieldCheck,
    items: [
      "Banking Property Sourcing System (IMSG)",
      "Multi-Level Spring Security RBAC",
      "Bank Appraisal Audit Pipelines",
      "Secure Transaction Gateways (PayPal)",
      "Role-Based Authorizations & JWT",
      "Digitized Real Estate Approval Flow",
    ],
  },
  {
    title: "Cloud, Database & Schemas",
    icon: Database,
    items: [
      "PostgreSQL Relational DB Architecture",
      "Supabase Row-Level Security (RLS)",
      "High-Performance MySQL 35% Indexing",
      "AWS App Runner Container Scaling",
      "Docker Microservice Deployments",
      "Immutable Audit-Ready Ledgers",
    ],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 border-b border-slate-200/80 dark:border-white/[0.06] bg-slate-50/50 dark:bg-[#080d1a]/50">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-tag justify-center">05 — Specialized Domains</p>
          <h2 className="section-heading">Specialized domain engineering</h2>
          <p className="text-slate-600 dark:text-[#94a3b8] text-base leading-relaxed">
            High-precision calculation engines, financial compliance slabs, and scalable banking workflows built for enterprise operations.
          </p>
        </div>

        {/* 3 Domain Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {DOMAIN_DOMAINS.map((domain, dIdx) => {
            const IconComp = domain.icon;
            return (
              <motion.div
                key={dIdx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: dIdx * 0.1 }}
                className="sr-card p-6 sm:p-7 bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/[0.08] hover:border-[#0284c7]/40 dark:hover:border-[#38bdf8]/30 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] text-[#0284c7] dark:text-[#38bdf8]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {domain.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-[#cbd5e1]">
                    {domain.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] dark:bg-[#38bdf8] mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/[0.08] font-mono text-[10px] text-[#0284c7] dark:text-[#38bdf8] font-bold flex items-center justify-between">
                  <span>Domain Mastery</span>
                  <span>✓ Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

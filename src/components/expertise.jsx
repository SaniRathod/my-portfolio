import React from "react";

const DOMAIN_AREAS = [
  "Contractual Wage Engines",
  "Multi-Project Payroll (UWMS)",
  "Attendance Excel Parsers",
  "OT Multiplier Algorithms",
  "PTAX & PF Slab Calculation",
  "Full & Final (F&F) Settlements",
  "Banking Property Sourcing (IMSG)",
  "Spring Security RBAC",
  "PostgreSQL Relational Schemas",
  "Supabase Row-Level Security",
  "PayPal E-Commerce Gateways",
  "Next.js 16 App Router",
  "TypeScript Pure Functions",
  "AWS App Runner Cloud",
  "Docker Container Deployments",
  "REST Microservice Architecture",
  "KPI Analytics Dashboards",
  "Audit-Ready Immutable Ledgers",
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 border-b border-white/[0.04] bg-[#0c101c]/20">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto text-center">
        
        {/* Section Header */}
        <p className="section-tag">06 — Domain Mastery</p>
        <h2 className="section-heading">Specialized domain engineering</h2>
        <p className="text-[#94a3b8] text-sm sm:text-base max-w-xl mx-auto mb-12 leading-relaxed">
          High-precision calculation engines, financial compliance slabs, and scalable banking workflows.
        </p>

        {/* Pill Grid */}
        <div className="flex flex-wrap gap-2.5 justify-center max-w-4xl mx-auto">
          {DOMAIN_AREAS.map((pill, idx) => (
            <span
              key={idx}
              className="sr-card !py-2.5 !px-4 text-xs font-semibold text-[#94a3b8] hover:text-[#00e5ff] hover:border-[#00e5ff]/40 hover:-translate-y-0.5 transition-all cursor-default"
            >
              {pill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

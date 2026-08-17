import React, { useState } from "react";
import { ArrowRight, Download, FileText, CheckCircle2, ChevronDown, Sparkles, Building2, Terminal, Layers, ShieldCheck, Cpu, Database, Cloud, Server } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ARCHITECTURES = {
  uwms: {
    id: "uwms",
    badge: "Production Ready · Multi-Tenant",
    title: "UWMS — Wage Engine Architecture",
    description: "Enterprise multi-project contractual payroll & ledger pipeline",
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Supabase", "AWS App Runner"],
    nodes: [
      { step: "01", icon: "📊", label: "Ingestion", sub: "Timesheet Data" },
      { step: "02", icon: "⚙️", label: "Math Engine", sub: "Pure-Function TS" },
      { step: "03", icon: "🗄️", label: "Ledgers", sub: "PostgreSQL RLS" },
      { step: "04", icon: "🚀", label: "Cloud Node", sub: "AWS App Runner" },
    ],
    highlights: [
      { label: "Core Pattern", value: "Pure Mathematical Functions" },
      { label: "Ledger State", value: "100% Immutable Records" },
      { label: "Database", value: "Supabase Relational Schemas" },
      { label: "Deployment", value: "Docker Containerized" },
    ],
    status: "✓ Production Pipeline Active",
    statusColor: "text-[#10b981]",
  },
  imsg: {
    id: "imsg",
    badge: "Production Ready · Banking Security",
    title: "IMSG — Bank Sourcing Architecture",
    description: "Proprietary bank real-estate appraisal & property evaluation workflow",
    stack: ["Java", "Spring Boot", "Spring Security", "MySQL", "React.js"],
    nodes: [
      { step: "01", icon: "🏛️", label: "Sourcing", sub: "Bank Appraisals" },
      { step: "02", icon: "🔐", label: "RBAC Auth", sub: "Spring Security" },
      { step: "03", icon: "⚡", label: "Core API", sub: "REST Services" },
      { step: "04", icon: "💾", label: "Storage", sub: "Indexed MySQL" },
    ],
    highlights: [
      { label: "Authorization", value: "Multi-Tier Role Security" },
      { label: "Query Speed", value: "35% Faster Indexing" },
      { label: "Microservices", value: "Spring Boot RESTful APIs" },
      { label: "Front End", value: "React.js & FlutterFlow" },
    ],
    status: "✓ Bank System Verified",
    statusColor: "text-[#00e5ff]",
  },
};

export default function Hero() {
  const { toggleResume, setSelectedProject, projects, siteSettings } = useTheme();
  const [activeArch, setActiveArch] = useState("uwms");

  const currentArch = ARCHITECTURES[activeArch];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-[calc(72px+28px)] pb-10 border-b border-white/[0.04]">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto flex-1 flex flex-col justify-center gap-10">
        
        {/* Main 2-Column Showcase */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bio & Core Intro */}
          <div className="space-y-5 text-left">
            
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/25 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse"></span>
              <span>Available for high-impact software engineering roles</span>
            </div>

            {/* Sub-Header */}
            <p className="font-mono text-xs tracking-widest uppercase text-[#00e5ff] font-semibold">
              Software Developer • Hinjewadi Phase 1, Pune, India
            </p>

            <p className="text-sm font-medium text-[#94a3b8] -mt-3">
              Varnilix Pvt Ltd
            </p>

            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl font-normal tracking-tight brand-name-gradient leading-[1.06]">
              {siteSettings.name || "Sani Rathod"}
            </h1>

            {/* Editorial Bio */}
            <p className="font-editorial text-base sm:text-lg text-[#94a3b8] max-w-xl leading-relaxed">
              Software Developer architecting <strong className="text-[#f1f5f9]">production-ready web applications</strong> — including <strong className="text-[#00e5ff]">UWMS</strong> (multi-project contractual wage calculation engine with Next.js 16 &amp; Supabase) and <strong className="text-[#10b981]">IMSG</strong> (banking property evaluation system with Java Spring Boot &amp; Spring Security RBAC).
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                "Next.js 16",
                "TypeScript",
                "Java",
                "Spring Boot",
                "Spring Security",
                "PostgreSQL",
                "Supabase",
                "REST APIs",
                "AWS App Runner",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full bg-[#00e5ff]/[0.08] border border-[#00e5ff]/20 text-[#70f0ff] hover:border-[#00e5ff]/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a href="#work" className="sr-btn-primary">
                <span>View Production Systems —</span>
              </a>

              <a href="#contact" className="sr-btn-ghost">
                <span>Schedule a Conversation</span>
              </a>

              <button
                onClick={toggleResume}
                className="sr-btn-ghost"
              >
                <Download className="w-3.5 h-3.5 text-[#00e5ff]" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-[#64748b]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00e5ff]" />
                B.E Computer Engineering (7.64 CGPA)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                UWMS Enterprise Engine
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />
                IMSG Banking Security RBAC
              </span>
            </div>
          </div>

          {/* Right Column: Unique Interactive Production Architecture Console */}
          <div className="space-y-4">
            <div className="sr-card p-6 sm:p-7 border-[#00e5ff]/20 shadow-[0_0_50px_rgba(0,229,255,0.08)]">
              
              {/* Architecture Selector Switcher Tabs */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10 flex-wrap">
                <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setActiveArch("uwms")}
                    className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg transition-all ${
                      activeArch === "uwms"
                        ? "bg-[#00e5ff]/20 text-[#70f0ff] border border-[#00e5ff]/40 shadow-sm"
                        : "text-[#64748b] hover:text-[#f1f5f9]"
                    }`}
                  >
                    UWMS Wage Engine
                  </button>

                  <button
                    onClick={() => setActiveArch("imsg")}
                    className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg transition-all ${
                      activeArch === "imsg"
                        ? "bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40 shadow-sm"
                        : "text-[#64748b] hover:text-[#f1f5f9]"
                    }`}
                  >
                    IMSG Banking System
                  </button>
                </div>

                <span className="font-mono text-[10px] font-bold text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/30 px-2.5 py-1 rounded-full whitespace-nowrap">
                  ✓ PRODUCTION READY
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-5 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#f1f5f9] font-normal">
                    {currentArch.title}
                  </h3>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  {currentArch.description}
                </p>
              </div>

              {/* 4-Node Architecture Flow with Flowing Pulse */}
              <div className="bg-[#06080f]/90 border border-white/10 rounded-xl p-4 sm:p-5 mb-5 space-y-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#64748b] flex items-center justify-between">
                  <span>Architecture Pipeline</span>
                  <span className="text-[#00e5ff]">4 Nodes Connected</span>
                </div>

                {/* Nodes Flow */}
                <div className="flex items-center justify-between gap-1">
                  {currentArch.nodes.map((node, nIdx) => (
                    <React.Fragment key={nIdx}>
                      <div className="flex flex-col items-center gap-1.5 text-center flex-shrink-0">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.03] border border-white/15 hover:border-[#00e5ff]/50 flex items-center justify-center text-lg sm:text-xl transition-all shadow-sm">
                          {node.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#f1f5f9]">
                          {node.label}
                        </span>
                        <span className="text-[9px] text-[#64748b] max-w-[62px] leading-tight">
                          {node.sub}
                        </span>
                      </div>

                      {nIdx < currentArch.nodes.length - 1 && (
                        <div className="flex-1 h-[2px] bg-white/10 relative mx-1">
                          <span
                            className="absolute -top-[3px] w-2 h-2 rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff] animate-flow-pulse"
                            style={{ animationDelay: `${nIdx * 0.7}s` }}
                          ></span>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Architecture Highlights Telemetry Matrix */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-5">
                {currentArch.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[9px] text-[#64748b] uppercase block">{item.label}</span>
                    <strong className="text-[11px] text-[#f1f5f9] truncate block mt-0.5">{item.value}</strong>
                  </div>
                ))}
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between text-xs pt-3 border-t border-white/10 flex-wrap gap-2">
                <span className={`font-mono text-[11px] font-semibold ${currentArch.statusColor}`}>
                  {currentArch.status}
                </span>

                <button
                  onClick={() => {
                    const targetProj = projects.find((p) => p.id === currentArch.id) || projects[0];
                    setSelectedProject(targetProj);
                  }}
                  className="font-mono text-xs text-[#00e5ff] hover:text-[#70f0ff] flex items-center gap-1 font-semibold"
                >
                  <span>Explore Technical Case Study</span> →
                </button>
              </div>
            </div>

            {/* Profile Avatar Glance */}
            <div className="sr-card p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#00e5ff]/30 flex-shrink-0 bg-[#06080f] shadow-lg">
                  <img
                    src="/Sani_Profile_2.png"
                    alt="Sani Rathod"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 30%" }}
                    onError={(e) => { e.target.src = "/Sani_Profile.jpeg"; }}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#f1f5f9]">Sani Rathod</h4>
                  <p className="text-xs text-[#94a3b8]">Software Developer @ Varnilix Pvt Ltd</p>
                </div>
              </div>

              <a
                href="#about"
                className="text-xs font-mono text-[#00e5ff] hover:text-[#70f0ff] flex items-center gap-1"
              >
                <span>Full Story</span> →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Dev Metrics HUD */}
        <div className="sr-card p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-mono text-xs font-medium text-[#10b981] flex items-center gap-1.5 whitespace-nowrap">
            <span>$ sani.dev --stats</span>
            <span className="w-2 h-4 bg-[#10b981] animate-cursor"></span>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 justify-start md:justify-end w-full md:w-auto">
            <div className="flex flex-col">
              <strong className="font-mono text-base sm:text-lg font-bold text-[#00e5ff] leading-none">1.5+</strong>
              <span className="text-[10px] text-[#64748b] uppercase tracking-wider mt-1">Years Experience</span>
            </div>

            <div className="w-[1px] h-7 bg-white/10 hidden sm:block"></div>

            <div className="flex flex-col">
              <strong className="font-mono text-base sm:text-lg font-bold text-[#00e5ff] leading-none">4+</strong>
              <span className="text-[10px] text-[#64748b] uppercase tracking-wider mt-1">Enterprise Deliverables</span>
            </div>

            <div className="w-[1px] h-7 bg-white/10 hidden sm:block"></div>

            <div className="flex flex-col">
              <strong className="font-mono text-base sm:text-lg font-bold text-[#10b981] leading-none">0</strong>
              <span className="text-[10px] text-[#64748b] uppercase tracking-wider mt-1">Calculation Errors</span>
            </div>

            <div className="w-[1px] h-7 bg-white/10 hidden sm:block"></div>

            <div className="flex flex-col">
              <strong className="font-mono text-base sm:text-lg font-bold text-[#a855f7] leading-none">7.64</strong>
              <span className="text-[10px] text-[#64748b] uppercase tracking-wider mt-1">B.E Comp CGPA</span>
            </div>

            <div className="w-[1px] h-7 bg-white/10 hidden sm:block"></div>

            <div className="flex flex-col">
              <strong className="font-mono text-base sm:text-lg font-bold text-[#f59e0b] leading-none">100%</strong>
              <span className="text-[10px] text-[#64748b] uppercase tracking-wider mt-1">Delivery Success</span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        className="flex flex-col items-center gap-1.5 pt-6 text-[#64748b] hover:text-[#00e5ff] transition-colors self-center"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#00e5ff]" />
      </a>
    </section>
  );
}

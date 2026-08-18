import React, { useState } from "react";
import { Code, Server, Database, Wrench, Cpu, CheckCircle2, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    icon: Code,
    color: "from-[#0284c7] to-[#38bdf8]",
    barBg: "bg-[#0284c7]",
    skills: [
      { name: "Next.js 16 (App Router)", percent: 92, note: "Server Components & Pure TS" },
      { name: "TypeScript", percent: 90, note: "Strict Mathematical Typings" },
      { name: "React.js & Hooks", percent: 90, note: "Custom Architecture & State" },
      { name: "Tailwind CSS", percent: 95, note: "Modern Design Systems" },
      { name: "FlutterFlow / Mobile", percent: 78, note: "Rapid Prototype Delivery" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Microservices",
    icon: Server,
    color: "from-[#059669] to-[#34d399]",
    barBg: "bg-[#059669]",
    skills: [
      { name: "Core JAVA (OOP / Streams)", percent: 92, note: "High-Performance Concurrency" },
      { name: "Spring Boot", percent: 88, note: "RESTful Enterprise APIs" },
      { name: "Spring Security (RBAC / JWT)", percent: 85, note: "Multi-Tier Bank Security" },
      { name: "RESTful Microservices", percent: 92, note: "Clean Architecture & Contracts" },
      { name: "Python", percent: 70, note: "Scripting & Data Utilities" },
    ],
  },
  {
    id: "database",
    title: "Database Engineering",
    icon: Database,
    color: "from-[#4f46e5] to-[#818cf8]",
    barBg: "bg-[#4f46e5]",
    skills: [
      { name: "PostgreSQL", percent: 90, note: "Relational Schemas & Indexes" },
      { name: "Supabase DB & RLS", percent: 88, note: "Row-Level Security & Auth" },
      { name: "MySQL & Query Indexing", percent: 88, note: "35% Faster Query Opt" },
      { name: "MS SQL Server", percent: 82, note: "Stored Procedures & Tables" },
    ],
  },
  {
    id: "devops",
    title: "Cloud Containers & DevOps",
    icon: Wrench,
    color: "from-[#7c3aed] to-[#a855f7]",
    barBg: "bg-[#7c3aed]",
    skills: [
      { name: "AWS App Runner", percent: 80, note: "Cloud Microservice Scaling" },
      { name: "Docker Containers", percent: 78, note: "Containerized Workloads" },
      { name: "Git & GitHub Version Control", percent: 92, note: "Branching & CI Workflows" },
      { name: "Postman API Testing", percent: 90, note: "Automated Suite Testing" },
      { name: "Jira / Scrum Workflow", percent: 88, note: "Agile Sprint Delivery" },
    ],
  },
];

const TECH_BADGES = [
  "⚡ Next.js 16",
  "🟦 TypeScript",
  "☕ Core JAVA",
  "🍃 Spring Boot",
  "🔐 Spring Security",
  "🗄️ PostgreSQL",
  "⚡ Supabase DB",
  "🐬 MySQL",
  "☁️ AWS App Runner",
  "🐳 Docker",
  "📦 REST APIs",
  "🐙 Git & GitHub",
  "🧪 Postman",
  "📋 Jira / Agile",
  "🎨 Tailwind CSS",
  "🔥 Redux Toolkit",
  "📊 Excel Parsers",
  "💼 Wage Ledgers",
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    if (activeTab !== "all" && category.id !== activeTab) return false;
    return true;
  });

  return (
    <section id="skills" className="py-20 sm:py-24 border-b border-slate-200/80 dark:border-white/[0.06] bg-white dark:bg-[#080d1a]/40 overflow-hidden">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-tag">04 — Core Capabilities</p>
            <h2 className="section-heading">Technical capabilities &amp; depth</h2>
            <p className="text-slate-600 dark:text-[#94a3b8] text-sm sm:text-base max-w-xl leading-relaxed">
              Full-spectrum stack across modern frontend architectures, secure Java backends, relational schemas, and containerized cloud delivery.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#0f172a] p-1.5 rounded-xl border border-slate-200 dark:border-white/[0.08] overflow-x-auto max-w-full shadow-sm">
            <button
              onClick={() => setActiveTab("all")}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === "all"
                  ? "bg-white dark:bg-[#0284c7]/20 text-[#0284c7] dark:text-[#38bdf8] border border-slate-200 dark:border-[#38bdf8]/30 shadow-sm"
                  : "text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Quadrants
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === cat.id
                    ? "bg-white dark:bg-[#0284c7]/20 text-[#0284c7] dark:text-[#38bdf8] border border-slate-200 dark:border-[#38bdf8]/30 shadow-sm"
                    : "text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <AnimatePresence>
            {filteredCategories.map((category, cIdx) => {
              const IconComp = category.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: cIdx * 0.05 }}
                  key={category.id}
                  className="sr-card p-6 sm:p-7 bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/[0.08] hover:border-[#0284c7]/40 dark:hover:border-[#38bdf8]/30 shadow-md"
                >
                  <div className="flex items-center justify-between gap-2.5 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] text-[#0284c7] dark:text-[#38bdf8]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-sans text-sm font-extrabold tracking-tight text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-[#64748b] bg-slate-100 dark:bg-[#080d1a] px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/[0.06]">
                      {category.skills.length} Skills
                    </span>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <div>
                            <span className="font-bold text-slate-800 dark:text-white">{skill.name}</span>
                            {skill.note && (
                              <span className="text-[10px] text-slate-500 dark:text-[#64748b] ml-2 hidden sm:inline">
                                • {skill.note}
                              </span>
                            )}
                          </div>
                          <span className="font-mono font-bold text-[#0284c7] dark:text-[#38bdf8]">{skill.percent}%</span>
                        </div>
                        
                        {/* Skill Meter Bar */}
                        <div className="w-full h-2 bg-slate-100 dark:bg-[#080d1a] rounded-full overflow-hidden border border-slate-200 dark:border-white/[0.04]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Tech Cloud */}
        <div className="sr-card p-6 bg-slate-50/70 dark:bg-[#0f172a] border-slate-200 dark:border-white/[0.08] text-center shadow-sm">
          <p className="font-mono text-xs text-slate-500 dark:text-[#64748b] uppercase tracking-wider mb-4 font-bold">
            Production-Ready Frameworks &amp; Tooling
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {TECH_BADGES.map((badge, bIdx) => (
              <span
                key={bIdx}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-[#cbd5e1] bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] hover:text-[#0284c7] dark:hover:text-white hover:border-[#0284c7]/40 dark:hover:border-[#38bdf8]/40 hover:-translate-y-0.5 transition-all cursor-default shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

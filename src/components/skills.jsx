import React from "react";
import { Code, Server, Database, Wrench, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Architecture",
    icon: Code,
    color: "from-[#00e5ff] to-[#0096c7]",
    skills: [
      { name: "Next.js 16 (App Router)", percent: 92 },
      { name: "TypeScript", percent: 90 },
      { name: "React.js & Hooks", percent: 90 },
      { name: "Tailwind CSS", percent: 95 },
      { name: "FlutterFlow / UI", percent: 78 },
    ],
  },
  {
    title: "Backend & Microservices",
    icon: Server,
    color: "from-[#10b981] to-[#059669]",
    skills: [
      { name: "Core JAVA (OOP / Streams)", percent: 92 },
      { name: "Spring Boot", percent: 88 },
      { name: "Spring Security (RBAC / JWT)", percent: 85 },
      { name: "RESTful APIs & Microservices", percent: 92 },
      { name: "Python", percent: 70 },
    ],
  },
  {
    title: "Database Engineering",
    icon: Database,
    color: "from-[#6366f1] to-[#4f46e5]",
    skills: [
      { name: "PostgreSQL", percent: 90 },
      { name: "Supabase DB & RLS", percent: 88 },
      { name: "MySQL & Query Indexing", percent: 88 },
      { name: "MS SQL Server", percent: 82 },
    ],
  },
  {
    title: "Cloud Containers & DevOps",
    icon: Wrench,
    color: "from-[#a855f7] to-[#7c3aed]",
    skills: [
      { name: "AWS App Runner", percent: 80 },
      { name: "Docker Containers", percent: 78 },
      { name: "Git & GitHub Version Control", percent: 92 },
      { name: "Postman API Testing", percent: 90 },
      { name: "Jira / Scrum Workflow", percent: 88 },
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
  return (
    <section id="skills" className="py-24 border-b border-white/[0.04] bg-[#0c101c]/30">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto">
        
        {/* Section Header */}
        <p className="section-tag">05 — Tech Matrix</p>
        <h2 className="section-heading">Technical capabilities &amp; depth</h2>
        <p className="text-[#94a3b8] text-sm sm:text-base max-w-xl mb-12 leading-relaxed">
          Comprehensive stack across enterprise frontend architectures, secure Java backends, and containerized cloud delivery.
        </p>

        {/* 2x2 Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {SKILL_CATEGORIES.map((category, cIdx) => {
            const IconComp = category.icon;
            return (
              <div key={cIdx} className="sr-card p-6 sm:p-7">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="p-2 rounded-xl bg-gradient-to-tr from-[#00e5ff]/10 to-[#6366f1]/10 border border-white/10 text-[#00e5ff]">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#94a3b8]">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-[#f1f5f9]">{skill.name}</span>
                        <span className="font-mono font-semibold text-[#00e5ff]">{skill.percent}%</span>
                      </div>
                      
                      {/* Skill Meter Bar */}
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Cloud */}
        <div className="flex flex-wrap gap-2 justify-center pt-4">
          {TECH_BADGES.map((badge, bIdx) => (
            <span
              key={bIdx}
              className="sr-card !py-2 !px-4 text-xs font-semibold text-[#94a3b8] hover:text-[#f1f5f9] hover:border-[#00e5ff]/50 transition-all cursor-default"
            >
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

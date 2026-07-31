import React, { useState } from "react";
import { User, Rocket, Shield, Building, CheckCircle2, Cpu } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { toggleResume } = useTheme();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">Sani Rathod</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/80 space-x-2">
            {[
              { id: "overview", label: "Overview", icon: User },
              { id: "experience", label: "Current Role", icon: Building },
              { id: "philosophy", label: "Philosophy", icon: Rocket },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Cards */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            {activeTab === "overview" && (
              <div className="space-y-4 animate-fade-in text-slate-700 dark:text-slate-300">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  Software Developer (Next.js 16, TypeScript, PostgreSQL & Java)
                </h3>
                <p className="leading-relaxed">
                  I am a Software Developer currently working at <strong className="text-slate-900 dark:text-white">Varnilix Pvt Ltd</strong> in Hinjewadi Phase 1, Pune. I specialize in building enterprise applications using <strong className="text-emerald-600 dark:text-emerald-400">Next.js 16, TypeScript, PostgreSQL DB, Supabase, Java, Spring Boot</strong>, and modern web architectures.
                </p>
                <p className="leading-relaxed">
                  My experience spans developing multi-project contractual payroll systems, banking property evaluation platforms, secure payment integrations, and dynamic dashboards.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <span className="text-xs text-slate-400 font-semibold uppercase">Degree</span>
                    <p className="font-bold text-slate-900 dark:text-white text-sm mt-1">B.E (Computer Engg)</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <span className="text-xs text-slate-400 font-semibold uppercase">Location</span>
                    <p className="font-bold text-slate-900 dark:text-white text-sm mt-1">Hinjewadi Phase 1, Pune</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-4 animate-fade-in text-slate-700 dark:text-slate-300">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  Software Developer @ Varnilix Pvt Ltd
                </h3>
                <p className="leading-relaxed">
                  Currently building <strong className="text-emerald-600 dark:text-emerald-400">UWMS (Unified Wage Management System)</strong> at Varnilix Pvt Ltd (Hinjewadi Phase 1, Pune) for contractual workforce across multiple enterprise client sites.
                </p>
                <div className="space-y-2 pt-2">
                  {[
                    "UWMS Next.js 16 & TypeScript Payroll Calculation Engine",
                    "Supabase & PostgreSQL Database Schema & Audit Ledgers",
                    "Excel Sheet Attendance Processing & Full & Final (F&F) Settlements",
                    "IMSG Proprietary Bank Property Evaluation Application",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "philosophy" && (
              <div className="space-y-4 animate-fade-in text-slate-700 dark:text-slate-300">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                  Engineering & Performance Standards
                </h3>
                <p className="leading-relaxed">
                  I prioritize pure-function calculation engines, type safety with TypeScript, clean relational database schemas, and seamless UI/UX design.
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={toggleResume}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Read Interactive Resume</span> →
              </button>
            </div>
          </div>

          {/* Right Highlights Cards with Professional Photo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl text-white shadow-xl relative overflow-hidden flex items-center space-x-4">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/40 flex-shrink-0 shadow-lg bg-slate-900">
                <img
                  src="/Sani_Profile_2.png"
                  alt="Sani Rathod"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.src = "/Sani_Profile.jpeg";
                  }}
                />
              </div>
              <div className="relative z-10">
                <div className="text-[11px] uppercase font-bold tracking-wider text-emerald-200">Current Position</div>
                <h4 className="text-xl font-bold mt-0.5">Varnilix Pvt Ltd</h4>
                <p className="text-emerald-100 text-xs mt-1 leading-relaxed">
                  Hinjewadi Phase 1, Pune. Architecting UWMS Multi-Project Payroll & Workforce Platform.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2.5 bg-blue-100 dark:bg-blue-950/60 rounded-xl text-blue-600 dark:text-blue-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white text-base">Next.js, TS & PostgreSQL</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Full Stack Architecture & Data Engines</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

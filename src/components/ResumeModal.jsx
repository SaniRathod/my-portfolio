import React, { useState } from 'react';
import { X, Download, Printer, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';

export default function ResumeModal() {
  const { isResumeOpen, setIsResumeOpen, experiences, projects } = useTheme();

  if (!isResumeOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      {/* Modal Container */}
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="print:hidden bg-slate-950 text-white p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              Sani Rathod — Professional CV (MNC & ATS Standard)
            </h2>
            <p className="text-slate-400 text-xs mt-0.5">Optimized 1-2 Page Format • No Photo • ATS Acceptable</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg shadow-emerald-500/25"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF (1-2 Pages)</span>
            </button>
            <button
              onClick={() => setIsResumeOpen(false)}
              className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* MNC ATS Acceptable Resume Document */}
        <div className="p-8 md:p-12 overflow-y-auto bg-white text-slate-900 print:p-0 print:overflow-visible font-sans leading-tight">
          
          {/* Print Style Injector for Strict 1-2 Page Output */}
          <style>{`
            @media print {
              @page {
                size: A4 portrait;
                margin: 10mm 12mm 10mm 12mm;
              }
              body {
                background: white !important;
                color: black !important;
                font-size: 11pt !important;
              }
              .print\\:hidden {
                display: none !important;
              }
              .page-break-avoid {
                break-inside: avoid;
              }
            }
          `}</style>

          {/* 1. Header Information (MNC ATS Standard: Name, Title, Contact - NO PHOTO) */}
          <div className="border-b-2 border-slate-900 pb-4 mb-5 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">Sani Rathod</h1>
              <p className="text-sm font-bold text-emerald-700 uppercase tracking-wider mt-0.5">
                Full Stack Software Developer (Java | Spring Boot | React.js | Next.js 16)
              </p>
            </div>

            <div className="text-xs font-medium space-y-1 text-slate-700 text-right sm:text-right">
              <p>📍 Hinjewadi Phase 1, Pune, Maharashtra, India</p>
              <p>📧 sanirathod8975@gmail.com | 📞 +91 8975223625</p>
              <p>🔗 linkedin.com/in/sani-rathod | 🐙 github.com/SaniRathod</p>
            </div>
          </div>

          {/* 2. Professional Executive Summary */}
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Executive Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-800">
              Results-driven <strong>Full Stack Software Developer</strong> with proven expertise in building high-concurrency enterprise banking platforms, contractual workforce payroll engines, and payment gateways. Proficient in <strong>Java, Spring Boot, Spring Security, Next.js 16, TypeScript, React.js, PostgreSQL, Supabase</strong>, and <strong>MySQL</strong>. Experienced in designing RESTful microservices, implementing role-based access control, optimizing SQL queries, and deploying applications on AWS App Runner.
            </p>
          </div>

          {/* 3. Core Technical Skills (MNC ATS Grid Format) */}
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-800">
              <p><strong>Languages:</strong> Core JAVA, TypeScript, JavaScript (ES6+), SQL, Python</p>
              <p><strong>Frontend:</strong> Next.js 16, React.js, Redux Toolkit, Tailwind CSS, FlutterFlow</p>
              <p><strong>Backend Frameworks:</strong> Spring Boot, Spring Security, REST APIs, Microservices</p>
              <p><strong>Databases:</strong> PostgreSQL, Supabase DB, MySQL, MS SQL Server</p>
              <p><strong>Cloud & DevOps:</strong> AWS App Runner, Docker, Git / GitHub, Postman API</p>
              <p><strong>Methodologies:</strong> Agile / Scrum, Jira Workflow, Unit Testing, Clean Code</p>
            </div>
          </div>

          {/* 4. Professional Work Experience */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Professional Work Experience
            </h2>

            <div className="space-y-4">
              {/* Role 1: Varnilix Pvt Ltd */}
              <div className="page-break-avoid">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-900">
                    Software Developer — <span className="text-emerald-800">Varnilix Pvt Ltd</span>
                  </h3>
                  <span className="text-xs font-bold text-slate-700">May 2026 – Present | Pune, India</span>
                </div>
                <p className="text-[11px] italic text-slate-600 mb-1">
                  Project: Unified Wage Management System (UWMS) for contractual workforce across enterprise client sites.
                </p>
                <ul className="list-disc list-outside pl-4 space-y-1 text-[11px] text-slate-800">
                  <li>Engineered Next.js 16 App Router & pure-function TypeScript payroll engine for multi-project client sites (Saint Gobain, Dana, United Breweries).</li>
                  <li>Architected Supabase & PostgreSQL database schemas for immutable payroll ledgers, PTAX slabs, PF base, and OT calculations.</li>
                  <li>Developed automated Excel attendance sheet parser, leave encashment calculations, and Full & Final (F&F) exit settlements.</li>
                  <li>Configured containerized application deployments on AWS App Runner with Docker.</li>
                </ul>
              </div>

              {/* Role 2: The Data Tech Labs */}
              <div className="page-break-avoid">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-900">
                    Jr Software Developer — <span className="text-blue-800">The Data Tech Labs</span>
                  </h3>
                  <span className="text-xs font-bold text-slate-700">Oct 2024 – May 2026 | Pune, India</span>
                </div>
                <p className="text-[11px] italic text-slate-600 mb-1">
                  Project: IMSG Proprietary Banking Property Sourcing & Appraisal Platform.
                </p>
                <ul className="list-disc list-outside pl-4 space-y-1 text-[11px] text-slate-800">
                  <li>Built secure Java & Spring Boot RESTful APIs with Spring Security role-based access control for banking operations.</li>
                  <li>Engineered interactive front-end dashboards using React.js, Redux, and FlutterFlow for property evaluation workflows.</li>
                  <li>Optimized MySQL query execution and database index structures, improving response speed by 35%.</li>
                </ul>
              </div>

              {/* Role 3: HulkHire Tech */}
              <div className="page-break-avoid">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-900">
                    Software Developer Intern — <span className="text-purple-800">HulkHire Tech</span>
                  </h3>
                  <span className="text-xs font-bold text-slate-700">Sep 2024 – Oct 2024 | Hybrid</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-[11px] text-slate-800">
                  <li>Integrated PayPal REST SDK for e-commerce checkout authorization, capture, and automated refund management.</li>
                  <li>Built Spring Boot WebHook listener for instant IPN payment captures and error log handling.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Key Engineering Projects */}
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Key Technical Projects
            </h2>
            <div className="space-y-2 text-[11px] text-slate-800">
              <p>
                <strong>UWMS Payroll Engine:</strong> Next.js 16, TypeScript, Supabase, PostgreSQL, AWS App Runner. Built multi-project wage engine for contractual workforce.
              </p>
              <p>
                <strong>IMSG Banking Property Sourcing:</strong> Java, Spring Boot, Spring Security, React.js, MySQL. Digitized bank property evaluations with role access control.
              </p>
              <p>
                <strong>KPI Analytics Dashboard:</strong> React.js, Redux Toolkit, Tailwind CSS. Real-time metric filtering and exportable business analytics charts.
              </p>
            </div>
          </div>

          {/* 6. Education Qualification */}
          <div className="page-break-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education & Academic Background
            </h2>
            <div className="space-y-1.5 text-xs text-slate-800">
              <div className="flex justify-between font-bold">
                <span>B.E in Computer Engineering — Jagadambha College of Engineering, Yavatmal</span>
                <span>CGPA: 7.64 / 10.0 (2020 – 2024)</span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-700">
                <span>Higher Secondary Certificate (HSC) — Atahar Mirza Jr College (Science)</span>
                <span>71.08% (2018 – 2019)</span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-700">
                <span>Secondary School Certificate (SSC) — Vasantrao Naik School</span>
                <span>80.00% (2016 – 2017)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

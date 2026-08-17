import React, { useState } from "react";
import { X, Download, Printer, CheckCircle2, Mail, Building, User, FileText, ArrowDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { trackResumeAction } from "../lib/tracker";
import confetti from "canvas-confetti";

export default function ResumeModal() {
  const { isResumeOpen, setIsResumeOpen, experiences, projects } = useTheme();
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [visitorCompany, setVisitorCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFullView, setShowFullView] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isResumeOpen) return null;

  const handleTriggerDownload = async (sourceType = "modal") => {
    setIsSubmitting(true);

    // 1. Send direct email notification to sanirathod8975@gmail.com
    try {
      await trackResumeAction({
        email: visitorEmail || "Direct Download / ATS Viewer",
        name: visitorName || "Recruiter / Hiring Manager",
        company: visitorCompany || "Not Specified",
        action: "download",
        source: sourceType,
      });
    } catch (e) {
      console.warn("Tracker dispatch notice:", e);
    }

    setIsSubmitting(false);
    setDownloadSuccess(true);

    // 2. Confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    // 3. Trigger browser print / PDF download
    setTimeout(() => {
      window.print();
    }, 400);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleTriggerDownload("form_submit");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsResumeOpen(false);
      }}
    >
      {/* Modal Container */}
      <div className="w-full max-w-4xl bg-[#0e1018] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh] text-[#f4f6fb]">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="print:hidden bg-[#07080d] p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#4da3ff]/10 border border-[#4da3ff]/30 flex items-center justify-center text-[#7cc4ff]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#f4f6fb]">
                Sani Rathod — Professional CV
              </h2>
              <p className="text-[#9ca8bc] text-xs">MNC & ATS Standard • 1-2 Pages • sanirathod8975@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowFullView(!showFullView)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-[#9ca8bc] hover:text-white transition-all hidden sm:inline-flex items-center gap-1.5"
            >
              {showFullView ? "Hide ATS Sheet" : "Preview ATS Sheet"}
            </button>

            <button
              onClick={() => handleTriggerDownload("direct_print_btn")}
              className="nj-btn-primary !py-2 !px-4 !text-xs !rounded-xl"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={() => setIsResumeOpen(false)}
              className="text-[#9ca8bc] hover:text-white p-2 rounded-xl hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Quick Lead Form & Direct Download Box (Hidden when printing) */}
          <div className="print:hidden bg-[#07080d]/80 border border-white/10 rounded-xl p-6 sm:p-8 space-y-5">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl text-[#f4f6fb]">Download Résumé</h3>
              <p className="text-xs sm:text-sm text-[#9ca8bc] leading-relaxed">
                Enter your email or details below to download Sani's résumé. A live notification is instantly sent to{" "}
                <strong className="text-[#7cc4ff]">sanirathod8975@gmail.com</strong>.
              </p>
            </div>

            {downloadSuccess ? (
              <div className="p-4 rounded-xl bg-[#34d399]/10 border border-[#34d399]/30 text-xs text-[#34d399] flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>
                  <strong>Download triggered!</strong> Your visit notification has been sent to{" "}
                  <strong>sanirathod8975@gmail.com</strong>.
                </span>
              </div>
            ) : null}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[#9ca8bc] uppercase tracking-wider flex items-center gap-1">
                    <Mail className="w-3 h-3 text-[#4da3ff]" /> Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={visitorEmail}
                    onChange={(e) => setVisitorEmail(e.target.value)}
                    placeholder="recruiter@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-xs text-[#f4f6fb] font-mono focus:outline-none focus:border-[#4da3ff]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[#9ca8bc] uppercase tracking-wider flex items-center gap-1">
                    <User className="w-3 h-3 text-[#34d399]" /> Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="Hiring Manager"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-xs text-[#f4f6fb] font-mono focus:outline-none focus:border-[#4da3ff]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-[#9ca8bc] uppercase tracking-wider flex items-center gap-1">
                    <Building className="w-3 h-3 text-[#a78bfa]" /> Company / Org
                  </label>
                  <input
                    type="text"
                    value={visitorCompany}
                    onChange={(e) => setVisitorCompany(e.target.value)}
                    placeholder="Tech Corp / Venture"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-xs text-[#f4f6fb] font-mono focus:outline-none focus:border-[#4da3ff]"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="nj-btn-primary !text-xs !py-2.5 !px-6"
                >
                  <Download className="w-4 h-4" />
                  <span>{isSubmitting ? "Recording & Preparing..." : "Submit & Download Résumé ↓"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleTriggerDownload("quick_one_click")}
                  className="nj-btn-ghost !text-xs !py-2.5 !px-4"
                >
                  <span>Quick 1-Click Download (Anonymous)</span>
                </button>
              </div>
            </form>
          </div>

          {/* MNC ATS Acceptable Resume Document Preview */}
          <div className="p-8 sm:p-10 bg-white text-slate-900 rounded-xl shadow-lg font-sans leading-tight print:p-0 print:shadow-none print:rounded-none">
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
                  font-size: 10.5pt !important;
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
            <div className="border-b-2 border-slate-900 pb-4 mb-4 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">SANI RATHOD</h1>
                <p className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wider mt-0.5">
                  Software Developer (Next.js 16 | TypeScript | Java | Spring Boot | PostgreSQL)
                </p>
              </div>

              <div className="text-[11px] font-medium space-y-0.5 text-slate-700 text-right sm:text-right">
                <p>📍 Hinjewadi Phase 1, Pune, Maharashtra, India</p>
                <p>📧 sanirathod8975@gmail.com | 📞 +91 8975223625</p>
                <p>🔗 linkedin.com/in/sani-rathod | 🐙 github.com/SaniRathod</p>
              </div>
            </div>

            {/* 2. Professional Executive Summary */}
            <div className="mb-4 page-break-avoid">
              <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                Executive Summary
              </h2>
              <p className="text-[11px] leading-relaxed text-slate-800">
                Results-driven <strong>Software Developer</strong> with proven expertise in architecting enterprise contractual workforce wage management platforms (UWMS), banking property evaluation engines, and secure payment integrations. Proficient in <strong>Next.js 16 (App Router), TypeScript, PostgreSQL, Supabase, Java, Spring Boot, Spring Security</strong>, and <strong>MySQL</strong>. Skilled in designing immutable payroll ledgers, automated attendance parsers, and deploying microservices on AWS App Runner with Docker.
              </p>
            </div>

            {/* 3. Core Technical Skills */}
            <div className="mb-4 page-break-avoid">
              <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                Technical Core Competencies
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-slate-800">
                <p><strong>Languages:</strong> Core JAVA, TypeScript, JavaScript (ES6+), SQL, Python</p>
                <p><strong>Frontend:</strong> Next.js 16, React.js, Redux Toolkit, Tailwind CSS, FlutterFlow</p>
                <p><strong>Backend:</strong> Spring Boot, Spring Security, REST APIs, Microservices</p>
                <p><strong>Databases:</strong> PostgreSQL, Supabase DB, MySQL, MS SQL Server</p>
                <p><strong>Cloud & DevOps:</strong> AWS App Runner, Docker, Git / GitHub, Postman API</p>
                <p><strong>Methodologies:</strong> Agile / Scrum, Jira, Unit Testing, Pure Function Calculations</p>
              </div>
            </div>

            {/* 4. Professional Work Experience */}
            <div className="mb-4">
              <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Professional Work Experience
              </h2>

              <div className="space-y-3">
                {/* Role 1: Varnilix Pvt Ltd */}
                <div className="page-break-avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[11px] font-bold text-slate-900">
                      Software Developer — <span className="text-emerald-800 font-bold">Varnilix Pvt Ltd</span>
                    </h3>
                    <span className="text-[10px] font-bold text-slate-700">May 2026 – Present | Pune, India</span>
                  </div>
                  <p className="text-[10px] italic text-slate-600 mb-1">
                    Project: Unified Wage Management System (UWMS) for multi-project contractual workforce across enterprise client sites.
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-[10px] text-slate-800">
                    <li>Engineered Next.js 16 App Router & pure-function TypeScript payroll engine for client sites (Saint Gobain, Dana, United Breweries).</li>
                    <li>Architected Supabase & PostgreSQL schemas for immutable wage ledgers, PTAX slabs, PF base, and OT calculations.</li>
                    <li>Developed automated Excel attendance sheet parser, leave encashment calculations, and Full & Final (F&F) settlements.</li>
                    <li>Configured containerized deployments on AWS App Runner with Docker.</li>
                  </ul>
                </div>

                {/* Role 2: The Data Tech Labs */}
                <div className="page-break-avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[11px] font-bold text-slate-900">
                      Jr Software Developer — <span className="text-blue-800 font-bold">The Data Tech Labs</span>
                    </h3>
                    <span className="text-[10px] font-bold text-slate-700">Oct 2024 – May 2026 | Pune, India</span>
                  </div>
                  <p className="text-[10px] italic text-slate-600 mb-1">
                    Project: IMSG Proprietary Banking Property Sourcing & Appraisal Platform.
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-[10px] text-slate-800">
                    <li>Built secure Java & Spring Boot RESTful APIs with Spring Security role-based access control for banking operations.</li>
                    <li>Engineered interactive front-end dashboards using React.js and FlutterFlow for property evaluation workflows.</li>
                    <li>Optimized MySQL query execution and database index structures, improving response speed by 35%.</li>
                  </ul>
                </div>

                {/* Role 3: HulkHire Tech */}
                <div className="page-break-avoid">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[11px] font-bold text-slate-900">
                      Software Developer Intern — <span className="text-purple-800 font-bold">HulkHire Tech</span>
                    </h3>
                    <span className="text-[10px] font-bold text-slate-700">Sep 2024 – Oct 2024 | Hybrid</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-[10px] text-slate-800">
                    <li>Integrated PayPal REST SDK for e-commerce checkout authorization, capture, and automated refund management.</li>
                    <li>Built Spring Boot WebHook listener for instant IPN payment captures and error log handling.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Key Engineering Projects */}
            <div className="mb-4 page-break-avoid">
              <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                Key Technical Projects
              </h2>
              <div className="space-y-1.5 text-[10px] text-slate-800">
                <p>
                  <strong>UWMS Payroll Engine:</strong> Next.js 16, TypeScript, Supabase, PostgreSQL, AWS App Runner. Multi-project wage calculation engine for contractual workforce.
                </p>
                <p>
                  <strong>IMSG Banking Property Sourcing:</strong> Java, Spring Boot, Spring Security, React.js, MySQL. Digitized banking property evaluations with role access control.
                </p>
                <p>
                  <strong>KPI Analytics Dashboard:</strong> React.js, Redux Toolkit, Tailwind CSS. Real-time metric filtering and exportable business analytics charts.
                </p>
              </div>
            </div>

            {/* 6. Education Qualification */}
            <div className="page-break-avoid">
              <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                Education & Academic Background
              </h2>
              <div className="space-y-1 text-[11px] text-slate-800">
                <div className="flex justify-between font-bold">
                  <span>B.E in Computer Engineering — Jagadambha College of Engineering, Yavatmal</span>
                  <span>CGPA: 7.64 / 10.0 (2020 – 2024)</span>
                </div>
                <div className="flex justify-between text-[10px] text-slate-700">
                  <span>Higher Secondary Certificate (HSC) — Atahar Mirza Jr College (Science)</span>
                  <span>71.08% (2018 – 2019)</span>
                </div>
                <div className="flex justify-between text-[10px] text-slate-700">
                  <span>Secondary School Certificate (SSC) — Vasantrao Naik School</span>
                  <span>80.00% (2016 – 2017)</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

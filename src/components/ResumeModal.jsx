import React, { useState, useEffect } from "react";
import { X, Download, Printer, CheckCircle2, Mail, Building, User, FileText, Lock, Unlock, Eye, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { trackResumeAction } from "../lib/tracker";
import confetti from "canvas-confetti";

export default function ResumeModal() {
  const { isResumeOpen, setIsResumeOpen } = useTheme();
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [visitorCompany, setVisitorCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Check if previously unlocked in this session/browser
  useEffect(() => {
    const savedEmail = localStorage.getItem("portfolio-unlocked-email");
    if (savedEmail) {
      setVisitorEmail(savedEmail);
      setIsUnlocked(true);
    }
  }, []);

  if (!isResumeOpen) return null;

  const triggerPdfDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sani_Rathod_Resume.pdf";
    link.download = "Sani_Rathod_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUnlockAndDownload = async (e) => {
    if (e) e.preventDefault();
    if (!visitorEmail || !visitorEmail.includes("@")) {
      alert("Please enter a valid email address to view and download the resume.");
      return;
    }

    setIsSubmitting(true);

    // 1. Dispatch real-time lead notification to sanirathod8975@gmail.com
    try {
      await trackResumeAction({
        email: visitorEmail,
        name: visitorName || "Recruiter / Visitor",
        company: visitorCompany || "Not Specified",
        action: "download_and_view",
        source: "email_gate_modal",
      });
    } catch (e) {
      console.warn("Tracker dispatch notice:", e);
    }

    // Save unlock state
    localStorage.setItem("portfolio-unlocked-email", visitorEmail);
    setIsUnlocked(true);
    setIsSubmitting(false);
    setDownloadSuccess(true);

    // 2. Confetti celebration
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
    });

    // 3. Trigger immediate download of official PDF
    setTimeout(() => {
      triggerPdfDownload();
    }, 500);
  };

  const handlePrint = () => {
    if (!isUnlocked) {
      alert("Please enter your email address to unlock and print the resume.");
      return;
    }
    window.print();
  };

  return (
    <div
      style={{ zIndex: 10000 }}
      className="fixed inset-0 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsResumeOpen(false);
      }}
    >
      {/* Modal Container */}
      <div className="w-full max-w-4xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-6 flex flex-col max-h-[92dvh] text-slate-900 dark:text-[#f8fafc]">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="print:hidden bg-slate-50 dark:bg-[#080d1a] p-4 sm:p-5 border-b border-slate-200 dark:border-white/[0.08] flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0284c7]/10 dark:bg-[#0284c7]/15 border border-[#0284c7]/20 dark:border-[#38bdf8]/30 flex items-center justify-center text-[#0284c7] dark:text-[#38bdf8]">
              {isUnlocked ? <Unlock className="w-5 h-5 text-[#059669] dark:text-[#34d399]" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                  Sani Rathod — Official Résumé
                </h2>
                {isUnlocked && (
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#059669] dark:text-[#34d399] bg-emerald-50 dark:bg-[#10b981]/15 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-[#10b981]/30">
                    Unlocked ✓
                  </span>
                )}
              </div>
              <p className="text-slate-500 dark:text-[#94a3b8] text-xs">
                ATS Format • 1-2 Pages • sanirathod8975@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {isUnlocked && (
              <>
                <a
                  href="/Sani_Rathod_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0f172a] hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white transition-all hidden sm:inline-flex items-center gap-1.5 shadow-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open PDF in Tab</span>
                </a>

                <button
                  onClick={handlePrint}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0f172a] hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white transition-all hidden sm:inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>

                <button
                  onClick={triggerPdfDownload}
                  className="sr-btn-primary !py-2 !px-4 !text-xs !rounded-xl"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </>
            )}

            <button
              onClick={() => setIsResumeOpen(false)}
              className="text-slate-400 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-white p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6">
          
          {/* Email Verification / Gating Card */}
          {!isUnlocked ? (
            <div className="print:hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-[#080d1a] dark:via-[#0f172a] dark:to-[#080d1a] border-2 border-[#0284c7]/30 dark:border-[#38bdf8]/30 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0284c7]/10 dark:bg-[#0284c7]/20 border border-[#0284c7]/20 dark:border-[#38bdf8]/30 flex items-center justify-center text-[#0284c7] dark:text-[#38bdf8] flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-block text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#0284c7]/10 dark:bg-[#0284c7]/20 text-[#0284c7] dark:text-[#38bdf8] border border-[#0284c7]/20 dark:border-[#38bdf8]/30">
                      Recruiter Verification Gate
                    </span>
                  </div>
                  <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    Enter your email to view &amp; download résumé
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94a3b8] leading-relaxed">
                    Please provide your email address to unlock full visibility and download Sani's official ATS-standard PDF résumé. This allows Sani to track inquiries and follow up with recruiters.
                  </p>
                </div>
              </div>

              <form onSubmit={handleUnlockAndDownload} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-700 dark:text-[#94a3b8] uppercase tracking-wider flex items-center gap-1 font-bold">
                      <Mail className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#38bdf8]" /> Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={visitorEmail}
                      onChange={(e) => setVisitorEmail(e.target.value)}
                      placeholder="recruiter@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#080d1a] border border-slate-300 dark:border-white/[0.12] text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-[#0284c7] dark:focus:border-[#38bdf8] shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-700 dark:text-[#94a3b8] uppercase tracking-wider flex items-center gap-1 font-bold">
                      <User className="w-3.5 h-3.5 text-[#059669] dark:text-[#34d399]" /> Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      placeholder="Alex Morgan (Hiring Manager)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#080d1a] border border-slate-300 dark:border-white/[0.12] text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-[#0284c7] dark:focus:border-[#38bdf8] shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-slate-700 dark:text-[#94a3b8] uppercase tracking-wider flex items-center gap-1 font-bold">
                      <Building className="w-3.5 h-3.5 text-[#4f46e5] dark:text-[#818cf8]" /> Company / Agency
                    </label>
                    <input
                      type="text"
                      value={visitorCompany}
                      onChange={(e) => setVisitorCompany(e.target.value)}
                      placeholder="Amazon / Google / Startup"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#080d1a] border border-slate-300 dark:border-white/[0.12] text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-[#0284c7] dark:focus:border-[#38bdf8] shadow-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-white/[0.08]">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-[#64748b]">
                    <Lock className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                    <span>Instant access granted upon submission</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="sr-btn-primary !text-xs !py-3 !px-7 !rounded-xl w-full sm:w-auto justify-center"
                  >
                    <Unlock className="w-4 h-4" />
                    <span>{isSubmitting ? "Verifying & Unlocking..." : "Unlock & Download Résumé PDF ↓"}</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Unlocked Banner with Quick Action Bar */
            <div className="print:hidden p-4 rounded-xl bg-emerald-50 dark:bg-[#10b981]/10 border border-emerald-200 dark:border-[#10b981]/30 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3 text-xs text-[#059669] dark:text-[#34d399]">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>
                  <strong>Résumé Unlocked!</strong> Notification dispatched for <strong>{visitorEmail}</strong>.
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={triggerPdfDownload}
                  className="sr-btn-primary !text-xs !py-2 !px-4 !rounded-lg w-full sm:w-auto justify-center"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Sani_Rathod_Resume.pdf</span>
                </button>
              </div>
            </div>
          )}

          {/* MNC ATS Acceptable Resume Document Preview (Locked / Blurred if not verified) */}
          <div className="relative">
            {!isUnlocked && (
              <div className="absolute inset-0 z-20 backdrop-blur-[6px] bg-slate-900/40 dark:bg-slate-950/60 rounded-xl flex flex-col items-center justify-center p-6 text-center select-none">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-[#0f172a] shadow-2xl border border-slate-200 dark:border-white/[0.1] flex items-center justify-center text-[#0284c7] dark:text-[#38bdf8] mb-4 animate-bounce">
                  <Lock className="w-8 h-8" />
                </div>
                <h4 className="font-sans text-xl font-extrabold text-white mb-1 shadow-sm">
                  Résumé Preview Locked
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 max-w-md mb-4 leading-relaxed">
                  Enter your email above to unblur and view the full interactive ATS résumé and download the official PDF file.
                </p>
              </div>
            )}

            <div className={`p-8 sm:p-10 bg-white text-slate-900 rounded-xl shadow-lg font-sans leading-tight print:p-0 print:shadow-none print:rounded-none transition-all ${
              !isUnlocked ? "filter blur-[4px] pointer-events-none select-none opacity-40" : "opacity-100"
            }`}>
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
                  <p><strong>Cloud &amp; DevOps:</strong> AWS App Runner, Docker, Git / GitHub, Postman API</p>
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
                      <li>Engineered Next.js 16 App Router &amp; pure-function TypeScript payroll engine for client sites (Saint Gobain, Dana, United Breweries).</li>
                      <li>Architected Supabase &amp; PostgreSQL schemas for immutable wage ledgers, PTAX slabs, PF base, and OT calculations.</li>
                      <li>Developed automated Excel attendance sheet parser, leave encashment calculations, and Full &amp; Final (F&amp;F) settlements.</li>
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
                      Project: IMSG Proprietary Banking Property Sourcing &amp; Appraisal Platform.
                    </p>
                    <ul className="list-disc list-outside pl-4 space-y-0.5 text-[10px] text-slate-800">
                      <li>Built secure Java &amp; Spring Boot RESTful APIs with Spring Security role-based access control for banking operations.</li>
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
                  Education &amp; Academic Background
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
    </div>
  );
}

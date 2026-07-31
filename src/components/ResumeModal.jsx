import React, { useState } from 'react';
import { X, Download, Briefcase, GraduationCap, Code, Mail, Phone, MapPin, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';

export default function ResumeModal() {
  const { isResumeOpen, setIsResumeOpen, experiences, projects } = useTheme();
  const [activeTab, setActiveTab] = useState('all');

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
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Sani Rathod — Resume / Curriculum Vitae
            </h2>
            <p className="text-slate-400 text-sm mt-1">Software Developer @ Varnilix Pvt Ltd (Next.js 16 | TypeScript | PostgreSQL | Java)</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-lg shadow-emerald-500/25"
            >
              <Download className="w-4 h-4" />
              <span>Download / Print CV</span>
            </button>
            <button
              onClick={() => setIsResumeOpen(false)}
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-3 flex space-x-2 overflow-x-auto text-sm">
          {['all', 'experience', 'projects', 'education', 'skills'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-xl capitalize font-medium transition-all ${
                activeTab === tab
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Resume Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-slate-800 dark:text-slate-200 font-sans">
          {/* Header Contact Pill */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-emerald-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-emerald-100 dark:border-slate-700">
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="truncate">sanirathod8975@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>+91 8975223625</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-purple-500 flex-shrink-0" />
              <span>Hinjewadi Phase 1, Pune, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div>
              <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2 border-b pb-2 border-slate-200 dark:border-slate-800">
                <Award className="w-5 h-5" /> Professional Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                Software Developer currently working at <strong className="text-slate-900 dark:text-white">Varnilix Pvt Ltd</strong> (Hinjewadi Phase 1, Pune) building the <strong className="text-emerald-600 dark:text-emerald-400">UWMS (Unified Wage Management System)</strong>. Hands-on expertise in Next.js 16, TypeScript, PostgreSQL, Supabase, Java, Spring Boot, and RESTful APIs. Experienced in engineering multi-project contractual payroll calculation engines, leave management, bank property sourcing apps, and payment gateways.
              </p>
            </div>
          )}

          {/* Work Experience */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div>
              <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2 border-b pb-2 border-slate-200 dark:border-slate-800">
                <Briefcase className="w-5 h-5" /> Work Experience
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-emerald-500">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500"></div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-bold text-base text-slate-900 dark:text-white">{exp.title}</h4>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">{exp.company} | {exp.location}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{exp.description}</p>

                    {exp.achievements && (
                      <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx}>{ach}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Featured Projects */}
          {(activeTab === 'all' || activeTab === 'projects') && (
            <div>
              <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2 border-b pb-2 border-slate-200 dark:border-slate-800">
                <Code className="w-5 h-5" /> Key Engineering Projects
              </h3>

              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{proj.title}</h4>
                      <span className="text-xs text-emerald-500 font-semibold">{proj.organization}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{proj.description}</p>
                    {proj.tech && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {proj.tech.map((t, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-[10px] rounded font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div>
              <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2 border-b pb-2 border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-5 h-5" /> Education
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-semibold text-blue-500">2020 – 2024</div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-1">B.E in Computer Engineering</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Jagadambha College of Engg, Yavatmal</p>
                  <div className="mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">CGPA: 7.64 / 10.0</div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-semibold text-purple-500">2018 – 2019</div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-1">HSC (Higher Secondary)</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Atahar Mirza Jr College, Kali (DK)</p>
                  <div className="mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">Percentage: 71.08%</div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-semibold text-amber-500">2016 – 2017</div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-1">SSC (Secondary School)</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Vasantrao Naik School, Kali (DK)</p>
                  <div className="mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">Percentage: 80.00%</div>
                </div>
              </div>
            </div>
          )}

          {/* Technical Skills */}
          {(activeTab === 'all' || activeTab === 'skills') && (
            <div>
              <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-2 border-b pb-2 border-slate-200 dark:border-slate-800">
                <Code className="w-5 h-5" /> Technical Skills
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Frontend & Full Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js 16', 'TypeScript', 'React.js', 'Tailwind CSS', 'Bootstrap', 'FlutterFlow', 'HTML5 / CSS3'].map(skill => (
                      <span key={skill} className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs rounded-md font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Backend & Database:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL', 'Supabase', 'Core JAVA', 'Spring Boot', 'Spring Security', 'RESTful APIs', 'MySQL'].map(skill => (
                      <span key={skill} className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-md font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

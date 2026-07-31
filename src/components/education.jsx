import React from "react";
import { GraduationCap, MapPin, Calendar, Award, CheckCircle } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "B.E (Computer Engineering)",
      scoreLabel: "CGPA",
      score: "7.64 / 10.0",
      institution: "Jagadambha College Of Engineering and Technology",
      duration: "2020 – 2024",
      location: "Yavatmal, Maharashtra, India",
      gradient: "from-blue-500 to-indigo-500",
      badge: "Graduated",
      highlights: [
        "Core Computer Science curriculum: Data Structures, Algorithms, DBMS, OOP in Java, Web Engineering.",
        "Engineered major final year software project with distinction.",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      scoreLabel: "Percentage",
      score: "71.08%",
      institution: "Atahar Mirza Jr College Kali (DK)",
      duration: "2018 – 2019",
      location: "Kali (DK), Maharashtra, India",
      gradient: "from-purple-500 to-indigo-500",
      badge: "Completed",
      highlights: ["Focus on Science stream, Higher Mathematics, Physics, and Chemistry."],
    },
    {
      degree: "Secondary School Certificate (SSC)",
      scoreLabel: "Percentage",
      score: "80.00%",
      institution: "Vasantrao Naik School Kali (DK)",
      duration: "2016 – 2017",
      location: "Kali (DK), Maharashtra, India",
      gradient: "from-emerald-500 to-teal-500",
      badge: "Completed",
      highlights: ["Distinction in Mathematics and Science fundamentals."],
    },
  ];

  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-900 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Qualifications</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${edu.gradient} text-white shadow-md`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 rounded-full">
                    {edu.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{edu.degree}</h3>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-2">{edu.institution}</p>

                {/* Score Pill */}
                <div className="mt-4 p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold">{edu.scoreLabel}</span>
                  <span className="text-base font-extrabold text-blue-600 dark:text-blue-400">{edu.score}</span>
                </div>

                <div className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" /> {edu.duration}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-purple-500" /> {edu.location.split(',')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

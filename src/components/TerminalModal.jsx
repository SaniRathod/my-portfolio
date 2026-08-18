import React, { useState, useEffect, useRef } from "react";
import { X, Terminal as TerminalIcon, Sparkles, CornerDownLeft, Maximize2, Minus } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import confetti from "canvas-confetti";

export default function TerminalModal() {
  const { isTerminalOpen, setIsTerminalOpen, toggleTheme, toggleResume, siteSettings } = useTheme();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "banner",
      content: `Welcome to Sani Rathod Interactive CLI v2.0.0. Type "help" for commands.\n➜ ~`,
    },
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isTerminalOpen) {
      inputRef.current?.focus();
    }
  }, [isTerminalOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isTerminalOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: "command", content: cmd }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          content: `Available Commands:
  • help        : List all interactive terminal commands
  • about       : Display developer background & current role at Varnilix
  • skills      : List technical skills (Next.js 16, TS, Postgres, Java)
  • experience  : View work experience timeline
  • projects    : View featured projects (UWMS, IMSG, PayPal)
  • education   : Academic qualifications & CGPA
  • contact     : Get email, phone, and social links
  • theme       : Toggle dark/light theme dynamically
  • resume      : Open printable resume modal
  • varnilix    : View UWMS project breakdown at Varnilix Pvt Ltd
  • matrix      : Trigger matrix code mode
  • date        : Current date & time
  • whoami      : System user identity
  • sudo hire   : Recruiter priority action 🎉
  • clear       : Clear terminal screen`,
        });
        break;

      case "about":
        newHistory.push({
          type: "output",
          content: `Developer: Sani Rathod
Role     : Software Developer @ Varnilix Pvt Ltd
Location : Hinjewadi Phase 1, Pune, Maharashtra, India
Focus    : Next.js 16, TypeScript, PostgreSQL DB, Supabase, Java Spring Boot
Bio      : Specializing in enterprise payroll engines, banking property apps, and high-performance Web applications.`,
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          content: `⚡ Technical Skills Matrix:
  [Frontend] : Next.js 16 (92%), TypeScript (90%), React.js (90%), Tailwind CSS (95%), FlutterFlow (75%)
  [Backend]  : Core JAVA (92%), Spring Boot (88%), Spring Security (82%), RESTful APIs (92%)
  [Database] : PostgreSQL (90%), Supabase (88%), MySQL (88%), MS SQL Server (85%)
  [Tools]    : Git/GitHub (90%), AWS App Runner (80%), Postman (90%), Jira (88%)`,
        });
        break;

      case "experience":
        newHistory.push({
          type: "output",
          content: `🏢 Work Experience:
  1. Software Developer @ Varnilix Pvt Ltd (Hinjewadi Phase 1, Pune) [May 2026 - Present]
     -> UWMS Multi-Project Payroll Engine (Next.js 16, TypeScript, Supabase, Postgres)
  2. Jr Software Developer @ The Data Tech Labs (Pune) [Oct 2024 - May 2026]
     -> IMSG Property Sourcing Banking App (Java, Spring Boot, React)
  3. Software Developer Intern @ HulkHire Tech [Sep 2024 - Oct 2024]
     -> PayPal Checkout Gateway Integration System`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          content: `🚀 Featured Projects:
  1. UWMS — Unified Wage Management System (Varnilix Pvt Ltd)
  2. IMSG Bank Property Sourcing Application (The Data Tech Labs)
  3. KPI Real-Time Analytics Dashboard (React & Redux)
  4. PayPal Checkout Integration Gateway (Java & Spring Boot)`,
        });
        break;

      case "education":
        newHistory.push({
          type: "output",
          content: `🎓 Academic Qualifications:
  • B.E (Computer Engineering) - Jagadambha College of Engineering (CGPA: 7.64 / 10.0) [2020-2024]
  • HSC (Science) - Atahar Mirza Jr College (71.08%) [2018-2019]
  • SSC - Vasantrao Naik School (80.00%) [2016-2017]`,
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          content: `📧 Contact Channels:
  • Email   : sanirathod8975@gmail.com
  • Phone   : +91 8975223625
  • Location: Hinjewadi Phase 1, Pune, India
  • LinkedIn: https://in.linkedin.com/in/sani-rathod
  • GitHub  : https://github.com/SaniRathod`,
        });
        break;

      case "theme":
        toggleTheme();
        newHistory.push({
          type: "output",
          content: `🎨 Theme switched successfully!`,
        });
        break;

      case "resume":
        toggleResume();
        newHistory.push({
          type: "output",
          content: `📄 Opening Resume Modal...`,
        });
        break;

      case "varnilix":
        newHistory.push({
          type: "output",
          content: `🏢 Varnilix Pvt Ltd — UWMS Project Summary:
  Location : Hinjewadi Phase 1, Pune
  Project  : Unified Wage Management System (UWMS)
  Clients  : Saint Gobain, Dana, United Breweries, L&L Products, etc.
  Stack    : Next.js 16, TypeScript, Supabase, PostgreSQL DB, AWS App Runner
  Engine   : OT formulas, PF base, PTAX slabs, ESIC ceiling, LWP toggles, F&F settlements.`,
        });
        break;

      case "sudo hire":
        confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
        newHistory.push({
          type: "output",
          content: `🎉 ACCESS GRANTED!
Congratulations! You've triggered recruiter priority mode.
Sani Rathod is available for Full-time Software Roles & Enterprise Consultations!
Email: sanirathod8975@gmail.com | Phone: +91 8975223625`,
        });
        break;

      case "matrix":
        newHistory.push({
          type: "output",
          content: `01001001 01101110 01110100 01100101 01110010 01100001 01100011 01110100 01101001 01110110 01100101 00100000 01000011 01001100 01001001\n[SYSTEM] Welcome to the Matrix. Sani Rathod Developer Shell Active.`,
        });
        break;

      case "date":
        newHistory.push({
          type: "output",
          content: `📅 Current Local Time: ${new Date().toLocaleString()}`,
        });
        break;

      case "whoami":
        newHistory.push({
          type: "output",
          content: `guest@recruiter-workstation [Authorized Portfolio Visitor]`,
        });
        break;

      case "clear":
        setHistory([
          {
            type: "banner",
            content: `Welcome to Sani Rathod Interactive CLI v2.0.0. Type "help" for commands.\n➜ ~`,
          },
        ]);
        setInput("");
        return;

      default:
        newHistory.push({
          type: "output",
          content: `zsh: command not found: ${cmd}. Type "help" for a list of valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div style={{ zIndex: 10000 }} className="fixed inset-0 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm flex flex-col h-[550px] max-h-[92dvh]">
        
        {/* Terminal Header */}
        <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block cursor-pointer" onClick={() => setIsTerminalOpen(false)}></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            <span className="ml-2 text-slate-400 font-semibold text-xs flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              sani-rathod@developer-shell ~
            </span>
          </div>

          <div className="flex items-center space-x-2 text-slate-400">
            <button onClick={() => setIsTerminalOpen(false)} className="hover:text-white p-1">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          className="flex-1 p-5 overflow-y-auto space-y-3 bg-slate-950 text-slate-200"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => {
            if (item.type === "banner") {
              return (
                <div key={idx} className="text-emerald-400 font-semibold whitespace-pre-wrap leading-relaxed">
                  {item.content}
                </div>
              );
            }

            if (item.type === "command") {
              return (
                <div key={idx} className="flex items-center space-x-2 text-slate-200">
                  <span className="text-emerald-400 font-bold">sani-rathod@developer-shell ~ $</span>
                  <span className="text-white font-medium">{item.content}</span>
                </div>
              );
            }

            return (
              <div key={idx} className="text-slate-300 whitespace-pre-wrap pl-4 border-l-2 border-slate-800 leading-relaxed">
                {item.content}
              </div>
            );
          })}

          {/* Command Prompt Input */}
          <form onSubmit={handleCommand} className="flex items-center space-x-2 pt-2">
            <span className="text-emerald-400 font-bold flex-shrink-0">sani-rathod@developer-shell ~ $</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help' or 'sudo hire'..."
              className="flex-1 bg-transparent border-none text-white focus:outline-none focus:ring-0 font-mono text-xs sm:text-sm placeholder-slate-600"
            />
            <button type="submit" className="hidden">Send</button>
          </form>

          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer Quick Bar */}
        <div className="bg-slate-900/90 px-4 py-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center space-x-3">
            <span className="hover:text-emerald-400 cursor-pointer" onClick={() => setInput("help")}>help</span>
            <span className="hover:text-emerald-400 cursor-pointer" onClick={() => setInput("about")}>about</span>
            <span className="hover:text-emerald-400 cursor-pointer" onClick={() => setInput("skills")}>skills</span>
            <span className="hover:text-emerald-400 cursor-pointer" onClick={() => setInput("experience")}>experience</span>
            <span className="hover:text-emerald-400 cursor-pointer text-amber-400 font-bold" onClick={() => setInput("sudo hire")}>sudo hire</span>
          </div>
          <span>CLI Shell v2.0.0</span>
        </div>

      </div>
    </div>
  );
}

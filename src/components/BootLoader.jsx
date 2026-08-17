import React, { useState, useEffect } from "react";

export default function BootLoader() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem("sr-portfolio-booted");
    if (hasBooted) {
      setIsVisible(false);
      return;
    }

    const steps = [
      { delay: 100, step: 1 },
      { delay: 400, step: 2 },
      { delay: 750, step: 3 },
      { delay: 1100, step: 4 },
      { delay: 1450, step: 5 },
      { delay: 1800, step: 6 },
    ];

    steps.forEach(({ delay, step }) => {
      setTimeout(() => setStep(step), delay);
    });

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 7) + 4, 100);
        if (next >= 100) {
          clearInterval(progressInterval);
        }
        return next;
      });
    }, 40);

    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("sr-portfolio-booted", "true");
      }, 450);
    }, 2200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#06080f] flex flex-col items-center justify-center p-4 select-none transition-opacity duration-500 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Holographic Logo Badge */}
      <div className="relative mb-8 group">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#00e5ff] via-[#6366f1] to-[#a855f7] p-[1.5px] shadow-[0_0_40px_rgba(0,229,255,0.35)]">
          <div className="w-full h-full bg-[#06080f] rounded-2xl flex items-center justify-center font-bold text-2xl tracking-tighter text-white">
            SR<span className="text-[#00e5ff]">.</span>
          </div>
        </div>
      </div>

      {/* Cyber Boot Terminal */}
      <div className="w-full max-w-md bg-[#0c101c]/90 border border-white/10 rounded-2xl p-5 font-mono text-xs text-[#64748b] space-y-2.5 shadow-2xl backdrop-blur-xl">
        <div className="text-[#70f0ff] flex items-center gap-2">
          <span className="text-[#00e5ff] font-bold">➜</span>
          <span>booting sani_rathod_workspace [v2.6]</span>
        </div>

        {step >= 2 && (
          <div className="text-[#f1f5f9] flex items-center gap-2 animate-fade-in">
            <span className="text-[#10b981]">✓</span> Initializing Next.js 16 & TypeScript engine...
          </div>
        )}

        {step >= 3 && (
          <div className="text-[#f1f5f9] flex items-center gap-2 animate-fade-in">
            <span className="text-[#10b981]">✓</span> Mounting PostgreSQL schemas & Supabase ledgers...
          </div>
        )}

        {step >= 4 && (
          <div className="text-[#f1f5f9] flex items-center gap-2 animate-fade-in">
            <span className="text-[#10b981]">✓</span> Initializing Spring Boot & Java microservices...
          </div>
        )}

        {step >= 5 && (
          <div className="text-[#f59e0b] flex items-center gap-2 animate-fade-in">
            <span>⚡</span> AWS App Runner container nodes verified
          </div>
        )}

        {step >= 6 && (
          <div className="text-[#34d399] flex items-center gap-2 font-bold animate-fade-in">
            <span>✓</span> Workspace ready — launching UI!
          </div>
        )}
      </div>

      {/* Progress Line */}
      <div className="w-full max-w-md h-1.5 bg-white/5 rounded-full mt-4 overflow-hidden border border-white/10">
        <div
          className="h-full bg-gradient-to-r from-[#00e5ff] via-[#6366f1] to-[#a855f7] transition-all duration-75 ease-out shadow-[0_0_15px_rgba(0,229,255,0.6)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="w-full max-w-md flex justify-between items-center text-[10px] font-mono text-[#70f0ff] mt-2">
        <span>sys_status: operational</span>
        <span>{progress}%</span>
      </div>
    </div>
  );
}

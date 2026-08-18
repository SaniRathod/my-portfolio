import React, { useState, useEffect } from "react";

export default function BootLoader() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const handleDismiss = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("sr-portfolio-booted", "true");
    }, 300);
  };

  useEffect(() => {
    const hasBooted = sessionStorage.getItem("sr-portfolio-booted");
    if (hasBooted) {
      setIsVisible(false);
      return;
    }

    const steps = [
      { delay: 80, step: 1 },
      { delay: 350, step: 2 },
      { delay: 650, step: 3 },
      { delay: 950, step: 4 },
      { delay: 1250, step: 5 },
      { delay: 1550, step: 6 },
    ];

    steps.forEach(({ delay, step }) => {
      setTimeout(() => setStep(step), delay);
    });

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 8) + 6, 100);
        if (next >= 100) {
          clearInterval(progressInterval);
        }
        return next;
      });
    }, 35);

    const fadeTimeout = setTimeout(() => {
      handleDismiss();
    }, 1900);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#080d1a] flex flex-col items-center justify-center p-4 sm:p-6 select-none transition-opacity duration-300 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Skip Button for Instant Mobile Entry */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#94a3b8] hover:text-white text-xs font-mono transition-colors flex items-center gap-1 border border-white/[0.08]"
      >
        <span>Skip</span>
        <span>›</span>
      </button>

      <div className="w-full max-w-[420px] flex flex-col items-center">
        {/* Holographic Logo Badge */}
        <div className="relative mb-6 sm:mb-8 group">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#0284c7] via-[#2563eb] to-[#38bdf8] p-[1.5px] shadow-[0_0_35px_rgba(56,189,248,0.3)]">
            <div className="w-full h-full bg-[#080d1a] rounded-2xl flex items-center justify-center font-bold text-xl sm:text-2xl tracking-tight text-white">
              SR<span className="text-[#38bdf8]">.</span>
            </div>
          </div>
        </div>

        {/* Cyber Boot Terminal Box */}
        <div className="w-full bg-[#0f172a]/95 border border-white/[0.1] rounded-2xl p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-[#94a3b8] space-y-2 sm:space-y-2.5 shadow-2xl backdrop-blur-xl">
          <div className="text-[#38bdf8] flex items-center gap-2 font-bold">
            <span>➜</span>
            <span className="truncate">booting sani_workspace [v2.6]</span>
          </div>

          {step >= 2 && (
            <div className="text-slate-200 flex items-center gap-2 animate-fade-in text-[10px] sm:text-[11px] leading-tight">
              <span className="text-[#34d399] font-bold">✓</span>
              <span>Next.js 16 &amp; TypeScript engine loaded</span>
            </div>
          )}

          {step >= 3 && (
            <div className="text-slate-200 flex items-center gap-2 animate-fade-in text-[10px] sm:text-[11px] leading-tight">
              <span className="text-[#34d399] font-bold">✓</span>
              <span>PostgreSQL schemas &amp; Supabase connected</span>
            </div>
          )}

          {step >= 4 && (
            <div className="text-slate-200 flex items-center gap-2 animate-fade-in text-[10px] sm:text-[11px] leading-tight">
              <span className="text-[#34d399] font-bold">✓</span>
              <span>Java &amp; Spring Boot microservices initialized</span>
            </div>
          )}

          {step >= 5 && (
            <div className="text-[#38bdf8] flex items-center gap-2 animate-fade-in text-[10px] sm:text-[11px] leading-tight">
              <span>⚡</span>
              <span>AWS App Runner containers verified</span>
            </div>
          )}

          {step >= 6 && (
            <div className="text-[#34d399] flex items-center gap-2 font-bold animate-fade-in text-[10px] sm:text-[11px] leading-tight">
              <span>✓</span>
              <span>Workspace ready — launching portfolio!</span>
            </div>
          )}
        </div>

        {/* Progress Line */}
        <div className="w-full h-1.5 bg-[#0f172a] rounded-full mt-3 sm:mt-4 overflow-hidden border border-white/[0.08]">
          <div
            className="h-full bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#34d399] transition-all duration-75 ease-out shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="w-full flex justify-between items-center text-[10px] font-mono text-[#94a3b8] mt-2 px-1">
          <span>status: operational</span>
          <span className="text-[#38bdf8] font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

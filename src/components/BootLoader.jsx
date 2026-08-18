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
      try {
        sessionStorage.setItem("sr-portfolio-booted", "true");
      } catch (e) {}
    }, 250);
  };

  useEffect(() => {
    try {
      if (sessionStorage.getItem("sr-portfolio-booted")) {
        setIsVisible(false);
        return;
      }
    } catch (e) {}

    const steps = [
      { delay: 60, step: 1 },
      { delay: 250, step: 2 },
      { delay: 480, step: 3 },
      { delay: 720, step: 4 },
      { delay: 980, step: 5 },
      { delay: 1200, step: 6 },
    ];

    steps.forEach(({ delay, step }) => {
      setTimeout(() => setStep(step), delay);
    });

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.floor(Math.random() * 10) + 8, 100);
        if (next >= 100) {
          clearInterval(progressInterval);
        }
        return next;
      });
    }, 30);

    const fadeTimeout = setTimeout(() => {
      handleDismiss();
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{ zIndex: 99999 }}
      className={`fixed inset-0 w-full h-[100dvh] bg-[#080d1a] text-white flex flex-col items-center justify-center p-3.5 select-none transition-opacity duration-300 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Skip Button for Instant Mobile Entry */}
      <button
        onClick={handleDismiss}
        className="absolute top-3 right-3 sm:top-5 sm:right-5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-[#94a3b8] hover:text-white text-xs font-mono transition-colors flex items-center gap-1 border border-white/10"
      >
        <span>Skip</span>
        <span>›</span>
      </button>

      <div className="w-full max-w-[380px] flex flex-col items-center">
        {/* Holographic Logo Badge */}
        <div className="relative mb-5 group">
          <div className="w-13 h-13 sm:w-16 sm:h-16 p-3 rounded-2xl bg-gradient-to-tr from-[#0284c7] via-[#2563eb] to-[#38bdf8] shadow-[0_0_30px_rgba(56,189,248,0.35)] flex items-center justify-center">
            <div className="w-full h-full bg-[#080d1a] rounded-xl flex items-center justify-center font-black text-xl sm:text-2xl text-white tracking-tight">
              SR<span className="text-[#38bdf8]">.</span>
            </div>
          </div>
        </div>

        {/* Cyber Boot Terminal Box */}
        <div className="w-full bg-[#0f172a] border border-white/15 rounded-2xl p-3.5 sm:p-5 font-mono text-[11px] sm:text-xs text-[#94a3b8] space-y-2 shadow-2xl backdrop-blur-xl">
          <div className="text-[#38bdf8] flex items-center gap-1.5 font-bold">
            <span>➜</span>
            <span className="truncate">booting workspace [v2.6]</span>
          </div>

          {step >= 2 && (
            <div className="text-slate-200 flex items-center gap-1.5 text-[10px] sm:text-[11px] leading-tight">
              <span className="text-[#34d399] font-bold">✓</span>
              <span className="truncate">Next.js 16 &amp; TypeScript engine loaded</span>
            </div>
          )}

          {step >= 3 && (
            <div className="text-slate-200 flex items-center gap-1.5 text-[10px] sm:text-[11px] leading-tight">
              <span className="text-[#34d399] font-bold">✓</span>
              <span className="truncate">PostgreSQL schemas &amp; Supabase connected</span>
            </div>
          )}

          {step >= 4 && (
            <div className="text-slate-200 flex items-center gap-1.5 text-[10px] sm:text-[11px] leading-tight">
              <span className="text-[#34d399] font-bold">✓</span>
              <span className="truncate">Java &amp; Spring Boot microservices ready</span>
            </div>
          )}

          {step >= 5 && (
            <div className="text-[#38bdf8] flex items-center gap-1.5 text-[10px] sm:text-[11px] leading-tight">
              <span>⚡</span>
              <span className="truncate">AWS App Runner containers active</span>
            </div>
          )}

          {step >= 6 && (
            <div className="text-[#34d399] flex items-center gap-1.5 font-bold text-[10px] sm:text-[11px] leading-tight">
              <span>✓</span>
              <span className="truncate">Workspace ready — launching portfolio!</span>
            </div>
          )}
        </div>

        {/* Progress Line */}
        <div className="w-full h-1.5 bg-[#0f172a] rounded-full mt-3 overflow-hidden border border-white/10">
          <div
            className="h-full bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#34d399] transition-all duration-75 ease-out shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="w-full flex justify-between items-center text-[10px] font-mono text-[#94a3b8] mt-2 px-1">
          <span>sys_status: ready</span>
          <span className="text-[#38bdf8] font-bold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

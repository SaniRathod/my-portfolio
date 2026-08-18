import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Copy, Check, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { LinkedinIcon } from "./SocialIcons";
import { useTheme } from "../context/ThemeContext";
import confetti from "canvas-confetti";

export default function Contact() {
  const { toggleResume, addContactMessage } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("sanirathod8975@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("+918975223625");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🛡️ Anti-Bot Honeypot Security Check: Silently discard if bot filled hidden trap field
    if (honeypot && honeypot.trim() !== "") {
      console.warn("Spam bot trapped by honeypot security filter.");
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setHoneypot("");
      }, 500);
      return;
    }

    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const msgPayload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "Portfolio Inquiry",
      message: formData.message,
      created_at: new Date().toISOString(),
    };

    // Send via FormSubmit directly to sanirathod8975@gmail.com with honeypot security flag
    try {
      fetch("https://formsubmit.co/ajax/sanirathod8975@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[Portfolio Contact] New Message from ${formData.name}`,
          _honey: honeypot,
          _captcha: "false",
          ...msgPayload,
        }),
      }).catch(() => {});
    } catch {}

    // Save in context & Supabase
    addContactMessage(msgPayload);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setHoneypot("");
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-b border-slate-200/80 dark:border-white/[0.06] relative bg-slate-50/50 dark:bg-transparent overflow-hidden">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 mx-auto">
        
        {/* Section Header */}
        <p className="section-tag">07 — Direct Connection</p>
        <h2 className="section-heading">Let's build something<br />extraordinary together</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
          
          {/* Left Column: Direct Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <p className="text-slate-600 dark:text-[#cbd5e1] text-base leading-relaxed max-w-lg">
              Open to high-impact software engineering roles, full-stack architectures, Next.js / TypeScript engineering, and Java backend microservices.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#059669] dark:text-[#34d399] bg-emerald-50 dark:bg-[#10b981]/15 border border-emerald-200 dark:border-[#10b981]/30 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              <span>Available for high-impact roles &amp; projects</span>
            </div>

            <div className="space-y-3 pt-2">
              {/* Email Link */}
              <a
                href="mailto:sanirathod8975@gmail.com"
                onClick={handleCopyEmail}
                className="sr-card p-4 flex items-center justify-between group bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/[0.08] hover:border-[#0284c7]/40 dark:hover:border-[#38bdf8]/40 shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0284c7]/10 dark:bg-[#0284c7]/15 border border-[#0284c7]/20 dark:border-[#38bdf8]/25 text-[#0284c7] dark:text-[#38bdf8] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-500 dark:text-[#64748b] uppercase tracking-wider font-semibold">
                      {copiedEmail ? "Copied to clipboard ✓" : "Email — click to copy"}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      sanirathod8975@gmail.com
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#0284c7] dark:text-[#38bdf8] group-hover:translate-x-1 transition-transform">
                  {copiedEmail ? <Check className="w-4 h-4 text-[#059669] dark:text-[#34d399]" /> : <Copy className="w-4 h-4 text-slate-400 dark:text-[#64748b]" />}
                </span>
              </a>

              {/* Phone Link */}
              <a
                href="tel:+918975223625"
                onClick={handleCopyPhone}
                className="sr-card p-4 flex items-center justify-between group bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/[0.08] hover:border-[#059669]/40 dark:hover:border-[#34d399]/40 shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-[#10b981]/15 border border-emerald-200 dark:border-[#10b981]/25 text-[#059669] dark:text-[#34d399] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-500 dark:text-[#64748b] uppercase tracking-wider font-semibold">
                      {copiedPhone ? "Copied to clipboard ✓" : "Phone — click to copy"}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      +91 8975223625
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#059669] dark:text-[#34d399] group-hover:translate-x-1 transition-transform">
                  {copiedPhone ? <Check className="w-4 h-4 text-[#059669] dark:text-[#34d399]" /> : <Copy className="w-4 h-4 text-slate-400 dark:text-[#64748b]" />}
                </span>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://in.linkedin.com/in/sani-rathod"
                target="_blank"
                rel="noreferrer"
                className="sr-card p-4 flex items-center justify-between group bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/[0.08] hover:border-[#4f46e5]/40 dark:hover:border-[#818cf8]/40 shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-[#6366f1]/15 border border-indigo-200 dark:border-[#6366f1]/25 text-[#4f46e5] dark:text-[#818cf8] flex items-center justify-center">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-500 dark:text-[#64748b] uppercase tracking-wider font-semibold">
                      LinkedIn
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                      linkedin.com/in/sani-rathod
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-[#64748b] group-hover:text-[#4f46e5] dark:group-hover:text-[#818cf8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Location */}
              <div className="sr-card p-4 flex items-center gap-3.5 cursor-default bg-white dark:bg-[#0f172a] border-slate-200 dark:border-white/[0.08] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] text-slate-500 dark:text-[#64748b] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-slate-500 dark:text-[#64748b] uppercase tracking-wider font-semibold">Location</span>
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    Hinjewadi Phase 1, Pune, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: CTA Box & Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="sr-card p-7 sm:p-9 bg-white dark:bg-gradient-to-br dark:from-[#0284c7]/[0.08] dark:via-[#0f172a] dark:to-[#080d1a] border-slate-200 dark:border-[#38bdf8]/30 space-y-6 shadow-xl"
          >
            <div className="text-center sm:text-left space-y-1">
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Connect directly</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94a3b8]">
                Download official ATS résumé or submit an inquiry. I reply within 24 hours.
              </p>
            </div>

            {/* Direct Résumé Download CTA Banner */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
              <div>
                <strong className="block text-xs text-slate-900 dark:text-white font-bold">Official Résumé (ATS Standard)</strong>
                <span className="text-[11px] text-slate-500 dark:text-[#64748b]">1-2 Pages • Optimized Format • PDF</span>
              </div>
              <button
                onClick={toggleResume}
                className="sr-btn-primary !text-xs !py-2 !px-4 whitespace-nowrap w-full sm:w-auto justify-center"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Résumé (PDF) ↓</span>
              </button>
            </div>

            {isSent ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-[#10b981]/10 border border-emerald-200 dark:border-[#10b981]/30 text-center space-y-2">
                <Sparkles className="w-6 h-6 text-[#059669] dark:text-[#34d399] mx-auto" />
                <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">Message Sent to Sani!</h4>
                <p className="text-xs text-slate-600 dark:text-[#94a3b8]">
                  Thank you for reaching out. I'll get back to you promptly at your email.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="sr-btn-ghost !text-xs !py-1.5 !px-3 mt-2"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 relative">
                {/* 🛡️ Anti-Bot Honeypot Security Trap (Invisible to humans, catches automated spam bots) */}
                <div
                  aria-hidden="true"
                  style={{
                    opacity: 0,
                    position: "absolute",
                    top: "-9999px",
                    left: "-9999px",
                    height: 0,
                    width: 0,
                    zIndex: -1,
                    pointerEvents: "none",
                  }}
                >
                  <label htmlFor="website_url_hp">Leave this field blank:</label>
                  <input
                    type="text"
                    id="website_url_hp"
                    name="website_url_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 dark:text-[#64748b] uppercase tracking-wider mb-1 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-[#0284c7] dark:focus:border-[#38bdf8]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-600 dark:text-[#64748b] uppercase tracking-wider mb-1 font-semibold">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-[#0284c7] dark:focus:border-[#38bdf8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-600 dark:text-[#64748b] uppercase tracking-wider mb-1 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Discussion"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-[#0284c7] dark:focus:border-[#38bdf8]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-600 dark:text-[#64748b] uppercase tracking-wider mb-1 font-semibold">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Sani, I'd like to discuss an opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#080d1a] border border-slate-200 dark:border-white/[0.08] text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-[#0284c7] dark:focus:border-[#38bdf8]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="sr-btn-primary w-full justify-center !py-3 !text-xs !rounded-xl"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Sending..." : "Send Direct Message"}</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

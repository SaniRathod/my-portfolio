import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Copy, Check, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { useTheme } from "../context/ThemeContext";
import confetti from "canvas-confetti";

export default function Contact() {
  const { toggleResume, addContactMessage } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
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
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    const msgPayload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "Portfolio Inquiry",
      message: formData.message,
      created_at: new Date().toISOString(),
    };

    // Send via FormSubmit directly to sanirathod8975@gmail.com
    try {
      fetch("https://formsubmit.co/ajax/sanirathod8975@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[Portfolio Contact] New Message from ${formData.name}`,
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
    }, 600);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/[0.04] relative">
      <div className="w-[min(1200px,calc(100%-40px))] mx-auto">
        
        {/* Section Header */}
        <p className="section-tag">08 — Direct Connection</p>
        <h2 className="section-heading">Let's build something<br />extraordinary together</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
          
          {/* Left Column: Direct Contact Links */}
          <div className="space-y-6">
            <p className="text-[#94a3b8] text-base leading-relaxed max-w-lg">
              Open to software engineering opportunities, full-stack architectures, Next.js / TypeScript engineering, and Java backend microservices.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/25 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-pulse"></span>
              <span>Available for high-impact roles &amp; projects</span>
            </div>

            <div className="space-y-3 pt-2">
              {/* Email Link */}
              <a
                href="mailto:sanirathod8975@gmail.com"
                onClick={handleCopyEmail}
                className="sr-card p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/25 text-[#00e5ff] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-[#64748b] uppercase tracking-wider">
                      {copiedEmail ? "Copied to clipboard ✓" : "Email — click to copy"}
                    </span>
                    <span className="font-semibold text-[#f1f5f9] text-xs sm:text-sm">
                      sanirathod8975@gmail.com
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#00e5ff] group-hover:translate-x-1 transition-transform">
                  {copiedEmail ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4 text-[#64748b]" />}
                </span>
              </a>

              {/* Phone Link */}
              <a
                href="tel:+918975223625"
                onClick={handleCopyPhone}
                className="sr-card p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/25 text-[#10b981] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-[#64748b] uppercase tracking-wider">
                      {copiedPhone ? "Copied to clipboard ✓" : "Phone — click to copy"}
                    </span>
                    <span className="font-semibold text-[#f1f5f9] text-xs sm:text-sm">
                      +91 8975223625
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#10b981] group-hover:translate-x-1 transition-transform">
                  {copiedPhone ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4 text-[#64748b]" />}
                </span>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://in.linkedin.com/in/sani-rathod"
                target="_blank"
                rel="noreferrer"
                className="sr-card p-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/25 text-[#6366f1] flex items-center justify-center">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-[#64748b] uppercase tracking-wider">
                      LinkedIn
                    </span>
                    <span className="font-semibold text-[#f1f5f9] text-xs sm:text-sm">
                      linkedin.com/in/sani-rathod
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#64748b] group-hover:text-[#6366f1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Location */}
              <div className="sr-card p-4 flex items-center gap-3.5 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-[#64748b] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-[#64748b] uppercase tracking-wider">Location</span>
                  <span className="font-semibold text-[#f1f5f9] text-xs sm:text-sm">
                    Hinjewadi Phase 1, Pune, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: CTA Box & Form */}
          <div className="sr-card p-7 sm:p-9 bg-gradient-to-br from-[#00e5ff]/[0.08] via-[#0c101c] to-[#06080f] border-[#00e5ff]/30 space-y-6 shadow-2xl">
            <div className="text-center sm:text-left space-y-1">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#f1f5f9]">Connect directly</h3>
              <p className="text-xs sm:text-sm text-[#94a3b8]">
                Download official résumé or submit an inquiry. I reply within 24 hours.
              </p>
            </div>

            {/* Direct Résumé Download CTA Banner */}
            <div className="p-4 rounded-xl bg-[#06080f]/90 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <strong className="block text-xs text-[#f1f5f9]">Official Résumé (ATS Standard)</strong>
                <span className="text-[11px] text-[#64748b]">1-2 Pages • Optimized Format • PDF</span>
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
              <div className="p-6 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 text-center space-y-2">
                <Sparkles className="w-6 h-6 text-[#10b981] mx-auto" />
                <h4 className="font-bold text-[#f1f5f9] text-sm">Message Sent to Sani!</h4>
                <p className="text-xs text-[#94a3b8]">
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
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-[#64748b] uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-xs text-[#f1f5f9] font-mono focus:outline-none focus:border-[#00e5ff]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#64748b] uppercase tracking-wider mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-xs text-[#f1f5f9] font-mono focus:outline-none focus:border-[#00e5ff]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#64748b] uppercase tracking-wider mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Discussion"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-xs text-[#f1f5f9] font-mono focus:outline-none focus:border-[#00e5ff]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#64748b] uppercase tracking-wider mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Sani, I'd like to discuss an opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-xs text-[#f1f5f9] font-mono focus:outline-none focus:border-[#00e5ff]"
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
          </div>

        </div>

      </div>
    </section>
  );
}

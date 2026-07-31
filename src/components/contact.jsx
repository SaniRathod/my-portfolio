import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, Calendar } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Address",
      value: "sanirathod8975@gmail.com",
      href: "mailto:sanirathod8975@gmail.com",
      color: "text-red-500 bg-red-50 dark:bg-red-950/60",
      copyable: true,
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "+91 8975223625",
      href: "tel:+918975223625",
      color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60",
      copyable: true,
    },
    {
      icon: MapPin,
      label: "Current Location",
      value: "Pune, Maharashtra, India",
      href: "#",
      color: "text-purple-500 bg-purple-50 dark:bg-purple-950/60",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn Profile",
      value: "in/sani-rathod",
      href: "https://in.linkedin.com/in/sani-rathod",
      color: "text-blue-500 bg-blue-50 dark:bg-blue-950/60",
    },
    {
      icon: GithubIcon,
      label: "GitHub Profile",
      value: "SaniRathod",
      href: "https://github.com/SaniRathod",
      color: "text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800",
    },
  ];

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/60 px-3.5 py-1.5 rounded-full mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">Extraordinary</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
            Whether you have a job opportunity, project inquiry, or technical question — feel free to drop a message!
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Copies */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Direct Contact Channels</h3>

              {contactInfo.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between group transition-all"
                  >
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="flex items-center space-x-3 truncate"
                    >
                      <div className={`p-3 rounded-xl ${item.color}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="truncate">
                        <p className="text-[11px] text-slate-400 font-semibold uppercase">{item.label}</p>
                        <p className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm truncate">
                          {item.value}
                        </p>
                      </div>
                    </a>

                    {item.copyable && (
                      <button
                        onClick={() => handleCopy(item.value, item.label)}
                        title="Copy to clipboard"
                        className="p-2 text-slate-400 hover:text-blue-500 hover:bg-white dark:hover:bg-slate-900 rounded-lg transition-colors"
                      >
                        {copiedField === item.label ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs mb-6">
                Fill out the quick form below and I will respond to your email promptly.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 rounded-2xl text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Thank you for reaching out. I will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Role / Collaboration / Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sani, I'd like to discuss an opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs font-medium focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-blue-500/20 flex items-center justify-center space-x-2 transition-all hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Now</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

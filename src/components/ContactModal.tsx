"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormState = "idle" | "loading" | "success" | "error";

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function useFocusTrap(isOpen: boolean, ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (!isOpen || !ref.current) return;
    const elements = Array.from(ref.current.querySelectorAll<HTMLElement>(FOCUSABLE));
    const first = elements[0];
    const last = elements[elements.length - 1];
    first?.focus();
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { last?.focus(); e.preventDefault(); }
      } else {
        if (document.activeElement === last) { first?.focus(); e.preventDefault(); }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, ref]);
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", message: "", typeOfWork: "", honeypot: "",
  });

  useFocusTrap(isOpen, modalRef);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => triggerRef.current?.focus(), 50);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setFormState("idle");
      setFormData({ name: "", email: "", company: "", message: "", typeOfWork: "", honeypot: "" });
    }
  }, [isOpen]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormState(res.ok ? "success" : "error");
    } catch {
      setFormState("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/30 transition-colors duration-200";
  const labelClass = "block text-xs font-medium tracking-widest uppercase text-white/40 mb-2";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-white/[0.08]"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 id="modal-title" className="font-display text-white text-2xl leading-snug">
                    Contact Abe
                  </h2>
                  <p className="text-sm text-white/40 mt-1">
                    Send a quick note and I&rsquo;ll get back to you.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="ml-6 shrink-0 text-white/30 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {formState === "success" ? (
                <p className="text-base text-white/70 leading-relaxed py-6">
                  Thanks &mdash; your message has been sent. I&rsquo;ll get back to you shortly.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot */}
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
                  >
                    <input type="text" name="honeypot" tabIndex={-1} autoComplete="off"
                      value={formData.honeypot} onChange={handleChange} />
                  </div>

                  <div>
                    <label htmlFor="name" className={labelClass}>Name <span aria-hidden="true">*</span></label>
                    <input id="name" name="name" type="text" required autoComplete="name"
                      className={inputClass} value={formData.name} onChange={handleChange} />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>Email <span aria-hidden="true">*</span></label>
                    <input id="email" name="email" type="email" required autoComplete="email"
                      className={inputClass} value={formData.email} onChange={handleChange} />
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClass}>Company</label>
                    <input id="company" name="company" type="text" autoComplete="organization"
                      className={inputClass} value={formData.company} onChange={handleChange} />
                  </div>

                  <div>
                    <label htmlFor="typeOfWork" className={labelClass}>Type of Work</label>
                    <div className="relative">
                      <select id="typeOfWork" name="typeOfWork"
                        className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                        value={formData.typeOfWork} onChange={handleChange}
                        style={{ color: formData.typeOfWork ? "#fafafa" : "rgba(250,250,250,0.25)" }}
                      >
                        <option value="" style={{ background: "#111", color: "#fafafa" }}>Select&hellip;</option>
                        <option value="Strategy" style={{ background: "#111", color: "#fafafa" }}>Strategy</option>
                        <option value="Experience Design" style={{ background: "#111", color: "#fafafa" }}>Experience Design</option>
                        <option value="AI" style={{ background: "#111", color: "#fafafa" }}>AI</option>
                        <option value="Other" style={{ background: "#111", color: "#fafafa" }}>Other</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/30">▾</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      What do you need help with? <span aria-hidden="true">*</span>
                    </label>
                    <textarea id="message" name="message" required rows={4}
                      className={`${inputClass} resize-none`}
                      value={formData.message} onChange={handleChange} />
                  </div>

                  {formState === "error" && (
                    <p className="text-sm text-white/60 rounded-xl border border-white/10 bg-white/5 p-4">
                      Something went wrong. Please try again or email{" "}
                      <a href="mailto:abe@thinkermaker.com.au" className="text-white underline underline-offset-2">
                        abe@thinkermaker.com.au
                      </a>
                    </p>
                  )}

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="rounded-full bg-white text-black px-8 py-3 text-sm font-semibold transition-all duration-200 hover:bg-white/90 disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    >
                      {formState === "loading" ? "Sending…" : "Send"}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    >
                      Close
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

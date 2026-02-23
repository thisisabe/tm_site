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

    const container = ref.current;
    const elements = Array.from(
      container.querySelectorAll<HTMLElement>(FOCUSABLE)
    );
    const first = elements[0];
    const last = elements[elements.length - 1];

    first?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          last?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first?.focus();
          e.preventDefault();
        }
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
    name: "",
    email: "",
    company: "",
    message: "",
    typeOfWork: "",
    honeypot: "",
  });

  useFocusTrap(isOpen, modalRef);

  // Store trigger element and manage body scroll
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Return focus to trigger after modal closes
      setTimeout(() => triggerRef.current?.focus(), 50);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setFormState("idle");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        typeOfWork: "",
        honeypot: "",
      });
    }
  }, [isOpen]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
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
    "w-full border-2 border-black px-4 py-3 text-sm bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2";
  const labelClass = "block text-xs font-bold tracking-widest uppercase mb-2";

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
            className="absolute inset-0 bg-black/80"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            ref={modalRef}
            className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-8 md:p-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2
                    id="modal-title"
                    className="text-lg font-bold tracking-tight"
                  >
                    Contact Thinker Maker
                  </h2>
                  <p className="text-sm mt-1">
                    Send a quick note and I&rsquo;ll get back to you.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="ml-6 shrink-0 text-sm font-bold hover:opacity-50 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {formState === "success" ? (
                <p className="text-base leading-relaxed py-4">
                  Thanks &mdash; your message has been sent. I&rsquo;ll get back
                  to you shortly.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot – hidden from real users */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClass}
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClass}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className={inputClass}
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="typeOfWork" className={labelClass}>
                      Type of Work
                    </label>
                    <div className="relative">
                      <select
                        id="typeOfWork"
                        name="typeOfWork"
                        className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                        value={formData.typeOfWork}
                        onChange={handleChange}
                      >
                        <option value="">Select&hellip;</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Experience Design">Experience Design</option>
                        <option value="AI">AI</option>
                        <option value="Other">Other</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs">
                        ▾
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      What do you need help with? <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className={`${inputClass} resize-none`}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-sm border-2 border-black p-3">
                      Something went wrong. Please try again or email{" "}
                      <a
                        href="mailto:abe@thinkermaker.com.au"
                        className="underline underline-offset-2"
                      >
                        abe@thinkermaker.com.au
                      </a>
                    </p>
                  )}

                  <div className="flex gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="border-2 border-black bg-black text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-200 disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                    >
                      {formState === "loading" ? "Sending…" : "Send"}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="border-2 border-black px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
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

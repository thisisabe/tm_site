"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";

const serviceOptions = [
  { value: "", label: "Select one..." },
  { value: "boot-camp", label: "AI Boot Camp" },
  { value: "workflows", label: "AI Workflow Automation" },
  { value: "transformation", label: "AI Transformation" },
  { value: "not-sure", label: "Not sure yet \u2014 let\u2019s chat" },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      setFormState((prev) => ({ ...prev, service }));
    }
  }, [searchParams]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10 text-center">
        <h3 className="text-2xl font-medium mb-3">Thanks for reaching out</h3>
        <p className="text-text-body">
          We&rsquo;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-text-label font-sans mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-heading placeholder:text-text-muted focus:border-border-light focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-text-label font-sans mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formState.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-heading placeholder:text-text-muted focus:border-border-light focus:outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm text-text-label font-sans mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-heading placeholder:text-text-muted focus:border-border-light focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-text-label font-sans mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-heading placeholder:text-text-muted focus:border-border-light focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm text-text-label font-sans mb-2">
          What are you interested in?
        </label>
        <select
          id="service"
          name="service"
          value={formState.service}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-heading focus:border-border-light focus:outline-none transition-colors appearance-none"
        >
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-text-label font-sans mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text-heading placeholder:text-text-muted focus:border-border-light focus:outline-none transition-colors resize-none"
        />
      </div>

      <Button type="submit" className={status === "sending" ? "opacity-60 pointer-events-none" : ""}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}

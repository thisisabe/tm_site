"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

function TMLogomark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="16" cy="16" r="14" fill="white" />
      <circle cx="24" cy="16" r="14" fill="black" stroke="white" strokeWidth="1" />
      <path
        d="M20 2.5C23.5 6 25.5 10.7 25.5 16s-2 10-5.5 13.5C16.5 26 14.5 21.3 14.5 16S16.5 6 20 2.5z"
        fill="white"
      />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Container className="flex items-center justify-between h-16 sm:h-20">
        <Link href="/" aria-label="Thinker Maker home">
          <TMLogomark className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-body hover:text-text-heading transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-btn-primary-bg text-btn-primary-text px-6 py-2 text-sm font-medium hover:bg-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-text-heading p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="sm:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <Container className="py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-text-body hover:text-text-heading transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-btn-primary-bg text-btn-primary-text px-6 py-3 text-sm font-medium mt-2"
            >
              Contact
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}

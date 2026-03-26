# CLAUDE.md

## Project Overview

**Repository:** `thisisabe/tm_site`
**Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4
**Site:** thinkermaker.com.au — AI strategy, design, and execution consultancy

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Run development server (localhost:3000)
npm run build        # Build for production
npm run lint         # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, nav, footer, JSON-LD)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind v4 theme config
│   ├── services/           # Services overview + 3 tier detail pages
│   ├── about/              # About page
│   ├── contact/            # Contact page with form
│   ├── blog/               # Blog (placeholder, Sanity integration later)
│   └── api/contact/        # Contact form API route
├── components/
│   ├── layout/             # Header, Footer
│   ├── ui/                 # Button, Container, SectionHeading
│   ├── home/               # Homepage section components
│   ├── services/           # ServiceDetailPage, ProcessStep
│   ├── about/              # FounderBio (unused — inline in page for now)
│   └── contact/            # ContactForm (client component)
├── lib/
│   ├── constants.ts        # Nav links, service tiers, case studies, founders
│   └── metadata.ts         # JSON-LD structured data generators
└── types/
    └── index.ts            # Shared TypeScript interfaces
```

## Design System

- **Dark theme only** — true black (#000) background, no light mode
- **Fonts:** Playfair Display (serif, headings) + Inter (sans, body/UI) — loaded locally via next/font/local
- **Colours:** Background #000, Surface #141414, Headings #E8E4DE (warm cream), Body #999, Muted #666
- **Buttons:** Primary = white pill (#FFFDF7), Secondary = dark charcoal pill (#2A2A2A)
- **Spacing:** Generous whitespace. Sections use py-20 sm:py-28 or py-24 sm:py-32
- **Cards:** bg-surface, border-border, rounded-2xl
- **Australian English** throughout all copy

## Conventions

- All content/copy is centralised in `src/lib/constants.ts`
- Reusable components live in `src/components/`
- Client components (`"use client"`) only where needed: Header (mobile menu), ContactForm
- SEO: per-page metadata exports + JSON-LD in root layout
- Blog is placeholder — Sanity CMS integration planned

## Branching

- **Main branch:** `master`
- **Claude branches:** `claude/` prefix with session ID suffix
- Never push directly to `master` without a pull request

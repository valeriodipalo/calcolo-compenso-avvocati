# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Piattaforma Avvocati — a platform of free legal/fiscal calculator tools targeting the Italian market (avvocatotools.it), built to compete with avvocatoandreani.it. SEO strategy lives in `analysis/SEO-PLAN.md`.

## Repository Structure

```
website/freetools/              # Unified Next.js app (THE website — deploy from here)
website/freetools/calcolo-compenso/  # Old standalone version (deprecated, reference only)
tools/claude-seo/               # SEO analysis tool (Python + Node.js)
analysis/                       # Competitor analysis, SEO plans, per-page research
analysis/{slug}/                # Per-page artifacts: keyword-strategy.md, keywords.csv, competitor-analysis.md, raw-research.md, research-brief.md
pipeline-experimentation/       # Skill pipeline reviews, experiments, version tracking
changelog/                      # Session changelogs
.agents/skills/                 # Claude Code skills (create-page, gsc)
.claude/commands/               # Slash command definitions (create-page v2.1.0)
```

## Commands (from `website/freetools/`)

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm run start        # Serve production build
npm run lint         # ESLint
```

No tests configured yet.

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`) + **shadcn/ui** (new-york style, neutral base)
- Path alias: `@/*` → `src/*`
- Fonts: DM Serif Display (serif headings), Source Sans 3 (body), JetBrains Mono (code)
- Deployed on **Vercel** — production URL: `https://www.avvocatotools.it`

## App Architecture

### Routes (`src/app/`)

- `/` — Homepage (tool directory)
- `/calcolo-compenso` — Lawyer fee calculator (D.M. 147/2022)
- `/contributo-unificato` — Court fee calculator
- `/calcolo-interessi-legali` — Legal interest calculator
- `/calcolo-danno-non-patrimoniale` — Non-pecuniary damage calculator
- `/calcolo-interessi-moratori` — Late payment interest calculator (D.Lgs. 231/2002)

Each route is a single `page.tsx`. Interactive tools use `'use client'` components.

### Shared Components (`src/components/shared/`)

Reusable page-building blocks: `ToolLayout`, `HeroSection`, `SideNav`, `Header`, `Footer`, `FAQ`, `SectionTitle`, `LegalTable`, `NormativaQuote`, `AlertBox`, etc. Feature-specific components live alongside their tool (e.g., `src/components/calcolo-compenso/`).

### Tool Registry & Shared Infrastructure

- `src/data/toolRegistry.ts` — **Single source of truth** for all tools. Adding a new tool here auto-populates Navbar, SiteFooter, homepage, and sitemap. Each entry: slug, title, navLabel, description, icon, badge, ready, lastModified.
- `src/types/tool.ts` — Shared types: `ToolConfig`, `ToolSection`, `NormativaRiferimento`, `CircolareMinisteriale`
- `src/lib/utils.ts` — Shared utilities: `cn()`, `formatEur()`, `formatPct()`, `formatDate()`
- `src/lib/schema.tsx` — All JSON-LD schema generators (WebSite, Organization, BreadcrumbList, WebApplication, FAQPage, HowTo, Article)

### Data & Logic

- `src/data/{tool}/` — Static data per tool (fee tables, constants, definitions)
- Calculation logic is **client-side only**, no API calls

### Layout

Root layout (`src/app/layout.tsx`) provides: `<html lang="it">`, Google Fonts, site-wide JSON-LD (WebSite + Organization), `Navbar`, `SiteFooter`, and optional Google Analytics via `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

## Calcolo Compenso Domain Rules

- 29 competenze × 17 scaglioni fee lookup
- Phase codes vary by competenza: most have 10,20,30,40; TAR uses 72,74; Cassazione omits 30
- Formula: `Base → +Aumenti → -Riduzioni → AdjustedBase → +SpeseGenerali(15%) = Compenso`
- Accessories: CPA (4%), IVA (22%), Ritenuta (20%)
- Number formatting uses Italian locale (1.234,56)

## Conventions

- **URLs**: hyphens only, no underscores, no `.php`/`.html` extensions
- **Components**: shadcn/ui primitives in `src/components/ui/`, shared layout in `src/components/shared/`, tool-specific alongside
- **State**: React hooks only (useState, useMemo, useCallback), no external state library
- **Client components**: `'use client'` directive for interactive components
- **Data vs Logic**: static data in `src/data/`, computation in data files or `src/lib/`
- **Tool registration**: add new tools to `src/data/toolRegistry.ts` — Navbar, Footer, homepage, sitemap consume it automatically
- **Shared types**: use `NormativaRiferimento` and `CircolareMinisteriale` from `src/types/tool.ts` in data files
- **Formatting**: use `formatEur()`, `formatPct()`, `formatDate()` from `src/lib/utils.ts` — never redefine locally
- **UI language**: Italian throughout
- **Italian text lint**: Run `bash scripts/lint-italian.sh src` before publishing. Catches unicode escapes (`\u20AC` → `€`), missing accents (`e` → `è`, `piu` → `più`), and HTML entities. Blocking gate for all pages.

## SEO Requirements

Every new tool page must include:
- Single H1 with primary keyword
- Meta description (140-160 chars), canonical URL, OG tags with `og:locale: it_IT`
- JSON-LD schemas: **BreadcrumbList** + **Article** (with image) + **WebApplication** (if calculator). Do NOT use FAQPage (restricted to gov/health since Aug 2023) or HowTo (deprecated Sept 2023). Generators in `src/lib/schema.tsx`
- 2000-4000 words of editorial content (match or exceed top competitor depth)
- 15-25 FAQ items with sources
- See `analysis/SEO-PLAN.md` section 4 for the full on-page template
- Use `/create-page {topic}` (v2.1.0) for the full automated pipeline

## Security Headers

Configured in `next.config.ts`: `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Strict-Transport-Security`, `Referrer-Policy`, `Permissions-Policy`. `poweredByHeader` is disabled.

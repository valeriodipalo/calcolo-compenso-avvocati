# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Piattaforma Avvocati — a platform of free legal/fiscal calculator tools targeting the Italian market, built to compete with avvocatoandreani.it. The SEO strategy and competitor analysis live in `analysis/SEO-PLAN.md`.

## Repository Structure

```
website/freetools/calcolo-compenso/   # Next.js app — lawyer fee calculator (first tool)
tools/claude-seo/                     # SEO analysis skill (Python + Node.js)
analysis/                             # Competitor analysis, SEO plans
changelog/                            # Session changelogs
```

This is NOT a monorepo workspace — each project under `website/freetools/` is independent with its own `node_modules`.

## Commands

### calcolo-compenso (from `website/freetools/calcolo-compenso/`)

```bash
npm run dev          # Start dev server (Next.js)
npm run build        # Production build
npm run start        # Serve production build
npm run lint         # ESLint (flat config)
```

There are no tests configured yet.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS 4** (via `@tailwindcss/postcss`) + **shadcn/ui** (new-york style, neutral base)
- Path alias: `@/*` → `src/*`
- ESLint flat config with `next/core-web-vitals` + `typescript`

## Calcolo Compenso Architecture

The app is a client-side lawyer fee calculator replicating the 2022 Italian fee parameters (D.M. 147/2022).

### Data Flow

1. User selects **competenza** (29 jurisdictions) + **scaglione** (17 value bands) → lookup in `src/data/feeData.ts`
2. User enables/disables **phases** (fasi) with min/med/max/custom values
3. **Aumenti** (increases) apply to total, decisionale, or introduttiva basis; special logic for PiuParti (multi-party %)
4. **Riduzioni** (reductions) apply as percentages with optional min/max bounds
5. Formula: `Base → +Aumenti → -Riduzioni → AdjustedBase → +SpeseGenerali(15%) = Compenso`
6. Accessories: CPA (4%), IVA (22% of compenso + taxable expenses + CPA), Ritenuta (20%)

### Key Files

- `src/lib/calculator.ts` — Core calculation engine (`calculate()`, `calculatePiuPartiPct()`)
- `src/lib/types.ts` — All TypeScript interfaces (PhaseData, Aumento, Riduzione, CalcResult, etc.)
- `src/data/feeData.ts` — Fee lookup table (29 competenze × 17 scaglioni)
- `src/data/competenze.ts` — Jurisdiction definitions
- `src/data/scaglioni.ts` — Value band definitions
- `src/data/constants.ts` — CPA_RATE, IVA_RATE, RITENUTA_RATE, PHASE_NAMES
- `src/components/Calculator.tsx` — Main stateful component orchestrating all sub-components

### Domain Rules

- Phase codes vary by competenza: most have codes 10,20,30,40; TAR uses 72,74; Cassazione omits 30
- Number formatting uses Italian locale (1.234,56) — see `src/lib/formatters.ts`
- All calculation logic is client-side, no API calls
- UI language is Italian throughout

## Conventions

- **URLs**: hyphens only, no underscores, no `.php`/`.html` extensions
- **Components**: shadcn/ui pattern — reusable primitives in `src/components/ui/`, feature components alongside
- **State**: React hooks at component level (useState, useMemo, useCallback), no external state library
- **Client components**: use `'use client'` directive for interactive components
- **Data vs Logic**: static data in `src/data/`, computation in `src/lib/`

## SEO Requirements

Every new tool page must include: single H1 with primary keyword, meta description (140-160 chars), canonical URL, OG tags with `og:locale: it_IT`, BreadcrumbList + WebApplication + FAQPage + HowTo JSON-LD schemas, and 800-1500 words of editorial content below the tool. See `analysis/SEO-PLAN.md` section 4 for the full on-page template.

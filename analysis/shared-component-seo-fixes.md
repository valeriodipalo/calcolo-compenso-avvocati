# Shared-Component SEO Polish — Handoff Doc

**Status**: Open. Not yet addressed.
**Discovered during**: Phase 5 SEO audit of `/scorporo-iva` launch (2026-04-23, commit `f25bd6a`).
**Why separate PR**: These fixes touch shared components (`SideNav`, `HeroSection`, `schema.tsx`, `SiteFooter`, `SearchCommand`, root `layout.tsx`) that render on **every tool page**. Bundling them with a single-tool launch would make the blast radius of a regression cover all 12+ tools.
**Estimated total effort**: ~45-60 min of focused work + testing, single PR.
**Scope**: 6 fixes. HIGH-impact (3) + WARNING-impact (3).
**Working directory**: `/Users/valerio/Piattafroma Avvocati/website/freetools/`

---

## Context for a Fresh Session

The site is `avvocatotools.it`, a Next.js 15 / React 19 / Tailwind 4 platform of free Italian legal calculators. SEO is the main traffic driver — every page targets high-volume Italian keywords in the legal/fiscal niche. Shared UI components are in `src/components/shared/`; schema generators are in `src/lib/schema.tsx`. See `CLAUDE.md` for conventions (shadcn/ui new-york style, OKLch inline colors, border-radius via inline `style={{}}` — no `rounded-*` classes).

After each fix, verify with:
```bash
cd website/freetools && npm run build        # must pass
cd website/freetools && npm run dev           # render-check one or two tool pages
bash scripts/lint-italian.sh src/app src/data src/components  # must pass
```

End-to-end verification on `http://localhost:3000/scorporo-iva` (or any tool page):
```bash
curl -s http://localhost:3000/scorporo-iva > /tmp/page.html
# Check specific assertions below per fix.
```

---

## Fix #1 — SideNav: use `<a href="#anchor">` instead of `<button onClick>`

### Severity
**HIGH** — SEO opportunity cost + UX regression.

### Location
`src/components/shared/SideNav.tsx` — lines 58-76 (the `<ul><li><button>` block).

### Current code (verbatim)
```tsx
<ul className="py-2">
  {sections.map((s) => (
    <li key={s.id}>
      <button
        onClick={() => scrollTo(s.id)}
        className={`
          w-full text-left px-4 py-2 text-sm transition-all
          ${
            activeSection === s.id
              ? "bg-[oklch(0.97_0.005_85)] text-[oklch(0.25_0.04_250)] font-semibold border-l-3 border-[oklch(0.75_0.10_85)]"
              : "text-[oklch(0.45_0.02_250)] hover:bg-[oklch(0.98_0.005_85)] hover:text-[oklch(0.25_0.04_250)] border-l-3 border-transparent"
          }
        `}
      >
        {s.label}
      </button>
    </li>
  ))}
</ul>
```

### Why it matters
- Google's SERP renderer pulls "Jump to section" sitelinks from pages where the ToC is real anchor tags pointing at in-page IDs. Buttons with `onClick` handlers are invisible to the crawler for this purpose.
- Users can't right-click → "Copy link address" on a section (no way to share `/scorporo-iva#scorporo-22`).
- Screen readers: `<button>` announces a control, but the action is navigation — a11y linters (axe, Lighthouse a11y) flag this as a `button-has-no-action-association` pattern.
- Section IDs already exist in the DOM (every `<SectionTitle id="...">` renders `id` on its wrapper), so the anchor targets work today — the ToC just doesn't expose them.

### Suggested fix
Swap `<button>` for `<a>` but **keep** the smooth-scroll as a progressive enhancement (prevent default only when JS is available). This preserves current scrolling UX while adding proper anchors.

```tsx
<ul className="py-2">
  {sections.map((s) => (
    <li key={s.id}>
      <a
        href={`#${s.id}`}
        onClick={(e) => {
          e.preventDefault();
          scrollTo(s.id);
          // Update hash so the URL reflects the section without a scroll jump
          if (typeof window !== "undefined") {
            history.replaceState(null, "", `#${s.id}`);
          }
        }}
        className={`
          block w-full text-left px-4 py-2 text-sm transition-all
          ${
            activeSection === s.id
              ? "bg-[oklch(0.97_0.005_85)] text-[oklch(0.25_0.04_250)] font-semibold border-l-3 border-[oklch(0.75_0.10_85)]"
              : "text-[oklch(0.45_0.02_250)] hover:bg-[oklch(0.98_0.005_85)] hover:text-[oklch(0.25_0.04_250)] border-l-3 border-transparent"
          }
        `}
      >
        {s.label}
      </a>
    </li>
  ))}
</ul>
```

Key changes:
- `<button>` → `<a href={`#${s.id}`}>`
- Added `block` class (anchors are inline by default, need block to fill the width)
- `onClick` now uses `e.preventDefault()` + existing `scrollTo(s.id)` + `history.replaceState` (writes the hash to the URL without causing a scroll jump — the smooth-scroll handles scrolling)
- Removed `w-full` since `block` already fills the container; keep `w-full` if you want it explicit

### Verification
After deploy:
```bash
curl -s http://localhost:3000/scorporo-iva | grep -oE 'href="#[a-z-]+"' | sort -u
# Expected: href="#calcolatore", href="#cose-scorporo-iva", href="#formula", ... (17 anchors for scorporo-iva)
```

Manual test:
1. Click a ToC item → URL should update to `/scorporo-iva#scorporo-22` AND page should smooth-scroll
2. Right-click ToC item → "Copy link address" should give the full URL with anchor
3. Reload `/scorporo-iva#scorporo-22` directly → page should open scrolled to that section

### Risk
Very low. The `scrollTo()` function already exists and works; we're just adding a real `href` and preventing the default hash-jump.

### Affects
All 12 tool pages (every page using `ToolLayout`, which is all of them).

---

## Fix #2 — HeroSection: use `next/image` instead of CSS `background-image`

### Severity
**HIGH** — image SEO + Core Web Vitals (LCP) + schema consistency.

### Location
`src/components/shared/HeroSection.tsx` — lines 11-16 (the `<section>` and first `<div>`).

### Current code (verbatim)
```tsx
export function HeroSection({ image, eyebrow, title, description, reference }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-[oklch(0.25_0.04_250)]/80" />
      <div className="relative container py-16 md:py-24">
        ...
```

### Why it matters
- **Zero alt text** → Google Images can't index the hero banner. For searches like "scorporo iva calcolatore" (image search), we're invisible.
- **Article JSON-LD mismatch** — every tool page's `articleSchema()` declares `image: HERO_IMG`, but the HTML never binds that URL to an `<img>`. Google's structured data guidelines (2024+) increasingly require that schema-referenced images actually appear on the page. Expect future warnings in GSC's "Enhancements → Article" report.
- **LCP hit** — no `priority` hint, no responsive `srcset`, no preload. On mobile 3G the hero is often the Largest Contentful Paint element; a CSS background loads *after* CSS parsing (extra round-trip) versus `<Image priority>` which Next.js preloads.
- **No `onLoad` / error handling** — silent failures when CloudFront hiccups.

### Suggested fix
Use `next/image` with `fill`, `priority`, and `alt`. Keep the color overlay. Add an `alt` prop to the component API.

**Update the component props:**
```tsx
import Image from "next/image";

interface HeroSectionProps {
  image: string;
  imageAlt: string;      // NEW — required
  eyebrow: string;
  title: string;
  description: string;
  reference?: string;
}

export function HeroSection({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  reference,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[oklch(0.25_0.04_250)]/80" />
      <div className="relative container py-16 md:py-24">
        ...
```

**Then update `ToolConfig`** at `src/types/tool.ts`:
```tsx
export interface ToolConfig {
  // ... existing fields
  heroImage: string;
  heroImageAlt: string;      // NEW
  // ...
}
```

**Update `ToolLayout`** at `src/components/shared/ToolLayout.tsx` to pass the new prop:
```tsx
<HeroSection
  image={config.heroImage}
  imageAlt={config.heroImageAlt}
  eyebrow={config.heroEyebrow}
  title={config.heroTitle}
  description={config.heroDescription}
  reference={config.heroReference}
/>
```

**Update every tool page's `toolConfig`** to add `heroImageAlt`. The 12 pages to update:
- `src/app/calcolo-compenso/page.tsx`
- `src/app/calcolo-fattura-avvocato/page.tsx`
- `src/app/contributo-unificato/page.tsx`
- `src/app/calcolo-interessi-legali/page.tsx`
- `src/app/calcolo-interessi-moratori/page.tsx`
- `src/app/calcolo-rivalutazione-monetaria/page.tsx`
- `src/app/calcolo-danno-biologico/page.tsx`
- `src/app/calcolo-danno-non-patrimoniale/page.tsx`
- `src/app/calcolo-termini-processuali/page.tsx`
- `src/app/calcolo-termini-impugnazione/page.tsx`
- `src/app/calcolo-giorni-tra-date/page.tsx`
- `src/app/scorporo-iva/page.tsx`

Each should get something like:
```tsx
heroImageAlt: "Calcolatore Scorporo IVA 2026 — aliquote 22%, 10%, 5%, 4%",
```

Tailor the alt text per tool — include the primary keyword naturally.

### `next/image` CloudFront domain allowlist
The hero URL is `https://d2xsxph8kpxj0f.cloudfront.net/...`. Verify `next.config.ts` has this domain in `images.remotePatterns` or `images.domains`. If not, add:
```ts
// next.config.ts
images: {
  remotePatterns: [
    { protocol: "https", hostname: "d2xsxph8kpxj0f.cloudfront.net" },
  ],
},
```
Without this, the build will fail with "Invalid src prop" errors for every tool page.

### Verification
```bash
curl -s http://localhost:3000/scorporo-iva | grep -oE '<img[^>]*alt="[^"]*"[^>]*>' | head -3
# Expected: an <img> tag with the CloudFront src and the alt text set in heroImageAlt
```

Lighthouse run on any tool page:
- LCP should drop (typically -300-500ms on 4G simulation)
- No "Image elements without alt" accessibility issue
- "Uses efficient cache policy" and "Serves images in next-gen formats" should improve (Next handles WebP conversion)

### Risk
Medium. The change touches every tool page + type definition + layout + config object. TypeScript will catch missing `heroImageAlt` in every tool's config — work through the compile errors one by one. Build will fail until all 12 pages are updated.

### Affects
All 12 tool pages.

---

## Fix #3 — schema.tsx: add `sameAs` to Organization + optional Person author

### Severity
**HIGH** — E-E-A-T signal, especially for YMYL (Your Money Your Life) content like legal/fiscal calculators.

### Location
`src/lib/schema.tsx` — lines 36-43 (`organizationSchema`) and line 142 (where `articleSchema` uses it for `author`).

### Current code (verbatim)
```tsx
export function organizationSchema() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-icon.png` },
  };
}
```

And in `articleSchema` at line 142:
```tsx
author: organizationSchema(),
publisher: organizationSchema(),
```

### Why it matters
- **YMYL weight**: Google's QRG (Quality Rater Guidelines) applies the strictest E-E-A-T expectations to pages that can affect a user's legal rights, taxes, or health. Italian legal/fiscal calculators fall squarely into this bucket.
- **`author === publisher`**: Currently both fields point to the same Organization object. Google can tell these aren't a real author/publisher distinction. Best practice for authoritative content is an Organization publisher + a credentialed Person author (or at minimum a richer Organization with verifiable external profiles).
- **No `sameAs`**: `sameAs` is how Google's Knowledge Graph cross-links your Organization entity to verified external profiles. Without it, Google has no way to corroborate that `Piattaforma Avvocati` is a real, trustworthy entity versus a thin AI-content farm.

### Suggested fix

**Step 3a — Enrich `organizationSchema()`:**
```tsx
export function organizationSchema() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-icon.png` },
    sameAs: [
      // Add real verified profiles — leave empty array if none yet,
      // but ASK the user for their LinkedIn/Twitter/YouTube/etc. first.
      // Example shape:
      // "https://www.linkedin.com/company/piattaforma-avvocati",
      // "https://twitter.com/avvocatotools",
    ],
  };
}
```

**IMPORTANT**: Do NOT invent sameAs URLs. If the user hasn't given you verified external profiles, either (a) ask them explicitly for the real URLs before adding any, or (b) leave `sameAs` as an empty array and surface a follow-up task ("Need real sameAs URLs to complete E-E-A-T fix").

**Step 3b — Let `articleSchema` accept an optional Person author:**

Update the signature at line 116-124:
```tsx
export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  sections?: string[];
  // NEW — optional Person author for E-E-A-T boost
  author?: {
    name: string;
    jobTitle?: string;
    url?: string;
    sameAs?: string[];
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    inLanguage: "it-IT",
    ...(opts.image && {
      image: {
        "@type": "ImageObject",
        url: opts.image,
        width: 1920,
        height: 1072,
      },
    }),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    // If a Person author is provided, use it. Otherwise fall back to Org.
    author: opts.author
      ? {
          "@type": "Person",
          name: opts.author.name,
          ...(opts.author.jobTitle && { jobTitle: opts.author.jobTitle }),
          ...(opts.author.url && { url: opts.author.url }),
          ...(opts.author.sameAs && { sameAs: opts.author.sameAs }),
        }
      : organizationSchema(),
    publisher: organizationSchema(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${opts.path}`,
    },
    ...(opts.sections && {
      articleSection: opts.sections,
    }),
  };
}
```

**Step 3c (optional, recommended)** — wire a default author through `toolConfig`. If the site has a single editorial lead (e.g. Avv. Valerio Di Palo based on the git user), add once in `src/lib/schema.tsx`:
```tsx
export const DEFAULT_AUTHOR = {
  name: "Valerio Di Palo",
  jobTitle: "Editor, Piattaforma Avvocati",
  url: "https://www.avvocatotools.it/about", // or LinkedIn
  // sameAs: ["https://www.linkedin.com/in/..."],
};
```
Then each tool page's `articleSchema()` call passes `author: DEFAULT_AUTHOR`. **Do NOT add this author without confirming with the user** — attributing content to a specific person is a business decision (also affects libel/responsibility).

### Verification
```bash
curl -s http://localhost:3000/scorporo-iva | python3 -c "
import re, json, sys
html = sys.stdin.read()
blocks = re.findall(r'<script type=\"application/ld\\+json\">(.*?)</script>', html, re.DOTALL)
for b in blocks:
    d = json.loads(b)
    if d.get('@type') == 'Article':
        print('Article author:', json.dumps(d.get('author'), ensure_ascii=False, indent=2))
        print('Article publisher sameAs:', d.get('publisher', {}).get('sameAs'))
"
```

Google Rich Results Test (after deploy):
- https://search.google.com/test/rich-results?url=https://www.avvocatotools.it/scorporo-iva
- Should show Article eligible with author and publisher as separate entities.

### Risk
Low if you keep `sameAs` empty until real URLs are available; only touches `schema.tsx`. If you add a Person author, also touch every tool page's `articleSchema()` call (12 sites).

### Affects
All tool pages via `articleSchema()` output. No visual change, pure JSON-LD.

---

## Fix #4 — SiteFooter: add `rel="noopener noreferrer"` to Iubenda links

### Severity
**WARNING** — security/privacy polish. Not a ranking factor, but flagged by Lighthouse and many security linters.

### Location
`src/components/shared/SiteFooter.tsx` — lines 98-104 and 107-113 (two Iubenda `<a>` tags).

### Current code
```tsx
<a
  href="https://www.iubenda.com/privacy-policy/87843785"
  className="iubenda-white iubenda-noiframe iubenda-embed"
  title="Privacy Policy"
>
  Privacy Policy
</a>
```
And similarly for Cookie Policy on lines 107-113.

### Why it matters
- `rel="noopener"` prevents the opened page from accessing `window.opener` (tabnabbing defense).
- `rel="noreferrer"` prevents leaking the referrer URL to Iubenda's servers.
- Lighthouse "Best Practices" audit flags this. Not an SEO ranking signal, but a trust signal for Core Web Vitals scoring and user-facing security.
- Every other external link in the codebase follows the `rel="noopener noreferrer" target="_blank"` pattern — these two are the odd ones out.

### Suggested fix
Add `target="_blank"` + `rel="noopener noreferrer"` to both Iubenda anchors:

```tsx
<a
  href="https://www.iubenda.com/privacy-policy/87843785"
  target="_blank"
  rel="noopener noreferrer"
  className="iubenda-white iubenda-noiframe iubenda-embed"
  title="Privacy Policy"
>
  Privacy Policy
</a>
```

Same change on the Cookie Policy link (lines 107-113).

### Verification
```bash
curl -s http://localhost:3000/scorporo-iva | grep -A1 'iubenda.com/privacy-policy' | grep -c 'noopener noreferrer'
# Expected: 2 (one per Iubenda link)
```

### Note on Iubenda's JS embed
The Iubenda script (`src/components/shared/SiteFooter.tsx:144`, `https://cdn.iubenda.com/iubenda.js`) may *replace* these anchors with a modal trigger at runtime. If so, the `rel` attributes on the original `<a>` might not matter because the final rendered element differs. Test after the change — if Iubenda's script wipes the attributes, follow their docs for the `rel`-friendly integration.

### Risk
Very low. 2-line change, no logic impact.

### Affects
Every page (SiteFooter is site-wide).

---

## Fix #5 — SearchCommand: hide the `<DialogTitle>` h2 from Google's H2 count

### Severity
**WARNING** — cosmetic SEO noise. Not a ranking factor but tidies the page's heading structure.

### Location
`src/components/shared/SearchCommand.tsx` — lines 52-57 (the `CommandDialog` component).

### Current code
```tsx
<CommandDialog
  open={open}
  onOpenChange={onOpenChange}
  title="Cerca strumenti"
  description="Cerca tra tutti gli strumenti disponibili su avvocatotools.it"
>
```

### Why it matters
The shadcn `CommandDialog` renders `title` as a visible (or sr-only) `<h2>`. It lives in the DOM permanently (even when the dialog is closed) as a Radix `DialogTitle` portaled element with `sr-only` styling. Result: every page has one extra H2 in its outline — "Cerca strumenti" — that has nothing to do with the page's content. Google's heading extractor sees 19 H2s on `/scorporo-iva` when the page actually has 17 meaningful sections + 1 hidden search-dialog title + 1 from the navbar.

Minor impact: dilutes the clarity of the page's semantic outline for Google and screen readers (which is why it's sr-only in the first place — but sr-only H2 still counts for heading order).

### Suggested fix
shadcn's `CommandDialog` wraps Radix's `Dialog.Title`. The idiomatic way to preserve accessibility while removing the H2 is to use `<VisuallyHidden>` wrapping a `<span>` inside the DialogTitle — the dialog still has an accessible name, but it's not an H2.

This is a shadcn-layer change. Two options:

**Option A (preferred)**: Downgrade to `<span>` with `aria-label`:
Open `src/components/ui/command.tsx` (shadcn's generated CommandDialog) and find where `DialogTitle` is rendered. Wrap its children in `<VisuallyHidden asChild><span>...</span></VisuallyHidden>` so it's an accessible name but not an h2.

**Option B (easier)**: Pass `showCloseButton={false}` or override via the `CommandDialog` variant prop if the component supports it. If shadcn's version doesn't expose a "heading as span" prop, go with Option A.

Note: this is an **optional polish**. The page is perfectly crawlable today; the extra H2 doesn't block rankings, it just makes the outline noisier. Skip if time is tight.

### Risk
Medium. Touching the generated `src/components/ui/command.tsx` may break the search dialog's accessibility if done wrong. Test with VoiceOver/NVDA after the change.

### Affects
Every page (navbar is on every page).

---

## Fix #6 — Root `layout.tsx`: add explicit `<meta name="robots">`

### Severity
**WARNING** — defensive. Currently relying on Google's default (index, follow), which is correct. Being explicit is belt-and-suspenders.

### Location
`src/app/layout.tsx` — inside the `metadata` export (lines 29-54).

### Current state
No `robots` field in `metadata`. Google defaults to `index, follow` — which is what we want — so the page IS crawlable. But there's no guardrail against a future edit accidentally suppressing indexing.

### Why it matters
- Explicit `robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 }` signals to Google that we want the fullest possible rich result rendering.
- `max-image-preview: 'large'` is required for AI Overviews and Discover card eligibility.
- `max-snippet: -1` lets Google show the longest snippet it deems appropriate (otherwise capped at 160 chars for some locales).

### Suggested fix
In `src/app/layout.tsx`, add to the `metadata` export:
```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://www.avvocatotools.it"),
  title: { /* existing */ },
  description: "...",
  alternates: { canonical: "/" },
  // NEW — explicit robots directives for maximum rich-result eligibility
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: { /* existing */ },
  twitter: { /* existing */ },
};
```

### Verification
```bash
curl -s http://localhost:3000/scorporo-iva | grep -oE '<meta[^>]*name="robots"[^>]*>'
# Expected: <meta name="robots" content="index, follow"/>
curl -s http://localhost:3000/scorporo-iva | grep -oE '<meta[^>]*name="googlebot"[^>]*>'
# Expected: <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
```

### Risk
Very low. Single object addition to root metadata. No tool-page changes.

### Affects
Every page (root layout).

---

## Execution Order (Recommended)

Do them in this sequence to minimize merge conflicts and compounding errors:

1. **Fix #6 (robots meta)** — 2 min. Zero-risk config add. Get it out of the way first.
2. **Fix #4 (Iubenda rel)** — 5 min. Tiny change, confidence-building warmup.
3. **Fix #3a (Organization sameAs)** — 10 min *IF* the user has provided real profile URLs. Otherwise skip 3a and do only the `articleSchema` refactor (3b) with `author?: Person` optional.
4. **Fix #1 (SideNav anchors)** — 15 min. Touches one component, all tool pages pick up the change automatically.
5. **Fix #2 (HeroSection `next/image`)** — 20 min. Biggest blast radius: type change + layout + 12 tool page configs. Do it last so you're not juggling it with the other fixes.
6. **Fix #5 (DialogTitle H2)** — 10 min. Optional polish, do only if time permits.

Total: ~60 min without Fix #5.

## Single-PR Checklist

Before committing:
- [ ] `npm run build` passes with zero errors
- [ ] `npm run dev` loads without console errors
- [ ] `bash scripts/lint-italian.sh src/app src/data src/components` passes
- [ ] Manual check on 3 different tool pages: hero image visible with alt, ToC anchors work both as click AND copy-link, Iubenda links open with target=_blank, view-source shows new robots meta
- [ ] JSON-LD Article author field populated correctly — verify with Google Rich Results Test or the Python snippet above
- [ ] Lighthouse a11y + SEO scores unchanged or improved on /scorporo-iva

Suggested commit message:
```
refactor(shared): SEO polish across shared components

- SideNav: button → anchor for real in-page URL hashes + jump-to sitelink eligibility
- HeroSection: CSS bg → next/image with priority + alt for image SEO + LCP
- schema.tsx: enrich Organization with sameAs, allow optional Person author
- SiteFooter: rel="noopener noreferrer" on Iubenda links
- layout: explicit robots directives for max rich-result eligibility

Affects all 12 tool pages. See analysis/shared-component-seo-fixes.md.
```

---

## Related Context Files

- **Audit source**: Phase 5 SEO audit during `/scorporo-iva` launch (commit `f25bd6a`, 2026-04-23)
- **Launch commit**: `f25bd6a` — `feat: publish scorporo-iva tool (fiscale cluster opener)`
- **Skill docs**: `.agents/skills/create-page/references/schema-enrichment.md` (schema patterns)
- **Skill docs**: `.agents/skills/create-page/references/implementation-guide.md` (component APIs)
- **Project overview**: `CLAUDE.md` (conventions, tech stack, routes)

## Things NOT to touch

- Do NOT refactor `Navbar.tsx` to read from `toolRegistry.ts` — the `navData.ts` decoupling is intentional (navbar labels/ordering are hand-tuned for UX).
- Do NOT downgrade `CommandDialog` to remove the dialog entirely — the search feature is valuable, only the hidden H2 is noisy.
- Do NOT invent social profile URLs for `sameAs` — ask the user for real ones or leave the array empty.
- Do NOT change the hero CloudFront URL pattern — it's the same across all pages by design.

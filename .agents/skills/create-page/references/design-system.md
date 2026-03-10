# Design System Reference

Color tokens, typography, and component API for Piattaforma Avvocati.

---

## CSS Custom Properties (globals.css)

### Theme Colors (OKLch)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-navy` | `oklch(0.25 0.04 250)` | Primary headings, dark backgrounds |
| `--color-navy-light` | `oklch(0.30 0.04 250)` | Hover states on navy |
| `--color-gold` | `oklch(0.75 0.10 85)` | Accent, icons, decorative elements |
| `--color-gold-light` | `oklch(0.85 0.08 85)` | Light gold backgrounds |
| `--color-gold-dark` | `oklch(0.60 0.12 85)` | Gold hover/active states |
| `--color-cream` | `oklch(0.98 0.005 85)` | Page background |
| `--color-warm-gray` | `oklch(0.95 0.005 85)` | Muted backgrounds |
| `--color-success` | `oklch(0.55 0.15 155)` | Success states |
| `--color-warning` | `oklch(0.70 0.15 65)` | Warning states |
| `--color-danger` | `oklch(0.55 0.20 25)` | Error/danger states |

### Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `oklch(0.98 0.005 85)` | Body background |
| `--foreground` | `oklch(0.20 0.02 250)` | Body text |
| `--primary` | `oklch(0.25 0.04 250)` | Primary (navy) |
| `--accent` | `oklch(0.75 0.10 85)` | Accent (gold) |
| `--muted-foreground` | `oklch(0.50 0.02 250)` | Secondary text |
| `--border` | `oklch(0.88 0.01 85)` | Default border |
| `--destructive` | `oklch(0.55 0.20 25)` | Destructive/error |

### Inline Color Patterns Used in Components

| Purpose | OKLch Value | Usage Example |
|---------|-------------|---------------|
| Warning bg | `oklch(0.97 0.01 25)` | AlertBox warning |
| Warning border | `oklch(0.55 0.20 25)` | AlertBox warning left border |
| Warning title | `oklch(0.40 0.15 25)` | AlertBox warning title text |
| Info bg | `oklch(0.97 0.005 85)` | AlertBox info |
| Success bg | `oklch(0.97 0.005 155)` | AlertBox success |
| Success border | `oklch(0.80 0.08 155)` | AlertBox success border |
| Success title | `oklch(0.35 0.10 155)` | AlertBox success title text |
| Link color | `oklch(0.45 0.12 250)` | Inline links, InlineNormLink |
| Link hover | `oklch(0.35 0.15 250)` | Link hover states |
| Banner overlay | `oklch(0.25 0.04 250)/80` | SectionBanner gradient |
| Gold bullet | `oklch(0.75 0.10 85)` | BulletList dots |

---

## Typography

| Element | Font | Classes |
|---------|------|---------|
| H1 | DM Serif Display | `text-4xl md:text-5xl text-white` (in hero) |
| H2 (SectionTitle) | DM Serif Display | `text-2xl md:text-3xl text-[oklch(0.25_0.04_250)]` |
| H3 | DM Serif Display | `text-xl text-[oklch(0.25_0.04_250)]` |
| Body | Source Sans 3 | `text-base leading-relaxed` |
| Small | Source Sans 3 | `text-sm` or `text-xs` |
| Monospace | JetBrains Mono | `font-mono` (for currency, codes) |
| Eyebrow | Source Sans 3 | `text-sm font-semibold uppercase tracking-widest` |

### Font Variables
- `--font-serif`: 'DM Serif Display', Georgia, serif
- `--font-sans`: 'Source Sans 3', system-ui, sans-serif
- `--font-mono`: 'JetBrains Mono', monospace

---

## Border Radius Convention

**Always use inline `style` for border-radius.** Tailwind's `rounded-*` classes are NOT used because the design system uses `--radius` CSS variables that map to specific values. All components use:

```tsx
style={{ borderRadius: "0.375rem" }}  // small (cards, buttons, alerts)
style={{ borderRadius: "0.5rem" }}    // medium (banners, large cards)
style={{ borderRadius: "0.25rem" }}   // extra small (badges, pills)
style={{ borderRadius: "50%" }}       // circle (bullet dots)
```

---

## Currency Formatting

Always use Italian locale for currency:

```tsx
const formatEur = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(n);
```

The `LegalTable` component auto-formats numbers passed as `number` type in rows. For currency display in text, use `<strong className="font-mono">€ {value}</strong>`.

---

## Shared Component APIs

### ToolLayout
```tsx
// Wraps entire page content. Provides hero, sidebar nav, and footer.
<ToolLayout config={toolConfig: ToolConfig}>
  {children}
</ToolLayout>
```

### SectionTitle
```tsx
// Section header with icon, gold separator above, and scroll anchor.
<SectionTitle
  id="section-id"        // string — used for anchor links and sidebar nav
  icon={LucideIcon}      // LucideIcon component
  title="Section Title"  // string — rendered as H2
  subtitle="Optional"    // string? — small text below title
/>
```

### LegalTable
```tsx
// Navy-header table with automatic EUR formatting for number cells.
<LegalTable
  headers={["Col1", "Col2"]}       // string[]
  rows={[["cell", "€ 100,00"]]}   // (string | number)[][]
  className="mb-4"                  // string? — additional classes
/>
```

### NormativaQuote
```tsx
// Monospace blockquote with gold left border. Link to Normattiva optional.
<NormativaQuote url="https://normattiva.it/...">
  Art. 1: "Quoted legal text"
</NormativaQuote>
```

### InlineNormLink
```tsx
// Inline link to Normattiva with external link icon.
<InlineNormLink text="D.P.R. 115/2002" url="https://normattiva.it/..." />
```

### FAQ
```tsx
// Accordion FAQ with category filters. Uses FAQItem[] from faqData.
<FAQ items={faqData: FAQItem[]} />

// FAQItem interface:
interface FAQItem {
  domanda: string;
  risposta: string;
  categoria: string;
  fonti?: { label: string; url: string }[];
}
```

### AlertBox
```tsx
// Callout box with 3 variants.
<AlertBox
  variant="warning" | "info" | "success"
  title="Optional Title"             // string?
>
  <p>Content with <strong>bold</strong> and links.</p>
</AlertBox>
```
- **warning**: warm red bg, left border only, red-tinted title
- **info**: cream bg, full border, standard title
- **success**: green-tinted bg, green border, green title

### SectionBanner
```tsx
// Full-width image with gradient text overlay.
<SectionBanner
  image="https://cdn.example.com/image.webp"  // string
  alt="Image alt text"                          // string
  text="Overlay text displayed on the banner"   // string
/>
```

### BulletList
```tsx
// Gold-dot unordered list.
<BulletList items={["Item 1", "Item 2", "Item 3"]} />
```

### FeatureGrid
```tsx
// 2-column responsive grid of small info cards.
<FeatureGrid items={[
  { title: "Card Title", desc: "Card description" },
]} />
```

### NormativaRefTable
```tsx
// Table for normative references with external link column.
<NormativaRefTable items={[
  { norma: "D.P.R. 115/2002", descrizione: "Testo Unico...", url: "https://..." },
]} />
```

### CircolariTable
```tsx
// Table for ministerial circulars (same layout, different labels).
<CircolariTable items={[
  { circolare: "Circ. Min. 17/3/2023", descrizione: "...", url: "https://..." },
]} />
```

---

## External Link Pattern

For inline links to external resources (not Normattiva), use this pattern:

```tsx
<a
  href="https://..."
  target="_blank"
  rel="noopener noreferrer"
  className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
>
  Link text
</a>
```

For Normattiva links, always use `<InlineNormLink>` instead.

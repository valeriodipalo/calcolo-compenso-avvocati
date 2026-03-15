# Content Model Reference

What "deep enough" content looks like for Piattaforma Avvocati pages. Use these patterns as the quality bar — every section you write should match this level of detail.

---

## The Quality Bar

The contributo-unificato page (~500 lines of JSX, ~3000+ words of editorial content across 18 sections) and calcolo-interessi-legali page (~284 lines, ~2000+ words across 8 sections) set the standard. Content that is shorter or shallower than what's shown below is NOT acceptable.

---

## Section Anatomy

Every content section follows this pattern:

### 1. Opening Paragraph
A clear explanation of what this section covers, citing the relevant law article immediately.

```tsx
<p className="text-base leading-relaxed">
  Il <strong>contributo unificato di iscrizione a ruolo</strong> è una somma
  che viene corrisposta all'Erario ogni volta in cui una parte inizia un processo
  civile, amministrativo o tributario. La disciplina è contenuta nel{" "}
  <InlineNormLink text="D.P.R. 30 maggio 2002, n. 115"
    url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" />
  (Testo Unico Spese di Giustizia).
</p>
```

Notice:
- The primary keyword is in `<strong>` on first mention
- The law reference is an `<InlineNormLink>`, not plain text
- The full name of the law is given, not just "DPR 115/2002"

### 2. Supporting Detail
A second paragraph adding context, history, or authoritative interpretation.

```tsx
<p className="text-base leading-relaxed">
  La Corte Costituzionale ha riconosciuto al contributo unificato la
  <strong>natura di tributo</strong>, stante la doverosità della prestazione
  e il collegamento ad una spesa pubblica come quella giudiziaria
  (C. Cost. sent. 73/2005).
</p>
```

### 3. Legislative Quote
The key article text, quoted verbatim from the law.

```tsx
<NormativaQuote url="https://www.normattiva.it/...">
  Art. 9, c. 1: "È dovuto il contributo unificato di iscrizione a ruolo,
  per ciascun grado di giudizio, nel processo civile, compresa la procedura
  concorsuale e di volontaria giurisdizione..."
</NormativaQuote>
```

### 4. Data Table (where applicable)
Concrete data presented in a structured table.

```tsx
<LegalTable
  headers={["Scaglione di valore", "Civile I Grado", "Appello (+50%)", "Cassazione (x2)"]}
  rows={scaglioniCivile.map((s) => [
    s.label,
    formatEur(s.importo),
    formatEur(s.importo * 1.5),
    formatEur(s.importo * 2),
  ])}
/>
```

### 5. Edge Cases and Warnings
AlertBoxes for things people get wrong or overlook.

```tsx
<AlertBox variant="info">
  <p><strong>Valore indeterminabile:</strong> <span className="font-mono">{formatEur(518)}</span>
  (I grado) | <span className="font-mono">{formatEur(777)}</span> (Impugnazione)</p>
</AlertBox>
```

```tsx
<AlertBox variant="warning" title="Attenzione">
  <p>Il <strong>procedimento semplificato di cognizione</strong> (artt. 281-decies e segg. c.p.c.)
  <strong>non</strong> gode del dimezzamento del CU.</p>
</AlertBox>
```

### 6. Additional Context
A closing note or practical tip, often in `text-sm text-muted-foreground`.

```tsx
<p className="text-sm text-muted-foreground mt-3">
  Per le cause di <strong>valore indeterminabile</strong>, il contributo unificato
  è pari a <strong className="font-mono">€ 518,00</strong> nel processo civile.
</p>
```

---

## Content Depth by Section Type

### Definition Sections ("Cos'è il...")
- 2-3 paragraphs explaining the concept
- Legislative quote from the founding article
- Historical context (when introduced, what it replaced)
- AlertBox for common misconceptions

### Data Table Sections
- Opening paragraph explaining the table's purpose and legal basis
- The table itself with all rows from the data file
- Post-table note with edge cases or footnotes
- AlertBox for special values (indeterminabile, non indicato)

### Procedure Sections ("Come si paga...", "Come si calcola...")
- Step-by-step explanation
- If calculation: show the formula in a styled box
- Worked example with real numbers in a LegalTable
- AlertBox for common mistakes

### Special Cases / Exemptions
- BulletList of all cases
- For each case: which article, which conditions
- AlertBox variant="warning" for cases that DON'T qualify
- AlertBox variant="success" for recent additions/improvements

### Recent Changes ("Novità...")
- Each change in its own AlertBox variant="success"
- Reference the specific law that introduced the change
- Explain practical impact for practitioners

---

## What Makes Content "Thin" (Avoid These)

- A section with only 1 short paragraph and no table/quote/alert
- Generic statements without article references ("la legge prevede che...")
- Tables without explanatory context above or below
- FAQ answers shorter than 2 sentences
- Sections that exist only for SEO keywords but add no real information
- Definitions copied from Wikipedia without legal source attribution

---

## Content Volume Guidelines

These are minimums based on what ranks well in the Italian legal niche:

| Page Type | Editorial Words | Sections | FAQ Items |
|-----------|:--------------:|:--------:|:---------:|
| Calculator + guide (like contributo-unificato) | 3000-4000 | 15-20 | 20-25 |
| Guide + reference (like interessi-legali) | 2000-3000 | 8-12 | 15-20 |

The target is always: **match or exceed the word count and section count of the top-ranking competitor.**

# Technical Fix: HTML Payload Size

Data: 2026-04-01
Pagina: `/calcolo-termini-impugnazione`
Severity: WARNING

---

## Problema

Il payload HTML iniziale della pagina è di **531 KB**, ben oltre la soglia raccomandata di **<200 KB**.

La causa principale è il **RSC flight data** di Next.js (React Server Components): l'albero dei componenti React viene serializzato come JSON inline in tag `<script>` all'interno dell'HTML. La pagina ha 15 sezioni editoriali, 8 tabelle, 18 FAQ, 14 normativa references e un calcolatore — tutto serializzato nel payload iniziale.

---

## Impatto

- **TTFB (Time to First Byte):** il server deve inviare 531 KB prima che il browser possa iniziare il rendering. Su connessioni lente (3G), questo aggiunge ~2-3 secondi.
- **LCP:** non direttamente impattato perché il contenuto è SSR e visibile prima del parsing JS, ma il download del documento è più lento.
- **INP:** non impattato (l'hydration è limitata al solo componente Calcolatore).
- **Core Web Vitals complessivi:** impatto moderato, principalmente su mobile con connessioni lente.

---

## Causa root

```
HTML totale: 531 KB
├── Contenuto visibile (SSR HTML): ~150 KB
├── RSC flight data (inline <script>): ~350 KB
└── CSS/meta/head: ~31 KB
```

Il flight data è ~66% del payload totale. Questo è un comportamento standard di Next.js 15 con App Router e non può essere facilmente ridotto senza modifiche architetturali.

---

## Opzioni di mitigazione

### Opzione A: Lazy loading delle sezioni deep-page (Effort: ALTO)

Caricare le sezioni profonde (Esempi Pratici, FAQ, Normativa, Fonti) tramite `React.lazy()` o un pattern di deferred loading. Ridurrebbe il payload iniziale di ~100-150 KB.

**Pro:** riduzione significativa del payload
**Contro:** le sezioni lazy-loaded non sarebbero nell'HTML iniziale per Googlebot, compromettendo la SEO (le FAQ e la normativa sono contenuto critico per il ranking).

**Verdetto:** NON consigliato per questa pagina. Il contenuto deve essere nel payload iniziale per SEO.

### Opzione B: Compressione server-side (Effort: BASSO)

Verificare che Vercel applichi Brotli/gzip compression. Con Brotli, 531 KB si comprime a ~80-100 KB nel trasferimento effettivo.

**Pro:** zero effort (Vercel lo fa di default)
**Contro:** il parsing lato browser avviene comunque su 531 KB decompresso

**Verdetto:** Già attivo su Vercel. Il problema è più nella dimensione parsing che nel trasferimento.

### Opzione C: Ridurre il contenuto serializzato (Effort: MEDIO)

Spostare i dati statici (tabelle, FAQ, normativa) da oggetti TypeScript importati a `JSON.parse()` inline o a file statici caricati a runtime. Questo riduce il flight data perché Next.js non serializza i dati nel payload RSC.

**Pro:** riduzione potenziale di ~100-200 KB di flight data
**Contro:** richiede refactoring del pattern di data import usato in tutte le pagine

**Verdetto:** possibile miglioramento futuro, ma richiede testing approfondito.

### Opzione D: Accettare lo status quo (Effort: ZERO)

531 KB è sopra la soglia raccomandata ma non è anomalo per pagine content-heavy con Next.js 15. Le pagine competitor (Andreani, StudioCataldi) hanno payload simili. Il contenuto è SSR, quindi l'utente vede la pagina prima che il JS venga eseguito.

**Pro:** nessun rischio di regressione
**Contro:** score tecnico leggermente penalizzato

**Verdetto:** approccio raccomandato per ora. Rivalutare se Core Web Vitals in produzione mostrano problemi reali (usare PageSpeed Insights dopo il deploy).

---

## Raccomandazione

**Accettare lo status quo** (Opzione D) e monitorare i Core Web Vitals in produzione tramite:
1. Google PageSpeed Insights dopo il deploy
2. Google Search Console → Core Web Vitals report (dopo indicizzazione)
3. Vercel Analytics (se abilitato)

Se i CWV in produzione risultano sotto soglia, valutare l'Opzione C come intervento mirato.

---

## Confronto con altre pagine del sito

| Pagina | Payload HTML | Note |
|---|---|---|
| `/calcolo-termini-impugnazione` | 531 KB | Pagina con più contenuto (15 sezioni, 18 FAQ) |
| `/calcolo-interessi-legali` | ~420 KB | Simile struttura, meno sezioni |
| `/contributo-unificato` | ~380 KB | Meno contenuto editoriale |
| `/calcolo-compenso` | ~350 KB | Meno sezioni, calcolatore più pesante |

Il problema è proporzionale alla quantità di contenuto e non è specifico di questa pagina. Un intervento architetturale impatterebe tutto il sito.

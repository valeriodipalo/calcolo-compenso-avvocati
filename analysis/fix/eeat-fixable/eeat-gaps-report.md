# E-E-A-T Gaps Report — avvocatotools.it

Data: 2026-04-01
Scope: site-wide, rilevato durante audit SEO di `/calcolo-termini-impugnazione`
E-E-A-T score attuale: ~76/100

---

## 1. No Named Author (CRITICAL per YMYL)

**Impatto stimato:** -10 punti E-E-A-T
**Categoria:** Experience + Expertise

### Problema
Tutte le pagine del sito mostrano `author: "Piattaforma Avvocati"` (Organization) nello schema Article JSON-LD. Non esiste un autore umano identificabile. Per contenuti YMYL (Your Money or Your Life) in ambito legale, le Quality Rater Guidelines di Google (aggiornate settembre 2025) richiedono esplicitamente autori identificabili con credenziali verificabili.

### Come si presenta attualmente
- Nessun byline visibile sulle pagine
- Schema Article `author` punta a un'Organization, non a una Person
- Nessuna pagina "Chi siamo" o profilo autore

### Fix proposto
1. **Creare un componente `AuthorBio`** da inserire in fondo a ogni pagina (prima del footer), con:
   - Nome dell'avvocato (es. "Avv. [Nome Cognome]")
   - Iscrizione all'Albo (es. "Iscritto all'Albo degli Avvocati di [Foro]")
   - Breve bio (2-3 righe)
   - Foto profilo (opzionale ma consigliato)
   - Link alla pagina profilo `/chi-siamo` o `/autore/[slug]`

2. **Aggiornare lo schema Article** in `src/lib/schema.tsx`:
   ```json
   "author": {
     "@type": "Person",
     "name": "Avv. [Nome Cognome]",
     "jobTitle": "Avvocato",
     "url": "https://www.avvocatotools.it/chi-siamo",
     "sameAs": ["https://www.linkedin.com/in/..."]
   }
   ```

3. **Creare pagina `/chi-siamo`** con:
   - Chi pubblica il sito
   - Metodologia editoriale
   - Processo di revisione dei contenuti
   - Credenziali del team

### File da modificare
- `src/lib/schema.tsx` — funzione `articleSchema()`, campo `author`
- `src/components/shared/` — nuovo componente `AuthorBio.tsx`
- `src/app/chi-siamo/page.tsx` — nuova pagina
- Ogni `page.tsx` di tool — inserire `<AuthorBio />`

### Prerequisiti
- Decisione su chi sia l'autore (persona reale con iscrizione all'Albo)
- Foto profilo
- Testo bio

---

## 2. No Contact Info / P.IVA (CRITICAL per trust + compliance legale)

**Impatto stimato:** -8 punti E-E-A-T
**Categoria:** Trustworthiness

### Problema
Il footer del sito non contiene alcuna informazione di contatto, P.IVA o riferimento legale. Questo viola sia le Quality Rater Guidelines (QRG sezione 4.3 — pagine di qualità devono avere un editore contattabile) sia la normativa italiana (D.Lgs. 196/2003 e successive modifiche) che impone la visualizzazione della P.IVA su siti commerciali.

### Elementi mancanti
- Email di contatto
- P.IVA / Codice Fiscale
- Sede legale / indirizzo
- Link a Privacy Policy
- Link a Cookie Policy
- Link a Termini di Servizio

### Fix proposto
1. **Aggiornare `SiteFooter.tsx`** aggiungendo una riga in fondo con:
   ```
   © 2026 Piattaforma Avvocati — P.IVA: [NUMERO] — [email]
   Privacy Policy | Cookie Policy | Termini di Servizio
   ```

2. **Creare le pagine legali:**
   - `/privacy-policy` — informativa privacy (GDPR)
   - `/cookie-policy` — uso dei cookie (Google Analytics presente)
   - `/termini-di-servizio` — condizioni d'uso del sito e dei calcolatori

3. **Aggiungere cookie banner** — il sito usa Google Analytics (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) ma non ha un cookie consent banner.

### File da modificare
- `src/components/shared/SiteFooter.tsx` — aggiungere info legali
- `src/app/privacy-policy/page.tsx` — nuova pagina
- `src/app/cookie-policy/page.tsx` — nuova pagina
- `src/app/termini-di-servizio/page.tsx` — nuova pagina
- `src/app/layout.tsx` — cookie consent banner (opzionale ma consigliato)

### Prerequisiti
- P.IVA del titolare
- Email di contatto
- Testo privacy policy (personalizzabile con generatori GDPR)
- Decisione su cookie banner (Iubenda, CookieYes, o custom)

---

## 3. No "Chi Siamo" / About Page (HIGH)

**Impatto stimato:** -3 punti E-E-A-T
**Categoria:** Authoritativeness

### Problema
Non esiste una pagina che spieghi chi pubblica il sito, quale sia la metodologia editoriale, o come vengano verificati i contenuti. Questo è un segnale di autorevolezza mancante, specialmente per contenuti YMYL.

### Fix proposto
Creare `/chi-siamo` con:
- Mission del progetto (strumenti legali gratuiti per professionisti)
- Chi c'è dietro (avvocato/team con credenziali)
- Metodologia: come vengono ricercati, scritti e verificati i contenuti
- Fonti utilizzate (Normattiva, Gazzetta Ufficiale, ecc.)
- Come contattare la redazione

### File da creare
- `src/app/chi-siamo/page.tsx`
- Aggiungere link nel footer

---

## 4. No Editorial Review Signal (WARNING)

**Impatto stimato:** -2 punti E-E-A-T
**Categoria:** Experience + Trustworthiness

### Problema
Le pagine non mostrano alcuna indicazione di revisione editoriale ("Verificato da...", "Revisionato il...", "Ultimo aggiornamento verificato da..."). Questo segnale è particolarmente importante per contenuti legali che possono diventare obsoleti con modifiche legislative.

### Fix proposto
Aggiungere al componente `ToolLayout` o `HeroSection` un badge visibile:
```
Ultimo aggiornamento: 1 aprile 2026 — Verificato dalla Redazione
```

### File da modificare
- `src/components/shared/HeroSection.tsx` o `ToolLayout.tsx`
- Ogni `ToolConfig` — aggiungere campo `lastVerified` o usare `updatedDate` esistente

---

## 5. No Practitioner Voice (WARNING)

**Impatto stimato:** -2 punti E-E-A-T
**Categoria:** Experience

### Problema
Il contenuto ha un tono enciclopedico uniforme. Mancano elementi che segnalino esperienza pratica diretta: aneddoti professionali, errori comuni visti nella prassi, consigli da professionista.

### Fix proposto
Aggiungere 2-3 callout "Nota pratica" nelle pagine, usando `AlertBox variant="info"`:
```
Nota pratica: nella prassi forense, l'errore più comune è dimenticare che la
sospensione feriale non si applica ai procedimenti cautelari e alle controversie
di lavoro, causando il deposito tardivo dell'atto.
```

### File da modificare
- Ogni `page.tsx` di tool — aggiungere AlertBox con note pratiche

---

## Priorità di implementazione

| # | Fix | Impatto E-E-A-T | Effort | Prerequisiti |
|---|---|---|---|---|
| 1 | Contact + P.IVA nel footer | +8 | Basso | P.IVA, email |
| 2 | Named author + bio | +10 | Medio | Avvocato identificabile |
| 3 | Pagina Chi Siamo | +3 | Medio | Testi |
| 4 | Privacy/Cookie/Termini | +3 (trust) | Medio | Testi legali |
| 5 | Editorial review badge | +2 | Basso | Nessuno |
| 6 | Practitioner voice notes | +2 | Basso | Nessuno |

**Stima impatto totale se tutto implementato:** E-E-A-T da ~76 a ~95/100

# Search Implementation Guide — avvocatotools.it

## Fase 1: Command Palette (COMPLETATA)

### Cosa e stato implementato

Una command palette (Cmd+K / Ctrl+K) che cerca tra tutti i tool live usando i dati gia presenti in `toolRegistry.ts`. Zero dipendenze esterne per l'indice di ricerca — i dati sono gia in memoria.

### Componenti creati/modificati

| File | Descrizione |
|------|-------------|
| `src/components/shared/SearchCommand.tsx` | Componente command palette basato su shadcn/ui `CommandDialog` |
| `src/components/ui/command.tsx` | shadcn Command component (cmdk wrapper) |
| `src/components/ui/dialog.tsx` | shadcn Dialog component (dipendenza di Command) |
| `src/components/ui/button.tsx` | shadcn Button component (dipendenza di Dialog) |
| `src/components/shared/Navbar.tsx` | Integrato: pill "Cerca..." apre la palette, shortcut Cmd+K |

### Come funziona

1. **Trigger**: Click sul pill "Cerca... ⌘K" nella navbar OPPURE shortcut `Cmd+K` / `Ctrl+K`
2. **Ricerca**: cmdk esegue fuzzy matching su: titolo, navLabel, descrizione, nome cluster
3. **Risultati**: Raggruppati per cluster (Compenso, Termini, Contributo, Danno, Interessi)
4. **Navigazione**: Click o Enter su un risultato naviga alla pagina del tool
5. **Mobile**: Il campo "Cerca uno strumento..." nel drawer apre la stessa palette

### Impatto performance

- **Bundle aggiuntivo**: ~5 KB (cmdk + radix dialog)
- **Index size**: 0 KB — usa i dati gia in memoria da toolRegistry
- **LCP impact**: Nessuno — il dialog e lazy (non renderizzato fino all'apertura)
- **CLS impact**: Nessuno — overlay modale, non modifica il layout

### Cosa cerca

- Titoli dei tool (es. "Calcolo Compenso Avvocato")
- Label di navigazione (es. "Compenso Avvocato")
- Descrizioni (primi 80 caratteri mostrati nei risultati)
- Nome del cluster (es. "Compenso e Fatturazione")

### Limiti della Fase 1

- NON cerca nel contenuto delle pagine (testo editoriale, FAQ, normativa)
- NON cerca tra i tool non ancora sviluppati
- La ricerca e client-side su dati statici — non scala oltre ~100 tool senza degradare la UX

---

## Fase 2: Pagefind Full-Text Search (DA IMPLEMENTARE quando >50 pagine)

### Perche Pagefind

- **Lazy-loaded chunks**: L'indice NON viene scaricato al caricamento della pagina. Viene scaricato solo quando l'utente cerca — e solo i chunk rilevanti alla query
- **Post-build automatico**: Pagefind legge l'HTML statico generato da Next.js e crea l'indice automaticamente
- **Zero backend**: Funziona interamente lato client, compatibile con Vercel/CDN
- **Scalabile**: Testato fino a 500.000 pagine. Per 50-200 pagine, payload tipico <100 KB

### Passi per l'implementazione

#### 1. Installare Pagefind

```bash
cd website/freetools
npm install -D pagefind
```

#### 2. Aggiungere il post-build script

In `package.json`:

```json
{
  "scripts": {
    "build": "next build",
    "postbuild": "npx pagefind --site .next --output-path public/pagefind"
  }
}
```

#### 3. Marcare il contenuto indicizzabile

In ogni pagina tool, aggiungere `data-pagefind-body` al contenuto principale:

```tsx
// In ToolLayout.tsx o nel page.tsx di ogni tool
<main data-pagefind-body>
  <h1>{title}</h1>
  {/* contenuto editoriale, FAQ, normativa */}
</main>
```

Per escludere sezioni specifiche (es. disclaimer, footer):

```tsx
<aside data-pagefind-ignore>
  <p>Disclaimer: questo strumento ha carattere meramente informativo...</p>
</aside>
```

#### 4. Aggiungere metadata per il filtraggio

```tsx
<main data-pagefind-body>
  <span data-pagefind-meta="cluster:Compenso Avvocato" />
  <span data-pagefind-meta="category:Strumenti Legali" />
  <h1>Calcolo Compenso Avvocato</h1>
  ...
</main>
```

#### 5. Creare il componente di ricerca Pagefind

```tsx
'use client';

import { useState, useEffect, useCallback } from 'react';

export function PagefindSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function loadPagefind() {
      if (typeof window.pagefind === 'undefined') {
        try {
          // @ts-expect-error — generato post-build
          const pf = await import(
            /* webpackIgnore: true */
            '/pagefind/pagefind.js'
          );
          window.pagefind = pf;
        } catch {
          // In dev, pagefind non esiste ancora
          window.pagefind = { search: async () => ({ results: [] }) };
        }
      }
    }
    loadPagefind();
  }, []);

  const handleSearch = useCallback(async (q: string) => {
    setQuery(q);
    if (window.pagefind && q.length > 1) {
      const search = await window.pagefind.search(q);
      const data = await Promise.all(
        search.results.slice(0, 10).map((r) => r.data())
      );
      setResults(data);
    } else {
      setResults([]);
    }
  }, []);

  // Renderizzare i risultati nel CommandDialog esistente
  // oppure in un componente dedicato
}
```

#### 6. Integrare con la command palette esistente

L'approccio consigliato e un ibrido:
- **Query corte (1-2 parole)**: usare cmdk con toolRegistry (istantaneo)
- **Query lunghe o senza risultati**: fallback su Pagefind (full-text, ~250ms)

Questo mantiene la velocita per le ricerche comuni e aggiunge il full-text per query specifiche.

### Stima dimensioni indice

| Contenuto indicizzato | Stima index size (gzip) |
|----------------------|------------------------|
| Solo titoli + descrizioni (50 pagine) | ~15-30 KB |
| Titoli + primi 500 parole (50 pagine) | ~50-80 KB |
| Full-text 2000-4000 parole (50 pagine) | ~150-300 KB |
| Full-text (100 pagine) | ~300-600 KB |

Con Pagefind, queste dimensioni sono distribuite in chunk — l'utente scarica solo i chunk rilevanti alla sua query.

### Core Web Vitals impact

| Metrica | Impatto |
|---------|---------|
| LCP | Nessuno — indice caricato on-demand |
| FID/INP | Minimo — parsing chunk distribuito nel tempo |
| CLS | Nessuno — overlay modale |

### Quando migrare

- Quando il sito supera **50 pagine live**
- Quando gli utenti cercano termini specifici nel contenuto (es. "art. 1284", "sospensione feriale") che non compaiono nei titoli
- Quando si aggiungono Guide e Tabelle (contenuto editoriale lungo)

---

## Confronto rapido

| | Fase 1 (cmdk) | Fase 2 (Pagefind) |
|---|---|---|
| **Cerca in** | Titoli, descrizioni, cluster | Tutto il contenuto HTML |
| **Index size** | 0 KB (dati in memoria) | ~100-300 KB (chunk on-demand) |
| **Latenza ricerca** | Istantanea | ~250ms prima query |
| **Setup** | Zero config | Post-build step |
| **Scala fino a** | ~50-100 tool | ~100.000+ pagine |
| **Dipendenze** | cmdk (gia installato) | pagefind (npm dev dep) |

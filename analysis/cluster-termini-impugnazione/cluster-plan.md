# Cluster Termini di Impugnazione — Piano Strategico

Data: 2026-04-01

## Architettura del Cluster

```
/calcolo-termini-impugnazione          ← PILLAR (LIVE)
  │
  ├── /opposizione-decreto-ingiuntivo  ← SATELLITE 1 (DA FARE — priorità alta)
  │
  └── /calcolo-termini-processuali     ← SATELLITE 2 (DA FARE — già in content-plan)
```

---

## Pagina 1: Pillar — `/calcolo-termini-impugnazione` (LIVE)

**Status:** Pubblicata 2026-04-01
**Primary KW:** calcolo termini impugnazione (1.300 SV, KD 5)
**Cluster SV totale:** ~3.000

**Scope:** Impugnazione di SENTENZE nel processo civile, amministrativo e tributario.
Copre: appello, cassazione, revocazione, opposizione di terzo.
Include: sospensione feriale, riforma Cartabia, impugnazione licenziamento, testamento, delibere condominiali, cartella esattoriale.

**Calcolatore:** Calcola scadenze per impugnazione sentenze (3 giurisdizioni × 4 tipi impugnazione).

**Gap identificati nella review (2026-04-01):**
- Il calcolatore NON copre: decreto ingiuntivo, decreto penale, provvedimenti PA
- L'articolo menziona decreto ingiuntivo solo in 1 paragrafo
- Decreto penale di condanna (880 SV) completamente assente
- Provvedimenti PA (80 SV) solo indiretti tramite sezione TAR

**Azioni future per il pillar:**
- Aggiungere decreto penale di condanna come sezione editoriale + opzione nel calcolatore
- Aggiungere provvedimenti PA (ricorso al TAR vs provvedimento) come sezione breve
- NON espandere troppo decreto ingiuntivo — ha il suo satellite dedicato

---

## Pagina 2: Satellite — `/opposizione-decreto-ingiuntivo` (DA FARE)

**Priorità:** ALTA — volume maggiore del pillar
**Primary KW:** opposizione decreto ingiuntivo (3.600 SV, KD 0)

### Keyword cluster completo

| Keyword | SV | KD | CPC | Intent |
|---|---|---|---|---|
| opposizione a decreto ingiuntivo | 3.600 | 0 | 0,51 | informational |
| opposizione decreto ingiuntivo | 3.600 | 0 | 0,51 | informational |
| calcolo termini opposizione decreto ingiuntivo | 1.300 | 19 | 0 | commercial |
| termine opposizione decreto ingiuntivo | 1.000 | 0 | 0 | informational |
| opposizione decreto ingiuntivo giudice di pace | 1.000 | 0 | 3,34 | informational |
| opposizione decreto penale di condanna | 880 | 0 | 0 | informational |
| contributo unificato opposizione decreto ingiuntivo | 880 | 0 | 0 | informational |
| **Cluster totale** | **~12.000+** | | | |

### Contenuto previsto
- Calcolatore dedicato: 40 gg (Italia), 50 gg (UE), 60 gg (extra-UE), abbreviato (min 10 gg)
- Art. 641, 644, 645, 647, 650 CPC
- Opposizione tempestiva vs tardiva (art. 650 CPC)
- Riforma Cartabia: cosa cambia per decreto ingiuntivo
- Contributo unificato per opposizione (cross-link alla nostra pagina CU)
- Giudice di pace vs tribunale
- Provvisoria esecutività e sospensione (art. 648-649 CPC)
- Iscrizione a ruolo: 5 gg dalla notifica (Cartabia)
- Esempi pratici di calcolo con sospensione feriale

### Perché pagina separata (non sezione del pillar)
1. **Intent diverso da impugnazione sentenze:** chi cerca "opposizione decreto ingiuntivo" vuole sapere il processo completo (non solo il termine), come opporsi, cosa succede se è tardiva, quanto costa (CU)
2. **Google mostra SERP dedicata:** i top 10 sono TUTTI pagine dedicate all'opposizione DI, nessuna è una pagina generica sulle impugnazioni
3. **Volume 3× superiore al pillar:** 3.600 vs 1.300 SV — assurdo relegarlo a una sezione
4. **Profondità richiesta:** servono ~3.000 parole solo per coprire adeguatamente il topic (opposizione tempestiva, tardiva, esecuzione provvisoria, Cartabia, CU, giudice di pace)
5. **Cross-link value:** la satellite linka al pillar e viceversa, rafforzando entrambe

### Competitor reference
- Andreani: copre via "termini processuali civili" (art. 641 nel dropdown del calcolatore generico)
- avvocatorecuperocrediti.it: pagina dedicata, rank #2 per "opposizione decreto ingiuntivo"
- youxta.com: pagina dedicata, rank #3
- studioassociatoborselli.it: guida completa, rank #5
- studiocataldi.it: guida con calcolatore, rank vario

---

## Pagina 3: Satellite — `/calcolo-termini-processuali` (DA FARE — già pianificata)

**Priorità:** MEDIA — volume altissimo ma progetto complesso
**Primary KW:** calcolo termini processuali (60.500 SV, KD 19, CPC 1,92)
**Già presente in content-plan.csv**

### Scope
Calcolatore generico per TUTTI i termini processuali civili (come il calcolatore di Andreani):
- Dropdown con tutti gli articoli CPC
- Calcolo a giorni (ex numeratio dierum) e a mesi (ex nominatione dierum)
- Termini liberi
- Calcolo a ritroso
- Include: memorie (171-ter), esecuzioni (480 ss.), iscrizione ruolo (165), a comparire (163-bis), ecc.

### Relazione con il cluster
- Cross-linka al pillar (impugnazione sentenze)
- Cross-linka alla satellite 1 (opposizione DI)
- Cattura il mega-keyword "calcolo termini processuali" (60.500 SV) che al momento va tutto ad Andreani

### Note
Questo è un progetto significativamente più grande: richiede un database completo di tutti i termini CPC, sia vecchio rito che nuovo rito (Cartabia). Andreani ha 5.166 recensioni su questa pagina — è il suo strumento più popolare.

---

## Cross-linking plan

```
Pillar (/calcolo-termini-impugnazione)
  ↔ "Per l'opposizione a decreto ingiuntivo, vedi il nostro calcolatore dedicato"
  ↔ "Per altri termini processuali civili, vedi il calcolatore generico"

Satellite 1 (/opposizione-decreto-ingiuntivo)
  ↔ "Per impugnare una sentenza (appello, cassazione), vedi il calcolatore impugnazioni"
  ↔ "Per il contributo unificato dell'opposizione, vedi il nostro calcolatore CU"

Satellite 2 (/calcolo-termini-processuali)
  ↔ "Per i termini specifici delle impugnazioni, vedi il calcolatore dedicato"
  ↔ "Per l'opposizione a decreto ingiuntivo, vedi la guida completa"
```

---

## Cronologia suggerita

1. **Ora:** Ottimizzare il pillar (SEO audit, fix, publish)
2. **Prossimo:** `/opposizione-decreto-ingiuntivo` — il satellite con più volume
3. **Futuro:** `/calcolo-termini-processuali` — il mega-progetto

---

## Dati fonte

- DataForSEO keyword_suggestions (2026-04-01): "impugnazione decreto", "impugnazione sentenza", "opposizione decreto", "impugnazione provvedimento amministrativo"
- SERP analysis per "calcolo termini impugnazione", "termini appello civile", "ricorso cassazione termini", "termini impugnazione decreto ingiuntivo"
- Analisi contenuto Andreani (content parsing 2026-04-01)
- Confronto strategico in: `analysis/calcolo-termini-processuali-vs-impugnazione/analysis.md`

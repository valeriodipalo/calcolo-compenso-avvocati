# Research Brief: Compenso Avvocato Penale

**Date**: 2026-05-18
**Bridge document**: raw-research → page implementation
**Companion files**: [raw-research.md](raw-research.md) (primary content source), [keyword-strategy.md](keyword-strategy.md), [competitor-analysis.md](competitor-analysis.md)

---

## Normativa Principale (verified)

| Norma | URL Normattiva / GU | Articoli rilevanti per il penale |
|---|---|---|
| L. 31/12/2012 n. 247 (Nuova disciplina ordinamento professione forense) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247 | art. 13 c. 4 (preventivo scritto), art. 13 c. 6 (delega parametri biennali) |
| D.M. Giustizia 10/3/2014 n. 55 (parametri originari) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55 | art. 1 (ambito), art. 2 (spese generali 15%), art. 8 (pluralità imputati penale), art. 12 (criteri penali e aumenti/riduzioni ±50%), art. 15 e 27 (trasferte), Tabella 15 (compensi penali) |
| D.M. Giustizia 8/3/2018 n. 37 (correttivo) | GU n. 99 del 27/4/2018 | sostituisce "di regola" con "in ogni caso" agli artt. 4 c.1, 12 c.1, 19 c.1 → limiti inderogabili |
| **D.M. Giustizia 13/8/2022 n. 147 (aggiornamento +50%)** | https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG | aggiornamento tutti i valori +50%, art. 22-bis (compenso orario), in vigore dal 23/10/2022 |
| DPR 30/5/2002 n. 115 (T.U. spese di giustizia) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115 | art. 76 (reddito gratuito patrocinio), art. 82-83 (liquidazione compensi), art. 91 (penale), **art. 106-bis (riduzione 1/3 penale)**, art. 130 (riduzione 1/2 civile) |
| L. 11/2/1992 n. 141 (Cassa Forense) | https://www.cassaforense.it/media/pesdgu5n/27-legge-11-febbraio-1992-n-141.pdf | art. 11 (CPA 4%) |
| DPR 26/10/1972 n. 633 (IVA) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633 | art. 15 (spese non imponibili), art. 22 (operazioni non imponibili) |
| DPR 29/9/1973 n. 600 (Ritenute) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600 | art. 25 (ritenuta d'acconto 20%) |
| D.M. Interno 8/1/2024 (aggiornamento reddito gratuito patrocinio) | GU n. 31/2024 | **€ 12.838,01** limite reddito 2024-2026 |

---

## Tabella 15 D.M. 147/2022 — Dati Strutturati per Calcolatore

**Schema TypeScript proposto**:

```typescript
type Competenza = {
  id: string;
  nome: string;
  fasi: {
    studio: { min: number; med: number; max: number } | null;
    introduttiva: { min: number; med: number; max: number } | null;
    istruttoria: { min: number; med: number; max: number } | null;
    decisionale: { min: number; med: number; max: number } | null;
  };
};
```

**Note**: alcune fasi non sono previste per certe competenze (Indagini difensive ha solo Studio + Istruttoria; Magistrato di Sorveglianza non ha Istruttoria; Cassazione non ha Istruttoria, ecc.).

### Dati completi (14 competenze) — valori medi e min/max

| # | Competenza | Studio M | Introd. M | Istrutt. M | Decis. M | **Totale M** | **Totale Min** | **Totale Max** |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | Giudice di Pace (penale) | 378 | 473 | 756 | 662 | **2.269** | 1.134,50 | 3.403,50 |
| 2 | Indagini preliminari | 851 | 662 | 1.040 | 1.229 | **3.782** | 1.891,00 | 5.673,00 |
| 3 | Indagini difensive | 851 | — | 1.418 | — | **2.269** | 1.134,50 | 3.403,50 |
| 4 | Cautelari personali | 378 | 1.229 | — | 1.418 | **3.025** | 1.512,50 | 4.537,50 |
| 5 | Cautelari reali | 378 | 1.229 | — | 1.418 | **3.025** | 1.512,50 | 4.537,50 |
| 6 | GIP / GUP | 851 | 919 | 1.418 | 1.418 | **4.606** | 2.303,00 | 6.909,00 |
| 7 | Tribunale Monocratico | 473 | 567 | 1.134 | 1.418 | **3.592** | 1.796,00 | 5.388,00 |
| 8 | Tribunale Collegiale | 473 | 756 | 1.418 | 1.418 | **4.065** | 2.032,50 | 6.097,50 |
| 9 | Corte di Assise | 756 | 1.418 | 2.363 | 2.835 | **7.372** | 3.686,00 | 11.058,00 |
| 10 | Tribunale di Sorveglianza | 473 | 945 | 1.418 | 1.418 | **4.254** | 2.127,00 | 6.381,00 |
| 11 | Magistrato di Sorveglianza | 315 | 378 | — | 945 | **1.638** | 819,00 | 2.457,00 |
| 12 | Corte di Appello | 473 | 945 | 1.418 | 1.418 | **4.254** | 2.127,00 | 6.381,00 |
| 13 | Corte di Assise di Appello | 756 | 1.985 | 2.268 | 2.336 | **7.345** | 3.672,50 | 11.017,50 |
| 14 | Corte di Cassazione | 945 | 2.646 | — | 2.741 | **6.332** | 3.166,00 | 9.498,00 |

**Sorting (alfa→complessità)**: Giudice di Pace → Indagini preliminari → Indagini difensive → Cautelari (personali/reali) → GIP/GUP → Tribunale (monocratico/collegiale) → Corte di Assise → Sorveglianza (Magistrato + Tribunale) → Corte di Appello → Corte di Assise di Appello → Corte di Cassazione

**Convalida dell'arresto**: **NON** è una voce autonoma della Tabella 15. Per CNF Parere 18/2025, si applica la voce **Indagini preliminari** (fascia medio-alta) → trattato in sezione editoriale + FAQ, NON come opzione calcolatore.

---

## Le 4 Fasi — Testo Verbatim art. 12 c. 3 D.M. 55/2014 (estratto Andreani)

### Fase di Studio (compresa l'attività investigativa)
> *L'esame e studio degli atti, le ispezioni dei luoghi, la iniziale ricerca di documenti, le consultazioni con il cliente, i colleghi o i consulenti, le relazioni o i pareri, scritti o orali, che esauriscano l'attività e sono resi in momento antecedente alla fase introduttiva.*

### Fase Introduttiva del Giudizio
> *Gli atti introduttivi quali esposti, denunce querele, istanze richieste dichiarazioni, opposizioni, ricorsi, impugnazioni, memorie, intervento del responsabile civile e la citazione del responsabile civile.*

### Fase Istruttoria o Dibattimentale
> *Le richieste, gli scritti, le partecipazioni o assistenze relative ad atti ed attività istruttorie procedimentali o processuali anche preliminari, rese anche in udienze pubbliche o in camera di consiglio, che sono funzionali alla ricerca di mezzi di prova, alla formazione della prova, comprese liste, citazioni e le relative notificazioni, l'esame dei consulenti, testimoni, indagati o imputati di reato connesso o collegato.*

### Fase Decisionale
> *Le difese orali o scritte, le repliche, l'assistenza alla discussione delle altre parti processuali sia in camera di consiglio che in udienza pubblica.*

---

## Aumenti e Riduzioni (per il calcolatore)

### Aumenti automatici/manuali
1. **Pluralità imputati/parti** (art. 8 D.M. 55/2014):
   - 2-10 parti: +20% × (numero parti − 1), fino a +180% per 10 parti
   - 11-20 parti: ulteriore +5% per ciascuna parte oltre la 10ª
   - Calcolatore: slider numero parti (1-20), aumento auto-calcolato
2. **Valutazione soggettiva** (art. 12 c. 1, "in ogni caso" ± 50%):
   - Slider da 0% a +50%
3. **Atti telematici navigabili** (art. 4 c. 1-bis, opzionale): +30% extra

### Riduzioni
1. **Gratuito patrocinio penale**: -1/3 (33,33%) — art. 106-bis DPR 115/2002 (calcolatore: toggle che applica -33,33% al subtotale compenso, NON sugli accessori CPA/IVA)
2. **Valutazione soggettiva negativa**: 0% a -50%
3. **Inammissibilità/improcedibilità** (art. 4 c. 9): -50%

### Logica del calcolatore (ordine di applicazione)
```
1. Sommare i compensi medi per fase selezionata
2. Applicare valutazione soggettiva (±%) al subtotale fasi
3. Applicare aumento pluralità imputati al subtotale dopo step 2
4. Applicare riduzione gratuito patrocinio penale (-1/3) al subtotale dopo step 3
5. Aggiungere spese di trasferta (imponibili)
6. Aggiungere spese generali (15% del subtotale compenso al netto delle spese)
7. Calcolare CPA 4% sull'imponibile (compenso + spese generali + spese trasferta)
8. Calcolare IVA 22% su (imponibile + CPA)
9. Sottrarre ritenuta d'acconto 20% (su compenso + spese generali + spese trasferta)
10. Aggiungere spese esenti (non imponibili)
```

---

## Gratuito Patrocinio Penale — Dati Critici 2026

- **Limite di reddito**: € 12.838,01 (D.M. 8/1/2024, GU n. 31/2024) — aumentato di € 1.032,91 per familiare convivente
- **Articolo riduzione**: art. 106-bis DPR 115/2002 → riduzione **1/3** (NON 1/2 come nel civile)
- **Procedura**: domanda al Consiglio dell'Ordine, ammissione anticipata art. 96 DPR 115/2002, liquidazione finale, pagamento Erario
- **Avvocato d'ufficio**: art. 97 cpp — pagato dall'imputato; se ammesso al GP, paga lo Stato
- **CNF Parere 18/2025** sulla convalida dell'arresto: applicare "Indagini preliminari" fascia medio-alta

---

## Editorial Content — Passaggi da Riusare nel Page Body

### Storia normativa (da raw-research §1)
"L'abrogazione delle tariffe professionali non fu un evento improvviso, ma il culmine di un processo iniziato nel 2006 con il decreto-legge 4 luglio 2006, n. 223 (Decreto Bersani), convertito nella legge 4 agosto 2006, n. 248. Quest'ultimo provvedimento, pur non abolendo del tutto le tariffe, ne aveva già limitato significativamente la portata, introducendo la possibilità di pattuire compensi diversi da quelli tariffari. La successiva legge 24 marzo 2012, n. 27 (Liberalizzazioni) abolì le tariffe professionali per le professioni regolamentate. L'attuale sistema dei parametri nacque formalmente con il D.M. 20 luglio 2012, n. 140, rapidamente sostituito dal D.M. 10 marzo 2014, n. 55."

### Differenza penale vs civile per gratuito patrocinio (da supplementary research)
"Una differenza spesso ignorata anche dai professionisti: nel processo penale la riduzione del compenso per il gratuito patrocinio è di **un terzo** (33,33%), e non del 50% come nel civile. La regola è contenuta nell'art. 106-bis del DPR 115/2002, introdotto dall'art. 1 c. 607 L. 234/2021 e coordinato con la riforma Cartabia. Per i giudizi civili, amministrativi e tributari resta invece in vigore l'art. 130 DPR 115/2002 (-50%)."

### Cassazione 29925/2025 (da raw-research §Orientamenti)
"La Corte di Cassazione, con ordinanza n. 29925 del 12 novembre 2025, ha stabilito che i valori minimi tabellari hanno carattere inderogabile e non possono essere ulteriormente ridotti, neppure sulla base di una valutazione discrezionale del giudice. Il sistema dei parametri non è mero strumento tecnico, ma esprime una valutazione politico-legislativa circa il giusto compenso spettante all'avvocato, funzionale alla tutela del diritto di difesa."

### Convalida arresto (da supplementary)
"La Tabella 15 del D.M. 147/2022 non prevede una voce autonoma per la convalida dell'arresto. Il CNF, con Parere n. 18 del 27 marzo 2025, ha chiarito che si applicano i parametri della voce 'Indagini preliminari', collocando l'attività verso la fascia medio-alta dei valori tabellari, specie in presenza di reati gravi o complessità sulla legittimità dell'arresto."

### NOTA IMPORTANTE — Andreani obsoleto
Il sito di riferimento Andreani recita ancora "di regola, conferisce alle variazioni in aumento e in diminuzione carattere assolutamente non vincolante", ma questa indicazione è OBSOLETA dopo il D.M. 37/2018 che ha sostituito "di regola" con "in ogni caso", rendendo i limiti inderogabili. Questo è un punto cruciale di differenziazione editoriale per la nostra pagina.

---

## FAQ Items (target: 20-25, organizzati in 6 categorie)

### Categoria: Calcolo e Importi (5 items)
1. **Come si calcola la parcella di un avvocato penalista?**
   La parcella si calcola sommando i valori delle 4 fasi del procedimento (Studio, Introduttiva, Istruttoria/Dibattimentale, Decisionale) previsti dalla Tabella 15 del D.M. 147/2022 per la specifica competenza giudiziale (Giudice di Pace, Tribunale, Corte d'Appello, Cassazione, ecc.). Sul totale si applicano eventuali aumenti (numero parti, valutazione soggettiva) o riduzioni (gratuito patrocinio -1/3, inammissibilità -50%). Si aggiungono poi le spese generali (15%), le spese imponibili e non imponibili, la CPA (4%), l'IVA (22%) e si sottrae la ritenuta d'acconto (20%) se il cliente è sostituto d'imposta.
   **Fonti**: art. 12 c. 3 D.M. 55/2014, D.M. 147/2022 Tabella 15

2. **Quanto costa in media un avvocato penalista per un processo davanti al Tribunale Monocratico?**
   Per un procedimento penale ordinario davanti al Tribunale Monocratico, applicando i valori medi della Tabella 15 D.M. 147/2022, la parcella è di circa **€ 3.592** (somma delle 4 fasi medie: 473 + 567 + 1.134 + 1.418), oltre spese generali 15%, CPA 4%, IVA 22%. Il range varia tra € 1.796 (minimi) e € 5.388 (massimi), prima dei singoli aumenti per pluralità imputati o valutazione soggettiva.
   **Fonti**: D.M. 147/2022 Tabella 15, art. 2 D.M. 55/2014

3. **Qual è il compenso massimo per un avvocato penalista in Corte di Cassazione?**
   Per un ricorso davanti alla Corte Suprema di Cassazione in materia penale, il valore massimo della Tabella 15 D.M. 147/2022 è di **€ 9.498** (medio totale € 6.332). La Cassazione penale prevede solo le fasi di Studio (max € 1.417,50), Introduttiva (max € 3.969,00) e Decisionale (max € 4.111,50), poiché la fase istruttoria non è prevista in sede di legittimità.
   **Fonti**: Tabella 15 D.M. 147/2022

4. **Come si calcolano gli aumenti per pluralità di imputati?**
   L'art. 8 del D.M. 55/2014 prevede un aumento del **20% per ogni parte/imputato oltre il primo**, fino a un massimo di 10 imputati (aumento cumulativo +180%). Per imputati dall'11° al 20° si applica un ulteriore +5% per ciascuno. Esempio: difesa di 3 imputati = +40% sul compenso base; difesa di 10 imputati = +180%.
   **Fonti**: art. 8 D.M. 55/2014, modificato dal D.M. 147/2022

5. **Il giudice può ridurre la parcella sotto il minimo tabellare?**
   No. La Cassazione, con ordinanza n. 29925 del 12 novembre 2025, ha confermato che i valori minimi tabellari sono inderogabili: il giudice non può scendere sotto il minimo nemmeno con una valutazione discrezionale. Questa rigidità deriva dalla modifica introdotta dal D.M. 37/2018, che ha sostituito l'espressione "di regola" con "in ogni caso" all'art. 12 c. 1 D.M. 55/2014.
   **Fonti**: Cass. ord. 29925/2025, D.M. 37/2018, art. 12 D.M. 55/2014

### Categoria: Normativa (4 items)
6. **Cos'è il D.M. 55/2014 e cosa ha cambiato il D.M. 147/2022?**
7. **I parametri forensi sono vincolanti tra avvocato e cliente?**
8. **Quando si applicano i nuovi parametri del 2022 invece dei vecchi?**
9. **Cos'è la riforma dell'ordinamento forense 2025-2026?**

### Categoria: Spese e Accessori (4 items)
10. **Cosa sono le spese generali al 15%?**
11. **Cos'è la CPA al 4% e come si calcola?**
12. **Quando si applica la ritenuta d'acconto al 20%?**
13. **In regime forfettario come si fattura la parcella penale?**

### Categoria: Gratuito Patrocinio (4 items)
14. **Chi può accedere al gratuito patrocinio nel processo penale 2026?**
15. **Di quanto si riduce la parcella con il gratuito patrocinio penale? (1/3 vs 1/2)**
16. **L'avvocato d'ufficio penale va sempre pagato?**
17. **Qual è il limite di reddito 2026 per il gratuito patrocinio?**

### Categoria: Casi Particolari (5 items)
18. **Come si calcola il compenso nel giudizio abbreviato o nel patteggiamento?**
19. **Quanto si paga per la convalida dell'arresto?**
20. **Come si calcola il compenso nelle indagini difensive?**
21. **Quanto costa l'avvocato penalista nei procedimenti davanti al Magistrato di Sorveglianza?**
22. **Come si liquida il compenso al difensore di più imputati nello stesso processo?**

### Categoria: Preventivo e Pagamento (3 items)
23. **Il preventivo scritto è obbligatorio per l'avvocato penalista?**
24. **In quanto tempo si prescrive il compenso dell'avvocato penalista?**
25. **Cosa succede se l'avvocato non emette il preventivo?**

---

## Section-to-Research Mapping (mandatory)

| Page Section | Raw Research Sections to Use | Key Data Points |
|---|---|---|
| Hero + Calculator | §Tabella 15, §Aumenti/Riduzioni | Tutti i valori 14 competenze, art. 8, art. 12, art. 106-bis |
| "Come si calcola — Le 4 fasi" | §Le 4 Fasi (verbatim) | art. 12 c. 3 D.M. 55/2014 |
| "Tabella 15 D.M. 147/2022" | §Struttura tabella 15 | 14 competenze, valori min/med/max |
| "Range compensi medi 2026" | §Tabella, §Andreani structure | Totali medi tutte competenze |
| "Aumenti e Riduzioni" | §Aumenti, §Riduzioni | art. 8 (+20%/parte), art. 12 c. 1 (±50%), art. 4 c. 1-bis (+30%), Cass. 29925/2025 |
| "Gratuito Patrocinio" | §Gratuito patrocinio, supplementary | art. 106-bis (-1/3), art. 130 (-1/2 civile), D.M. 8/1/2024 reddito, art. 76 DPR 115/2002 |
| "Spese e Accessori" | §Spese, §Andreani note 15% | art. 2 c. 2 (15%), art. 15 e 27 (trasferte), art. 11 L. 141/1992 (CPA), DPR 633/72 (IVA), art. 25 DPR 600/73 (ritenuta) |
| "Avvocato d'ufficio vs fiducia" | §Casi Particolari | art. 97 cpp, art. 96 DPR 115/2002 |
| "Riti speciali" | §Casi Particolari | art. 438 cpp (abbreviato), art. 444 cpp (patteggiamento), art. 459 cpp (decreto penale), art. 168-bis c.p. (MAP) |
| "Convalida arresto" | §Convalida (supplementary) | CNF Parere 18/2025, Indagini preliminari fascia medio-alta |
| "Cassazione recente" | §Orientamenti | Cass. 29925/2025, Cass. 33482/2022, Corte Cost. 16/2025 |
| "Errori comuni" | §Errori Comuni | 8 errori principali |
| "Riforma 2026" | §Riforma | DDL Delega 4/9/2025 |
| "Normativa" | §Normativa Principale | Tutti gli URL Normattiva |
| "FAQ" | §FAQ Items | 25 items in 6 categorie |
| "Fonti e Riferimenti" | §Fonti raw-research | 24 fonti istituzionali |

---

## Verification Checklist

- [x] Limite reddito gratuito patrocinio: € 12.838,01 (D.M. 8/1/2024 GU n. 31/2024) ✅
- [x] Riduzione gratuito patrocinio penale: 1/3 ex art. 106-bis ✅ (verified via supplementary)
- [x] Riduzione gratuito patrocinio civile: 1/2 ex art. 130 ✅
- [x] Aumento pluralità imputati: +20% × (n-1) per le prime 10, +5% per le successive ✅
- [x] CPA 4% ✅
- [x] IVA 22% ✅
- [x] Ritenuta 20% ✅
- [x] Spese generali 15% ✅
- [x] D.M. 147/2022 in vigore dal 23/10/2022 ✅
- [x] Compenso orario art. 22-bis: €200-€500/ora ✅
- [x] Tabella 15 — 14 competenze identificate ✅
- [x] Convalida arresto: NON voce separata, applica Indagini preliminari (CNF Parere 18/2025) ✅
- [x] Cassazione 29925/2025 sulla inderogabilità minimi ✅

**Verified by**: cross-check between Perplexity deep research + Perplexity supplementary + on_page_content_parsing di Andreani + competitor sources.

**Unresolved** [VERIFY]: nessuno — tutti i dati strutturali sono coerenti tra le fonti.

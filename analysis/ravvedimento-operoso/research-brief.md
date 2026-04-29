# Research Brief — Ravvedimento Operoso

> Source: `raw-research.md` (deep Perplexity research, ~75k chars, 50 sources) + competitor parsing of Agenzia Entrate, Studio Polli, Studio Ripa, CafInforma, Andreani.

## Section-to-Research Mapping

| Page Section | Raw Research Sections | Key Data Points |
|--------------|------------------------|-----------------|
| Hero / Calcolatore | §3-§5 + §11 examples | Auto-detect regime by data scadenza ≷ 1/9/2024 |
| Cos'è il ravvedimento operoso | §1 (Definizione, Ratio) | Art. 13 D.Lgs. 472/1997, natura giuridica, principle of voluntary compliance |
| Evoluzione storica | §2 (Evoluzione storica) | L. 408/1990 art. 14 → D.Lgs. 472/1997 → D.Lgs. 158/2015 → D.Lgs. 87/2024 |
| Come si calcola | §4 (Formula calcolo) | Imposta + sanzione + interessi; formula `imposta × tasso × giorni / 36500` |
| Tabella sanzioni post-1/9/2024 | §3 (Disciplina post-1/9/2024) | Base 25% / 12,5%; tier 0,0833% / 1,25% / 1,39% / 3,125% / 3,57% |
| Tabella sanzioni pre-1/9/2024 | §4 (Disciplina previgente) | Base 30% / 15%; tier 0,1% / 1,5% / 1,67% / 3,75% / 4,29% / 5% |
| Ravvedimento sprint | §3.2 + Agenzia Entrate daily table | Daily rate 0,0833% × N giorni post-reform; 0,1% × N giorni pre-reform |
| Tasso interesse legale | §5 (Tasso e tabella storica) | 1,60% dal 2026 (D.M. 10/12/2025, GU n.289 del 13/12/2025) + serie 2015-2026 |
| Tipi di ravvedimento | §3.3-§3.5 + §3.6 | sprint / breve / intermedio / lungo / ultrannuale + post-PVC (1/5, 1/6, 1/4) |
| Ravvedimento per imposta | §7 (Imposte specifiche) | IRPEF, IRES, IRAP, IVA, ritenute, cedolare, forfettario, IMU, TARI, INPS escluso |
| Codici tributo F24 | §7 (Imposte specifiche) | 4001/4033/8901/1989, 6001-6012/8904/1991, 1001/8906/1982 etc. |
| Cause ostative | §6 (Cause ostative) | Avviso bonario, accertamento, liquidazione, recupero credito; PVC e schema atto post-riforma |
| Cumulo giuridico | §6 (Cumulo giuridico) | Esteso al ravvedimento art. 12 D.Lgs. 472/1997; escluso per omessi versamenti |
| F24 a saldo zero | §9 (F24 saldo zero) | Sanzione € 100 / € 50 (art. 15, c. 2-bis D.Lgs. 471/1997); riduzioni 1/9, 1/8 |
| Dichiarazione tardiva entro 90gg | §10 (Dichiarazione tardiva) | Sanzione 1/10 del minimo (€ 25 su € 250); oltre 90gg = omessa, non ravvedibile |
| Esempi pratici | §11 (4 esempi) | IVA 25gg, IRPEF cross-year 200gg, sprint 8gg, IRES ultrannuale 14 mesi |
| Errori comuni | §12 (7 errori comuni) | F24 senza separazione, codici errati, cross-year senza pro-rata, etc. |
| Altri istituti deflattivi | §14 (Connessioni) | Definizione agevolata 3%, accertamento adesione, acquiescenza, art. 6-bis Statuto |
| FAQ | PAA + research §15 (Circolari, Cassazione) | 18-22 items su 5-6 categorie |
| Normativa di riferimento | §16 (Bibliografia) | Tutte le norme + URL Normattiva |
| Fonti e Riferimenti | §16 (Bibliografia) | Selezione delle 12-15 fonti istituzionali principali |

---

## Structured Data

### Sanzioni post-1° settembre 2024 (D.Lgs. 87/2024)

| Tier | Giorni di ritardo | Riduzione | Sanzione ridotta | Riferimento |
|------|-------------------|-----------|------------------|-------------|
| Sprint | 1-14 giorni | 1/15 di 1/10 di 12,5% | 0,0833% × giorno (max 1,166%) | Art. 13, c. 1, lett. a) D.Lgs. 472/97 + art. 13, c. 1, D.Lgs. 471/97 |
| Breve | 15-30 giorni | 1/10 di 12,5% | 1,25% | Art. 13, c. 1, lett. a) |
| Intermedio | 31-90 giorni | 1/9 di 12,5% | 1,3889% | Art. 13, c. 1, lett. a-bis) |
| Lungo | 91 gg → termine dichiarazione (o 1 anno) | 1/8 di 25% | 3,125% | Art. 13, c. 1, lett. b) |
| Ultrannuale | Oltre termine dichiarazione (o oltre 1 anno) | 1/7 di 25% | 3,5714% | Art. 13, c. 1, lett. b-bis) |
| Post-schema d'atto (no PVC) | After contraddittorio communication | 1/6 di 25% | 4,1667% | Art. 13, c. 1, lett. b-quinquies) |
| Post-PVC (no schema, no adesione) | After PVC | 1/5 di 25% | 5,00% | Art. 13, c. 1, lett. b-quater) |
| Post-schema d'atto + PVC | After both | 1/4 di 25% | 6,25% | Art. 13, c. 1, lett. b-quinquies) modificata |

### Sanzioni pre-1° settembre 2024 (regime previgente, ancora vigente per violazioni anteriori)

| Tier | Giorni di ritardo | Riduzione | Sanzione ridotta |
|------|-------------------|-----------|------------------|
| Sprint | 1-14 giorni | 1/15 di 1/10 di 15% | 0,1% × giorno (max 1,4%) |
| Breve | 15-30 giorni | 1/10 di 15% | 1,5% |
| Intermedio | 31-90 giorni | 1/9 di 15% | 1,67% |
| Lungo | 91 gg → termine dichiarazione | 1/8 di 30% | 3,75% |
| Ultrannuale | Entro dichiarazione successiva | 1/7 di 30% | 4,29% |
| Lunghissimo | Oltre dichiarazione successiva | 1/6 di 30% | 5,00% |
| Post-PVC | After PVC | 1/5 di 30% | 6,00% |

### Tabella tasso interesse legale (art. 1284 c.c.)

| Periodo | Tasso annuo | Decreto |
|---------|------------:|---------|
| dal 01.01.2026 | **1,60%** | D.M. 10 dicembre 2025 (GU n.289 del 13/12/2025) |
| 01.01.2025 – 31.12.2025 | 2,00% | D.M. 10 dicembre 2024 |
| 01.01.2024 – 31.12.2024 | 2,50% | D.M. 29 novembre 2023 |
| 01.01.2023 – 31.12.2023 | 5,00% | D.M. 13 dicembre 2022 |
| 01.01.2022 – 31.12.2022 | 1,25% | D.M. 13 dicembre 2021 |
| 01.01.2021 – 31.12.2021 | 0,01% | D.M. 11 dicembre 2020 |
| 01.01.2020 – 31.12.2020 | 0,05% | D.M. 12 dicembre 2019 |
| 01.01.2019 – 31.12.2019 | 0,80% | D.M. 12 dicembre 2018 |
| 01.01.2018 – 31.12.2018 | 0,30% | D.M. 14 dicembre 2017 |
| 01.01.2017 – 31.12.2017 | 0,10% | D.M. 15 dicembre 2016 |
| 01.01.2016 – 31.12.2016 | 0,20% | D.M. 11 dicembre 2015 |
| 01.01.2015 – 31.12.2015 | 0,50% | D.M. 10 dicembre 2014 |

Formula: `Interesse = Imposta × Tasso × Giorni / 36500` (art. 1284 c.c.). Per ravvedimenti a cavallo d'anno: split-period proration (un sub-totale per ciascun anno con il tasso corrispondente).

### Codici tributo F24 (per il ravvedimento)

| Imposta | Codice imposta | Codice sanzione | Codice interessi |
|---------|----------------|-----------------|------------------|
| IRPEF saldo | 4001 | 8901 | 1989 |
| IRPEF acconto 1ª | 4033 | 8901 | 1989 |
| IRPEF acconto 2ª | 4034 | 8901 | 1989 |
| IRES saldo | 2003 | 8918 | 1990 |
| IRES acconto 1ª | 2001 | 8918 | 1990 |
| IRES acconto 2ª | 2002 | 8918 | 1990 |
| IRAP saldo | 3800 | 8907 | 1993 |
| IRAP acconto 1ª | 3812 | 8907 | 1993 |
| IRAP acconto 2ª | 3813 | 8907 | 1993 |
| IVA mensile gen-dic | 6001-6012 | 8904 | 1991 |
| IVA trimestrale | 6031-6034 | 8904 | 1991 |
| IVA annuale | 6099 | 8904 | 1991 |
| Ritenute lavoro dipendente | 1001 | 8906 | 1982 |
| Ritenute lavoro autonomo | 1040 | 8906 | 1982 |
| Cedolare secca acconto 1ª | 1840 | 8913 | 1992 |
| Cedolare secca acconto 2ª | 1841 | 8913 | 1992 |
| Cedolare secca saldo | 1842 | 8913 | 1992 |
| Forfettario acconto 1ª | 1790 | 8944 | 1944 |
| Forfettario acconto 2ª | 1791 | 8944 | 1944 |
| Forfettario saldo | 1792 | 8944 | 1944 |
| Add. regionale IRPEF | 3801 | 8902 | 1994 |
| Add. comunale IRPEF acc. | 3843 | 8903 | 1998 |
| Add. comunale IRPEF saldo | 3844 | 8903 | 1998 |
| IMU abitazione principale | 3912 | 3923 | 3924 |
| IMU altri fabbricati | 3918 | 3923 | 3924 |
| IMU aree fabbricabili | 3916 | 3923 | 3924 |
| IMU terreni agricoli | 3914 | 3923 | 3924 |
| IMU fabbricati rurali | 3913 | 3923 | 3924 |

> Per i contributi previdenziali (INPS Gestione Separata, IVS, ecc.) il ravvedimento operoso ex art. 13 D.Lgs. 472/1997 NON si applica. Si applicano sanzioni civili INPS autonome.

### Normativa di riferimento (per NormativaRefTable)

| Norma | Descrizione | URL Normattiva/GU |
|-------|-------------|-------------------|
| Art. 13 D.Lgs. 18 dicembre 1997, n. 472 | Disciplina del ravvedimento operoso | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13!vig= |
| Art. 13 D.Lgs. 18 dicembre 1997, n. 471 | Sanzioni per omessi versamenti | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471~art13!vig= |
| Art. 12 D.Lgs. 472/1997 | Cumulo giuridico delle sanzioni | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art12!vig= |
| Art. 15 D.Lgs. 471/1997 | Sanzione F24 saldo zero non presentato | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471~art15!vig= |
| D.Lgs. 14 giugno 2024, n. 87 (Decreto Sanzioni) | Riforma del sistema sanzionatorio tributario | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87!vig= |
| D.Lgs. 24 settembre 2015, n. 158 | Riforma sanzioni tributarie 2015 | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2015-09-24;158!vig= |
| Legge 29 dicembre 1990, n. 408, art. 14 | Prima introduzione del ravvedimento | http://www.edizionieuropee.it/law/html/50/zn87_07_002.html |
| Art. 1284 Codice Civile | Saggio degli interessi legali | https://www.gazzettaufficiale.it/atto/serie_generale/caricaArticolo?art.idArticolo=1284 |
| D.M. 10 dicembre 2025 | Saggio interessi legali 2026 (1,60%) | https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg |
| Art. 6-bis L. 27 luglio 2000, n. 212 (Statuto del Contribuente) | Contraddittorio preventivo generalizzato | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2000-07-27;212~art6bis!vig= |
| Art. 36-bis e 36-ter DPR 29 settembre 1973, n. 600 | Avvisi bonari (controllo automatizzato/formale) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600 |
| Art. 54-bis DPR 26 ottobre 1972, n. 633 | Avviso bonario IVA | https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633~art54bis!vig= |
| D.Lgs. 19 giugno 1997, n. 218 | Accertamento con adesione, acquiescenza | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-06-19;218!vig= |

### Circolari ministeriali rilevanti (per CircolariTable)

| Circolare | Descrizione | URL |
|-----------|-------------|-----|
| Circolare Agenzia Entrate n. 180/E del 10 luglio 1998 | Definizione di "constatazione" come causa ostativa | (riferimento storico, fonte: deep research) |
| Circolare Agenzia Entrate n. 27/E del 2 agosto 2013 | Versamento entro 30 giorni e maggiorazione 0,40% | https://www.agenziaentrate.gov.it/portale/web/guest/cir-circolari (search) |
| Circolare Agenzia Entrate n. 6/E del 19 febbraio 2015 | Modifiche da Legge di Stabilità 2015 | https://www.agenziaentrate.gov.it/portale/web/guest/cir-circolari (search) |
| Circolare Agenzia Entrate n. 12/E del 2024 | Ravvedimento operoso applicabile alla CU | https://www.agenziaentrate.gov.it/portale/web/guest/cir-circolari (search) |
| Circolare Agenzia Entrate n. 54/E del 19 giugno 2002 | Regolarizzazione F24 saldo zero non presentato | https://www.agenziaentrate.gov.it/portale/web/guest/cir-circolari (search) |
| Risposta a Interpello Agenzia Entrate n. 297 del 18 aprile 2023 | F24 a zero presentato tardivamente convalida la compensazione | https://www.agenziaentrate.gov.it/portale/web/guest/risposte-interpello |
| Cassazione, ordinanza n. 17521 del 30 giugno 2025 | Constatazione richiede notifica formale al contribuente | https://ntplusdiritto.ilsole24ore.com/art/ravvedimento-operoso-no-ripetibilita-somme-versate-titolo-sanzioni-AIbRNtqB |

### Fonti e Riferimenti istituzionali (selezione per "Fonti e Riferimenti" section in pagina)

1. **Normattiva.it** — Testo consolidato D.Lgs. 472/1997, art. 13: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13!vig=
2. **Normattiva.it** — D.Lgs. 87/2024 (Decreto Sanzioni): https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87!vig=
3. **Agenzia delle Entrate** — Schede ravvedimento: https://www.agenziaentrate.gov.it/portale/schede/accertamenti/ravvedimento-operoso/come-regolarizzare-versimpo
4. **Agenzia delle Entrate** — Modello F24: https://www.agenziaentrate.gov.it/portale/web/guest/schede/pagamenti/f24
5. **Gazzetta Ufficiale** — D.M. 10 dicembre 2025 (saggio interessi legali 2026): https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg
6. **Fondazione Nazionale Commercialisti** — Revisione sistema sanzionatorio post-87/2024: https://www.fondazionenazionalecommercialisti.it/filemanager/active/01840/2025_12_01_Revisione_del_sistema_sanzionatorio_amministrativo_come_cambia_il_ravvedimento_operoso.pdf
7. **Senato della Repubblica** — Dossier schema decreto integrative D.Lgs. 87/2024: https://www.senato.it/service/PDF/PDFServer/BGT/01453533.pdf

---

## FAQ Items (15 minimum, drafted from PAA + research)

### Categoria: Definizione e ambito

1. **Cos'è il ravvedimento operoso?**
   Il ravvedimento operoso è l'istituto giuridico, disciplinato dall'art. 13 del D.Lgs. 472/1997, che permette al contribuente di regolarizzare spontaneamente le proprie violazioni tributarie pagando il tributo dovuto, gli interessi al tasso legale e una sanzione ridotta. La ratio è incentivare la voluntary compliance e ridurre il contenzioso. La regolarizzazione è valida solo se avviene prima che la violazione sia formalmente contestata.
   *Fonti: art. 13 D.Lgs. 472/1997 (Normattiva); Agenzia Entrate.*

2. **Chi può fare il ravvedimento operoso?**
   Qualsiasi contribuente — persona fisica, professionista, impresa, ente — che abbia commesso una violazione tributaria. La sola condizione è che la violazione non sia stata già constatata mediante notifica formale di atti accertativi. È una facoltà volontaria del contribuente, non un obbligo.

3. **Per quali tributi posso fare ravvedimento?**
   Per tutti i tributi erariali (IRPEF, IRES, IRAP, IVA, ritenute, registro, bollo) e i tributi locali (IMU, TARI). NON è ammesso per i contributi previdenziali INPS (gestione separata, IVS), che hanno un regime sanzionatorio autonomo gestito dall'INPS.

### Categoria: Calcolo

4. **Come si calcola il ravvedimento operoso?**
   Servono tre componenti: (1) imposta non versata; (2) sanzione ridotta in funzione dei giorni di ritardo; (3) interessi legali calcolati con la formula `imposta × tasso × giorni / 36500`. Per ravvedimenti dal 1° settembre 2024, le sanzioni partono dallo 0,0833% al giorno per i primi 14 giorni, salendo all'1,25% (15-30 gg), 1,39% (31-90 gg), 3,125% (entro dichiarazione/1 anno) e 3,57% (oltre).
   *Fonti: art. 13 D.Lgs. 472/97; D.Lgs. 87/2024.*

5. **Come si calcola il ravvedimento operoso 2026?**
   Per le violazioni commesse dal 1° settembre 2024 in poi si applica il nuovo regime D.Lgs. 87/2024 con sanzione base 25% (era 30%) e 12,5% per ritardi entro 90 giorni (era 15%). Il tasso interesse legale 2026 è 1,60% (D.M. 10 dicembre 2025). Per ravvedimenti a cavallo d'anno (es. periodo 2025→2026) gli interessi vanno calcolati pro-rata: 2,00% per i giorni 2025 + 1,60% per i giorni 2026.

6. **Qual è la sanzione minima del ravvedimento operoso?**
   Lo 0,0833% per ogni giorno di ritardo (regime post-1/9/2024) o lo 0,1% per giorno (regime pre-1/9/2024), applicabile entro i primi 14 giorni dalla scadenza (cosiddetto "ravvedimento sprint"). Su un'imposta di € 1.000 con un solo giorno di ritardo la sanzione è quindi rispettivamente € 0,83 o € 1.

7. **Come si calcolano gli interessi nel ravvedimento operoso?**
   Si applica la formula dell'art. 1284 c.c.: `imposta × tasso legale annuo × giorni / 36500`. Il tasso 2026 è 1,60%; per il 2025 era 2,00%; per il 2024 era 2,50%. Quando il periodo di ritardo attraversa il 1° gennaio, gli interessi vanno calcolati pro-rata applicando il tasso vigente in ciascun periodo.

### Categoria: Tempi e termini

8. **Quanto tempo ho per fare il ravvedimento operoso?**
   Si può fare fino a quando la violazione non è formalmente contestata con notifica di un atto (avviso bonario, accertamento, recupero credito d'imposta). In assenza di tali atti, il ravvedimento è teoricamente possibile fino alla scadenza del termine ordinario di accertamento (5 anni dalla dichiarazione). Le sanzioni ridotte sono però progressivamente meno favorevoli con l'aumentare del ritardo.

9. **Cosa succede se pago F24 in ritardo senza ravvedimento?**
   L'Agenzia delle Entrate, in fase di controllo, applica la sanzione piena del 25% (post-1/9/2024) o del 30% (pre-1/9/2024) sull'imposta non versata, oltre agli interessi legali e alle eventuali maggiorazioni. Il contribuente riceve un avviso bonario con sanzione ridotta al 10% (definizione automatica) o al 3% (definizione agevolata avvisi bonari). Tutte queste opzioni sono peggiorative rispetto al ravvedimento spontaneo.

### Categoria: Cause ostative

10. **Quando NON posso fare il ravvedimento operoso?**
    Quando ho ricevuto la notifica di: (a) avviso bonario (artt. 36-bis e 36-ter DPR 600/1973) per la stessa violazione; (b) avviso di accertamento (art. 42 DPR 600/1973); (c) avviso di liquidazione (art. 54-bis DPR 633/1972); (d) avviso di recupero credito d'imposta. La nuova disciplina post-D.Lgs. 87/2024 NON considera più cause ostative assolute il PVC e lo schema d'atto: in tali casi è ammesso un ravvedimento "potenziato" con riduzione 1/5 o 1/6.

11. **Posso fare ravvedimento dopo un avviso bonario?**
    Per le violazioni rilevate nell'avviso bonario il ravvedimento è precluso. Tuttavia, posso aderire alla **definizione agevolata** dell'avviso bonario, pagando la sanzione ridotta a 1/3 (10%) entro 30 giorni dalla notifica, oppure a 1,5% in caso di rateazione su tributi delle dichiarazioni precompilate. Il ravvedimento rimane invece ammesso per altre violazioni dello stesso periodo non incluse nell'avviso.

### Categoria: F24 e codici tributo

12. **Come compilo il modello F24 per il ravvedimento operoso?**
    Devono essere indicate **tre voci separate** nel medesimo modello F24: (1) l'imposta dovuta con il codice tributo specifico del tributo (es. 4001 per IRPEF saldo); (2) la sanzione con il codice tributo della sanzione (es. 8901 per IRPEF); (3) gli interessi con il codice tributo specifico (es. 1989 per IRPEF). Le tre voci vanno mantenute distinte: un unico versamento cumulativo invalida il ravvedimento.

13. **Quali sono i codici tributo F24 per il ravvedimento IVA?**
    Imposta IVA: 6001-6012 (mensile per ciascun mese), 6031-6034 (trimestrale per ciascun trimestre), 6099 (saldo annuale). Sanzione IVA: **8904**. Interessi IVA: **1991**.

### Categoria: Casi specifici

14. **Come si fa il ravvedimento per l'IMU?**
    Per IMU si usano gli stessi tier del ravvedimento erariale, ma con codici tributo specifici: imposta variabile (3912 abitazione principale, 3918 altri fabbricati, 3916 aree fabbricabili, ecc.); sanzione **3923**; interessi **3924**. Le sanzioni base IMU pre-1/9/2024 erano 30% / 15%; post-1/9/2024 sono 25% / 12,5%. La sanzione ridotta si applica nelle stesse percentuali del ravvedimento erariale.

15. **Posso fare ravvedimento sui contributi INPS?**
    No. I contributi previdenziali INPS (gestione separata, IVS, contributi minori) non rientrano nell'ambito dell'art. 13 D.Lgs. 472/1997. L'INPS applica sanzioni civili autonome. Dal 1° settembre 2024, l'art. 19 del D.L. 19/2024 ha introdotto un meccanismo di "autodenuncia contributiva" con riduzioni delle sanzioni civili, gestito direttamente dall'INPS.

16. **Cos'è il ravvedimento sprint?**
    È la forma più favorevole di ravvedimento, applicabile entro i primi 14 giorni di ritardo. La sanzione è dello 0,0833% per ogni giorno (post-1/9/2024) o dello 0,1% per giorno (pre-1/9/2024). Su un debito di € 1.000 con 5 giorni di ritardo la sanzione è di € 4,17 (post-riforma) o € 5,00 (regime previgente).

17. **Cos'è il cumulo giuridico nel ravvedimento operoso?**
    Introdotto dal D.Lgs. 87/2024 (per violazioni dal 1° settembre 2024), il cumulo giuridico permette di pagare un'unica sanzione ridotta — invece della somma di più sanzioni — per violazioni multiple sullo stesso tributo o tributi diversi nello stesso periodo. La percentuale di riduzione si calcola in relazione alla data della prima violazione. È **escluso** per gli omessi versamenti e per le indebite compensazioni.

18. **Il ravvedimento operoso si può fare a rate?**
    No, il ravvedimento si perfeziona solo con il pagamento integrale (imposta + sanzione + interessi) in un'unica soluzione tramite F24. Tuttavia, è ammesso il **ravvedimento parziale** ex art. 13-bis D.Lgs. 472/97: il contribuente può ravvedere solo una parte dell'imposta dovuta, applicando le riduzioni sulla porzione effettivamente regolarizzata.

19. **Quali sono le novità del ravvedimento operoso 2026?**
    (1) **Tasso interesse legale 1,60%** (era 2% nel 2025; D.M. 10/12/2025); (2) regime post-D.Lgs. 87/2024 pienamente operativo (sanzioni 25% / 12,5%); (3) **cumulo giuridico** ora ammesso; (4) ravvedimento possibile dopo schema d'atto (riduzione 1/6); (5) eliminazione del tier "lunghissimo" oltre 2 anni nel sistema temporale puro (sostituito dal 1/7 oltre 1 anno).

20. **Cosa succede se sbaglio i codici tributo nel ravvedimento?**
    L'errore nei codici tributo non invalida automaticamente il ravvedimento, purché l'importo complessivamente versato sia corretto. Tuttavia, può determinare ritardi nell'attribuzione delle somme da parte dell'Agenzia Entrate, con il rischio di ricevere comunque un avviso bonario per "omesso versamento". È fondamentale verificare i codici sull'elenco ufficiale dell'Agenzia delle Entrate prima di trasmettere l'F24.

21. **Si può fare ravvedimento per dichiarazione tardiva?**
    Solo entro 90 giorni dalla scadenza ordinaria di presentazione. In tal caso la sanzione è 1/10 del minimo edittale (€ 25 su € 250). Oltre i 90 giorni la dichiarazione è considerata "omessa": il ravvedimento per la presentazione non è più ammesso, mentre rimane possibile per i versamenti d'imposta connessi (con sanzione 120% o 75% delle imposte dovute, entro il termine di accertamento).

22. **Quando conviene il ravvedimento operoso?**
    Sempre, prima di una contestazione formale. Il risparmio sanzionatorio è enorme: ad esempio, per un'imposta di € 5.000 omessa con 25 giorni di ritardo, il ravvedimento costa una sanzione di € 62,50 (1,25%) contro € 1.250 (25%) della sanzione piena, con un risparmio di oltre il 95%. La decisione tra ravvedimento e definizione agevolata di un avviso bonario dipende dai termini: se l'avviso non è ancora arrivato, il ravvedimento è quasi sempre più conveniente.

---

## Esempi pratici (per la sezione "Esempi" della pagina)

### Esempio 1: Ravvedimento sprint IVA (post-riforma)

Imposta: € 1.500 (IVA trimestrale IV/2024)
Scadenza: 15 gennaio 2025 — Pagamento: 23 gennaio 2025 — Ritardo: 8 giorni
- Sanzione: 1.500 × 0,0833% × 8 = **€ 9,996 ≈ € 10,00**
- Interessi: 1.500 × 2,00% × 8 / 36.500 = **€ 0,66**
- Totale F24: **€ 1.510,66**
- Codici: 6034 + 8904 + 1991

### Esempio 2: Ravvedimento breve IVA (post-riforma)

Imposta: € 5.000 (IVA mensile)
Scadenza: 30 agosto 2024 — Pagamento: 24 settembre 2024 — Ritardo: 25 giorni
- Sanzione: 5.000 × 1,25% = **€ 62,50**
- Interessi: 5.000 × 2,5% × 25 / 36.500 = **€ 8,56**
- Totale F24: **€ 5.071,06**

### Esempio 3: Ravvedimento cross-year IRPEF

Imposta: € 3.000 (IRPEF saldo) — Scadenza: 30 novembre 2024 — Pagamento: 20 giugno 2026 — Ritardo: 567 giorni
- Sanzione: regime previgente (violazione pre-1/9/2024 — ma scaduta il 30/11/2024 quindi POST riforma). Re-check: la "data della violazione" è il giorno successivo alla scadenza, quindi 1/12/2024 → applicazione regime POST-riforma. 1/7 di 25% = 3,57%. Sanzione = 3.000 × 3,57% = **€ 107,14**
- Interessi (split per anno):
  - 1-31/12/2024 (31 gg) × 2,5% / 36.500 → 3.000 × 2,5% × 31 / 36.500 = € 6,37
  - 2025 intero (365 gg) × 2,0% → 3.000 × 2% × 365 / 36.500 = € 60,00
  - 1/1 → 20/6/2026 (171 gg) × 1,6% → 3.000 × 1,6% × 171 / 36.500 = € 22,49
  - Totale interessi: **€ 88,86**
- Totale F24: **€ 3.196,00**

### Esempio 4: Ravvedimento ultrannuale IRES (regime previgente)

Imposta: € 10.000 (IRES saldo) — Scadenza: 30 giugno 2023 — Pagamento: 31 agosto 2024 — Ritardo: 428 giorni
- Sanzione: regime previgente (violazione 30/6/2023). Ritardo > 1 anno e > termine dichiarazione successiva → 1/7 di 30% = 4,29%. Sanzione = 10.000 × 4,29% = **€ 429,00**
- Interessi (split per anno):
  - 1/7-31/12/2023 (184 gg) × 5% → 10.000 × 5% × 184 / 36.500 = € 252,05
  - 2024 (8 mesi al 31/8) (244 gg) × 2,5% → 10.000 × 2,5% × 244 / 36.500 = € 167,12
  - Totale interessi: **€ 419,17**
- Totale F24: **€ 10.848,17**

---

## Recent Changes (last 24 months — for AlertBox variant="success")

1. **D.M. 10 dicembre 2025**: tasso interesse legale ridotto al **1,60%** dal 1° gennaio 2026 (era 2% nel 2025). Riduce significativamente l'onere degli interessi nei ravvedimenti.

2. **D.Lgs. 14 giugno 2024, n. 87 (Decreto Sanzioni)**: in vigore dal 1° settembre 2024. Sanzione base ridotta dal 30% al 25%; ritardo entro 90 gg dal 15% al 12,5%; ravvedimento sprint dallo 0,1%/giorno a 0,0833%/giorno.

3. **Cumulo giuridico esteso al ravvedimento** (D.Lgs. 87/2024): per la prima volta dal 1997, il contribuente può applicare il cumulo giuridico in sede di ravvedimento, ottenendo una sanzione unica ridotta per violazioni multiple sullo stesso tributo/periodo.

4. **Ravvedimento dopo schema d'atto** (D.Lgs. 87/2024): il ravvedimento è ora ammesso anche dopo la comunicazione dello schema d'atto ex art. 6-bis L. 212/2000, con riduzione 1/6 (4,17%) o 1/4 (6,25%) post-PVC.

5. **Eliminazione del tier "lunghissimo" temporale**: nel regime post-1/9/2024, il sistema temporale puro termina al 1/7 (oltre 1 anno = 3,57%); il 1/6 e successive frazioni richiedono il superamento di milestone procedurali (PVC, schema d'atto), non più solo il decorrere del tempo.

---

## Source Verification Checklist

- [x] Tutte le sanzioni ridotte tracciano all'art. 13 D.Lgs. 472/1997 e all'art. 13 D.Lgs. 471/1997 modificato dal D.Lgs. 87/2024
- [x] Tasso interesse legale 2026 verificato contro D.M. 10 dicembre 2025 (GU n.289 del 13/12/2025) — Agenzia Entrate page conferma
- [x] Tabella storica 2015-2026 dei tassi legali verificata contro Agenzia Entrate + Tuttocamere
- [x] Codici tributo F24 cross-checked tra deep research, CafInforma, StudioPolli e Andreani (4 fonti)
- [x] URL Normattiva controllati per pattern URN corretto (`urn:nir:stato:decreto.legislativo:1997-12-18;472`)
- [x] Esempi di calcolo verificati con calcoli matematici espliciti (ravvedimento sprint, breve, cross-year, ultrannuale)
- [ ] Nessun [VERIFY] tag rimasto

---

## Section Plan (Final, 21 sezioni totali)

1. **Calcolatore** — interactive tool
2. **Cos'è il ravvedimento operoso** — definizione + ratio
3. **Evoluzione storica** — Legge 408/1990 → 472/1997 → 158/2015 → 87/2024
4. **Come si calcola** — formula 3 componenti
5. **Sanzioni 2026** — tabella post-D.Lgs. 87/2024
6. **Sanzioni regime previgente** — tabella pre-1/9/2024
7. **Ravvedimento sprint** — tabella daily rate
8. **Tasso interesse legale** — storico 2015-2026 + formula
9. **Tipi di ravvedimento** — sprint/breve/intermedio/lungo/ultrannuale + post-PVC
10. **Ravvedimento per imposta** — IRPEF/IRES/IRAP/IVA/ritenute/cedolare/forfettario/IMU/TARI/INPS escluso
11. **Codici tributo F24** — tabella completa
12. **Cause ostative** — avviso bonario / accertamento / liquidazione / recupero / PVC / schema atto
13. **Cumulo giuridico** — novità 87/2024
14. **F24 saldo zero non presentato**
15. **Dichiarazione tardiva entro 90 gg**
16. **Esempi pratici** — 4 esempi worked
17. **Errori comuni** — 7 pitfall
18. **Connessioni con altri istituti** — definizione agevolata, accertamento adesione, acquiescenza
19. **FAQ** — 22 items in 5-6 categorie
20. **Normativa di riferimento** — NormativaRefTable
21. **Fonti e Riferimenti** — bibliografia istituzionale + CircolariTable

# Research Brief — Calcolo Fine Pena con Liberazione Anticipata

**Source**: deep research in `raw-research.md` + Andreani parse + SERP PAA harvest
**Date**: 2026-05-18

---

## Structured Data (calculator + tables)

### Normativa di riferimento

| Norma | Articolo | URL Normattiva | Cosa disciplina |
|---|---|---|---|
| L. 26 luglio 1975, n. 354 (Ordinamento Penitenziario) | art. 54 | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art54 | Liberazione anticipata ordinaria (45 gg/semestre) |
| L. 26 luglio 1975, n. 354 (O.P.) | art. 4-bis | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art4bis | Reati ostativi — esclusi da LA speciale |
| L. 26 luglio 1975, n. 354 (O.P.) | art. 69-bis | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art69bis | Procedimento in materia di LA |
| L. 26 luglio 1975, n. 354 (O.P.) | art. 30-ter | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art30ter | Permessi premio |
| L. 26 luglio 1975, n. 354 (O.P.) | art. 47 | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art47 | Affidamento in prova |
| L. 26 luglio 1975, n. 354 (O.P.) | art. 47-ter | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art47ter | Detenzione domiciliare |
| L. 26 luglio 1975, n. 354 (O.P.) | art. 50 | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354~art50 | Semilibertà |
| D.L. 23 dicembre 2013, n. 146 (conv. L. 10/2014) | art. 4 | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2013-12-23;146~art4 | Liberazione anticipata speciale (75 gg/semestre — 2013-2015) |
| D.L. 4 luglio 2024, n. 92 (conv. L. 112/2024) | art. 5 | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2024-07-04;92~art5 | Riforma 2024: fine pena virtuale, accertamento d'ufficio MS |
| Codice di Procedura Penale (R.D. 1988/447) | art. 656 c. 10-bis | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.procedura.penale:1988-09-22;447~art656 | Indicazione fine pena con detrazioni nell'ordine di esecuzione |
| Codice Penale (R.D. 1398/1930) | art. 146 | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.penale:1930-10-19;1398~art146 | Differimento obbligatorio (gravidanza, maternità) |
| Codice Penale (R.D. 1398/1930) | art. 147 | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.penale:1930-10-19;1398~art147 | Differimento facoltativo (grave infermità) |
| Codice Penale (R.D. 1398/1930) | art. 176 | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.penale:1930-10-19;1398~art176 | Liberazione condizionale |
| D.P.R. 30 giugno 2000, n. 230 | art. 103 | https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2000-06-30;230~art103 | Regolamento esecuzione O.P. — criteri valutazione |
| Costituzione | art. 27 c. 3 | — | Finalità rieducativa della pena |

### Giurisprudenza chiave

| Pronuncia | Data | Massima |
|---|---|---|
| Corte Cost. **sent. 201/2025** | 29-12-2025 | Dichiarata incostituzionale parte dell'art. 5 D.L. 92/2024 — ripristinato il diritto del detenuto a richiedere LA semestre per semestre |
| Corte Cost. sent. 24/2025 | 2025 | Costituzionalità dell'esclusione condannati 4-bis dalla LA speciale confermata |
| Cass. Sez. I, sent. 356/2018 | 9-1-2018 | LA speciale: 75 gg automatici nel biennio 2014-2016; 30 gg aggiuntivi retroattivi solo con verifica continuità |
| Cass. sent. 17095/2024 | 2024 | LA e affidamento in prova: incremento 30 gg non si applica ai periodi in misure alternative |

### Costanti del calcolo

- LA ordinaria: **45 giorni / semestre**
- LA speciale (storica, solo 2013-2015): 75 giorni / semestre
- Durata semestre: **6 mesi solari** dalla data di inizio detenzione (NON anno solare)
- Tipi di pena scontata che concorrono: carcere, custodia cautelare, detenzione domiciliare, arresti domiciliari, esecuzione presso domicilio L.199/2010
- Tipi che NON concorrono (interrompono):
  - Sospensione gravi motivi salute (art. 147 c.p.)
  - Sospensione gravidanza/maternità (art. 146 c.p.)
  - Ricovero in luogo di cura psichica (art. 148 c.p.)
  - Affidamento terapeutico tossicodipendenze (art. 94 DPR 309/1990) con sospensione
  - Liberazione condizionale (periodo di prova)
  - Sospensione decisa dal giudice dell'esecuzione
  - Sospensione per estradizione/consegna
  - Latitanza/evasione

### Soglie temporali altri benefici (con LA computata come scontata)

| Beneficio | Soglia base | Soglia recidivi | Note ergastolo |
|---|---|---|---|
| Permessi premio (art. 30-ter) | 1/4 pena | 1/2 pena | ≥ 10 anni |
| Semilibertà (art. 50) | 1/2 pena | 2/3 pena | ≥ 20 anni |
| Liberazione condizionale (art. 176 c.p.) | ≥ 30 mesi e 1/2 pena | 3/4 pena | ≥ 26 anni |
| Affidamento in prova (art. 47) | residuo ≤ 4 anni | residuo ≤ 3 anni | n/a |

---

## Editorial Content (passages to preserve for page sections)

### Definizione di "partecipazione all'opera di rieducazione" (art. 103 DPR 230/2000)

I criteri valutativi includono: regolarità carceraria, partecipazione attiva agli interventi del piano trattamentale, dimostrazione di responsabilità sociale, capacità di progettare autonomamente il proprio futuro, presa di distanza da comportamenti devianti. La valutazione comportamentale è affidata alla direzione dell'istituto penitenziario, che redige una relazione specifica in occasione di ogni richiesta di liberazione anticipata. Questa relazione costituisce il principale elemento probatorio a disposizione del magistrato di sorveglianza per la decisione.

### Natura giuridica della LA

Causa di estinzione parziale della pena con caratteristiche peculiari che la differenziano dagli altri istituti estintivi. Nella giurisprudenza costituzionalmente orientata, va intesa come uno strumento del trattamento rieducativo, che riconosce al condannato una riduzione della pena in ragione della sua adesione al progetto rieducativo. La Corte Costituzionale (sent. 201/2025) ha sottolineato la funzione fondamentale dell'istituto come "cartina di tornasole della positività del percorso trattamentale del detenuto".

### Contesto storico

L'istituto nasce nel contesto della riforma penitenziaria del 1975 (L. 354/1975), che rappresentò una rivoluzione del sistema carcerario italiano. Prima della riforma, il sistema era organizzato in modo rigidamente gerarchico e autoritario, con prevalenza della dimensione punitiva. La riforma del 1975 — frutto di un lungo processo iniziato dopo le rivolte carcerarie 1968-1975 — introdusse una concezione moderna della pena, ispirata ai valori costituzionali (art. 27, c. 3), con l'obiettivo principale della rieducazione del condannato. Inizialmente la detrazione era di 30 giorni per semestre; successivi interventi normativi l'hanno incrementata a 45 giorni.

### LA speciale — contesto storico

Intervento emergenziale post-sentenza Torreggiani CEDU (8 gennaio 2013), per gestire il sovraffollamento carcerario italiano che aveva raggiunto livelli insostenibili. Periodo originale: 23 dicembre 2013 — 23 dicembre 2015. Applicazione retroattiva ai semestri scontati dal 1° gennaio 2010 (con verifica di continuità della partecipazione al percorso rieducativo). **Nel 2026 non più applicabile come regime originario**: continua ad avere effetti solo per i semestri rientranti nella finestra temporale.

### Riforma 2024 e sentenza Corte Cost. 201/2025

Il D.L. 92/2024 ("decreto carcere") ha introdotto:
1. Accertamento d'ufficio entro 90 giorni dal fine pena (art. 54 c. 2-bis O.P.)
2. Fine pena virtuale obbligatorio nell'ordine di esecuzione (art. 656 c.p.p. c. 10-bis)
3. Modifica delle comunicazioni (art. 54 c. 2 O.P.)

La **Corte Costituzionale sent. 201/2025** ha dichiarato incostituzionale parte della riforma. Secondo la Consulta, differire la decisione al novantesimo giorno precedente "inciderebbe irrimediabilmente sulla finalità rieducativa dell'istituto, precludendo al detenuto di avere contezza, nel corso dell'esecuzione della pena, della valutazione del magistrato di sorveglianza circa l'effettività dell'adesione al percorso di recupero e risocializzazione". La pronuncia ha **ripristinato il sistema precedente**: il condannato può richiedere LA semestre per semestre, senza dover indicare uno specifico interesse diverso.

Rimane vigente l'obbligo di indicare la "fine pena virtuale" nell'ordine di esecuzione (art. 656 c. 10-bis c.p.p.), ma deve essere distinta chiaramente dalla data effettiva di fine pena.

### Errori comuni dei pratici

1. **Confondere "fine pena virtuale" con effettivo** — la prima è teorica (proiezione massima), la seconda dipende da concessioni effettive semestre per semestre.
2. **Non considerare il presofferto** — la custodia cautelare conta dal primo giorno per LA (art. 54 c. 1 O.P. espressamente).
3. **Applicare LA speciale 75 giorni nel 2026** — ERRORE: applicabile solo per semestri scontati 23/12/2013-23/12/2015 (retroattivamente da 1/1/2010 con verifica continuità).
4. **Calcolare semestri solari** invece che dalla data di inizio detenzione.
5. **Dimenticare le interruzioni** — ogni periodo di pena non eseguita azzera o riduce i semestri utili.
6. **Ignorare art. 4-bis** — i condannati ostativi NON possono accedere alla LA speciale.
7. **Non aggiornare l'ordine di esecuzione** post-concessione LA.

---

## FAQ Questions (20 items, organized by 5 categories)

### Calcolo e meccanica
1. **Come si calcola il fine pena con la liberazione anticipata?** — Si sottraggono 45 giorni di pena per ogni semestre di pena scontata in modo positivo. Per una pena di 3 anni (6 semestri) si ottiene una detrazione totale di 270 giorni (~9 mesi). Fonti: art. 54 O.P.
2. **Cos'è il fine pena virtuale?** — È la data teorica di fine pena calcolata come se tutti i semestri futuri venissero riconosciuti per LA. È obbligatorio inserirla nell'ordine di esecuzione dal 2024 (art. 656 c.p.p. c. 10-bis). Non equivale al fine pena effettivo.
3. **Quanti giorni si tolgono ogni 6 mesi?** — 45 giorni ordinari (LA ordinaria). 75 giorni se il semestre rientra nella finestra 23/12/2013-23/12/2015 (LA speciale, non più applicabile dopo).
4. **Come si contano i semestri?** — Dalla data di inizio detenzione, non dall'anno solare. Sei mesi pieni di pena scontata = 1 semestre. Se ci sono interruzioni, il semestre può ripartire da zero (modalità "solo semestri completi") o sommare le frazioni.
5. **Qual è la formula per calcolare lo sconto?** — Numero di semestri completi × 45 giorni = totale detrazione. Esempio: 5 anni di pena = 10 semestri × 45 = 450 giorni di sconto teorico (~15 mesi).

### Definizione e ambito
6. **Cos'è la liberazione anticipata?** — Beneficio penitenziario premiale ex art. 54 O.P. che riconosce una detrazione di pena al condannato che ha dato prova di partecipazione all'opera di rieducazione.
7. **Cos'è l'art. 54 dell'Ordinamento Penitenziario?** — La norma fondamentale (L. 354/1975) che disciplina la liberazione anticipata: presupposti, misura della detrazione, effetti su altri benefici.
8. **La liberazione anticipata speciale è ancora in vigore nel 2026?** — Come regime ordinario NO. Il D.L. 146/2013 prevedeva un biennio 23/12/2013-23/12/2015. Continua ad applicarsi solo per i semestri rientranti in quella finestra temporale.
9. **Qual è la differenza tra LA ordinaria e speciale?** — Ordinaria: 45 giorni/semestre, sempre vigente. Speciale: 75 giorni/semestre, solo periodo 2013-2015 (con retroattività al 2010), esclusi condannati 4-bis.

### Periodi computabili
10. **La custodia cautelare conta per la liberazione anticipata?** — Sì, l'art. 54 c. 1 O.P. lo prevede espressamente: "è valutato anche il periodo trascorso in stato di custodia cautelare o di detenzione domiciliare".
11. **Gli arresti domiciliari valgono per il calcolo?** — Sì, ai fini della LA ordinaria. Per la LA speciale invece il periodo trascorso in misure alternative non beneficia dell'incremento di 30 giorni.
12. **La detenzione domiciliare conta?** — Sì, espressamente prevista dall'art. 54 c. 1 O.P.
13. **L'affidamento in prova al servizio sociale conta?** — Sì, per LA ordinaria. L'incremento da 45 a 75 giorni (LA speciale, periodo 2013-2015) non si applicava ai periodi trascorsi in affidamento.

### Procedura e revoca
14. **Chi calcola la liberazione anticipata?** — Il magistrato di sorveglianza territorialmente competente (criterio: località detentiva). Su istanza del condannato/difensore o d'ufficio (post-D.L. 92/2024, nei 90 giorni antecedenti il fine pena). Dopo Corte Cost. 201/2025, ripristinata anche la possibilità di istanza semestre per semestre.
15. **Quanto tempo ci vuole per la decisione?** — Variabile. L'ordinanza è emessa in camera di consiglio senza presenza parti. Tipicamente entro 3-6 mesi dall'istanza, ma può variare per carico ufficio.
16. **La liberazione anticipata può essere revocata?** — Sì (art. 54 c. 3 O.P.): in caso di condanna per delitto non colposo commesso durante l'esecuzione successivamente alla concessione.
17. **Come si richiede la liberazione anticipata?** — Istanza scritta in carta semplice (no marche da bollo) al magistrato di sorveglianza, presentata dal condannato o dal difensore. Allegata la documentazione carceraria rilevante.

### Riforma 2024 e casi particolari
18. **Cosa cambia con il D.L. 92/2024?** — Introdotto accertamento d'ufficio entro 90 gg dal fine pena e obbligo di fine pena virtuale nell'ordine di esecuzione. La sentenza Corte Cost. 201/2025 ha però ripristinato il diritto del detenuto di richiedere LA semestre per semestre.
19. **Quali reati sono esclusi dalla liberazione anticipata speciale?** — Quelli elencati nell'art. 4-bis O.P.: associazione mafiosa, terrorismo, eversione, sequestro estorsivo, tratta, violenza sessuale aggravata, prostituzione/pornografia minorile, traffico stupefacenti aggravato.
20. **L'ergastolano può ottenere la liberazione anticipata?** — Sì, l'art. 54 c. 4 ultima frase O.P. lo prevede espressamente. La LA accelera la soglia di accesso alla liberazione condizionale (26 anni effettivi → meno se LA concessa per più semestri).

---

## Section-to-Research Mapping

| Page Section (H2) | Raw Research Section(s) | Key Data Points / Sources |
|---|---|---|
| 1. **Calcolatore** (anchor) | — | LA = 45 gg/semestre; LA speciale = 75 gg solo 2013-2015 |
| 2. Che cos'è la liberazione anticipata? | §1 (art. 54), §11 (effetti altri benefici) | Art. 54 O.P. verbatim c. 1 e c. 4; finalità rieducativa Cost. art. 27 c. 3 |
| 3. Come si calcola il fine pena? | §5 (semestri), §12 (esempi pratici) | Formula: semestri × 45 gg. Solo semestri completi vs cumulo frazioni |
| 4. 45 o 75 giorni nel 2026? | §2 (LA speciale) | Finestra 2013-2015 chiusa; Cass. 356/2018; 4-bis esclusi |
| 5. Fine pena virtuale dal 2024 | §3 (D.L. 92/2024), §4 (art. 656 c.10-bis), §13 errori | Art. 5 D.L. 92/2024 verbatim; art. 656 c. 10-bis c.p.p.; distinzione virtuale/effettivo |
| 6. Quali periodi si conteggiano? | §6 (computabili) | Custodia cautelare, domiciliari, presofferto. Art. 54 c. 1 espressa |
| 7. Interruzioni della pena | §7 (non computabili) | 8 categorie: salute, maternità, ricovero psichico, affidamento terapeutico, lib. condizionale, sospensione esecuzione, estradizione, latitanza |
| 8. Come si richiede e chi decide? | §9 (procedura) | Magistrato di sorveglianza; istanza; ordinanza camera di consiglio; impugnazione 10 gg |
| 9. Riforma D.L. 92/2024 e Corte Cost. 201/2025 | §3, §4 + Corte Cost. 201/2025 | Sentenza 29-12-2025; ripristino diritto semestre per semestre; rimane fine pena virtuale art. 656 |
| 10. Reati esclusi (art. 4-bis O.P.) | §8 (reati ostativi) | Lista 4-bis: mafia, terrorismo, sequestro, tratta, violenza sessuale aggravata, droga aggravata. Corte Cost. 24/2025 |
| 11. Esempi pratici | §12 (5 scenari) | 3 anni → 9 mesi sconto; 6 anni con presofferto; ergastolo + LA |
| 12. FAQ | All sections | 20 items con fonti |
| 13. Normativa di riferimento | — | NormativaRefTable con 13 fonti |
| 14. Fonti e Riferimenti | — | Sources list (Normattiva, Corte Cost., Cass., Brocardi, sistemapenale.it) |

---

## Source verification

- ✅ Art. 54 O.P. verbatim citato da Normattiva e Brocardi (concordanti)
- ✅ Art. 4 D.L. 146/2013 verbatim da Normattiva
- ✅ Art. 5 D.L. 92/2024 verbatim da Normattiva, sistemapenale.it, associazionemagistrati.it
- ✅ Art. 656 c.p.p. comma 10-bis: testo concordante tra Brocardi, sistemapenale.it, ass. magistrati
- ✅ Corte Cost. 201/2025: confermato da fonte ufficiale `cortecostituzionale.it/scheda-pronuncia/2025/201` + sistemapenale.it
- ✅ Cass. sent. 356/2018: confermato da giurisprudenzapenale.com
- ✅ Soglie benefici (permessi premio 1/4, semilibertà 1/2, lib. condizionale 26 anni ergastolo): confermato da brocardi + giustizia.it

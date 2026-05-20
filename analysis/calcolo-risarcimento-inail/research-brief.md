# Research Brief — Calcolo Risarcimento INAIL

> Bridge file: dati strutturati + content per Phase 4. Riferimento integrale: [raw-research.md](raw-research.md).

---

## Normativa di riferimento

| Norma | Descrizione | URL Normattiva |
|---|---|---|
| D.P.R. 30 giugno 1965, n. 1124 (T.U.) | Testo Unico Infortuni sul lavoro e malattie professionali | https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124 |
| D.Lgs. 23 febbraio 2000, n. 38 | Riforma INAIL: danno biologico, rivalutazione, infortunio in itinere | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38 |
| D.M. 12 luglio 2000 | Tabella menomazioni (all. 4), indennizzo (all. 5), coefficienti (all. 6) | https://www.gazzettaufficiale.it/eli/id/2000/07/25/000A9926/sg |
| D.M. 27 marzo 2009 | Aumento +8,68% danno biologico | https://www.lavoro.gov.it/documenti-e-norme/normative/Documents/2009/20090327_DI.pdf |
| D.M. 14 febbraio 2014 | Aumento +7,57% danno biologico | (PDF Ministero Lavoro) |
| D.M. 23 aprile 2019, n. 45 | Nuova tabella indennizzo capitale UNISEX (+40%) | https://www.lavoro.gov.it/documenti-e-norme/normative/Documents/2019/DM-45-del-23042019 |
| D.M. 20 giugno 2025, n. 85 | Rivalutazione +0,8% danno biologico dal 1/7/2025 | https://www.lavoro.gov.it/media/90764 |
| Legge 3 dicembre 1999, n. 493 | Assicurazione infortuni domestici | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1999-12-03;493 |
| L. 30 dicembre 2018, n. 145 (Legge Bilancio 2019), art. 1 cc. 1121-1126 | Base legge per DM 45/2019 | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2018-12-30;145 |
| L. 28 dicembre 2015, n. 208 (Legge Stabilità 2016), art. 1 c. 303 | Rivalutazione automatica annuale danno biologico | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2015-12-28;208 |
| D.P.R. 29 settembre 1973, n. 601, art. 6 | Esenzione IRPEF rendite | https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;601~art6 |

**Circolari INAIL principali:**
- Circ. n. 57 del 4 agosto 2000 (impianto sistema danno biologico)
- Circ. n. 37 del 31 marzo 2009 (attuazione +8,68%)
- Circ. n. 26 del 9 maggio 2014 (attuazione +7,57%)
- Circ. n. 27 dell'11 ottobre 2019 (decorrenza DM 45/2019)
- Circ. n. 41/2023 (rivalutazione prestazioni 2023)
- Circ. n. 37 del 20 giugno 2025 (rivalutazione prestazioni 2025: minimale, massimale, APC, assegno funerario, assegni continuativi)
- Circ. n. 45 del 1° agosto 2025 (rivalutazione +0,8% danno biologico)
- Circ. n. 46 dell'8 settembre 2025 (revisione coefficienti capitalizzazione rendite, art. 39 T.U.)
- Circ. n. 55 dell'11 dicembre 2025 (estensione età incollocabilità a 67 anni dal 1/1/2026)

---

## Dati strutturati per il calcolatore

### Soglie di invalidità

| Soglia | Tipo prestazione | Modalità | Tassazione IRPEF |
|---|---|---|---|
| 1-5% | Nessun indennizzo (franchigia) | — | — |
| 6-15% | Indennizzo in capitale | Una tantum | Esente |
| 16-100% | Rendita vitalizia | Mensile (12 mensilità/anno) | Esente |

### Inabilità temporanea assoluta (art. 68 T.U. 1124/1965)

- Giorni 1-3: carenza (a carico del datore di lavoro)
- Giorni 4-90: **60%** della retribuzione media giornaliera
- Giorni 91+: **75%** della retribuzione media giornaliera
- Soggetta a IRPEF (reddito sostitutivo)
- Retribuzione media giornaliera = retribuzione 15 giorni precedenti ÷ 15

### Tabella indennizzo in capitale 6-15% — Uomini (DM 12/07/2000 + DM 2009 + DM 2014; valida eventi 2014-2018)

> Per i 6 anni di rivalutazioni 2008-2014: punto base × (1 + 8,68%) × (1 + 7,57%). Per eventi post 1/1/2019: tabella unisex DM 45/2019, +40% sui valori 2014.

Estratto principale (in €):

| Grado | ≤20 anni | 26-30 | 36-40 | 46-50 | 56-60 | 66+ |
|------:|---------:|------:|------:|------:|------:|----:|
| 6 | 5.796,23 | 5.216,60 | 4.636,98 | 4.057,37 | 3.477,74 | 2.898,11 |
| 7 | 7.184,95 | 6.466,45 | 5.747,96 | 5.029,46 | 4.310,97 | 3.592,47 |
| 8 | 8.694,33 | 7.824,89 | 6.955,47 | 6.086,03 | 5.216,60 | 4.347,17 |
| 9 | 10.324,57 | 9.292,11 | 8.259,65 | 7.227,20 | 6.194,74 | 5.162,29 |
| 10 | 12.075,45 | 10.867,90 | 9.660,36 | 8.452,81 | 7.245,27 | 6.037,72 |
| 11 | 14.611,41 | 13.150,27 | 11.689,13 | 10.227,99 | 8.766,85 | 7.305,71 |
| 12 | 17.388,76 | 15.649,88 | 13.911,01 | 12.172,13 | 10.433,26 | 8.694,38 |
| 13 | 20.407,61 | 18.366,85 | 16.326,10 | 14.285,33 | 12.244,57 | 10.203,81 |
| 14 | 23.667,98 | 21.301,18 | 18.934,39 | 16.567,58 | 14.200,78 | 11.833,99 |
| 15 | 27.169,85 | 24.452,87 | 21.735,88 | 19.018,90 | 16.301,91 | 13.584,93 |

Tabella completa (11 fasce × 10 gradi) in [raw-research.md](raw-research.md#tabella-indennizzo-in-capitale-6-15-per-età).

### Tabella indennizzo in capitale 6-15% — Donne (eventi 2014-2018)

Stessa struttura, valori leggermente più alti (es. grado 15% ≤20 anni: €28.528,37 vs €27.169,85 uomini).

### Tabella indennizzo in rendita 16-100% (annua, post DM 2014; uguale uomini/donne)

| Grado | Rendita 2014 (€/anno) | Rendita 2025 (× 1,008) |
|------:|----------------------:|----------------------:|
| 16 | 1.207,55 | 1.217,21 |
| 20 | 1.690,57 | 1.704,09 |
| 25 | 2.294,34 | 2.312,69 |
| 30 | 2.958,50 | 2.982,17 |
| 40 | 4.830,20 | 4.868,84 |
| 50 | 7.245,30 | 7.303,26 |
| 60 | 9.660,39 | 9.737,67 |
| 70 | 11.773,61 | 11.867,80 |
| 80 | 13.584,93 | 13.693,61 |
| 90 | 15.396,25 | 15.519,42 |
| 100 | 17.207,58 | 17.345,24 |

NOTA: stima applicando solo +0,8% del DM 85/2025. Per gli importi effettivi 2025 consultare Circ. INAIL n. 45/2025.

### Tabella coefficienti danno patrimoniale (DM 12/07/2000 allegato 6)

| Fascia menomazione | Grado | Coefficiente |
|---|:---:|---:|
| 16-20% | A | 0,4 |
| 21-25% | A | 0,5 |
| 26-35% | B | 0,6 |
| 36-50% | B | 0,7 |
| 51-70% | C | 0,8 |
| 71-85% | C | 0,9 |
| 86-100% | D | 1,0 |

### Quota integrativa per familiari (art. 77 T.U.)

- **+5%** sulla quota PATRIMONIALE (NON sulla biologica) per ciascuno di:
  - Coniuge / unito civilmente
  - Figli <18 anni
  - Figli <21 anni se studenti scuola media superiore a carico
  - Figli <26 anni se studenti universitari a carico
  - Figli inabili senza limite di età

### Importi prestazioni accessorie 2025 (Circ. INAIL 37/2025)

| Voce | Importo 2025 |
|---|---:|
| Retribuzione minima annua industria | €20.426,70 |
| Retribuzione massima annua industria | €37.935,30 |
| Retribuzione media giornaliera industria | €97,27 |
| APC (Assistenza Personale Continuativa) | €672,72/mese |
| Assegno funerario | €12.342,84 una tantum |
| Una tantum infortuni domestici 6-15% | €395,00 |
| Assegno incollocabilità (dal 1/7/2025) | €308,23/mese |
| Assegno continuativo 50-59% | €377,46/mese |
| Assegno continuativo 60-79% | €529,59/mese |
| Assegno continuativo 80-89% | €983,27/mese |
| Assegno continuativo 90-100% | €1.514,87/mese |
| Assegno continuativo 100% + APC | €2.188,44/mese |
| Coefficiente rivalutazione rendite 2025 | 1,0084 |

### Rendita ai superstiti (% retribuzione annua deceduto)

- Coniuge / unito civilmente: 50%
- Ciascun figlio: 20%
- Figlio orfano di entrambi i genitori o inabile: fino a 40%
- In mancanza di coniuge/figli: genitori o fratelli/sorelle a carico: 20%
- Tetto massimo: 100% della retribuzione (se eccede, riduzione proporzionale)

### Formule di calcolo

**Indennizzo in capitale (6-15%):**
```
Capitale = Tabella(età, grado) × FattoreRivalutazione

Dove:
- Tabella(età, grado) = tabella DM 12/07/2000 o DM 45/2019 a seconda dell'evento
- FattoreRivalutazione: 1,008 se provvedimento post 1/7/2025
```

**Rendita vitalizia (16-100%):**
```
QuotaBiologica annua = Tabella_rendita(grado) × FattoreRivalutazione_biologico
QuotaPatrimoniale annua = Retribuzione × (Grado/100) × Coefficiente(grado) × (1 + 0,05 × NFamiliari)
RenditaTotaleAnnua = QuotaBiologica + QuotaPatrimoniale
RenditaMensile = RenditaTotaleAnnua / 12

Dove:
- Retribuzione: max(minimale, min(retribuzione_effettiva, massimale))
- Coefficiente: 0,4 (A1) | 0,5 (A2) | 0,6 (B1) | 0,7 (B2) | 0,8 (C1) | 0,9 (C2) | 1,0 (D)
- NFamiliari: numero familiari aventi diritto (coniuge + figli a carico)
- FattoreRivalutazione_biologico: 1,008 per ratei post 1/7/2025
```

---

## NormativaQuote — Citazioni verbatim per componenti

### Art. 2 D.P.R. 1124/1965 (definizione infortunio)
> "L'assicurazione comprende tutti i casi di infortunio avvenuti per causa violenta in occasione di lavoro, da cui sia derivata la morte o un'inabilità permanente al lavoro, assoluta o parziale, ovvero un'inabilità temporanea assoluta che importi l'astensione dal lavoro per più di tre giorni."

### Art. 66 D.P.R. 1124/1965 (prestazioni)
> "Le prestazioni a carico dell'assicurazione sono: l'indennità giornaliera per l'inabilità temporanea assoluta; la rendita per l'inabilità permanente; la rendita ai superstiti; l'assegno per l'assistenza personale continuativa; le cure mediche e chirurgiche; le protesi e gli apparecchi di cura e di protesi."

### Art. 68 D.P.R. 1124/1965 (indennità temporanea)
> "L'indennità giornaliera per l'inabilità temporanea assoluta è corrisposta nella misura del 60 per cento della retribuzione giornaliera, a decorrere dal quarto giorno successivo a quello dell'infortunio, fino al novantesimo giorno, e nella misura del 75 per cento per il periodo successivo."

### Art. 77 D.P.R. 1124/1965 (quote integrative)
> "Se l'infortunato ha moglie e figli, solo moglie o solo figli aventi i requisiti di cui ai numeri 1 e 2 dell'articolo 85, la rendita è aumentata di un ventesimo per la moglie e per ciascun figlio […]. Per i figli viventi a carico del lavoratore infortunato dette quote sono corrisposte fino al raggiungimento del ventunesimo anno di età, se studenti di scuola media o professionale, e per tutta la durata normale del corso, ma non oltre il ventiseiesimo anno di età, se studenti universitari."

### Art. 13 c. 2 D.Lgs. 38/2000 (tripartizione soglie)
> "Le menomazioni conseguenti alle lesioni dell'integrità psicofisica di cui al comma 1 sono valutate in base a specifica tabella delle menomazioni […]. L'indennizzo delle menomazioni di grado pari o superiore al 6 per cento ed inferiore al 16 per cento è erogato in capitale, dal 16 per cento è erogato in rendita."

### Art. 10 c. 6-7 D.P.R. 1124/1965 (danno differenziale)
> "Non si fa luogo a risarcimento qualora il giudice riconosca che questo non ascende a somma maggiore dell'indennità che, per effetto del presente decreto, è liquidata all'infortunato o ai suoi aventi diritto. Quando si faccia luogo a risarcimento, questo è dovuto solo per la parte che eccede le indennità liquidate a norma degli artt. 66 e seguenti."

---

## Esempi pratici di calcolo

### Esempio 1: Indennità temporanea
**Scenario**: Lavoratore retribuzione media giornaliera €100, infortunio 120 giorni.
- Giorni 1-3 (carenza): a carico datore, INAIL 0
- Giorni 4-90 (87 giorni): 87 × 60 = **€5.220**
- Giorni 91-120 (30 giorni): 30 × 75 = **€2.250**
- **Totale lordo INAIL: €7.470** (soggetto IRPEF)

### Esempio 2: Indennizzo capitale 10% — uomo 40 anni, evento 2018
- Tabella uomini, fascia 36-40 anni, grado 10%: **€9.660,36**
- Una tantum esentasse

### Esempio 3: Indennizzo capitale 10% — evento post 1/1/2019
- Valore unisex riferimento 2024: €8.896,12
- Rivalutato 2025 (+0,8%): **€8.967,29** (valore medio per età; differenziato nelle classi)

### Esempio 4: Rendita 20% — retribuzione €30.000
- Quota biologica annua (tab. rendita 20%): €1.704,09/anno
- Quota patrimoniale annua: 30.000 × 0,20 × 0,4 (coeff. fascia A) = **€2.400/anno**
- Totale annuo: €4.104,09 → **mensile €342,01** esentasse
- + 5% quota patrimoniale per coniuge: +€10/mese
- + 5% × 2 per 2 figli minori: +€20/mese
- Totale con 3 familiari: **€372,01/mese** esentasse

### Esempio 5: Rendita 80% — retribuzione massima (€37.935,30)
- Quota biologica annua (tab. rendita 80%): €13.693,61
- Quota patrimoniale annua: 37.935,30 × 0,80 × 0,9 (coeff. fascia C) = **€27.313,42**
- Totale annuo: €41.007,03 → **mensile €3.417,25** esentasse
- + APC se non autosufficiente: +€672,72/mese
- + quote integrative familiari (es. coniuge + 2 figli): +€341,42/mese (5% × 3 quota patr.)
- Possibile totale: **€4.431,40/mese** esentasse

### Esempio 6: Danno differenziale
**Scenario**: Tabelle Milano 2024 quantificano danno non patrimoniale a €200.000 per menomazione 40%. INAIL eroga rendita: quota biologica €6.000/anno, quota patrimoniale €4.000/anno. Lavoratore percepisce da 5 anni. Coefficiente capitalizzazione = 10.

- Quota biologica già percepita: 5 × 6.000 = €30.000
- Valore capitale quota biologica futura: 6.000 × 10 = €60.000
- Totale quota biologica scomputabile: **€90.000**
- Danno differenziale = 200.000 − 90.000 = **€110.000** richiedibile in sede civile (oltre al danno morale, mai indennizzato INAIL)

---

## Section-to-Research Mapping

| Sezione Pagina | Raw Research §§ | Key Data Points |
|---|---|---|
| Cos'è il risarcimento INAIL | §1.1, §1.2 | Art. 2 + Art. 66 T.U., art. 13 D.Lgs. 38/2000 |
| Le 3 soglie | §2.1-§2.4 | <6% franchigia, 6-15% capitale, ≥16% rendita |
| Inabilità temporanea | §3.1-§3.5 | 60%/75%, retrib. media giornaliera, esempio €7.470 |
| Indennizzo capitale 6-15% | §4.1-§4.5 | Tabelle M/F per età, DM 45/2019 unisex +40%, rivalutazione 2025 +0,8% |
| Indennizzo rendita 16-100% | §5.1-§5.6 | Quota biologica + patrimoniale, esempi €30k/20% |
| Tabella coefficienti | §5.4 | A/B/C/D, 0,4-1,0 |
| Quota integrativa | §5.5 | Art. 77 T.U., +5% per familiare su quota patr. |
| Retribuzione di rif. 2025 | §6.1-§6.2 | Minimale 20.426,70, massimale 37.935,30, agric. 30.834,39 |
| Rivalutazione 2026 | §6.3-§6.4 | DM 85/2025 +0,8%, doppio binario |
| Tabella menomazioni | §7.1-§7.4 | DM 12/07/2000 all. 4, ~400 voci, esempi |
| Prestazioni accessorie | §8.1-§8.4 | APC 672,72; funerario 12.342,84; superstiti %; incollocabilità 308,23 |
| Danno differenziale | §9.1-§9.4 | Cass. SU 12567/2018, poste omogenee, esempio €110k |
| Casi particolari | §7.3-§7.4, §10-§12 | Mesotelioma, ipoacusia, tunnel carpale, autonomi, COVID, itinere |
| Procedura | §15 (raw) | Denuncia 2gg, certificato medico, riconoscimento, decorrenza |
| Revisione | §16 (raw) | 10 anni infortunio, 15 anni MP, aggravamento 1 sola volta |
| Tassazione | §17 (raw) | Esenzione IRPEF rendita, capitale; tassazione temporanea |
| FAQ | Tutte le sezioni + PAA | 15-25 item da PAA + long-tail |
| Normativa | §1.1-§1.7 | Tabella completa norme + circolari |

---

## FAQ Items (15+ da Phase 1 PAA + long-tail)

| # | Domanda | Categoria | Fonte risposta |
|---|---|---|---|
| 1 | Quanti soldi sono 6 punti di invalidità INAIL? | Importi punti | Tabella indennizzo capitale 6% per età |
| 2 | Quanti soldi sono 7 punti di invalidità INAIL? | Importi punti | Tabella indennizzo capitale 7% per età |
| 3 | Quanti soldi sono 10 punti di invalidità INAIL? | Importi punti | Tabella indennizzo capitale 10%: €8.967,29 (medio 2025) |
| 4 | Quanti soldi sono 16 punti di invalidità INAIL? | Importi punti | Rendita annua 16% ≈ €1.217,21 + quota patrim. |
| 5 | Come si calcola il risarcimento INAIL? | Calcolo | Tre soglie + formula rendita bifasica |
| 6 | Come viene calcolato il danno biologico INAIL? | Calcolo | Tabella menomazioni DM 12/07/2000 |
| 7 | Quanto è la rendita mensile INAIL per 16 punti? | Rendita | €1.217,21/12 = €101,43/mese (solo biologica) + patrim. |
| 8 | Quando ci sarà la prossima rivalutazione delle rendite INAIL? | Rivalutazione | Annuale dal 1° luglio (DM ministeriale) |
| 9 | Quanti anni dura la rendita INAIL? | Durata | A vita; revisione 10 anni infortunio / 15 anni MP |
| 10 | Qual è la rivalutazione INAIL 2026? | Rivalutazione | DM 85/2025: +0,8% dal 1/7/2025 (in vigore anche 2026) |
| 11 | La rendita INAIL è tassata IRPEF? | Tassazione | Esente IRPEF (art. 6 DPR 601/1973) |
| 12 | L'indennità per inabilità temporanea è tassata? | Tassazione | Sì, soggetta IRPEF come reddito sostitutivo |
| 13 | Come si calcola il danno differenziale INAIL? | Differenziale | Poste omogenee (Cass. SU 12567/2018) |
| 14 | Qual è la differenza tra danno biologico e danno differenziale? | Differenziale | Biologico = quota INAIL; differenziale = eccedenza civilistica |
| 15 | Quanto paga l'INAIL per il danno biologico? | Importi | Capitale 6-15% per età; rendita 16-100% |
| 16 | Cos'è la quota integrativa INAIL? | Famiglia | Art. 77 T.U.: +5% su quota patrim. per coniuge/figli |
| 17 | La rendita INAIL fa cumulo con la pensione INPS? | Cumulo | Sì, cumulabile con pensione INPS vecchiaia/invalidità |
| 18 | Come si richiede l'aggravamento dell'invalidità INAIL? | Revisione | Domanda di revisione (1 volta per capitale; sempre per rendita) |
| 19 | Cosa succede se l'invalidità è inferiore al 6%? | Franchigia | Nessun indennizzo (franchigia); residua azione civile |
| 20 | Quanto è la retribuzione minima e massima INAIL 2025? | Retribuzione | Min €20.426,70; max €37.935,30 (Circ. 37/2025) |
| 21 | Quanto è l'assegno funerario INAIL 2025? | Accessorie | €12.342,84 una tantum |
| 22 | Quanto è l'APC INAIL 2025? | Accessorie | €672,72/mese, esente IRPEF |
| 23 | Quando si applica la tabella unisex INAIL? | Tabelle | Eventi e MP denunciate dal 1° gennaio 2019 (DM 45/2019) |
| 24 | Il tunnel carpale è risarcito dall'INAIL? | Casi particolari | Sì, fino a 7 punti (codice 163 tab. menomazioni) |
| 25 | Quanto vale la sindrome del tunnel carpale INAIL? | Casi particolari | Fino a 7%, normalmente capitale 6-15% |

---

## Fonti Bibliografia (per "Fonti e Riferimenti")

### Istituzionali
1. Normattiva.it — testi consolidati T.U. 1124/1965, D.Lgs. 38/2000, DPR 601/1973
2. INAIL.it — sezione "Prestazioni economiche", circolari, allegati
3. Ministero del Lavoro — DM 45/2019, DM 85/2025
4. Gazzetta Ufficiale — DM 12/07/2000, DM 45/2019, DM 85/2025

### Specialistiche
5. Consulenti del Lavoro — guida rivalutazione 2025 (https://www.consulentidellavoro.it/home/storico-articoli/18867)
6. FiscoEtasse — tabella comparativa 2024-2025 (https://www.fiscoetasse.com/normativa-prassi/13503)
7. Patronato Acli — guida quote integrative (https://www.patronato.acli.it/inail-la-quota-per-danno-biologico/)
8. Patronato INCA — guida prestazioni e indennizzi
9. Olympus.uniurb.it — repository normativa Università Urbino

### Giurisprudenza
10. Cassazione SU 12566/2018 — poste omogenee danno differenziale
11. Cassazione SU 12567/2018 — assistenza domiciliare APC
12. Cassazione Sez. Lavoro 30293/2023 — scorporo rendita
13. Cassazione Sez. Lavoro 27444/2025 — malattie tabellate

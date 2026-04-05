# Research Brief — Calcolo Termini Processuali

> Extracted from raw-research.md (96K chars deep research) + supplementary verification
> Date: 2026-04-05

## Normativa Verificata

| Norma | Descrizione | URL Normattiva |
|-------|-------------|----------------|
| Art. 155 c.p.c. | Computo dei termini | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155 |
| Art. 152-154 c.p.c. | Perentorietà, sospensione, proroga | (stesso decreto) |
| L. 742/1969 | Sospensione feriale termini | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742!vig= |
| D.L. 132/2014 conv. L. 162/2014 | Modifica sospensione feriale (1-31 agosto) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto-legge:2014-09-12;132!vig= |
| D.Lgs. 149/2022 | Riforma Cartabia | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149!vig= |
| L. 263/2005 | Introduzione commi 5-6 art. 155 (sabato) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2005-12-28;263 |
| L. 260/1949 | Giorni festivi | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1949-03-27;260!vig= |
| D.Lgs. 546/1992 | Processo tributario | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546!vig= |
| L. 206/2021 | Legge delega riforma Cartabia | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2021-11-26;206!vig= |
| Art. 92 R.D. 12/1941 | Eccezioni sospensione feriale | — |

## Art. 155 c.p.c. — Testo Integrale Verificato

**Comma 1:** "Nel computo dei termini a giorni o ad ore, si escludono il giorno o l'ora iniziali."
**Comma 2:** "Per il computo dei termini a mesi o ad anni, si osserva il calendario comune."
**Comma 3:** "I giorni festivi si computano nel termine."
**Comma 4:** "Se il giorno di scadenza è festivo, la scadenza è prorogata di diritto al primo giorno seguente non festivo."
**Comma 5:** "La proroga prevista dal quarto comma si applica altresì ai termini per il compimento degli atti processuali svolti fuori dell'udienza che scadono nella giornata del sabato."
**Comma 6:** "Resta fermo il regolare svolgimento delle udienze e di ogni altra attività giudiziaria, anche svolta da ausiliari, nella giornata del sabato, che ad ogni effetto è considerata lavorativa."

**NOTA CRITICA:** I festivi si contano SEMPRE nel termine (c.3). NON esiste eccezione per termini >= 6 giorni. L'unica proroga è se il dies ad quem finale cade in festivo (c.4) o sabato per atti fuori udienza (c.5).

Fonte: https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html

## Regole di Calcolo (corrette)

### Calcolo a Giorni (Numeratio Dierum)
1. Dies a quo (giorno della notifica/deposito) NON si conta (c.1)
2. Si contano tutti i giorni successivi, COMPRESI i festivi (c.3)
3. Se il dies ad quem cade in giorno festivo → proroga al primo non festivo (c.4)
4. Se il dies ad quem cade di sabato E l'atto è fuori udienza → proroga al primo non festivo (c.5)
5. Sabato resta lavorativo per udienze (c.6)

### Calcolo a Mesi/Anni (Nominatio Dierum)
1. Si osserva il calendario comune (c.2)
2. Termine di 1 mese dal 15 gennaio → scade 15 febbraio
3. Se giorno corrispondente non esiste → ultimo giorno del mese (Cass. 2002/2018)
4. Es: 3 mesi dal 31 agosto → 30 novembre (novembre ha 30 giorni)
5. Se dies ad quem cade in festivo → proroga (c.4)

### Termini Liberi
- Né dies a quo né dies ad quem si contano
- Si applicano ai termini a comparire (art. 163-bis: 120 giorni)
- Differenza pratica: N-2 giorni utili vs N-1 per termini ordinari

### Calcolo a Ritroso
- Due orientamenti giurisprudenziali sul sabato:
  - **Maggioritario (prevalente):** sabato equiparato a festivo anche a ritroso (Cass. 21335/2017, Cass. 26900/2020)
  - Minoritario (superato): sabato lavorativo a ritroso (Trib. Treviso 2008, Trib. Enna 2011)
- **Approccio prudenziale consigliato:** trattare sabato come festivo anche a ritroso

## Sospensione Feriale — L. 742/1969

**Art. 1 (vigente dal 2015):** "Il decorso dei termini processuali relativi alle giurisdizioni ordinarie ed a quelle amministrative è sospeso di diritto dal 1° al 31 agosto di ciascun anno, e riprende a decorrere dalla fine del periodo di sospensione. Ove il decorso abbia inizio durante il periodo di sospensione, l'inizio stesso è differito alla fine di detto periodo."

**Periodo:** 1-31 agosto (dal 2015, per D.L. 132/2014 conv. L. 162/2014)
**Prima del 2015:** 1 agosto - 15 settembre

**Eccezioni (art. 92 R.D. 12/1941 + art. 3 L. 742/1969):**
- Cause in materia di alimenti
- Procedimenti del lavoro e previdenza
- Provvedimenti cautelari e conservativi
- Procedure di sfratto
- Opposizione all'esecuzione forzata

**Dies a quo e sospensione (Cass. 19874/2012):** Il 1° settembre è compreso nel novero dei giorni concessi dal termine. Non è corretto considerare il 1° settembre come nuovo dies a quo.

**Sospensione straordinaria COVID:** D.L. 18/2020 art. 83 c.2: sospensione dal 9 marzo al 15 aprile 2020, poi prorogata con D.L. 23/2020.

## Riforma Cartabia — Termini Modificati (D.Lgs. 149/2022, in vigore dal 28/02/2023)

| Articolo | Atto | Prima | Dopo Cartabia | Variazione |
|----------|------|-------|---------------|------------|
| 163-bis | Termine a comparire | 90 gg | 120 gg | +30 gg |
| 165 | Iscrizione a ruolo | contestuale | 10 gg da notifica | NUOVO |
| 166 | Costituzione convenuto | 20 gg prima udienza | 70 gg prima udienza | +50 gg |
| 171-ter | Memorie integrative | — | 40/20/10 gg prima udienza | NUOVO |
| 189 | Conclusioni e repliche | vari | 40/20/10 gg | MODIFICATO |
| 275-bis | Proc. semplificato | — | conclusioni 30 gg, repliche 15 gg | NUOVO |
| 325 | Impugnazioni | 30 gg (60 cass.) | 30 gg (60 cass.) | STABILE |
| 473-bis.17 | Proc. familiari | — | 20/10/5 gg prima udienza | NUOVO |
| 473-bis.28 | Conclusioni familiari | — | 60/30/15 gg prima decisione | NUOVO |

### Termini Procedure Esecutive (post-Cartabia)
| Articolo | Atto | Termine |
|----------|------|---------|
| 481 | Scadenza precetto | 90 giorni |
| 497 | Efficacia pignoramento | 45 giorni |
| 501 | Istanza vendita (dilatorio) | 10 giorni |
| 518 | Iscrizione ruolo pignoramento mobiliare | 15 giorni |
| 521-bis | Iscrizione ruolo pignoramento autoveicoli | 30 giorni |
| 543 | Iscrizione ruolo pignoramento presso terzi | 30 giorni |
| 557 | Iscrizione ruolo pignoramento immobiliare | 15 giorni |
| 567 | Deposito documentazione catastale | 45 giorni |
| 617 | Opposizione atti esecutivi | 20 giorni |
| 641 | Opposizione decreto ingiuntivo | 40 giorni |
| 644 | Perdita efficacia decreto ingiuntivo | 60 giorni |

## Giorni Festivi in Italia (L. 260/1949)

1. 1° gennaio — Capodanno
2. 6 gennaio — Epifania
3. Lunedì di Pasqua (data mobile)
4. 25 aprile — Festa della Liberazione
5. 1° maggio — Festa del Lavoro
6. 2 giugno — Festa della Repubblica
7. 15 agosto — Ferragosto (Assunzione)
8. 1° novembre — Ognissanti
9. 8 dicembre — Immacolata Concezione
10. 25 dicembre — Natale
11. 26 dicembre — Santo Stefano
+ tutte le domeniche

## Tipologie di Termini

| Tipo | Definizione | Conseguenza violazione | Riferimento |
|------|-------------|----------------------|-------------|
| Perentorio | Scadenza estingue il diritto di compiere l'atto | Decadenza irreversibile | Art. 152 c.1 cpc |
| Ordinatorio | Può essere prorogato per giusta causa | Sanabile dal giudice | Art. 152 c.2 cpc |
| Dilatorio | Sospende procedimento fino al decorso | Nessuna decadenza | Dottrina |

**Rimessione in termini (art. 153 c.2 cpc):** Concessa se fatto non imputabile alla parte né al difensore, ritardo non > 30 giorni. Cass. 27449/2015: errore di calcolo del difensore NON è fatto non imputabile.

## Giurisprudenza Chiave

| Sentenza | Tema | Massima |
|----------|------|---------|
| Cass. 19874/2012 | Sospensione feriale + dies a quo | Il 1° settembre si computa nel termine, non è nuovo dies a quo |
| Cass. 21335/2017 | Sabato a ritroso | Sabato equiparato a festivo anche nel calcolo a ritroso |
| Cass. 26900/2020 | Sabato a ritroso (consolidamento) | Conferma orientamento 21335/2017 |
| Cass. 2002/2018 | Giorno inesistente nel mese | Se mese non ha giorno corrispondente → ultimo giorno del mese |
| Cass. 11956/2007 | Calcolo a mesi | Regola del giorno corrispondente consolidata |
| Cass. 27449/2015 | Rimessione in termini | Errore calcolo avvocato non è fatto non imputabile |
| Cass. 25814/2015 | Sabato e termini liberi | Sabato equiparato a festivo anche per termini liberi (atti fuori udienza) |

## Errori Comuni

1. **Conteggiare il dies a quo** — il giorno iniziale NON si conta mai
2. **Dimenticare lo slittamento sabato** — se dies ad quem cade sabato e atto è fuori udienza → lunedì
3. **Non considerare sospensione feriale** — termine che attraversa agosto va prorogato
4. **Confondere termini liberi/ordinari** — nei liberi anche il dies ad quem non si conta
5. **Errori nel calcolo a ritroso** — sabato va trattato come festivo (approccio prudenziale)
6. **Credere che i festivi non si contino** — i festivi SI computano (art. 155 c.3), solo il dies ad quem festivo si proroga

## Termini Penali (artt. 172-176 c.p.p.)

- Sostanzialmente identici al civile per computo (art. 174 cpp ≈ art. 155 cpc)
- Comma 5-6 (sabato) non espressamente nel cpp, ma giurisprudenza lo applica per analogia
- Sospensione feriale: art. 135 cpp, stesso periodo 1-31 agosto
- Rimessione in termini: art. 176 cpp, stessi requisiti

## Termini Tributari (D.Lgs. 546/1992)

- Art. 14: rinvio a cpc per regole di computo
- Art. 22: sospensione feriale 1-31 agosto, SENZA eccezioni (a differenza del civile)
- Ricorso CTP/CTU: 30 giorni da comunicazione

## Section-to-Research Mapping

| Planned Page Section | Raw Research Sections | Key Data Points |
|---|---|---|
| Calcolatore | Tutta la sezione regole di calcolo | Art. 155, festivi, sospensione, Cartabia |
| Cos'è il Computo dei Termini | §1.1-1.4 Definizione e tipologie | Art. 152-154, perentori/ordinatori/dilatori |
| Calcolo a Giorni | §3.1-3.4 Numeratio dierum | Art. 155 c.1, dies a quo, esempi |
| Calcolo a Mesi/Anni | §4.1-4.5 Nominatio dierum | Art. 155 c.2, giorno inesistente, Cass. 2002/2018 |
| Termini Liberi | §5.1-5.6 | Art. 163-bis, doppia non computabilità |
| Sabato e Festivi | §6.1-6.6 | Art. 155 cc.3-6, L. 260/1949, L. 263/2005 |
| Calcolo a Ritroso | §7.1-7.4 | Cass. 21335/2017, Cass. 26900/2020, approccio prudenziale |
| Sospensione Feriale | §8.1-8.10 | L. 742/1969, D.L. 132/2014, eccezioni, COVID |
| Riforma Cartabia | §9.1-9.4 | D.Lgs. 149/2022, tabella confronto |
| Tabella Termini | §10.1-10.6 | Tutti i termini per fase/procedimento |
| Termini Penali e Tributari | §11-12 | Art. 172-176 cpp, D.Lgs. 546/1992 |
| Errori Comuni | §13 | 6 errori tipici con esempi |
| FAQ | PAA + §13 + tutti i temi | 20+ domande con fonti |
| Normativa | Tutte le norme citate | URL Normattiva verificati |

## FAQ (20 items, 5 categorie)

### Calcolo e Computo
1. **Come si calcolano i termini processuali civili?** — Il dies a quo non si conta (art. 155 c.1 cpc), i festivi si computano nel termine (c.3), se la scadenza cade in festivo si proroga al primo non festivo (c.4). Per atti fuori udienza, il sabato è equiparato a festivo (c.5). Fonte: art. 155 cpc.
2. **Cosa significa "dies a quo non computatur"?** — Il giorno da cui decorre il termine (notifica, deposito) non si conta. Il computo inizia dal giorno successivo. Es: notifica il 5 → primo giorno = 6. Fonte: art. 155 c.1 cpc.
3. **Come si calcolano i termini a mesi?** — Si osserva il calendario comune (art. 155 c.2). Es: 1 mese dal 15 gennaio = 15 febbraio. Se il giorno non esiste, scade l'ultimo del mese (Cass. 2002/2018).
4. **Come si calcolano i termini 190 CPC?** — Art. 189/190 cpc: conclusionali 40 gg prima dell'udienza, repliche 20 gg, memorie 10 gg. Sono termini ordinari a ritroso dall'udienza.
5. **Cosa sono i termini liberi?** — Nei termini liberi non si computano né il dies a quo né il dies ad quem. Si applicano ai termini a comparire (art. 163-bis: 120 gg).

### Scadenze e Festivi
6. **I termini processuali civili scadono di sabato?** — Per atti fuori udienza, il sabato è equiparato a festivo (art. 155 c.5 cpc, L. 263/2005). La scadenza si proroga al lunedì. Per udienze, il sabato resta lavorativo (c.6).
7. **Quali sono i giorni festivi che influenzano i termini?** — L. 260/1949: 1 gen, 6 gen, Pasquetta, 25 apr, 1 mag, 2 giu, 15 ago, 1 nov, 8 dic, 25 dic, 26 dic + tutte le domeniche.
8. **Se la scadenza cade di venerdì festivo, il termine slitta a sabato o lunedì?** — Se l'atto è fuori udienza: venerdì festivo → sabato (c.4) → ma sabato equiparato a festivo (c.5) → domenica festiva → lunedì. Se atto in udienza: venerdì festivo → sabato (lavorativo per udienze).

### Sospensione Feriale
9. **Quando si applica la sospensione feriale dei termini?** — Dal 1° al 31 agosto (L. 742/1969 mod. D.L. 132/2014). I termini si sospendono e riprendono dal 1° settembre.
10. **La sospensione feriale è di 30 o 31 giorni?** — 31 giorni (1-31 agosto). Prima del 2015 era 1° agosto - 15 settembre (46 giorni).
11. **Quando NON si applica la sospensione feriale?** — Cause di alimenti, lavoro, cautelari, sfratti, opposizione esecuzione (art. 3 L. 742/1969). Nel tributario si applica sempre senza eccezioni.
12. **Come si calcola un termine con sospensione feriale?** — Es: 30 gg dal 20 luglio. Scadenza ordinaria 19 agosto. Giorni sospesi (1-19 agosto) = 19. Scadenza reale: 19 agosto + 19 = 7 settembre.

### Riforma Cartabia
13. **Cosa cambia con la riforma Cartabia per i termini processuali?** — D.Lgs. 149/2022 (dal 28/02/2023): termine a comparire da 90 a 120 gg, costituzione convenuto da 20 a 70 gg prima udienza, nuovi termini memorie integrative 171-ter (40/20/10 gg).
14. **Quali sono i termini dell'art. 171-ter cpc?** — Memorie integrative: 40 gg prima udienza (1ª memoria), 20 gg (2ª memoria), 10 gg (3ª memoria). Introdotto dalla riforma Cartabia.
15. **Come si calcola il termine per la costituzione del convenuto?** — 70 gg prima dell'udienza (art. 166 cpc post-Cartabia). Calcolo a ritroso dall'udienza. Sabato equiparato a festivo.

### Calcolo a Ritroso e Casi Particolari
16. **Come funziona il calcolo a ritroso?** — Si parte dalla data nota (es. udienza) e si conta all'indietro. Giurisprudenza prevalente (Cass. 21335/2017): sabato equiparato a festivo anche a ritroso.
17. **Il sabato conta nel calcolo a ritroso?** — Secondo l'orientamento prevalente (Cass. 21335/2017, Cass. 26900/2020), no. Il sabato è equiparato a festivo. Approccio prudenziale: anticipare sempre al venerdì.
18. **Cosa succede se non rispetto un termine perentorio?** — Decadenza: si perde il diritto di compiere l'atto (art. 152 c.1 cpc). Possibile rimessione in termini solo per fatto non imputabile (art. 153 c.2).
19. **Il calcolo dei termini processuali penali è uguale al civile?** — Sostanzialmente sì (art. 174 cpp ≈ art. 155 cpc). Differenza: nel cpp il sabato non è espressamente menzionato, ma per analogia si applica.
20. **Come funziona la sospensione feriale nel processo tributario?** — Stesse date (1-31 agosto), ma SENZA eccezioni. Si applica a tutte le cause tributarie (D.Lgs. 546/1992 art. 22).

## Sources Bibliography

1. Brocardi.it — Art. 155 cpc: https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html
2. Normattiva.it — L. 742/1969: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742!vig=
3. Normattiva.it — D.Lgs. 149/2022: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149!vig=
4. Normattiva.it — L. 263/2005: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2005-12-28;263
5. Normattiva.it — L. 260/1949: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1949-03-27;260!vig=
6. Normattiva.it — D.L. 132/2014: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto-legge:2014-09-12;132!vig=
7. Normattiva.it — D.Lgs. 546/1992: https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1992-12-31;546!vig=
8. Studio Cataldi — Sospensione feriale: https://www.studiocataldi.it/articoli/18528-la-sospensione-dei-termini-nel-periodo-feriale.asp
9. Altalex — Guida termini processuali: https://www.altalex.com/guide/calcolo-termini-processuali-civili
10. Dipartimento Giustizia Tributaria — Sospensione feriale: https://www.dgt.mef.gov.it/gt/sospensione-feriale

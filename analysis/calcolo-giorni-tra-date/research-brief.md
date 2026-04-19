# Research Brief — Calcolo Giorni tra Date

> **Source files**: `raw-research.md` (Perplexity Deep Research, 53,844 chars, 50 citations) + supplementary Perplexity search (L. 151/2025 verification) + Python calendar verification
> **Data ricerca**: 2026-04-19

---

## 1. Normativa Core (VERIFIED)

| Norma | Articolo | URL Normattiva | Utilizzo nella pagina |
|-------|----------|----------------|-----------------------|
| **Art. 155 c.p.c.** | Computo dei termini (processuali) | `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155` | Sezione legale principale |
| **Art. 2963 c.c.** | Computo dei termini (prescrizione) | `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2963` | Distinzione termini sostanziali/processuali |
| **Art. 163 bis c.p.c.** | Termini liberi (citazione) | `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art163bis` | Esempio giorni liberi |
| **Art. 325 c.p.c.** | Termini impugnazione (30 gg, 60 gg) | `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art325` | Applicazione pratica |
| **Art. 641 c.p.c.** | Decreto ingiuntivo (40 gg opposizione) | `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art641` | Applicazione pratica |
| **L. 742/1969** | Sospensione feriale (1-31 agosto) | `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742` | Sezione sospensione feriale |
| **D.L. 132/2014** (convertito L. 162/2014) | Riduzione sospensione feriale da 45 a 31 gg | `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132` | Contesto storico riforma |
| **L. 260/1949** | Festività nazionali | `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1949-05-27;260` | Tabella festività |
| **L. 54/1977** | Modifiche festività (soppressioni) | `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1977-03-05;54` | Contesto storico |
| **L. 336/2000** | Ripristino 2 giugno Festa Repubblica | `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2000-11-20;336` | Contesto storico |
| **L. 151/2025** ⭐ NUOVA | San Francesco d'Assisi (4 ottobre) dal 2026 | `https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-10-08;151` | Highlight 2026 |

### Testo verbatim art. 155 c.p.c.

> "Nel computo dei termini a giorni o ad ore, si escludono il giorno o l'ora iniziali.
> Per il computo dei termini a mesi o ad anni, si osserva il calendario comune.
> I giorni festivi si computano nel termine.
> Se il giorno di scadenza è festivo, la scadenza è prorogata di diritto al primo giorno seguente non festivo.
> La proroga prevista dal quarto comma si applica altresì ai termini per il compimento degli atti processuali svolti fuori dell'udienza che scadono nella giornata del sabato. Resta fermo il regolare svolgimento delle udienze e di ogni altra attività giudiziaria, anche svolta da ausiliari, nella giornata del sabato, che ad ogni effetto è considerata lavorativa."

### Testo verbatim art. 2963 c.c.

> "I termini di prescrizione contemplati dal presente codice e dalle altre leggi si computano secondo il calendario comune. Non si computa il giorno nel corso del quale cade il momento iniziale del termine e la prescrizione si verifica con lo spirare dell'ultimo istante del giorno finale. Se il termine scade in giorno festivo, è prorogato di diritto al giorno seguente non festivo. La prescrizione a mesi si verifica nel mese di scadenza e nel giorno di questo corrispondente al giorno del mese iniziale. Se nel mese di scadenza manca tale giorno, il termine si compie con l'ultimo giorno dello stesso mese."

### Testo verbatim L. 742/1969, art. 1 comma 1

> "Il decorso dei termini processuali relativi alle giurisdizioni ordinarie ed a quelle amministrative è sospeso di diritto dal 1° al 31 agosto di ciascun anno, e riprende a decorrere dalla fine del periodo di sospensione. Ove il decorso abbia inizio durante il periodo di sospensione, l'inizio stesso è differito alla fine di detto periodo."

---

## 2. Festività Nazionali Italiane — Tabella VERIFICATA (2025-2027)

> **Nota**: la colonna "Giorno della Settimana" è stata verificata via Python (calendario Gregoriano). Il raw-research conteneva errori sul 6 gennaio 2026 e 4 ottobre 2026 — qui sono corretti.

| Data | Festività | 2025 | 2026 | 2027 | Note |
|------|-----------|------|------|------|------|
| 1 gennaio | Capodanno | Mercoledì | Giovedì | Venerdì | L. 260/1949 |
| 6 gennaio | Epifania | Lunedì | **Martedì** | Mercoledì | L. 260/1949 |
| 20 aprile 2025 / 5 aprile 2026 / 28 marzo 2027 | Pasqua | Domenica | Domenica | Domenica | Mobile (Gauss) |
| 21 aprile 2025 / 6 aprile 2026 / 29 marzo 2027 | Lunedì dell'Angelo | Lunedì | Lunedì | Lunedì | Mobile |
| 25 aprile | Festa Liberazione | Venerdì | Sabato | Domenica | L. 260/1949 |
| 1 maggio | Festa Lavoro | Giovedì | Venerdì | Sabato | L. 260/1949 |
| 2 giugno | Festa Repubblica | Lunedì | Martedì | Mercoledì | L. 336/2000 |
| 15 agosto | Ferragosto | Venerdì | Sabato | Domenica | L. 260/1949 |
| **4 ottobre** ⭐ | **San Francesco d'Assisi** | — | **Domenica** | Lunedì | **L. 151/2025 (dal 2026)** |
| 1 novembre | Ognissanti | Sabato | Domenica | Lunedì | L. 260/1949 |
| 8 dicembre | Immacolata | Lunedì | Martedì | Mercoledì | L. 260/1949 |
| 25 dicembre | Natale | Giovedì | Venerdì | Sabato | L. 260/1949 |
| 26 dicembre | Santo Stefano | Venerdì | Sabato | Domenica | L. 260/1949 |

**Totale festività nazionali**: 12 fino al 2025, **13 dal 2026** (con aggiunta San Francesco).

**Nel 2026**: 13 festività, ma solo 6 cadono in giorno lavorativo (Capodanno giovedì, Epifania martedì, Lunedì Angelo, Venerdì 1 maggio, Martedì 2 giugno, Martedì 8 dicembre, Venerdì 25 dicembre).

### Formula calcolo Pasqua (Algoritmo di Gauss, calendario Gregoriano)

```
a = anno mod 19
b = anno mod 4
c = anno mod 7
M = 24 (per secolo 1900-2099), N = 5 (per secolo 1900-2099)
d = (19a + M) mod 30
e = (2b + 4c + 6d + N) mod 7
Se d + e < 10: Pasqua = (d+e+22) marzo
Altrimenti: Pasqua = (d+e-9) aprile
```

Correzioni eccezionali:
- Se d = 29 ed e = 6 → Pasqua = 19 aprile (invece di 26 aprile)
- Se d = 28 ed e = 6 e a > 10 → Pasqua = 18 aprile (invece di 25 aprile)

---

## 3. Principi Fondamentali del Computo

### Principio "dies a quo non computatur in termino, dies ad quem computatur"

Il giorno iniziale **NON si computa**, il giorno finale **SI computa**. Locuzione latina codificata in art. 155 c.p.c. e art. 2963 c.c.

**Esempio numerico**: termine 30 giorni dal 10 aprile.
- Dies a quo: 10 aprile (escluso)
- Primo giorno computato: 11 aprile
- Dies ad quem: 10 maggio (incluso)
- Totale: 30 giorni

### Eccezione: "giorni liberi" (es. art. 163 bis c.p.c. — 120 gg citazione)

Nei termini liberi si **escludono entrambi** dies a quo e dies ad quem.

**Esempio**: 120 giorni liberi da citazione notificata 10 marzo.
- Dies a quo: 10 marzo (escluso)
- Primo giorno libero: 11 marzo
- Centoventesimo giorno libero: 8 luglio
- Dies ad quem: NON coincide col 120° giorno; udienza fissabile dal 9 luglio in poi

### Proroga al primo giorno non festivo (art. 155 co. 4 c.p.c.)

Se il dies ad quem cade in giorno festivo, la scadenza è **prorogata di diritto** al primo giorno non festivo successivo. Si applica anche al sabato per atti fuori udienza (art. 155 co. 5 c.p.c., introdotto da L. 263/2005).

**Esempio 2026**: termine scade 25 dicembre venerdì → già festivo → proroga al 28 dicembre lunedì (26 sabato festivo, 27 domenica).

**Termini a ritroso (Cass. n. 14767/2014)**: la proroga opera ALL'INDIETRO. Se il termine cadrebbe in giorno festivo, si anticipa al primo giorno non festivo cronologicamente **precedente**.

---

## 4. Tipologie di Giorni (classificazione giuridica)

| Tipo | Definizione | Esempio uso | Norma |
|------|-------------|-------------|-------|
| **Giorni naturali / consecutivi** | Tutti i giorni del calendario (weekend + festivi inclusi) | Termini processuali civili ordinari | Art. 155 c.p.c. |
| **Giorni feriali** | Giorni lavorativi in cui si svolge attività (esclusi sabati, domeniche, festivi) | Diritto del lavoro | CCNL, art. 155 co. 5 c.p.c. |
| **Giorni lavorativi** | Sinonimo di feriali in senso stretto | Preavvisi CCNL | — |
| **Giorni festivi** | Domeniche + festività nazionali L. 260/1949 | Proroga scadenze | L. 260/1949, L. 151/2025 |
| **Giorni liberi** | Non si computano dies a quo né dies ad quem | Termini citazione (163 bis c.p.c.), termini comparizione all'udienza | Art. 163 bis c.p.c. |

---

## 5. Sospensione Feriale (L. 742/1969)

- **Periodo attuale**: 1 agosto - 31 agosto (31 giorni)
- **Periodo storico**: 1 agosto - 15 settembre fino al 2014 (46 giorni)
- **Riforma**: D.L. 132/2014 (convertito L. 162/2014) ha ridotto a 31 giorni dal 2015
- **Finalità riforma**: accelerare procedimenti e smaltire arretrato

### Procedimenti ESCLUSI dalla sospensione
- Causa di alimenti
- Controversie individuali di lavoro e previdenziali
- Procedimenti cautelari
- Opposizione all'esecuzione (art. 615 c.p.c.)
- Giudizi di sfratto
- Dichiarazione e revoca fallimento
- Procedimenti penali (sospensione specifica art. 129 disp. att. c.p.p.)
- Distribuzione nell'esecuzione forzata (art. 512 c.p.c.)

### Esempio 1: termine di 30 giorni dal 20 luglio 2026
- 20 luglio escluso (dies a quo)
- 21-31 luglio = 11 giorni
- 1-31 agosto: SOSPENSIONE (0 giorni)
- Riprende 1 settembre (ma 1 settembre è il giorno di riavvio del computo)
- Servono altri 19 giorni: 1-19 settembre = 19 giorni
- **Scadenza: 19 settembre 2026**

### Esempio 2: termine 40 giorni che inizia il 15 agosto 2026
- Il dies a quo cade nel periodo feriale → inizio differito al 1 settembre 2026
- 1 settembre (escluso) + 40 giorni = **11 ottobre 2026**
- MA 11 ottobre 2026 è domenica → proroga al lunedì 12 ottobre 2026

---

## 6. Applicazioni Pratiche

| Uso | Giorni | Base normativa | Note |
|-----|--------|----------------|------|
| Appello civile | 30 gg dalla notifica sentenza | art. 325 c.p.c. | Soggetto a sospensione feriale |
| Ricorso per Cassazione | 60 gg dalla notifica | art. 325 c.p.c. | Soggetto a sospensione feriale |
| Termine lungo impugnazione | 6 mesi dalla pubblicazione | art. 327 c.p.c. | Soggetto a sospensione feriale |
| Opposizione decreto ingiuntivo | 40 gg dalla notifica | art. 641 c.p.c. | Soggetto a sospensione feriale |
| Riassunzione causa sospesa | 3 mesi | art. 297 c.p.c. | Giorni naturali |
| Memorie 183 c.p.c. | 30+30+20 gg | art. 183 co. 6 c.p.c. | A ritroso |
| Comparse conclusionali | 60 gg prima dell'udienza | art. 190 c.p.c. | A ritroso |
| Preavviso disdetta locazione abitativa | 6 mesi | art. 4 L. 392/1978 | Calendario comune |
| Ravvedimento operoso | 14 gg / 30 gg / 90 gg / 1 anno | art. 13 D.Lgs. 472/1997 | Riduzioni sanzione |
| Ferie lavoratori | min 26 gg/anno | D.Lgs. 66/2003 | Non rinunciabili per 2 settimane |

---

## 7. Formule Excel / Google Sheets

### Differenza semplice
```
=B2-A2                          # Giorni tra due date (formato differenza)
=GIORNI(B2;A2)                  # Funzione dedicata
=DATA.DIFF(A2;B2;"d")          # Con parametro "d"
```

### Con opzioni (DATA.DIFF)
```
=DATA.DIFF(A2;B2;"y")          # Anni completi
=DATA.DIFF(A2;B2;"m")          # Mesi completi
=DATA.DIFF(A2;B2;"d")          # Giorni totali
=DATA.DIFF(A2;B2;"ym")         # Mesi esclusi anni
=DATA.DIFF(A2;B2;"md")         # Giorni esclusi mesi (deprecata)
=DATA.DIFF(A2;B2;"yd")         # Giorni esclusi anni
```

### Giorni lavorativi (esclude weekend + festività)
```
=GIORNI.LAVORATIVI.TOT(A2;B2;C2:C15)           # Esclude sab+dom+festività C2:C15
=GIORNI.LAVORATIVI.TOT.INTL(A2;B2;1;C2:C15)    # Con weekend personalizzabile
```

Parametri weekend per `GIORNI.LAVORATIVI.TOT.INTL`:
- `1` = sabato e domenica (default)
- `2` = domenica e lunedì
- `11` = solo domenica
- `12` = solo lunedì
- etc.

### Aggiungere/sottrarre giorni a una data
```
=A2+30                  # 30 giorni dopo A2
=A2-15                  # 15 giorni prima di A2
=GIORNO.LAVORATIVO(A2;30;C2:C15)   # 30 giorni lavorativi dopo A2, esclude festività
```

---

## 8. Errori Comuni (per AlertBox)

1. **Includere il dies a quo** → molti calcoli pratici contano il giorno iniziale invece di escluderlo
2. **Confondere giorni naturali e lavorativi** → termini processuali civili sono in giorni naturali (weekend + festivi inclusi)
3. **Ignorare sospensione feriale** → termini agosto NON decorrono; errore grave nei processi civili e amministrativi
4. **Trascurare proroga dies ad quem festivo** → depositi il 25 dicembre = scadenza prorogata al 28 dicembre (nel 2026)
5. **Applicare proroga ai termini a ritroso** in avanti invece che all'indietro → la proroga per termini a ritroso opera all'INDIETRO (Cass. 14767/2014)
6. **Non aggiornare calendario 2026** → **4 ottobre 2026 è nuova festività (San Francesco d'Assisi, L. 151/2025)** non prevista prima
7. **Errato calcolo notifica PEC dopo le 21** → per il mittente notifica tempestiva se entro le 24 (Corte Cost. 75/2019); per il destinatario perfezionamento solo alle 7 del giorno dopo (art. 16 septies D.L. 179/2012)
8. **Dimenticare anni bisestili** → 2024 = 366 giorni, 2028 = 366 giorni; 2025, 2026, 2027 = 365

---

## 9. FAQ (15 items strutturate per page)

### Categoria: Come si calcola

**Q1: Come si calcola il numero di giorni tra due date?**
Si sottrae la data iniziale dalla data finale. Nel diritto italiano si applica il principio "dies a quo non computatur": il giorno iniziale non si conta, il giorno finale sì. Esempio: da 10 aprile a 25 aprile = 15 giorni (dal 11 al 25 aprile inclusi).
Fonti: [art. 155 c.p.c.](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art155), [art. 2963 c.c.](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2963)

**Q2: Qual è la formula per calcolare i giorni tra due date?**
La formula matematica è: giorni = data_finale − data_iniziale. Per i termini processuali: si esclude il dies a quo e si include il dies ad quem. Per breakdown in anni/mesi/giorni si usa il calendario comune.

**Q3: Il giorno iniziale si conta o no?**
No, nel diritto italiano il dies a quo (giorno iniziale) non si computa nel termine. È una regola generale codificata sia nell'art. 155 c.p.c. (termini processuali) sia nell'art. 2963 c.c. (prescrizione).

### Categoria: Tipologie di giorni

**Q4: Che differenza c'è tra giorni lavorativi, feriali e naturali?**
I giorni naturali (o consecutivi) comprendono TUTTI i giorni del calendario, inclusi sabati, domeniche e festività. I giorni feriali escludono sabati e domeniche. I giorni lavorativi sono sinonimo di feriali, talvolta con ulteriori esclusioni contrattuali. Nei termini processuali civili ordinari si usano sempre i giorni naturali.

**Q5: Cosa sono i giorni liberi nel diritto?**
I giorni liberi sono un tipo speciale di termine in cui si escludono SIA il dies a quo SIA il dies ad quem. Esempio classico: art. 163 bis c.p.c. prevede almeno 120 giorni liberi tra notifica della citazione e udienza.

**Q6: Il sabato è lavorativo?**
Nel processo civile, per gli atti da compiersi fuori udienza, il sabato è considerato non lavorativo ai fini della proroga al primo giorno non festivo successivo (art. 155 co. 5 c.p.c.). Però le udienze e l'attività giudiziaria ordinaria si svolgono regolarmente anche di sabato. Nel diritto del lavoro la risposta dipende dal CCNL applicabile.

### Categoria: Uso processuale

**Q7: Come si calcolano i termini processuali?**
Si applica l'art. 155 c.p.c.: dies a quo escluso, dies ad quem incluso, giorni festivi computati, proroga al primo giorno non festivo se scadenza festiva. I termini sono soggetti a sospensione feriale 1-31 agosto (L. 742/1969).

**Q8: Quando scade il termine se cade di domenica o festivo?**
La scadenza è automaticamente prorogata al primo giorno non festivo successivo (art. 155 co. 4 c.p.c.). La proroga opera "di diritto": non serve alcuna istanza.

**Q9: La sospensione feriale dei termini quando vale?**
Dal 1 al 31 agosto di ogni anno (L. 742/1969 mod. L. 162/2014). In questo periodo i termini processuali ordinari NON decorrono. Esclusi: cause di alimenti, lavoro, cautelari, sfratto, fallimento, esecuzione, penale.

**Q10: Cos'è un termine a ritroso e come si calcola?**
Un termine a ritroso si calcola "all'indietro" dalla data finale (es. memorie scritte prima di un'udienza). La proroga per dies ad quem festivo opera ANCH'ESSA all'indietro: si anticipa al primo giorno non festivo precedente (Cass. n. 14767/2014).

### Categoria: Festività

**Q11: Quali sono le festività nazionali italiane nel 2026?**
13 festività: Capodanno (1/1), Epifania (6/1), Pasqua (5/4), Lunedì dell'Angelo (6/4), Liberazione (25/4), Lavoro (1/5), Repubblica (2/6), Ferragosto (15/8), **San Francesco d'Assisi (4/10) NUOVA dal 2026**, Ognissanti (1/11), Immacolata (8/12), Natale (25/12), Santo Stefano (26/12). Più tutte le domeniche.

**Q12: Il 4 ottobre è festivo?**
Sì, dal 1 gennaio 2026. La Legge 8 ottobre 2025 n. 151 ha istituito la festa nazionale di San Francesco d'Assisi, patrono d'Italia, inserita nell'elenco delle festività civili di cui all'art. 2 L. 260/1949. Nel 2026 cade di domenica; nel 2027 di lunedì.

**Q13: Come si calcola la data della Pasqua?**
Con l'algoritmo di Gauss o di Meeus/Jones/Butcher. La regola base: Pasqua cade nella prima domenica successiva al primo plenilunio di primavera (equinozio convenzionale 21 marzo). Può variare tra 22 marzo e 25 aprile. Nel 2026 cade il 5 aprile; nel 2027 il 28 marzo.

### Categoria: Excel e calcolo pratico

**Q14: Come calcolo i giorni tra due date in Excel?**
Tre modi: (1) sottrazione diretta `=B2-A2`, (2) funzione `=GIORNI(B2;A2)`, (3) `=DATA.DIFF(A2;B2;"d")`. Per giorni lavorativi: `=GIORNI.LAVORATIVI.TOT(A2;B2;C2:C15)` dove C2:C15 è l'elenco delle festività italiane.

**Q15: Come calcolo la differenza in anni, mesi e giorni?**
Usa DATA.DIFF con tre parametri: `=DATA.DIFF(A2;B2;"y")` per gli anni, `=DATA.DIFF(A2;B2;"ym")` per i mesi (esclusi gli anni), `=DATA.DIFF(A2;B2;"md")` per i giorni (esclusi i mesi). Alternativa: usa il nostro calcolatore che fornisce il breakdown automatico.

---

## 10. Bibliografia Fonti (per sezione "Fonti e Riferimenti")

### Fonti istituzionali primarie (Normattiva / Gazzetta Ufficiale)

- L. 260/1949 — https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1949-05-27;260
- L. 742/1969 — https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742
- L. 54/1977 — https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1977-03-05;54
- L. 336/2000 — https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2000-11-20;336
- D.L. 132/2014 (conv. L. 162/2014) — https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132
- **L. 151/2025** (San Francesco) — https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-10-08;151
- GU Serie Generale n. 236 del 10-10-2025 (L. 151/2025) — https://www.gazzettaufficiale.it/eli/id/2025/10/10/25G00153/sg

### Codici (Brocardi/Normattiva)

- Art. 155 c.p.c. — https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html
- Art. 2963 c.c. — https://www.brocardi.it/codice-civile/libro-sesto/titolo-v/capo-i/sezione-iv/art2963.html
- Art. 163 bis c.p.c. — https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-i/capo-i/sezione-i/art163bis.html
- Art. 325 c.p.c. — https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-iii/capo-i/art325.html
- Art. 641 c.p.c. — https://www.brocardi.it/codice-di-procedura-civile/libro-quarto/titolo-i/capo-i/art644.html
- Art. 4 L. 392/1978 (Equo Canone) — https://www.brocardi.it/legge-equo-canone/titolo-i/capo-i/art4.html

### Giurisprudenza citata

- Cass. Civ. Sez. III, sent. n. 14767 del 30 giugno 2014 — termini a ritroso e proroga
- Cass. Sez. Lavoro, ord. n. 30701 del 29 novembre 2024 — computo termini a ritroso
- Corte Cost. sent. n. 75/2019 — notifica PEC dopo le 21
- Art. 16 septies D.L. 179/2012 — notifica PEC

### Altre fonti

- Microsoft Support (Excel GIORNI, DATA.DIFF) — https://support.microsoft.com/it-it/office/
- Wikipedia — Dies a quo non computatur in termino — https://it.wikipedia.org/wiki/Dies_a_quo_non_computatur_in_termino
- Wikipedia — Anno bisestile / Calcolo della Pasqua
- Quirinale — promulgazione L. 151/2025 — https://www.quirinale.it/elementi/141022

---

## 11. Section-to-Research Mapping (mandatory)

| Page Section | Raw Research Sections to Use | Key Data Points |
|--------------|------------------------------|-----------------|
| Hero + H1 | Intro (par. 1-3) | Definition, user intent |
| Tool Calculator | §Formula base + §Breakdown temporale | Math formula, examples |
| "Come si calcolano i giorni" | §Metodologia Generale, §Anni bisestili | Manual calculation, leap years |
| "Giorni lavorativi, feriali, festivi, liberi" | §Tipologie di giorni, §Giorni liberi | 5 calculation modes (from miolegale), definitions |
| "Il calcolo nei termini processuali" | §Art. 155 c.p.c., §Dies a quo | Verbatim quote, commi breakdown, examples |
| "Sospensione feriale" | §Sospensione feriale L. 742/1969 | Verbatim quote, periodo, esclusi, 2 esempi |
| "Termini a ritroso" | §Termini a ritroso, §Cass. 14767/2014 | Cassation ruling, example |
| "Calcolo a ritroso (aggiungi/sottrai giorni)" | §Preavviso, §Disdetta locazione | Practical reverse calc |
| "Festività nazionali 2025-2027" | §Festività L. 260/1949, §L. 151/2025 | Full table (VERIFIED with Python), San Francesco announcement |
| "Excel formule" | §Formule Excel | GIORNI, DATA.DIFF, GIORNI.LAVORATIVI.TOT |
| "Applicazioni pratiche" | §Applicazioni Pratiche | Impugnazione, decreto ingiuntivo, ravvedimento, locazione |
| "Errori comuni" | §Errori Comuni | 8 AlertBox items |
| "FAQ" | FAQ section (15 items) | From Q1-Q15 above |
| "Fonti" | §Bibliografia | Full list with URLs |

---

## 12. Content Depth Target

- **Total words target**: 3,900+ editorial content (5× competitor miolegale's 800)
- **H1**: "Calcolo Giorni tra Due Date: Contagiorni Online Gratuito" (or similar, ~60 chars)
- **Meta title**: "Calcolo Giorni tra Due Date 2026: Contagiorni Online Gratuito" (≤60 chars)
- **Meta description**: "Calcola i giorni tra due date online gratis. Contagiorni con giorni lavorativi, feriali, liberi, sospensione feriale e festività 2026 (L. 151/2025 San Francesco)." (160 chars)
- **Schema**: Article + WebApplication + BreadcrumbList (automatic)

---

## 13. Source Verification Checklist

- [x] L. 151/2025 verified via Gazzetta Ufficiale + Quirinale + Normattiva
- [x] Art. 155 c.p.c. testo verbatim verificato (research + Brocardi)
- [x] Art. 2963 c.c. testo verbatim verificato
- [x] L. 742/1969 testo verbatim verificato
- [x] Calendario 2025-2027 festività verificato con Python (`datetime.weekday()`)
- [x] Date Pasqua 2026 (5 aprile) e 2027 (28 marzo) verificate con algoritmo di Gauss
- [x] Cass. 14767/2014 citata come riferimento giurisprudenziale (dalla ricerca)
- [x] Corte Cost. 75/2019 notifiche PEC citata
- [x] Error corretti: Epifania 2026 (Martedì non Mercoledì), San Francesco 2026 (Domenica non Lunedì), Epifania 2027 (Mercoledì non Giovedì), San Francesco 2027 (Lunedì non Martedì)
- [x] No [VERIFY] tags remaining

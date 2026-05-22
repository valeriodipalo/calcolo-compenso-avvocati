# Research Brief — Fattura Elettronica Avvocati

> Bridge file: structured extraction from `raw-research.md` (14.700 parole) organizzato per sezioni della pagina.

## Section-to-Research Mapping Table

| Sezione Pagina | Raw Research Sezioni da Usare | Key Data Points |
|---|---|---|
| Hero / H1 | PART 1 §intro | obbligo generalizzato 2026, tracciato 1.9.1 dal 15/05/2026 |
| Calcolatore | PART 3 §3.1 (esempio numerico) | tutte le basi imponibili (compenso/CPA/IVA/ritenuta) |
| Obbligo & Soggetti | PART 1 §2.1, §2.2, §2.3 + §1.4.3 | dal 1/1/2024 tutti i forfettari obbligati |
| Regime Forfettario | PART 1 §2 + PART 2 (N2.2) + PART 3 §3.1 | N2.2, no IVA, no ritenuta, SI bollo, SI CPA |
| Come si Compila | PART 1 §3.1-3.3 | XML 1.9.1 dal 15/05/2026, FatturaElettronicaHeader/Body |
| Tipi Documento TD | PART 1 §3.4 (tabella TD01-TD29) | TD01 raccomandato per avvocato (no TD06) |
| Codici Natura IVA (N) | PART 2 §N1, N2.1, N2.2, N3, N6, N7 | N1 art. 15, N2.2 forfettari, N6.9 reverse UE |
| Modalità Pagamento (MP) | PART 2 §MP | MP05 bonifico (più usato), MP23 PagoPA, MP01 contanti |
| Calcolo Importi | PART 3 §3.1 (esempio dettagliato) | spese gen 15%, CPA 4%, IVA 22%, ritenuta 20%, bollo €2 |
| Fatturazione PA (no split) | PART 3 §3.2 | D.L. 87/2018 art. 12, art. 17-ter c.1-sexies, no scissione pagamenti |
| Gratuito Patrocinio | PART 3 §3.3 | art. 82-83-130 DPR 115/2002, TD01, ritenuta 1040, CU annuale |
| Cliente Estero | PART 2 §N2.1, N6.9, N7 | UE B2B N6.9, extra-UE N2.1, OSS N7 |
| Cliente Condominio | PART 2 (cenni) | sostituto d'imposta art. 25-ter DPR 600/73 |
| Pro-forma | PART 3 §3.4 | non fiscale, no bollo, fatturare entro 12gg da incasso |
| Nota di Credito (TD04) | PART 1 §3.4 (TD04) | art. 26 DPR 633/72, riferimento fattura originaria |
| Trasmissione SDI | PART 1 §3.2 + PART 3 (codice destinatario) | 7 caratteri, 0000000 B2C, XXXXXXX estero |
| Conservazione | PART 1 §1.3 | DM 17/06/2014, 10 anni, servizio gratuito AdE |
| Sanzioni (D.Lgs. 87/2024) | PART 1 §1.4.4 + PART 2 | 70% imposta da 1/9/2024 (era 90-180%) |
| Aggiornamenti 2026 | PART 1 §1.4.4, §2.3 + tracciato 1.9.1 | XML 1.9.1 obbl. dal 15/05/2026 |
| FAQ | PAA + long-tail + ricerca | 20+ items strutturati |
| Fonti | PART 1+2+3 citazioni | Normattiva URLs verificati |

## Structured Data

### Normativa Completa (per NormativaRefTable)

| Norma | Articolo/Estremi | Oggetto | URL |
|---|---|---|---|
| L. 24/12/2007 n. 244 | art. 1 cc. 209-214 | Origine FE verso PA | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2007-12-24;244 |
| D.M. 7 marzo 2008 | — | Istituzione SDI presso Sogei | https://www.gazzettaufficiale.it/eli/id/2008/05/03/08A02884/sg |
| D.M. 3 aprile 2013 n. 55 | — | Regolamento FE verso PA | https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.economia.e.finanze:decreto:2013-04-03;55 |
| D.L. 24/04/2014 n. 66 | conv. L. 89/2014 | Estensione FE a tutta la PA | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-04-24;66 |
| D.M. 17 giugno 2014 | — | Conservazione FE | https://www.gazzettaufficiale.it/eli/id/2014/06/26/14A04778/sg |
| D.Lgs. 5/08/2015 n. 127 | art. 1 | Estensione FE tra privati | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2015-08-05;127 |
| L. 27/12/2017 n. 205 | art. 1 c. 909 | Obbligo FE dal 1/1/2019 | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-12-27;205 |
| Provv. AdE 89757/2018 | 30 aprile 2018 | Regole tecniche XML | https://www.agenziaentrate.gov.it/portale/web/guest/specifiche-tecniche-versione-1.6 |
| D.M. 28 dicembre 2018 | — | Bollo virtuale FE | https://www.gazzettaufficiale.it/eli/id/2019/01/07/19A00047/sg |
| D.L. 12/07/2018 n. 87 | art. 12 (1-sexies 17-ter) | Abolizione split payment professionisti | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2018-07-12;87 |
| D.L. 30/04/2022 n. 36 | art. 18 | FE estesa a forfettari (graduale) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2022-04-30;36 |
| D.Lgs. 8/01/2024 n. 1 | — | Riforma adempimenti tributari | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-01-08;1 |
| D.Lgs. 12/02/2024 n. 13 | — | Accertamento + concordato | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-02-12;13 |
| D.Lgs. 14/06/2024 n. 87 | — | Riforma sanzioni (1/9/2024) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87 |
| DPR 26/10/1972 n. 633 | art. 21 (fatturazione), art. 6 (effettuazione), art. 17-ter (split) | TU IVA | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633 |
| DPR 29/09/1973 n. 600 | art. 25 (ritenuta) | Accertamento imposte redditi | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-09-29;600 |
| DPR 26/10/1972 n. 642 | art. 13 Tariffa | Imposta di bollo | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;642 |
| DPR 30/05/2002 n. 115 | art. 82, 83, 130 | TU Spese Giustizia (gratuito patrocinio) | https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115 |
| L. 20/09/1980 n. 576 | art. 11 (CPA 4%) | Cassa Forense | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1980-09-20;576 |
| L. 31/12/2012 n. 247 | art. 13 c. 10 (spese gen 15%) | Nuovo ordinamento forense | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247 |
| D.M. 10/03/2014 n. 55 | art. 2 (spese gen 15%) | Parametri forensi | https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55 |
| D.M. 13/08/2022 n. 147 | — | Parametri forensi (sostitutivi 55/2014) | https://www.gazzettaufficiale.it/eli/id/2022/10/12/22G00153/sg |
| L. 27/12/2014 n. 190 | art. 1 cc. 54-89, c. 67 | Regime forfettario | https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-27;190 |

### Esempio Numerico Completo (per Calculator + section "Calcolo")

**Caso Regime Ordinario:**
- Input: compenso €2.000, spese imponibili €100, spese esenti art. 15 €237
- Output:
  - Spese generali 15% = €300,00
  - Imponibile CPA = €2.400,00 → CPA 4% = €96,00
  - Imponibile IVA = €2.496,00 → IVA 22% = €549,12
  - Imponibile ritenuta = €2.400,00 → Ritenuta 20% = €480,00
  - **Totale fattura = €3.282,12** (compenso + sp.gen + sp.imp + CPA + IVA + sp.esenti)
  - **Netto a pagare = €2.802,12** (totale − ritenuta)

**Caso Forfettario stesso scenario:**
- Spese generali 15% = €300,00
- CPA 4% (su €2.400) = €96,00
- NO IVA, NO ritenuta
- Bollo €2,00 (fattura > €77,47 senza IVA)
- **Totale fattura = €2.735,00**

### Tabella Tipi Documento (TD) per Avvocato

| Codice | Descrizione | Uso per Avvocato |
|---|---|---|
| TD01 | Fattura | **PRINCIPALE** — fattura per prestazioni professionali (anche verso PA) |
| TD02 | Acconto/anticipo su fattura | Incasso di acconti |
| TD03 | Acconto/anticipo su parcella | Acconti specifici per professionisti |
| TD04 | Nota di credito | Storno totale/parziale fattura |
| TD05 | Nota di debito | Aumento imponibile/IVA |
| TD06 | Parcella | **Storicamente** per parcella; oggi TD01 è preferito |
| TD16 | Reverse charge interno | Inversione contabile nazionale |
| TD17 | Servizi esteri UE/extra-UE | Avvocato che acquista servizi dall'estero |
| TD18 | Acquisto beni intra-UE | Marginale |
| TD19 | Acquisti ex art. 17 c. 2 | Marginale |
| TD20 | Autofattura art. 6 D.Lgs. 471/97 | Regolarizzazione fattura non ricevuta |
| TD24 | Fattura differita lett. a) | Solo per casi specifici (no gratuito patrocinio) |
| TD28 | Acquisti San Marino con IVA | Marginale |

### Tabella Codici Natura IVA (N) per Avvocato

| Codice | Descrizione | Uso Tipico Avvocato |
|---|---|---|
| N1 | Operazioni escluse (art. 15 DPR 633/72) | **Anticipazioni** (contributo unificato, marche, diritti di copia) |
| N2.1 | Non soggette ex artt. 7-7septies (territorialità) | Prestazioni a cliente extra-UE (B2B) |
| N2.2 | Non soggette - altri casi | **REGIME FORFETTARIO** (L. 190/2014) |
| N3.1 | Esportazioni extra-UE | Servizi resi fisicamente fuori dall'Italia |
| N3.2 | Cessioni intra-UE | Marginale (servizi non sono cessioni di beni) |
| N3.5 | Lettere di intento | Cliente esportatore abituale |
| N4 | Esenti art. 10 DPR 633/72 | Quasi mai per avvocato (semmai docenze) |
| N6.3 | Reverse charge subappalto edile | Consulenze per subappaltatori edili |
| N6.7 | Reverse charge edilizia | Prestazioni a imprese edili |
| N6.9 | Altri reverse charge | **Cliente UE B2B** (servizi B2B intra-UE) |
| N7 | IVA assolta in altro Stato UE (OSS) | Servizi B2C UE > €10.000/anno via OSS |

### Tabella Modalità Pagamento (MP) per Avvocato

| Codice | Descrizione | Uso per Avvocato |
|---|---|---|
| MP01 | Contanti | Limitato a operazioni < €5.000 (art. 49 D.Lgs. 231/2007, soglia 2026) |
| MP02 | Assegno | Pratica decrescente (limite €500 per assegni a portatore) |
| MP05 | **Bonifico bancario/SEPA** | **PIÙ FREQUENTE** per parcelle professionali |
| MP08 | Carta di credito/debito/prepagata | Crescente, soprattutto per importi medio-piccoli |
| MP09 | RID (Addebito diretto) | Per pagamenti ricorrenti (consulenze continuative) |
| MP19 | SEPA Direct Debit | Variante SEPA del RID |
| MP23 | **PagoPA** | Pagamenti dalla PA (gratuito patrocinio) e versamenti a PA |

### Articoli Verbatim Chiave

**Art. 21 c. 4 DPR 633/72** (termini emissione fattura):
> «La fattura è emessa entro dodici giorni dall'effettuazione dell'operazione determinata ai sensi dell'articolo 6.»

**Art. 6 c. 3 DPR 633/72** (effettuazione per professionisti):
> «Per le prestazioni di servizi, diverse da quelle indicate al quarto comma, il momento di effettuazione dell'operazione si verifica all'atto del pagamento del corrispettivo. Se anteriormente al verificarsi degli eventi di cui ai commi precedenti, è emessa fattura, l'operazione si considera effettuata, limitatamente all'importo fatturato, alla data della fattura.»

**Art. 17-ter c. 1-sexies DPR 633/72** (abolizione split payment professionisti):
> «Le disposizioni del presente articolo non si applicano ai compensi per prestazioni di servizi assoggettati a ritenute alla fonte a titolo di imposta sul reddito o a titolo di acconto.»

**Art. 25 DPR 600/73** (ritenuta d'acconto):
> «I soggetti indicati nel primo comma dell'articolo 23 [...] devono operare all'atto del pagamento una ritenuta del venti per cento a titolo di acconto dell'imposta sul reddito delle persone fisiche dovuta dai percipienti.»

**Art. 1 c. 67 L. 190/2014** (esonero ritenuta forfettari):
> «I ricavi e i compensi percepiti dai contribuenti che applicano il regime forfetario non sono assoggettati a ritenuta d'acconto da parte del sostituto d'imposta. A tale fine, i contribuenti rilasciano un'apposita dichiarazione dal quale risulti che il reddito cui le somme afferiscono è soggetto ad imposta sostitutiva.»

**Art. 130 DPR 115/2002** (riduzione 50% gratuito patrocinio penale):
> «L'onorario e le spese spettanti al difensore della parte ammessa al patrocinio a spese dello Stato nel processo penale sono ridotti della metà.»

**Art. 82 c. 5 DPR 115/2002** (oneri a carico erario):
> «L'onorario e le spese spettanti al difensore sono liquidati a carico dell'erario.»

**Art. 13 c. 10 L. 247/2012** (spese generali 15%):
> «Oltre al compenso per la prestazione professionale, all'avvocato è dovuta, sia dal cliente in caso di determinazione contrattuale, sia in sede di liquidazione giudiziale, una somma a titolo di rimborso forfettario delle spese generali, nella misura del 15 per cento sul compenso totale per la prestazione, salva diversa pattuizione.»

**Art. 11 L. 576/1980** (CPA 4%):
Aliquota del 4% sul volume d'affari IVA (estensione regolamentare al 4%, art. 18 Regolamento Unico Previdenza Forense), riscossa in via di rivalsa dal cliente.

### Aggiornamenti 2026

1. **Tracciato XML 1.9.1 obbligatorio dal 15/05/2026** — il SDI scarta automaticamente le fatture predisposte con tracciato precedente. Tutti i gestionali di studio devono essere aggiornati.

2. **D.Lgs. 87/2024 sanzioni (decorrenza 1/9/2024)**:
   - Omessa/tardiva fatturazione che incide su IVA: **70%** imposta (era 90-180%), minimo €300
   - Errori formali (non incidono su IVA): sanzione fissa €250-2.000
   - Operazioni non imponibili/esenti/reverse charge non documentate: 5% corrispettivi (min €300)
   - Omessa trasmissione: €2 per fattura (max mensile)

3. **D.Lgs. 1/2024**: dichiarazioni redditi dal 1° aprile (anticipato) — impatta calendario conservazione.

4. **D.Lgs. 13/2024**: valorizzazione dati FE per accertamento + concordato preventivo biennale.

### FAQ Items (20+ con fonti)

#### Categoria: Obbligo e Soggetti
1. **Q: Gli avvocati devono emettere fattura elettronica nel 2026?**
   A: Sì, l'obbligo riguarda TUTTI gli avvocati (regime ordinario e forfettario) per ogni operazione. Dal 1/1/2024 anche i forfettari sono pienamente obbligati (art. 18 D.L. 36/2022).

2. **Q: Un avvocato in regime forfettario deve fare fattura elettronica anche verso un privato cittadino?**
   A: Sì. Dal 1/1/2024 anche le fatture verso privati cittadini devono essere emesse in formato elettronico tramite SDI con codice destinatario 0000000.

3. **Q: Quali sono gli esoneri residui dall'obbligo?**
   A: Solo i contribuenti in regime di vantaggio (art. 27 D.L. 98/2011) e alcuni operatori sanitari (Sistema Tessera Sanitaria).

#### Categoria: Calcolo Importi
4. **Q: Come si calcolano le spese generali 15%?**
   A: Sul compenso netto (art. 13 c. 10 L. 247/2012). Esempio: compenso €2.000 → spese generali €300.

5. **Q: Quale è la base imponibile della CPA Cassa Forense 4%?**
   A: Compenso + spese generali 15% + spese imponibili. NO anticipazioni art. 15. NO IVA. Esempio: 2.000 + 300 + 100 = €2.400 imponibile CPA.

6. **Q: Come si calcola l'imponibile IVA?**
   A: Compenso + spese generali + spese imponibili + CPA. NO anticipazioni art. 15.

7. **Q: Quale è la base della ritenuta d'acconto 20%?**
   A: Compenso + spese generali + spese imponibili. NO CPA, NO IVA, NO anticipazioni art. 15 (art. 25 DPR 600/73).

#### Categoria: Codici Tecnici
8. **Q: Quale TipoDocumento devo usare in fattura come avvocato?**
   A: TD01 (Fattura) è oggi raccomandato. TD06 (Parcella) è ancora ammesso ma di uso decrescente.

9. **Q: Quando si usa il codice SDI 0000000?**
   A: Quando il cliente è privato cittadino senza partita IVA o non ha comunicato il proprio codice destinatario/PEC.

10. **Q: Cos'è il codice N2.2 e quando usarlo?**
    A: Identifica operazioni non soggette IVA per ragioni diverse dalla territorialità. È il codice tipico del regime forfettario (art. 1 cc. 54-89 L. 190/2014).

11. **Q: Quale codice usare per le anticipazioni in nome e per conto del cliente?**
    A: N1 (escluso art. 15 DPR 633/72). Vale per contributo unificato, marche da bollo per CU, diritti di copia, spese di notifica.

#### Categoria: Split Payment & PA
12. **Q: L'avvocato deve applicare lo split payment quando fattura alla PA?**
    A: NO. Lo split payment è stato abolito per i professionisti dal 14/07/2018 (art. 12 D.L. 87/2018). L'avvocato fattura con IVA 22% normale che incassa direttamente.

13. **Q: Come si fattura al Ministero della Giustizia per gratuito patrocinio?**
    A: TipoDocumento TD01, IVA 22% (regime ordinario), ritenuta d'acconto 20%, CPA 4%, codice destinatario dell'ufficio giudiziario IPA. Il Ministero rilascia CU annuale.

#### Categoria: Imposta di Bollo
14. **Q: Quando si applica la marca da bollo €2 sulla fattura?**
    A: Solo se la fattura è SENZA IVA (forfettario, esente, non imponibile) e l'importo non soggetto a IVA supera €77,47 (art. 13 Tariffa DPR 642/72).

15. **Q: Il bollo riaddebitato al cliente concorre al reddito del forfettario?**
    A: Sì. Secondo Risposta AdE n. 428/2022, il bollo riaddebitato dal forfettario è ricavo che concorre al limite di €85.000.

#### Categoria: Casi Particolari
16. **Q: Come si fattura un cliente UE soggetto IVA?**
    A: Operazione non imponibile ex art. 7-ter DPR 633/72, codice N6.9 (reverse charge cliente), indicare partita IVA UE del cliente.

17. **Q: Come funziona la fattura per gratuito patrocinio nel civile?**
    A: Nessuna riduzione del 50% (vale solo nel penale art. 130 DPR 115/2002). Si emette TD01 con IVA 22%, ritenuta, CPA. Si fattura alla data dell'incasso (art. 6 c. 3 DPR 633/72).

18. **Q: Cosa è l'avviso di parcella (pro-forma) e quando si emette la fattura definitiva?**
    A: La pro-forma è documento NON fiscale. Sequenza: pro-forma → cliente paga → entro 12 giorni emettere fattura elettronica TD01.

#### Categoria: Sanzioni e Aggiornamenti 2026
19. **Q: Quali sono le sanzioni per omessa fatturazione elettronica nel 2026?**
    A: Dal 1/9/2024 (D.Lgs. 87/2024): 70% imposta (min €300) se incide su IVA; €250-2.000 per errori formali; 5% corrispettivi per operazioni non imponibili non documentate.

20. **Q: Cosa cambia con il tracciato XML 1.9.1 dal 15/05/2026?**
    A: Il SDI scarta automaticamente le fatture predisposte con tracciato precedente. Tutti i software di studio devono essere aggiornati alla nuova versione delle specifiche tecniche.

21. **Q: Per quanto tempo si conservano le fatture elettroniche?**
    A: 10 anni (art. 2220 c.c. + art. 39 DPR 633/72). L'Agenzia delle Entrate offre servizio gratuito di conservazione nel portale Fatture e Corrispettivi.

22. **Q: Quale codice tributo F24 per la ritenuta sui compensi degli avvocati?**
    A: 1040 (ritenute su redditi di lavoro autonomo - compensi per arti e professioni).

### Fonti Bibliografiche Istituzionali (per "Fonti e Riferimenti")

- **Agenzia delle Entrate** — Portale FE: https://www.agenziaentrate.gov.it/portale/web/guest/aree-tematiche/fatturazione-elettronica
- **Normattiva** — testi normativi consolidati: https://www.normattiva.it
- **Gazzetta Ufficiale**: https://www.gazzettaufficiale.it
- **Cassa Forense** — Regolamento Unico: https://www.cassaforense.it/regolamento-unico-previdenza-forense
- **IndicePA** (codici destinatario PA): https://www.indicepa.gov.it
- **Consiglio Nazionale Forense**: https://www.consiglionazionaleforense.it/web/cnf/fatturazione-elettronica
- **Ministero della Giustizia**: https://www.giustizia.it

### Errori Comuni (Pitfalls) — per AlertBox

1. **Confusione TD01 vs TD06**: entrambi accettati, ma TD01 è il codice odierno standard.
2. **Bollo riaddebitato dal forfettario**: errore frequente è non considerarlo ricavo (impatta limite €85k).
3. **CPA esclusa da imponibile IVA**: ERRORE — la CPA È nell'imponibile IVA.
4. **Anticipazioni art. 15 incluse in imponibile IVA**: ERRORE — vanno escluse da IVA + CPA + ritenuta.
5. **Dicitura forfettario mancante**: senza "operazione non soggetta IVA ex art. 1 cc. 54-89 L. 190/2014" rischi sanzioni formali.
6. **Codice destinatario errato per PA**: ogni ufficio giudiziario ha il proprio codice IPA — verificare su indicepa.gov.it.
7. **Mancata richiesta esonero ritenuta**: il forfettario deve indicare "non soggetto a ritenuta ex art. 1 c. 67 L. 190/2014".
8. **Ritenuta applicata sul totale invece che sul compenso + sp. generali**: errore del cliente sostituto, ma va corretto.
9. **Fattura emessa prima dell'incasso senza necessità**: per i professionisti l'IVA è dovuta all'incasso (art. 6 c. 3); fatturare prima anticipa l'obbligo IVA.
10. **Tracciato XML non aggiornato post 15/05/2026**: scarto automatico SDI con sanzioni post-D.Lgs. 87/2024.

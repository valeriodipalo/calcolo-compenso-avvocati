# Research Brief: Calcolo Fattura Avvocato

> Compiled: 2026-03-26 | Target page: /calcolo-fattura-avvocato

---

## 1. Normativa di Riferimento

### 1.1 Compenso Professionale e Parametri

| Norma | Articoli | Contenuto | URL Normattiva |
|-------|----------|-----------|----------------|
| L. 247/2012 (Nuova disciplina professione forense) | art. 13 | Determinazione del compenso: libertà contrattuale, accordo scritto, parametri ministeriali in assenza di accordo | https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2012-12-31%3B247%21vig=~Art13 |
| D.M. 55/2014 (Parametri forensi) | art. 2, comma 2 | Spese forfettarie 15%: rimborso spese generali nella misura del 15% del compenso | https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Aministero.giustizia%3Adecreto%3A2014-03-10%3B55~art2-com2 |
| D.M. 147/2022 (Aggiornamento parametri) | Tabelle | Parametri aggiornati per la liquidazione dei compensi forensi | https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Aministero.giustizia%3Adecreto%3A2022-08-13%3B147 |

### 1.2 Contributo Cassa Forense (CPA)

| Norma | Articoli | Contenuto | URL Normattiva |
|-------|----------|-----------|----------------|
| L. 247/2012 | art. 11 | Istituzione e disciplina della Cassa Forense; contributo integrativo del 4% a carico del cliente | https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2012%3B247~art11 |

### 1.3 IVA (Imposta sul Valore Aggiunto)

| Norma | Articoli | Contenuto | URL Normattiva |
|-------|----------|-----------|----------------|
| DPR 633/1972 | art. 15 | Esclusione dalla base imponibile IVA delle spese anticipate in nome e per conto del cliente | https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto+legge%3A1972-00-00%3B633~art15 |
| DPR 633/1972 | art. 16 | Aliquota IVA ordinaria (22%) | https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto.del.presidente.della.repubblica%3A1972-10-26%3B633~art16%21vig= |
| DPR 633/1972 | art. 17-ter | Split payment per forniture alla PA (esclusi professionisti soggetti a ritenuta d'acconto dal 1/7/2017, D.L. 50/2017) | https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto+legge%3A1972-00-00%3B633~art17ter%21vig= |

### 1.4 Ritenuta d'Acconto

| Norma | Articoli | Contenuto | URL Normattiva |
|-------|----------|-----------|----------------|
| DPR 600/1973 | art. 25 | Ritenuta d'acconto del 20% sui compensi di lavoro autonomo; applicata dal sostituto d'imposta | https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto%3A1973-09-29%3B600~art25%21vig= |

### 1.5 Regime Forfettario

| Norma | Articoli | Contenuto | URL Normattiva |
|-------|----------|-----------|----------------|
| L. 190/2014 | art. 1, commi 54-89 | Regime forfettario: soglia ricavi €85.000, imposta sostitutiva 15% (5% startup), esenzione IVA, no ritenuta d'acconto | https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3ALegge%3A2014-00-00%3B190~art1%21vig= |
| L. 197/2022 (Bilancio 2023) | art. 1, comma 54 | Innalzamento soglia da €65.000 a €85.000; uscita immediata sopra €100.000 | - |
| L. 199/2025 (Bilancio 2026) | - | Conferma aliquote 5%/15% e soglia €85.000 per il 2026 | - |

### 1.6 Marca da Bollo

| Norma | Articoli | Contenuto | URL Normattiva |
|-------|----------|-----------|----------------|
| DPR 642/1972 | art. 13, Tariffa allegato A | Imposta di bollo €2,00 su fatture esenti IVA di importo superiore a €77,47 | https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto.del.presidente.della.repubblica%3A1972-10-26%3B642 |
| D.M. 17/06/2014 | - | Modalità assolvimento bollo su fatture elettroniche | - |

### 1.7 Fattura Elettronica

| Norma | Articoli | Contenuto | URL Normattiva |
|-------|----------|-----------|----------------|
| D.L. 36/2022, conv. L. 79/2022 | art. 18 | Obbligo fatturazione elettronica per tutti i forfettari dal 1/1/2024 | - |

---

## 2. Formule di Calcolo

### 2.1 Calcolo Diretto - Regime Ordinario

```
Compenso (C)
  + Spese Forfettarie 15% (SF = C x 0,15)
  = Subtotale (S = C x 1,15)
  + CPA 4% (CPA = S x 0,04)
  = Base Imponibile IVA (BI = S x 1,04 = C x 1,196)
  + IVA 22% (IVA = BI x 0,22)
  = Totale Lordo (TL = BI x 1,22 = C x 1,45912)
  - Ritenuta d'Acconto 20% (R = S x 0,20 = C x 0,23)
  = Netto a Pagare (N = TL - R = C x 1,22912)
```

**Coefficienti chiave**:
- Da Compenso a Totale Lordo: **x 1,45912**
- Da Compenso a Netto a Pagare: **x 1,22912**

**Nota sulla ritenuta**: si applica SOLO se il cliente è sostituto d'imposta (aziende, enti, professionisti con P.IVA). I clienti privati pagano il Totale Lordo senza ritenuta.

### 2.2 Calcolo Diretto - Regime Ordinario SENZA Spese Forfettarie

```
Compenso (C)
  + CPA 4% (CPA = C x 0,04)
  = Base Imponibile IVA (BI = C x 1,04)
  + IVA 22% (IVA = BI x 0,22)
  = Totale Lordo (TL = C x 1,2688)
  - Ritenuta d'Acconto 20% (R = C x 0,20)
  = Netto a Pagare (N = C x 1,0688)
```

### 2.3 Calcolo Diretto - Regime Forfettario

```
Compenso (C)
  + Spese Forfettarie 15% (SF = C x 0,15)
  = Subtotale (S = C x 1,15)
  + CPA 4% (CPA = S x 0,04)
  = Subtotale con CPA (SC = S x 1,04 = C x 1,196)
  + Marca da Bollo (€2,00 se SC > €77,47)
  = Totale a Pagare
```

**NO IVA, NO Ritenuta d'Acconto**

Dicitura obbligatoria in fattura: *"Operazione in franchigia IVA e non soggetta a ritenuta d'acconto effettuata ai sensi dell'art. 1, commi da 54 a 89 della Legge n. 190/2014 - Regime forfettario."*

### 2.4 Calcolo Inverso (Scorporo) - Regime Ordinario

#### Dal Totale Lordo al Compenso:
```
C = TL / 1,45912
```

#### Dal Netto a Pagare al Compenso (con ritenuta):
```
C = N / 1,22912
```

**Derivazione algebrica**:
```
N = TL - R
N = C x 1,15 x 1,04 x 1,22 - C x 1,15 x 0,20
N = C x 1,15 x (1,04 x 1,22 - 0,20)
N = C x 1,15 x 1,0688
N = C x 1,22912
=> C = N / 1,22912
```

#### Senza spese forfettarie:
- Da Totale Lordo: `C = TL / 1,2688`
- Da Netto a Pagare: `C = N / 1,0688`

### 2.5 Calcolo Inverso - Regime Forfettario

```
C = (Totale - 2) / 1,196    [se marca da bollo applicata]
C = Totale / 1,196           [se marca da bollo non applicata]
```

### 2.6 Spese Anticipate (art. 15 DPR 633/72)

Le spese anticipate in nome e per conto del cliente (es. contributo unificato, marche da bollo processuali, diritti di copia):
- **Escluse** dalla base imponibile IVA (art. 15 DPR 633/72)
- **Escluse** dal calcolo CPA 4%
- **Escluse** dal calcolo ritenuta d'acconto
- **Escluse** dal calcolo spese forfettarie 15%
- Si aggiungono come voce separata al totale fattura
- Codice Natura IVA nella fattura elettronica: **N1** (escluse art. 15)

### 2.7 Split Payment PA

Dal 1/7/2017 (D.L. 50/2017, art. 1, comma 1, lett. c), i **professionisti soggetti a ritenuta d'acconto sono ESCLUSI** dallo split payment. Pertanto gli avvocati in regime ordinario che fatturano alla PA:
- Applicano IVA normalmente
- Incassano il totale inclusa IVA
- Subiscono la ritenuta d'acconto 20% come per qualsiasi sostituto d'imposta

Lo split payment resta applicabile solo per forniture di beni/servizi NON soggetti a ritenuta (caso raro per avvocati).

---

## 3. Esempi Pratici

### Esempio 1: Regime Ordinario - Compenso €1.000, senza spese anticipate

| Voce | Importo |
|------|---------|
| Compenso professionale | €1.000,00 |
| Spese forfettarie 15% | €150,00 |
| **Subtotale** | **€1.150,00** |
| CPA Cassa Forense 4% | €46,00 |
| **Base imponibile IVA** | **€1.196,00** |
| IVA 22% | €263,12 |
| **Totale Fattura** | **€1.459,12** |
| Ritenuta d'acconto 20% (su €1.150) | -€230,00 |
| **Netto a Pagare** | **€1.229,12** |

### Esempio 2: Regime Ordinario - Compenso €1.000, con spese anticipate (contributo unificato)

| Voce | Importo |
|------|---------|
| Compenso professionale | €1.000,00 |
| Spese forfettarie 15% | €150,00 |
| **Subtotale** | **€1.150,00** |
| CPA Cassa Forense 4% | €46,00 |
| **Base imponibile IVA** | **€1.196,00** |
| IVA 22% | €263,12 |
| Spese anticipate art. 15 (contr. unificato) | €518,00 |
| **Totale Fattura** | **€1.977,12** |
| Ritenuta d'acconto 20% (su €1.150) | -€230,00 |
| **Netto a Pagare** | **€1.747,12** |

Nota: Le spese anticipate ex art. 15 sono escluse da IVA, CPA e ritenuta.

### Esempio 3: Regime Forfettario - Compenso €1.000

| Voce | Importo |
|------|---------|
| Compenso professionale | €1.000,00 |
| Spese forfettarie 15% | €150,00 |
| **Subtotale** | **€1.150,00** |
| CPA Cassa Forense 4% | €46,00 |
| Marca da bollo | €2,00 |
| **Totale a Pagare** | **€1.198,00** |

- No IVA (esenzione ex L. 190/2014)
- No ritenuta d'acconto (art. 1, comma 67, L. 190/2014)
- Marca da bollo obbligatoria perche totale > €77,47
- Dicitura in fattura: "Operazione in franchigia IVA [...]"

### Esempio 4: Calcolo Inverso (Scorporo) da Totale Lordo €1.500

**Obiettivo**: partendo da un totale lordo di €1.500 concordato, risalire al compenso.

| Passaggio | Formula | Importo |
|-----------|---------|---------|
| Compenso | €1.500 / 1,45912 | €1.028,02 |
| Spese forfettarie 15% | €1.028,02 x 0,15 | €154,20 |
| Subtotale | | €1.182,22 |
| CPA 4% | €1.182,22 x 0,04 | €47,29 |
| Base imponibile IVA | | €1.229,51 |
| IVA 22% | €1.229,51 x 0,22 | €270,49 |
| **Totale Lordo** | | **€1.500,00** |
| Ritenuta 20% (su €1.182,22) | | -€236,44 |
| **Netto a Pagare** | | **€1.263,56** |

**Scorporo alternativo da Netto a Pagare €1.500**:
- Compenso = €1.500 / 1,22912 = **€1.220,39**
- Totale Lordo risultante = €1.780,69
- Ritenuta = €280,69
- Netto a Pagare = **€1.500,00** (verifica OK)

---

## 4. Fattura Elettronica - Dettagli Tecnici

### Codici XML FatturaPA per Avvocati

| Campo | Codice | Descrizione |
|-------|--------|-------------|
| TipoDocumento | TD01 | Fattura ordinaria |
| TipoCassa | TC02 | Cassa Avvocati e Procuratori Legali |
| TipoRitenuta | RT01 | Ritenuta persone fisiche |
| AliquotaRitenuta | 20.00 | 20% ex art. 25 DPR 600/73 |
| CausalePagamento | A | Prestazioni di lavoro autonomo |
| Natura IVA (forfettario) | N2.2 | Operazioni non soggette - altri casi |
| Natura IVA (spese art. 15) | N1 | Escluse ex art. 15 DPR 633/72 |
| EsigibilitaIVA (ordinario) | I | Esigibilita immediata |
| EsigibilitaIVA (split payment) | S | Scissione dei pagamenti |
| BolloVirtuale | SI | Con ImportoBollo = 2.00 |

### Diciture Obbligatorie

**Regime forfettario**:
"Operazione in franchigia IVA e non soggetta a ritenuta d'acconto effettuata ai sensi dell'art. 1, commi da 54 a 89 della Legge n. 190/2014 - Regime forfettario."

**Spese anticipate art. 15**:
"Importi esclusi dalla base imponibile IVA ai sensi dell'art. 15 del DPR 633/1972 - anticipazioni fatte in nome e per conto del cliente."

**Bollo virtuale**:
"Imposta di bollo assolta in modo virtuale ai sensi del D.M. 17 giugno 2014."

### Fatturazione elettronica obbligatoria (dal 1/1/2024)

- Obbligo per TUTTI i forfettari senza eccezioni (D.L. 36/2022, conv. L. 79/2022, art. 18)
- Formato XML standard FatturaPA, trasmesso via SDI (Sistema di Interscambio)
- CodiceDestinatario: 7 cifre per PA, codice SDI o PEC per privati
- Conservazione digitale obbligatoria per 10 anni
- Sanzione per mancata emissione: 5% dei compensi non documentati (min. €250, max. €2.000)

---

## 5. FAQ (25 domande e risposte)

### Categoria: Calcolo e Composizione della Fattura

**1. Come si calcola la fattura dell'avvocato in regime ordinario?**
La fattura si compone di: compenso professionale + spese forfettarie 15% (art. 2 D.M. 55/2014) + CPA 4% Cassa Forense (L. 247/2012, art. 11) + IVA 22% (DPR 633/72, art. 16). Se il cliente è sostituto d'imposta, si sottrae la ritenuta d'acconto del 20% (DPR 600/73, art. 25) per ottenere il netto a pagare. Ad esempio, su un compenso di €1.000 il totale lordo è €1.459,12 e il netto a pagare con ritenuta è €1.229,12.
*Fonti: D.M. 55/2014, art. 2; L. 247/2012, art. 11; DPR 633/72, art. 16; DPR 600/73, art. 25*

**2. Cosa sono le spese forfettarie del 15% nella fattura dell'avvocato?**
Le spese forfettarie (o rimborso spese generali) coprono i costi non documentabili sostenuti dall'avvocato nello svolgimento dell'incarico, come carburante per recarsi in tribunale, cancelleria e telefonate. Sono pari al 15% del compenso professionale e sono previste dall'art. 2, comma 2 del D.M. 55/2014. Si calcolano sul compenso prima dell'applicazione di CPA e IVA e costituiscono reddito imponibile per l'avvocato.
*Fonti: D.M. 55/2014, art. 2, comma 2; https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Aministero.giustizia%3Adecreto%3A2014-03-10%3B55~art2-com2*

**3. Cos'è il CPA del 4% nella fattura dell'avvocato?**
Il CPA (Contributo integrativo alla Cassa di Previdenza e Assistenza Forense) è un contributo previdenziale pari al 4% del compenso comprensivo delle spese forfettarie. Viene addebitato obbligatoriamente al cliente in fattura ai sensi dell'art. 11 della L. 247/2012. Il CPA è soggetto a IVA e concorre alla formazione della base imponibile IVA. L'importo viene poi versato dall'avvocato alla Cassa Forense.
*Fonti: L. 247/2012, art. 11; https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2012%3B247~art11*

**4. Come si calcola la base imponibile IVA nella fattura dell'avvocato?**
La base imponibile IVA è data dalla somma di: compenso professionale + spese forfettarie 15% + CPA 4%. L'IVA al 22% si applica su questo totale. Le spese anticipate in nome e per conto del cliente (art. 15 DPR 633/72) sono invece escluse dalla base imponibile IVA. Ad esempio, con compenso €1.000: (€1.000 + €150 + €46) = €1.196 base imponibile; IVA = €263,12.
*Fonti: DPR 633/1972, artt. 15 e 16*

**5. Su quale importo si calcola la ritenuta d'acconto?**
La ritenuta d'acconto del 20% si calcola sulla somma di compenso + spese forfettarie (il "subtotale"), NON sul totale fattura. Il CPA e l'IVA sono esclusi dalla base di calcolo della ritenuta. Con compenso €1.000 e spese forfettarie €150, la ritenuta è il 20% di €1.150 = €230,00. La ritenuta si applica solo se il cliente è sostituto d'imposta (aziende, enti, professionisti con P.IVA), non per clienti privati.
*Fonti: DPR 600/1973, art. 25*

**6. Qual è la differenza tra "totale fattura" e "netto a pagare"?**
Il totale fattura (o totale lordo) è la somma di tutte le voci imponibili e imposte (compenso + spese forfettarie + CPA + IVA + eventuali spese anticipate). Il netto a pagare è l'importo che il cliente versa effettivamente all'avvocato, pari al totale fattura meno la ritenuta d'acconto del 20%. Se il cliente non è sostituto d'imposta (privato), il netto a pagare coincide con il totale fattura.
*Fonti: DPR 600/73, art. 25; DPR 633/72, art. 16*

**7. Come si fa il calcolo inverso (scorporo) della fattura dell'avvocato?**
Il calcolo inverso permette di risalire al compenso partendo dal totale lordo concordato. La formula è: Compenso = Totale Lordo / 1,45912 (con spese forfettarie) oppure Compenso = Totale Lordo / 1,2688 (senza spese forfettarie). Per partire dal netto a pagare (dopo ritenuta): Compenso = Netto / 1,22912. I coefficienti derivano dalla moltiplicazione progressiva: 1,15 (spese forf.) x 1,04 (CPA) x 1,22 (IVA) = 1,45912.
*Fonti: D.M. 55/2014, art. 2; DPR 633/72, art. 16; DPR 600/73, art. 25*

### Categoria: Regime Fiscale

**8. Qual è la differenza tra regime ordinario e forfettario per la fattura dell'avvocato?**
Nel regime ordinario la fattura include IVA 22% e ritenuta d'acconto 20%. Nel regime forfettario (L. 190/2014) la fattura NON include IVA ne ritenuta, ma richiede marca da bollo da €2 se l'importo supera €77,47. Il forfettario prevede imposta sostitutiva del 15% (5% per i primi 5 anni) calcolata sul 78% dei ricavi. La soglia di accesso è €85.000 di ricavi/compensi annui.
*Fonti: L. 190/2014, art. 1, commi 54-89; DPR 642/1972*

**9. Come si compila la fattura dell'avvocato in regime forfettario?**
La fattura forfettaria contiene: compenso + spese forfettarie 15% + CPA 4% (calcolato su compenso + spese forf.) + marca da bollo €2 (se totale > €77,47). Non si applica IVA ne ritenuta. Va inserita la dicitura: "Operazione in franchigia IVA e non soggetta a ritenuta d'acconto effettuata ai sensi dell'art. 1, commi da 54 a 89 della Legge n. 190/2014." Dal 1/1/2024 anche i forfettari devono emettere fattura elettronica.
*Fonti: L. 190/2014, art. 1, commi 54-89; D.L. 36/2022, art. 18*

**10. L'avvocato forfettario deve applicare il CPA 4%?**
Si, il contributo integrativo CPA del 4% è obbligatorio anche per l'avvocato in regime forfettario. Si calcola sul compenso + spese forfettarie e si addebita al cliente. L'unica differenza è che nel forfettario il CPA non è soggetto a IVA (perche l'intera fattura è esente IVA). Se il bollo viene addebitato al cliente, i €2 concorrono alla base di calcolo del CPA.
*Fonti: L. 247/2012, art. 11; L. 190/2014*

**11. Chi può aderire al regime forfettario nel 2026?**
Possono aderire le persone fisiche con ricavi/compensi non superiori a €85.000 (criterio di cassa). Non possono aderire: soci di società di persone, titolari di quote di controllo in SRL nello stesso settore, chi ha redditi da lavoro dipendente > €35.000 (salvo cessazione del rapporto). La Legge di Bilancio 2026 (L. 199/2025) ha confermato le aliquote 5%/15% e la soglia €85.000.
*Fonti: L. 190/2014, art. 1, commi 54-57; L. 199/2025*

**12. Cosa succede se un avvocato forfettario supera la soglia di €85.000?**
Se i ricavi superano €85.000 ma restano sotto €100.000, l'avvocato resta forfettario per l'anno in corso e passa al regime ordinario dall'anno successivo. Se supera €100.000, l'uscita è immediata nello stesso anno con applicazione retroattiva del regime ordinario. Il calcolo si basa sui compensi effettivamente incassati (principio di cassa), non su quelli fatturati.
*Fonti: L. 190/2014, art. 1, comma 71; L. 197/2022*

### Categoria: Emissione e Procedura

**13. Quando è obbligatoria la fattura elettronica per l'avvocato?**
Dal 1 gennaio 2024, la fattura elettronica in formato XML (FatturaPA) è obbligatoria per TUTTI gli avvocati, inclusi quelli in regime forfettario, senza eccezioni di soglia. La fattura va trasmessa tramite il Sistema di Interscambio (SDI) dell'Agenzia delle Entrate e conservata digitalmente per 10 anni. La mancata emissione comporta sanzioni dal 5% al 100% dell'imposta relativa.
*Fonti: D.L. 36/2022, conv. L. 79/2022, art. 18*

**14. Quali codici vanno inseriti nella fattura elettronica dell'avvocato?**
I codici principali sono: TipoDocumento TD01 (fattura), TipoCassa TC02 (Cassa Forense), TipoRitenuta RT01 (ritenuta persone fisiche), CausalePagamento A (lavoro autonomo). Per il regime forfettario la Natura IVA è N2.2 (non soggetto - altri casi). Le spese anticipate art. 15 hanno Natura N1 (escluse). Il bollo virtuale si indica con BolloVirtuale = SI e ImportoBollo = 2.00.
*Fonti: Specifiche tecniche FatturaPA v. 1.2; DPR 633/72; DPR 600/73*

**15. Come si gestisce la fattura di acconto e saldo dell'avvocato?**
L'avvocato può emettere fatture di acconto durante il procedimento e una fattura di saldo a conclusione. Ogni fattura segue le stesse regole di calcolo (CPA 4%, IVA 22%, ritenuta 20%). La fattura di saldo indica il compenso residuo al netto degli acconti gia fatturati. Sia acconti che saldo sono soggetti a fatturazione elettronica e alle stesse voci (spese forf., CPA, IVA, ritenuta).
*Fonti: L. 247/2012, art. 13; DPR 633/72*

### Categoria: Aspetti Specifici

**16. Quando si applica la marca da bollo da €2 sulla fattura dell'avvocato?**
In regime forfettario: su ogni fattura di importo superiore a €77,47 (poiche priva di IVA). In regime ordinario: solo se la fattura contiene spese anticipate ex art. 15 esenti IVA per importo superiore a €77,47. Con la fatturazione elettronica, il bollo si assolve in modo virtuale (indicando BolloVirtuale = SI nel XML) e si versa trimestralmente tramite il portale dell'Agenzia delle Entrate.
*Fonti: DPR 642/1972, art. 13; D.M. 17/06/2014; D.M. MEF 28/12/2018*

**17. La marca da bollo addebitata al cliente fa reddito per il forfettario?**
Si. L'Agenzia delle Entrate (interpello n. 428/2022) ha chiarito che i €2 di bollo addebitati al cliente dal forfettario costituiscono ricavo e concorrono alla formazione del reddito. Vanno indicati in fattura con codice Natura N2.2 (non N1). Se addebitati, i €2 rientrano anche nella base di calcolo del CPA 4%. Per gli avvocati in regime ordinario, invece, il bollo riaddebitato è escluso ex art. 15 DPR 633/72.
*Fonti: Risposta interpello AdE n. 428/2022; L. 190/2014*

**18. Come funziona lo split payment per le fatture alla Pubblica Amministrazione?**
Dal 1 luglio 2017, i professionisti soggetti a ritenuta d'acconto (inclusi gli avvocati) sono ESCLUSI dallo split payment (D.L. 50/2017, art. 1, comma 1, lett. c). Gli avvocati fatturano alla PA come a qualsiasi sostituto d'imposta: applicano IVA 22%, la PA paga il totale all'avvocato e trattiene la ritenuta 20%. Lo split payment si applica ancora solo a forniture non soggette a ritenuta, caso raro per gli avvocati.
*Fonti: DPR 633/72, art. 17-ter; D.L. 50/2017, art. 1, comma 1, lett. c)*

**19. Come si trattano le spese anticipate nella fattura dell'avvocato?**
Le spese anticipate in nome e per conto del cliente (contributo unificato, marche da bollo processuali, diritti di copia) sono escluse da IVA ai sensi dell'art. 15 DPR 633/72. Non rientrano nel calcolo di CPA, spese forfettarie ne ritenuta d'acconto. Si aggiungono come voce separata nel totale fattura con Natura IVA N1. Richiedono documentazione (ricevute originali) per la corretta esclusione dalla base imponibile.
*Fonti: DPR 633/1972, art. 15; https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto+legge%3A1972-00-00%3B633~art15*

**20. Come si gestisce la fattura di un avvocato forfettario verso un cliente con partita IVA?**
Il cliente con partita IVA non deve applicare la ritenuta d'acconto sulla fattura dell'avvocato forfettario, come stabilito dall'art. 1, comma 67 della L. 190/2014. L'avvocato deve inserire in fattura la dicitura che lo esenta dalla ritenuta. Il cliente non può detrarre l'IVA (perche non applicata). Questo può rendere il costo effettivo piu alto per clienti business rispetto a un avvocato in regime ordinario.
*Fonti: L. 190/2014, art. 1, comma 67*

### Categoria: Normativa e Aggiornamenti

**21. Quali sono i parametri forensi per il calcolo del compenso dell'avvocato?**
I parametri sono stabiliti dal D.M. 55/2014, aggiornati dal D.M. 147/2022. Prevedono importi base per 29 tipologie di procedimento (competenze) e 17 scaglioni di valore. Ogni procedimento è suddiviso in fasi (studio, introduttiva, istruttoria, decisoria). I parametri si applicano in assenza di accordo scritto tra avvocato e cliente e servono al giudice per la liquidazione delle spese di lite.
*Fonti: D.M. 55/2014; D.M. 147/2022; L. 247/2012, art. 13*

**22. Le spese rimborsate al professionista fanno reddito nel 2026?**
Dal 1 gennaio 2025, le somme percepite a titolo di rimborso delle spese sostenute per l'esecuzione di un incarico e riaddebitate al cliente NON fanno piu parte del reddito tassabile. Questa novità si applica anche ai forfettari. La modifica distingue tra spese forfettarie 15% (che restano reddito) e rimborsi di spese effettivamente sostenute e documentate per l'incarico.
*Fonti: Vademecum Fiscale Avvocati 2026 - Cassa Forense; L. di Bilancio 2025*

**23. Qual è il coefficiente di redditività per l'avvocato forfettario?**
Il coefficiente di redditività per l'attività legale (codice ATECO 69.10.10) è del 78%. Significa che il reddito imponibile su cui si calcola l'imposta sostitutiva (15% o 5%) è pari al 78% dei ricavi incassati. Ad esempio, con €50.000 di fatturato: reddito = €50.000 x 78% = €39.000; imposta al 15% = €5.850; imposta al 5% (startup) = €1.950.
*Fonti: L. 190/2014, art. 1, comma 64, Tabella allegata*

**24. L'avvocato deve versare il contributo soggettivo alla Cassa Forense oltre al CPA?**
Si. Il CPA 4% in fattura è il contributo integrativo, a carico del cliente. L'avvocato deve anche versare il contributo soggettivo (16% del reddito professionale, con minimo annuo di €2.750 per il 2025) direttamente alla Cassa Forense. Il contributo soggettivo è interamente a carico dell'avvocato e non compare in fattura. Va versato in 4 rate trimestrali (31 marzo, 30 giugno, 30 settembre, 31 dicembre).
*Fonti: L. 247/2012, art. 11; Regolamento Cassa Forense*

**25. Quali sono le scadenze per il versamento del bollo virtuale sulle fatture elettroniche?**
Il bollo virtuale si versa trimestralmente: entro il 31 maggio (I trim.), 30 settembre (II trim.), 30 novembre (III trim.) e 28 febbraio dell'anno successivo (IV trim.). Se l'importo del I trimestre è inferiore a €5.000, il versamento può essere differito al II trimestre. Il pagamento si effettua tramite il portale "Fatture e Corrispettivi" dell'Agenzia delle Entrate con addebito su conto corrente o modello F24.
*Fonti: D.M. MEF 28/12/2018; art. 6 D.M. 17/06/2014; Provvedimento AdE n. 34958/2021*

---

## 6. Bibliografia delle Fonti

### Fonti Normative (Normattiva)

1. **L. 247/2012** - Nuova disciplina dell'ordinamento della professione forense
   https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2012-12-31%3B247%21vig=

2. **D.M. 55/2014** - Parametri per la liquidazione dei compensi forensi
   https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Aministero.giustizia%3Adecreto%3A2014-03-10%3B55~art2-com2

3. **D.M. 147/2022** - Aggiornamento parametri forensi
   https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Aministero.giustizia%3Adecreto%3A2022-08-13%3B147

4. **DPR 633/1972** - Istituzione e disciplina dell'IVA
   https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto.del.presidente.della.repubblica%3A1972-10-26%3B633~art16%21vig=

5. **DPR 633/1972, art. 15** - Esclusioni dalla base imponibile
   https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto+legge%3A1972-00-00%3B633~art15

6. **DPR 633/1972, art. 17-ter** - Split payment
   https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto+legge%3A1972-00-00%3B633~art17ter%21vig=

7. **DPR 600/1973, art. 25** - Ritenuta d'acconto
   https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto%3A1973-09-29%3B600~art25%21vig=

8. **L. 190/2014** - Regime forfettario (commi 54-89)
   https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3ALegge%3A2014-00-00%3B190~art1%21vig=

9. **DPR 642/1972** - Imposta di bollo
   https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Adecreto.del.presidente.della.repubblica%3A1972-10-26%3B642

10. **L. 247/2012, art. 13** - Conferimento dell'incarico e compenso
    https://www.normattiva.it/uri-res/N2Ls?urn%3Anir%3Astato%3Alegge%3A2012-12-31%3B247%21vig=~Art13

### Fonti Istituzionali e Professionali

11. **Cassa Forense** - Vademecum Fiscale per Avvocati (2a edizione 2026)
    https://www.cassaforense.it/media/2a3gkril/vademecum-fiscalita-versione-completa.pdf

12. **Cassa Forense** - Vademecum Fiscale 2026 (Sole 24 Ore)
    https://i2.res.24o.it/pdf2010/S24/Documenti/2026/02/27/AllegatiPDF/Copia%20Vademecum%20Fiscale%202026%202%20edizione_aggiornato.pdf

13. **Agenzia delle Entrate** - Risposta interpello n. 428/2022 (marca da bollo forfettario)

14. **Strumentario Avvocati** - Fattura elettronica e imposta di bollo
    https://strumentario.avvocati.it/it/news/fattura-elettronica-e-pagamento-dellimposta-di-bollo-gu-il-decreto

### Fonti Editoriali e di Settore

15. **Avvocato Andreani** - Calcolatrice scorporo fattura avvocato
    https://www.avvocatoandreani.it/servizi/calcolatrice_scorporo.php

16. **Avvocato Andreani** - Calcolo fattura studio legale
    https://www.avvocatoandreani.it/servizi/calcolo_fattura_studio_legale.php

17. **Fiscozen** - Spese forfettarie avvocato 15%
    https://www.fiscozen.it/guide/significato-spese-forfettarie-15/

18. **Fiscozen** - Compilazione parcella avvocato forfettario
    https://www.fiscozen.it/guide/compilazione-parcella-avvocato-forfettario/

19. **MondoADR** - Parcella avvocato regime forfettario
    https://www.mondoadr.it/parcella-avvocato-come-si-compila-se-il-regime-e-forfettario/

20. **Quickfisco** - Avvocato regime forfettario 2026
    https://quickfisco.it/blog/regime-forfettario/avvocato-in-regime-forfettario-codice-ateco-ed-esempi-fattura/

21. **Quickfisco** - Marca da bollo regime forfettario
    https://quickfisco.it/blog/regime-forfettario/marca-da-bollo-regime-forfettario-fa-reddito-chiarimenti/

22. **CFNews** - Novità regime forfait e bollo in fattura
    https://www.cfnews.it/avvocatura/novità-sul-regime-forfait-e-applicazione-del-bollo-in-fattura-al-cliente/

23. **Brocardi** - Novità regime forfettario 2026
    https://www.brocardi.it/notizie-giuridiche/partite-ecco-tutte-novita-2026-regime-forfettario-aggiornamenti-nuove/6371.html

24. **Studio Legale Mariani** - Scorporo fatture
    https://www.studiolegalemariani.com/scorporo-fatture/

25. **Animot** - Calcolo fattura inversa professionisti
    https://animot.it/blog/calcolo-fattura-inversa-professionisti/

26. **Calcolo Fattura Avvocato** - Calcolatore online (competitor diretto)
    https://calcolo-fattura-avvocato.com

27. **Federprofessioni** - Regime forfetario o ordinario: la scelta per gli avvocati (2026)
    https://www.federprofessioni.it/2026/03/09/regime-forfetario-o-ordinario-la-scelta-per-gli-avvocati/

28. **Software Semplice** - Regime forfettario 2026: guida fatture e IVA
    https://www.softwaresemplice.it/blog/regime-forfettario-fatturazione-elettronica/1212

29. **Fiscoetasse** - Regime forfettario 2026
    https://www.fiscoetasse.com/new-rassegna-stampa/3238-regime-forfettario-2026-prorogata-soglia-a-35mila-per-dipendenti-e-pensionati.html

30. **Fattura Express** - Bollo virtuale
    https://fatturaexpress.com/glossario/bollo-virtuale

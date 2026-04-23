import { Landmark, BookOpen, HelpCircle, Table, Calculator, Scale, AlertTriangle, FileText, ArrowRightLeft, Link2, TrendingUp, Building2, Tractor, Coins, Clock } from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { BulletList } from "@/components/shared/BulletList";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import { CircolariTable } from "@/components/shared/CircolariTable";
import Calcolatore from "@/components/calcolo-interessi-moratori/Calcolatore";
import {
  tassiMoratori,
  normativaRiferimento,
  circolariMinisteriali,
  sections,
} from "@/data/calcolo-interessi-moratori/interessiMoratoriData";
import { faqData } from "@/data/calcolo-interessi-moratori/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Calcolo Interessi Moratori 2026 Online Gratuito",
  description:
    "Calcola gli interessi moratori online. Tasso 2026 al 10,15% (BCE + 8%), tabella storica 2002-2026, formula, forfettario 40 euro e guida D.Lgs. 231/2002.",
  alternates: {
    canonical: "/calcolo-interessi-moratori",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-interessi-moratori",
    title: "Calcolo Interessi Moratori 2026 Online Gratuito",
    description:
      "Calcola gli interessi moratori online. Tasso 2026 al 10,15% (BCE + 8%), tabella storica 2002-2026, formula, forfettario 40 euro e guida D.Lgs. 231/2002.",
    images: [{ url: HERO_IMG, width: 1920, height: 1072, alt: "Calcolo Interessi Moratori 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Interessi Moratori 2026 Online Gratuito",
    description:
      "Calcola gli interessi moratori online. Tasso 2026 al 10,15% (BCE + 8%), tabella storica 2002-2026, formula, forfettario 40 euro e guida D.Lgs. 231/2002.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-interessi-moratori",
  title: "Calcolo Interessi Moratori 2026",
  shortTitle: "Interessi Moratori",
  icon: Landmark,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroImageAlt: "Calcolo Interessi Moratori 2026 — tasso BCE + 8% secondo D.Lgs. 231/2002",
  heroEyebrow: "Calcolatore, Tabella Tassi e Guida Completa",
  heroTitle: "Calcolo Interessi Moratori 2026",
  heroDescription:
    "Calcola gli interessi moratori con il calcolatore aggiornato al 2026. Tasso 10,15% (BCE 2,15% + 8%), tabella storica completa dal 2002, formula di calcolo, forfettario 40 euro, prodotti agricoli e normativa D.Lgs. 231/2002.",
  heroReference:
    "D.Lgs. 231/2002 — Comunicato MEF, G.U. n. 15 del 20/01/2026",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Dati aggiornati al Comunicato MEF pubblicato in GU n. 15 del 20/01/2026. Tasso in vigore H1 2026: 10,15%.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
    { label: "TuttoCamere", url: "https://www.tuttocamere.it" },
  ],
};

const formatPct = (n: number) =>
  new Intl.NumberFormat("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + "%";

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export default function CalcoloInteressiMoratoriPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== Structured Data ===== */}

      {/* Article */}
      <JsonLd
        data={articleSchema({
          headline: "Calcolo Interessi Moratori 2026: Tasso, Tabella Storica e Calcolatore Online",
          description:
            "Guida completa al calcolo degli interessi moratori: tasso 2026 al 10,15%, tabella storica dal 2002, formula I = C x T x G / 36.500, forfettario 40 euro, prodotti agricoli e normativa D.Lgs. 231/2002.",
          path: "/calcolo-interessi-moratori",
          datePublished: "2026-03-26",
          dateModified: "2026-03-26",
          image: HERO_IMG,
          sections: [
            "Cosa sono gli interessi moratori",
            "Normativa di riferimento",
            "Come si calcolano gli interessi moratori",
            "Tasso di interesse moratorio 2026",
            "Tabella storica tassi moratori 2002-2026",
            "Decorrenza degli interessi moratori",
            "Interessi moratori tra privati",
            "Differenza tra interessi legali e moratori",
            "Interessi moratori in fattura",
            "Prodotti agricoli e agroalimentari",
            "Importo forfettario 40 euro",
            "Fonti e riferimenti",
            "Domande Frequenti (FAQ)",
          ],
        })}
      />

      {/* 3. WebApplication */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Interessi Moratori Online",
          description: "Calcola gli interessi moratori ex D.Lgs. 231/2002 con tassi aggiornati al 2026. Tre modalità: transazioni commerciali, tra privati, tasso fisso.",
          path: "/calcolo-interessi-moratori",
          applicationCategory: "FinanceApplication",
        })}
      />

      {/* ===== Calcolatore ===== */}
      <Calcolatore />
      <p className="text-xs text-muted-foreground text-center mt-3">
        Dati verificati con Comunicato MEF, GU n. 15 del 20/01/2026. Prossimo aggiornamento: luglio 2026 (tasso H2).
      </p>

      {/* ===== Sezione 1: Cosa sono ===== */}
      <SectionTitle id="cosa-sono" icon={Scale} title="Cosa sono gli interessi moratori" subtitle="Definizione e funzione risarcitoria" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Gli <strong>interessi moratori</strong> (comunemente chiamati anche <em>interessi di mora</em>) sono una forma di risarcimento automatico dovuto dal debitore al creditore per il ritardo nel pagamento di una somma di denaro. Si tratta di una conseguenza giuridica prevista dalla legge che si attiva senza necessità di provare un danno effettivo: il semplice ritardo nel pagamento è sufficiente a far sorgere il diritto agli interessi di mora.
        </p>
        <p className="text-base leading-relaxed">
          La disciplina degli interessi moratori si articola su due binari distinti, a seconda della natura del rapporto obbligatorio:
        </p>
        <BulletList items={[
          "Nelle transazioni commerciali (B2B e con la PA): si applica il D.Lgs. 231/2002, con un tasso significativamente più elevato (BCE + 8%, pari al 10,15% nel H1 2026) e una funzione marcatamente sanzionatoria",
          "Nelle obbligazioni civili ordinarie tra privati: si applica l'art. 1224 del Codice Civile, con il tasso di interesse legale (1,60% nel 2026) e una funzione prevalentemente remuneratoria",
        ]} />
        <NormativaQuote url="https://www.brocardi.it/codice-civile/libro-quarto/titolo-i/capo-iii/art1224.html">
          Art. 1224, comma 1, cod. civ.: "Nelle obbligazioni che hanno per oggetto una somma di danaro, sono dovuti dal giorno della mora gli interessi legali, anche se non erano dovuti precedentemente e anche se il creditore non prova di aver sofferto alcun danno."
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          La funzione degli interessi moratori è duplice: da un lato, risarcire il creditore per il mancato godimento della somma nel periodo di ritardo; dall'altro, disincentivare il debitore dal ritardare il pagamento. Nelle transazioni commerciali, il legislatore europeo e italiano hanno voluto introdurre un tasso particolarmente elevato proprio per combattere il fenomeno dei ritardi di pagamento, che rappresenta un grave ostacolo alla competitività delle imprese.
        </p>
      </div>

      {/* ===== Sezione 2: Normativa ===== */}
      <SectionTitle id="normativa" icon={BookOpen} title="Normativa di riferimento" subtitle="D.Lgs. 231/2002, D.Lgs. 192/2012 e art. 1224 c.c." />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La disciplina degli interessi di mora nelle transazioni commerciali è contenuta nel <InlineNormLink text="D.Lgs. 9 ottobre 2002, n. 231" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231" />, che ha recepito la direttiva europea 2000/35/CE (poi sostituita dalla direttiva 2011/7/UE). Il decreto è stato successivamente modificato dal <InlineNormLink text="D.Lgs. 9 novembre 2012, n. 192" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2012-11-09;192" />, che ha innalzato la maggiorazione dal 7% all'8% a partire dal 1 gennaio 2013.
        </p>
        <p className="text-base leading-relaxed">
          Le norme fondamentali del decreto sono:
        </p>
        <BulletList items={[
          "Art. 4: decorrenza automatica degli interessi moratori, termini di 30/60 giorni, regime differenziato per B2B e PA",
          "Art. 5: determinazione del tasso moratorio (tasso BCE + 8 punti percentuali), aggiornamento semestrale",
          "Art. 6: risarcimento forfettario di 40 euro per ogni fattura pagata in ritardo",
          "Art. 7: limiti alla libertà contrattuale, nullità delle clausole gravemente inique",
        ]} />
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art5">
          Art. 5, comma 1, D.Lgs. 231/2002: "Gli interessi moratori sono determinati nella misura degli interessi legali di mora. [...] Il tasso di riferimento e [...] il tasso di interesse applicato dalla Banca centrale europea alle sue più recenti operazioni di rifinanziamento principali."
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          Per le obbligazioni tra privati, la norma di riferimento è l'<InlineNormLink text="art. 1224 del Codice Civile" url="https://www.brocardi.it/codice-civile/libro-quarto/titolo-i/capo-iii/art1224.html" />, integrato dal <InlineNormLink text="D.L. 12 settembre 2014, n. 132" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132" /> (art. 17), che ha introdotto il comma 4 dell'<InlineNormLink text="art. 1284 c.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" /> prevedendo il tasso maggiorato in corso di causa.
        </p>
        <p className="text-base leading-relaxed">
          Per i <strong>prodotti agricoli e agroalimentari</strong>, il <InlineNormLink text="D.Lgs. 8 novembre 2021, n. 198" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2021-11-08;198" /> prevede una ulteriore maggiorazione di +4 punti percentuali rispetto al tasso standard del <InlineNormLink text="D.Lgs. 231/2002" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231" />.
        </p>
      </div>

      {/* ===== Sezione 3: Come calcolare ===== */}
      <SectionTitle id="come-calcolare" icon={Calculator} title="Come si calcolano gli interessi moratori" subtitle="Formula, esempio pratico e divisore 36.500" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La formula per il <strong>calcolo degli interessi di mora</strong> è identica a quella degli interessi legali, ma il <strong>tasso di mora</strong> applicabile è diverso e significativamente più elevato:
        </p>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5 text-center" style={{ borderRadius: "0.375rem" }}>
          <p className="text-xl font-mono font-bold text-[oklch(0.25_0.04_250)]">
            I = C × T × G / 36.500
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            I = interessi • C = capitale • T = tasso moratorio (%) • G = giorni di ritardo
          </p>
        </div>
        <LegalTable
          headers={["Variabile", "Significato"]}
          rows={[
            ["I", "Interessi moratori dovuti (€)"],
            ["C", "Capitale: importo della fattura o del debito scaduto (€)"],
            ["T", "Tasso moratorio annuo (es. 10,15 per il H1 2026)"],
            ["G", "Giorni di ritardo (dal giorno successivo alla scadenza)"],
            ["36.500", "Divisore fisso: 365 giorni × 100 (perché T è in %)"],
          ]}
        />
        <AlertBox variant="info" title="Perché 36.500 anche per gli anni bisestili?">
          <p className="leading-relaxed">
            La <a href="https://www.agenziaentrate.gov.it/portale/documents/20143/0/Risoluzione_14_07_2008_296.pdf" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Risoluzione dell'Agenzia delle Entrate n. 296/E del 14/07/2008</a> ha chiarito che il divisore resta <strong>sempre 36.500</strong>, anche negli anni bisestili, per garantire uniformità di trattamento. Non si usa mai il divisore 36.600.
          </p>
        </AlertBox>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Esempio pratico</h3>
        <p className="text-base leading-relaxed">
          Fattura di <strong className="font-mono">€ 10.000,00</strong> con scadenza 31/03/2026 e pagamento il 30/05/2026 (60 giorni di ritardo). Tasso H1 2026: 10,15%.
        </p>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5" style={{ borderRadius: "0.375rem" }}>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)]">
            I = 10.000 × 10,15 × 60 / 36.500 = <strong>€ 166,85</strong>
          </p>
          <p className="font-mono text-sm text-[oklch(0.30_0.04_250)] mt-1">
            + forfettario art. 6 = € 40,00
          </p>
          <p className="font-mono text-sm font-bold text-[oklch(0.25_0.04_250)] mt-1">
            Totale mora = <strong>€ 206,85</strong>
          </p>
        </div>

        <AlertBox variant="warning" title="Calcolo multi-semestre">
          <p className="leading-relaxed">
            Se il ritardo attraversa il 1 luglio o il 1 gennaio (cambio di semestre), occorre <strong>calcolare separatamente</strong> i due periodi con i rispettivi tassi e sommare i risultati. Il calcolatore in alto effettua questa suddivisione automaticamente.
          </p>
        </AlertBox>

        <AlertBox variant="info" title="No anatocismo">
          <p className="leading-relaxed">
            Gli interessi moratori non si capitalizzano: il calcolo è sempre in regime di <strong>interesse semplice</strong>. Non si calcolano mai interessi sugli interessi (<InlineNormLink text="art. 1283 c.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1283" />).
          </p>
        </AlertBox>
      </div>

      {/* ===== Sezione 4: Tasso 2026 ===== */}
      <SectionTitle id="tasso-2026" icon={TrendingUp} title="Tasso di interesse moratorio 2026" subtitle="Comunicato MEF, GU n. 15 del 20/01/2026" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>tasso di mora per il 1 semestre 2026</strong> (noto anche come <em>tasso di interesse moratorio</em>) è pari al <strong className="font-mono">10,15%</strong>, risultante dalla somma del tasso BCE di rifinanziamento principale (2,15%) e della maggiorazione di 8 punti percentuali prevista dall'<InlineNormLink text="art. 5 del D.Lgs. 231/2002" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art5" />.
        </p>
        <AlertBox variant="success" title="Tasso moratorio H1 2026: 10,15%">
          <p className="leading-relaxed">
            Il tasso resta stabile rispetto al H2 2025 (anch'esso 10,15%). Dopo il picco del 12,50% raggiunto nel H1 2024, il tasso è in progressiva discesa per effetto del calo dei tassi BCE iniziato nell'estate 2024.
          </p>
        </AlertBox>
        <LegalTable
          headers={["Voce", "Valore", "Fonte"]}
          rows={[
            ["Tasso BCE rifinanziamento principale", "2,15%", "BCE, confermato feb. 2026"],
            ["Maggiorazione D.Lgs. 231/2002", "8,00%", "Art. 5 D.Lgs. 231/2002"],
            ["Tasso moratorio H1 2026", "10,15%", "Comunicato MEF, GU n. 15 del 20/01/2026"],
            ["Maggiorazione agricola aggiuntiva", "+4,00%", "Art. 4 D.Lgs. 198/2021"],
            ["Tasso moratorio agricolo H1 2026", "14,15%", "D.Lgs. 198/2021 + D.Lgs. 231/2002"],
          ]}
        />
        <p className="text-base leading-relaxed">
          Il comunicato del Ministero dell'Economia e delle Finanze è stato pubblicato sulla <InlineNormLink text="Gazzetta Ufficiale n. 15 del 20 gennaio 2026" url="https://www.gazzettaufficiale.it/eli/id/2026/01/20/26A00172/sg" />. Il tasso è in vigore dal 1 gennaio al 30 giugno 2026. Il tasso per il 2 semestre 2026 sarà pubblicato entro la fine di giugno 2026.
        </p>
      </div>

      {/* ===== Sezione 5: Tabella Storica ===== */}
      <SectionTitle id="tabella-storica" icon={Table} title="Tabella storica tassi moratori 2002-2026" subtitle="Tutti i tassi semestrali dal D.Lgs. 231/2002" />
      <p className="text-base leading-relaxed mb-4">
        La <strong>tabella storica dei tassi di interesse moratorio</strong> riporta i tassi semestrali pubblicati dal MEF dal 2002 ad oggi, con l'indicazione del tasso BCE, della maggiorazione applicata e del tasso totale. Fino al 31/12/2012 la maggiorazione era del 7%, dal 01/01/2013 è stata innalzata all'8% dal <InlineNormLink text="D.Lgs. 192/2012" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2012-11-09;192" />.
      </p>
      <LegalTable
        headers={["Periodo", "BCE (%)", "Magg. (%)", "Totale (%)"]}
        rows={tassiMoratori.map((t) => [
          `${formatDate(t.dal)} – ${t.al ? formatDate(t.al) : "in vigore"}`,
          formatPct(t.tassoBce),
          formatPct(t.maggiorazione),
          formatPct(t.totale),
        ])}
      />
      <p className="text-sm text-muted-foreground mt-3">
        Il tasso più alto è stato il <strong className="font-mono">12,50%</strong> nel H1 2024, il più basso l'<strong className="font-mono">8,00%</strong> in vari semestri dal 2009 al 2022 (quando il tasso BCE era pari a zero).
      </p>

      {/* ===== Sezione 6: Decorrenza ===== */}
      <SectionTitle id="decorrenza" icon={Clock} title="Decorrenza degli interessi moratori" subtitle="Art. 4 D.Lgs. 231/2002" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Una delle caratteristiche più rilevanti degli interessi di mora nelle transazioni commerciali è la loro <strong>decorrenza automatica</strong>: a differenza del regime civilistico ordinario, non è necessario inviare una diffida o una messa in mora formale. Gli interessi moratori iniziano a maturare dal giorno successivo alla scadenza del termine di pagamento (<InlineNormLink text="art. 4 D.Lgs. 231/2002" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art4" />), purché non sia dimostrato che il ritardo sia dovuto a cause non imputabili al debitore. Il termine di pagamento, in assenza di accordo tra le parti, è di <strong>30 giorni</strong> e decorre da uno dei seguenti eventi:
        </p>
        <BulletList items={[
          "Ricezione della fattura o di una richiesta di pagamento equivalente",
          "Consegna delle merci o prestazione dei servizi (se la fattura è anteriore o contestuale)",
          "Accettazione o verifica di conformità della merce (se prevista per legge o contratto, entro 30 gg)",
        ]} />
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Termini: B2B vs PA</h3>
        <LegalTable
          headers={["Soggetto", "Termine base", "Termine massimo", "Derogabilità"]}
          rows={[
            ["Impresa vs Impresa (B2B)", "30 giorni", "60 giorni (per iscritto, se non gravemente iniquo)", "Sì, entro i limiti dell'art. 7"],
            ["Impresa vs PA", "30 giorni", "60 giorni (solo per PA con attività economica/sanitaria)", "No, tasso inderogabile"],
          ]}
        />
        <AlertBox variant="info" title="Pagamenti rateali">
          <p className="leading-relaxed">
            In caso di pagamenti rateali, gli interessi moratori si calcolano solo sulla <strong>singola rata scaduta</strong> e non sull'intero importo contrattuale (<InlineNormLink text="art. 4, comma 7, D.Lgs. 231/2002" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art4" />). Ogni rata genera autonomamente interessi moratori dalla propria scadenza.
          </p>
        </AlertBox>
      </div>

      {/* ===== Sezione 7: Tra privati ===== */}
      <SectionTitle id="tra-privati" icon={Building2} title="Interessi moratori tra privati" subtitle="Art. 1224 c.c. e comma 4 dell'art. 1284 c.c." />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Nelle obbligazioni <strong>non commerciali</strong> — quali responsabilità civile, crediti professionali, sinistri assicurativi, rapporti di lavoro — gli interessi moratori sono regolati dall'<InlineNormLink text="art. 1224 del Codice Civile" url="https://www.brocardi.it/codice-civile/libro-quarto/titolo-i/capo-iii/art1224.html" />. Il tasso applicabile è quello <strong>legale</strong>, pari all'1,60% nel 2026 (<InlineNormLink text="art. 1284 c.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" />).
        </p>
        <p className="text-base leading-relaxed">
          A differenza delle transazioni commerciali, tra privati può essere necessaria la <strong>messa in mora</strong> formale (<InlineNormLink text="art. 1219 c.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1219" />), salvo i casi in cui la mora è automatica (obbligazioni a termine, illecito extracontrattuale).
        </p>
        <AlertBox variant="warning" title="Interessi in corso di causa (comma 4, art. 1284 c.c.)">
          <p className="leading-relaxed">
            Dal 2014 (<InlineNormLink text="D.L. 132/2014, art. 17" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132" />), il comma 4 dell'art. 1284 c.c. prevede che, se le parti non hanno convenuto la misura degli interessi moratori, <strong>dalla proposizione della domanda giudiziale</strong> il saggio sale automaticamente al livello delle transazioni commerciali (tasso BCE + 8%, ossia <strong>10,15%</strong> nel H1 2026). Questa norma ha lo scopo di evitare che il processo civile diventi un "finanziamento al ribasso" per il debitore.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          Se le parti hanno <strong>pattuito interessi superiori</strong> al tasso legale, si mantiene il tasso superiore anche durante il periodo di mora (art. 1224, comma 1, ultima parte).
        </p>
      </div>

      {/* ===== Sezione 8: Differenza legali-moratori ===== */}
      <SectionTitle id="differenza-legali-moratori" icon={ArrowRightLeft} title="Differenza tra interessi legali e moratori" subtitle="Tabella comparativa 2026" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          È fondamentale distinguere tra <strong>interessi legali</strong> e <strong>interessi di mora</strong> nelle transazioni commerciali. Sebbene entrambi siano dovuti per il ritardo nel pagamento, hanno presupposti, funzione e misura profondamente diversi. Il tasso legale ordinario (art. 1284 c.c.) ha una funzione <strong>remuneratoria</strong>: compensa il creditore per la mancata disponibilità del denaro. Il <strong>tasso di mora</strong> commerciale (D.Lgs. 231/2002) ha invece una funzione marcatamente <strong>sanzionatoria</strong>: disincentiva il debitore dal ritardare il pagamento applicando un tasso oltre sei volte superiore.
        </p>
        <p className="text-base leading-relaxed">
          Per comprendere l'impatto pratico della differenza: su un debito di <strong>10.000 euro</strong> pagato con 60 giorni di ritardo nel H1 2026, gli interessi legali ordinari ammonterebbero a soli <strong className="font-mono">26,30 euro</strong> (1,60% annuo), mentre gli interessi di mora commerciali arriverebbero a <strong className="font-mono">166,85 euro</strong> (10,15% annuo) più i 40 euro di forfettario. Una differenza di oltre 180 euro che evidenzia l'intento deterrente della disciplina speciale.
        </p>
        <LegalTable
          headers={["", "Interessi Legali", "Interessi Moratori (commerciali)"]}
          rows={[
            ["Fonte normativa", "Art. 1284 cod. civ.", "D.Lgs. 231/2002, art. 5"],
            ["Ambito", "Obbligazioni civili ordinarie", "Transazioni commerciali (B2B, PA)"],
            ["Tasso 2026", "1,60%", "10,15% (BCE 2,15% + 8%)"],
            ["Funzione", "Remuneratoria / risarcitoria", "Sanzionatoria / deterrente"],
            ["Decorrenza", "Liquidità ed esigibilità del credito", "Scadenza del termine (automatica)"],
            ["Messa in mora", "Generalmente necessaria", "Non necessaria (automatica)"],
            ["Aggiornamento", "Annuale (1 gennaio)", "Semestrale (1 gennaio e 1 luglio)"],
            ["Forfettario", "Non previsto", "40 euro per ogni fattura (art. 6)"],
          ]}
        />
        <LegalTable
          headers={["Situazione", "Tasso 2026", "Fonte"]}
          rows={[
            ["Interesse legale ordinario", "1,60%", "Art. 1284 c.c., comma 1"],
            ["Moratorio commerciale (D.Lgs. 231/2002)", "10,15%", "Art. 5 + BCE 2,15% + 8%"],
            ["Moratorio in lite giudiziale (se non pattuito)", "10,15%", "Art. 1284 c.c., comma 4"],
            ["Moratorio prodotti agricoli/alimentari", "14,15%", "D.Lgs. 198/2021 + 4%"],
          ]}
        />
      </div>

      {/* ===== Sezione 9: In fattura ===== */}
      <SectionTitle id="in-fattura" icon={FileText} title="Interessi moratori in fattura" subtitle="IVA, e-fattura e esempio pratico" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Gli interessi moratori sono <strong>esclusi dall'IVA</strong> ai sensi dell'<InlineNormLink text="art. 15 del DPR 633/72" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633~art15" />. In fattura vanno indicati come riga separata con le seguenti caratteristiche:
        </p>
        <BulletList items={[
          "Descrizione: \"Interessi moratori ex D.Lgs. 231/2002\"",
          "Aliquota IVA: 0%",
          "Codice natura nella fattura elettronica: N1 (escluso art. 15 DPR 633/72)",
          "Tipo documento: TD01 (fattura) o TD05 (nota di debito)",
          "Formato XML: tracciato SDI versione 1.6.1 o successivo",
        ]} />
        <p className="text-base leading-relaxed">
          L'indennità forfettaria di <strong>40 euro</strong> (<InlineNormLink text="art. 6 D.Lgs. 231/2002" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art6" />) va inserita come ulteriore riga separata, anch'essa con codice natura <strong>N1</strong> e aliquota 0%.
        </p>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Esempio di fattura con mora (H1 2026)</h3>
        <LegalTable
          headers={["Descrizione", "Imponibile", "IVA", "Natura"]}
          rows={[
            ["Prestazione originaria", "€ 10.000,00", "22%", "—"],
            ["Interessi moratori (39 gg × 10,15%)", "€ 108,33", "0%", "N1"],
            ["Indennità forfettaria art. 6 D.Lgs. 231/2002", "€ 40,00", "0%", "N1"],
          ]}
        />
        <AlertBox variant="info" title="Fattura elettronica">
          <p className="leading-relaxed">
            Dal 1 gennaio 2021 è obbligatorio il tracciato XML versione 1.6.1 (o successive) per l'invio tramite il Sistema di Interscambio (SDI). Il codice natura <strong>N1</strong> identifica le operazioni "escluse ex art. 15" e si applica sia agli interessi moratori sia all'indennità forfettaria.
          </p>
        </AlertBox>
      </div>

      {/* ===== Sezione 10: Prodotti agricoli ===== */}
      <SectionTitle id="prodotti-agricoli" icon={Tractor} title="Prodotti agricoli e agroalimentari" subtitle="D.Lgs. 198/2021 — maggiorazione +4%" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Per i <strong>prodotti agricoli e alimentari</strong>, il <InlineNormLink text="D.Lgs. 8 novembre 2021, n. 198" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2021-11-08;198" /> prevede una disciplina ancora più stringente. Al tasso moratorio standard (BCE + 8%) si aggiunge una <strong>ulteriore maggiorazione di 4 punti percentuali</strong>, portando il tasso per il H1 2026 al <strong className="font-mono">14,15%</strong>.
        </p>
        <LegalTable
          headers={["Voce", "Valore"]}
          rows={[
            ["Tasso moratorio base H1 2026", "10,15%"],
            ["Maggiorazione agricola", "+4,00%"],
            ["Tasso moratorio agricolo H1 2026", "14,15%"],
          ]}
        />
        <p className="text-base leading-relaxed">
          I termini di pagamento per i prodotti agricoli e alimentari sono:
        </p>
        <BulletList items={[
          "30 giorni per i prodotti deperibili (dalla consegna o dalla fine del periodo di consegna mensile)",
          "60 giorni per i prodotti non deperibili",
        ]} />
        <AlertBox variant="warning" title="Carattere imperativo">
          <p className="leading-relaxed">
            La disciplina ha <strong>carattere imperativo</strong> (<InlineNormLink text="art. 3 D.Lgs. 198/2021" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2021-11-08;198" />): i termini e il tasso non sono derogabili contrattualmente. La norma non si applica ai contratti con i consumatori finali.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          La maggiorazione è stata introdotta inizialmente al 2% dal <InlineNormLink text="D.L. 5 maggio 2015, n. 51" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2015-05-05;51" /> (art. 2, comma 3), poi innalzata al 4% e confermata definitivamente dal D.Lgs. 198/2021.
        </p>
      </div>

      {/* ===== Sezione 11: Importo forfettario ===== */}
      <SectionTitle id="importo-forfettario" icon={Coins} title="Importo forfettario di 40 euro" subtitle="Art. 6 D.Lgs. 231/2002" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<InlineNormLink text="art. 6 del D.Lgs. 231/2002" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art6" /> prevede che il creditore ha diritto, senza necessità di messa in mora, a un importo forfettario di <strong>40 euro</strong> a titolo di risarcimento dei costi di recupero del credito. Si tratta di una indennità:
        </p>
        <BulletList items={[
          "Automatica: spetta senza necessità di dimostrazione del danno o di messa in mora",
          "Cumulativa: si aggiunge agli interessi moratori, non li sostituisce",
          "Per ogni fattura: è dovuta per ciascuna fattura pagata in ritardo, non per ciascun rapporto contrattuale",
          "Applicabile a tutte le transazioni commerciali: sia B2B che con la PA",
        ]} />
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231~art6">
          Art. 6, comma 1, D.Lgs. 231/2002: "Il creditore ha diritto anche ad un importo forfettario di 40 euro, a titolo di risarcimento del danno, senza che sia necessaria la costituzione in mora."
        </NormativaQuote>
        <AlertBox variant="info" title="In fattura">
          <p className="leading-relaxed">
            L'indennità forfettaria va indicata come riga separata in fattura o nota di debito, esclusa da IVA (codice natura <strong>N1</strong>, ai sensi dell'<InlineNormLink text="art. 15 DPR 633/72" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633~art15" />). Il comma 2 dell'art. 6 prevede inoltre il risarcimento del maggior danno eventualmente provato.
          </p>
        </AlertBox>
      </div>

      {/* ===== Sezione 12: Fonti ===== */}
      <SectionTitle id="fonti" icon={BookOpen} title="Fonti e Riferimenti" />
      <p className="text-sm text-muted-foreground mb-4">
        A cura della redazione di AvvocatoTools.it. Tutti i dati sono verificati confrontando le fonti istituzionali elencate di seguito. Ultimo aggiornamento: 26 marzo 2026.
      </p>
      <NormativaRefTable items={normativaRiferimento} />

      <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-8 mb-4 flex items-center gap-2">
        <Link2 className="w-5 h-5 text-[oklch(0.75_0.10_85)]" /> Comunicati e Risoluzioni
      </h3>
      <CircolariTable items={circolariMinisteriali} />

      {/* ===== Sezione 13: FAQ ===== */}
      <SectionTitle id="faq" icon={HelpCircle} title="Domande Frequenti (FAQ)" subtitle="Le risposte ai dubbi più comuni sugli interessi moratori" />
      <FAQ items={faqData} />
    </ToolLayout>
  );
}

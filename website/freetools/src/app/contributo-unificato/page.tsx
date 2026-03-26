import { Scale, BookOpen, AlertTriangle, CreditCard, RotateCcw, Sparkles, FileText, Landmark, Gavel, Users, Shield, ChevronRight, HelpCircle, Link2, Table, Hammer, Building } from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { SectionBanner } from "@/components/shared/SectionBanner";
import { BulletList } from "@/components/shared/BulletList";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import { CircolariTable } from "@/components/shared/CircolariTable";
import Calcolatore from "@/components/contributo-unificato/Calcolatore";
import {
  scaglioniCivile,
  scaglioniTributario,
  scaglioniAmministrativoAppalti,
  procedimentiEsenti,
  procedimentiFissi,
  normativaRiferimento,
  circolariMinisteriali,
  sections,
} from "@/data/contributo-unificato/contributoData";
import { faqData } from "@/data/contributo-unificato/faqData";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";
const CIVILE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/section-civile-gpVEdeHof75jXBZjxEvY8m.webp";
const TRIBUTARIO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/section-tributario-mzFJvMViqknuGxqxGc55xA.webp";
const AMMINISTRATIVO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/section-amministrativo-Y9Qnw4ucLt3deR4Dp8ZaEK.webp";

export const metadata: Metadata = {
  title: "Contributo Unificato 2026: Tabella Scaglioni, Calcolo e Guida",
  description:
    "Tabella contributo unificato 2026 con scaglioni aggiornati. Calcolo per valore della causa, decreto ingiuntivo, pignoramento, giudice di pace. Esenzioni e normativa.",
  alternates: {
    canonical: "/contributo-unificato",
  },
  openGraph: {
    type: "article",
    title: "Contributo Unificato 2026: Tabella Scaglioni, Calcolo e Guida",
    description:
      "Tabella contributo unificato 2026 con scaglioni aggiornati. Calcolo per valore della causa, decreto ingiuntivo, pignoramento, giudice di pace. Esenzioni e normativa.",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp",
        width: 1920,
        height: 1072,
        alt: "Contributo Unificato 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contributo Unificato 2026: Tabella Scaglioni, Calcolo e Guida",
    description:
      "Tabella contributo unificato 2026 con scaglioni aggiornati. Calcolo per valore della causa, decreto ingiuntivo, pignoramento, giudice di pace. Esenzioni e normativa.",
  },
};

const toolConfig: ToolConfig = {
  slug: "contributo-unificato",
  title: "Contributo Unificato 2026",
  shortTitle: "Contributo Unificato",
  icon: Scale,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroEyebrow: "Tabella, Calcolo e Guida Completa",
  heroTitle: "Contributo Unificato 2026",
  heroDescription:
    "Tabella contributo unificato con scaglioni aggiornati al 2026. Calcolo rapido per valore della causa, decreto ingiuntivo, pignoramento, processo tributario e giudice di pace. Esenzioni, sanzioni e normativa.",
  heroReference:
    "D.P.R. 115/2002 e successive modificazioni \u2014 Aggiornato alla Legge di Bilancio 2025",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Dati aggiornati al DPR 115/2002 e successive modificazioni, inclusa la Legge di Bilancio 2025 (L. 207/2024).",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Altalex", url: "https://www.altalex.com/guide/contributo-unificato" },
    { label: "Ministero della Giustizia", url: "https://www.giustizia.it" },
  ],
};

const formatEur = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(n);

export default function ContributoUnificatoPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== Structured Data: 3 JSON-LD blocks ===== */}

      {/* 1. BreadcrumbList */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Strumenti Legali Gratuiti", path: "/" },
          { name: "Contributo Unificato 2026", path: "/contributo-unificato" },
        ])}
      />

      {/* 2. Article (legal guide) */}
      <JsonLd
        data={articleSchema({
          headline: "Contributo Unificato 2026: Tabella Scaglioni, Calcolo e Guida Completa",
          description:
            "Tabella contributo unificato 2026 con scaglioni aggiornati. Calcolo per valore della causa, decreto ingiuntivo, pignoramento presso terzi, giudice di pace. Esenzioni, sanzioni e normativa.",
          path: "/contributo-unificato",
          datePublished: "2025-06-01",
          dateModified: "2026-03-10",
          image: HERO_IMG,
          sections: [
            "Cos'e il Contributo Unificato",
            "Tabella Contributo Unificato 2026 - Scaglioni per Valore",
            "Processo Civile",
            "Contributo Unificato Decreto Ingiuntivo",
            "Riduzione del 50%",
            "Aumenti del Contributo Unificato",
            "Processo Tributario",
            "Processo Amministrativo",
            "Procedimenti Esecutivi",
            "Contributo Unificato Pignoramento presso Terzi",
            "Procedimenti in Materia di Famiglia",
            "Contributo Unificato Giudice di Pace",
            "Procedimenti con Contributo Fisso",
            "Procedimenti Esenti",
            "Sanzioni e Conseguenze",
            "Modalita di Pagamento",
            "Rimborso del Contributo Unificato",
            "Novita della Legge di Bilancio 2025",
            "Domande Frequenti (FAQ)",
            "Normativa di Riferimento",
          ],
        })}
      />

      {/* Calcolatore */}
      <Calcolatore />

      {/* Cos'è il CU */}
      <SectionTitle id="cos-e" icon={BookOpen} title="Cos'è il Contributo Unificato" subtitle="Art. 9, DPR 115/2002" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>contributo unificato di iscrizione a ruolo</strong> è una somma che viene corrisposta all'Erario ogni volta in cui una parte inizia un processo civile, amministrativo o tributario. Ha sostituito le imposte di bollo, la tassa di iscrizione a ruolo e i diritti di cancelleria, semplificando l'imposizione fiscale sugli atti giudiziari. La disciplina è contenuta nel <InlineNormLink text="D.P.R. 30 maggio 2002, n. 115" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" /> (Testo Unico Spese di Giustizia).
        </p>
        <p className="text-base leading-relaxed">
          La Corte Costituzionale ha riconosciuto al contributo unificato la <strong>natura di tributo</strong>, stante la doverosità della prestazione e il collegamento ad una spesa pubblica come quella giudiziaria (C. Cost. sent. 73/2005).
        </p>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115">
          Art. 9, c. 1: "È dovuto il contributo unificato di iscrizione a ruolo, per ciascun grado di giudizio, nel processo civile, compresa la procedura concorsuale e di volontaria giurisdizione, nel processo amministrativo e nel processo tributario, secondo gli importi previsti dall'articolo 13 e salvo quanto previsto dall'articolo 10."
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          Oltre al contributo unificato, per tutte le cause civili è dovuto anche il pagamento dell'<strong>anticipazione forfettaria</strong> pari a <strong className="font-mono">€ 27,00</strong> (<InlineNormLink text="art. 30 DPR 115/2002" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" />), salvo esenzioni specifiche (giudizi di lavoro, procedimenti familiari, ricerca telematica beni ex art. 492-bis c.p.c.).
        </p>
      </div>

      {/* Tabella Contributo Unificato 2026 */}
      <SectionTitle id="tabella" icon={Table} title="Tabella Contributo Unificato 2026 — Scaglioni per Valore" subtitle="Importi aggiornati alla Legge di Bilancio 2025 (L. 207/2024)" />
      <p className="text-base leading-relaxed mb-4">
        La <strong>tabella del contributo unificato 2026</strong> riporta gli importi suddivisi per <strong>scaglioni di valore della causa</strong>. Quanto si paga di contributo unificato dipende dal tipo di processo (civile, tributario, amministrativo), dal valore della causa e dal grado di giudizio (primo grado, appello, Cassazione).
      </p>
      <LegalTable
        headers={["Scaglione di valore", "Civile I Grado", "Appello (+50%)", "Cassazione (x2)", "Tributario"]}
        rows={scaglioniCivile.map((s, i) => {
          const trib = scaglioniTributario[i];
          return [
            s.label,
            formatEur(s.importo),
            formatEur(s.importo * 1.5),
            formatEur(s.importo * 2),
            trib ? formatEur(trib.importo) : "—",
          ];
        })}
      />
      <p className="text-sm text-muted-foreground mt-3">
        Per le cause di <strong>valore indeterminabile</strong>, il contributo unificato è pari a <strong className="font-mono">€ 518,00</strong> nel processo civile e <strong className="font-mono">€ 120,00</strong> nel tributario. Per i procedimenti con <strong>contributo fisso</strong> (separazione, divorzio, esecuzioni), vedi le sezioni dedicate.
      </p>

      {/* Processo Civile */}
      <SectionTitle id="civile" icon={Gavel} title="Processo Civile" subtitle="Art. 13, comma 1, DPR 115/2002" />
      <SectionBanner image={CIVILE_IMG} alt="Processo Civile" text="Tabella degli importi per scaglione di valore e grado di giudizio" />
      <p className="text-base leading-relaxed mb-4">
        L'importo del contributo unificato è determinato in base ai cosiddetti "scaglioni" di valore della causa. Il CU è <strong>aumentato del 50%</strong> nei giudizi di impugnazione e <strong>raddoppiato</strong> per i processi dinanzi alla Corte di Cassazione (<InlineNormLink text="art. 13, c. 1-bis" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" />).
      </p>
      <LegalTable
        headers={["Scaglione di valore", "I Grado", "Impugnazione (+50%)", "Cassazione (x2)"]}
        rows={scaglioniCivile.map((s) => [
          s.label,
          formatEur(s.importo),
          formatEur(s.importo * 1.5),
          formatEur(s.importo * 2),
        ])}
      />
      <div className="mt-4">
        <AlertBox variant="info">
          <p><strong>Valore indeterminabile:</strong> <span className="font-mono">{formatEur(518)}</span> (I grado) | <span className="font-mono">{formatEur(777)}</span> (Impugnazione) | <span className="font-mono">{formatEur(1036)}</span> (Cassazione)</p>
          <p className="mt-1"><strong>Valore non indicato:</strong> <span className="font-mono">{formatEur(1686)}</span> (I grado) | <span className="font-mono">{formatEur(2529)}</span> (Impugnazione) | <span className="font-mono">{formatEur(3372)}</span> (Cassazione)</p>
          <p className="text-xs text-muted-foreground mt-2">In caso di mancata dichiarazione di valore si applica lo scaglione massimo (art. 13, c. 6).</p>
        </AlertBox>
      </div>

      {/* Decreto Ingiuntivo */}
      <SectionTitle id="decreto-ingiuntivo" icon={Hammer} title="Contributo Unificato Decreto Ingiuntivo" subtitle="Art. 13, comma 3, DPR 115/2002" />
      <p className="text-base leading-relaxed mb-4">
        Il <strong>contributo unificato per il decreto ingiuntivo</strong> gode della <strong>riduzione del 50%</strong> rispetto agli importi ordinari del processo civile (art. 13, c. 3, DPR 115/2002). Il dimezzamento si applica sia al ricorso per ingiunzione sia all'<strong>opposizione a decreto ingiuntivo</strong> in primo grado.
      </p>
      <LegalTable
        headers={["Scaglione di valore", "CU Ordinario", "CU Decreto Ingiuntivo (−50%)"]}
        rows={scaglioniCivile.map((s) => [
          s.label,
          formatEur(s.importo),
          formatEur(s.importo / 2),
        ])}
        className="mb-4"
      />
      <AlertBox variant="info">
        <p><strong>Opposizione a decreto ingiuntivo:</strong> anche l'opposizione gode del dimezzamento in primo grado. In appello, si applica l'importo pieno con aumento del 50% (art. 13, c. 1-bis).</p>
        <p className="mt-2"><strong>Decreto ingiuntivo provvisoriamente esecutivo:</strong> se viene concessa la provvisoria esecuzione ex art. 642 c.p.c., il CU resta dimezzato. La provvisoria esecutività non incide sull'importo del contributo.</p>
      </AlertBox>

      {/* Riduzione 50% */}
      <SectionTitle id="riduzione" icon={ChevronRight} title="Riduzione del 50%" subtitle="Art. 13, comma 3, DPR 115/2002" />
      <p className="text-base leading-relaxed mb-4">
        Il contributo unificato è ridotto della metà nei seguenti casi tassativi:
      </p>
      <LegalTable
        headers={["Scaglione", "CU Dimezzato"]}
        rows={scaglioniCivile.map((s) => [s.label, formatEur(s.importo / 2)])}
        className="mb-4"
      />
      <div className="mb-4">
        <BulletList items={[
          "Procedimenti per ingiunzione (decreto ingiuntivo)",
          "Procedimenti per convalida di sfratto",
          "Procedimenti cautelari o possessori",
          "Accertamento tecnico preventivo",
          "Opposizione a decreto ingiuntivo in primo grado",
          "Sfratto per morosità (valore = canoni non corrisposti alla data di notifica)",
          "Finita locazione (valore = ammontare canone annuo)",
          "Controversie individuali di lavoro (reddito > € 40.978,92)",
          "Opposizione alla sentenza dichiarativa di fallimento/liquidazione giudiziale",
        ]} />
      </div>
      <AlertBox variant="warning" title="Attenzione">
        <p>Il <strong>procedimento semplificato di cognizione</strong> (artt. 281-decies e segg. c.p.c., introdotto dalla <InlineNormLink text="Riforma Cartabia" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" />) <strong>non</strong> gode del dimezzamento del CU (<a href="https://i2.res.24o.it/pdf2010/Editrice/ILSOLE24ORE/QUOTIDIANI_VERTICALI/Online/_Oggetti_Embedded/Documenti/2023/04/13/Min-Giustizia-circolare-17-3-2023-contributo.pdf" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Circ. Min. Giustizia 17/3/2023</a>).</p>
        <p className="mt-2">La riduzione del 50% per l'opposizione alla sentenza di fallimento <strong>non si applica</strong> al successivo giudizio di appello (Circ. Min. 29/9/2003).</p>
      </AlertBox>

      {/* Aumenti */}
      <SectionTitle id="aumenti" icon={AlertTriangle} title="Aumenti del Contributo Unificato" subtitle="Art. 13, commi 1-bis, 1-ter, 3-bis, 6" />
      <LegalTable
        headers={["Caso", "Effetto", "Riferimento"]}
        rows={[
          ["Giudizio di impugnazione (appello)", "Aumento del 50%", "Art. 13, c. 1-bis"],
          ["Ricorso in Cassazione", "Raddoppio", "Art. 13, c. 1-bis"],
          ["Sezioni specializzate impresa (D.Lgs. 168/2003)", "Raddoppio", "Art. 13, c. 1-ter"],
          ["Omessa indicazione PEC (proc. tributario)", "Aumento del 50%", "Art. 13, c. 3-bis"],
          ["Omessa indicazione codice fiscale", "Aumento del 50%", "Art. 13, c. 3-bis"],
          ["Omessa dichiarazione di valore", "Scaglione massimo (€ 1.686)", "Art. 13, c. 6"],
          ["Impugnazione respinta/inammissibile/improcedibile", "Ulteriore CU pari a quello versato", "Art. 13, c. 1-quater"],
        ]}
      />
      <p className="text-sm text-muted-foreground mt-3">
        Nota: nel processo civile, dal 2014, l'avvocato non è più tenuto ad indicare la PEC (art. 125, c. 1, c.p.c. come modificato dal <InlineNormLink text="D.L. 90/2014" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-06-24;90!vig=" />). L'aumento per omessa PEC resta applicabile nel processo tributario e amministrativo.
      </p>

      {/* Processo Tributario */}
      <SectionTitle id="tributario" icon={FileText} title="Processo Tributario" subtitle="Art. 13, comma 6-quater, DPR 115/2002" />
      <SectionBanner image={TRIBUTARIO_IMG} alt="Processo Tributario" text="Scaglioni specifici per le controversie tributarie" />
      <p className="text-base leading-relaxed mb-4">
        A partire dal 2011 (<InlineNormLink text="D.L. 98/2011" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2011-07-06;98" />), anche il processo tributario è regolato dal contributo unificato, con scaglioni propri previsti dall'<InlineNormLink text="art. 13, c. 6-quater" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" />. Per le controversie di valore indeterminabile, il CU è pari a <strong className="font-mono">€ 120,00</strong>.
      </p>
      <LegalTable
        headers={["Scaglione di valore", "Contributo Unificato"]}
        rows={scaglioniTributario.map((s) => [s.label, formatEur(s.importo)])}
      />
      <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115">
        Art. 261: "Per i ricorsi in cassazione in materia tributaria il contributo unificato si applica nella misura prevista per il processo civile." Pertanto, in Cassazione si applicano gli scaglioni del processo civile con raddoppio dell'importo.
      </NormativaQuote>

      {/* Processo Amministrativo */}
      <SectionTitle id="amministrativo" icon={Landmark} title="Processo Amministrativo" subtitle="Art. 13, comma 6-bis, DPR 115/2002" />
      <SectionBanner image={AMMINISTRATIVO_IMG} alt="Processo Amministrativo" text="Importi fissi e per scaglione nei ricorsi amministrativi" />
      <h3 className="text-xl text-[oklch(0.25_0.04_250)] mb-3 mt-4">Appalti pubblici e Autorità indipendenti</h3>
      <LegalTable
        headers={["Scaglione", "I Grado", "Impugnazione (+50%)", "Cassazione (x2)"]}
        rows={scaglioniAmministrativoAppalti.map((s) => [
          s.label,
          formatEur(s.importo),
          formatEur(s.importo * 1.5),
          formatEur(s.importo * 2),
        ])}
        className="mb-6"
      />
      <h3 className="text-xl text-[oklch(0.25_0.04_250)] mb-3">Altri procedimenti amministrativi (importo fisso)</h3>
      <LegalTable
        headers={["Procedimento", "Contributo Unificato"]}
        rows={[
          ["Ricorso al TAR e Consiglio di Stato", formatEur(650)],
          ["Ricorso straordinario al Presidente della Repubblica", formatEur(650)],
          ["Ricorso esecuzione/ottemperanza del giudicato", formatEur(300)],
          ["Riti abbreviati (Titolo V, Libro IV CPA)", formatEur(1800)],
          ["Accesso atti e silenzio della PA (artt. 116-117 CPA)", formatEur(300)],
        ]}
      />

      {/* Procedimenti Esecutivi */}
      <SectionTitle id="esecutivi" icon={Shield} title="Procedimenti Esecutivi" subtitle="Art. 13, comma 2, DPR 115/2002" />
      <LegalTable
        headers={["Procedimento", "Contributo Unificato", "Note"]}
        rows={[
          ["Esecuzione immobiliare", formatEur(278), ""],
          ["Esecuzione mobiliare (valore < € 2.500)", formatEur(43), ""],
          ["Esecuzione mobiliare (valore ≥ € 2.500)", formatEur(139), ""],
          ["Esecuzione per consegna/rilascio/fare/non fare", formatEur(139), ""],
          ["Opposizione atti esecutivi", formatEur(168), ""],
          ["Opposizione all'esecuzione", "In base al valore", "CU secondo scaglioni civili"],
          ["Ricerca telematica beni (pre-precetto)", formatEur(43), "No marca € 27"],
          ["Ricerca telematica beni (post-precetto)", "Esente", "Art. 13, c. 1-quinquies"],
          ["Pubblicità portale vendite pubbliche", formatEur(100), "Per ciascun lotto"],
          ["Esecuzione sentenze di lavoro", "Esente", "Circ. Min. 10/2012"],
        ]}
      />
      <p className="text-sm text-muted-foreground mt-3">
        Le opposizioni (atti esecutivi, esecuzione, terzo) proposte in un'esecuzione già iniziata non richiedono un ulteriore CU, essendo già stato versato (Circ. Min. Giustizia 38550/2015).
      </p>

      {/* Pignoramento presso Terzi */}
      <SectionTitle id="pignoramento" icon={FileText} title="Contributo Unificato Pignoramento presso Terzi" subtitle="Art. 13, comma 2, DPR 115/2002" />
      <p className="text-base leading-relaxed mb-4">
        Il <strong>contributo unificato per il pignoramento presso terzi</strong> (es. pignoramento dello stipendio o del conto corrente) segue le regole delle esecuzioni mobiliari. L'importo dipende dal valore del credito azionato.
      </p>
      <LegalTable
        headers={["Procedimento", "Contributo Unificato", "Note"]}
        rows={[
          ["Pignoramento presso terzi (valore < € 2.500)", formatEur(43), "Esecuzione mobiliare"],
          ["Pignoramento presso terzi (valore ≥ € 2.500)", formatEur(139), "Esecuzione mobiliare"],
          ["Ricerca telematica beni (pre-precetto)", formatEur(43), "No marca da € 27"],
          ["Ricerca telematica beni (post-precetto)", "Esente", "Art. 13, c. 1-quinquies"],
        ]}
        className="mb-4"
      />
      <AlertBox variant="info">
        <p><strong>Opposizione al pignoramento:</strong> le opposizioni proposte nell'ambito di un'esecuzione già iniziata non richiedono un ulteriore contributo unificato (Circ. Min. 38550/2015). L'opposizione all'esecuzione proposta prima dell'inizio dell'esecuzione richiede invece il CU secondo il valore della causa.</p>
        <p className="mt-2"><strong>Pubblicità sul Portale vendite pubbliche:</strong> <span className="font-mono">{formatEur(100)}</span> per ciascun lotto.</p>
      </AlertBox>

      {/* Famiglia */}
      <SectionTitle id="famiglia" icon={Users} title="Procedimenti in Materia di Famiglia" subtitle="Art. 13, c. 1, lett. a) e b), e art. 10, DPR 115/2002" />
      <p className="text-base leading-relaxed mb-4">
        In materia di famiglia, il CU è stabilito in misura fissa. La <InlineNormLink text="Riforma Cartabia" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" /> ha istituito un procedimento unitario (artt. 473-bis.47 e ss. c.p.c.) per la crisi familiare. La <a href="https://www.giustizia.it/giustizia/it/mg_1_8_1.page?contentId=SDC1453657" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Circolare del Ministero della Giustizia del 19 dicembre 2024</a> ha chiarito numerosi aspetti.
      </p>
      <LegalTable
        headers={["Procedimento", "CU", "Note"]}
        rows={[
          ["Separazione/divorzio giudiziale", formatEur(98), "No marca € 27"],
          ["Separazione consensuale/divorzio congiunto", formatEur(43), "No marca € 27"],
          ["Cumulo separazione + divorzio (congiunto)", "€ 43 + € 43", "Art. 473-bis.49 c.p.c."],
          ["Cumulo separazione + divorzio (contenzioso)", "€ 98 + € 98", "Art. 473-bis.49 c.p.c."],
          ["Modifica condizioni (contenzioso)", formatEur(98), "No marca € 27"],
          ["Modifica condizioni (congiunta)", formatEur(43), "No marca € 27"],
          ["Modifica condizioni solo prole", "Esente", "Circ. 19/12/2024"],
          ["Responsabilità genitoriale figli fuori matrimonio", "Esente", "Sì marca € 27"],
          ["Volontaria giurisdizione", formatEur(98), ""],
          ["Interdizione, inabilitazione, amm. sostegno", "Esente", "Art. 10, c. 3"],
        ]}
      />

      {/* Giudice di Pace */}
      <SectionTitle id="giudice-di-pace" icon={Building} title="Contributo Unificato Giudice di Pace" subtitle="Art. 13, c. 1 e art. 46 L. 374/1991" />
      <p className="text-base leading-relaxed mb-4">
        Il <strong>contributo unificato per il Giudice di Pace</strong> segue gli stessi scaglioni del processo civile. Tuttavia, per le cause di valore fino a <strong className="font-mono">€ 1.100,00</strong> sussiste l'<strong>esenzione totale</strong> dal pagamento del CU (art. 46 L. 374/1991).
      </p>
      <LegalTable
        headers={["Valore della causa", "CU Giudice di Pace", "Note"]}
        rows={[
          ["Fino a € 1.100,00", "Esente", "Art. 46 L. 374/1991"],
          ["Da € 1.100,01 a € 5.200,00", formatEur(43), "Scaglione ridotto (metà di € 98) per cause < competenza GdP"],
          ["Oltre € 5.200,00", "Secondo scaglioni civili", "Competenza GdP fino a € 5.000 (€ 20.000 per sinistri stradali)"],
        ]}
        className="mb-4"
      />
      <AlertBox variant="info">
        <p><strong>Competenza per valore:</strong> il Giudice di Pace è competente per le cause mobiliari di valore fino a <strong className="font-mono">€ 5.000,00</strong> e fino a <strong className="font-mono">€ 20.000,00</strong> per le cause di risarcimento danni da circolazione stradale (art. 7 c.p.c.).</p>
        <p className="mt-2"><strong>Anticipazione forfettaria:</strong> anche per le cause davanti al Giudice di Pace è dovuta la marca da <strong className="font-mono">€ 27,00</strong> (tranne nei casi di esenzione).</p>
      </AlertBox>

      {/* Procedimenti con Contributo Fisso */}
      <SectionTitle id="fissi" icon={FileText} title="Procedimenti con Contributo Fisso" subtitle="Riepilogo completo" />
      <LegalTable
        headers={["Procedimento", "Importo", "Nota", "Riferimento"]}
        rows={procedimentiFissi.map((p) => [p.procedimento, formatEur(p.importo), p.nota, p.riferimento])}
      />

      {/* Esenzioni */}
      <SectionTitle id="esenzioni" icon={Shield} title="Procedimenti Esenti" subtitle="Art. 10, DPR 115/2002" />
      <p className="text-base leading-relaxed mb-4">
        Alcune materie non soggiacciono al pagamento del contributo unificato. Nei procedimenti esenti, il CU non è dovuto.
      </p>
      <LegalTable
        headers={["Procedimento", "Riferimento Normativo"]}
        rows={procedimentiEsenti.map((p) => [p.procedimento, p.riferimento])}
      />

      {/* Sanzioni */}
      <SectionTitle id="sanzioni" icon={AlertTriangle} title="Sanzioni e Conseguenze" subtitle="Artt. 14, 16, 248, DPR 115/2002" />
      <div className="space-y-4">
        <AlertBox variant="warning" title="Omesso o insufficiente pagamento">
          <p className="leading-relaxed">
            Dal 2025 (<InlineNormLink text="L. 207/2024" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2024;207~art1!vig=" />), la causa civile <strong>non può essere iscritta a ruolo</strong> se non è versato almeno l'importo minimo di € 43,00 (o il minor contributo dovuto). In caso di versamento parziale, si procede all'immediata iscrizione a ruolo del debito con interessi al saggio legale e irrogazione di sanzione, <strong>senza previo invito al pagamento</strong> (<InlineNormLink text="art. 248, c. 3-bis, DPR 115/2002" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" />).
          </p>
        </AlertBox>
        <AlertBox variant="info" title={'Impugnazione respinta (c.d. "doppio contributo")'}>
          <p className="leading-relaxed">
            Quando l'impugnazione è respinta integralmente, dichiarata inammissibile o improcedibile, la parte è tenuta a versare un <strong>ulteriore importo</strong> pari al CU dovuto per l'impugnazione stessa (art. 13, c. 1-quater). Il giudice ne dà atto nel provvedimento. La Cassazione (SS.UU. 20621/2023) ha chiarito che ha natura di <strong>tributo giudiziario</strong>, non di sanzione.
          </p>
        </AlertBox>
        <AlertBox variant="info" title="Omessa dichiarazione di valore">
          <p className="leading-relaxed">
            La mancata dichiarazione di valore comporta il pagamento del CU nella <strong>misura massima</strong>, pari a € 1.686,00 (scaglione oltre € 520.000) per il primo grado (art. 13, c. 6).
          </p>
        </AlertBox>
      </div>

      {/* Pagamento */}
      <SectionTitle id="pagamento" icon={CreditCard} title="Modalità di Pagamento" subtitle="Art. 192, DPR 115/2002" />
      <p className="text-base leading-relaxed mb-4">
        Dal 1° giugno 2023, il pagamento del contributo unificato deve avvenire esclusivamente tramite la piattaforma telematica <strong>PagoPA</strong> (<InlineNormLink text="art. 192 DPR 115/2002" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" />). Il pagamento non effettuato tramite PagoPA non libera la parte dagli obblighi. Vedi anche la <a href="https://www.giustizia.it/giustizia/it/mg_1_8_1.page?contentId=SDC464940" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Circolare Min. Giustizia 19/3/2024</a> per ulteriori chiarimenti.
      </p>
      <div className="mb-4">
        <FeatureGrid items={[
          { title: "Sportello fisico", desc: "Pagamento con contante presso sportelli abilitati" },
          { title: "ATM", desc: "Tramite sportelli automatici bancari" },
          { title: "Home-banking", desc: "Applicazioni di internet banking" },
          { title: "App IO", desc: "Tramite l'applicazione IO della PA" },
          { title: "PagoPA.gov.it", desc: "Servizio \"paga\" sul portale ufficiale" },
          { title: "Bonifico (emergenza)", desc: "Solo se PagoPA non funziona (art. 192, c. 1-sexies)" },
        ]} />
      </div>
      <p className="text-sm text-muted-foreground">
        L'avvocato deve allegare la ricevuta di pagamento in sede di deposito dell'atto. La verifica spetta al funzionario che riceve l'atto (art. 15 DPR 115/2002).
      </p>

      {/* Rimborso */}
      <SectionTitle id="rimborso" icon={RotateCcw} title="Rimborso del Contributo Unificato" subtitle="Circ. MEF n. 33/2007 e Circ. Min. Giustizia 9/2/2021" />
      <p className="text-base leading-relaxed mb-4">
        È possibile richiedere il rimborso del CU versato in misura superiore al dovuto o per un procedimento esente. L'istanza deve essere presentata entro <strong>2 anni</strong> dal versamento, presso l'ufficio giudiziario competente. Il rimborso è erogato dall'Agenzia delle Entrate.
      </p>
      <div className="mb-4">
        <BulletList items={[
          "Versamento eccedente lo scaglione di riferimento",
          "Duplicazione di versamenti",
          "Versamento per procedimento esente",
          "Versamento senza successiva iscrizione a ruolo",
        ]} />
      </div>
      <p className="text-sm text-muted-foreground">
        Il diritto alla riscossione del CU è soggetto a <strong>prescrizione decennale</strong> ordinaria (art. 2946 c.c.). L'invito al pagamento interrompe la prescrizione.
      </p>

      {/* Novità 2025 */}
      <SectionTitle id="novita-2025" icon={Sparkles} title="Novità della Legge di Bilancio 2025" subtitle="L. 207/2024" />
      <div className="space-y-4">
        <AlertBox variant="success" title="1. Obbligo di versamento minimo per l'iscrizione a ruolo">
          <p className="leading-relaxed">
            Il nuovo art. 14, c. 3.1, DPR 115/2002 stabilisce che, nei procedimenti civili, la causa <strong>non può essere iscritta a ruolo</strong> se non è versato almeno l'importo di <strong className="font-mono">€ 43,00</strong> (o il minor contributo dovuto per legge), fatti salvi i casi di esenzione.
          </p>
        </AlertBox>
        <AlertBox variant="success" title="2. Recupero immediato senza invito">
          <p className="leading-relaxed">
            Il nuovo art. 248, c. 3-bis, prevede che in caso di parziale omissione del pagamento, si proceda all'<strong>immediata iscrizione a ruolo del debito</strong> con interessi e sanzioni, senza il previo invito al pagamento da parte della cancelleria.
          </p>
        </AlertBox>
        <AlertBox variant="success" title="3. Gratuito patrocinio e iscrizione a ruolo">
          <p className="leading-relaxed">
            La <a href="https://www.giustizia.it/giustizia/it/mg_1_8_1.page?contentId=SDC1454004" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Circ. Min. Giustizia 24/4/2025</a> ha chiarito che l'ufficio giudiziario deve procedere all'iscrizione a ruolo anche in presenza della <strong>sola istanza di ammissione al patrocinio</strong> purché regolarmente depositata e protocollata, a tutela del diritto di accesso alla difesa (art. 24 Cost.).
          </p>
        </AlertBox>
      </div>

      {/* FAQ */}
      <SectionTitle id="faq" icon={HelpCircle} title="Domande Frequenti (FAQ)" subtitle="Le risposte ai dubbi più comuni sul contributo unificato" />
      <FAQ items={faqData} />

      {/* Normativa */}
      <SectionTitle id="normativa" icon={BookOpen} title="Normativa di Riferimento" />
      <NormativaRefTable items={normativaRiferimento} />

      <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-8 mb-4 flex items-center gap-2">
        <Link2 className="w-5 h-5 text-[oklch(0.75_0.10_85)]" /> Circolari Ministeriali
      </h3>
      <CircolariTable items={circolariMinisteriali} />
    </ToolLayout>
  );
}

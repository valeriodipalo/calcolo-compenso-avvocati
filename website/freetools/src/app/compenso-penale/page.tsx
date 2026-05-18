import {
  Gavel,
  BookOpen,
  HelpCircle,
  Layers,
  Table as TableIcon,
  Sigma,
  ArrowUpDown,
  Shield,
  Receipt,
  UserCheck,
  Workflow,
  Lock,
  Scale,
  AlertTriangle,
  Sparkles,
  ListChecks,
  ScrollText,
} from "lucide-react";
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
import Calcolatore from "@/components/compenso-penale/Calcolatore";
import {
  sections,
  normativaRiferimento,
  circolariMinisteriali,
  COMPETENZE_PENALI,
  DEFINIZIONI_FASI,
  ERRORI_COMUNI,
} from "@/data/compenso-penale/compensoPenaleData";
import { faqData } from "@/data/compenso-penale/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Parcella Avvocato Penale 2026 | Calcolo D.M. 147/2022",
  description:
    "Calcola la parcella dell'avvocato penalista: Tabella 15 D.M. 147/2022, 14 competenze, 4 fasi, aumenti, gratuito patrocinio (−1/3), CPA, IVA, ritenuta.",
  alternates: {
    canonical: "/compenso-penale",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/compenso-penale",
    title: "Parcella Avvocato Penale 2026 | Calcolo D.M. 147/2022",
    description:
      "Calcola la parcella dell'avvocato penalista: Tabella 15 D.M. 147/2022, 14 competenze, 4 fasi, aumenti, gratuito patrocinio (−1/3), CPA, IVA, ritenuta.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo Parcella Avvocato Penale 2026 — Tabella 15 D.M. 147/2022",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parcella Avvocato Penale 2026 | D.M. 147/2022",
    description:
      "Calcolatore parcella penale aggiornato: 14 competenze, 4 fasi, aumenti, gratuito patrocinio −1/3, CPA, IVA, ritenuta.",
  },
};

const toolConfig: ToolConfig = {
  slug: "compenso-penale",
  title: "Calcolo Parcella Avvocato Penale 2026",
  shortTitle: "Compenso Penale",
  icon: Gavel,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroImageAlt:
    "Calcolo Parcella Avvocato Penale 2026 — Tabella 15 D.M. 147/2022",
  heroEyebrow: "Calcolatore e guida completa ai parametri forensi penali",
  heroTitle: "Calcolo Parcella Avvocato Penale",
  heroDescription:
    "Calcola la parcella dell'avvocato penalista con i parametri D.M. 55/2014 aggiornati dal D.M. 147/2022. Tabella 15 completa con 14 competenze (Giudice di Pace, GIP/GUP, Tribunale Monocratico, Collegiale, Cassazione e altre), 4 fasi del procedimento, aumenti per pluralità imputati, riduzione 1/3 gratuito patrocinio penale, spese generali 15%, CPA 4%, IVA 22% e ritenuta 20%.",
  heroReference: "D.M. 10 marzo 2014 n. 55 — D.M. 13 agosto 2022 n. 147 — Tabella 15",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Tabella 15 aggiornata al D.M. 147/2022 (vigente dal 23 ottobre 2022). Per prestazioni esaurite prima si applica il D.M. 55/2014 originario.",
  ],
  sources: [
    {
      label: "D.M. 55/2014 (Normattiva)",
      url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55",
    },
    {
      label: "D.M. 147/2022 (Gazzetta Ufficiale)",
      url: "https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG",
    },
    {
      label: "L. 247/2012 — Ordinamento forense",
      url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247",
    },
    {
      label: "DPR 115/2002 — T.U. spese di giustizia",
      url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115",
    },
    {
      label: "Consiglio Nazionale Forense — Parametri",
      url: "https://www.consiglionazionaleforense.it/parametri",
    },
  ],
};

// ──────────────────────────────────────────────────────────────
// Tabelle helper
// ──────────────────────────────────────────────────────────────

const tabellaCompetenzeRows = COMPETENZE_PENALI.map((c) => [
  c.nome,
  c.totaleMin,
  c.totaleMedio,
  c.totaleMax,
]);

const fmtEur = (n: number | null) =>
  n == null ? "—" : `€ ${n.toLocaleString("it-IT", { minimumFractionDigits: 0 })}`;

export default function CompensoPenalePage() {
  return (
    <ToolLayout config={toolConfig}>
      <JsonLd
        data={articleSchema({
          headline:
            "Calcolo Parcella Avvocato Penale 2026 — Parametri D.M. 147/2022",
          description:
            "Guida completa al calcolo della parcella dell'avvocato penalista. Tabella 15 D.M. 147/2022, 14 competenze, 4 fasi del procedimento, aumenti per pluralità imputati, gratuito patrocinio penale (-1/3 art. 106-bis DPR 115/2002), spese generali, CPA, IVA, ritenuta. Orientamenti Cassazione 29925/2025.",
          path: "/compenso-penale",
          datePublished: "2026-05-18",
          dateModified: "2026-05-18",
          image: HERO_IMG,
          sections: sections.map((s) => s.label),
          keywords:
            "parcella avvocato penale, compenso avvocato penale, parametri forensi penale, D.M. 147/2022, Tabella 15, calcolo parcella penale, gratuito patrocinio penale, art. 106-bis DPR 115/2002",
        })}
      />
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Parcella Avvocato Penale",
          description:
            "Calcolatore online della parcella dell'avvocato penalista. 14 competenze penali (Giudice di Pace, GIP/GUP, Tribunale, Cassazione), 4 fasi del procedimento (Studio, Introduttiva, Istruttoria, Decisionale), aumenti pluralità imputati, valutazione soggettiva ±50%, gratuito patrocinio -1/3, spese generali, CPA, IVA, ritenuta.",
          path: "/compenso-penale",
          applicationCategory: "LegalService",
          featureList: [
            "Tabella 15 D.M. 147/2022 (vigente dal 23/10/2022)",
            "14 competenze penali (da Giudice di Pace a Cassazione)",
            "4 fasi del procedimento (art. 12 c. 3 D.M. 55/2014)",
            "Valori minimo, medio e massimo per fase",
            "Aumento per pluralità imputati (art. 8: +20% per parte oltre la prima)",
            "Valutazione soggettiva ±50% (art. 12 c. 1)",
            "Aumento atti telematici navigabili +30% (art. 4 c. 1-bis)",
            "Riduzione gratuito patrocinio penale -1/3 (art. 106-bis DPR 115/2002)",
            "Riduzione inammissibilità -50% (art. 4 c. 9)",
            "Spese generali 15% (art. 2)",
            "Spese imponibili ed esenti distinte",
            "Accessori fiscali: CPA 4%, IVA 22%, ritenuta 20%",
          ],
        })}
      />

      {/* Calcolatore */}
      <Calcolatore />

      {/* Come si calcola */}
      <SectionTitle
        id="come-si-calcola"
        icon={Sigma}
        title="Come si calcola la parcella dell'avvocato penalista?"
        subtitle="Dalla somma delle 4 fasi al netto a pagare"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il compenso dell’avvocato in materia penale si determina sommando i valori
          previsti dalla Tabella 15 del{" "}
          <InlineNormLink
            text="D.M. 10 marzo 2014 n. 55"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />{" "}
          (come aggiornato dal{" "}
          <InlineNormLink
            text="D.M. 13 agosto 2022 n. 147"
            url="https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG"
          />
          ) per le quattro fasi del procedimento: Studio, Introduttiva,
          Istruttoria/Dibattimentale e Decisionale. Ciascuna fase ha un valore medio
          (il parametro) e un range tra minimo (−50%) e massimo (+50%). Sul totale
          si applicano aumenti per la pluralità di imputati (art. 8), per la valutazione
          soggettiva (art. 12 c. 1, fino a ±50%) e per gli atti telematici navigabili
          (art. 4 c. 1-bis, +30%); le riduzioni applicabili sono quelle per il gratuito
          patrocinio penale (−1/3 ex art. 106-bis DPR 115/2002) e per l’inammissibilità
          (−50%, art. 4 c. 9). Infine si aggiungono spese generali (15%), CPA (4%),
          IVA (22%) e si sottrae la ritenuta d’acconto (20%) se il cliente è sostituto
          d’imposta.
        </p>
        <div
          className="bg-[oklch(0.95_0.01_85)] border border-border p-4 font-mono text-sm leading-relaxed text-[oklch(0.30_0.03_250)]"
          style={{ borderRadius: "0.375rem" }}
        >
          Σ Valori fasi (Studio + Introduttiva + Istruttoria + Decisionale)
          <br />
          + Valutazione soggettiva (−50% / +50%)
          <br />
          + Aumento pluralità imputati (art. 8: +20% × N parti oltre la 1ª)
          <br />
          + Atti telematici navigabili (+30%)
          <br />
          − Gratuito patrocinio penale (−1/3 art. 106-bis DPR 115/2002)
          <br />
          − Inammissibilità (−50% art. 4 c. 9)
          <br />
          = <strong>Compenso finale</strong>
          <br />
          + Spese generali 15% (art. 2)
          <br />
          + Spese imponibili (trasferta art. 27, perizie)
          <br />
          = <strong>Imponibile fiscale</strong>
          <br />
          + CPA Cassa Forense 4% (art. 11 L. 141/1992)
          <br />
          = <strong>Imponibile IVA</strong>
          <br />
          + IVA 22% (DPR 633/1972)
          <br />
          + Spese esenti (anticipazioni in nome e per conto del cliente)
          <br />
          = <strong>Totale fattura</strong>
          <br />− Ritenuta d’acconto 20% (art. 25 DPR 600/1973)
          <br />= <strong>Netto a pagare</strong>
        </div>
        <AlertBox variant="info" title="Esempio rapido — Tribunale Monocratico medio">
          <p className="text-sm leading-relaxed">
            Difesa di un imputato davanti al Tribunale in composizione monocratica con
            tutte le 4 fasi al valore medio: Studio € 473 + Introduttiva € 567 +
            Istruttoria € 1.134 + Decisionale € 1.418 = <strong>€ 3.592</strong> di
            compenso base. Aggiungendo spese generali 15% (€ 538,80), CPA 4% (€ 165,23)
            e IVA 22% (€ 945,17) il totale fattura è di circa <strong>€ 5.241</strong>.
          </p>
        </AlertBox>
      </div>

      {/* Le 4 fasi */}
      <SectionTitle
        id="le-quattro-fasi"
        icon={Layers}
        title="Quali sono le 4 fasi del procedimento penale per il compenso?"
        subtitle="Definizione verbatim dell'art. 12 c. 3 D.M. 55/2014"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L’art. 12 comma 3 del D.M. 55/2014 individua quattro distinte fasi
          dell’attività difensiva penale, ciascuna remunerata autonomamente in base
          alla Tabella 15. La struttura per fasi è una novità introdotta dal D.M. 55/2014
          rispetto alle abrogate tariffe forensi del 2004, che invece prevedevano un
          sistema di onorari analitici per singolo atto. Il vantaggio del sistema per
          fasi è la semplificazione: invece di rendicontare ogni singolo atto, il
          difensore liquida quanto previsto dalla fascia parametrale per ogni fase
          effettivamente svolta.
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {DEFINIZIONI_FASI.map((d) => (
            <div
              key={d.fase}
              className="border border-border p-4 bg-white"
              style={{ borderRadius: "0.375rem" }}
            >
              <h4 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-2 font-serif">
                {d.nome}
              </h4>
              <p className="text-sm text-[oklch(0.40_0.02_250)] leading-relaxed mb-2">
                {d.descrizione}
              </p>
              <ul className="text-xs space-y-1 mt-2">
                {d.attivita.map((a, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-1.5 text-[oklch(0.45_0.05_250)]"
                  >
                    <span className="text-[oklch(0.75_0.10_85)] mt-0.5">•</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art12">
          Art. 12 c. 3 D.M. 55/2014 — Fase di Studio: «L’esame e studio degli atti, le
          ispezioni dei luoghi, la iniziale ricerca di documenti, le consultazioni con il
          cliente, i colleghi o i consulenti, le relazioni o i pareri, scritti o orali,
          che esauriscano l’attività e sono resi in momento antecedente alla fase
          introduttiva».
        </NormativaQuote>
        <AlertBox variant="info" title="Non più previsto il compenso orario per la fase esecutiva">
          <p className="text-sm leading-relaxed">
            A differenza dei parametri previgenti (D.M. 140/2012), il D.M. 55/2014 non
            prevede più una fase esecutiva autonomamente remunerata per il penale. Le
            attività di esecuzione penale (sorveglianza, ammissione a benefici,
            conversione pena, liberazione anticipata) si liquidano applicando le voci
            Tribunale di Sorveglianza o Magistrato di Sorveglianza della Tabella 15.
          </p>
        </AlertBox>
      </div>

      {/* Tabella 15 */}
      <SectionTitle
        id="tabella-15"
        icon={TableIcon}
        title="La Tabella 15 del D.M. 147/2022: quali sono i valori aggiornati?"
        subtitle="Parametri vigenti dal 23 ottobre 2022 (+50% sui valori 2014)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il D.M. 147/2022, in vigore dal 23 ottobre 2022 (
          <InlineNormLink
            text="GU n. 236 del 8/10/2022"
            url="https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG"
          />
          ), ha aggiornato tutti i parametri forensi con un incremento medio del 50%
          rispetto al D.M. 55/2014 originario, allineando i compensi al costo della vita
          accumulato dal 2014 al 2022. La Tabella 15 contiene i parametri per i giudizi
          penali, articolati per 14 competenze giudiziali distinte, ciascuna con i valori
          delle quattro fasi. Per ciascun valore medio si applica una variazione di
          −50% (minimo) o +50% (massimo) ai sensi dell’art. 12 c. 1.
        </p>
        <AlertBox variant="warning" title="Disciplina transitoria — Cass. 33482/2022">
          <p className="text-sm leading-relaxed">
            La Corte di Cassazione, con ord. n. 33482 del 14/11/2022, ha chiarito che i
            valori previgenti del D.M. 55/2014 si applicano alle prestazioni
            professionali esaurite prima del 23 ottobre 2022 (data di entrata in vigore
            del D.M. 147/2022). Per le attività concluse dopo si applicano i nuovi
            valori. Per prestazioni in corso a cavallo della data, la prassi prevalente
            applica i nuovi parametri se la fase si conclude dopo il 23/10/2022.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          La tabella seguente riassume per ciascuna competenza il totale di tutte le
          fasi previste (somma dei valori medi), con il range minimo-massimo. Nelle
          sezioni successive ogni competenza è dettagliata fase per fase. I valori sono
          al netto degli aumenti per pluralità di imputati, valutazione soggettiva o
          atti telematici, e prima delle eventuali riduzioni per gratuito patrocinio o
          inammissibilità.
        </p>
        <LegalTable
          headers={["Competenza", "Totale Minimo", "Totale Medio", "Totale Massimo"]}
          rows={tabellaCompetenzeRows}
        />
      </div>

      {/* Compensi per competenza */}
      <SectionTitle
        id="compensi-per-competenza"
        icon={Workflow}
        title="Quali sono i compensi per ciascuna competenza penale?"
        subtitle="Dettaglio fase per fase delle 14 competenze della Tabella 15"
      />
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Ogni competenza giudiziale ha valori parametrici differenti, calibrati sulla
          complessità tipica del procedimento. Per ciascuna delle 14 competenze, la
          Tabella 15 indica i valori medi delle 4 fasi del procedimento (Studio,
          Introduttiva, Istruttoria/Dibattimentale, Decisionale). Quando una fase non è
          prevista per la specifica competenza (es. Cassazione non ha fase istruttoria
          in sede di legittimità), la cella mostra «—».
        </p>
        <div className="space-y-4">
          {COMPETENZE_PENALI.map((c) => (
            <div
              key={c.id}
              className="border border-border p-5 bg-white"
              style={{ borderRadius: "0.375rem" }}
            >
              <h4 className="text-base font-semibold text-[oklch(0.25_0.04_250)] mb-1.5 font-serif">
                {c.nome}
              </h4>
              <p className="text-sm text-[oklch(0.40_0.02_250)] mb-3 leading-relaxed">
                {c.descrizione}
              </p>
              <LegalTable
                headers={["Fase", "Minimo", "Medio", "Massimo"]}
                rows={[
                  ["Studio", fmtEur(c.fasi.studio?.min ?? null), fmtEur(c.fasi.studio?.med ?? null), fmtEur(c.fasi.studio?.max ?? null)],
                  ["Introduttiva", fmtEur(c.fasi.introduttiva?.min ?? null), fmtEur(c.fasi.introduttiva?.med ?? null), fmtEur(c.fasi.introduttiva?.max ?? null)],
                  ["Istruttoria/Dibattim.", fmtEur(c.fasi.istruttoria?.min ?? null), fmtEur(c.fasi.istruttoria?.med ?? null), fmtEur(c.fasi.istruttoria?.max ?? null)],
                  ["Decisionale", fmtEur(c.fasi.decisionale?.min ?? null), fmtEur(c.fasi.decisionale?.med ?? null), fmtEur(c.fasi.decisionale?.max ?? null)],
                  ["TOTALE", fmtEur(c.totaleMin), fmtEur(c.totaleMedio), fmtEur(c.totaleMax)],
                ]}
              />
              {c.note && (
                <p className="text-xs text-muted-foreground mt-2 italic">
                  Nota: {c.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Aumenti e riduzioni */}
      <SectionTitle
        id="aumenti-riduzioni"
        icon={ArrowUpDown}
        title="Come funzionano aumenti e riduzioni del compenso penale?"
        subtitle="Articoli 4, 8 e 12 del D.M. 55/2014"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Sul compenso base derivante dalla somma delle fasi possono operare aumenti
          (quando il caso è particolarmente complesso o riguarda più imputati) e
          riduzioni (gratuito patrocinio, inammissibilità). La modifica del{" "}
          <InlineNormLink
            text="D.M. 37/2018"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2018-03-08;37"
          />{" "}
          ha sostituito l’espressione «di regola» con «in ogni caso» all’art. 12 c. 1,
          rendendo i limiti del ±50% inderogabili. La Cassazione (ord. n. 29925 del
          12/11/2025) ha confermato che il giudice non può scendere sotto il minimo
          tabellare neppure con valutazione discrezionale.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-4">
          Aumento per pluralità di imputati (art. 8)
        </h3>
        <p className="text-base leading-relaxed">
          L’
          <InlineNormLink
            text="art. 8 D.M. 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art8"
          />{" "}
          disciplina l’aumento del compenso quando la difesa coinvolge più imputati o
          parti. Il meccanismo è progressivo:
        </p>
        <BulletList
          items={[
            "Da 2 a 10 imputati: aumento del 20% del compenso base per ciascuna parte oltre la prima. Per 10 imputati l'aumento cumulativo raggiunge il +180%.",
            "Da 11 a 20 imputati: aumento ulteriore del 5% per ciascuna parte oltre le prime 10. Per 20 imputati l'aumento cumulativo è del +230%.",
            "La stessa regola si applica quando l'avvocato difende un solo soggetto contro più parti, se la prestazione comporta l'esame di situazioni di fatto e diritto distinte.",
            "L'aumento si calcola sul compenso base (somma delle 4 fasi), prima delle riduzioni per gratuito patrocinio.",
          ]}
        />

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-4">
          Valutazione soggettiva (art. 12 c. 1)
        </h3>
        <p className="text-base leading-relaxed">
          Il giudice (o il difensore in fase di parcella) può aumentare o diminuire il
          compenso medio entro il limite del ±50%, in base ai criteri elencati
          dall’art. 12 c. 1: caratteristiche, urgenza, pregio dell’attività, importanza,
          natura e complessità del procedimento, gravità e numero delle imputazioni,
          contrasti giurisprudenziali, rilevanza patrimoniale, esito ottenuto. La
          motivazione è obbligatoria nel decreto di liquidazione giudiziale.
        </p>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art12">
          Art. 12 c. 1 D.M. 55/2014: «Il giudice tiene conto dei valori medi di cui
          alle tabelle allegate che, in applicazione dei parametri generali, possono
          essere aumentati o diminuiti in ogni caso entro i limiti del 50 per cento»
          (testo modificato dal D.M. 37/2018).
        </NormativaQuote>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-4">
          Atti telematici navigabili (art. 4 c. 1-bis)
        </h3>
        <p className="text-base leading-relaxed">
          Il D.M. 147/2022 ha introdotto un ulteriore aumento del +30% applicabile
          quando l’atto è redatto con tecniche informatiche idonee ad agevolarne la
          consultazione (ricerca testuale, navigazione interna, indici cliccabili). La
          disposizione è prevista per il giudizio civile (art. 4 c. 1-bis), ma è
          ritenuta applicabile per analogia anche al penale per gli atti depositati
          nel SIDIP/Portale Difensori.
        </p>
      </div>

      {/* Gratuito patrocinio */}
      <SectionTitle
        id="gratuito-patrocinio"
        icon={Shield}
        title="Come si calcola il compenso con il gratuito patrocinio penale?"
        subtitle="La riduzione di 1/3 ex art. 106-bis DPR 115/2002 (non 1/2 come nel civile)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Una differenza spesso ignorata anche dai professionisti: nel processo penale
          la riduzione del compenso per il gratuito patrocinio è di <strong>un terzo
          (33,33%)</strong>, e non del 50% come nel civile. La regola è contenuta
          nell’
          <InlineNormLink
            text="art. 106-bis del DPR 115/2002"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115"
          />
          , introdotto dall’art. 1 c. 607 L. 234/2021 e coordinato con la riforma
          Cartabia (D.Lgs. 150/2022). Per i giudizi civili, amministrativi e tributari
          resta invece in vigore l’art. 130 DPR 115/2002 (−50%). Applicare il −50% nel
          penale produce una sottostima del compenso e una conseguente impugnazione.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-4">
          Limite di reddito 2026 per accedere al patrocinio
        </h3>
        <p className="text-base leading-relaxed">
          Il limite di reddito imponibile annuo per l’ammissione al patrocinio a spese
          dello Stato è fissato a <strong>€ 12.838,01</strong> dal{" "}
          <InlineNormLink
            text="D.M. Interno 8 gennaio 2024"
            url="https://www.gazzettaufficiale.it/eli/id/2024/02/07/24A00567/sg"
          />
          {" "}(GU n. 31 del 7/2/2024). Il limite è aumentato di € 1.032,91 per ciascun
          familiare convivente. Per i procedimenti penali rileva la posizione personale
          del solo richiedente quando si tratta di redditi prodotti separatamente dai
          familiari conviventi. L’aggiornamento del limite è biennale (
          <InlineNormLink
            text="art. 77 DPR 115/2002"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115~art77"
          />
          ) e segue la variazione ISTAT del costo della vita.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-4">
          Procedura di ammissione
        </h3>
        <BulletList
          items={[
            "Domanda al Consiglio dell'Ordine degli Avvocati del luogo del giudice procedente (art. 78 DPR 115/2002).",
            "Ammissione anticipata da parte del Consiglio dell'Ordine in caso di documentazione completa (art. 96 DPR 115/2002).",
            "Liquidazione del compenso da parte del giudice procedente alla fine del processo (art. 82-83 DPR 115/2002).",
            "Pagamento del compenso da parte dell'Erario (Ministero della Giustizia) entro 6 mesi dalla liquidazione.",
            "Compenso ridotto di 1/3 sul valore tabellare base (art. 106-bis); la riduzione si applica al solo compenso, non agli accessori CPA e IVA.",
          ]}
        />
        <AlertBox variant="warning" title="Civile vs Penale: la differenza nel gratuito patrocinio">
          <p className="text-sm leading-relaxed">
            <strong>Penale</strong>: riduzione <strong>−1/3</strong> ex art. 106-bis DPR
            115/2002. <strong>Civile, amministrativo, tributario</strong>: riduzione
            <strong> −1/2</strong> ex art. 130 DPR 115/2002. Molti professionisti
            applicano per errore il −50% anche nel penale, producendo una sottostima
            sistematica del compenso liquidabile dall’Erario.
          </p>
        </AlertBox>
      </div>

      {/* Spese e accessori */}
      <SectionTitle
        id="spese-accessori"
        icon={Receipt}
        title="Quali sono le spese e gli accessori da aggiungere alla parcella penale?"
        subtitle="Spese generali 15%, CPA 4%, IVA 22%, ritenuta 20%"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Al compenso base derivante dalla Tabella 15 si aggiungono diverse voci
          accessorie, con regimi fiscali distinti. La corretta gestione di queste voci è
          essenziale per evitare contestazioni e produce parcelle conformi alla normativa.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-4">
          Spese generali al 15% (art. 2)
        </h3>
        <p className="text-base leading-relaxed">
          Le spese generali forfettarie integrano automaticamente il compenso a copertura
          dei costi di studio non documentati. L’
          <InlineNormLink
            text="art. 2 c. 2 D.M. 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art2"
          />{" "}
          le fissa al <strong>15% del compenso</strong>, dovute anche se il compenso è
          pattuito convenzionalmente con il cliente. Si calcolano sul compenso al netto
          di aumenti e riduzioni, NON sull’imponibile fiscale, NON sulle spese di
          trasferta o esenti.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-4">
          Spese imponibili ed esenti
        </h3>
        <BulletList
          items={[
            "Spese imponibili (es. trasferta art. 27 D.M. 55/2014, perizie di parte, traduttori): concorrono all'imponibile IVA e CPA come il compenso.",
            "Spese esenti (anticipazioni in nome e per conto del cliente: marche da bollo, diritti, contributi unificati): esenti IVA ex art. 15 c. 1 n. 3 DPR 633/1972, non concorrono né all'imponibile né alla ritenuta.",
          ]}
        />

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-4">
          CPA Cassa Forense 4%
        </h3>
        <p className="text-base leading-relaxed">
          Il Contributo Cassa Forense è il contributo previdenziale obbligatorio
          versato alla Cassa Nazionale di Previdenza e Assistenza Forense, disciplinato
          dall’
          <InlineNormLink
            text="art. 11 L. 141/1992"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1992-02-11;141"
          />
          . È pari al <strong>4%</strong> dell’imponibile fiscale (compenso + spese
          generali + spese imponibili). Va addebitato in fattura al cliente, concorre
          alla base imponibile IVA ed è dovuto anche dagli avvocati in regime forfettario.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-4">
          IVA 22% e ritenuta d’acconto 20%
        </h3>
        <p className="text-base leading-relaxed">
          L’IVA al 22% si applica sull’imponibile IVA (compenso + spese generali +
          spese imponibili + CPA), salvo regime forfettario. La ritenuta d’acconto al
          20% (
          <InlineNormLink
            text="art. 25 DPR 600/1973"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600~art25"
          />
          ) si applica solo quando il cliente è sostituto d’imposta (società, ente
          pubblico, professionista, condominio) e si calcola su compenso + spese
          generali + spese imponibili (NON su CPA, NON su IVA, NON su spese esenti).
        </p>
        <AlertBox variant="info" title="Ordine di calcolo">
          <p className="text-sm leading-relaxed">
            L’ordine di applicazione è vincolante: prima CPA sull’imponibile fiscale,
            poi IVA sull’imponibile inclusivo di CPA. La ritenuta è invece l’ultima
            operazione, su una base ristretta (compenso + spese generali + spese
            imponibili). Invertire l’ordine produce un calcolo errato.
          </p>
        </AlertBox>
      </div>

      {/* Avvocato d'ufficio */}
      <SectionTitle
        id="avvocato-ufficio"
        icon={UserCheck}
        title="Come si paga l'avvocato d'ufficio nel processo penale?"
        subtitle="Differenza tra difensore di fiducia e difensore d'ufficio"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L’
          <InlineNormLink
            text="art. 97 c.p.p."
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1988-09-22;447~art97"
          />{" "}
          prevede che l’avvocato d’ufficio sia nominato dal giudice quando l’imputato
          non ha designato un difensore di fiducia. Il difensore d’ufficio è sempre
          obbligato a prestare assistenza: rifiutarsi senza giustificato motivo costituisce
          illecito disciplinare. Il compenso è dovuto direttamente dall’imputato.
        </p>
        <BulletList
          items={[
            "Difensore di fiducia + gratuito patrocinio: lo Stato paga il compenso ridotto di 1/3 (art. 106-bis DPR 115/2002). Il cliente sceglie l'avvocato dalle liste del Consiglio dell'Ordine.",
            "Difensore di fiducia + cliente paga: nessuna riduzione, si applica il compenso pattuito o quello tabellare.",
            "Difensore d'ufficio + cliente paga: il cliente è tenuto a pagare la parcella anche se non aveva scelto il difensore. Si applicano i parametri ordinari.",
            "Difensore d'ufficio + gratuito patrocinio: lo Stato paga il compenso ridotto di 1/3.",
            "Difensore d'ufficio + cliente non paga (insolvenza): l'avvocato può recuperare il credito presso l'Erario solo previa procedura ex art. 116 DPR 115/2002 (esecuzione infruttuosa).",
          ]}
        />
        <AlertBox variant="warning" title="L'avvocato d'ufficio si paga sempre, salvo gratuito patrocinio">
          <p className="text-sm leading-relaxed">
            Diversamente da quanto molti imputati credono, il difensore d’ufficio non è
            gratis. La gratuità si ottiene solo presentando domanda di ammissione al
            patrocinio a spese dello Stato e dimostrando il reddito sotto soglia. In caso
            contrario, l’imputato è tenuto a pagare la parcella secondo i parametri
            ordinari della Tabella 15.
          </p>
        </AlertBox>
      </div>

      {/* Riti speciali */}
      <SectionTitle
        id="riti-speciali"
        icon={Sparkles}
        title="Come si liquida il compenso nei riti speciali penali?"
        subtitle="Abbreviato, patteggiamento, decreto penale, messa alla prova"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          I riti speciali penali (giudizio abbreviato, patteggiamento, decreto penale di
          condanna, messa alla prova) hanno una articolazione più semplice rispetto al
          rito ordinario. La Tabella 15 D.M. 147/2022 non prevede valori distinti per i
          riti speciali: si applica la competenza del giudice procedente (tipicamente
          GIP/GUP o Tribunale Monocratico) con le fasi effettivamente svolte.
        </p>
        <BulletList
          items={[
            "Giudizio abbreviato (art. 438 c.p.p.): si applica la competenza del giudice procedente. Tipicamente attivate le fasi Studio + Introduttiva + Decisionale (la fase istruttoria è assorbita dalla discussione cartolare). Riduzione prassi del 20-30% sulla fase decisionale.",
            "Patteggiamento / applicazione pena su richiesta (art. 444 c.p.p.): stesso meccanismo del giudizio abbreviato. Spesso si attivano solo Studio + Introduttiva + Decisionale.",
            "Decreto penale di condanna (art. 459 c.p.p.): competenza GIP/GUP. Fasi tipicamente attivate: Studio + Decisionale (per l'opposizione, se proposta).",
            "Messa alla prova (art. 168-bis c.p.): competenza GIP/GUP con tutte e 4 le fasi (Studio per la valutazione, Introduttiva per la richiesta, Istruttoria per il programma di trattamento, Decisionale per l'esito).",
            "Giudizio direttissimo (art. 449 c.p.p.) e immediato (art. 453 c.p.p.): si applica la competenza del giudice procedente con le fasi effettive.",
          ]}
        />
      </div>

      {/* Convalida arresto */}
      <SectionTitle
        id="convalida-arresto"
        icon={Lock}
        title="Come si calcola il compenso per la convalida dell'arresto?"
        subtitle="CNF Parere n. 18 del 27 marzo 2025"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La Tabella 15 del D.M. 147/2022 non prevede una voce autonoma per la
          convalida dell’arresto o del fermo. Il Consiglio Nazionale Forense, con{" "}
          <strong>Parere n. 18 del 27 marzo 2025</strong>, ha chiarito che si applicano
          i parametri della voce «Indagini preliminari», collocando l’attività
          difensiva verso la fascia medio-alta dei valori tabellari, specie in presenza
          di reati gravi, complessità sulle questioni di legittimità dell’arresto o
          pluralità di imputati.
        </p>
        <p className="text-base leading-relaxed">
          Le fasi tipicamente attivate per la convalida dell’arresto sono:
        </p>
        <BulletList
          items={[
            "Fase di Studio (€ 425,50 - € 1.276,50): studio della posizione dell'arrestato, esame degli atti del PM, ricerca di precedenti.",
            "Fase Istruttoria (€ 520 - € 1.560): partecipazione all'udienza di convalida davanti al GIP, eventuali audizioni.",
            "Fase Decisionale (€ 614,50 - € 1.843,50): discussione orale, eventuali atti difensivi scritti (memorie, istanze di rigetto della richiesta di misura cautelare).",
          ]}
        />
        <AlertBox variant="info" title="Carattere d'urgenza">
          <p className="text-sm leading-relaxed">
            La convalida dell’arresto deve essere effettuata entro 48 ore dall’arresto
            (
            <InlineNormLink
              text="art. 391 c.p.p."
              url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1988-09-22;447~art391"
            />
            ). L’urgenza dell’attività difensiva, che spesso si svolge in tempi
            ristretti e in orario notturno o festivo, giustifica la collocazione verso
            la fascia alta dei valori parametrali (massimo o valutazione soggettiva
            positiva).
          </p>
        </AlertBox>
      </div>

      {/* Cassazione recente */}
      <SectionTitle
        id="cassazione-recente"
        icon={Scale}
        title="Quali sono gli orientamenti recenti della Cassazione sulla parcella penale?"
        subtitle="Inderogabilità dei minimi e disciplina transitoria del D.M. 147/2022"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Negli ultimi anni la Corte di Cassazione ha emanato pronunce di rilievo
          sull’applicazione dei parametri forensi penali. Due decisioni sono
          particolarmente importanti per la prassi professionale:
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-4">
          Cass. Civ. ord. n. 29925 del 12 novembre 2025 — Inderogabilità dei minimi
        </h3>
        <p className="text-base leading-relaxed">
          La Cassazione ha confermato che i valori minimi della Tabella 15 sono
          inderogabili: il giudice non può scendere sotto il minimo tabellare nemmeno
          con una valutazione discrezionale. La pronuncia riprende e consolida la
          modifica del D.M. 37/2018, che aveva sostituito l’espressione «di regola»
          con «in ogni caso» all’art. 12 c. 1 D.M. 55/2014.
        </p>
        <NormativaQuote url="https://www.misterlex.it/cassazione-civile/2025/29925/">
          Cass. Civ. ord. 29925/2025: «il sistema dei parametri non è mero strumento
          tecnico per la liquidazione giudiziale dei compensi, ma esprime una
          valutazione politico-legislativa circa il giusto compenso spettante
          all’avvocato, funzionale alla tutela del diritto di difesa».
        </NormativaQuote>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-4">
          Cass. Civ. ord. n. 33482 del 14 novembre 2022 — Tempus regit prestationem
        </h3>
        <p className="text-base leading-relaxed">
          La Cassazione ha stabilito il criterio del{" "}
          <em>tempus regit prestationem</em>: i parametri del D.M. 147/2022 si applicano
          alle prestazioni esaurite dopo il 23 ottobre 2022 (data di entrata in vigore).
          Per le attività concluse prima si applicano i parametri previgenti del D.M.
          55/2014. La prassi prevalente per le attività in corso a cavallo della data
          applica i nuovi parametri se la fase si conclude dopo il 23/10/2022.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-4">
          Corte Costituzionale n. 16/2025 — Compenso e diritto di difesa
        </h3>
        <p className="text-base leading-relaxed">
          La Corte Costituzionale, pronunciandosi sui compensi degli interpreti
          giudiziari, ha affermato un principio estensibile alla disciplina forense: la
          normativa relativa ai compensi professionali deve garantire un adeguato
          compenso all’attività svolta, assicurando nel contempo la tutela del diritto
          di difesa. Il principio rafforza la legittimità costituzionale
          dell’inderogabilità dei minimi tabellari.
        </p>
      </div>

      {/* Errori comuni */}
      <SectionTitle
        id="errori-comuni"
        icon={AlertTriangle}
        title="Quali sono i principali errori da evitare nella parcella penale?"
        subtitle="Otto trappole frequenti che producono contestazioni e impugnazioni"
      />
      <div className="space-y-3">
        {ERRORI_COMUNI.map((errore, idx) => (
          <AlertBox key={idx} variant="warning" title={errore.titolo}>
            <p className="text-sm leading-relaxed">{errore.descrizione}</p>
          </AlertBox>
        ))}
      </div>

      {/* Riforma 2026 */}
      <SectionTitle
        id="riforma-2026"
        icon={Sparkles}
        title="Riforma dell'ordinamento forense 2026: cosa cambierà per la parcella penale?"
        subtitle="DDL Delega approvato in via preliminare dal CdM il 4 settembre 2025"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il 4 settembre 2025 il Consiglio dei Ministri ha approvato in via preliminare
          lo schema di disegno di legge delega per la riforma dell’ordinamento forense.
          Il provvedimento è attualmente in fase di esame parlamentare e dovrebbe
          entrare in vigore entro il 2026. Le novità principali per la parcella penale
          sono:
        </p>
        <BulletList
          items={[
            "Aggiornamento biennale automatico dei parametri ministeriali: il Ministero della Giustizia dovrà aggiornare le tabelle ogni due anni in base all'inflazione, evitando aggiornamenti tardivi come quello del 2022 (8 anni dopo il D.M. 55/2014).",
            "Efficacia esecutiva al parere di congruità del Consiglio dell'Ordine: in caso di mancato pagamento, il parere di congruità rilasciato dall'Ordine costituirà titolo esecutivo, semplificando il recupero del credito.",
            "Rafforzamento dell'obbligo di trasparenza nella determinazione dei compensi: il preventivo scritto diventerà ancora più stringente, con sanzioni disciplinari più severe in caso di omissione.",
            "Equo compenso anche per clienti 'forti' (banche, assicurazioni, grandi imprese): si rafforza la presunzione di non equità del compenso pattuito sotto i minimi tabellari nei rapporti con clienti istituzionali.",
          ]}
        />
        <AlertBox variant="info" title="Implicazioni operative">
          <p className="text-sm leading-relaxed">
            Per gli avvocati penalisti, la riforma porterà a parcelle più certe e meno
            soggette a contestazioni in sede giudiziale. L’aggiornamento biennale
            allineerà progressivamente i valori al costo della vita, evitando
            l’erosione del potere d’acquisto come accaduto tra il 2014 e il 2022.
          </p>
        </AlertBox>
      </div>

      {/* Fonti */}
      <SectionTitle
        id="fonti"
        icon={ListChecks}
        title="Fonti e riferimenti istituzionali"
        subtitle="Documenti ufficiali utilizzati per la redazione di questa pagina"
      />
      <div className="space-y-3">
        <p className="text-base leading-relaxed">
          Le informazioni presenti in questa pagina sono state verificate sulle seguenti
          fonti istituzionali. Si raccomanda di consultare sempre il testo ufficiale
          aggiornato della normativa prima di applicarla a casi concreti:
        </p>
        <BulletList
          items={[
            "Normattiva.it — testo vigente del D.M. 55/2014 e del D.M. 147/2022 con coordinamenti.",
            "Gazzetta Ufficiale — pubblicazione originale dei decreti (D.M. 55/2014: GU n. 77 del 02/04/2014; D.M. 147/2022: GU n. 236 del 08/10/2022; D.M. Interno 8/1/2024: GU n. 31/2024).",
            "Ministero della Giustizia — Relazione illustrativa al D.M. 147/2022.",
            "Consiglio Nazionale Forense — Parere n. 18 del 27/3/2025 sulla convalida dell'arresto; sezione dedicata ai parametri con linee guida interpretative.",
            "Corte di Cassazione — ord. 29925/2025 (inderogabilità dei minimi); ord. 33482/2022 (disciplina transitoria del D.M. 147/2022).",
            "Corte Costituzionale — sentenza n. 16/2025 (compensi professionali e diritto di difesa).",
            "Cassa Forense — L. 141/1992 e regolamento applicativo del contributo integrativo (CPA 4%).",
            "Agenzia delle Entrate — circolari su trattamento fiscale dei compensi professionali (CPA, IVA, ritenuta).",
          ]}
        />
      </div>

      {/* FAQ */}
      <SectionTitle
        id="faq"
        icon={HelpCircle}
        title="Domande frequenti (FAQ)"
        subtitle="25 risposte sulla parcella avvocato penale, con fonti normative"
      />
      <FAQ items={faqData} />

      {/* Normativa */}
      <SectionTitle
        id="normativa"
        icon={ScrollText}
        title="Normativa di riferimento"
        subtitle="Decreti, leggi, circolari e pronunce di legittimità"
      />
      <div className="space-y-6">
        <NormativaRefTable items={normativaRiferimento} />
        <CircolariTable items={circolariMinisteriali} />
      </div>
    </ToolLayout>
  );
}

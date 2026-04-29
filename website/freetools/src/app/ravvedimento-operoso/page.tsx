import {
  Landmark,
  BookOpen,
  HelpCircle,
  Calculator,
  History,
  AlertTriangle,
  Sigma,
  ListChecks,
  Receipt,
  Percent,
  TrendingUp,
  ShieldAlert,
  GitMerge,
  FileText,
  CalendarX,
  ArrowRight,
  Link2,
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
import Calcolatore from "@/components/ravvedimento-operoso/Calcolatore";
import {
  sections,
  normativaRiferimento,
  circolariMinisteriali,
  TASSI_INTERESSE_LEGALE,
  SANZIONI_REGIME_NUOVO,
  SANZIONI_REGIME_PREVIGENTE,
  SPRINT_GIORNALIERO,
  CODICI_TRIBUTO_RAVVEDIMENTO,
  ESEMPI_RAVVEDIMENTO,
  ERRORI_COMUNI,
} from "@/data/ravvedimento-operoso/ravvedimentoOperosoData";
import { faqData } from "@/data/ravvedimento-operoso/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Calcolo Ravvedimento Operoso 2026 | Sanzioni e Interessi F24",
  description:
    "Calcolatore ravvedimento operoso 2026: sanzioni D.Lgs. 87/2024 (25%/12,5%), tasso legale 1,60%, codici tributo F24 per IRPEF, IVA, IMU, ritenute.",
  alternates: {
    canonical: "/ravvedimento-operoso",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/ravvedimento-operoso",
    title: "Calcolo Ravvedimento Operoso 2026 | Sanzioni e Interessi F24",
    description:
      "Calcolatore ravvedimento operoso 2026: sanzioni D.Lgs. 87/2024 (25%/12,5%), tasso legale 1,60%, codici tributo F24 per IRPEF, IVA, IMU, ritenute.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo Ravvedimento Operoso 2026 — Calcolatore sanzioni e interessi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Ravvedimento Operoso 2026 | Sanzioni e F24",
    description:
      "Calcolatore ravvedimento operoso aggiornato: sanzioni 25%/12,5%, tasso legale 1,60%, codici tributo F24 per IRPEF, IVA, IMU, ritenute.",
  },
};

const toolConfig: ToolConfig = {
  slug: "ravvedimento-operoso",
  title: "Calcolo Ravvedimento Operoso 2026",
  shortTitle: "Ravvedimento Operoso",
  icon: Landmark,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroImageAlt:
    "Calcolo Ravvedimento Operoso 2026 — sanzioni ridotte e tasso legale 1,60%",
  heroEyebrow: "Calcolatore multi-imposta e guida completa",
  heroTitle: "Calcolo Ravvedimento Operoso 2026",
  heroDescription:
    "Calcola sanzioni e interessi del ravvedimento operoso aggiornato al 2026. Riforma D.Lgs. 87/2024 (sanzioni 25% / 12,5%), tasso legale 1,60%, codici tributo F24 per IRPEF, IVA, IRES, IMU, ritenute, cedolare e regime forfettario.",
  heroReference:
    "Art. 13 D.Lgs. 472/1997 — D.Lgs. 87/2024 — D.M. 10 dicembre 2025",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale né fiscale.",
    "Dati aggiornati alla normativa vigente al 2026 (D.Lgs. 87/2024, D.M. 10 dicembre 2025). Per casi specifici consultare il proprio commercialista o un consulente fiscale abilitato.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    {
      label: "Agenzia delle Entrate",
      url: "https://www.agenziaentrate.gov.it",
    },
    {
      label: "Gazzetta Ufficiale",
      url: "https://www.gazzettaufficiale.it",
    },
    {
      label: "MEF — Dipartimento Finanze",
      url: "https://www.finanze.gov.it",
    },
  ],
};

export default function RavvedimentoOperosoPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ── JSON-LD: Article ── */}
      <JsonLd
        data={articleSchema({
          headline:
            "Calcolo Ravvedimento Operoso 2026: Guida Completa con Calcolatore Multi-Imposta",
          description:
            "Guida esaustiva al ravvedimento operoso aggiornata al 2026: art. 13 D.Lgs. 472/1997, riforma D.Lgs. 87/2024, sanzioni ridotte 25% / 12,5%, tasso legale 1,60%, codici tributo F24, esempi pratici per IRPEF, IVA, IRES, IMU, ritenute, cedolare secca e regime forfettario.",
          path: "/ravvedimento-operoso",
          datePublished: "2026-04-29",
          dateModified: "2026-04-29",
          image: HERO_IMG,
          wordCount: 6800,
          keywords:
            "ravvedimento operoso, calcolo ravvedimento operoso, sanzioni ridotte, art. 13 D.Lgs. 472/1997, D.Lgs. 87/2024, tasso interesse legale 1,60%, codici tributo F24, ravvedimento sprint, IRPEF, IVA, IMU, cumulo giuridico",
          sections: [
            "Calcolatore Ravvedimento Operoso",
            "Cos'è il Ravvedimento Operoso",
            "Evoluzione Storica dell'Istituto",
            "Come si Calcola il Ravvedimento",
            "Sanzioni 2026 (post D.Lgs. 87/2024)",
            "Sanzioni Regime Previgente",
            "Ravvedimento Sprint",
            "Tasso di Interesse Legale",
            "Tipi di Ravvedimento",
            "Ravvedimento per Imposta",
            "Codici Tributo F24",
            "Cause Ostative",
            "Cumulo Giuridico",
            "F24 a Saldo Zero non Presentato",
            "Dichiarazione Tardiva entro 90 Giorni",
            "Esempi Pratici di Calcolo",
            "Errori Comuni",
            "Altri Istituti Deflattivi",
            "Fonti e Riferimenti",
            "FAQ",
            "Normativa di Riferimento",
          ],
        })}
      />

      {/* ── JSON-LD: WebApplication ── */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Ravvedimento Operoso 2026",
          description:
            "Calcolatore online gratuito per il ravvedimento operoso 2026: auto-rilevamento del regime (pre/post 1 settembre 2024), calcolo sanzione ridotta, interessi pro-rata e codici tributo F24 per IRPEF, IVA, IRES, IMU, ritenute.",
          path: "/ravvedimento-operoso",
          applicationCategory: "FinanceApplication",
          featureList: [
            "Auto-rilevamento del regime sanzionatorio (pre/post 1° settembre 2024)",
            "Auto-rilevamento del tier (sprint, breve, intermedio, lungo, ultrannuale)",
            "Calcolo interessi pro-rata anno con tassi legali storici",
            "Supporto multi-imposta: IRPEF, IRES, IRAP, IVA, IMU, ritenute, cedolare, forfettario",
            "Suggerimento codici tributo F24 (imposta + sanzione + interessi)",
            "Prospetto F24 dettagliato con breakdown periodo per periodo",
          ],
        })}
      />

      {/* ═══════════════════════════════════════════════════════════
          CALCOLATORE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="calcolatore"
        icon={Calculator}
        title="Calcolatore Ravvedimento Operoso"
        subtitle="Sanzione, interessi e codici tributo F24 — auto-rilevamento del regime"
      />
      <Calcolatore />

      {/* ═══════════════════════════════════════════════════════════
          COS'È IL RAVVEDIMENTO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="cose-ravvedimento"
        icon={BookOpen}
        title="Cos'è il Ravvedimento Operoso"
        subtitle="Definizione, ratio e natura giuridica dell'istituto"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>ravvedimento operoso</strong> è l'istituto giuridico —
          disciplinato dall'
          <InlineNormLink
            text="art. 13 del D.Lgs. 18 dicembre 1997, n. 472"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13"
          />{" "}
          — che permette al contribuente di regolarizzare spontaneamente le
          proprie violazioni tributarie pagando il tributo dovuto, gli
          interessi al tasso legale e una sanzione ridotta. La regolarizzazione
          è valida solo se avviene <strong>prima</strong> che la violazione sia
          formalmente contestata mediante notifica di atti accertativi
          dall'Amministrazione finanziaria.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13">
          Art. 13, c. 1 D.Lgs. 472/1997: «La sanzione è ridotta, sempreché la
          violazione non sia stata già constatata e comunque non siano iniziati
          accessi, ispezioni, verifiche o altre attività amministrative di
          accertamento delle quali l'autore o i soggetti solidalmente obbligati
          abbiano avuto formale conoscenza».
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          La <strong>ratio</strong> dell'istituto è incentivare il{" "}
          <em>voluntary compliance</em> — l'adempimento spontaneo del
          contribuente — riducendo simultaneamente il contenzioso tributario, i
          costi amministrativi della riscossione e il rischio di sanzioni piene
          per il cittadino. Il ravvedimento operoso non è né un'amnistia né un
          condono: il contribuente paga integralmente l'imposta dovuta, paga gli
          interessi maturati sul ritardo e paga una sanzione, solo che
          quest'ultima è ridotta in modo progressivo in funzione della
          tempestività con cui interviene la regolarizzazione.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Natura giuridica e principio di volontarietà
        </h3>
        <p className="text-base leading-relaxed">
          Da un profilo di natura giuridica, il ravvedimento operoso non
          determina l'estinzione della violazione bensì la sua{" "}
          <strong>regolarizzazione</strong> mediante pagamento spontaneo. Il
          contribuente riconosce implicitamente l'illecito tributario commesso e
          procede al suo integrale adempimento finanziario, beneficiando della
          riduzione della componente sanzionatoria. La{" "}
          <strong>volontarietà</strong> è elemento imprescindibile: il
          contribuente non è obbligato a ravvedersi, ma se sceglie di farlo
          deve rispettare rigorosamente le modalità procedurali e temporali
          previste dalla norma, pena la perdita del beneficio.
        </p>

        <AlertBox variant="info">
          <p>
            Il ravvedimento è applicabile alla quasi totalità dei tributi
            erariali (IRPEF, IRES, IRAP, IVA, ritenute, registro, bollo) e ai
            tributi locali (IMU, TARI). NON si applica ai contributi
            previdenziali INPS, che hanno un regime sanzionatorio civile
            autonomo gestito direttamente dall'Istituto.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          EVOLUZIONE STORICA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="evoluzione-storica"
        icon={History}
        title="Evoluzione Storica del Ravvedimento Operoso"
        subtitle="Dalla Legge 408/1990 alla riforma D.Lgs. 87/2024"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'istituto del ravvedimento operoso ha attraversato quattro tappe
          legislative principali, ciascuna con un'impronta evolutiva precisa
          orientata progressivamente verso una maggiore flessibilità e una
          minore onerosità sanzionatoria a beneficio del contribuente.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          1990: la prima introduzione (Legge 408/1990, art. 14)
        </h3>
        <p className="text-base leading-relaxed">
          L'istituto fu introdotto originariamente dall'art. 14 della{" "}
          <strong>Legge 29 dicembre 1990, n. 408</strong>. In quella primissima
          formulazione, il ravvedimento costituiva una facoltà molto limitata,
          rivolta principalmente a incentivare il pagamento spontaneo di tributi
          non versati con sanzioni ridotte ad un decimo del minimo edittale.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          1997: la sistematizzazione (D.Lgs. 472/1997)
        </h3>
        <p className="text-base leading-relaxed">
          Il{" "}
          <InlineNormLink
            text="D.Lgs. 18 dicembre 1997, n. 472"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472"
          />
          , emanato in attuazione della delega contenuta nell'art. 3, comma 133
          della Legge 23 dicembre 1996, n. 662, definì organicamente l'istituto
          all'<strong>art. 13</strong>, stabilendo i presupposti fondamentali
          (assenza di constatazione formale e di verifiche già avviate) e gli
          scaglioni temporali di riduzione della sanzione (1/10 entro 30 giorni,
          1/8 entro l'anno).
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          2015: l'ampliamento (D.Lgs. 158/2015)
        </h3>
        <p className="text-base leading-relaxed">
          Con il{" "}
          <InlineNormLink
            text="D.Lgs. 24 settembre 2015, n. 158"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2015-09-24;158"
          />{" "}
          (e contemporaneamente con la Legge di Stabilità 2015, L. 190/2014),
          l'ambito temporale del ravvedimento si è ampliato da pochi mesi a{" "}
          <strong>due anni</strong> dalla violazione, e si è introdotta la{" "}
          <strong>riduzione del 50% della sanzione ordinaria</strong> (dal 30%
          al 15%) per i versamenti effettuati con ritardo non superiore a 90
          giorni. È stato inoltre introdotto il <strong>ravvedimento
          parziale</strong> ex art. 13-bis, che consente la regolarizzazione di
          una porzione dell'imposta dovuta.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          2024: il Decreto Sanzioni (D.Lgs. 87/2024)
        </h3>
        <p className="text-base leading-relaxed">
          Il{" "}
          <InlineNormLink
            text="D.Lgs. 14 giugno 2024, n. 87"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87"
          />{" "}
          (Decreto Sanzioni), in vigore dal 29 giugno 2024 e applicabile alle
          violazioni commesse a partire dal <strong>1° settembre 2024</strong>,
          ha riformato strutturalmente l'istituto. Le novità principali sono:
          (a) riduzione della sanzione ordinaria dal 30% al 25% e da 15% a 12,5%
          per ritardi entro 90 giorni; (b) sprint giornaliero dallo 0,1% allo
          0,0833%; (c) estensione del cumulo giuridico al ravvedimento; (d)
          ammissione del ravvedimento dopo lo schema d'atto del nuovo
          contraddittorio preventivo (art. 6-bis L. 212/2000) con riduzioni
          procedurali innovative (1/6, 1/5, 1/4).
        </p>

        <AlertBox variant="success">
          <p>
            <strong>Per le violazioni dal 1° settembre 2024</strong> si applica
            il regime D.Lgs. 87/2024 (sanzioni 25% / 12,5%); per le violazioni
            anteriori si applica il regime D.Lgs. 158/2015 (sanzioni 30% /
            15%). La data che conta è quella della <em>commissione della
            violazione</em>, ossia il giorno successivo alla scadenza
            dell'obbligo tributario.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          COME SI CALCOLA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="come-si-calcola"
        icon={Sigma}
        title="Come si Calcola il Ravvedimento Operoso"
        subtitle="Tre componenti: imposta, sanzione ridotta, interessi legali"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il calcolo del ravvedimento operoso si articola in{" "}
          <strong>tre componenti distinte</strong>, che il contribuente deve
          versare contestualmente tramite un unico modello F24, ciascuna con il
          proprio codice tributo specifico.
        </p>

        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            Totale F24 = Imposta + Sanzione ridotta + Interessi legali
            <br />
            <br />
            Sanzione ridotta = Imposta × Percentuale del tier (vedi tabelle sotto)
            <br />
            Interessi = Imposta × Tasso legale × Giorni / 36500
          </p>
        </div>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Determinazione del regime applicabile
        </h3>
        <p className="text-base leading-relaxed">
          Il primo passo è identificare il <strong>regime sanzionatorio
          applicabile</strong>, che dipende dalla data di scadenza
          dell'obbligo tributario (cioè dalla data della violazione):
        </p>
        <BulletList
          items={[
            "Scadenza dal 1° settembre 2024 in poi → regime nuovo (D.Lgs. 87/2024): sanzione base 25%, ridotta al 12,5% entro 90 giorni",
            "Scadenza fino al 31 agosto 2024 → regime previgente (D.Lgs. 158/2015): sanzione base 30%, ridotta al 15% entro 90 giorni",
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Determinazione del tier temporale
        </h3>
        <p className="text-base leading-relaxed">
          Calcolata la differenza in giorni tra la data di scadenza e la data
          del versamento, si individua il <strong>tier</strong> di riduzione:
          sprint (1-14 gg), breve (15-30 gg), intermedio (31-90 gg), lungo
          (91 gg → 1 anno o termine dichiarazione), ultrannuale (oltre 1 anno).
          A ciascun tier corrisponde una specifica frazione della sanzione
          ordinaria (1/10, 1/9, 1/8, 1/7).
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Calcolo degli interessi pro-rata anno
        </h3>
        <p className="text-base leading-relaxed">
          Gli interessi maturano al tasso legale vigente in ciascun anno.
          Quando il periodo di ritardo attraversa il 1° gennaio, occorre
          spezzare il calcolo in più sub-periodi: ad esempio, per un ritardo dal
          15 ottobre 2025 al 28 febbraio 2026, si applicano 78 giorni al tasso
          2025 (2,00%) e 58 giorni al tasso 2026 (1,60%). Il calcolatore in alto
          esegue automaticamente questo split.
        </p>

        <AlertBox variant="warning" title="Errore comune da evitare">
          <p>
            Le tre voci (imposta, sanzione, interessi){" "}
            <strong>devono essere mantenute separate</strong> nel modello F24,
            ognuna con il suo codice tributo specifico. Un versamento cumulativo
            su un unico codice rende il ravvedimento inefficace e l'Agenzia
            potrebbe non riconoscerlo.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SANZIONI 2026 (REGIME NUOVO)
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="sanzioni-2026"
        icon={Percent}
        title="Sanzioni Ravvedimento 2026 (Regime D.Lgs. 87/2024)"
        subtitle="Per violazioni commesse dal 1° settembre 2024 — sanzione base 25%"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Per le violazioni commesse <strong>a partire dal 1° settembre
          2024</strong> si applica il nuovo regime introdotto dal{" "}
          <InlineNormLink
            text="D.Lgs. 87/2024"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87"
          />
          . La sanzione ordinaria per omessi e tardivi versamenti è ridotta al{" "}
          <strong>25%</strong> (era 30%); la sanzione per ritardi entro 90
          giorni è ridotta al <strong>12,5%</strong> (era 15%); il ravvedimento
          sprint applica lo <strong>0,0833%</strong> per ogni giorno di ritardo
          (era 0,1%).
        </p>

        <LegalTable
          headers={[
            "Tier",
            "Giorni di ritardo",
            "Riduzione",
            "Sanzione ridotta",
            "Riferimento",
          ]}
          rows={SANZIONI_REGIME_NUOVO.map((s) => [
            s.label,
            s.giorniLabel,
            s.riduzione,
            s.sanzioneRidotta,
            s.riferimento,
          ])}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Riduzioni procedurali (post-PVC e post-schema d'atto)
        </h3>
        <p className="text-base leading-relaxed">
          Il D.Lgs. 87/2024 ha introdotto tre nuove fasce di riduzione
          procedurali, attivabili solo dopo specifici milestone del
          procedimento accertativo:
        </p>
        <LegalTable
          headers={["Situazione procedurale", "Riduzione", "Sanzione su base 25%"]}
          rows={[
            [
              "Dopo schema d'atto (no PVC, no istanza adesione)",
              "1/6 di 25%",
              "4,1667%",
            ],
            [
              "Dopo PVC (no schema d'atto, no adesione)",
              "1/5 di 25%",
              "5,0000%",
            ],
            [
              "Dopo schema d'atto preceduto da PVC (no istanza adesione)",
              "1/4 di 25%",
              "6,2500%",
            ],
          ]}
        />

        <AlertBox variant="info">
          <p>
            Una novità rilevante: <strong>la comunicazione dello schema d'atto
            ex art. 6-bis L. 212/2000 NON è più causa ostativa assoluta</strong>{" "}
            al ravvedimento. Il contribuente che riceve uno schema d'atto può
            ancora ravvedere, beneficiando della riduzione 1/6 (o 1/4 se è già
            stato emesso un PVC).
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SANZIONI REGIME PREVIGENTE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="sanzioni-previgenti"
        icon={History}
        title="Sanzioni Regime Previgente (fino al 31 agosto 2024)"
        subtitle="Ancora applicabile per violazioni anteriori"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Per le violazioni commesse <strong>fino al 31 agosto 2024</strong> si
          applica il regime previgente, disciplinato dal{" "}
          <InlineNormLink
            text="D.Lgs. 158/2015"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2015-09-24;158"
          />
          . La sanzione ordinaria è del <strong>30%</strong>, ridotta al{" "}
          <strong>15%</strong> per ritardi entro 90 giorni, e ulteriormente
          ridotta a 1/15 per giorno (= 0,1% al giorno) entro 14 giorni.
        </p>

        <LegalTable
          headers={[
            "Tier",
            "Giorni di ritardo",
            "Riduzione",
            "Sanzione ridotta",
            "Riferimento",
          ]}
          rows={SANZIONI_REGIME_PREVIGENTE.map((s) => [
            s.label,
            s.giorniLabel,
            s.riduzione,
            s.sanzioneRidotta,
            s.riferimento,
          ])}
        />

        <AlertBox variant="warning">
          <p>
            <strong>Attenzione al «lunghissimo» del regime previgente</strong>:
            nel regime D.Lgs. 158/2015, il tier «oltre dichiarazione successiva»
            applicava il 1/6 (= 5%). Nel regime nuovo D.Lgs. 87/2024 il tier
            temporale puro si ferma al 1/7 oltre 1 anno; il 1/6 e successivi
            richiedono milestone procedurali (schema d'atto). Molti calcolatori
            online ancora confondono le due discipline.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          RAVVEDIMENTO SPRINT
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="ravvedimento-sprint"
        icon={CalendarX}
        title="Ravvedimento Sprint"
        subtitle="Sanzione giornaliera per i primi 14 giorni di ritardo"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>ravvedimento sprint</strong> è la forma più favorevole di
          ravvedimento, applicabile entro i primi <strong>14 giorni</strong>{" "}
          dalla scadenza. La sanzione si calcola moltiplicando un coefficiente
          giornaliero per il numero di giorni effettivamente trascorsi:{" "}
          <strong>0,0833%/giorno</strong> per le violazioni dal 1° settembre
          2024, <strong>0,1%/giorno</strong> per le violazioni anteriori.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Tabella sanzione sprint giornaliera
        </h3>
        <LegalTable
          headers={[
            "Giorni di ritardo",
            "Sanzione (regime nuovo, post 1/9/2024)",
            "Sanzione (regime previgente)",
          ]}
          rows={SPRINT_GIORNALIERO.map((r) => [
            `${r.giorni}`,
            `${(r.nuovo * 100).toFixed(4)}%`,
            `${(r.previgente * 100).toFixed(2)}%`,
          ])}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          La logica matematica del coefficiente sprint
        </h3>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            Regime nuovo (post 1/9/2024):
            <br />
            12,5% (sanzione base ridotta 90gg) ÷ 15 = 0,8333% al giorno
            <br />
            0,8333% × 1/10 (riduzione ravvedimento) = 0,0833% al giorno
            <br />
            <br />
            Regime previgente (fino 31/8/2024):
            <br />
            15% ÷ 15 = 1% al giorno × 1/10 = 0,1% al giorno
          </p>
        </div>

        <AlertBox variant="success">
          <p>
            <strong>Esempio pratico:</strong> imposta dovuta 1.000 €, ritardo
            di 5 giorni nel regime nuovo. Sanzione = 1.000 × 0,0833% × 5 ={" "}
            <span className="font-mono">4,17 €</span>. Nel regime previgente
            sarebbe stata 5,00 € (0,1% × 5). Il risparmio sprint rispetto alla
            sanzione piena del 25% (250 €) è del 98%.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          TASSO INTERESSE LEGALE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="tasso-legale"
        icon={TrendingUp}
        title="Tasso di Interesse Legale (art. 1284 c.c.)"
        subtitle="Serie storica completa e formula di calcolo"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Gli interessi del ravvedimento operoso si calcolano al{" "}
          <strong>tasso legale vigente</strong>, determinato annualmente dal
          Ministro dell'Economia e delle Finanze ai sensi dell'
          <InlineNormLink
            text="art. 1284 del Codice Civile"
            url="https://www.brocardi.it/codice-civile/libro-quarto/titolo-i/capo-vii/sezione-i/art1284.html"
          />
          . Il decreto deve essere pubblicato in Gazzetta Ufficiale entro il 15
          dicembre dell'anno precedente, sulla base del rendimento medio annuo
          lordo dei titoli di Stato di durata non superiore a dodici mesi e
          tenendo conto dell'inflazione registrata.
        </p>

        <NormativaQuote url="https://www.brocardi.it/codice-civile/libro-quarto/titolo-i/capo-vii/sezione-i/art1284.html">
          Art. 1284 c.c.: «Il saggio degli interessi legali è determinato in
          misura pari al 5% in ragione d'anno. Il Ministro dell'economia e delle
          finanze, con proprio decreto pubblicato nella Gazzetta Ufficiale [...]
          può modificare annualmente la misura del saggio sulla base del
          rendimento medio annuo lordo dei titoli di Stato [...] e tenuto conto
          del tasso di inflazione registrato nell'anno».
        </NormativaQuote>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Tasso 2026: 1,60% (D.M. 10 dicembre 2025)
        </h3>
        <p className="text-base leading-relaxed">
          Per il 2026 il tasso è stato fissato all'<strong>1,60% annuo</strong>{" "}
          dal{" "}
          <a
            href="https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
          >
            D.M. 10 dicembre 2025
          </a>
          , pubblicato in Gazzetta Ufficiale n. 289 del 13 dicembre 2025. Si
          tratta di una riduzione di 40 punti base rispetto al 2,00% del 2025,
          riflesso del calo dei rendimenti dei titoli di Stato e della
          discesa dell'inflazione.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Serie storica del tasso legale
        </h3>
        <LegalTable
          headers={["Periodo di vigenza", "Tasso annuo", "Decreto MEF"]}
          rows={TASSI_INTERESSE_LEGALE.map((t) => [
            `dal 01.01.${t.anno}`,
            `${(t.tasso * 100).toFixed(2)}%`,
            t.decreto,
          ])}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Formula di calcolo degli interessi
        </h3>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            Interessi = Imposta × Tasso × Giorni / 36500
          </p>
        </div>
        <p className="text-base leading-relaxed">
          Il denominatore <strong>36500</strong> rappresenta i giorni dell'anno
          civile (365) moltiplicati per 100, e si utilizza anche negli anni
          bisestili. Gli interessi maturano dal giorno successivo alla scadenza
          fino al giorno dell'effettivo pagamento.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Calcolo pro-rata cross-year
        </h3>
        <p className="text-base leading-relaxed">
          Quando il ritardo attraversa il 1° gennaio, gli interessi vanno
          calcolati pro-rata per ciascun anno con il tasso vigente. Esempio:
          ritardo dal 15 ottobre 2025 al 28 febbraio 2026 (137 giorni totali
          su un debito di 5.000 €):
        </p>
        <LegalTable
          headers={["Periodo", "Giorni", "Tasso", "Calcolo", "Interessi"]}
          rows={[
            [
              "16/10/2025 → 31/12/2025",
              "77",
              "2,00%",
              "5.000 × 2% × 77 / 36500",
              "21,10 €",
            ],
            [
              "01/01/2026 → 28/02/2026",
              "59",
              "1,60%",
              "5.000 × 1,6% × 59 / 36500",
              "12,93 €",
            ],
            ["TOTALE", "136", "—", "—", "34,03 €"],
          ]}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          TIPI DI RAVVEDIMENTO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="tipi-ravvedimento"
        icon={ListChecks}
        title="Tipi di Ravvedimento Operoso"
        subtitle="Sprint, breve, intermedio, lungo, ultrannuale + procedurali"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il ravvedimento operoso si articola in <strong>cinque tier
          temporali</strong> più <strong>tre tier procedurali</strong>{" "}
          (introdotti dal D.Lgs. 87/2024). La nomenclatura — sprint, breve,
          intermedio, lungo, ultrannuale, lunghissimo — è di prassi e si
          riferisce alle frazioni di riduzione della sanzione previste dall'art.
          13, comma 1, del D.Lgs. 472/1997.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          1. Ravvedimento sprint (1-14 giorni)
        </h3>
        <p className="text-base leading-relaxed">
          La forma più favorevole: sanzione giornaliera dello{" "}
          <strong>0,0833%</strong> (regime nuovo) o <strong>0,1%</strong>{" "}
          (regime previgente) per ogni giorno di ritardo, fino a un massimo di
          14 giorni. È la scelta razionale per chi si accorge dell'omissione
          entro le prime due settimane.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          2. Ravvedimento breve (15-30 giorni)
        </h3>
        <p className="text-base leading-relaxed">
          Sanzione del <strong>1,25%</strong> (regime nuovo) o{" "}
          <strong>1,5%</strong> (regime previgente), pari a 1/10 della sanzione
          base ridotta. È la fascia tipica per chi si accorge dell'omissione
          entro il mese successivo.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          3. Ravvedimento intermedio (31-90 giorni)
        </h3>
        <p className="text-base leading-relaxed">
          Sanzione del <strong>1,3889%</strong> (regime nuovo) o{" "}
          <strong>1,67%</strong> (regime previgente), pari a 1/9 della sanzione
          base ridotta. La sanzione resta calcolata sulla base ridotta del 90
          giorni (12,5% o 15%), perché il ravvedimento avviene ancora entro la
          finestra dei 90 giorni.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          4. Ravvedimento lungo (91 giorni → 1 anno o termine dichiarazione)
        </h3>
        <p className="text-base leading-relaxed">
          Sanzione del <strong>3,125%</strong> (regime nuovo) o{" "}
          <strong>3,75%</strong> (regime previgente), pari a 1/8 della sanzione
          base piena (25% o 30%). Si applica oltre il limite dei 90 giorni e
          fino al termine di presentazione della dichiarazione relativa
          all'anno della violazione (per i tributi dichiarativi) oppure entro
          un anno dalla violazione (per gli altri tributi).
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          5. Ravvedimento ultrannuale (oltre 1 anno o oltre dichiarazione)
        </h3>
        <p className="text-base leading-relaxed">
          Sanzione del <strong>3,5714%</strong> (regime nuovo) o{" "}
          <strong>4,29%</strong> (regime previgente), pari a 1/7 della sanzione
          base piena. Nel regime nuovo D.Lgs. 87/2024 questo tier è stato{" "}
          <strong>unificato</strong>: il vecchio sistema previgente prevedeva
          una distinzione tra «entro la dichiarazione successiva» (1/7 = 4,29%)
          e «oltre la dichiarazione successiva» (1/6 = 5%); il nuovo sistema
          assorbe tutto in un unico tier 1/7 = 3,57%.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          6. Ravvedimento lunghissimo (regime previgente, oltre 2 anni)
        </h3>
        <p className="text-base leading-relaxed">
          Solo per il regime previgente: sanzione del <strong>5%</strong>, pari
          a 1/6 del 30%, applicabile alle violazioni commesse fino al 31 agosto
          2024 e ravvedute oltre il termine di presentazione della dichiarazione
          successiva. Nel regime nuovo questo tier non esiste come fascia
          puramente temporale.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          7-9. Tier procedurali (post-PVC, post-schema d'atto, schema+PVC)
        </h3>
        <p className="text-base leading-relaxed">
          Introdotti dal D.Lgs. 87/2024: <strong>1/5</strong> (post-PVC senza
          adesione, prima dello schema d'atto), <strong>1/6</strong> (post
          schema d'atto senza PVC, senza istanza adesione),{" "}
          <strong>1/4</strong> (post schema d'atto preceduto da PVC, senza
          istanza adesione). Si attivano quando il contribuente ravvede dopo
          specifici milestone del procedimento accertativo, prima ostativi al
          ravvedimento.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          RAVVEDIMENTO PER IMPOSTA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="ravvedimento-imposta"
        icon={Receipt}
        title="Ravvedimento per Tipo di Imposta"
        subtitle="Specificità per IRPEF, IVA, IRES, IMU, ritenute, cedolare, forfettario"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il ravvedimento operoso si applica a una vastissima gamma di tributi
          erariali e locali, con specificità nei codici tributo F24 e talora
          nelle modalità di calcolo. Di seguito le principali categorie.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          IRPEF, IRES, IRAP (imposte sui redditi)
        </h3>
        <p className="text-base leading-relaxed">
          Per IRPEF, IRES e IRAP il ravvedimento segue le regole generali. I
          codici tributo principali sono <strong>4001</strong> (IRPEF saldo),{" "}
          <strong>2003</strong> (IRES saldo), <strong>3800</strong> (IRAP
          saldo). I codici sanzione sono <strong>8901</strong> (IRPEF),{" "}
          <strong>8918</strong> (IRES), <strong>8907</strong> (IRAP). I codici
          interessi <strong>1989</strong> (IRPEF), <strong>1990</strong>{" "}
          (IRES), <strong>1993</strong> (IRAP). L'anno di riferimento nel
          modello F24 è quello dell'imposta, non del versamento.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          IVA — mensile, trimestrale, annuale
        </h3>
        <p className="text-base leading-relaxed">
          Per l'IVA i codici tributo variano per periodicità: <strong>6001-6012</strong>{" "}
          (IVA mensile, da gennaio a dicembre), <strong>6031-6034</strong>{" "}
          (IVA trimestrale, dal 1° al 4° trimestre),{" "}
          <strong>6099</strong> (IVA saldo annuale). I codici sanzione e
          interessi sono univoci: <strong>8904</strong> (sanzione IVA),{" "}
          <strong>1991</strong> (interessi IVA). Per i soggetti IVA trimestrali
          la maggiorazione dell'1% sulle somme da versare entra nella base del
          ravvedimento.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Ritenute alla fonte (lavoro dipendente e autonomo)
        </h3>
        <p className="text-base leading-relaxed">
          Per le ritenute trattenute dal sostituto d'imposta si usa il codice
          tributo <strong>1001</strong> (ritenute lavoro dipendente) o{" "}
          <strong>1040</strong> (ritenute lavoro autonomo, professionisti).
          Sanzione: <strong>8906</strong>; interessi: <strong>1982</strong>.
          Una particolarità importante: per le ritenute, gli interessi possono
          essere versati cumulativamente al tributo principale, indicando la
          distinta nel quadro ST del Modello 770.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          IMU — Imposta Municipale Unica
        </h3>
        <p className="text-base leading-relaxed">
          L'IMU si versa nella sezione <strong>IMU</strong> del modello F24
          (non Erario). Codici tributo IMU: <strong>3912</strong> (abitazione
          principale categoria A/1, A/8, A/9), <strong>3918</strong> (altri
          fabbricati), <strong>3916</strong> (aree fabbricabili),{" "}
          <strong>3914</strong> (terreni agricoli), <strong>3913</strong>{" "}
          (fabbricati rurali strumentali). Sanzione: <strong>3923</strong>;
          interessi: <strong>3924</strong>. Le percentuali e i tier sono gli
          stessi del ravvedimento erariale.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Cedolare secca e regime forfettario
        </h3>
        <p className="text-base leading-relaxed">
          La cedolare secca sulle locazioni utilizza i codici{" "}
          <strong>1840-1842</strong> per imposta, <strong>8913</strong> per
          sanzione, <strong>1992</strong> per interessi. L'imposta sostitutiva
          del regime forfettario usa <strong>1790-1792</strong> per imposta,{" "}
          <strong>8944</strong> per sanzione, <strong>1944</strong> per
          interessi.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          TARI e tributi locali
        </h3>
        <p className="text-base leading-relaxed">
          La TARI è gestita dai Comuni con regolamenti propri. Generalmente si
          applicano le regole generali dell'art. 13 D.Lgs. 472/1997, ma molti
          Comuni utilizzano formulari comunali specifici (non il modello F24
          standard). Verificare sempre presso lo sportello tributi del Comune
          competente o sul portale tributario locale.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Esclusione: contributi INPS Gestione Separata
        </h3>
        <p className="text-base leading-relaxed">
          I contributi previdenziali (Gestione Separata, IVS per autonomi,
          contributi minori) <strong>NON sono ravvedibili</strong> ex art. 13
          D.Lgs. 472/1997. L'INPS applica sanzioni civili autonome con
          maggiorazione interessi propri. Dal 1° settembre 2024 l'art. 19 del
          D.L. 19/2024 ha introdotto un meccanismo parallelo di «autodenuncia
          contributiva» con riduzione delle sanzioni civili, gestito dall'INPS.
        </p>

        <AlertBox variant="warning">
          <p>
            <strong>Per situazioni miste (imposte erariali + contributi
            INPS)</strong>, occorre regolarizzare le due categorie con due
            procedure separate: il ravvedimento operoso F24 per le imposte e
            l'autodenuncia INPS per i contributi.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CODICI TRIBUTO F24
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="codici-tributo"
        icon={FileText}
        title="Codici Tributo F24 per il Ravvedimento"
        subtitle="Tabella completa imposta + sanzione + interessi per ogni tributo"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Nel modello F24 il ravvedimento richiede sempre <strong>tre codici
          tributo distinti</strong>: uno per l'imposta, uno per la sanzione, uno
          per gli interessi. La tabella seguente raccoglie i codici principali
          per i tributi più comuni.
        </p>

        <LegalTable
          headers={[
            "Imposta",
            "Cod. imposta",
            "Cod. sanzione",
            "Cod. interessi",
            "Sezione F24",
          ]}
          rows={CODICI_TRIBUTO_RAVVEDIMENTO.map((c) => [
            c.imposta,
            c.codiceImposta,
            c.codiceSanzione,
            c.codiceInteressi,
            c.sezione,
          ])}
        />

        <AlertBox variant="info">
          <p>
            La lista è aggiornata al 2026 ma può subire integrazioni con
            risoluzioni dell'Agenzia delle Entrate. Per tributi non in tabella
            (es. addizionali regionali o comunali specifiche, imposta di
            successione, imposta di registro) consultare la{" "}
            <a
              href="https://www1.agenziaentrate.gov.it/servizi/codici/ricerca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
            >
              ricerca codici tributo dell'Agenzia delle Entrate
            </a>
            .
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CAUSE OSTATIVE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="cause-ostative"
        icon={ShieldAlert}
        title="Cause Ostative al Ravvedimento Operoso"
        subtitle="Quando il ravvedimento NON è ammesso (con eccezioni post-riforma)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<InlineNormLink
            text="art. 13, c. 1 D.Lgs. 472/1997"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13"
          />{" "}
          prevede che il ravvedimento non sia ammesso se la violazione è già
          stata constatata mediante <em>formale notifica</em> o se sono
          iniziati accessi, ispezioni o verifiche di cui il contribuente abbia
          avuto formale conoscenza. Le cause ostative principali sono le
          seguenti.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          1. Notifica di avviso bonario
        </h3>
        <p className="text-base leading-relaxed">
          La notifica di un avviso bonario ex{" "}
          <InlineNormLink
            text="art. 36-bis e 36-ter DPR 600/1973"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600"
          />{" "}
          (controllo automatizzato e formale delle dichiarazioni) o art. 54-bis
          DPR 633/1972 (avviso bonario IVA) preclude il ravvedimento per le
          violazioni rilevate. È una causa ostativa <strong>parziale</strong>:
          per violazioni diverse non comunicate il ravvedimento rimane
          possibile.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          2. Notifica di avviso di accertamento o liquidazione
        </h3>
        <p className="text-base leading-relaxed">
          La notifica di un avviso di accertamento (art. 42 DPR 600/1973) o
          di liquidazione preclude assolutamente il ravvedimento per la
          violazione contestata. Restano disponibili istituti diversi
          (acquiescenza, accertamento con adesione).
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          3. Notifica di avviso di recupero del credito d'imposta
        </h3>
        <p className="text-base leading-relaxed">
          Anche l'avviso di recupero credito d'imposta — utilizzato in caso di
          indebita compensazione — costituisce causa ostativa al ravvedimento
          per la specifica violazione contestata.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          4. PVC e schema d'atto: NON più ostativi (post D.Lgs. 87/2024)
        </h3>
        <p className="text-base leading-relaxed">
          Una novità rilevante della riforma 2024 è che la consegna di un{" "}
          <strong>PVC</strong> (processo verbale di constatazione ex art. 24 L.
          4/1929) e la <strong>comunicazione dello schema d'atto</strong> ex
          art. 6-bis L. 212/2000 NON sono più cause ostative assolute al
          ravvedimento. In tali casi è ammesso un ravvedimento «potenziato» con
          le riduzioni procedurali 1/5 (post-PVC), 1/6 (post-schema d'atto
          senza PVC) o 1/4 (post-schema d'atto preceduto da PVC). Resta però
          condizione necessaria che il contribuente non abbia presentato istanza
          di accertamento con adesione.
        </p>

        <AlertBox variant="info" title="Constatazione e «formale notifica»">
          <p>
            La <strong>Circolare 180/E del 10 luglio 1998</strong> dell'Agenzia
            delle Entrate — confermata dalla giurisprudenza di Cassazione (es.
            ord. 17521/2025) — chiarisce che la constatazione, per costituire
            causa ostativa, deve essere{" "}
            <strong>portata a conoscenza del contribuente mediante formale
            notifica</strong>. La sola redazione di documenti interni
            dell'Amministrazione (es. relata ispettiva non notificata) non
            preclude il ravvedimento.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CUMULO GIURIDICO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="cumulo-giuridico"
        icon={GitMerge}
        title="Cumulo Giuridico nel Ravvedimento Operoso"
        subtitle="Novità del D.Lgs. 87/2024: una sola sanzione ridotta per più violazioni"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Una delle innovazioni più rilevanti della riforma 2024 è
          l'estensione al ravvedimento del principio del{" "}
          <strong>cumulo giuridico delle sanzioni</strong>, fino ad allora
          riservato all'Amministrazione e ai meccanismi di adesione/acquiescenza.
          Disciplinato dall'
          <InlineNormLink
            text="art. 12 D.Lgs. 472/1997"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art12"
          />
          , il cumulo giuridico permette di applicare un'unica sanzione ridotta
          al posto della somma di più sanzioni quando il contribuente commette
          più violazioni nel medesimo periodo o per il medesimo tributo.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Modalità di applicazione
        </h3>
        <p className="text-base leading-relaxed">
          L'art. 13, comma 1-quater del D.Lgs. 472/1997, introdotto dal D.Lgs.
          87/2024, sancisce: «Se la sanzione da ravvedere è determinata in
          applicazione del principio del cumulo giuridico di cui all'articolo
          12 del presente decreto, la percentuale di riduzione è calcolata in
          relazione alla prima violazione». Operativamente, il contribuente
          identifica la violazione cronologicamente più antica e applica la
          frazione di riduzione corrispondente al ritardo dalla quella data.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Esclusioni
        </h3>
        <p className="text-base leading-relaxed">
          Il cumulo giuridico <strong>NON</strong> si applica:
        </p>
        <BulletList
          items={[
            "Alle violazioni di obblighi di pagamento (omessi/tardivi versamenti)",
            "Alle indebite compensazioni di crediti d'imposta inesistenti",
            "Per le quali resta operativo il cumulo materiale (somma delle sanzioni)",
          ]}
        />

        <AlertBox variant="info">
          <p>
            <strong>Ambito applicativo tipico</strong>: il cumulo giuridico nel
            ravvedimento si applica a errori dichiarativi che generano
            violazioni in più tributi (es. infedele dichiarazione IRPEF che
            comporta anche addizionale regionale e comunale errate). Per gli
            omessi versamenti continua ad applicarsi il cumulo materiale, cioè
            ogni violazione genera una sanzione separata.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          F24 SALDO ZERO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="f24-saldo-zero"
        icon={Receipt}
        title="F24 a Saldo Zero non Presentato"
        subtitle="Sanzione € 100 (€ 50 entro 5 giorni) e ravvedimento"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<InlineNormLink
            text="art. 15, c. 2-bis D.Lgs. 471/1997"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471~art15"
          />{" "}
          stabilisce una sanzione specifica per l'omessa presentazione del
          modello F24 con saldo pari a zero — situazione tipica di chi
          effettua una compensazione orizzontale tra credito e debito d'imposta.
          Anche con saldo zero, l'F24 deve essere presentato perché consente
          all'Agenzia delle Entrate di registrare la compensazione operata.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471~art15">
          Art. 15, c. 2-bis D.Lgs. 471/1997: «Per l'omessa presentazione del
          modello di versamento contenente i dati relativi alla eseguita
          compensazione, si applica la sanzione di euro 100, ridotta a euro 50
          se il ritardo non è superiore a cinque giorni lavorativi».
        </NormativaQuote>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Riduzioni in ravvedimento operoso
        </h3>
        <p className="text-base leading-relaxed">
          La sanzione fissa di € 100 (o € 50 se il ritardo è entro 5 giorni
          lavorativi) è ravvedibile secondo le ordinarie regole dell'art. 13
          D.Lgs. 472/1997. Esempio: se il contribuente omette l'F24 a zero ma
          lo presenta entro 90 giorni, la sanzione si riduce a 1/9 di € 100 =
          <strong> € 11,11</strong>.
        </p>

        <LegalTable
          headers={["Tier ravvedimento", "Riduzione", "Sanzione"]}
          rows={[
            ["Entro 5 giorni lavorativi", "Sanzione fissa ridotta", "€ 50,00"],
            ["Entro 30 giorni", "1/10 di € 100", "€ 10,00"],
            ["Entro 90 giorni", "1/9 di € 100", "€ 11,11"],
            [
              "Entro termine dichiarazione successiva",
              "1/8 di € 100",
              "€ 12,50",
            ],
            ["Oltre dichiarazione successiva", "1/7 di € 100", "€ 14,29"],
          ]}
        />

        <AlertBox variant="info">
          <p>
            La <strong>Risposta a Interpello n. 297 del 18 aprile 2023</strong>{" "}
            dell'Agenzia delle Entrate ha chiarito che la presentazione tardiva
            dell'F24 a saldo zero{" "}
            <strong>convalida retroattivamente la compensazione</strong>, a
            condizione che il credito utilizzato in compensazione sia ancora
            esistente e utilizzabile alla data di presentazione tardiva.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          DICHIARAZIONE TARDIVA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="dichiarazione-tardiva"
        icon={ScrollText}
        title="Dichiarazione Tardiva entro 90 Giorni"
        subtitle="Regime ravvedibile (1/10 del minimo) vs dichiarazione omessa"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'art. 13 D.Lgs. 472/1997 prevede una specifica fascia di
          ravvedimento per la <strong>dichiarazione tardiva</strong>, cioè
          presentata oltre la scadenza ordinaria ma <strong>entro 90 giorni
          dalla scadenza</strong>. La sanzione è <strong>1/10 del minimo
          edittale</strong>: per la dichiarazione dei redditi il minimo è € 250,
          ridotto in ravvedimento a <strong>€ 25</strong>.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Differenza tra dichiarazione «tardiva» e «omessa»
        </h3>
        <p className="text-base leading-relaxed">
          Dopo i 90 giorni dalla scadenza ordinaria, la dichiarazione
          «tardiva» diventa <strong>«omessa»</strong>. Le conseguenze cambiano
          radicalmente:
        </p>
        <LegalTable
          headers={[
            "Situazione",
            "Sanzione",
            "Ravvedibile?",
            "Riferimento",
          ]}
          rows={[
            [
              "Tardiva entro 90 gg",
              "1/10 del minimo (€ 25 su € 250)",
              "✅ SÌ",
              "Art. 13 D.Lgs. 472/97",
            ],
            [
              "Omessa con imposte dovute",
              "120% delle imposte (min. € 250)",
              "❌ NO (dichiarazione)",
              "Art. 1 D.Lgs. 471/97",
            ],
            [
              "Omessa entro termine accertamento",
              "75% delle imposte (min. € 250)",
              "❌ NO (dichiarazione)",
              "Art. 1-bis D.Lgs. 471/97",
            ],
            [
              "Omessa senza imposte dovute",
              "Da € 250 a € 1.000",
              "❌ NO",
              "Art. 1 D.Lgs. 471/97",
            ],
          ]}
        />

        <AlertBox variant="warning" title="Attenzione al doppio profilo">
          <p>
            Se la dichiarazione è omessa ma <strong>contiene anche imposte
            non versate</strong>, il ravvedimento rimane possibile per la
            componente di omesso versamento (con le sanzioni ordinarie del
            ravvedimento operoso, 25% / 12,5%), ma <strong>non per
            l'omissione dichiarativa</strong> (sanzione 120% non ravvedibile).
            Sono due profili distinti che vanno trattati separatamente.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ESEMPI PRATICI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="esempi-pratici"
        icon={Sigma}
        title="Esempi Pratici di Calcolo"
        subtitle="Quattro casi reali con calcoli passo-passo"
      />
      <div className="space-y-6">
        {ESEMPI_RAVVEDIMENTO.map((e, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
              {e.titolo}
            </h3>
            <p className="text-base leading-relaxed">{e.descrizione}</p>
            <LegalTable
              headers={["Voce", "Valore"]}
              rows={[
                ["Imposta dovuta", `${e.imposta.toLocaleString("it-IT")} €`],
                ["Data scadenza", e.scadenza],
                ["Data versamento", e.versamento],
                ["Giorni di ritardo", `${e.giorniRitardo}`],
                ["Regime applicabile", e.regime],
                ["Tier", e.tier],
                ["Formula sanzione", e.formula],
                ["Sanzione ridotta", `${e.sanzione.toFixed(2)} €`],
                ["Interessi legali", `${e.interessi.toFixed(2)} €`],
                ["Totale F24", `${e.totale.toFixed(2)} €`],
              ]}
            />
          </div>
        ))}

        <AlertBox variant="info">
          <p>
            Per replicare questi calcoli in modo automatico — incluso lo split
            cross-year degli interessi e l'identificazione automatica del
            regime — utilizza il calcolatore in alto. È sufficiente inserire
            tipo tributo, importo, data scadenza e data versamento.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ERRORI COMUNI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="errori-comuni"
        icon={AlertTriangle}
        title="Errori Comuni nel Ravvedimento Operoso"
        subtitle="Pitfall ricorrenti che possono invalidare il ravvedimento"
      />
      <div className="space-y-4">
        {ERRORI_COMUNI.map((e, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">
              Errore {idx + 1} — {e.titolo}
            </h3>
            <p className="text-base leading-relaxed">{e.descrizione}</p>
          </div>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ALTRI ISTITUTI DEFLATTIVI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="altri-istituti"
        icon={ArrowRight}
        title="Connessioni con Altri Istituti Deflattivi"
        subtitle="Definizione agevolata, accertamento con adesione, acquiescenza"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il ravvedimento operoso non opera in isolamento: è uno dei diversi
          istituti deflattivi del contenzioso tributario che il contribuente può
          utilizzare in funzione della fase del procedimento e della propria
          strategia.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Definizione agevolata di avvisi bonari
        </h3>
        <p className="text-base leading-relaxed">
          Quando il ravvedimento ordinario non è più disponibile — perché il
          contribuente ha già ricevuto un avviso bonario — la legge consente la
          <strong> definizione agevolata</strong> degli esiti del controllo
          automatizzato (sanzione ridotta a 1/3 del 30%, ossia 10%) o formale
          (1/3 del 20%, cioè circa 6,67%). Per i piani di rateazione delle
          dichiarazioni precompilate la sanzione scende all'1,5% (o 3% in
          alcuni casi). Sebbene meno vantaggioso del ravvedimento ordinario,
          consente comunque una significativa riduzione.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Accertamento con adesione (D.Lgs. 218/1997)
        </h3>
        <p className="text-base leading-relaxed">
          L'<InlineNormLink
            text="accertamento con adesione"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-06-19;218"
          />{" "}
          è un meccanismo negoziato tra contribuente e Amministrazione, che
          consente di definire la pretesa fiscale con sanzione ridotta a{" "}
          <strong>1/3 del minimo edittale</strong>. È utilizzabile dopo la
          notifica dell'avviso di accertamento (entro 60 giorni) o anche
          preventivamente (su istanza del contribuente). Differenza con il
          ravvedimento: nel ravvedimento il contribuente accetta la propria
          violazione e versa l'importo dovuto; nell'adesione può negoziare
          l'entità della pretesa.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Acquiescenza ex art. 15 D.Lgs. 218/1997
        </h3>
        <p className="text-base leading-relaxed">
          L'<strong>acquiescenza</strong> consiste nella rinuncia del
          contribuente al ricorso contro l'avviso di accertamento, con sanzione
          ridotta a <strong>1/3 del minimo edittale</strong>. È utilizzabile
          quando il contribuente, pur avendo ricevuto l'accertamento (situazione
          ostativa al ravvedimento), riconosce la fondatezza della pretesa e
          rinuncia all'impugnazione.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Confronto sintetico
        </h3>
        <LegalTable
          headers={[
            "Istituto",
            "Quando si usa",
            "Sanzione ridotta",
            "Negoziabile?",
          ]}
          rows={[
            [
              "Ravvedimento operoso",
              "Prima della notifica di atti accertativi",
              "0,0833%/gg → 3,57% (post 1/9/2024)",
              "❌ no",
            ],
            [
              "Definizione agevolata",
              "Dopo avviso bonario",
              "1/3 (10% per controlli automatizzati)",
              "❌ no",
            ],
            [
              "Accertamento con adesione",
              "Dopo accertamento o preventivamente",
              "1/3 del minimo edittale",
              "✅ sì",
            ],
            [
              "Acquiescenza",
              "Dopo accertamento (no ricorso)",
              "1/3 del minimo edittale",
              "❌ no",
            ],
          ]}
        />

        <AlertBox variant="success">
          <p>
            <strong>Il ravvedimento è quasi sempre la scelta più
            conveniente</strong> quando è ancora disponibile (cioè prima della
            notifica di atti accertativi). Per un'imposta di 5.000 € omessa
            con 25 giorni di ritardo, il ravvedimento costa una sanzione di
            62,50 € (1,25%); l'avviso bonario successivo, anche con definizione
            agevolata al 10%, costerebbe almeno 500 €.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FONTI E RIFERIMENTI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="fonti"
        icon={Link2}
        title="Fonti e Riferimenti"
        subtitle="Fonti istituzionali utilizzate per questa guida"
      />
      <div className="space-y-3">
        <p className="text-base leading-relaxed">
          Le informazioni di questa guida sono tratte dalle seguenti fonti
          istituzionali italiane:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Normattiva.it</strong> — Testo consolidato e vigente di
              D.Lgs. 472/1997, D.Lgs. 471/1997, D.Lgs. 87/2024, D.Lgs.
              158/2015, D.Lgs. 218/1997, L. 212/2000, DPR 600/1973, DPR
              633/1972:{" "}
              <a
                href="https://www.normattiva.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                normattiva.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Agenzia delle Entrate</strong> — Schede ravvedimento,
              circolari (180/E/1998, 27/E/2013, 6/E/2015, 12/E/2024, 54/E/2002),
              risposte a interpello (n. 297/2023), modello F24 e codici
              tributo:{" "}
              <a
                href="https://www.agenziaentrate.gov.it/portale/schede/accertamenti/ravvedimento-operoso/come-regolarizzare-versimpo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                agenziaentrate.gov.it/ravvedimento
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Gazzetta Ufficiale</strong> — D.M. 10 dicembre 2025
              (saggio interessi legali 2026 = 1,60%), pubblicazione del D.Lgs.
              87/2024:{" "}
              <a
                href="https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                gazzettaufficiale.it (D.M. 10/12/2025)
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Ministero dell'Economia e delle Finanze (MEF)</strong> —
              Dipartimento delle Finanze, decreti annuali sul saggio degli
              interessi legali:{" "}
              <a
                href="https://www.finanze.gov.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                finanze.gov.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Fondazione Nazionale Commercialisti</strong> — Documento
              sulla revisione del sistema sanzionatorio amministrativo
              post-D.Lgs. 87/2024:{" "}
              <a
                href="https://www.fondazionenazionalecommercialisti.it/filemanager/active/01840/2025_12_01_Revisione_del_sistema_sanzionatorio_amministrativo_come_cambia_il_ravvedimento_operoso.pdf?fid=1840"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                fondazionenazionalecommercialisti.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Senato della Repubblica</strong> — Dossier parlamentare
              sullo schema di decreto integrative D.Lgs. 87/2024:{" "}
              <a
                href="https://www.senato.it/service/PDF/PDFServer/BGT/01453533.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                senato.it (dossier)
              </a>
            </span>
          </li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="faq"
        icon={HelpCircle}
        title="Domande Frequenti (FAQ)"
        subtitle="Risposte alle domande più comuni sul ravvedimento operoso"
      />
      <FAQ items={faqData} />

      {/* ═══════════════════════════════════════════════════════════
          NORMATIVA + CIRCOLARI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="normativa"
        icon={Landmark}
        title="Normativa di Riferimento"
        subtitle="Norme primarie e prassi dell'Agenzia delle Entrate"
      />
      <div className="space-y-6">
        <NormativaRefTable items={normativaRiferimento} />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Circolari, risoluzioni e giurisprudenza rilevanti
        </h3>
        <CircolariTable items={circolariMinisteriali} />
      </div>
    </ToolLayout>
  );
}

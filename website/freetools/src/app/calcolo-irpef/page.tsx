import {
  Landmark,
  BookOpen,
  HelpCircle,
  Calculator,
  Sigma,
  TrendingUp,
  Receipt,
  Wallet,
  Heart,
  AlertTriangle,
  Link2,
  FileText,
  CalendarDays,
  History,
  ListChecks,
  Coins,
  GanttChartSquare,
  Shield,
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
import Calcolatore from "@/components/calcolo-irpef/Calcolatore";
import {
  sections,
  normativaRiferimento,
  circolariMinisteriali,
  ALIQUOTE_STORICHE,
  ESEMPI_PRATICI,
  NO_TAX_AREA,
  ESONERI_DICHIARAZIONE,
  ADDIZIONALI_REGIONALI,
  CODICI_F24_IRPEF,
} from "@/data/calcolo-irpef/calcoloIrpefData";
import { faqData } from "@/data/calcolo-irpef/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import { formatEur } from "@/lib/utils";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Calcolo IRPEF 2026 | Aliquote, Scaglioni e Calcolatore",
  description:
    "Calcolatore IRPEF 2026 con nuove aliquote 23/33/43% (L. 199/2025). Scaglioni, detrazioni art. 13 TUIR, no tax area, addizionali e confronto 2025 vs 2026.",
  alternates: { canonical: "/calcolo-irpef" },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-irpef",
    title: "Calcolo IRPEF 2026 — Aliquote, Scaglioni e Calcolatore",
    description:
      "Calcolatore IRPEF 2026: aliquote 23/33/43% Legge di Bilancio 2026, detrazioni base art. 13 TUIR, addizionali, esempi pratici e confronto risparmio vs 2025.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo IRPEF 2026 — calcolatore online con nuove aliquote, scaglioni e detrazioni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo IRPEF 2026 | Aliquote, Scaglioni e Calcolatore",
    description:
      "Calcolatore IRPEF 2026: 23/33/43%, detrazioni base, addizionali, esempi pratici e risparmio 2026 vs 2025.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-irpef",
  title: "Calcolo IRPEF 2026",
  shortTitle: "Calcolo IRPEF",
  icon: Landmark,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroImageAlt:
    "Calcolo IRPEF 2026 — calcolatore con nuove aliquote 23/33/43%, scaglioni, detrazioni e addizionali",
  heroEyebrow: "Calcolatore multi-anno e guida completa",
  heroTitle: "Calcolo IRPEF 2026 — Aliquote, Scaglioni e Detrazioni",
  heroDescription:
    "Calcola l'IRPEF con le nuove aliquote 2026 (23% / 33% / 43%) introdotte dalla Legge di Bilancio 2026. Selettore 2024/2025/2026, detrazioni di base ex art. 13 TUIR per lavoro dipendente, pensione e autonomi, addizionali regionali e comunali, confronto risparmio rispetto al 2025. Normativa TUIR aggiornata e fonti istituzionali.",
  heroReference:
    "TUIR (DPR 917/1986) art. 11 · Legge 199/2025 · D.Lgs. 216/2023 · L. 207/2024 · DPR 600/1973",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere fiscale, tributario né legale.",
    "Il calcolo è indicativo: l'imposta effettivamente dovuta dipende da detrazioni per familiari (art. 12 TUIR), oneri detraibili (art. 15), bonus aggiuntivo, trattamento integrativo e altre componenti non interamente modellabili. Le aliquote regionali e comunali sono variabili e vanno verificate con le delibere annuali. Dati aggiornati alla Legge 199/2025 (Bilancio 2026).",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    {
      label: "Agenzia delle Entrate — Aliquote IRPEF",
      url: "https://www.agenziaentrate.gov.it/portale/imposta-sul-reddito-delle-persone-fisiche-irpef-/aliquote-e-calcolo-dell-irpef",
    },
    {
      label: "Gazzetta Ufficiale (L. 199/2025)",
      url: "https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2025-12-30&atto.codiceRedazionale=25G00212",
    },
    { label: "MEF — Dipartimento Finanze", url: "https://www.finanze.gov.it" },
  ],
};

export default function CalcoloIrpefPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ── JSON-LD: Article ── */}
      <JsonLd
        data={articleSchema({
          headline:
            "Calcolo IRPEF 2026: Aliquote 23/33/43%, Scaglioni, Detrazioni e Calcolatore",
          description:
            "Guida completa al calcolo dell'IRPEF in Italia aggiornata al 2026: nuove aliquote per scaglioni (Legge 199/2025), formula progressiva, detrazioni art. 13 TUIR per lavoro dipendente/pensione/autonomi, no tax area, addizionali regionali e comunali, versamenti F24 e sanzioni.",
          path: "/calcolo-irpef",
          datePublished: "2026-05-16",
          dateModified: "2026-05-16",
          image: HERO_IMG,
          sections: [
            "Calcolatore IRPEF",
            "Cos'è l'IRPEF",
            "Aliquote IRPEF 2026",
            "Tabella storica aliquote",
            "Come si calcola l'IRPEF",
            "Esempi pratici 2025 vs 2026",
            "Novità Legge di Bilancio 2026",
            "Aliquota media e marginale",
            "Detrazioni di base art. 13 TUIR",
            "No tax area",
            "Addizionali regionali e comunali",
            "IRPEF in busta paga",
            "Esonero dalla dichiarazione",
            "Versamenti F24",
            "Sanzioni e ravvedimento",
            "Errori comuni",
            "Fonti e riferimenti",
            "FAQ",
            "Normativa di riferimento",
          ],
          keywords:
            "calcolo irpef, irpef 2026, aliquote irpef, scaglioni irpef, detrazioni irpef, no tax area, addizionali irpef, calcolo irpef netto, legge di bilancio 2026, tuir",
        })}
      />

      {/* ── JSON-LD: WebApplication ── */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore IRPEF 2026",
          description:
            "Calcolatore online gratuito per l'IRPEF: lordo, netto, aliquota media e marginale. Nuove aliquote 2026 (23/33/43%), confronto 2025 vs 2026, detrazioni base per lavoro dipendente, pensione e autonomi, addizionali regionali e comunali.",
          path: "/calcolo-irpef",
          applicationCategory: "FinanceApplication",
          featureList: [
            "Aliquote IRPEF 2024-2025-2026 selezionabili",
            "Confronto automatico 2025 vs 2026 con risparmio",
            "Detrazioni base per lavoro dipendente, pensione e autonomi",
            "Ulteriore detrazione L. 207/2024 (1.000 € per RC 20-32k €)",
            "Addizionali regionali e comunali personalizzabili",
            "Aliquota media lorda, netta e marginale",
            "Sviluppo del calcolo per scaglioni",
          ],
        })}
      />

      {/* ═══════════════════════════════════════════════════════════
          CALCOLATORE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="calcolatore"
        icon={Calculator}
        title="Calcolatore IRPEF"
        subtitle="Aliquote 2024/2025/2026, detrazioni base, addizionali e confronto risparmio"
      />
      <Calcolatore />

      {/* ═══════════════════════════════════════════════════════════
          COS'È L'IRPEF
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="cose-irpef"
        icon={BookOpen}
        title="Cos'è l'IRPEF"
        subtitle="Definizione, natura giuridica e quadro normativo"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>IRPEF</strong> — <em>Imposta sul Reddito delle Persone Fisiche</em> —
          è la principale imposta diretta del sistema tributario italiano, applicata sul
          reddito complessivo posseduto dalle persone fisiche. La sua disciplina è
          contenuta nel{" "}
          <InlineNormLink
            text="Testo Unico delle Imposte sui Redditi (DPR 22 dicembre 1986, n. 917)"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1986-12-22;917"
          />
          , generalmente abbreviato in TUIR, e in particolare negli articoli da 1 a 24
          (Titolo I, Capo I).
        </p>
        <p className="text-base leading-relaxed">
          L'art. 1 TUIR definisce in modo netto il <strong>presupposto</strong>{" "}
          dell'imposta:
        </p>
        <NormativaQuote url="https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art1.html">
          Art. 1 TUIR: «Presupposto dell'imposta sul reddito delle persone fisiche è il
          possesso di redditi in denaro o in natura rientranti nelle categorie indicate
          nell'articolo 6».
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          La dottrina e la prassi qualificano l'IRPEF come imposta{" "}
          <strong>diretta</strong> (colpisce direttamente il reddito prodotto),{" "}
          <strong>personale</strong> (tiene conto delle condizioni soggettive del
          contribuente tramite detrazioni e deduzioni), <strong>globale</strong> (si
          applica al reddito complessivo, sommando i redditi delle diverse categorie ex art. 6
          TUIR) e <strong>progressiva</strong> (l'aliquota effettiva cresce con il
          reddito, grazie al sistema per scaglioni). Sul piano costituzionale, l'IRPEF
          è espressione diretta dei principi di <strong>capacità contributiva</strong> e{" "}
          <strong>progressività</strong> sanciti dall'art. 53 della Costituzione, che
          impone di commisurare il prelievo alla reale capacità economica e di conformarlo
          secondo criteri progressivi.
        </p>
        <p className="text-base leading-relaxed">
          La sua introduzione risale alla grande riforma tributaria degli anni Settanta —
          DPR 29 settembre 1973, n. 597 — che fissava 32 scaglioni con aliquote dal 10% al
          72%. Da allora il numero di scaglioni si è progressivamente ridotto: 9 nel 1983,
          7 negli anni Novanta, 5 dal 2003 al 2021, 4 nel 2022-2023, e infine 3 dal 2024 ad
          oggi. Nel 2026, la Legge 30 dicembre 2025, n. 199 (Legge di Bilancio 2026) ha
          ridotto l'aliquota del secondo scaglione dal 35% al 33%, mantenendo invariata
          la struttura a tre scaglioni.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ALIQUOTE 2026
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="aliquote-2026"
        icon={Coins}
        title="Aliquote IRPEF 2026"
        subtitle="Tre scaglioni con riduzione del secondo dal 35% al 33%"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Dal 1° gennaio 2026, per effetto dell'art. 1, commi 3-4, della{" "}
          <InlineNormLink
            text="Legge 30 dicembre 2025, n. 199"
            url="https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2025-12-30&atto.codiceRedazionale=25G00212"
          />{" "}
          (Legge di Bilancio 2026), pubblicata in GU Serie Generale n. 301 del 30 dicembre
          2025 (Suppl. Ord. n. 42), <strong>l'aliquota del secondo scaglione IRPEF è
          stata ridotta dal 35% al 33%</strong>. La struttura a tre scaglioni rimane
          invariata: il primo scaglione (23%) e il terzo (43%) non sono stati modificati.
        </p>
        <NormativaQuote url="https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art11.html">
          Art. 11, comma 1, TUIR (vigente dal 1° gennaio 2026): «L'imposta lorda è
          determinata applicando al reddito complessivo, al netto degli oneri deducibili
          indicati nell'articolo 10, le seguenti aliquote per scaglioni di reddito: a)
          fino a 28.000 euro, 23 per cento; b) oltre 28.000 euro e fino a 50.000 euro, 33
          per cento; c) oltre 50.000 euro, 43 per cento».
        </NormativaQuote>
        <LegalTable
          headers={["Scaglione di reddito", "Aliquota", "Imposta lorda sullo scaglione"]}
          rows={[
            ["Fino a 28.000 €", "23%", "23% × Reddito"],
            ["Oltre 28.000 € e fino a 50.000 €", "33%", "6.440 € + 33% × (R − 28.000)"],
            ["Oltre 50.000 €", "43%", "13.700 € + 43% × (R − 50.000)"],
          ]}
        />
        <AlertBox variant="info" title="Importante: tassazione progressiva per scaglioni">
          <p>
            L'aliquota indicata per ciascuno scaglione è{" "}
            <strong>marginale legale</strong>, vale a dire applicabile solo alla parte di
            reddito che eccede il limite inferiore dello scaglione. L'aliquota
            maggiore non si applica mai all'intero reddito complessivo. Per un reddito
            di 35.000 €, ad esempio, il 33% si applica solo ai 7.000 € eccedenti i 28.000,
            mentre i primi 28.000 € restano tassati al 23%.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          TABELLA STORICA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="tabella-storica"
        icon={History}
        title="Tabella storica delle aliquote IRPEF"
        subtitle="Confronto sinottico dal 1974 al 2026"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'IRPEF ha attraversato numerose riforme dalla sua introduzione. La tendenza
          del legislatore degli ultimi due decenni è stata di <strong>ridurre il numero di
          scaglioni</strong> per semplificare il calcolo e ridurre le aliquote marginali
          effettive nelle fasce di reddito medio.
        </p>
        <LegalTable
          headers={["Periodo", "Scaglioni", "Aliquote principali", "Fonte normativa"]}
          rows={ALIQUOTE_STORICHE.map((r) => [
            r.periodo,
            r.scaglioni,
            r.descrizione,
            r.fonte,
          ])}
        />
        <p className="text-sm text-muted-foreground">
          La riforma 2026 non altera la struttura a tre scaglioni introdotta nel 2024, ma
          rappresenta un aggiustamento «di fino» mirato a ridurre il carico fiscale
          sui redditi medi (28.000-50.000 €), bilanciato da una sterilizzazione del
          beneficio per i redditi superiori a 200.000 € (nuovo comma 5-bis dell'art.
          16-ter TUIR).
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          COME SI CALCOLA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="come-si-calcola"
        icon={Sigma}
        title="Come si calcola l'IRPEF"
        subtitle="Formula progressiva e passaggi per il 2026"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il calcolo dell'IRPEF lorda si basa sull'applicazione delle aliquote per
          scaglioni al reddito imponibile (reddito complessivo al netto degli oneri
          deducibili ex{" "}
          <InlineNormLink
            text="art. 10 TUIR"
            url="https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art10.html"
          />
          ). Per il 2026, la formula matematica è:
        </p>
        <AlertBox variant="info" title="Formula progressiva IRPEF 2026">
          <div className="space-y-2 font-mono text-sm">
            <div>
              <strong>Se R ≤ 28.000 €:</strong> IRPEF = R × 23%
            </div>
            <div>
              <strong>Se 28.000 &lt; R ≤ 50.000 €:</strong> IRPEF = 6.440 € + (R − 28.000) ×
              33%
            </div>
            <div>
              <strong>Se R &gt; 50.000 €:</strong> IRPEF = 13.700 € + (R − 50.000) × 43%
            </div>
          </div>
        </AlertBox>
        <p className="text-base leading-relaxed">
          Dove R rappresenta il reddito imponibile. I valori 6.440 € e 13.700 € sono il
          risultato cumulato delle aliquote applicate agli scaglioni inferiori: il primo
          scaglione di 28.000 € al 23% genera 6.440 € di imposta; aggiungendo il secondo
          scaglione di 22.000 € al 33% si ottengono 7.260 € ulteriori (totale 13.700 €).
        </p>
        <p className="text-base leading-relaxed">
          <strong>Passaggi del calcolo completo</strong>:
        </p>
        <BulletList
          items={[
            "Determinare il reddito complessivo (art. 8 TUIR) sommando i redditi delle diverse categorie (lavoro dipendente, pensione, autonomo, fondiari, di capitale, d'impresa, diversi)",
            "Sottrarre gli oneri deducibili (art. 10 TUIR): contributi previdenziali obbligatori, abitazione principale, assegno coniuge da separazione, altri",
            "Ottenere il reddito imponibile e applicare le aliquote per scaglioni (art. 11 TUIR) per calcolare l'IRPEF lorda",
            "Sottrarre le detrazioni per tipo di reddito (art. 13 TUIR), per familiari a carico (art. 12), per oneri al 19% (art. 15) e altre eventuali detrazioni",
            "Aggiungere le addizionali regionali (D.Lgs. 446/1997) e comunali (D.Lgs. 360/1998)",
            "Sottrarre dal totale dovuto i versamenti già effettuati (ritenute, acconti) per ottenere il saldo a debito o a credito",
          ]}
        />
        <NormativaQuote url="https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art11.html">
          Art. 11, comma 3, TUIR: «L'imposta netta è determinata operando sull'imposta
          lorda, fino alla concorrenza del suo ammontare, le detrazioni previste negli
          articoli 12, 13, 15, 16 e 16-bis nonché in altre disposizioni di legge».
        </NormativaQuote>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ESEMPI PRATICI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="esempi-pratici"
        icon={ListChecks}
        title="Esempi pratici: confronto IRPEF 2025 vs 2026"
        subtitle="Risparmio per redditi tipo, dalla no tax area a 100.000 €"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La tabella seguente confronta l'IRPEF lorda calcolata con le aliquote 2025
          (23/35/43%) e con le nuove aliquote 2026 (23/33/43%) per dodici livelli di
          reddito imponibile tipici. I valori sono al netto di detrazioni e addizionali, e
          rappresentano il beneficio «lordo» della riduzione del secondo scaglione.
        </p>
        <LegalTable
          headers={["Reddito imponibile", "IRPEF 2025", "IRPEF 2026", "Risparmio"]}
          rows={ESEMPI_PRATICI.map((e) => [
            formatEur(e.reddito),
            formatEur(e.irpef2025),
            formatEur(e.irpef2026),
            e.risparmio > 0 ? `−${formatEur(e.risparmio)}` : "—",
          ])}
        />
        <AlertBox variant="success" title="Beneficio massimo 440 € annui">
          <p>
            Per i redditi compresi tra 28.000 e 50.000 € il risparmio cresce linearmente
            secondo la formula <code className="font-mono">ΔT = 0,02 × (R − 28.000)</code>.
            Per tutti i redditi superiori a 50.000 € (fino a 200.000 €), il risparmio
            d'imposta lorda è costante e pari a <strong>440 €</strong>: è il beneficio
            massimo teorico della riforma 2026. Oltre i 200.000 €, il vantaggio viene
            sterilizzato attraverso la riduzione delle detrazioni per oneri (nuovo comma
            5-bis dell'art. 16-ter TUIR).
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          NOVITÀ 2026
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="novita-2026"
        icon={TrendingUp}
        title="Novità Legge di Bilancio 2026"
        subtitle="Riduzione aliquota secondo scaglione e sterilizzazione redditi alti"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>Legge 30 dicembre 2025, n. 199</strong> (Legge di Bilancio 2026) ha
          introdotto due modifiche significative alla disciplina IRPEF, entrambe operative
          dal 1° gennaio 2026:
        </p>
        <BulletList
          items={[
            "Riduzione dell'aliquota del secondo scaglione dal 35% al 33% (art. 1, c. 3 L. 199/2025): modifica all'art. 11, c. 1, lett. b) TUIR. Beneficio massimo 440 € annui per redditi nello scaglione 28.000-50.000 € sfruttato per intero, o per redditi superiori fino a 200.000 €",
            "Sterilizzazione del beneficio per redditi oltre 200.000 € (art. 1, c. 4 L. 199/2025): nuovo comma 5-bis dell'art. 16-ter TUIR. Riduzione forfettaria di 440 € delle detrazioni dall'imposta lorda spettanti per oneri al 19% (escluse spese sanitarie ex art. 15, c. 1, lett. c TUIR), erogazioni a partiti politici al 26% e premi assicurativi calamità al 90%",
          ]}
        />
        <AlertBox variant="success" title="Effetto sui redditi medi (28.000-50.000 €)">
          <p>
            Su un reddito di 35.000 €, l'IRPEF lorda passa da 8.890 € (2025) a 8.750 €
            (2026): risparmio di 140 €. Su 45.000 € il risparmio è di 340 €. Su 50.000 € e
            oltre, fino a 200.000 €, il risparmio massimo è di 440 €. Il beneficio si
            manifesta concretamente in busta paga per i lavoratori dipendenti già dal mese
            di gennaio 2026, con effetto annualizzato visibile dal conguaglio di fine
            anno.
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="Redditi oltre 200.000 € — beneficio annullato">
          <p>
            Per i contribuenti con reddito complessivo superiore a 200.000 €, il risparmio
            di 440 € sull'IRPEF lorda è compensato da un'analoga riduzione delle
            detrazioni per oneri detraibili al 19% (art. 16-ter, c. 5-bis TUIR). Esempio:
            con detrazioni per oneri pari a 3.000 €, dopo i limiti di cui all'art.
            16-ter e la riduzione ex art. 15, c. 3-bis, l'importo effettivamente
            detraibile sarà ridotto di 440 €, neutralizzando il beneficio del taglio di
            aliquota.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ALIQUOTA MEDIA E MARGINALE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="aliquota-media-marginale"
        icon={GanttChartSquare}
        title="Aliquota media e aliquota marginale"
        subtitle="Concetti chiave per comprendere il prelievo IRPEF"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>aliquota media</strong> è il rapporto percentuale tra l'imposta
          (lorda o netta) e il reddito imponibile. Misura la quota del reddito assorbita
          dall'IRPEF nel complesso. L'<strong>aliquota marginale legale</strong>,
          invece, è l'aliquota applicata all'ultima porzione di reddito — cioè
          quella dello scaglione in cui ricade l'ultimo euro guadagnato.
        </p>
        <AlertBox variant="info" title="Esempio: reddito imponibile 35.000 € nel 2026">
          <div className="space-y-1">
            <div>
              IRPEF lorda: 28.000 × 23% + 7.000 × 33% = 6.440 + 2.310 ={" "}
              <strong className="font-mono">8.750 €</strong>
            </div>
            <div>
              Aliquota media lorda: 8.750 ÷ 35.000 ={" "}
              <strong className="font-mono">25,00%</strong>
            </div>
            <div>
              Aliquota marginale legale:{" "}
              <strong className="font-mono">33%</strong> (scaglione del reddito eccedente)
            </div>
          </div>
        </AlertBox>
        <p className="text-base leading-relaxed">
          L'<strong>aliquota marginale effettiva</strong>, infine, è un concetto più
          sottile: tiene conto non solo dell'aliquota legale per scaglioni ma anche
          della <strong>riduzione delle detrazioni</strong> al variare del reddito. Nei
          tratti in cui la detrazione decresce (ad esempio per il lavoro dipendente nella
          fascia 15.000-28.000 €), un incremento di 100 € di reddito può comportare un
          aumento dell'imposta netta superiore a 23 €, perché parte della detrazione
          viene persa. Questo fenomeno, definito <em>aliquota marginale effettiva &gt;
          legale</em>, è stato analizzato dal MEF e ha motivato vari interventi di riforma.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          DETRAZIONI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="detrazioni"
        icon={Receipt}
        title="Detrazioni di base ex art. 13 TUIR"
        subtitle="Lavoro dipendente, pensione, autonomi e ulteriori detrazioni"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le detrazioni di cui all'{" "}
          <InlineNormLink
            text="art. 13 TUIR"
            url="https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art13.html"
          />{" "}
          sono lo strumento principale con cui il legislatore calibra la progressività
          effettiva dell'imposta e realizza la <strong>no tax area</strong> per le
          diverse tipologie di reddito. Sono calcolate sull'intero reddito complessivo
          e sottratte dall'imposta lorda fino alla sua concorrenza (incapienza: la
          parte eccedente non è rimborsabile, salvo specifiche eccezioni).
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">
          Lavoro dipendente (art. 13, c. 1 TUIR)
        </h3>
        <p className="text-base leading-relaxed">
          Per i redditi di lavoro dipendente, la detrazione massima è di{" "}
          <strong>1.955 €</strong> (importo elevato dal D.Lgs. 216/2023 in vigore dal
          2024). Le formule per il 2026 sono:
        </p>
        <BulletList
          items={[
            "RC ≤ 15.000 €: detrazione 1.955 € (minimo 690 €, o 1.380 € per rapporti a tempo determinato)",
            "15.000 < RC ≤ 28.000 €: D = 1.910 + 1.190 × (28.000 − RC) / 13.000",
            "28.000 < RC ≤ 50.000 €: D = 1.910 × (50.000 − RC) / 22.000",
            "RC > 50.000 €: nessuna detrazione",
            "Maggiorazione 65 € (art. 13, c. 1.1): per RC tra 25.000 e 35.000 €",
          ]}
        />

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">
          Pensione (art. 13, c. 3 TUIR)
        </h3>
        <p className="text-base leading-relaxed">
          Per i redditi di pensione, la struttura è analoga ma non identica a quella per
          lavoro dipendente. Dal 2024 le no tax area sono parificate a 8.500 €.
        </p>
        <BulletList
          items={[
            "RC ≤ 8.500 €: detrazione 1.955 € (minimo 713 €, rapportata ai giorni di pensione)",
            "8.500 < RC ≤ 28.000 €: D = [700 + 1.255 × (28.000 − RC) / 19.500] × giorni/365",
            "28.000 < RC ≤ 50.000 €: D = 700 × (50.000 − RC) / 22.000 × giorni/365",
            "RC > 50.000 €: nessuna detrazione",
          ]}
        />

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">
          Lavoro autonomo e altri redditi (art. 13, c. 5 TUIR)
        </h3>
        <p className="text-base leading-relaxed">
          Per i lavoratori autonomi e altri redditi assimilati, le detrazioni sono di
          importo inferiore (no tax area 5.500 €):
        </p>
        <BulletList
          items={[
            "RC ≤ 5.500 €: detrazione 1.265 €",
            "5.500 < RC ≤ 28.000 €: D = [500 + 765 × (28.000 − RC) / 22.500] × giorni/365",
            "28.000 < RC ≤ 50.000 €: D = 500 × (50.000 − RC) / 22.000 × giorni/365",
            "RC > 50.000 €: nessuna detrazione",
            "Maggiorazione 50 € (art. 13, c. 5-ter): per RC tra 11.000 e 17.000 €",
          ]}
        />

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">
          Trattamento integrativo e ulteriore detrazione (L. 207/2024)
        </h3>
        <p className="text-base leading-relaxed">
          La Legge di Bilancio 2025 (L. 207/2024) ha introdotto due misure aggiuntive per
          ridurre il cuneo fiscale sui lavoratori dipendenti, in vigore anche nel 2026:
        </p>
        <BulletList
          items={[
            "Bonus aggiuntivo: 7,1% del reddito da lavoro per redditi complessivi fino a 8.500 €; 5,3% tra 8.500 e 15.000 €; 4,8% tra 15.000 e 20.000 €. Erogato direttamente in busta paga",
            "Ulteriore detrazione: 1.000 € pieni per RC tra 20.000 e 32.000 € (lavoratori dipendenti); decrescente per RC tra 32.000 e 40.000 € secondo la formula 1.000 × (40.000 − RC) / 8.000; zero oltre i 40.000 €",
          ]}
        />
        <AlertBox variant="info" title="Esempio: lavoratore dipendente con 24.000 € di reddito">
          <p>
            Detrazione base (art. 13, c. 1 lett. b): D = 1.910 + 1.190 × (28.000 − 24.000)
            / 13.000 = 1.910 + 366,15 ={" "}
            <strong className="font-mono">2.276,15 €</strong> (più 65 € di maggiorazione se
            si supera 25.000 €). A questo importo si aggiunge l'ulteriore detrazione
            di 1.000 € (L. 207/2024 per RC tra 20.000 e 32.000 €). IRPEF lorda 2026: 24.000
            × 23% = 5.520 €. IRPEF netta dopo detrazioni: 5.520 − 2.276,15 − 1.000 = 2.243,85
            €, oltre il bonus aggiuntivo del 4,8% di 4.000 € di reddito eccedente 20.000 €
            in busta paga.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          NO TAX AREA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="no-tax-area"
        icon={Shield}
        title="No tax area 2026"
        subtitle="Soglie di reddito senza IRPEF netta dovuta"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>no tax area</strong> è la fascia di reddito entro cui l'IRPEF
          netta è zero. Non è un'esenzione normativa in senso tecnico, ma il risultato
          matematico dell'equilibrio tra l'aliquota del primo scaglione (23%) e
          la detrazione di base spettante per tipologia di reddito. Quando il reddito
          supera la soglia, l'imposta lorda inizia a eccedere la detrazione costante,
          generando un'imposta netta positiva.
        </p>
        <LegalTable
          headers={["Categoria di reddito", "Soglia no tax area", "Detrazione base"]}
          rows={NO_TAX_AREA.map((n) => [
            n.categoria,
            formatEur(n.soglia),
            formatEur(n.detrazioneBase),
          ])}
        />
        <AlertBox variant="info" title="Perché 8.500 € per dipendenti e pensionati">
          <p>
            Per i lavoratori dipendenti e i pensionati, la detrazione massima ex art. 13
            TUIR è esattamente 1.955 €, calibrata per compensare integralmente l'IRPEF
            lorda dovuta sui primi 8.500 € di reddito: 8.500 × 23% = 1.955 €. La
            parificazione a 8.500 € è stata realizzata dal D.Lgs. 216/2023 elevando la
            detrazione dipendenti da 1.880 a 1.955 €, allineandola a quella pensionati. Per
            i lavoratori autonomi la soglia è 5.500 € perché la detrazione massima è di
            1.265 € (5.500 × 23%).
          </p>
        </AlertBox>
        <p className="text-sm text-muted-foreground">
          La no tax area non è il valore esatto sotto cui non si è tenuti a presentare la
          dichiarazione: per l'esonero dalla dichiarazione si applicano soglie
          diverse, dettagliate nella sezione dedicata più sotto.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ADDIZIONALI REGIONALI E COMUNALI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="addizionali"
        icon={Landmark}
        title="Addizionali regionali e comunali"
        subtitle="Tributi locali sul reddito imponibile IRPEF"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Oltre all'IRPEF statale, il reddito delle persone fisiche è gravato dalle{" "}
          <strong>addizionali regionale e comunale</strong>, istituite rispettivamente
          dal{" "}
          <InlineNormLink
            text="D.Lgs. 446/1997"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-15;446"
          />{" "}
          (art. 50) e dal{" "}
          <InlineNormLink
            text="D.Lgs. 360/1998"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-09-28;360"
          />
          . Entrambe si applicano sulla stessa base imponibile dell'IRPEF statale e
          spettano alla Regione e al Comune in cui il contribuente ha il domicilio fiscale
          al 1° gennaio dell'anno di riferimento.
        </p>
        <BulletList
          items={[
            "Addizionale regionale: aliquota base statale 0,9%, aumentabile dalle Regioni fino al 3,33%. Possibile progressività per scaglioni o aliquota unica proporzionale",
            "Addizionale comunale: aliquota massima 0,8% (1,0% per Roma Capitale). I Comuni possono fissare soglie di esenzione per i redditi più bassi",
            "Entrambe sono indeducibili dalla base imponibile IRPEF e si aggiungono al carico fiscale complessivo",
          ]}
        />
        <AlertBox variant="info" title="Regime transitorio 2025-2028">
          <p>
            Per gli anni d'imposta 2025-2028, le Regioni possono mantenere la
            progressività delle proprie aliquote sui <strong>quattro scaglioni IRPEF
            pre-2024</strong> (15.000 / 28.000 / 50.000) oppure adeguarsi ai tre nuovi
            scaglioni nazionali (28.000 / 50.000), o ancora adottare un'aliquota
            unica. In assenza di delibere annuali, si applicano automaticamente aliquote e
            scaglioni dell'anno precedente.
          </p>
        </AlertBox>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">
          Aliquote regionali indicative 2026
        </h3>
        <p className="text-base leading-relaxed">
          La tabella seguente riporta valori orientativi per il 2026. Le aliquote
          effettive sono fissate dalle delibere regionali annuali e possono variare per
          scaglione di reddito o per presenza di disavanzi sanitari.
        </p>
        <LegalTable
          headers={["Regione", "Aliquota 2026 (range)", "Note"]}
          rows={ADDIZIONALI_REGIONALI.map((r) => [r.regione, r.range, r.note])}
        />
        <p className="text-sm text-muted-foreground">
          Per le aliquote esatte applicabili al proprio reddito è sempre opportuno
          consultare i siti istituzionali della Regione e del Comune di residenza, o il
          Portale del Federalismo Fiscale del MEF.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          IRPEF IN BUSTA PAGA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="busta-paga"
        icon={Wallet}
        title="IRPEF in busta paga (calcolo mensile)"
        subtitle="Sostituto d'imposta, ragguaglio scaglioni e conguaglio"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Per i lavoratori dipendenti e i pensionati, l'IRPEF è trattenuta
          mensilmente in busta paga dal <strong>sostituto d'imposta</strong> (datore
          di lavoro o ente erogatore della pensione) ai sensi dell'{" "}
          <InlineNormLink
            text="art. 23 DPR 600/1973"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-09-29;600~art23"
          />
          . Il sostituto calcola l'imposta mensile <strong>ragguagliando gli
          scaglioni annui al periodo</strong>, cioè dividendoli per dodici, e applicando
          le stesse aliquote progressive.
        </p>
        <LegalTable
          headers={["Scaglione mensile 2026", "Importo", "Aliquota"]}
          rows={[
            ["Primo scaglione", "Fino a 2.333,33 €/mese (28.000/12)", "23%"],
            ["Secondo scaglione", "Da 2.333,34 a 4.166,67 €/mese (50.000/12)", "33%"],
            ["Terzo scaglione", "Oltre 4.166,67 €/mese", "43%"],
          ]}
        />
        <p className="text-base leading-relaxed">
          Le detrazioni per tipo di reddito (art. 13 TUIR) e per familiari a carico (art.
          12) vengono applicate in proporzione ai giorni di lavoro nel mese. A fine anno —
          o al momento della cessazione del rapporto — il sostituto effettua il{" "}
          <strong>conguaglio</strong>, ricalcolando l'imposta complessivamente dovuta
          sulla base del reddito annuo effettivo e delle detrazioni spettanti, e
          regolarizzando eventuali differenze.
        </p>
        <AlertBox variant="warning" title="Conguaglio e rapporti multipli">
          <p>
            In presenza di <strong>più rapporti di lavoro</strong> nel corso dell'anno
            (cambio datore, secondo impiego, redditi misti) le ritenute possono risultare
            insufficienti o eccessive, perché ciascun sostituto applica gli scaglioni
            mensili come se quel rapporto fosse l'unico. È quindi sempre opportuno
            verificare con la dichiarazione dei redditi se sono dovuti versamenti
            integrativi o se si ha diritto a rimborsi.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ESONERO DICHIARAZIONE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="esonero"
        icon={Heart}
        title="Esonero dalla dichiarazione dei redditi 2026"
        subtitle="Soglie di reddito per tipologia"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Sono <strong>esonerati dalla presentazione della dichiarazione</strong> i
          contribuenti che percepiscono esclusivamente redditi rientranti in specifiche
          categorie ed entro i limiti previsti. L'esonero non si applica se il
          contribuente deve restituire, in tutto o in parte, il bonus IRPEF.
        </p>
        <LegalTable
          headers={["Tipologia di reddito", "Soglia esonero", "Note"]}
          rows={ESONERI_DICHIARAZIONE.map((e) => [
            e.tipologia,
            formatEur(e.soglia),
            e.note,
          ])}
        />
        <p className="text-sm text-muted-foreground">
          Per i redditi di lavoro dipendente e pensione, il periodo di lavoro o pensione
          deve essere non inferiore a 365 giorni. Anche in caso di esonero, può comunque
          essere conveniente presentare la dichiarazione per recuperare detrazioni per
          oneri (spese mediche, mutui, ecc.) tramite il rimborso.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          VERSAMENTI F24
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="versamenti"
        icon={CalendarDays}
        title="Versamenti IRPEF e modello F24"
        subtitle="Saldo, acconti, scadenze e codici tributo"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il versamento dell'IRPEF avviene tramite{" "}
          <strong>modello F24</strong>, con codici tributo specifici per saldo e acconti.
          Le scadenze ordinarie per il 2026 sono:
        </p>
        <BulletList
          items={[
            "Saldo IRPEF + primo acconto: 30 giugno (oppure entro 30 giorni successivi con maggiorazione 0,40%)",
            "Secondo acconto: 30 novembre (in un'unica soluzione, non rateizzabile)",
            "Periodo di sospensione: 1-20 agosto (scadenze in questo intervallo slittano al 20 agosto senza maggiorazioni — art. 3-quater D.L. 16/2012)",
          ]}
        />
        <LegalTable
          headers={["Codice tributo", "Descrizione", "Scadenza"]}
          rows={CODICI_F24_IRPEF.map((c) => [c.codice, c.descrizione, c.scadenza])}
        />
        <AlertBox variant="info" title="Rateazione del saldo e primo acconto">
          <p>
            Il saldo IRPEF e il primo acconto possono essere <strong>rateizzati</strong> in
            più rate mensili. Sulle rate successive alla prima sono dovuti gli interessi
            nella misura prevista dalla normativa vigente. La rateazione non è ammessa per
            il secondo acconto.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SANZIONI E RAVVEDIMENTO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="sanzioni"
        icon={AlertTriangle}
        title="Sanzioni e ravvedimento operoso"
        subtitle="Omesso, insufficiente o tardivo versamento"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          In caso di omesso, insufficiente o tardivo versamento dell'IRPEF si
          applicano le sanzioni dell'art. 13 del{" "}
          <InlineNormLink
            text="D.Lgs. 471/1997"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471"
          />
          , come modificato dal{" "}
          <InlineNormLink
            text="D.Lgs. 87/2024"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87"
          />{" "}
          per le violazioni commesse dal 1° settembre 2024.
        </p>
        <LegalTable
          headers={["Tipo di ritardo", "Sanzione base", "Note"]}
          rows={[
            ["Entro 14 giorni", "0,083% per giorno", "Ridotta dal D.Lgs. 87/2024 (era 0,1%)"],
            ["Da 15 a 90 giorni", "12,5%", "Ridotta dal D.Lgs. 87/2024 (era 15%)"],
            ["Oltre 90 giorni", "25%", "Ridotta dal D.Lgs. 87/2024 (era 30%)"],
          ]}
        />
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] font-serif mt-6">
          Ravvedimento operoso
        </h3>
        <p className="text-base leading-relaxed">
          Il ravvedimento permette di sanare la violazione spontaneamente con sanzioni
          ridotte. Si versa l'imposta dovuta, gli interessi legali (1,60% annuo nel
          2026) e la sanzione ridotta secondo la tabella seguente:
        </p>
        <LegalTable
          headers={["Tipologia", "Termine", "Sanzione ridotta"]}
          rows={[
            ["Sprint", "Entro 14 giorni", "0,0833% × giorni × 1/10"],
            ["Breve", "15-30 giorni", "1,25% (12,5% × 1/10)"],
            ["Intermedio", "31-90 giorni", "1,39% (12,5% × 1/9)"],
            ["Lungo", "91 giorni - 1 anno", "3,125% (25% × 1/8)"],
            ["Ultrannuale", "1-2 anni", "3,5714% (25% × 1/7)"],
            ["Oltre 2 anni", "Oltre 2 anni", "4,1667% (25% × 1/6)"],
          ]}
        />
        <p className="text-sm text-muted-foreground">
          Vedi anche il nostro{" "}
          <a
            href="/ravvedimento-operoso"
            className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
          >
            calcolatore Ravvedimento Operoso
          </a>{" "}
          per il calcolo automatico delle sanzioni ridotte sulle violazioni IRPEF.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ERRORI COMUNI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="errori-comuni"
        icon={AlertTriangle}
        title="Errori comuni nel calcolo dell'IRPEF"
        subtitle="I principali fraintendimenti e come evitarli"
      />
      <div className="space-y-3">
        <AlertBox variant="warning" title="1. Confondere aliquota marginale e aliquota media">
          <p>
            L'errore più diffuso: pensare che l'aliquota dello scaglione di
            appartenenza si applichi all'intero reddito. Con un reddito di 35.000 €
            nel 2026, l'aliquota marginale è 33% ma l'aliquota media lorda è solo
            il 25%. Solo l'ultimo euro guadagnato è tassato al 33%.
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="2. Usare aliquote di anni diversi">
          <p>
            Errore commesso persino dal Governo nel calcolo degli acconti IRPEF: applicare
            nel 2026 le vecchie aliquote 35% invece delle nuove 33%, o viceversa, può
            generare differenze significative. Verificare sempre l'anno di
            riferimento e il periodo d'imposta.
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="3. Confondere deduzioni e detrazioni">
          <p>
            Le <strong>deduzioni</strong> (art. 10 TUIR) riducono il reddito imponibile
            prima del calcolo dell'imposta. Le <strong>detrazioni</strong> (artt.
            12-16-bis) riducono l'imposta lorda. Una deduzione di 1.000 € su
            un'aliquota del 33% risparmia 330 €; una detrazione di 1.000 € risparmia
            1.000 € pieni (con capienza).
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="4. Considerare la no tax area come esenzione assoluta">
          <p>
            La no tax area non è un'esenzione normativa, ma il risultato
            dell'equilibrio tra aliquota e detrazioni. Sopra la soglia l'imposta
            lorda cresce più velocemente della detrazione costante, generando imposta
            netta positiva. Inoltre, la no tax area varia per categoria (8.500 € dipendenti
            e pensionati, 5.500 € autonomi).
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="5. Dimenticare le addizionali">
          <p>
            Molti contribuenti pianificano solo l'IRPEF statale ignorando le
            addizionali regionali e comunali, che possono valere dall'1,2% al 3% del
            reddito imponibile, fino a 4 punti percentuali in totale. Per un reddito di
            40.000 € a Roma o Milano possono significare 500-800 € all'anno in più di
            imposte.
          </p>
        </AlertBox>
        <AlertBox variant="warning" title="6. Incapienza non considerata">
          <p>
            Se le detrazioni complessive superano l'imposta lorda, la parte eccedente
            non è rimborsabile (salvo specifiche eccezioni, come il bonus 100 € lavoratori
            dipendenti incapienti). Spese detraibili al 19% (es. mediche) possono non
            generare alcun beneficio se l'imposta lorda è bassa o nulla.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FONTI E RIFERIMENTI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="fonti"
        icon={Link2}
        title="Fonti e riferimenti istituzionali"
        subtitle="Tutte le fonti utilizzate per la redazione di questa pagina"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La pagina è stata redatta consultando esclusivamente fonti normative primarie e
          documenti istituzionali. Le fonti principali sono:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 text-base">
          <li>
            <a
              href="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1986-12-22;917"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
            >
              Normattiva — TUIR (DPR 917/1986) testo vigente
            </a>{" "}
            — testo consolidato del Testo Unico delle Imposte sui Redditi
          </li>
          <li>
            <a
              href="https://www.agenziaentrate.gov.it/portale/imposta-sul-reddito-delle-persone-fisiche-irpef-/aliquote-e-calcolo-dell-irpef"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
            >
              Agenzia delle Entrate — Aliquote e calcolo IRPEF
            </a>{" "}
            — pagina ufficiale con aggiornamento riforma 2026
          </li>
          <li>
            <a
              href="https://www.gazzettaufficiale.it/atto/serie_generale/caricaDettaglioAtto/originario?atto.dataPubblicazioneGazzetta=2025-12-30&atto.codiceRedazionale=25G00212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
            >
              Gazzetta Ufficiale — Legge 199/2025 (Bilancio 2026)
            </a>{" "}
            — pubblicazione GU Serie Generale n. 301 del 30/12/2025
          </li>
          <li>
            <a
              href="https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art11.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
            >
              Brocardi — Art. 11 TUIR commentato
            </a>{" "}
            — testo dell'articolo e prassi applicativa
          </li>
          <li>
            <a
              href="https://www.brocardi.it/testo-unico-imposte-redditi/titolo-i/capo-i/art13.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
            >
              Brocardi — Art. 13 TUIR (detrazioni per tipo di reddito)
            </a>
          </li>
          <li>
            <a
              href="https://www.mef.gov.it/inevidenza/Riforma-fiscale-le-novita-IRPEF/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
            >
              MEF — Nota illustrativa Riforma IRPEF 2022
            </a>{" "}
            — documento ministeriale con analisi degli effetti
          </li>
          <li>
            <a
              href="https://www.finanze.gov.it/it/il-dipartimento/fiscalita-nazionale/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
            >
              MEF — Dipartimento delle Finanze
            </a>{" "}
            — note tecniche e statistiche fiscali
          </li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="faq"
        icon={HelpCircle}
        title="Domande frequenti (FAQ)"
        subtitle="22 risposte alle domande più cercate sull'IRPEF 2026"
      />
      <FAQ items={faqData} />

      {/* ═══════════════════════════════════════════════════════════
          NORMATIVA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="normativa"
        icon={FileText}
        title="Normativa di riferimento"
        subtitle="Leggi, decreti e prassi che disciplinano l'IRPEF"
      />
      <NormativaRefTable items={normativaRiferimento} />
      <CircolariTable items={circolariMinisteriali} />
    </ToolLayout>
  );
}

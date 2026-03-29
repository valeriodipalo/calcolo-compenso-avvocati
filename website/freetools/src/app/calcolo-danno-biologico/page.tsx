import { HeartPulse, BookOpen, HelpCircle, Table, FileText, Shield, Gavel, Sparkles, Activity } from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { BulletList } from "@/components/shared/BulletList";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import Calcolatore from "@/components/calcolo-danno-biologico/Calcolatore";
import {
  sections,
  normativaRiferimento,
  micropermanentiData,
  milanoData,
  tunData,
  inailData,
  coefficientiMoltiplicatori,
  tabellaMicropermanenti,
  tabellaMilano2024,
  tabellaINAIL,
} from "@/data/calcolo-danno-biologico/dannoBiologicoData";
import { faqData } from "@/data/calcolo-danno-biologico/faqData";
import { JsonLd, breadcrumbSchema, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(n);

export const metadata: Metadata = {
  title: "Calcolo Danno Biologico 2026 | Tabelle e Calcolatore Online",
  description:
    "Calcola il danno biologico online: micropermanenti art. 139 CdA, macropermanenti con Tabelle Milano 2024 e TUN 2025. Guida completa aggiornata.",
  alternates: {
    canonical: "/calcolo-danno-biologico",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-danno-biologico",
    title: "Calcolo Danno Biologico 2026 | Tabelle e Calcolatore Online",
    description:
      "Calcola il danno biologico online: micropermanenti art. 139 CdA, macropermanenti con Tabelle Milano 2024 e TUN 2025. Guida completa aggiornata.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo Danno Biologico 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Danno Biologico 2026 | Tabelle e Calcolatore Online",
    description:
      "Calcola il danno biologico online: micropermanenti art. 139 CdA, macropermanenti con Tabelle Milano 2024 e TUN 2025. Guida completa aggiornata.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-danno-biologico",
  title: "Calcolo Danno Biologico 2026",
  shortTitle: "Danno Biologico",
  icon: HeartPulse,
  updatedDate: "Aggiornato Marzo 2026",
  heroImage: HERO_IMG,
  heroEyebrow: "Strumento Gratuito — Aggiornato Marzo 2026",
  heroTitle: "Calcolo Danno Biologico",
  heroDescription:
    "Calcolatore online gratuito per il risarcimento del danno biologico: micropermanenti (art. 139 CdA), macropermanenti con Tabelle Milano 2024 e Tabella Unica Nazionale 2025 (D.P.R. 12/2025). Guida completa con formule, tabelle e FAQ.",
  heroReference:
    "Artt. 138-139 D.Lgs. 209/2005 — D.P.R. 12/2025",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Dati aggiornati a marzo 2026. Tabelle Milano ed. 2024, TUN D.P.R. 12/2025, micropermanenti punto base 2026, tabella INAIL D.Lgs. 38/2000.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
    { label: "Tribunale di Milano", url: "https://tribunale-milano.giustizia.it" },
    { label: "INAIL", url: "https://www.inail.it" },
  ],
};

export default function CalcoloDannoBiologicoPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== Structured Data ===== */}

      {/* 1. BreadcrumbList */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Strumenti Legali Gratuiti", path: "/" },
          { name: "Calcolo Danno Biologico", path: "/calcolo-danno-biologico" },
        ])}
      />

      {/* 2. Article */}
      <JsonLd
        data={articleSchema({
          headline: "Calcolo Danno Biologico 2026: Tabelle Milano, TUN e Art. 139 CdA",
          description:
            "Guida completa al calcolo del danno biologico: micropermanenti art. 139 CdA, macropermanenti con Tabelle Milano 2024 e Tabella Unica Nazionale 2025, INAIL, personalizzazione e normativa.",
          path: "/calcolo-danno-biologico",
          datePublished: "2026-03-30",
          dateModified: "2026-03-30",
          image: HERO_IMG,
          sections: [
            "Cos'è il Danno Biologico",
            "Micropermanenti (Art. 139 CdA)",
            "Macropermanenti (Tabelle Milano 2024)",
            "Tabella Unica Nazionale 2025",
            "Invalidità Temporanea",
            "Danno Morale e Personalizzazione",
            "Danno Biologico INAIL",
            "Tabelle di Riferimento Complete",
            "Fonti e Riferimenti",
            "Domande Frequenti (FAQ)",
            "Normativa di Riferimento",
          ],
        })}
      />

      {/* 3. WebApplication */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Danno Biologico",
          description: "Calcola online il risarcimento del danno biologico con art. 139 CdA, Tabelle Milano 2024 e TUN 2025.",
          path: "/calcolo-danno-biologico",
          applicationCategory: "Legal Calculator",
        })}
      />

      {/* ===== Calcolatore ===== */}
      <Calcolatore />

      {/* ===== Definizione ===== */}
      <SectionTitle id="definizione" icon={HeartPulse} title="Cos'è il Danno Biologico" subtitle="Art. 138-139 D.Lgs. 209/2005 e giurisprudenza costituzionale" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>danno biologico</strong> è la lesione temporanea o permanente all'integrità psico-fisica della persona, suscettibile di accertamento medico-legale, che esplica un'incidenza negativa sulle attività quotidiane e sugli aspetti dinamico-relazionali della vita del danneggiato. La sua risarcibilità è indipendente dalla capacità del soggetto di produrre reddito e trova fondamento negli <InlineNormLink text="artt. 138 e 139 del D.Lgs. 209/2005" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" /> (Codice delle Assicurazioni Private) e nell'<InlineNormLink text="art. 32 della Costituzione" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione~art32" />, che tutela la salute come diritto fondamentale dell'individuo.
        </p>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209">
          Art. 138, comma 2, lett. a), D.Lgs. 209/2005: "Per danno biologico si intende la lesione temporanea o permanente all'integrità psico-fisica della persona, suscettibile di accertamento medico-legale, che esplica un'incidenza negativa sulle attività quotidiane e sugli aspetti dinamico-relazionali della vita del danneggiato, indipendentemente da eventuali ripercussioni sulla sua capacità di produrre reddito."
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          Il riconoscimento giuridico del danno biologico ha attraversato un percorso lungo e significativo. Negli anni Settanta il <strong>Tribunale di Genova</strong> elaborò per la prima volta una categoria di danno volta a risarcire la lesione dell'integrità fisica indipendentemente dalle conseguenze economiche. La svolta decisiva arrivò con la <strong>Corte Costituzionale</strong>, la quale nella sentenza n. 87 del 1979 sancì che la lesione dell'integrità fisica, in quanto violazione di un diritto inviolabile tutelato dall'<InlineNormLink text="art. 32 della Costituzione" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione~art32" />, deve essere risarcibile anche quando non derivante da reato, mediante l'applicazione dell'<InlineNormLink text="art. 2043 del Codice Civile" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2043" />.
        </p>
        <p className="text-base leading-relaxed">
          Le celebri <strong>sentenze gemelle</strong> delle Sezioni Unite della Cassazione del novembre 2008 (Cass. SS.UU. nn. 26972-26975/2008, c.d. sentenza {'"'}San Martino{'"'}) hanno consolidato il principio per cui il danno non patrimoniale è una <strong>categoria unitaria</strong>: le denominazioni {'"'}danno biologico{'"'}, {'"'}danno morale{'"'} e {'"'}danno esistenziale{'"'} hanno funzione meramente descrittiva. Il danno biologico si distingue dal <strong>danno morale</strong> (sofferenza interiore soggettiva) perché riguarda la componente dinamico-relazionale della vita del danneggiato, accertabile con perizia medico-legale. Il <strong>danno esistenziale</strong>, inteso come alterazione peggiorativa delle abitudini di vita, è stato definitivamente assorbito nella nozione di danno biologico dalla giurisprudenza successiva, evitando duplicazioni risarcitorie.
        </p>
        <AlertBox variant="info" title="Cass. SS.UU. 26972/2008 — Sentenza San Martino">
          <p className="leading-relaxed">
            Le Sezioni Unite hanno chiarito che il danno non patrimoniale deve essere interpretato unitariamente. In caso di lesione della salute, costituisce <strong>duplicazione risarcitoria</strong> la congiunta attribuzione del danno biologico e del danno esistenziale, appartenendo entrambi alla medesima area protetta dall'<InlineNormLink text="art. 32 Cost." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione~art32" />. Il danno morale (sofferenza interiore) mantiene una propria dimensione distinta ma deve essere valorizzato all'interno del valore complessivo del danno biologico tramite incrementi percentuali.
          </p>
        </AlertBox>
      </div>

      {/* ===== Micropermanenti ===== */}
      <SectionTitle id="micropermanenti" icon={Shield} title="Micropermanenti (Art. 139 CdA)" subtitle="Lesioni di lieve entità — 1-9% di invalidità permanente" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le <strong>micropermanenti</strong> sono le lesioni di lieve entità con invalidità permanente compresa tra l'1% e il 9%, che rappresentano circa il 70% dei sinistri gestiti dalle compagnie assicurative. La loro liquidazione è disciplinata dall'<InlineNormLink text="art. 139 del Codice delle Assicurazioni Private" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" /> (D.Lgs. 209/2005), che prevede una formula matematica standardizzata applicabile uniformemente su tutto il territorio nazionale.
        </p>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209">
          Art. 139, c. 1, lett. a), D.Lgs. 209/2005: "A titolo di danno biologico permanente, è liquidato [...] un importo crescente in misura più che proporzionale in relazione ad ogni punto percentuale di invalidità."
        </NormativaQuote>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5 text-center" style={{ borderRadius: "0.375rem" }}>
          <p className="text-lg font-mono font-bold text-[oklch(0.25_0.04_250)]">
            Danno = PuntoBase × Coefficiente × Punti IP × DemoltiplicatoreEtà
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            PuntoBase 2026 = {formatCurrency(micropermanentiData.puntoBase2026)} | ITT = {formatCurrency(micropermanentiData.ittGiornaliero2026)}/giorno | Personalizzazione max = {micropermanentiData.personalizzazioneMax}%
          </p>
        </div>
        <p className="text-base leading-relaxed">
          Il <strong>punto base</strong> viene rivalutato annualmente con decreto ministeriale in base alla variazione dell'indice ISTAT. Con il D.M. 18 luglio 2025, il valore del primo punto è stato fissato in <strong className="font-mono">{formatCurrency(micropermanentiData.puntoBase2026)}</strong> (decorrente da aprile 2025), con una rivalutazione dell'1,7% rispetto al valore 2024 di {formatCurrency(micropermanentiData.puntoBase2024)}. L'<strong>indennità giornaliera</strong> per l'ITT è pari a <strong className="font-mono">{formatCurrency(micropermanentiData.ittGiornaliero2026)}</strong> al giorno.
        </p>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Coefficienti moltiplicatori</h3>
        <p className="text-base leading-relaxed">
          I coefficienti sono predeterminati dalla norma e garantiscono l'incremento più che proporzionale richiesto dalla legge: il rapporto tra il coefficiente per 9 punti (2,3) e il coefficiente per 1 punto (1,0) è 2,3:1, mentre il rapporto tra i gradi di invalidità è 9:1.
        </p>
        <LegalTable
          headers={["Punti IP", "Coefficiente", "Valore punto 2024", "Valore punto 2026"]}
          rows={tabellaMicropermanenti.map((r) => [
            `${r.punti}`,
            r.coefficiente.toFixed(1),
            formatCurrency(r.valorePunto2024),
            formatCurrency(r.valorePunto2026),
          ])}
        />
        <p className="text-base leading-relaxed">
          Il <strong>demoltiplicatore per età</strong> riduce l'importo dello 0,5% per ogni anno di età a partire dall'undicesimo, secondo l'<InlineNormLink text="art. 5 della L. 57/2001" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2001-03-05;57" />. La riduzione non si applica ai soggetti che non hanno ancora compiuto 11 anni. Per un soggetto di 35 anni il demoltiplicatore è 1 − (35 − 10) × 0,5% = 1 − 12,5% = <strong className="font-mono">0,875</strong>.
        </p>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Esempio: 5 punti, età 35 anni, 20gg ITT, 15gg ITP al 60%</h3>
        <p className="text-base leading-relaxed">
          <strong>Danno biologico permanente:</strong> {formatCurrency(micropermanentiData.puntoBase2026)} × 1,5 (coefficiente per 5 punti) × 5 (punti IP) × 0,875 (demoltiplicatore età 35) = <strong className="font-mono">{formatCurrency(micropermanentiData.puntoBase2026 * 1.5 * 5 * 0.875)}</strong>.
        </p>
        <p className="text-base leading-relaxed">
          <strong>Invalidità temporanea:</strong> ITT = {formatCurrency(micropermanentiData.ittGiornaliero2026)} × 20 giorni = {formatCurrency(micropermanentiData.ittGiornaliero2026 * 20)}. ITP al 60% = {formatCurrency(micropermanentiData.ittGiornaliero2026)} × 60% × 15 giorni = {formatCurrency(micropermanentiData.ittGiornaliero2026 * 0.6 * 15)}. Totale temporaneo: <strong className="font-mono">{formatCurrency(micropermanentiData.ittGiornaliero2026 * 20 + micropermanentiData.ittGiornaliero2026 * 0.6 * 15)}</strong>.
        </p>
        <p className="text-base leading-relaxed">
          <strong>Totale complessivo (prima della personalizzazione):</strong> {formatCurrency(micropermanentiData.puntoBase2026 * 1.5 * 5 * 0.875 + micropermanentiData.ittGiornaliero2026 * 20 + micropermanentiData.ittGiornaliero2026 * 0.6 * 15)}. Con personalizzazione al 20% massimo: <strong className="font-mono">{formatCurrency((micropermanentiData.puntoBase2026 * 1.5 * 5 * 0.875 + micropermanentiData.ittGiornaliero2026 * 20 + micropermanentiData.ittGiornaliero2026 * 0.6 * 15) * 1.2)}</strong>.
        </p>
        <AlertBox variant="warning" title="Accertamento strumentale obbligatorio">
          <p className="leading-relaxed">
            L'<InlineNormLink text="art. 32, comma 3-ter, L. 27/2012" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-01-24;1" /> stabilisce che le lesioni di lieve entità che non siano suscettibili di <strong>accertamento clinico strumentale obiettivo</strong> non possono dare luogo a risarcimento per danno biologico permanente. La giurisprudenza ha chiarito che l'accertamento strumentale (radiografie, risonanze, ecografie) è decisivo nei casi dubbi, mentre resta sufficiente un dato clinico obiettivo se scientificamente compatibile con l'evento lesivo.
          </p>
        </AlertBox>
      </div>

      {/* ===== Macropermanenti ===== */}
      <SectionTitle id="macropermanenti" icon={Table} title="Macropermanenti (Tabelle Milano 2024)" subtitle="Lesioni di non lieve entità — 10-100% di invalidità permanente" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le <strong>macropermanenti</strong> sono lesioni con invalidità permanente compresa tra il 10% e il 100%. Fino all'entrata in vigore della Tabella Unica Nazionale, la loro liquidazione era governata dalle <strong>Tabelle del Tribunale di Milano</strong>, elevate a parametro para-normativo dalla <InlineNormLink text="Cassazione (sent. 12408/2011)" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059" />. Le Tabelle Milano restano il riferimento prevalente per tutti gli illeciti civili non rientranti nell'ambito della TUN (infortuni sul lavoro, cadute, responsabilità extracontrattuale generica).
        </p>
        <p className="text-base leading-relaxed">
          L'edizione 2024 delle Tabelle Milano, redatta dall'Osservatorio sulla Giustizia Civile, adotta un <strong>sistema a punto variabile</strong> nel quale il valore economico di ogni punto cresce in funzione del grado di invalidità e si riduce in funzione dell'età del danneggiato. Il punto base comprende due componenti: il <strong>punto biologico</strong> di {formatCurrency(milanoData.puntoBiologico)} e l'<strong>incremento per sofferenza</strong> di {formatCurrency(milanoData.incrementoSofferenza)}, per un valore totale per punto di <strong className="font-mono">{formatCurrency(milanoData.totalePunto)}</strong>.
        </p>
        <p className="text-base leading-relaxed">
          L'incremento per sofferenza varia in funzione della gravità: dall'1% al 9% l'incremento è del 25% fisso; dal 10% al 34% è progressivo dal 26% al 50%; dal 35% al 100% è del 50% fisso. La <strong>personalizzazione</strong> è ammessa fino al <strong className="font-mono">{milanoData.personalizzazioneMax}%</strong> per adeguare il risarcimento alle peculiarità del caso concreto.
        </p>
        <LegalTable
          headers={["Punti IP", "Biologico", "Sofferenza", "Totale"]}
          rows={tabellaMilano2024.map((r) => [
            `${r.punti}%`,
            formatCurrency(r.biologico),
            formatCurrency(r.sofferenza),
            formatCurrency(r.totale),
          ])}
        />
        <p className="text-sm text-muted-foreground mt-2">
          Valori base per il primo punto, moltiplicati per la percentuale di invalidità. Fonte: Tabelle Milano 2024, Prot. P.7646_24.
        </p>
        <AlertBox variant="info" title="Demoltiplicatore per età nelle Tabelle Milano">
          <p className="leading-relaxed">
            Il coefficiente demoltiplicatore demografico riduce il risarcimento in funzione dell'età del danneggiato al momento del sinistro. Il coefficiente vale 1,0 per un neonato e diminuisce progressivamente: a 30 anni circa 0,950, a 50 anni circa 0,885, a 70 anni circa 0,780. La decrescita non è lineare ma accelerata verso le età avanzate, riflettendo le tavole di mortalità ISTAT. L'ITT viene liquidata a <strong className="font-mono">{formatCurrency(milanoData.ittGiornaliero100)}</strong>/giorno ({formatCurrency(milanoData.ittBiologico)} biologico + {formatCurrency(milanoData.ittSofferenza)} sofferenza).
          </p>
        </AlertBox>
      </div>

      {/* ===== TUN 2025 ===== */}
      <SectionTitle id="tabella-unica-nazionale" icon={Gavel} title="Tabella Unica Nazionale 2025" subtitle="D.P.R. 13 gennaio 2025, n. 12 — In vigore dal 5 marzo 2025" />
      <div className="space-y-4">
        <AlertBox variant="success" title="Novità: Tabella Unica Nazionale in vigore">
          <p className="leading-relaxed">
            Dal <strong>5 marzo 2025</strong> è in vigore la Tabella Unica Nazionale per il risarcimento del danno biologico da macropermanenti, introdotta dal <InlineNormLink text="D.P.R. 13 gennaio 2025, n. 12" url="https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG" /> in attuazione dell'<InlineNormLink text="art. 138 del Codice delle Assicurazioni Private" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" />. Si tratta della prima tabella con valore <strong>normativo vincolante</strong> per tutti i giudici.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          La TUN si applica obbligatoriamente alla liquidazione del danno biologico per lesioni di <strong>non lieve entità</strong> (invalidità permanente dal 10% al 100%) derivanti da sinistri stradali e da responsabilità sanitaria (<InlineNormLink text="art. 7, comma 4, L. 24/2017 — Legge Gelli-Bianco" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-03-08;24" />). Per gli illeciti di diversa natura restano applicabili le Tabelle di Milano.
        </p>
        <p className="text-base leading-relaxed">
          La formula sottesa alla TUN è: <strong>Danno Biologico = Valore Base del Punto × Coefficiente Moltiplicatore Biologico × Coefficiente Demoltiplicatore Demografico × Punti IP</strong>. Il valore base del punto è stato fissato in <strong className="font-mono">{formatCurrency(tunData.valoreBasePunto)}</strong>, scelto per assicurare un raccordo omogeneo con i valori di Milano al 10% di invalidità. La TUN prevede tre fasce distinte (minimo, medio, massimo) che incorporano la componente di danno morale, consentendo al giudice una selezione consapevole.
        </p>
        <LegalTable
          headers={["Parametro", "Valore TUN 2025", "Confronto Milano 2024"]}
          rows={[
            ["Valore base punto", formatCurrency(tunData.valoreBasePunto), formatCurrency(milanoData.totalePunto)],
            ["ITT giornaliero", formatCurrency(tunData.ittGiornaliero), formatCurrency(milanoData.ittGiornaliero100)],
            ["Personalizzazione max", `${tunData.personalizzazioneMax}%`, `${milanoData.personalizzazioneMax}%`],
            ["Natura", "Normativa vincolante", "Giurisprudenziale (para-normativa)"],
            ["In vigore dal", tunData.inVigoreDal.split("-").reverse().join("/"), "Aggiornate periodicamente"],
            ["Ambito", "Sinistri stradali + resp. sanitaria", "Tutti gli illeciti civili"],
          ]}
        />
        <p className="text-base leading-relaxed">
          La differenza nei valori è significativa: il punto base TUN ({formatCurrency(tunData.valoreBasePunto)}) è inferiore di quasi il 46% rispetto al punto Milano ({formatCurrency(milanoData.totalePunto)}). Tuttavia, la TUN incorpora la componente morale/sofferenza nel valore base, mentre Milano la scinde in biologico e incremento per sofferenza. Il dibattito giurisprudenziale sulla congruità dei valori TUN è tuttora in corso.
        </p>
        <AlertBox variant="warning" title="Regime transitorio">
          <p className="leading-relaxed">
            La TUN si applica ai sinistri verificatisi dal 5 marzo 2025 in poi. Per i sinistri anteriori, la Cassazione (sent. 11319/2025) ha ammesso l'utilizzo della TUN in via equitativa come parametro di riferimento, senza obbligo vincolante. Il Tribunale di Milano ha rimesso la questione alla Cassazione con rinvio pregiudiziale ex <InlineNormLink text="art. 363-bis c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443" /> per chiarire l'applicabilità ai sinistri anteriori.
          </p>
        </AlertBox>
      </div>

      {/* ===== Invalidità Temporanea ===== */}
      <SectionTitle id="invalidita-temporanea" icon={Activity} title="Invalidità Temporanea" subtitle="ITT (totale) e ITP (parziale) — Importi giornalieri aggiornati" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Oltre alla componente di invalidità permanente, il danno biologico comprende la <strong>dimensione temporanea</strong>, ossia il periodo durante il quale il danneggiato ha sofferto di una ridotta capacità di svolgere le proprie attività abituali, prima del raggiungimento della stabilizzazione clinica. L'invalidità temporanea si divide in <strong>inabilità temporanea totale</strong> (ITT), quando il soggetto è completamente incapace di svolgere le proprie attività, e <strong>inabilità temporanea parziale</strong> (ITP), quando conserva solo parzialmente le proprie capacità funzionali.
        </p>
        <p className="text-base leading-relaxed">
          Gli importi giornalieri sono stabiliti dalla norma primaria e aggiornati annualmente con decreto ministeriale in base alla variazione ISTAT. Essi variano significativamente in base alla tabella applicabile al caso concreto.
        </p>
        <LegalTable
          headers={["Tabella", "ITT giornaliero (100%)", "Esempio ITP 50% × 20gg"]}
          rows={[
            ["Micropermanenti (art. 139)", formatCurrency(micropermanentiData.ittGiornaliero2026), formatCurrency(micropermanentiData.ittGiornaliero2026 * 0.5 * 20)],
            ["Tabelle Milano 2024", formatCurrency(milanoData.ittGiornaliero100), formatCurrency(milanoData.ittGiornaliero100 * 0.5 * 20)],
            ["TUN 2025", formatCurrency(tunData.ittGiornaliero), formatCurrency(tunData.ittGiornaliero * 0.5 * 20)],
          ]}
        />
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Esempio di calcolo</h3>
        <p className="text-base leading-relaxed">
          Un soggetto con 5 giorni di ITT e 25 giorni di ITP al 40% (regime micropermanenti): ITT = {formatCurrency(micropermanentiData.ittGiornaliero2026)} × 5 = {formatCurrency(micropermanentiData.ittGiornaliero2026 * 5)}. ITP = {formatCurrency(micropermanentiData.ittGiornaliero2026)} × 40% × 25 = {formatCurrency(micropermanentiData.ittGiornaliero2026 * 0.4 * 25)}. Totale: <strong className="font-mono">{formatCurrency(micropermanentiData.ittGiornaliero2026 * 5 + micropermanentiData.ittGiornaliero2026 * 0.4 * 25)}</strong>.
        </p>
        <p className="text-base leading-relaxed">
          Con le Tabelle di Milano, lo stesso periodo produrrebbe un importo decisamente superiore: {formatCurrency(milanoData.ittGiornaliero100)} × 5 + {formatCurrency(milanoData.ittGiornaliero100)} × 40% × 25 = <strong className="font-mono">{formatCurrency(milanoData.ittGiornaliero100 * 5 + milanoData.ittGiornaliero100 * 0.4 * 25)}</strong>. La scelta della tabella incide in modo rilevante anche sulla componente temporanea del risarcimento.
        </p>
        <AlertBox variant="info" title="Personalizzazione dell'invalidità temporanea">
          <p className="leading-relaxed">
            Nel regime delle micropermanenti e delle Tabelle Milano, l'importo per l'invalidità temporanea è fisso. La TUN ha introdotto una novità: il danno morale temporaneo può essere aumentato dal giudice in una fascia compresa tra il <strong>30% e il 60%</strong> del danno biologico temporaneo, valorizzando la sofferenza interiore del periodo di inabilità in circostanze particolari.
          </p>
        </AlertBox>
      </div>

      {/* ===== Danno Morale ===== */}
      <SectionTitle id="danno-morale" icon={Sparkles} title="Danno Morale e Personalizzazione" subtitle="Componente autonoma del danno non patrimoniale" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>danno morale</strong> rappresenta la sofferenza interiore soggettiva derivante dalla lesione dell'integrità psico-fisica: dolore fisico, vergogna, disistima di sé, paura e turbamento dell'equilibrio psichico. Dopo le sentenze gemelle del 2008, non è una voce autonomamente risarcibile ma è incorporata nel valore complessivo del danno biologico tramite incrementi percentuali, al fine di evitare duplicazioni risarcitorie.
        </p>
        <p className="text-base leading-relaxed">
          L'<InlineNormLink text="art. 138, comma 2, lett. e), del Codice delle Assicurazioni" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" /> prevede espressamente che la quota di danno biologico sia incrementata in via percentuale e progressiva per punto, al fine di considerare la componente del danno morale. Ciascuna tabella applica tale principio con modalità diverse.
        </p>
        <LegalTable
          headers={["Tabella", "Personalizzazione max", "Criteri principali"]}
          rows={[
            ["Micropermanenti (art. 139)", `${micropermanentiData.personalizzazioneMax}%`, "Condizioni soggettive del danneggiato — solo aumento"],
            ["TUN 2025 (D.P.R. 12/2025)", `${tunData.personalizzazioneMax}%`, "Sofferenza, impatto sulla vita, peculiarità soggettive — solo aumento"],
            ["Tabelle Milano 2024", `${milanoData.personalizzazioneMax}%`, "Età, professione, hobby, vita di relazione, intensità sofferenza — aumento e diminuzione"],
          ]}
        />
        <p className="text-base leading-relaxed">
          La <strong>personalizzazione</strong> non è un bonus automatico: deve essere allegata e provata dalla parte che la richiede. La Cass. 21939/2017 ha chiarito che possono giustificare l'aumento solo le conseguenze {'"'}del tutto anomale, eccezionali e affatto peculiari{'"'}; le conseguenze normali e indefettibili sono già incorporate nel valore tabellare.
        </p>
        <BulletList items={[
          "Impossibilità di proseguire un'attività professionale particolarmente qualificata (es. chirurgo con lesione all'arto superiore)",
          "Compromissione di attività sportive agonistiche o ludiche praticate con costanza documentata",
          "Incidenza della lesione sulla vita sessuale e di relazione del danneggiato",
          "Frustrazione di prospettive di vita particolarmente qualificate (es. giovane atleta, musicista)",
          "Sofferenza morale di particolare intensità documentata (perizia psicologica, testimonianze)",
        ]} />
        <AlertBox variant="warning" title="Onere della prova">
          <p className="leading-relaxed">
            L'onere di allegare e provare le circostanze che giustificano la personalizzazione grava sul <strong>danneggiato</strong>. Non è sufficiente una richiesta generica: occorre indicare specificamente le ragioni per cui il caso si discosta dalla media e fornire elementi di prova a supporto (documenti, testimonianze, perizie). Il giudice non può procedere d'ufficio alla personalizzazione. La base di calcolo deve essere il solo danno biologico {'"'}depurato{'"'} dalla componente morale già valorizzata (Cass. 25164/2020).
          </p>
        </AlertBox>
      </div>

      {/* ===== INAIL ===== */}
      <SectionTitle id="inail" icon={Shield} title="Danno Biologico INAIL" subtitle="D.Lgs. 23 febbraio 2000, n. 38 — Infortuni e malattie professionali" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<InlineNormLink text="INAIL" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38" /> gestisce un sistema di indennizzo per il danno biologico derivante da infortuni sul lavoro e malattie professionali, disciplinato dal <InlineNormLink text="D.Lgs. 23 febbraio 2000, n. 38" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38" />. Questo sistema presenta caratteristiche profondamente diverse dal risarcimento civilistico: l'indennizzo è generalmente inferiore e segue una metodologia di calcolo autonoma basata sulla tabella delle menomazioni.
        </p>
        <p className="text-base leading-relaxed">
          La prestazione erogata dall'INAIL varia in funzione del grado di menomazione accertato dal medico legale dell'istituto. Il sistema prevede tre fasce distinte, ciascuna con modalità di indennizzo differenti.
        </p>
        <LegalTable
          headers={["Fascia", "Percentuale", "Tipologia", "Descrizione"]}
          rows={tabellaINAIL.map((r) => [
            r.fascia,
            r.percentuale,
            r.tipologia,
            r.descrizione,
          ])}
        />
        <p className="text-base leading-relaxed">
          Per le menomazioni dal 6% al 15%, l'indennizzo in capitale è stato significativamente aumentato a partire dal 1° gennaio 2019, con un incremento medio di circa il 40% (D.M. 45/2019 — {'"'}Nuova Tabella degli indennizzi in capitale{'"'}). Per le menomazioni dal 16% al 100%, la rendita è composta da una quota per il danno biologico e una quota per le conseguenze patrimoniali, commisurata alla retribuzione del lavoratore.
        </p>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Danno differenziale</h3>
        <p className="text-base leading-relaxed">
          Il <strong>danno differenziale</strong> è la differenza tra il danno non patrimoniale civilistico (calcolato con le tabelle sopra illustrate) e l'indennizzo già erogato dall'INAIL. Il lavoratore può agire in responsabilità civile extracontrattuale verso terzi responsabili (diversi dal datore di lavoro) ai sensi degli <InlineNormLink text="artt. 2059 e 2087 c.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059" /> per ottenere la differenza tra quanto ricevuto dall'INAIL e il danno complessivamente subito. La giurisprudenza ha consolidato il principio per cui l'ammontare del risarcimento civilistico deve essere ridotto della somma già ricevuta dall'INAIL, al fine di evitare il {'"'}doppio ristoro{'"'} del medesimo danno.
        </p>
        <AlertBox variant="info" title="Franchigia INAIL">
          <p className="leading-relaxed">
            Per le menomazioni inferiori al <strong>{inailData.franchigiaMax}%</strong> (franchigia) l'INAIL non eroga alcun indennizzo per il danno biologico. Il lavoratore conserva comunque il diritto di agire in via civilistica nei confronti del responsabile del danno per ottenere il risarcimento integrale secondo le tabelle ordinarie (art. 139 CdA per le micropermanenti o Tabelle Milano per le macropermanenti).
          </p>
        </AlertBox>
      </div>

      {/* ===== Tabelle di Riferimento ===== */}
      <SectionTitle id="tabelle" icon={Table} title="Tabelle di Riferimento Complete" subtitle="Micropermanenti, Milano 2024 e INAIL" />
      <div className="space-y-6">
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-2 mb-3">Tabella Micropermanenti — Importi per età 30 anni</h3>
        <LegalTable
          headers={["Punti IP", "Coefficiente", "Valore punto 2024", "Valore punto 2026", "Importo 2024 (età 30)", "Importo 2026 (età 30)"]}
          rows={tabellaMicropermanenti.map((r) => [
            `${r.punti}`,
            r.coefficiente.toFixed(1),
            formatCurrency(r.valorePunto2024),
            formatCurrency(r.valorePunto2026),
            formatCurrency(r.importo2024Eta30),
            formatCurrency(r.importo2026Eta30),
          ])}
        />
        <p className="text-sm text-muted-foreground">
          Importi calcolati con demoltiplicatore per età 30 anni. Fonte: Art. 139 D.Lgs. 209/2005, D.M. 18 luglio 2025.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">Tabella Milano 2024 — Valori per punto di invalidità</h3>
        <LegalTable
          headers={["Punti IP", "Biologico", "Sofferenza", "Totale"]}
          rows={tabellaMilano2024.map((r) => [
            `${r.punti}%`,
            formatCurrency(r.biologico),
            formatCurrency(r.sofferenza),
            formatCurrency(r.totale),
          ])}
        />
        <p className="text-sm text-muted-foreground">
          Valori base senza demoltiplicatore per età. Fonte: Tabelle Milano 2024, Prot. P.7646_24.
        </p>

        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">Tabella INAIL — Fasce di indennizzo</h3>
        <LegalTable
          headers={["Fascia", "Percentuale", "Tipologia", "Descrizione"]}
          rows={tabellaINAIL.map((r) => [
            r.fascia,
            r.percentuale,
            r.tipologia,
            r.descrizione,
          ])}
        />
        <p className="text-sm text-muted-foreground">
          Fonte: D.Lgs. 38/2000, D.M. 12 luglio 2000, D.M. 45/2019 (nuova tabella indennizzi in capitale).
        </p>
      </div>

      {/* ===== Fonti ===== */}
      <SectionTitle id="fonti" icon={FileText} title="Fonti e Riferimenti" subtitle="Fonti istituzionali e giurisprudenziali" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          I dati e le informazioni riportati in questa guida sono tratti dalle seguenti fonti istituzionali e normative aggiornate.
        </p>
        <BulletList items={[
          "Normattiva.it — Portale della normativa vigente (artt. 138-139 D.Lgs. 209/2005, art. 2059 c.c., D.Lgs. 38/2000): https://www.normattiva.it",
          "Gazzetta Ufficiale — D.P.R. 13 gennaio 2025, n. 12 (TUN), decreti ministeriali aggiornamento ISTAT: https://www.gazzettaufficiale.it",
          "Tribunale di Milano — Tabelle Milano 2024, Prot. P.7646_24: https://tribunale-milano.giustizia.it",
          "INAIL — Tabelle indennizzi danno biologico, D.Lgs. 38/2000: https://www.inail.it",
          "Ministero delle Imprese e del Made in Italy — D.M. 18 luglio 2025 (aggiornamento micropermanenti): https://www.mimit.gov.it",
          "Corte di Cassazione — Sentenze SS.UU. 26972/2008, 12408/2011, 21939/2017, 25164/2020, 11319/2025",
        ]} />
      </div>

      {/* ===== FAQ ===== */}
      <SectionTitle id="faq" icon={HelpCircle} title="Domande Frequenti (FAQ)" subtitle="Le risposte ai dubbi più comuni sul danno biologico" />
      <FAQ items={faqData} />

      {/* ===== Normativa ===== */}
      <SectionTitle id="normativa" icon={BookOpen} title="Normativa di Riferimento" />
      <NormativaRefTable items={normativaRiferimento} />
    </ToolLayout>
  );
}

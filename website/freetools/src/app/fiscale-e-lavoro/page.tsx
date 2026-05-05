import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/lib/schema";
import { getToolsByCluster } from "@/data/toolRegistry";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";

export const metadata: Metadata = {
  title: "Fiscale e Lavoro 2026: Guida e Calcolatori",
  description:
    "Guida ai calcoli fiscali e del lavoro per professionisti: scorporo IVA, TFR e ravvedimento operoso. Calendario fiscale 2026, normativa e calcolatori gratuiti.",
  alternates: {
    canonical: "https://www.avvocatotools.it/fiscale-e-lavoro",
  },
  openGraph: {
    title: "Fiscale e Lavoro 2026: Guida e Calcolatori",
    description:
      "Guida ai calcoli fiscali e del lavoro per professionisti: scorporo IVA, TFR e ravvedimento operoso. Calendario fiscale 2026, normativa e calcolatori gratuiti.",
    url: "https://www.avvocatotools.it/fiscale-e-lavoro",
    locale: "it_IT",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fiscale e Lavoro 2026: Guida e Calcolatori",
    description:
      "Guida ai calcoli fiscali e del lavoro per professionisti: scorporo IVA, TFR e ravvedimento operoso. Calendario fiscale 2026, normativa e calcolatori gratuiti.",
  },
};

export default function FiscaleELavoroPage() {
  const tools = getToolsByCluster("fiscale");

  return (
    <div className="bg-background">
      {/* JSON-LD */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Fiscale e Lavoro", path: "/fiscale-e-lavoro" },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline:
            "Calcoli Fiscali e del Lavoro: Guida e Strumenti per Professionisti 2026",
          description:
            "Guida completa ai calcoli fiscali e del lavoro per professionisti e datori di lavoro: scorporo IVA, TFR e ravvedimento operoso, con calendario fiscale 2026 e strumenti di calcolo gratuiti.",
          path: "/fiscale-e-lavoro",
          datePublished: "2026-05-05",
          dateModified: "2026-05-05",
          image: "https://www.avvocatotools.it/apple-icon.png",
          sections: [
            "Strumenti di Calcolo",
            "Le tre aree dei calcoli fiscali e del lavoro",
            "IVA e fatturazione: scorporo dell'imposta",
            "TFR e fine rapporto: liquidazione del lavoratore",
            "Ravvedimento operoso: regolarizzare errori e ritardi",
            "Differenze tra scorporo IVA, TFR e ravvedimento operoso",
            "Calendario fiscale 2026: scadenze principali",
            "Obblighi del libero professionista: forfettario e ordinario",
            "Quando applicare ciascun calcolatore",
            "Quadro normativo",
            "Domande frequenti",
          ],
        })}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[oklch(0.97_0.005_250)] border-b border-border"
      >
        <div className="container py-2">
          <ol className="flex items-center gap-1.5 text-xs text-[oklch(0.50_0.02_250)]">
            <li>
              <Link href="/" className="hover:text-[oklch(0.25_0.04_250)] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-[oklch(0.35_0.04_250)] font-medium">Fiscale e Lavoro</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[oklch(0.25_0.04_250)] pb-14 pt-10">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-[oklch(0.75_0.10_85)] text-sm font-semibold uppercase tracking-widest mb-3">
              Guida Completa
            </p>
            <h1 className="text-3xl md:text-4xl text-white leading-tight mb-4">
              Calcoli Fiscali e del Lavoro: Guida e Strumenti per Professionisti
            </h1>
            <p className="text-[oklch(0.75_0.05_250)] text-lg leading-relaxed">
              Scorporo IVA, TFR e ravvedimento operoso. Tre istituti chiave per la
              compliance fiscale e contabile, con calendario delle scadenze 2026,
              normativa aggiornata e calcolatori gratuiti.
            </p>
            <p className="text-[oklch(0.55_0.03_250)] text-xs mt-4">
              Ultimo aggiornamento: 5 maggio 2026 · Redazione AvvocatoTools
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-5xl mx-auto">

          {/* Tool Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-2">
              Strumenti di Calcolo
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Calcolatori gratuiti aggiornati al 2026. Seleziona lo strumento più adatto al
              tuo caso.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className="group bg-white border border-border p-5 transition-all hover:border-[oklch(0.75_0.10_85)] hover:shadow-md"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    <div
                      className="bg-[oklch(0.25_0.04_250)] p-2 w-fit mb-3"
                      style={{ borderRadius: "0.375rem" }}
                    >
                      <Icon className="w-5 h-5 text-[oklch(0.75_0.10_85)]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-1">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                      {tool.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[oklch(0.45_0.12_250)] group-hover:text-[oklch(0.35_0.15_250)] transition-colors">
                      Vai al calcolatore <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Le tre aree */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Le tre aree dei calcoli fiscali e del lavoro
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Il professionista italiano (avvocato, commercialista, consulente) e il datore di
              lavoro affrontano quotidianamente una serie di calcoli che attraversano tre aree
              normative complementari ma distinte: la gestione dell'<strong>IVA in fattura</strong>,
              la liquidazione del <strong>TFR</strong> al termine del rapporto di lavoro
              subordinato, e la <strong>regolarizzazione spontanea</strong> di errori o ritardi
              tributari mediante il ravvedimento operoso. Sono ambiti governati da fonti
              normative diverse — il <strong>DPR 633/1972</strong> per l'IVA,
              l'<strong>art. 2120 c.c.</strong> e la L. 297/1982 per il TFR,
              il <strong>D.Lgs. 472/1997</strong> per le sanzioni tributarie — ma uniti da un
              principio trasversale: la precisione tecnica del calcolo è la prima forma di
              compliance.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Questa guida orienta tra i tre istituti, ne sintetizza le definizioni
              giuridiche e le ipotesi pratiche di applicazione, illustra le differenze
              fondamentali e propone un calendario delle principali scadenze fiscali per il
              2026. Ogni sezione rimanda al rispettivo calcolatore interattivo per il
              dettaglio operativo.
            </p>
          </section>

          {/* IVA e fatturazione */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              IVA e fatturazione: scorporo dell'imposta
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Lo scorporo dell'IVA è l'operazione tecnico-contabile che separa, da un importo
              lordo, la base imponibile e l'imposta. Si fonda sugli{" "}
              <strong>articoli 13 e 21 del DPR 633/1972</strong>: l'art. 21, c. 2, impone alla
              fattura di indicare distintamente "corrispettivi e altri dati necessari per la
              determinazione della base imponibile, aliquota, ammontare dell'imposta e
              dell'imponibile". Lo scorporo entra in gioco ogni volta che il professionista
              riceve un corrispettivo "tutto compreso", deve emettere fattura partendo da un
              prezzo lordo concordato, oppure riceve fatture passive da registrare in
              contabilità con detrazione dell'IVA.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              La formula corretta è la divisione per il coefficiente
              <strong> (1 + aliquota)</strong>: con l'aliquota ordinaria al 22%, un lordo di
              122 euro corrisponde a un imponibile di 100 euro e a un'IVA di 22 euro. L'errore
              più comune — sottrarre il 22% dal lordo — produce risultati matematicamente
              scorretti. Per la formula completa, le quattro aliquote 2026 (4%, 5%, 10%, 22%),
              gli esempi per la parcella avvocato con CPA al 4% e split payment per la PA,
              consulta il{" "}
              <Link
                href="/scorporo-iva"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore di scorporo IVA
              </Link>.
            </p>
          </section>

          {/* TFR */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              TFR e fine rapporto: liquidazione del lavoratore
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Il Trattamento di Fine Rapporto è disciplinato dall'<strong>art. 2120 del
              Codice Civile</strong>, che riconosce al prestatore di lavoro subordinato un
              compenso al termine del rapporto, e dalla{" "}
              <strong>L. 29 maggio 1982, n. 297</strong> che ne ha completato la disciplina
              istituendo presso l'INPS il <strong>Fondo di Garanzia</strong>. Si tratta di una
              forma di retribuzione differita: per ogni anno di lavoro il datore accantona la
              retribuzione annua lorda divisa per <strong>13,5</strong>, decurtata dello
              0,50% destinato al fondo previdenziale. Il fondo accantonato al 31 dicembre di
              ogni anno è poi rivalutato secondo la formula composta da un tasso fisso
              dell'<strong>1,5% annuo</strong> più il <strong>75% dell'indice ISTAT FOI</strong>.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              La tassazione segue il regime separato dell'<strong>art. 19 del TUIR</strong>
              (DPR 917/1986), con un'aliquota media calcolata sul reddito di riferimento
              degli ultimi cinque anni. La rivalutazione annua è invece soggetta a imposta
              sostitutiva del <strong>17%</strong> (innalzata dall'11% per effetto della
              L. 190/2014): acconto al 90% entro il 16 dicembre (codice tributo 1712), saldo
              entro il 16 febbraio dell'anno successivo (codice 1713). Per il calcolo
              completo lordo + netto + rivalutazione, dipendenti pubblici e colf,
              utilizza il{" "}
              <Link
                href="/calcolo-tfr"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore TFR
              </Link>.
            </p>
          </section>

          {/* Ravvedimento operoso */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Ravvedimento operoso: regolarizzare errori e ritardi
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Il ravvedimento operoso è lo strumento deflattivo del contenzioso tributario
              che consente al contribuente di sanare spontaneamente omissioni e ritardi
              versando l'imposta dovuta, gli interessi al tasso legale e una sanzione
              ridotta. È disciplinato dall'<strong>articolo 13 del D.Lgs. 472/1997</strong>,
              profondamente riformato dal <strong>D.Lgs. 87/2024</strong>: per le violazioni
              commesse dal 1° settembre 2024 la sanzione base per omesso versamento è scesa
              dal 30% al <strong>25%</strong>. Il presupposto resta invariato: la violazione
              non deve essere stata constatata e non devono essere iniziati accessi,
              ispezioni o verifiche.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Le riduzioni si articolano per fasce temporali: <strong>sprint</strong> entro 14
              giorni (0,0833% al giorno), <strong>breve</strong> entro 30 giorni (1/10 del
              minimo), <strong>intermedio</strong> entro 90 giorni, <strong>lungo</strong>
              entro il termine della dichiarazione, <strong>ultrannuale</strong> oltre.
              L'art. 13-bis introdotto dalla riforma 2024 ammette anche il ravvedimento
              parziale o frazionato. Per il calcolo automatico per IRPEF, IRES, IVA, IMU e
              ritenute con codici tributo F24 e gestione dei due regimi (pre/post
              1° settembre 2024), utilizza il{" "}
              <Link
                href="/ravvedimento-operoso"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore di ravvedimento operoso
              </Link>.
            </p>
          </section>

          {/* Differenze (comparison table) */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Differenze tra scorporo IVA, TFR e ravvedimento operoso
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-6">
              I tre istituti rispondono a logiche giuridiche e momenti operativi diversi.
              Lo scorporo IVA è un'operazione di compliance contabile ricorrente nelle
              registrazioni di fatturato attivo e passivo; il TFR è un debito di lavoro che
              matura progressivamente e si liquida alla cessazione del rapporto; il
              ravvedimento è una procedura straordinaria di sanatoria post-violazione.
              Ecco un confronto strutturato:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-border" style={{ borderRadius: "0.375rem" }}>
                <thead>
                  <tr className="bg-[oklch(0.97_0.005_250)]">
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Caratteristica</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Scorporo IVA</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">TFR</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Ravvedimento operoso</th>
                  </tr>
                </thead>
                <tbody className="text-[oklch(0.30_0.04_250)]">
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Funzione</td>
                    <td className="p-3 border-b border-border">Compliance contabile (separare imponibile e imposta)</td>
                    <td className="p-3 border-b border-border">Retribuzione differita (tutela del lavoratore)</td>
                    <td className="p-3 border-b border-border">Sanatoria (regolarizzare violazioni tributarie)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Normativa primaria</td>
                    <td className="p-3 border-b border-border">DPR 633/1972, artt. 13, 21</td>
                    <td className="p-3 border-b border-border">Art. 2120 c.c., L. 297/1982, art. 19 TUIR</td>
                    <td className="p-3 border-b border-border">D.Lgs. 472/1997, art. 13 (rif. D.Lgs. 87/2024)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Soggetti interessati</td>
                    <td className="p-3 border-b border-border">Tutti i soggetti passivi IVA (esclusi forfettari per attività ordinaria)</td>
                    <td className="p-3 border-b border-border">Datori di lavoro e lavoratori subordinati</td>
                    <td className="p-3 border-b border-border">Tutti i contribuenti che hanno commesso una violazione</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Momento applicativo</td>
                    <td className="p-3 border-b border-border">Continuo: ogni fattura emessa/ricevuta</td>
                    <td className="p-3 border-b border-border">Maturazione mensile, liquidazione a fine rapporto</td>
                    <td className="p-3 border-b border-border">Straordinario: solo dopo una violazione e prima della constatazione</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Calcolo</td>
                    <td className="p-3 border-b border-border">Lordo / (1 + aliquota); riga per riga se aliquote miste</td>
                    <td className="p-3 border-b border-border">RAL annua / 13,5 + rivalutazione 1,5% + 75% FOI ISTAT</td>
                    <td className="p-3 border-b border-border">Imposta + interessi legali + sanzione ridotta (frazione del minimo)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Tributo / aliquota 2026</td>
                    <td className="p-3 border-b border-border">IVA al 4% / 5% / 10% / 22%</td>
                    <td className="p-3 border-b border-border">Imposta sostitutiva 17% sulla rivalutazione; tassazione separata sul TFR</td>
                    <td className="p-3 border-b border-border">Sanzione base 25% (post 87/2024); interessi legali 1,60%</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Scadenze chiave</td>
                    <td className="p-3 border-b border-border">Liquidazione mensile/trimestrale; dichiarazione IVA 30 aprile</td>
                    <td className="p-3 border-b border-border">Acconto imposta 16 dicembre; saldo 16 febbraio</td>
                    <td className="p-3 border-b border-border">Entro 14/30/90 giorni o entro il termine della dichiarazione</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Sanzioni in caso di errore</td>
                    <td className="p-3">Versamento IVA insufficiente: dal 12,5% al 25%; detrazione indebita fino al 70%</td>
                    <td className="p-3">Responsabilità civile verso il lavoratore; sanzione per ritardato versamento sostitutiva</td>
                    <td className="p-3">Versamento parziale invalida il ravvedimento; resta dovuta la sanzione piena (mitigato da art. 13-bis)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Calendario fiscale 2026 */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Calendario fiscale 2026: scadenze principali per il professionista
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-6">
              Il rispetto delle scadenze fiscali è il primo presidio per evitare sanzioni.
              Riportiamo le date chiave del 2026 per professionisti, datori di lavoro e
              titolari di partita IVA, distinte per imposta e adempimento. Per le scadenze
              non rispettate è generalmente possibile attivare il ravvedimento operoso entro
              il termine della dichiarazione relativa all'anno della violazione.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-border" style={{ borderRadius: "0.375rem" }}>
                <thead>
                  <tr className="bg-[oklch(0.97_0.005_250)]">
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Data</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Adempimento</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Soggetti</th>
                  </tr>
                </thead>
                <tbody className="text-[oklch(0.30_0.04_250)]">
                  {[
                    { d: "16 gennaio", a: "Versamento IVA mensile dicembre 2025 e ritenute IRPEF", s: "IVA mensili, sostituti d'imposta" },
                    { d: "16 febbraio", a: "Saldo imposta sostitutiva TFR (codice 1713); INPS artigiani/commercianti 4° trimestre 2025; INAIL saldo 2025 + acconto 2026", s: "Datori di lavoro, artigiani, commercianti" },
                    { d: "16 marzo", a: "Trasmissione Certificazione Unica (CU); saldo IVA annuale 2025; IVA mensile febbraio", s: "Sostituti d'imposta, partite IVA" },
                    { d: "30 aprile", a: "Dichiarazione IVA annuale 2025; modello IVA TR 1° trimestre 2026; bollo scritture contabili digitali", s: "Tutte le partite IVA" },
                    { d: "16 maggio", a: "IVA 1° trimestre 2026; INPS artigiani/commercianti 1° trimestre", s: "IVA trimestrali, artigiani, commercianti" },
                    { d: "30 giugno", a: "Saldo IRPEF 2025 e 1° acconto 2026; saldo e 1° acconto IRES e IRAP", s: "Professionisti, imprenditori, società" },
                    { d: "30 luglio", a: "Versamento imposte da dichiarazione con maggiorazione 0,40%", s: "Chi differisce dal 30 giugno" },
                    { d: "30 settembre", a: "Presentazione Modello 730/2026 (anno d'imposta 2025)", s: "Lavoratori dipendenti e pensionati" },
                    { d: "31 ottobre", a: "Presentazione telematica Modello Redditi PF, SP, SC", s: "Partite IVA, società" },
                    { d: "2 novembre", a: "Modello 770/2026 (anno d'imposta 2025); IRAP/Redditi telematico", s: "Sostituti d'imposta" },
                    { d: "30 novembre", a: "2° acconto IRPEF, IRES e IRAP per il 2026", s: "Tutti i contribuenti tenuti agli acconti" },
                    { d: "16 dicembre", a: "Acconto imposta sostitutiva TFR (codice 1712, 90% rivalutazione); saldo IMU; IVA mensile novembre", s: "Datori di lavoro, proprietari immobili" },
                    { d: "31 dicembre", a: "Termine ultimo per ravvedimento operoso ordinario sulle violazioni dell'anno", s: "Tutti i contribuenti" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="p-3 border-b border-border font-medium whitespace-nowrap">{row.d} 2026</td>
                      <td className="p-3 border-b border-border">{row.a}</td>
                      <td className="p-3 border-b border-border">{row.s}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground">
              Le date che cadono di sabato, domenica o festività sono prorogate al primo
              giorno lavorativo successivo. Lo scadenzario completo dell'Agenzia delle
              Entrate è consultabile su{" "}
              <a
                href="https://www1.agenziaentrate.gov.it/servizi/scadenzario/main.php"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                agenziaentrate.gov.it
              </a>.
            </p>
          </section>

          {/* Obblighi del professionista */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Obblighi del libero professionista: forfettario e ordinario
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Il libero professionista titolare di partita IVA è soggetto a un articolato
              sistema di obblighi fiscali, contabili e previdenziali, modulati a seconda del
              regime adottato. La scelta tra <strong>regime forfettario</strong> e
              <strong> regime ordinario</strong> incide su tassazione, gestione dell'IVA,
              fatturazione e contabilità.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Regime forfettario
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Disciplinato dall'<strong>art. 1, commi 54-89, L. 190/2014</strong>, è
              accessibile fino a <strong>85.000 euro</strong> di ricavi annui (limite alzato
              dal 2023). Il reddito imponibile si determina applicando ai ricavi un
              coefficiente di redditività per codice ATECO; sull'imponibile si applica
              un'imposta sostitutiva del <strong>15%</strong> (5% per le nuove attività nei
              primi cinque anni) che assorbe IRPEF, addizionali e IRAP. Il forfettario
              opera in <strong>franchigia IVA</strong>: non addebita né detrae imposta. Dal
              1° gennaio 2024 è obbligato alla <strong>fatturazione elettronica</strong> per
              tutti gli emessi, con la dicitura specifica "Operazione senza applicazione
              dell'IVA, ai sensi art. 1, commi 54-89, L. 190/2014". Per gli iscritti alla
              Gestione Artigiani e Commercianti è prevista la riduzione del 35% dei
              contributi INPS.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Regime ordinario
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Si applica oltre la soglia di 85.000 euro o per chi opta esplicitamente. Il
              reddito si determina sottraendo dai ricavi i costi inerenti effettivamente
              sostenuti (affitto studio, utenze, attrezzature, contributi, formazione). Si
              applicano le aliquote IRPEF progressive 2026: <strong>23%</strong> fino a
              15.000 euro, <strong>25%</strong> da 15.000 a 28.000 euro, <strong>35%</strong>
              da 28.000 a 55.000 euro, <strong>43%</strong> oltre, più addizionali regionali
              e comunali. Il professionista è soggetto passivo IVA con liquidazione mensile
              o trimestrale, è tenuto alla dichiarazione IVA annuale, alla tenuta dei
              registri IVA e dei libri contabili (giornale, inventari, cespiti) e alla loro
              <strong> conservazione decennale</strong> ex art. 2220 c.c. e art. 8 dello
              Statuto del Contribuente (L. 212/2000). Quando emette fattura per la PA, deve
              applicare lo <strong>split payment</strong> ex art. 17-ter DPR 633/1972.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Contributi previdenziali
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              I professionisti senza Cassa autonoma sono iscritti alla{" "}
              <strong>Gestione Separata INPS</strong>: l'aliquota totale per il 2026 è del
              <strong> 26,07%</strong> (25% IVS + 0,72% INAIL + 0,35% ISCRO), come da
              circolare INPS n. 8 del 3 febbraio 2026. Gli iscritti a Casse autonome (Cassa
              Forense per gli avvocati, INARCASSA per architetti e ingegneri, ENPACL per i
              consulenti del lavoro, ENPAF per i farmacisti) versano direttamente alle
              rispettive Casse secondo le aliquote stabilite. Nel regime forfettario i
              contributi previdenziali sono l'unica voce deducibile dal reddito forfettario
              prima del calcolo dell'imposta sostitutiva.
            </p>
          </section>

          {/* Quando applicare ciascun calcolatore */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Quando applicare ciascun calcolatore: casi pratici
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Vediamo gli scenari più frequenti nella pratica del professionista e del
              datore di lavoro, con il rinvio allo strumento adatto.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Avvocato che emette parcella con IVA inclusa
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Quando il cliente concorda un compenso "tutto compreso", l'avvocato deve
              ricavare imponibile, CPA al 4% (art. 11 L. 576/1980), IVA al 22% e ritenuta
              d'acconto del 20% (art. 25 DPR 600/1973) partendo dal lordo. La parcella
              deve mostrare separatamente compenso, spese generali al 15% (art. 2 D.M.
              55/2014), CPA, imponibile IVA e IVA. Il{" "}
              <Link
                href="/scorporo-iva"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore di scorporo IVA
              </Link>
              {" "}gestisce automaticamente l'avvocato + CPA, e per la parcella completa è
              disponibile il{" "}
              <Link
                href="/calcolo-fattura-avvocato"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore della fattura avvocato
              </Link>.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              HR che chiude un rapporto di lavoro subordinato
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Alla cessazione del rapporto, l'ufficio del personale liquida il TFR maturato
              applicando la formula dell'art. 2120 c.c.: somma delle retribuzioni annue
              lorde divise per 13,5, ridotte dello 0,5%, più la rivalutazione composta. La
              liquidazione finale subisce la tassazione separata ex art. 19 TUIR con
              aliquota media calcolata sul reddito di riferimento. Il{" "}
              <Link
                href="/calcolo-tfr"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore TFR
              </Link>
              {" "}restituisce lordo, netto e dettaglio rivalutazione anno per anno.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Contribuente che ha dimenticato un F24
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Se il professionista si accorge di un mancato versamento (IRPEF, IVA, ritenute,
              IMU) prima che l'Agenzia delle Entrate notifichi qualunque controllo, può
              attivare il ravvedimento operoso versando con un unico F24 imposta + interessi
              al tasso legale (1,60% per il 2026, D.M. 10 dicembre 2025) + sanzione ridotta.
              Il{" "}
              <Link
                href="/ravvedimento-operoso"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore di ravvedimento operoso
              </Link>
              {" "}determina automaticamente la fascia (sprint, breve, intermedio, lungo,
              ultrannuale), gestisce la differenza tra regime pre e post 1° settembre 2024 e
              fornisce i codici tributo per la compilazione del modello F24.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Datore di lavoro: acconto imposta sostitutiva TFR
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Entro il 16 dicembre il datore versa l'acconto al 90% dell'imposta
              sostitutiva sulla rivalutazione TFR (codice tributo 1712), con saldo entro il
              16 febbraio successivo (codice 1713). Il calcolo richiede di stimare la
              rivalutazione dell'anno corrente sulla base del FOI ISTAT pubblicato. Il{" "}
              <Link
                href="/calcolo-tfr"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore TFR
              </Link>
              {" "}include la voce rivalutazione annua e l'imposta sostitutiva al 17%.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Professionista forfettario che ha emesso fattura tardiva
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Anche il forfettario deve emettere fattura entro 12 giorni dall'effettuazione
              dell'operazione. La tardiva emissione di fattura elettronica è sanzionabile
              dall'art. 6 del D.Lgs. 471/1997: il ravvedimento è ammesso e si calcola sul
              quanto dovuto. Il{" "}
              <Link
                href="/ravvedimento-operoso"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore di ravvedimento
              </Link>
              {" "}gestisce anche la specifica casistica della tardiva trasmissione SdI.
            </p>
          </section>

          {/* Normativa */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Quadro normativo
            </h2>
            <NormativaRefTable
              items={[
                {
                  norma: "DPR 26 ottobre 1972, n. 633",
                  descrizione: "Testo Unico IVA — articoli 13 (base imponibile), 21 (fattura), 17-ter (split payment)",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633",
                },
                {
                  norma: "Art. 2120 c.c.",
                  descrizione: "Trattamento di fine rapporto: formula di calcolo e rivalutazione",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120",
                },
                {
                  norma: "Art. 2220 c.c.",
                  descrizione: "Conservazione decennale dei libri e documenti contabili",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2220",
                },
                {
                  norma: "L. 29 maggio 1982, n. 297",
                  descrizione: "Disciplina del TFR e Fondo di Garanzia INPS",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1982-05-29;297",
                },
                {
                  norma: "Art. 19 DPR 22 dicembre 1986, n. 917 (TUIR)",
                  descrizione: "Tassazione separata del TFR e delle indennità di fine rapporto",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1986-12-22;917~art19",
                },
                {
                  norma: "D.Lgs. 18 dicembre 1997, n. 472",
                  descrizione: "Sanzioni amministrative tributarie — art. 13 (ravvedimento operoso) e art. 13-bis (ravvedimento parziale)",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472",
                },
                {
                  norma: "D.Lgs. 18 dicembre 1997, n. 471",
                  descrizione: "Sanzioni in materia di imposte dirette, IVA e riscossione",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471",
                },
                {
                  norma: "L. 27 luglio 2000, n. 212",
                  descrizione: "Statuto dei diritti del contribuente — art. 8 (conservazione documenti), art. 10 (errori formali)",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2000-07-27;212",
                },
                {
                  norma: "L. 23 dicembre 2014, n. 190",
                  descrizione: "Regime forfettario — art. 1 commi 54-89; rivalutazione TFR aliquota sostitutiva 17% (art. 1 c. 623)",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190",
                },
                {
                  norma: "D.Lgs. 14 giugno 2024, n. 87",
                  descrizione: "Riforma del sistema sanzionatorio tributario (in vigore dal 29 giugno 2024)",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87",
                },
                {
                  norma: "Art. 25 DPR 29 settembre 1973, n. 600",
                  descrizione: "Ritenuta d'acconto del 20% sui compensi dei lavoratori autonomi",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600~art25",
                },
                {
                  norma: "Circolare INPS 3 febbraio 2026, n. 8",
                  descrizione: "Aliquote contributive Gestione Separata 2026 (totale 26,07%)",
                  url: "https://www.inps.it/it/it/inps-comunica/notizie/dettaglio-news-page.news.2026.02.gestione-separata-le-aliquote-contributive-per-il-2026.html",
                },
                {
                  norma: "D.M. Economia 10 dicembre 2025",
                  descrizione: "Saggio degli interessi legali per il 2026 (1,60%)",
                  url: "https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg",
                },
              ]}
            />
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-6">
              Domande frequenti
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Quali sono i principali adempimenti fiscali del professionista?",
                  a: "I principali adempimenti del professionista titolare di partita IVA sono: emissione e ricezione di fatture elettroniche tramite il Sistema di Interscambio, liquidazione periodica IVA (mensile o trimestrale), tenuta dei registri IVA e dei libri contabili (giornale, inventari, cespiti), versamento di IRPEF/IRES e IRAP, presentazione del Modello Redditi PF entro il 31 ottobre e della Dichiarazione IVA annuale entro il 30 aprile, versamento dei contributi previdenziali (Gestione Separata INPS o Cassa professionale), conservazione decennale della documentazione (art. 2220 c.c.).",
                },
                {
                  q: "Quali sono le scadenze fiscali principali del 2026?",
                  a: "Le scadenze cardine del 2026 sono: 16 marzo (saldo IVA 2025 e CU), 30 aprile (Dichiarazione IVA annuale), 30 giugno (saldo IRPEF/IRES/IRAP 2025 e 1° acconto 2026), 30 settembre (Modello 730), 31 ottobre (Modello Redditi PF telematico), 30 novembre (2° acconto imposte dirette), 16 dicembre (saldo IMU, acconto imposta sostitutiva TFR codice 1712), 31 dicembre (termine ultimo per il ravvedimento operoso ordinario sulle violazioni dell'anno).",
                },
                {
                  q: "Qual è la differenza tra regime forfettario e regime ordinario?",
                  a: "Il regime forfettario è accessibile fino a 85.000 euro di ricavi annui, applica un'imposta sostitutiva del 15% (5% per nuove attività) sul reddito determinato forfettariamente con un coefficiente di redditività per ATECO, opera in franchigia IVA e non consente la deduzione dei costi reali. Il regime ordinario non ha soglie di accesso, applica le aliquote IRPEF progressive (dal 23% al 43%) sul reddito determinato sottraendo i costi effettivi dai ricavi, prevede la gestione ordinaria dell'IVA con detrazione e impone la tenuta della contabilità ordinaria.",
                },
                {
                  q: "Come si calcola lo scorporo dell'IVA da un importo lordo?",
                  a: "La formula corretta è: imponibile = lordo / (1 + aliquota in decimale). Con aliquota al 22%, dividere il lordo per 1,22; con il 10%, dividere per 1,10; con il 5%, dividere per 1,05; con il 4%, dividere per 1,04. L'IVA è la differenza tra lordo e imponibile. Sottrarre direttamente la percentuale al lordo è matematicamente errato perché l'aliquota si applica all'imponibile, non al totale comprensivo di imposta.",
                },
                {
                  q: "Come si calcola il TFR di un dipendente?",
                  a: "Il TFR si calcola dividendo la retribuzione annua lorda per 13,5 (formula art. 2120 c.c.), decurtando lo 0,5% destinato al fondo previdenziale. L'accantonamento di ogni anno (escluso quello di maturazione) viene rivalutato al 31 dicembre con la formula composta da un tasso fisso dell'1,5% più il 75% dell'aumento dell'indice ISTAT FOI rispetto al dicembre precedente. La rivalutazione è soggetta a imposta sostitutiva del 17% (acconto 16 dicembre, saldo 16 febbraio).",
                },
                {
                  q: "Cos'è il ravvedimento operoso e come funziona dopo il D.Lgs. 87/2024?",
                  a: "Il ravvedimento operoso (art. 13 D.Lgs. 472/1997) consente al contribuente di sanare spontaneamente una violazione tributaria versando imposta, interessi legali e sanzione ridotta, prima della constatazione dell'amministrazione. Per le violazioni dal 1° settembre 2024 la sanzione base per omesso versamento è del 25% (era 30%) e si applicano riduzioni crescenti col tempo: sprint entro 14 giorni, breve entro 30, intermedio entro 90, lungo entro la dichiarazione, ultrannuale oltre. L'art. 13-bis ammette ora anche il ravvedimento parziale o frazionato.",
                },
                {
                  q: "Quando un professionista deve fare la dichiarazione IVA?",
                  a: "Tutti i titolari di partita IVA in regime ordinario o semplificato devono presentare la Dichiarazione IVA annuale entro il 30 aprile dell'anno successivo. I forfettari, operando in franchigia IVA, non sono tenuti a presentarla. Chi opera con liquidazione trimestrale invia anche il Modello IVA TR entro il mese successivo a ciascun trimestre, e tutti i soggetti IVA mensili o trimestrali devono trasmettere la comunicazione LIPE (liquidazioni periodiche) ogni trimestre.",
                },
                {
                  q: "Qual è l'aliquota dei contributi della Gestione Separata INPS per il 2026?",
                  a: "Per il 2026, la circolare INPS n. 8 del 3 febbraio 2026 ha fissato l'aliquota totale al 26,07%, suddivisa in 25% per la componente IVS (Invalidità, Vecchiaia, Superstiti), 0,72% per l'assicurazione infortuni (INAIL) e 0,35% per l'ISCRO (l'indennità di disoccupazione per professionisti). I professionisti iscritti a una Cassa autonoma (Cassa Forense, INARCASSA, ENPACL ecc.) versano invece direttamente alla rispettiva Cassa con aliquote proprie.",
                },
                {
                  q: "Il forfettario è obbligato alla fatturazione elettronica?",
                  a: "Sì, dal 1° gennaio 2024 tutti i forfettari sono obbligati alla fatturazione elettronica per le operazioni emesse e devono ricevere e conservare le fatture elettroniche tramite il Sistema di Interscambio (SdI). L'obbligo era stato introdotto gradualmente dal 1° luglio 2022 per chi superava i 25.000 euro, poi esteso a tutti i forfettari indipendentemente dal volume di ricavi. Le fatture devono recare la dicitura 'Operazione senza applicazione dell'IVA, ai sensi art. 1, commi 54-89, L. 190/2014'.",
                },
                {
                  q: "Cosa succede se non rispetto una scadenza fiscale?",
                  a: "Il mancato rispetto di una scadenza fiscale comporta sanzioni amministrative la cui entità varia per tipologia di violazione e tempistica. Per omesso versamento la sanzione base è del 25% (post D.Lgs. 87/2024). Tuttavia, se il contribuente si accorge dell'omissione prima di un controllo, può attivare il ravvedimento operoso versando l'imposta dovuta, gli interessi al tasso legale (1,60% per il 2026) e la sanzione ridotta secondo la fascia temporale: si va dallo 0,0833% al giorno entro 14 giorni fino a 1/7 del minimo oltre il termine della dichiarazione.",
                },
                {
                  q: "Per quanto tempo devo conservare i documenti fiscali?",
                  a: "L'art. 2220 del Codice Civile e l'art. 8 dello Statuto del Contribuente (L. 212/2000) impongono la conservazione minima decennale dei libri contabili, delle fatture e di tutta la corrispondenza relativa all'attività. Se il professionista intende avvalersi di agevolazioni fiscali specifiche, è opportuno conservare la documentazione probatoria anche oltre il decennio per dimostrare il diritto in caso di verifica. La conservazione può essere cartacea o digitale: in quest'ultimo caso è dovuta l'imposta di bollo sulle scritture (entro 120 giorni dalla chiusura dell'esercizio).",
                },
                {
                  q: "Posso applicare il ravvedimento operoso a qualsiasi violazione tributaria?",
                  a: "No. Il ravvedimento operoso è ammesso fino a quando la violazione non sia stata constatata e fino a quando il contribuente non abbia ricevuto formale notifica dell'inizio di accessi, ispezioni o verifiche dall'amministrazione finanziaria (art. 13 D.Lgs. 472/1997). Sono ravvedibili violazioni formali, sostanziali e di omesso versamento; non sono invece ravvedibili tradizionalmente le violazioni in materia di contributi previdenziali, sebbene il D.L. 19/2024 abbia introdotto un regime specifico di ravvedimento contributivo dal 1° settembre 2024.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="group border border-border bg-white"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <summary className="cursor-pointer p-4 text-sm font-semibold text-[oklch(0.25_0.04_250)] list-none flex items-center justify-between">
                    {item.q}
                    <span className="text-[oklch(0.50_0.02_250)] group-open:rotate-180 transition-transform ml-2">
                      ▾
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-[oklch(0.35_0.04_250)] leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Cross-cluster tools */}
          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-lg font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Potrebbe servirti anche
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { slug: "calcolo-fattura-avvocato", title: "Calcolo Fattura Avvocato" },
                { slug: "calcolo-compenso", title: "Calcolo Compenso Avvocato" },
                { slug: "calcolo-interessi-legali", title: "Calcolo Interessi Legali" },
                { slug: "calcolo-interessi-moratori", title: "Calcolo Interessi Moratori" },
              ].map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/${tool.slug}`}
                  className="group flex items-center gap-3 p-3 bg-[oklch(0.98_0.005_250)] hover:bg-[oklch(0.96_0.01_85)] border border-border transition-colors"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)] group-hover:text-[oklch(0.35_0.15_250)] transition-colors">
                    {tool.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="mt-10 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Le informazioni contenute in questa pagina hanno carattere meramente informativo
              e non costituiscono parere legale o fiscale. Aliquote, importi e riferimenti
              normativi sono aggiornati alla data di ultima modifica. Per questioni specifiche
              si consiglia di rivolgersi a un commercialista o a un avvocato abilitato.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

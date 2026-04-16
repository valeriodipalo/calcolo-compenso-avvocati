import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/lib/schema";
import { getToolsByCluster } from "@/data/toolRegistry";

export const metadata: Metadata = {
  title: "Parcella Avvocato: Compenso, Fattura e Parametri 2026",
  description:
    "Guida ai compensi forensi 2026: differenza tra compenso, parcella e fattura. Parametri DM 55/2014, tariffa forense, equo compenso e calcolatori gratuiti.",
  alternates: {
    canonical: "https://www.avvocatotools.it/compensi-forensi",
  },
  openGraph: {
    title: "Parcella Avvocato: Compenso, Fattura e Parametri 2026",
    description:
      "Differenza tra compenso, parcella e fattura dell'avvocato. Parametri forensi, tariffa forense, equo compenso e calcolatori gratuiti.",
    url: "https://www.avvocatotools.it/compensi-forensi",
    locale: "it_IT",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parcella Avvocato: Compenso, Fattura e Parametri 2026",
    description:
      "Differenza tra compenso, parcella e fattura dell'avvocato. Parametri forensi, tariffa forense, equo compenso e calcolatori gratuiti.",
  },
};

export default function CompensiForensiPage() {
  const tools = getToolsByCluster("compensi");

  return (
    <div className="bg-background">
      {/* JSON-LD */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compenso e Fatturazione", path: "/compensi-forensi" },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline:
            "Compensi Forensi: Parcella, Fattura e Parametri dell'Avvocato — Guida 2026",
          description:
            "Guida completa ai compensi forensi: cos'è il compenso, differenza tra parcella e fattura, parametri DM 55/2014, equo compenso e strumenti di calcolo gratuiti.",
          path: "/compensi-forensi",
          datePublished: "2026-04-16",
          dateModified: "2026-04-16",
          image: "https://www.avvocatotools.it/apple-icon.png",
          sections: [
            "Strumenti di Calcolo",
            "Il compenso dell'avvocato",
            "Parcella e fattura: le differenze",
            "Compenso, parcella, fattura, onorario: confronto terminologico",
            "La nota spese e i costi accessori",
            "Quando si applicano i parametri forensi",
            "L'equo compenso",
            "Quadro normativo di riferimento",
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
              <Link
                href="/"
                className="hover:text-[oklch(0.25_0.04_250)] transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">
              ›
            </li>
            <li className="text-[oklch(0.35_0.04_250)] font-medium">
              Compenso e Fatturazione
            </li>
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
              Compensi Forensi: Parcella, Fattura e Parametri dell'Avvocato
            </h1>
            <p className="text-[oklch(0.75_0.05_250)] text-lg leading-relaxed">
              Cos'è il compenso, quando si applica la tariffa forense, come si legge
              la parcella e qual è la differenza con la fattura. Guida con calcolatori
              gratuiti aggiornata al 2026.
            </p>
            <p className="text-[oklch(0.55_0.03_250)] text-xs mt-4">
              Ultimo aggiornamento: 16 aprile 2026 · Redazione AvvocatoTools
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
              Calcolatori gratuiti aggiornati al 2026. Seleziona lo strumento
              più adatto al tuo caso.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          {/* Il compenso dell'avvocato */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Il compenso dell'avvocato: cos'è e come si determina
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Il <strong>compenso dell'avvocato</strong> è il corrispettivo dovuto al
              professionista per l'attività legale svolta. Ai sensi dell'
              <strong>art. 2233 del Codice Civile</strong> e dell'
              <strong>art. 13 della Legge 247/2012</strong> (ordinamento della professione
              forense), il compenso è determinato in primo luogo dall'accordo tra avvocato
              e cliente, che può assumere qualsiasi forma purché espressa chiaramente prima o
              durante l'incarico. In assenza di accordo scritto, o quando è il giudice a
              dover liquidare le spese processuali, entrano in gioco i{" "}
              <strong>parametri forensi</strong> stabiliti dal{" "}
              <strong>D.M. 10 marzo 2014, n. 55</strong>, aggiornato dal{" "}
              <strong>D.M. 13 agosto 2022, n. 147</strong> (in vigore dal 23 ottobre 2022).
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              I parametri forensi suddividono l'attività giudiziale in quattro fasi —
              studio della controversia, fase introduttiva, fase istruttoria e fase decisionale
              — e assegnano a ciascuna un valore medio che può variare del ±50%. Al compenso
              si aggiungono le spese generali forfettarie del 15%, il contributo alla Cassa
              Forense (CPA) del 4% e l'IVA al 22%. Il D.M. 147/2022 ha inoltre introdotto
              un parametro indicativo per la <strong>tariffazione oraria</strong> compreso tra
              200 e 500 euro per ora, liberamente concordabile tra le parti.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Per simulare con precisione il compenso secondo le 28 tabelle parametriche —
              dalle cause civili ordinarie agli arbitrati, dalla mediazione alle controversie
              tributarie — utilizza il nostro{" "}
              <Link
                href="/calcolo-compenso"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore del compenso avvocato
              </Link>
              .
            </p>
          </section>

          {/* Parcella e fattura */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Parcella e fattura: differenza e uso corretto
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Nel linguaggio comune si usano spesso come sinonimi, ma{" "}
              <strong>parcella</strong> e <strong>fattura</strong> hanno natura giuridica
              distinta. La <strong>parcella</strong> (o <em>notula</em>) è il documento
              consuntivo con cui l'avvocato riepilogra le attività svolte e richiede il
              pagamento del proprio compenso: descrive le fasi dell'incarico, i compensi
              per ciascuna voce e le spese anticipate, ma non è di per sé un documento
              fiscale. La <strong>fattura</strong>, invece, è il documento fiscale
              obbligatorio disciplinato dall'<strong>art. 21 del DPR 633/72</strong>{" "}
              (Testo Unico IVA) che deve essere emessa per ogni operazione imponibile. Nella
              fatturazione elettronica, la parcella corrisponde al codice documento{" "}
              <strong>TD06</strong> e la fattura ordinaria al codice <strong>TD01</strong>.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              La fattura dell'avvocato si compone di più voci: il compenso professionale,
              le spese forfettarie (15%), il contributo CPA (4%), l'IVA (22%) e, se
              applicabile, la ritenuta d'acconto (20%). In regime forfettario ex{" "}
              <strong>L. 190/2014</strong>, l'avvocato emette fattura senza IVA e senza
              ritenuta, con codice natura N2.2. Dal 1° gennaio 2024, l'obbligo di
              fatturazione elettronica tramite il Sistema di Interscambio (SdI) si applica a
              tutti i professionisti, compresi i forfettari. Per calcolare con precisione
              sia il totale diretto che lo scorporo inverso, utilizza il nostro{" "}
              <Link
                href="/calcolo-fattura-avvocato"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore della fattura avvocato
              </Link>
              .
            </p>
          </section>

          {/* Comparison table — hub-exclusive */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Compenso, parcella, fattura e onorario: le differenze
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-6">
              Il lessico dei compensi forensi è ricco di termini — compenso, onorario, parcella,
              notula, tariffa forense, nota spese, parametri — spesso usati in modo impreciso.
              La tabella seguente chiarisce il significato corretto di ciascun termine, la sua
              origine normativa e il suo stato attuale.
            </p>
            <div className="overflow-x-auto mb-4">
              <table
                className="w-full text-sm border border-border"
                style={{ borderRadius: "0.375rem" }}
              >
                <thead>
                  <tr className="bg-[oklch(0.97_0.005_250)]">
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Termine
                    </th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Significato
                    </th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Riferimento normativo
                    </th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Stato attuale
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[oklch(0.30_0.04_250)]">
                  {[
                    {
                      termine: "Compenso",
                      significato:
                        "Il corrispettivo economico spettante all'avvocato per la prestazione professionale svolta",
                      norma: "Art. 2233 c.c., art. 13 L. 247/2012",
                      stato: "Termine vigente e ufficiale",
                    },
                    {
                      termine: "Onorario",
                      significato:
                        "Termine storico equivalente al compenso; usato nel vecchio sistema tariffario con diritti e onorari separati",
                      norma: "Vecchie tariffe forensi (DM 1994, ora abrogato)",
                      stato: "Superato; abrogato dal DL 1/2012",
                    },
                    {
                      termine: "Tariffa forense",
                      significato:
                        "Sistema tariffario con minimi e massimi vincolanti in vigore fino al 2012. Prevedeva «diritti» per atti e «onorari» per attività",
                      norma: "DM 8 aprile 2004, n. 127 (abrogato)",
                      stato: "Abrogata; sostituita dai parametri DM 55/2014",
                    },
                    {
                      termine: "Parametri forensi",
                      significato:
                        "Criteri ministeriali applicati dal giudice in sede di liquidazione o in assenza di accordo scritto. Non stabiliscono minimi vincolanti tra privati",
                      norma: "DM 55/2014, aggiornato dal DM 147/2022",
                      stato: "Vigente dal 23 ottobre 2022",
                    },
                    {
                      termine: "Parcella (o notula)",
                      significato:
                        "Documento consuntivo che riepilogra le attività svolte e il compenso richiesto. Non è di per sé un documento fiscale",
                      norma: "Uso professionale; codice TD06 SdI",
                      stato: "In uso; il documento fiscale equivalente è la fattura",
                    },
                    {
                      termine: "Fattura",
                      significato:
                        "Documento fiscale obbligatorio che certifica la prestazione ai fini IVA e del reddito. Dal 2024 obbligatoriamente elettronica per tutti",
                      norma: "Art. 21 DPR 633/72; codice TD01 SdI",
                      stato: "Obbligatoria per tutti dal 1° gennaio 2024",
                    },
                    {
                      termine: "Nota spese",
                      significato:
                        "Documento allegato alla parcella/fattura che dettaglia le spese anticipate in nome del cliente (contributo unificato, marche da bollo, spese di notifica)",
                      norma: "Art. 15 DPR 633/72; art. 2 DM 55/2014",
                      stato: "In uso; le spese elencate sono escluse dall'imponibile IVA",
                    },
                  ].map((row) => (
                    <tr key={row.termine}>
                      <td className="p-3 border-b border-border font-medium whitespace-nowrap">
                        {row.termine}
                      </td>
                      <td className="p-3 border-b border-border">{row.significato}</td>
                      <td className="p-3 border-b border-border text-xs">{row.norma}</td>
                      <td className="p-3 border-b border-border">{row.stato}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground">
              La differenza pratica più rilevante: con le <strong>vecchie tariffe forensi</strong> esistevano
              minimi inderogabili per legge; con i <strong>parametri attuali</strong> non ci sono minimi
              legali, ma il giudice non può liquidare meno del 50% del valore medio tabellare senza
              specifica motivazione. Per i contraenti forti (banche, PA, grandi imprese) la{" "}
              <strong>Legge 49/2023</strong> reintroduce di fatto un minimo pari ai parametri ministeriali.
            </p>
          </section>

          {/* La nota spese */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              La nota spese e i costi accessori nella parcella
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Oltre al compenso professionale, la parcella dell'avvocato comprende una serie
              di <strong>costi accessori</strong> che è importante conoscere per verificare la
              correttezza del documento ricevuto. L'<strong>art. 2 del D.M. 55/2014</strong>{" "}
              prevede che all'avvocato spetti, in aggiunta al compenso, il rimborso delle
              spese forfettarie nella misura fissa del <strong>15% del compenso</strong>: questa
              voce copre le spese generali di studio (affitto, utenze, segreteria, software) senza
              necessità di documentazione analitica. È obbligatoria e non può essere ridotta nemmeno
              dal giudice in sede di liquidazione.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Le <strong>spese documentate</strong> — quelle effettivamente anticipate
              dall'avvocato nel nome e per conto del cliente — si suddividono in due categorie
              fiscalmente diverse. Le <strong>spese esenti</strong> ex{" "}
              <strong>art. 15 DPR 633/72</strong> (contributo unificato, marche da bollo, diritti
              di copia, spese di notifica) sono escluse dall'imponibile IVA e vengono rimborsate
              al netto. Le <strong>spese imponibili</strong> (trasferte, perizie di parte, visure
              camerali) sono invece soggette all'IVA del 22%. La <strong>nota spese</strong>{" "}
              è il documento allegato alla parcella che elenca in modo analitico tutte le spese
              anticipate, distinguendo tra esenti e imponibili, consentendo al cliente di verificare
              ciascuna voce.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Per calcolare con esattezza tutte le voci della fattura — dal compenso base alle spese
              accessorie, dal calcolo diretto allo scorporo inverso — utilizza il nostro{" "}
              <Link
                href="/calcolo-fattura-avvocato"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore della fattura avvocato
              </Link>{" "}
              con supporto per regime ordinario, forfettario e split payment PA.
            </p>
          </section>

          {/* Quando si applicano i parametri forensi */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Quando si applicano i parametri forensi: i casi pratici
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              I parametri forensi non hanno carattere vincolante nell'accordo tra avvocato e
              cliente: le parti sono libere di concordare qualsiasi compenso, purché espresso in
              forma scritta. I parametri entrano in gioco in tre situazioni specifiche disciplinate
              dall'<strong>art. 1 del D.M. 55/2014</strong>.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Liquidazione giudiziale delle spese di lite
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Quando il giudice condanna il soccombente al pagamento delle spese processuali
              (art. 91 c.p.c.), liquida il compenso del legale vincitore in base ai parametri
              del D.M. 55/2014. Il giudice è tenuto a indicare le fasi liquidate e i valori
              scelti (art. 4, c. 5, D.M. 55/2014). I valori possono variare tra il minimo
              (−50% del medio) e il massimo (+50% del medio) senza obbligo di motivazione specifica:
              superare questi limiti richiede invece motivazione espressa, secondo la modifica
              introdotta dal D.M. 147/2022 che ha soppresso le parole «di regola».
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Assenza di accordo scritto tra avvocato e cliente
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Se avvocato e cliente non hanno concordato il compenso in forma scritta prima o durante
              l'incarico, e nasce una controversia sul pagamento, il professionista può agire
              giudizialmente utilizzando i parametri come base di calcolo. L'avvocato può
              richiedere al Consiglio dell'Ordine un <strong>parere di congruità</strong>{" "}
              (art. 636 c.p.c.) che consente poi di ottenere un decreto ingiuntivo provvisoriamente
              esecutivo per il recupero del credito professionale. Il cliente può opporsi entro
              40 giorni dalla notifica.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Prestazioni nell'interesse di terzi o d'ufficio
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              I parametri si applicano anche quando l'avvocato svolge prestazioni
              nell'interesse di soggetti terzi o per incarichi imposti dalla legge: difensore
              d'ufficio, gratuito patrocinio, curatore fallimentare. In questi casi il compenso
              viene liquidato dall'autorità giudiziaria, con riduzione del 50% prevista
              dall'art. 130 D.P.R. 115/2002 per il gratuito patrocinio. Per simulare il calcolo
              in tutti questi scenari — compresi aumenti per pluralità di parti, riduzioni e accessori
              — utilizza il nostro{" "}
              <Link
                href="/calcolo-compenso"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore del compenso avvocato
              </Link>{" "}
              con tutte le 28 tabelle parametriche.
            </p>
          </section>

          {/* L'equo compenso */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              L'equo compenso: le garanzie del professionista e del cliente
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              La <strong>Legge 21 aprile 2023, n. 49</strong> ha introdotto la disciplina
              dell'<strong>equo compenso</strong> per tutelare gli avvocati (e gli altri
              professionisti) nei rapporti con i cosiddetti «contraenti forti»: banche, istituti
              finanziari, imprese assicurative, Pubblica Amministrazione e imprese con più di 50
              dipendenti o ricavi superiori a 10 milioni di euro. La legge stabilisce che il compenso
              si considera equo quando è conforme ai parametri ministeriali del D.M. 55/2014:
              qualsiasi accordo che preveda un compenso inferiore ai parametri con questi soggetti è
              nullo di diritto.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Sono espressamente dichiarate <strong>nulle</strong> le clausole contrattuali che:
              impongono un compenso inferiore ai parametri, obbligano il professionista ad anticipare
              le spese senza rimborso, attribuiscono al committente la facoltà di modificare
              unilateralmente le condizioni, o prevedono la rinuncia alle spese forfettarie del 15%.
              La nullità opera a favore del professionista e può essere fatta valere in giudizio
              anche dopo l'esecuzione del contratto.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              L'equo compenso <strong>non si applica</strong> nei rapporti con privati
              consumatori o piccole imprese: in questi casi il compenso resta liberamente
              concordabile. Resta tuttavia l'obbligo del <strong>preventivo informativo</strong>{" "}
              ex art. 13, c. 5, L. 247/2012: l'avvocato deve comunicare al cliente, prima di
              iniziare l'incarico, la prevedibile misura del costo della prestazione. Per
              verificare se il compenso proposto è congruo rispetto ai parametri, utilizza il
              nostro{" "}
              <Link
                href="/calcolo-compenso"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore del compenso avvocato
              </Link>
              .
            </p>
          </section>

          {/* Normativa */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Quadro normativo di riferimento
            </h2>
            <div className="overflow-x-auto">
              <table
                className="w-full text-sm border border-border"
                style={{ borderRadius: "0.375rem" }}
              >
                <thead>
                  <tr className="bg-[oklch(0.97_0.005_250)]">
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Norma
                    </th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Argomento
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[oklch(0.30_0.04_250)]">
                  {[
                    {
                      norma: "Art. 2233 c.c.",
                      desc: "Compenso del prestatore d'opera intellettuale — determinazione in primo luogo dall'accordo tra le parti",
                    },
                    {
                      norma: "L. 31 dicembre 2012, n. 247, art. 13",
                      desc: "Ordinamento della professione forense — disciplina del compenso, obbligo di preventivo, divieto patto di quota lite puro",
                    },
                    {
                      norma: "D.M. 10 marzo 2014, n. 55",
                      desc: "Parametri forensi — tabelle ufficiali per la liquidazione giudiziale dei compensi degli avvocati (28 tabelle, 17 scaglioni)",
                    },
                    {
                      norma: "D.M. 13 agosto 2022, n. 147",
                      desc: "Aggiornamento parametri forensi — variazione uniforme ±50%, nuovi scaglioni per cause di alto valore, tariffazione oraria; in vigore dal 23/10/2022",
                    },
                    {
                      norma: "L. 21 aprile 2023, n. 49",
                      desc: "Equo compenso — tutela dei professionisti nei rapporti con contraenti forti (banche, PA, imprese con più di 50 dipendenti)",
                    },
                    {
                      norma: "D.L. 24 gennaio 2012, n. 1, art. 9",
                      desc: "Abrogazione delle tariffe forensi (decreto liberalizzazioni) — sostituite dai parametri ministeriali",
                    },
                    {
                      norma: "Art. 21 DPR 26 ottobre 1972, n. 633",
                      desc: "Testo Unico IVA — obbligo di fatturazione, contenuto della fattura, codici natura",
                    },
                    {
                      norma: "Art. 15 DPR 633/72",
                      desc: "Esclusione dall'imponibile IVA delle spese anticipate in nome e per conto del cliente (contributo unificato, marche da bollo, spese di notifica)",
                    },
                    {
                      norma: "Art. 25 DPR 29 settembre 1973, n. 600",
                      desc: "Ritenuta d'acconto del 20% sui compensi corrisposti ai professionisti da sostituti d'imposta",
                    },
                    {
                      norma: "Art. 130, DPR 30 maggio 2002, n. 115",
                      desc: "Gratuito patrocinio — riduzione del 50% del compenso liquidato per gli avvocati ammessi al patrocinio a spese dello Stato",
                    },
                    {
                      norma: "Art. 636 c.p.c.",
                      desc: "Parere di congruità — procedura monitoria per il recupero del compenso professionale con decreto ingiuntivo",
                    },
                  ].map((row) => (
                    <tr key={row.norma}>
                      <td className="p-3 border-b border-border font-medium whitespace-nowrap">
                        {row.norma}
                      </td>
                      <td className="p-3 border-b border-border">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-6">
              Domande frequenti
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Qual è la differenza tra parcella e fattura dell'avvocato?",
                  a: "La parcella (o notula) è il documento consuntivo con cui l'avvocato dettaglia le attività svolte e richiede il pagamento: descrive le fasi, i compensi e le spese, ma non è di per sé un documento fiscale. La fattura è invece il documento fiscale obbligatorio ai fini IVA e del reddito, regolata dall'art. 21 DPR 633/72. Nella fatturazione elettronica, la parcella usa il codice TD06, la fattura ordinaria il codice TD01. Dal 1° gennaio 2024, tutti i professionisti — compresi i forfettari — devono emettere obbligatoriamente fattura elettronica tramite il Sistema di Interscambio.",
                },
                {
                  q: "Differenza tra compenso e onorario dell'avvocato?",
                  a: "Il termine «onorario» appartiene al vecchio sistema delle tariffe forensi, abrogato dal D.L. 1/2012. Era la componente principale della vecchia parcella e aveva valori minimi e massimi vincolanti. Oggi il termine corretto è «compenso», definito dall'art. 2233 c.c. e dall'art. 13 della L. 247/2012. I due termini indicano lo stesso concetto — il corrispettivo per la prestazione professionale — ma «onorario» è superato e privo di rilevanza normativa.",
                },
                {
                  q: "Quando si applicava la tariffa forense e cosa è cambiato?",
                  a: "Le vecchie tariffe forensi, con minimi e massimi vincolanti, sono state abrogate dal D.L. 1/2012 (decreto liberalizzazioni). Dal 23 ottobre 2022, i compensi degli avvocati sono regolati dai parametri forensi del D.M. 55/2014, aggiornato dal D.M. 147/2022. La differenza fondamentale: con le tariffe c'erano minimi legali inderogabili; con i parametri le parti sono libere di concordare qualsiasi compenso (salvo l'equo compenso per i contraenti forti). I parametri entrano in gioco solo in assenza di accordo scritto o quando il giudice liquida le spese.",
                },
                {
                  q: "Il compenso dell'avvocato ha dei minimi obbligatori?",
                  a: "No, i parametri forensi non stabiliscono minimi legali obbligatori nei rapporti tra avvocato e cliente privato. Eccezione rilevante: la Legge 49/2023 sull'equo compenso vieta compensi inferiori ai parametri quando il cliente è un «contraente forte» (banche, assicurazioni, PA, grandi imprese con più di 50 dipendenti o ricavi superiori a 10 milioni di euro). In tutti gli altri casi, il compenso può essere liberamente concordato anche al di sotto dei parametri. Rimane tuttavia l'obbligo del preventivo informativo ex art. 13, c. 5, L. 247/2012.",
                },
                {
                  q: "Cosa sono le spese forfettarie del 15% in fattura?",
                  a: "Le spese forfettarie rappresentano il rimborso delle spese generali dello studio legale (affitto, utenze, segreteria, cancelleria, software). L'art. 2 del D.M. 55/2014 le fissa al 15% del compenso totale. Sono obbligatorie: la Cassazione (ord. n. 28/2024) ha confermato che spettano all'avvocato automaticamente, senza documentazione analitica. Il giudice non può ridurle in sede di liquidazione. Rientrano nella base di calcolo della CPA (4%) e della ritenuta d'acconto (20%), oltre che nell'imponibile IVA.",
                },
                {
                  q: "La ritenuta d'acconto si applica sempre sulla fattura dell'avvocato?",
                  a: "No. La ritenuta d'acconto del 20% (art. 25 DPR 600/73) si applica solo quando il cliente è un sostituto d'imposta: società, enti, professionisti con dipendenti, Pubblica Amministrazione. Non si applica quando il cliente è un privato consumatore. Inoltre, non si applica mai agli avvocati in regime forfettario (art. 1, c. 67, L. 190/2014). La base di calcolo è compenso + spese forfettarie 15%, esclusi CPA, IVA e spese anticipate.",
                },
                {
                  q: "Come si verifica se la parcella dell'avvocato è congrua?",
                  a: "Per verificare la congruità occorre: identificare la tabella parametrica corretta (competenza e tipo di procedimento), verificare lo scaglione di valore della causa, controllare che le fasi addebitate corrispondano ad attività effettivamente svolte, e verificare che i valori siano compresi tra il minimo (−50%) e il massimo (+50%) del valore medio tabellare. Aumenti e riduzioni devono trovare riscontro nell'art. 4 del D.M. 55/2014. Il nostro calcolatore del compenso avvocato consente di effettuare questa verifica in modo gratuito.",
                },
                {
                  q: "Cos'è il parere di congruità del Consiglio dell'Ordine?",
                  a: "Il parere di congruità è un atto rilasciato dal Consiglio dell'Ordine degli Avvocati (art. 636 c.p.c.) su richiesta dell'avvocato che vuole recuperare il proprio compenso in via monitoria. Il parere attesta che la parcella è conforme ai parametri ministeriali ed è allegato al ricorso per decreto ingiuntivo. Il decreto emesso sulla base del parere di congruità è provvisoriamente esecutivo (art. 648 c.p.c.). Il cliente debitore può opporsi entro 40 giorni dalla notifica del decreto.",
                },
                {
                  q: "Cosa deve contenere il preventivo dell'avvocato?",
                  a: "L'art. 13, comma 5, della L. 247/2012 impone all'avvocato di comunicare al cliente, al conferimento dell'incarico, la prevedibile misura del costo della prestazione, distinguendo tra oneri, spese (anche forfettarie) e compenso professionale. Il preventivo non deve necessariamente essere scritto ma deve essere chiaro e completo. La mancata comunicazione espone l'avvocato a sanzioni disciplinari. In caso di commissione di attività urgente, il preventivo può essere comunicato dopo l'inizio delle attività, appena possibile.",
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
                { slug: "contributo-unificato", title: "Contributo Unificato" },
                { slug: "calcolo-interessi-legali", title: "Calcolo Interessi Legali" },
                { slug: "calcolo-interessi-moratori", title: "Calcolo Interessi Moratori" },
                {
                  slug: "calcolo-termini-impugnazione",
                  title: "Calcolo Termini Impugnazione",
                },
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
              e non costituiscono parere legale. I riferimenti normativi sono aggiornati alla
              data di ultima modifica indicata. Per questioni specifiche si consiglia di
              rivolgersi a un professionista abilitato.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

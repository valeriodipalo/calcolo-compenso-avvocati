import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/lib/schema";
import { getToolsByCluster } from "@/data/toolRegistry";

export const metadata: Metadata = {
  title: "Interessi Legali, Moratori e Rivalutazione Monetaria: Guida 2026",
  description:
    "Guida completa a interessi legali, moratori e rivalutazione monetaria ISTAT. Differenze, quando si applicano, normativa aggiornata e strumenti di calcolo gratuiti.",
  alternates: {
    canonical: "https://www.avvocatotools.it/interessi-e-rivalutazione",
  },
  openGraph: {
    title: "Interessi Legali, Moratori e Rivalutazione Monetaria: Guida 2026",
    description:
      "Guida completa a interessi legali, moratori e rivalutazione monetaria ISTAT. Differenze, normativa e calcolatori gratuiti.",
    url: "https://www.avvocatotools.it/interessi-e-rivalutazione",
    locale: "it_IT",
    type: "article",
  },
};

export default function InteressiERivalutazionePage() {
  const tools = getToolsByCluster("interessi");

  return (
    <div className="bg-background">
      {/* JSON-LD */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Interessi e Rivalutazione", path: "/interessi-e-rivalutazione" },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: "Interessi Legali, Moratori e Rivalutazione Monetaria: Guida Completa 2026",
          description:
            "Guida completa a interessi legali, moratori e rivalutazione monetaria ISTAT per professionisti del diritto.",
          path: "/interessi-e-rivalutazione",
          datePublished: "2026-04-06",
          dateModified: "2026-04-06",
          image: "https://www.avvocatotools.it/apple-icon.png",
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
            <li className="text-[oklch(0.35_0.04_250)] font-medium">
              Interessi e Rivalutazione
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
              Interessi Legali, Moratori e Rivalutazione Monetaria
            </h1>
            <p className="text-[oklch(0.75_0.05_250)] text-lg leading-relaxed">
              Cosa sono, quando si applicano, come si calcolano e quali sono le differenze.
              Normativa aggiornata al 2026 con strumenti di calcolo gratuiti.
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
              Calcolatori gratuiti aggiornati al 2026. Seleziona lo strumento più adatto al tuo caso.
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

          {/* Interessi Legali */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Cosa sono gli interessi legali
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Gli interessi legali sono il rendimento che la legge riconosce al creditore per l'utilizzo
              di un capitale altrui. Sono disciplinati dall'art. 1284 del Codice Civile, che attribuisce
              al Ministro dell'Economia il potere di fissare annualmente il tasso con decreto pubblicato
              in Gazzetta Ufficiale entro il 15 dicembre dell'anno precedente.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Per il 2026 il tasso di interesse legale è fissato all'<strong>1,60% annuo</strong> (D.M. 10 dicembre 2025,
              pubblicato in G.U. n. 291 del 13 dicembre 2025). Il tasso si applica automaticamente
              a ogni obbligazione pecuniaria per la quale le parti non abbiano concordato una misura diversa.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Gli interessi legali si applicano in numerosi contesti: risarcimenti del danno, restituzioni,
              crediti da lavoro, successioni, espropriazioni. Hanno natura <strong>corrispettiva</strong> —
              compensano il creditore per il mancato godimento della somma dovuta, indipendentemente
              da qualsiasi colpa del debitore.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Per calcolare gli interessi legali su un capitale specifico, con la possibilità di
              selezionare periodi che attraversano più annualità (e quindi più tassi), puoi utilizzare
              il nostro{" "}
              <Link
                href="/calcolo-interessi-legali"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore degli interessi legali
              </Link>.
            </p>
          </section>

          {/* Interessi Moratori */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Cosa sono gli interessi moratori
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Gli interessi moratori sono una forma di risarcimento forfettario che il debitore
              deve corrispondere al creditore quando è in ritardo nel pagamento. A differenza
              degli interessi legali (che compensano il semplice uso del capitale), i moratori
              hanno funzione <strong>sanzionatoria</strong>: puniscono l'inadempimento.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              La principale fonte normativa è il <strong>D.Lgs. 231/2002</strong>, che recepisce la
              Direttiva UE 2000/35/CE sulla lotta contro i ritardi di pagamento nelle transazioni
              commerciali. Il tasso di mora per il primo semestre 2026 è pari al <strong>10,15%</strong> annuo
              (tasso BCE 2,15% + maggiorazione dell'8%).
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Gli interessi moratori si applicano automaticamente, senza necessità di costituzione
              in mora, nelle transazioni commerciali tra imprese (o tra imprese e pubblica
              amministrazione). Nei rapporti tra privati, invece, è generalmente necessaria
              la costituzione in mora ai sensi dell'art. 1219 c.c.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Per calcolare gli interessi moratori con il tasso aggiornato al 2026 e la
              possibilità di scegliere tra più modalità di calcolo, utilizza il nostro{" "}
              <Link
                href="/calcolo-interessi-moratori"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore degli interessi moratori
              </Link>.
            </p>
          </section>

          {/* Rivalutazione Monetaria */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Cos'è la rivalutazione monetaria
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              La rivalutazione monetaria è il meccanismo che adegua il valore di una somma
              di denaro all'inflazione, compensando la perdita di potere d'acquisto tra la data
              in cui il credito è sorto e quella del pagamento effettivo. Si basa sugli indici
              ISTAT dei prezzi al consumo per le famiglie di operai e impiegati (indice FOI).
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              In ambito giuridico, la rivalutazione è fondamentale per i <strong>debiti di valore</strong>
              (risarcimenti danni, crediti da lavoro, indennità): il giudice liquida il danno
              rivalutando il capitale dalla data dell'evento lesivo alla data della sentenza.
              Ai debiti di valuta (somme nominalmente determinate), la rivalutazione si applica
              solo se il creditore prova un danno ulteriore ai sensi dell'art. 1224, comma 2, c.c.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Per calcolare la rivalutazione monetaria con gli indici FOI ISTAT aggiornati al 2026,
              puoi utilizzare il nostro{" "}
              <Link
                href="/calcolo-rivalutazione-monetaria"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore della rivalutazione monetaria
              </Link>.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Differenze tra interessi legali, moratori e rivalutazione
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-6">
              La distinzione tra questi tre istituti è fondamentale nella pratica forense, perché
              determinano importi, tassi e presupposti diversi. Ecco un confronto sintetico:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-border" style={{ borderRadius: "0.375rem" }}>
                <thead>
                  <tr className="bg-[oklch(0.97_0.005_250)]">
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Caratteristica</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Interessi legali</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Interessi moratori</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Rivalutazione monetaria</th>
                  </tr>
                </thead>
                <tbody className="text-[oklch(0.30_0.04_250)]">
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Funzione</td>
                    <td className="p-3 border-b border-border">Corrispettiva (compenso per uso del capitale)</td>
                    <td className="p-3 border-b border-border">Sanzionatoria (penale per ritardo nel pagamento)</td>
                    <td className="p-3 border-b border-border">Restitutoria (adeguamento all'inflazione)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Normativa</td>
                    <td className="p-3 border-b border-border">Art. 1284 c.c.</td>
                    <td className="p-3 border-b border-border">D.Lgs. 231/2002, art. 1224 c.c.</td>
                    <td className="p-3 border-b border-border">Art. 1224 co. 2 c.c., indici ISTAT</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Tasso 2026</td>
                    <td className="p-3 border-b border-border">1,60% annuo</td>
                    <td className="p-3 border-b border-border">10,15% annuo (BCE + 8%)</td>
                    <td className="p-3 border-b border-border">Variabile (indice FOI ISTAT)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Si applica a</td>
                    <td className="p-3 border-b border-border">Ogni obbligazione pecuniaria</td>
                    <td className="p-3 border-b border-border">Transazioni commerciali, ritardi</td>
                    <td className="p-3 border-b border-border">Debiti di valore (danni, lavoro)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Presupposto</td>
                    <td className="p-3 border-b border-border">Esistenza del credito</td>
                    <td className="p-3 border-b border-border">Ritardo nel pagamento (mora)</td>
                    <td className="p-3 border-b border-border">Perdita di potere d'acquisto</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Cumulabilità</td>
                    <td className="p-3">Non cumulabile con i moratori sullo stesso periodo</td>
                    <td className="p-3">Assorbe gli interessi legali</td>
                    <td className="p-3">Cumulabile con interessi legali sui debiti di valore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Quando si applicano */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Quando si applicano nella pratica forense
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Nella pratica quotidiana dell'avvocato, la scelta tra interessi legali, moratori e
              rivalutazione dipende dalla natura del credito e dal contesto del rapporto obbligatorio.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Risarcimento danni (debiti di valore)
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Nel risarcimento del danno extracontrattuale (art. 2043 c.c.) il giudice applica
              la <strong>rivalutazione monetaria</strong> dalla data dell'illecito alla sentenza,
              più gli <strong>interessi legali</strong> calcolati sulla somma via via rivalutata
              (metodo della Cassazione, Sez. Un. 1712/1995). I due istituti sono cumulabili
              perché rispondono a funzioni diverse: la rivalutazione ripristina il valore reale,
              gli interessi compensano il mancato godimento.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Transazioni commerciali (fatture, forniture)
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Nelle transazioni tra imprese soggette al D.Lgs. 231/2002, il ritardo nel
              pagamento fa scattare automaticamente gli <strong>interessi moratori</strong>
              al tasso BCE + 8%, senza bisogno di diffida. Il creditore ha anche diritto
              al risarcimento forfettario di 40 euro per i costi di recupero.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Decreto ingiuntivo
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Nel ricorso per decreto ingiuntivo è prassi chiedere la condanna al pagamento
              degli interessi legali (o moratori, se applicabili) dalla data di scadenza
              dell'obbligazione al saldo. Se il credito deriva da una transazione commerciale,
              si chiederanno gli interessi moratori ex D.Lgs. 231/2002.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Crediti da lavoro
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              I crediti retributivi sono debiti di valore: il lavoratore ha diritto alla
              rivalutazione monetaria ex art. 429, comma 3, c.p.c. più gli interessi legali
              sulla somma rivalutata. Anche in questo caso rivalutazione e interessi sono cumulabili.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-6">
              Domande frequenti
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Qual è la differenza tra interessi legali e moratori?",
                  a: "Gli interessi legali (art. 1284 c.c.) compensano il creditore per l'uso del suo capitale e si applicano a qualsiasi obbligazione pecuniaria al tasso dell'1,60% nel 2026. Gli interessi moratori (D.Lgs. 231/2002) hanno funzione sanzionatoria e si applicano in caso di ritardo nel pagamento, al tasso del 10,15% nel 2026. I moratori assorbono i legali: non si cumulano sullo stesso periodo.",
                },
                {
                  q: "Quando si applicano gli interessi moratori?",
                  a: "Nelle transazioni commerciali (tra imprese o tra imprese e PA) gli interessi moratori decorrono automaticamente dal giorno successivo alla scadenza del termine di pagamento, senza necessità di costituzione in mora. Nei rapporti tra privati, è invece necessaria una formale messa in mora ai sensi dell'art. 1219 c.c.",
                },
                {
                  q: "Interessi legali e rivalutazione monetaria sono cumulabili?",
                  a: "Sì, ma solo per i debiti di valore (risarcimento danni, crediti da lavoro). In questi casi il giudice rivaluta il capitale all'inflazione ISTAT e poi calcola gli interessi legali sulla somma rivalutata. Per i debiti di valuta (somme nominalmente determinate), la rivalutazione non si applica automaticamente: il creditore deve provare un danno maggiore ai sensi dell'art. 1224, comma 2, c.c.",
                },
                {
                  q: "Qual è il tasso degli interessi legali per il 2026?",
                  a: "Il tasso di interesse legale per il 2026 è dell'1,60% annuo, stabilito con D.M. 10 dicembre 2025 (G.U. n. 291 del 13 dicembre 2025). Il tasso precedente (2025) era del 2,00%.",
                },
                {
                  q: "Cosa sono gli interessi compensativi?",
                  a: "Gli interessi compensativi sono dovuti per compensare il creditore del mancato godimento di una somma già spettante (es. prezzo di un bene consegnato ma non ancora pagato, art. 1499 c.c.). Si distinguono dai moratori perché prescindono dalla mora del debitore e dai legali perché hanno una base giuridica specifica.",
                },
                {
                  q: "Come si calcola la rivalutazione monetaria ISTAT?",
                  a: "La rivalutazione si calcola applicando al capitale originario la variazione percentuale dell'indice FOI (Famiglie di Operai e Impiegati) pubblicato dall'ISTAT. La formula è: Capitale Rivalutato = Capitale × (Indice FOI data finale / Indice FOI data iniziale). L'indice viene aggiornato mensilmente dall'ISTAT.",
                },
                {
                  q: "Quando non sono dovuti gli interessi moratori?",
                  a: "Gli interessi moratori non sono dovuti quando il ritardo nel pagamento non è imputabile al debitore, ad esempio in caso di forza maggiore o di contestazione legittima del debito. Inoltre, quando il tasso moratorio supera la soglia di usura al momento della stipula del contratto, gli interessi moratori non sono dovuti e, se pagati, devono essere restituiti.",
                },
                {
                  q: "Gli interessi moratori si applicano tra privati?",
                  a: "Il D.Lgs. 231/2002 si applica solo alle transazioni commerciali (B2B e B2PA). Tra privati, il creditore può chiedere gli interessi moratori al tasso legale (art. 1224, comma 1, c.c.) dalla data della costituzione in mora. Se dimostra un danno maggiore, può ottenere anche il risarcimento supplementare ex art. 1224, comma 2, c.c.",
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
                { slug: "calcolo-danno-biologico", title: "Calcolo Danno Biologico" },
                { slug: "calcolo-danno-non-patrimoniale", title: "Calcolo Danno Non Patrimoniale" },
                { slug: "calcolo-compenso", title: "Calcolo Compenso Avvocato" },
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

        </div>
      </div>
    </div>
  );
}

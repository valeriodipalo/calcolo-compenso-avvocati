import Link from "next/link";
import { Scale, Calculator, ExternalLink } from "lucide-react";

const tools = [
  { href: "/contributo-unificato", label: "Contributo Unificato", icon: Scale },
  { href: "/calcolo-compenso", label: "Calcolo Compenso", icon: Calculator, disabled: true },
];

const legalResources = [
  { label: "Normattiva", url: "https://www.normattiva.it" },
  { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
  { label: "Ministero della Giustizia", url: "https://www.giustizia.it" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.22_0.04_250)] border-t border-[oklch(0.30_0.04_250)]">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-7 h-7 bg-[oklch(0.75_0.10_85)] flex items-center justify-center" style={{ borderRadius: "0.375rem" }}>
                <Scale className="w-3.5 h-3.5 text-[oklch(0.22_0.04_250)]" />
              </div>
              <span className="font-serif text-base text-white tracking-tight">
                Avvocatitools<span className="text-[oklch(0.75_0.10_85)]">.it</span>
              </span>
            </Link>
            <p className="text-sm text-[oklch(0.60_0.03_250)] mt-3 leading-relaxed max-w-xs">
              Strumenti legali gratuiti per professionisti del diritto. Calcolatori aggiornati, tabelle e guide normative.
            </p>
          </div>

          {/* Tools column */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.10_85)] mb-4">
              Strumenti
            </h4>
            <ul className="space-y-2">
              {tools.map((tool) => {
                const Icon = tool.icon;
                if (tool.disabled) {
                  return (
                    <li key={tool.href}>
                      <span className="flex items-center gap-2 text-sm text-[oklch(0.45_0.03_250)]">
                        <Icon className="w-3.5 h-3.5" />
                        {tool.label}
                        <span className="text-[10px] uppercase tracking-wider opacity-60">Presto</span>
                      </span>
                    </li>
                  );
                }
                return (
                  <li key={tool.href}>
                    <Link
                      href={tool.href}
                      className="flex items-center gap-2 text-sm text-[oklch(0.70_0.03_250)] hover:text-white transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {tool.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.10_85)] mb-4">
              Risorse Utili
            </h4>
            <ul className="space-y-2">
              {legalResources.map((res) => (
                <li key={res.url}>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-[oklch(0.70_0.03_250)] hover:text-white transition-colors"
                  >
                    {res.label}
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-separator mt-8 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[oklch(0.50_0.03_250)]">
            Tutti gli strumenti hanno carattere meramente informativo e non costituiscono parere legale.
          </p>
          <p className="text-xs text-[oklch(0.45_0.03_250)]">
            &copy; {new Date().getFullYear()} Avvocatitools.it
          </p>
        </div>
      </div>
    </footer>
  );
}

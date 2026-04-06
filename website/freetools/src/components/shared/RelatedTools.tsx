import Link from "next/link";
import { TOOLS, getRelatedTools, getClusterForTool } from "@/data/toolRegistry";
import type { ToolEntry } from "@/data/toolRegistry";

const POPULAR_SLUGS = ["contributo-unificato", "calcolo-compenso"];

interface RelatedToolsProps {
  slug: string;
}

export function RelatedTools({ slug }: RelatedToolsProps) {
  const { sameCluster, crossCluster } = getRelatedTools(slug);
  const cluster = getClusterForTool(slug);

  // Fallback: if no cluster or cross-cluster links, show most popular tools
  const hasRelated = sameCluster.length > 0 || crossCluster.length > 0;
  let popularFallback: ToolEntry[] = [];
  if (!hasRelated) {
    popularFallback = POPULAR_SLUGS
      .filter((s) => s !== slug)
      .map((s) => TOOLS.find((t) => t.slug === s))
      .filter((t): t is ToolEntry => t !== undefined && t.ready);
  }

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h2 className="text-lg font-serif text-[oklch(0.25_0.04_250)] mb-6">
        Strumenti Correlati
      </h2>

      {sameCluster.length > 0 && (
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.50_0.02_250)] mb-3">
            {cluster?.label ?? "Nello stesso ambito"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sameCluster.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={`/${tool.slug}`}
                  className="group flex items-center gap-3 p-3 bg-[oklch(0.98_0.005_250)] hover:bg-[oklch(0.96_0.01_85)] border border-border transition-colors"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <div
                    className="shrink-0 w-8 h-8 bg-[oklch(0.25_0.04_250)] flex items-center justify-center"
                    style={{ borderRadius: "0.25rem" }}
                  >
                    <Icon className="w-4 h-4 text-[oklch(0.75_0.10_85)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)] group-hover:text-[oklch(0.35_0.15_250)] transition-colors truncate">
                      {tool.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {crossCluster.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.50_0.02_250)] mb-3">
            Potrebbe servirti anche
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {crossCluster.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={`/${tool.slug}`}
                  className="group flex items-center gap-3 p-3 bg-[oklch(0.98_0.005_250)] hover:bg-[oklch(0.96_0.01_85)] border border-border transition-colors"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <div
                    className="shrink-0 w-8 h-8 bg-[oklch(0.25_0.04_250)] flex items-center justify-center"
                    style={{ borderRadius: "0.25rem" }}
                  >
                    <Icon className="w-4 h-4 text-[oklch(0.75_0.10_85)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)] group-hover:text-[oklch(0.35_0.15_250)] transition-colors truncate">
                      {tool.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {popularFallback.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.50_0.02_250)] mb-3">
            Strumenti più utilizzati
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {popularFallback.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={`/${tool.slug}`}
                  className="group flex items-center gap-3 p-3 bg-[oklch(0.98_0.005_250)] hover:bg-[oklch(0.96_0.01_85)] border border-border transition-colors"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <div
                    className="shrink-0 w-8 h-8 bg-[oklch(0.25_0.04_250)] flex items-center justify-center"
                    style={{ borderRadius: "0.25rem" }}
                  >
                    <Icon className="w-4 h-4 text-[oklch(0.75_0.10_85)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)] group-hover:text-[oklch(0.35_0.15_250)] transition-colors truncate">
                      {tool.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

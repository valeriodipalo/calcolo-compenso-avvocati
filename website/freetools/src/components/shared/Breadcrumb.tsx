import Link from "next/link";
import { getClusterForTool, TOOLS } from "@/data/toolRegistry";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

interface BreadcrumbProps {
  slug: string;
}

export function Breadcrumb({ slug }: BreadcrumbProps) {
  const cluster = getClusterForTool(slug);
  const tool = TOOLS.find((t) => t.slug === slug);

  if (!cluster || !tool) return null;

  // Skip cluster level if cluster label matches tool title (e.g. Contributo Unificato)
  const showClusterLevel =
    cluster.label.toLowerCase() !== tool.title.toLowerCase();

  const clusterHref = cluster.hubReady
    ? `/${cluster.slug}`
    : `/#${cluster.id}`;

  // JSON-LD path matches the visible URL: hub slug if hubReady, otherwise
  // homepage anchor. Linking to a non-existent hub URL invalidates the
  // breadcrumb rich result.
  const breadcrumbItems = showClusterLevel
    ? [
        { name: "Home", path: "/" },
        { name: cluster.label, path: clusterHref },
        { name: tool.title, path: `/${tool.slug}` },
      ]
    : [
        { name: "Home", path: "/" },
        { name: tool.title, path: `/${tool.slug}` },
      ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

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

            {showClusterLevel && (
              <>
                <li aria-hidden="true" className="select-none">
                  ›
                </li>
                <li>
                  <Link
                    href={clusterHref}
                    className="hover:text-[oklch(0.25_0.04_250)] transition-colors"
                  >
                    {cluster.label}
                  </Link>
                </li>
              </>
            )}

            <li aria-hidden="true" className="select-none">
              ›
            </li>
            <li className="text-[oklch(0.35_0.04_250)] font-medium truncate">
              {tool.title}
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
}

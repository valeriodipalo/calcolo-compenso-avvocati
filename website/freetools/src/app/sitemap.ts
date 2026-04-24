import type { MetadataRoute } from "next";
import { TOOLS, CLUSTERS } from "@/data/toolRegistry";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.avvocatotools.it";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-24"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    // Hub/pillar pages (only when published)
    ...CLUSTERS.filter((c) => c.hubReady).map((cluster) => ({
      url: `${baseUrl}/${cluster.slug}`,
      lastModified: new Date("2026-04-16"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    // Tool pages
    ...TOOLS.filter((t) => t.ready).map((tool) => ({
      url: `${baseUrl}/${tool.slug}`,
      lastModified: new Date(tool.lastModified),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    })),
  ];
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://avvocatotools.it";
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contributo-unificato`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}

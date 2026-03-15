import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.avvocatotools.it";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contributo-unificato`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/calcolo-interessi-legali`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/calcolo-compenso`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/calcolo-danno-non-patrimoniale`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}

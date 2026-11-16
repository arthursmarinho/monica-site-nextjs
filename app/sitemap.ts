import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      // Data fixa em site.updatedAt: new Date() mudaria a cada build e o
      // Bing passa a ignorá-la.
      lastModified: site.updatedAt,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${site.url}/monica-2.jpg`],
    },
  ];
}

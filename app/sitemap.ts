import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Data da última alteração real de conteúdo. Atualize ao mudar a página;
// usar new Date() faria a data mudar a cada build e o Bing passa a ignorá-la.
const lastModified = "2026-10-27";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${site.url}/monica-2.jpg`],
    },
  ];
}

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.title,
    short_name: site.name,
    description: site.description,
    lang: "pt-BR",
    start_url: "/",
    display: "browser",
    background_color: site.colors.natural,
    theme_color: site.colors.deepest,
    icons: [
      // O arquivo tem extensão .png, mas o conteúdo é JPEG.
      { src: "/favicon.png", sizes: "1024x1024", type: "image/jpeg" },
    ],
  };
}

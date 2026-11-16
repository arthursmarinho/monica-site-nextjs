import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/seo/Analytics";
import { site } from "@/lib/site";
import "./globals.css";

// Só o subset "latin": já cobre todo o português (ç, ã, é...). O "latin-ext"
// dobrava as fontes pré-carregadas e atrasava a foto do topo (LCP).
const inter = Inter({
  variable: "--font-helvetica-now",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// A Fraunces só aparece em itálico (.font-serif-italic).
const fraunces = Fraunces({
  variable: "--font-ivar",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Saúde",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  // Códigos dos painéis de webmaster. O Google já é verificado pelo arquivo
  // public/google*.html; o Bing entra pela variável NEXT_PUBLIC_BING_VERIFICATION.
  verification: {
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
  other: {
    "geo.region": "BR-PR",
    "geo.placename": "Curitiba",
  },
};

export const viewport: Viewport = {
  themeColor: site.colors.deepest,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-natural text-deepest">
        <div className="pointer-events-none fixed inset-x-0 top-0 z-[999]">
          <div className="pointer-events-auto">
            <Header />
          </div>
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

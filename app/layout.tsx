import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-helvetica-now",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-ivar",
  subsets: ["latin", "latin-ext"],
  style: ["italic", "normal"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Monica Gobbeti | Planos de Saúde Empresariais",
  description:
    "Planos de saúde e odontológicos personalizados para empresas, famílias e beneficiários individuais.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
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
      </body>
    </html>
  );
}

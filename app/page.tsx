import { Audiences } from "@/components/home/Audiences";
import { Cta } from "@/components/home/Cta";
import { Faq } from "@/components/home/Faq";
import { Hero, Partners } from "@/components/home/Hero";
import { Highlights, Programs } from "@/components/home/Programs";
import { QuoteForm } from "@/components/home/QuoteForm";
import { Differentiators, Stats } from "@/components/home/Stats";
import { Stories } from "@/components/home/Stories";
import { Banner } from "@/components/layout/Banner";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Partners />
      <Highlights />
      <Programs />
      <Stats />
      <Audiences />
      <Banner />
      <QuoteForm />
      <Differentiators />
      <Stories />
      <Faq />
      <Cta />
    </>
  );
}

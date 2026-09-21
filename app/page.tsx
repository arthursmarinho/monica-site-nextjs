import { Audiences } from "@/components/home/Audiences";
import { Cta } from "@/components/home/Cta";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Highlights, Programs } from "@/components/home/Programs";
import { QuoteForm } from "@/components/home/QuoteForm";
import { Differentiators, Stats } from "@/components/home/Stats";
import { Stories } from "@/components/home/Stories";
import { Banner } from "@/components/layout/Banner";

export default function Home() {
  return (
    <>
      <Hero />
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

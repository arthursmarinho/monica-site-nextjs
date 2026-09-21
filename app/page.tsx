import { Audiences } from "@/components/home/Audiences";
import { Cta } from "@/components/home/Cta";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Highlights, Programs } from "@/components/home/Programs";
import { QuoteForm } from "@/components/home/QuoteForm";
import { Differentiators, Stats } from "@/components/home/Stats";
import { Banner } from "@/components/layout/Banner";

// Stories (depoimentos) fica fora do ar por enquanto, até termos feedbacks
// reais de clientes para publicar. O componente continua em
// components/home/Stories.tsx pronto para ser religado.

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
      <Faq />
      <Cta />
    </>
  );
}

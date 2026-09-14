import { Audiences } from "@/components/home/Audiences";
import { Cta } from "@/components/home/Cta";
import { Hero } from "@/components/home/Hero";
import { Programs } from "@/components/home/Programs";
import { Stats } from "@/components/home/Stats";
import { Stories } from "@/components/home/Stories";

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <Stats />
      <Audiences />
      <Cta />
    </>
  );
}

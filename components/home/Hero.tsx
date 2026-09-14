import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { media } from "@/lib/media";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] bg-deepest p-3 pt-">
      <div className="relative flex min-h-[calc(100svh-8rem)] w-full overflow-hidden rounded-medium">
        <Image
          src={media.hero}
          alt="Uma mãe e duas crianças rindo juntas no sofá"
          fill
          priority
          className="object-cover object-[70%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        <div className="relative z-10 flex w-full items-center">
          <div className="container-site px-6 py-24 md:px-12 lg:px-16">
            <h1 className="display-heading max-w-[16ch] text-[2.7rem] text-white sm:text-5xl md:text-6xl lg:text-[4.6rem]">
              Planos de Saúde e Odontológicos para{" "}
              <em className="font-serif-italic">sua empresa</em>
            </h1>
            <p className="mt-5 max-w-xl text-lg font-light text-white/90 md:text-xl">
              Cuidado especializado em cada fase da vida.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#contato">Agendar demonstração</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { media } from "@/lib/media";

const support = [
  "Atendimento personalizado",
  "Orientação especializada",
  "Suporte antes e depois da contratação",
];

function CheckIcon() {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M1 5L4.3 8.3L11 1.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const partners = [
  { name: "Bradesco Saúde", logo: "/logos/bradesco-saude.png", width: 2000, height: 713 },
  { name: "SulAmérica", logo: "/logos/sulamerica.svg", width: 500, height: 128 },
  { name: "Hapvida", logo: "/logos/hapvida.svg", width: 500, height: 111 },
  {
    name: "NotreDame Intermédica",
    logo: "/logos/notredame-intermedica.png",
    width: 2000,
    height: 728,
  },
  { name: "MedSênior", logo: "/logos/medsenior.png", width: 2560, height: 885 },
  { name: "Clinipam", logo: "/logos/clinipam.png", width: 200, height: 200 },
  { name: "Odontoprev", logo: "/logos/odontoprev.png", width: 563, height: 130 },
  { name: "Amil", logo: "/logos/amil.svg", width: 273, height: 97 },
  { name: "Unimed", logo: "/logos/unimed.svg", width: 500, height: 167 },
];

export function Partners() {
  const items = [...partners, ...partners];
  return (
    <section className="border-y border-black/5 bg-natural py-10">
      <div className="container-site px-4 md:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Operadoras de saúde e odontológicas
        </p>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14">
            {items.map((partner, index) => (
              <Image
                key={`${partner.name}-${index}`}
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-10 w-auto shrink-0 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] bg-deepest p-3">
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
            <h1 className="display-heading max-w-[18ch] text-[2.7rem] text-white sm:text-5xl md:text-6xl lg:text-[4.6rem]">
              Encontre o plano de saúde e odontológico{" "}
              <em className="font-serif-italic">
                ideal para você, sua família e empresa.
              </em>
            </h1>
            <p className="mt-5 max-w-xl text-lg font-light text-white/90 md:text-xl">
              Compare opções de planos, encontre uma alternativa que combine com
              suas necessidades e conte com acompanhamento especializado em
              todas as etapas da contratação.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#cotacao">Quero receber uma cotação</Button>
            </div>
            <ul className="mt-6 space-y-2">
              {support.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-light text-white/85"
                >
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-electric text-deepest">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

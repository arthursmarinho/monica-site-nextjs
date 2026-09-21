import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { media } from "@/lib/media";

const highlights = [
  {
    href: "#por-que-corretor",
    title: "Por que contar com um corretor",
    text: "Você não precisa escolher um plano sozinho.",
    image: media.fertility,
    accent: "bg-fertility",
  },
  {
    href: "#como-funciona",
    title: "Como funciona",
    text: "Do primeiro contato ao suporte pós-venda.",
    image: media.maternity,
    accent: "bg-maternity",
  },
  {
    href: "#perfil",
    title: "Encontre uma opção para o seu perfil",
    text: "Planos para diferentes momentos da vida.",
    image: media.parenting,
    accent: "bg-parenting",
  },
  {
    href: "#diferencial",
    title: "Muito além de vender um plano",
    text: "Meu compromisso é ajudar você a entender o que está contratando e oferecer suporte quando precisar.",
    image: media.menopause,
    accent: "bg-menopause",
  },
];

export function Highlights() {
  return (
    <section className="py-20 md:py-28 scroll-mt-24">
      <div className="container-site px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.href}
              className="relative min-h-[33.75rem] overflow-hidden rounded-small text-white"
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
              <div className="relative z-10 flex h-full min-h-[33.75rem] flex-col justify-between p-6 md:p-8">
                <span className={`h-2.5 w-2.5 rounded-full ${item.accent}`} />
                <div>
                  <h3 className="text-2xl font-light md:text-[1.7rem]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[40ch] text-[15px] leading-relaxed text-white/90">
                    {item.text}
                  </p>
                  <Button href={item.href} className="mt-6">
                    Saiba mais
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  "Orientação para escolher o plano",
  "Explicação das coberturas e condições",
  "Informações sobre rede credenciada",
  "Auxílio durante a contratação",
  "Suporte após a contratação",
  "Atendimento personalizado",
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

export function Programs() {
  return (
    <section id="por-que-corretor" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-site px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <h2 className="display-heading max-w-[16ch] text-4xl md:text-5xl">
              Por que contar com{" "}
              <em className="font-serif-italic">um corretor?</em>
            </h2>
            <p className="mt-6 max-w-[42ch] text-lg font-light leading-relaxed">
              Você não precisa escolher um plano sozinho.
            </p>
            <p className="mt-4 max-w-[42ch] text-lg font-light leading-relaxed">
              Cada plano possui características, rede credenciada, abrangência,
              regras e condições diferentes. Meu papel é ajudar você a entender
              as opções disponíveis e escolher de acordo com suas necessidades.
            </p>
            <Button href="#cotacao" className="mt-8">
              Quero falar com uma corretora
            </Button>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide text-muted">
              Com meu atendimento você conta com:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-small bg-white p-5"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-maven text-white">
                    <CheckIcon />
                  </span>
                  <span className="text-[15px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

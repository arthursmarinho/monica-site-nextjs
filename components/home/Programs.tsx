import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { media } from "@/lib/media";

const programs = [
  {
    href: "#planos-de-saude",
    title: "Planos de Saúde",
    text: "Planos de saúde personalizados de maneira a atender individualmente, a necessidade e disponibilidade de cada beneficiário.",
    image: media.fertility,
    accent: "bg-fertility",
  },
  {
    href: "#revisao-de-contratos",
    title: "Revisão de contratos ativos de planos de Saúde",
    text: "É regulamentado pela ANS a oportunidade de alteração de planos entre operadoras sem prejuízo para o beneficiário na troca.",
    image: media.maternity,
    accent: "bg-maternity",
  },
  {
    href: "#planos-odontologicos",
    title: "Planos odontológicos",
    text: "Cobertura imediata SEM CARÊNCIA para procedimentos simples, planos empresariais, familiares e individuais.",
    image: media.parenting,
    accent: "bg-parenting",
  },
  {
    href: "#seguro-de-vida",
    title: "Seguro de vida",
    text: "Desde proteções mais básicas até as mais completas, com planos que cabem no seu bolso.",
    image: media.menopause,
    accent: "bg-menopause",
  },
];

const extras = [
  {
    href: "/programs/glp-1-care",
    title: "Conheça o Cuidado GLP-1",
    badge: "Maven para pessoas físicas, pagamento particular",
    text: "Acesso a medicamentos GLP-1 de marca, consultas sob demanda com especialistas em metabolismo e hormônios, além de nutrição e treino de força.",
    image: media.glp1,
  },
  {
    href: "/programs/hormone-care",
    title: "Conheça o Cuidado hormonal",
    badge: "Maven para pessoas físicas, pagamento particular",
    text: "Duas consultas com especialistas em saúde hormonal, um plano personalizado e apoio com prescrições — tudo incluso.",
    image: media.hormone,
  },
  {
    href: "/programs/virtual-clinic",
    title: "Conheça a Clínica virtual",
    badge: "Maven para pessoas físicas, pagamento particular",
    text: "Agende consultas virtuais sob demanda em mais de 30 especialidades de saúde da mulher e da família.",
    image: media.virtual,
  },
];

export function Programs() {
  return (
    <section id="programas" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-site px-4 md:px-6">
        <div className="mx-auto text-center">
          <h2 className="display-heading text-4xl md:text-5xl lg:text-[3.5rem]">
            Saúde pensada para{" "}
            <em className="font-serif-italic text-maven">empresas</em>
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-light md:text-xl">
          A confiança de mais de 100 pessoas para melhorar resultados em cada
          fase da vida
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {programs.map((item) => (
            <article
              id={item.href.replace("#", "")}
              key={item.href}
              className="relative min-h-[33.75rem] overflow-hidden rounded-small text-white scroll-mt-24"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

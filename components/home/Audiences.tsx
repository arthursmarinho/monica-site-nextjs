"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { media } from "@/lib/media";

const profiles = [
  {
    id: "individual",
    title: "Individual",
    text: "Para quem busca uma solução de assistência à saúde para si.",
    image: media.industryConsumers,
  },
  {
    id: "adesao",
    title: "Adesão",
    text: "Para quem busca uma solução de assistência à saúde com oportunidade de desconto através da sua formação acadêmica.",
    image: media.industryConsultants,
  },
  {
    id: "familiar",
    title: "Familiar",
    text: "Opções para cuidar da saúde de toda a família.",
    image: media.industryEmployees,
  },
  {
    id: "empresarial",
    title: "Empresarial",
    text: "Alternativas para empresas e seus colaboradores.",
    image: media.industryEmployers,
  },
  {
    id: "melhor-idade",
    title: "Para a melhor idade",
    text: "Opções direcionadas às necessidades desse público.",
    image: media.menopause,
  },
];

export function Audiences() {
  const [active, setActive] = useState(profiles[0]);

  return (
    <section id="perfil" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-site px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <h2 className="display-heading max-w-[16ch] text-4xl md:text-5xl">
              Encontre uma opção{" "}
              <em className="font-serif-italic">para o seu perfil</em>
            </h2>
            <p className="mt-5 max-w-[40ch] text-lg font-light leading-relaxed">
              Planos para diferentes momentos da vida.
            </p>
            <ul className="mt-8 space-y-1">
              {profiles.map((item) => {
                const isActive = item.id === active.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(item)}
                      onFocus={() => setActive(item)}
                      onClick={() => setActive(item)}
                      className={`flex w-full items-center gap-3 rounded-tiny px-2 py-3 text-left text-xl transition ${
                        isActive ? "text-deepest" : "text-deepest/40"
                      }`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          isActive ? "bg-maven" : "bg-transparent"
                        }`}
                      />
                      {item.title}
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 max-w-[40ch] text-sm text-muted">
              As opções disponíveis dependem da operadora, região, perfil e
              condições de contratação.
            </p>
            <Button href="#cotacao" className="mt-6">
              Quero receber uma cotação
            </Button>
          </div>

          <div className="relative min-h-[28rem] overflow-hidden rounded-medium md:min-h-[36rem]">
            <Image
              src={active.image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/10 to-transparent p-6 md:p-8">
              <div className="max-w-[32ch] text-white">
                <p className="font-serif-italic text-2xl">{active.title}</p>
                <p className="mt-2 text-sm text-white/85">{active.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

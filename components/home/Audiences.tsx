"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { media } from "@/lib/media";

const audiences = [
  {
    id: "employers",
    title: "Empresas",
    href: "#contato",
    image: media.industryEmployers,
    cta: "Agendar demonstração",
  },
  {
    id: "plans",
    title: "Operadoras",
    href: "#contato",
    image: media.industryPlans,
    cta: "Fale conosco",
  },
  {
    id: "consultants",
    title: "Consultores",
    href: "#contato",
    image: media.industryConsultants,
    cta: "Fale conosco",
  },
  {
    id: "employees",
    title: "Colaboradores",
    href: "#contato",
    image: media.industryEmployees,
    cta: "Agendar demonstração",
  },
  {
    id: "consumers",
    title: "Pessoas físicas",
    href: "#contato",
    image: media.industryConsumers,
    cta: "Fale conosco",
  },
];

export function Audiences() {
  const [active, setActive] = useState(audiences[0]);

  return (
    <section id="publico" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-site px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <h2 className="display-heading max-w-[16ch] text-4xl md:text-5xl">
              Fazendo a saúde funcionar{" "}
              <em className="font-serif-italic">para todos nós</em>
            </h2>
            <p className="mt-5 max-w-[40ch] text-lg font-light leading-relaxed">
              Juntos, estamos redesenhando a experiência de saúde das famílias
              que trabalham — no lugar em que o cuidado realmente acontece: em
              casa, no trabalho e na comunidade.
            </p>
            <ul className="mt-8 space-y-1">
              {audiences.map((item) => {
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
            <Button href={active.href} className="mt-6">
              {active.cta}
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
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import andryaPrint from "@/public/feedbacks/andrya.jpeg";
import larissaPrint from "@/public/feedbacks/larissa-vertical.jpeg";
import pedroPrint from "@/public/feedbacks/pedro.jpeg";

type Story = {
  name: string;
  context: string;
  quote: string;
  print: StaticImageData;
  // Recorte do print dentro da moldura do celular, para focar na mensagem.
  printFocus: string;
};

const stories: Story[] = [
  {
    name: "Andrya",
    context: "Portabilidade Unimed Goiânia → Unimed Curitiba",
    quote:
      "Minha experiência com você foi muito boa! Você me ajudou em todo o processo de portabilidade da Unimed Goiânia para a Unimed Curitiba e foi super atenciosa e paciente comigo, sempre tirando minhas dúvidas e me orientando em tudo. Eu estava bem preocupada com essa mudança, mas você me passou muita segurança e tornou todo o processo bem mais tranquilo.",
    print: andryaPrint,
    printFocus: "object-bottom",
  },
  {
    name: "Larissa",
    context: "Inclusão de familiar no plano",
    quote:
      "Hoje quero te agradecer pela ajuda que nos deu. O Samuel entrou no plano, eu não sei como te agradecer por nos ajudar. Muito obrigado pela atenção e pela paciência.",
    print: larissaPrint,
    printFocus: "object-center",
  },
  {
    name: "Pedro",
    context: "Contratação de plano Unimed para a família",
    quote:
      "Mônica, gostaria de agradecer por toda a atenção, paciência e carinho durante o processo de contratação do plano de saúde Unimed para minha família. Obrigado por esclarecer nossas dúvidas e nos ajudar em cada etapa. Ficamos muito gratos por todo o seu atendimento!",
    print: pedroPrint,
    printFocus: "object-center",
  },
];

function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M0 24V14.4C0 6.4 4.3 1.6 12.8 0l1.6 3.2C9.6 4.6 7.4 7.4 7.2 11.2H13V24H0Zm18.6 0V14.4c0-8 4.3-12.8 12.8-14.4L33 3.2c-4.8 1.4-7 4.2-7.2 8H31.6V24H18.6Z" />
    </svg>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <span
      aria-hidden
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-light-green text-xs font-medium text-maven"
    >
      {name[0]}
    </span>
  );
}

export function Stories() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-deep py-24 text-white scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,#4ee29d80,#028c74_40%,#035748)]" />
      <div className="container-site relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-heading text-4xl md:text-5xl lg:text-[3.5rem]">
            Quem é bem atendido,{" "}
            <em className="font-serif-italic">recomenda</em>
          </h2>
          <p className="mt-5 text-lg font-light text-white/85">
            Mensagens reais de clientes que contaram com o meu atendimento.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <div
            role="tablist"
            aria-label="Depoimentos"
            className="flex flex-wrap justify-center gap-2"
          >
            {stories.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={index === active}
                onClick={() => setActive(index)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                  index === active
                    ? "border-white bg-white text-deepest"
                    : "border-white/40 text-white hover:border-white"
                }`}
              >
                <Avatar name={item.name} />
                {item.name}
              </button>
            ))}
          </div>

          <div
            key={story.name}
            role="tabpanel"
            className="animate-quiz-in mt-10 grid items-center gap-10 md:grid-cols-[1fr_auto]"
          >
            <blockquote>
              <QuoteMark className="h-8 w-11 text-electric" />
              <p className="mt-6 font-serif-italic text-2xl leading-snug md:text-[2rem]">
                {story.quote}
              </p>
              <footer className="mt-8">
                <p className="font-medium">{story.name}</p>
                <p className="text-sm text-white/75">{story.context}</p>
              </footer>
            </blockquote>

            <a
              href={story.print.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver mensagem original de ${story.name}`}
              className="relative mx-auto block aspect-9/16 w-64 overflow-hidden rounded-[1.75rem] border-[6px] border-deepest bg-deepest shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] lg:w-72"
            >
              <Image
                src={story.print}
                alt={`Print da mensagem de ${story.name} no WhatsApp`}
                fill
                sizes="18rem"
                className={`object-cover ${story.printFocus}`}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

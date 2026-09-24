"use client";

import { CheckIcon } from "./quote/icons";
import { QuoteQuiz } from "./quote/QuoteQuiz";
import { useQuiz } from "./quote/quiz";

const trust = [
  "Sem cadastro, sem e-mail, sem robô",
  "Comparativo com valores de várias operadoras",
  "Quem responde sou eu, Monica Gobbetti — não é atendente",
  "Você não paga nada a mais pela consultoria",
];

export function QuoteForm() {
  const quiz = useQuiz();

  return (
    <section id="cotacao" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-site px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="display-heading max-w-[16ch] text-4xl md:text-5xl">
              Vamos encontrar{" "}
              <em className="font-serif-italic">seu plano?</em>
            </h2>
            <p className="mt-5 max-w-[40ch] text-lg font-light leading-relaxed">
              Responda algumas perguntas rápidas e eu retorno pelo WhatsApp
              com as opções para o seu perfil.
            </p>
            <ul className="mt-8 space-y-3">
              {trust.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[15px] text-deepest/80"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-maven text-white">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 inline-flex rounded-full bg-light-green px-4 py-2 text-sm font-medium text-deep">
              Atendimento em todo o Brasil
            </p>
          </div>

          <QuoteQuiz quiz={quiz} />
        </div>
      </div>
    </section>
  );
}

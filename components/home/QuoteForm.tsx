"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

const trust = [
  "Sem cadastro, sem e-mail, sem robô",
  "Comparativo com valores de várias operadoras",
  "Quem responde sou eu, Monica Gobbetti — não é atendente",
  "Você não paga nada a mais pela consultoria",
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

const ageRanges = [
  "Até 18 anos",
  "19 a 23 anos",
  "24 a 28 anos",
  "29 a 33 anos",
  "34 a 38 anos",
  "39 a 43 anos",
  "44 a 48 anos",
  "49 a 53 anos",
  "54 a 58 anos",
  "59 anos ou mais",
];

type Field = "perfil" | "faixa" | "cidade" | "necessidade" | "nome" | "whatsapp";

type Step =
  | { field: Field; question: string; kind: "choice"; options: string[] }
  | {
      field: Field;
      question: string;
      kind: "text" | "tel" | "textarea";
      placeholder: string;
      optional?: boolean;
      autoComplete?: string;
    };

const steps: Step[] = [
  {
    field: "perfil",
    question: "Para quem é o plano?",
    kind: "choice",
    options: ["Individual", "Familiar", "Empresarial"],
  },
  {
    field: "faixa",
    question: "Qual a faixa etária?",
    kind: "choice",
    options: ageRanges,
  },
  {
    field: "cidade",
    question: "Em qual cidade você está?",
    kind: "text",
    placeholder: "Ex.: São Paulo/SP",
  },
  {
    field: "necessidade",
    question: "O que você busca em um plano?",
    kind: "textarea",
    placeholder: "Conte um pouco sobre o que você procura (opcional)",
    optional: true,
  },
  {
    field: "nome",
    question: "Qual é o seu nome?",
    kind: "text",
    placeholder: "Seu nome completo",
    autoComplete: "name",
  },
  {
    field: "whatsapp",
    question: "E o seu WhatsApp?",
    kind: "tel",
    placeholder: "(00) 00000-0000",
    autoComplete: "tel",
  },
];

type Answers = Record<Field, string>;

const emptyAnswers: Answers = {
  perfil: "",
  faixa: "",
  cidade: "",
  necessidade: "",
  nome: "",
  whatsapp: "",
};

function buildWhatsappMessage(data: Answers) {
  return `Olá! Gostaria de solicitar uma cotação.

Nome: ${data.nome}
WhatsApp: ${data.whatsapp}
Cidade/UF: ${data.cidade}
Para quem é o plano: ${data.perfil}
Faixa etária: ${data.faixa}
O que procuro em um plano: ${data.necessidade || "-"}`;
}

const inputClass =
  "w-full rounded-tiny border border-black/10 bg-white px-4 py-3 text-[15px] text-deepest placeholder:text-muted focus:border-maven focus:outline-none";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-tiny border border-maven bg-maven px-6 py-[0.63rem] text-center text-[1.05rem] font-medium leading-none text-white transition-colors duration-300 hover:border-deep hover:bg-deep";

export function QuoteForm() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const step = steps[index];
  const isLast = index === steps.length - 1;

  function setAnswer(field: Field, value: string) {
    setAnswers((current) => ({ ...current, [field]: value }));
  }

  function send(data: Answers) {
    const url = whatsappUrl(buildWhatsappMessage(data));
    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
  }

  function restart() {
    setAnswers(emptyAnswers);
    setIndex(0);
    setSentUrl(null);
  }

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

          <div className="rounded-medium bg-white p-6 md:p-10">
            {sentUrl ? (
              <div className="text-center" aria-live="polite">
                <p className="display-heading text-3xl md:text-4xl">
                  Pronto, <em className="font-serif-italic">obrigada!</em>
                </p>
                <p className="mx-auto mt-4 max-w-[36ch] text-[15px] leading-relaxed text-muted">
                  Suas respostas foram abertas no WhatsApp. É só enviar a
                  mensagem que eu retorno em seguida.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={sentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={primaryButtonClass}
                  >
                    Abrir o WhatsApp novamente
                  </a>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex items-center justify-center rounded-tiny border border-maven px-6 py-[0.63rem] text-[1.05rem] font-medium leading-none text-maven transition-colors duration-300 hover:bg-maven hover:text-white"
                  >
                    Recomeçar
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (isLast) {
                    send(answers);
                  } else {
                    setIndex(index + 1);
                  }
                }}
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  <span>
                    Pergunta {index + 1} de {steps.length}
                  </span>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => setIndex(index - 1)}
                      className="normal-case tracking-normal text-sm font-medium text-maven hover:text-deep"
                    >
                      ← Voltar
                    </button>
                  )}
                </div>
                <div
                  className="mt-3 h-1.5 overflow-hidden rounded-full bg-natural"
                  role="progressbar"
                  aria-valuemin={1}
                  aria-valuemax={steps.length}
                  aria-valuenow={index + 1}
                >
                  <div
                    className="h-full rounded-full bg-maven transition-[width] duration-300"
                    style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                  />
                </div>

                <div key={step.field} className="mt-8">
                  <label
                    htmlFor={`quiz-${step.field}`}
                    className="display-heading block text-2xl md:text-3xl"
                  >
                    {step.question}
                  </label>

                  {step.kind === "choice" ? (
                    <div
                      className={`mt-6 grid gap-3 ${
                        step.options.length > 4 ? "sm:grid-cols-2" : ""
                      }`}
                    >
                      {step.options.map((option) => {
                        const selected = answers[step.field] === option;
                        return (
                          <button
                            key={option}
                            id={
                              option === step.options[0]
                                ? `quiz-${step.field}`
                                : undefined
                            }
                            type="button"
                            aria-pressed={selected}
                            onClick={() => {
                              setAnswer(step.field, option);
                              setIndex(index + 1);
                            }}
                            className={`rounded-tiny border px-4 py-3 text-left text-[15px] transition-colors duration-200 ${
                              selected
                                ? "border-maven bg-lightest-green text-deepest"
                                : "border-black/10 hover:border-maven"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <div className="mt-6">
                        {step.kind === "textarea" ? (
                          <textarea
                            id={`quiz-${step.field}`}
                            rows={4}
                            autoFocus
                            value={answers[step.field]}
                            onChange={(event) =>
                              setAnswer(step.field, event.target.value)
                            }
                            className={inputClass}
                            placeholder={step.placeholder}
                          />
                        ) : (
                          <input
                            id={`quiz-${step.field}`}
                            type={step.kind}
                            inputMode={step.kind === "tel" ? "tel" : undefined}
                            autoComplete={step.autoComplete}
                            required={!step.optional}
                            autoFocus
                            value={answers[step.field]}
                            onChange={(event) =>
                              setAnswer(step.field, event.target.value)
                            }
                            className={inputClass}
                            placeholder={step.placeholder}
                          />
                        )}
                      </div>
                      <button
                        type="submit"
                        className={`mt-6 w-full sm:w-auto ${primaryButtonClass}`}
                      >
                        {isLast
                          ? "Enviar pelo WhatsApp"
                          : step.optional && !answers[step.field]
                            ? "Pular"
                            : "Próximo"}
                      </button>
                    </>
                  )}
                </div>

                {isLast && (
                  <p className="mt-6 text-xs text-muted">
                    Seus dados serão utilizados para entrar em contato sobre sua
                    solicitação de cotação.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

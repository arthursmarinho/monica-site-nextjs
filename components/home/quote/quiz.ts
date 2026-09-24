"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";

export type Field =
  | "perfil"
  | "faixa"
  | "cidade"
  | "necessidade"
  | "nome"
  | "whatsapp";

export type Option = { label: string; hint?: string };

type BaseStep = {
  field: Field;
  question: string;
};

export type ChoiceStep = BaseStep & { kind: "choice"; options: Option[] };

export type InputStep = BaseStep & {
  kind: "text" | "tel" | "textarea";
  placeholder: string;
  optional?: boolean;
  autoComplete?: string;
};

export type Step = ChoiceStep | InputStep;

export const steps: Step[] = [
  {
    field: "perfil",
    question: "Para quem é o plano?",
    kind: "choice",
    options: [
      { label: "Individual", hint: "Só para você" },
      { label: "Familiar", hint: "Você e sua família" },
      { label: "Empresarial", hint: "Sua empresa e colaboradores" },
    ],
  },
  {
    field: "faixa",
    question: "Qual a faixa etária?",
    kind: "choice",
    options: [
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
    ].map((label) => ({ label })),
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

export type Answers = Record<Field, string>;

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

export function useQuiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const step = steps[index];
  const isLast = index === steps.length - 1;

  function setAnswer(field: Field, value: string) {
    setAnswers((current) => ({ ...current, [field]: value }));
  }

  function next() {
    if (!isLast) {
      setIndex(index + 1);
      return;
    }
    const url = whatsappUrl(buildWhatsappMessage(answers));
    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
  }

  function choose(field: Field, value: string) {
    setAnswer(field, value);
    setIndex(index + 1);
  }

  function goTo(target: number) {
    if (target >= 0 && target <= index) setIndex(target);
  }

  function restart() {
    setAnswers(emptyAnswers);
    setIndex(0);
    setSentUrl(null);
  }

  return {
    index,
    step,
    isLast,
    answers,
    sentUrl,
    setAnswer,
    next,
    choose,
    back: () => goTo(index - 1),
    goTo,
    restart,
  };
}

export type Quiz = ReturnType<typeof useQuiz>;

export function submitLabel(quiz: Quiz) {
  if (quiz.isLast) return "Enviar pelo WhatsApp";
  const { step, answers } = quiz;
  if (step.kind !== "choice" && step.optional && !answers[step.field]) {
    return "Pular";
  }
  return "Próximo";
}

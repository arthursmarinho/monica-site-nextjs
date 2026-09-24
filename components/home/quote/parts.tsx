"use client";

import { CheckIcon } from "./icons";
import type { InputStep, Quiz } from "./quiz";

export function DonePanel({ quiz }: { quiz: Quiz }) {
  return (
    <div className="animate-quiz-in rounded-medium bg-white p-6 text-center md:p-10">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-light-green text-maven">
        <CheckIcon className="scale-150" />
      </span>
      <p className="display-heading mt-6 text-3xl md:text-4xl">
        Pronto, <em className="font-serif-italic">obrigada!</em>
      </p>
      <p className="mx-auto mt-4 max-w-[36ch] text-[15px] leading-relaxed text-muted">
        Suas respostas foram abertas no WhatsApp. É só enviar a mensagem que eu
        retorno em seguida.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href={quiz.sentUrl ?? undefined}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-tiny border border-maven bg-maven px-6 py-[0.63rem] text-[1.05rem] font-medium leading-none text-white transition-colors duration-300 hover:border-deep hover:bg-deep"
        >
          Abrir o WhatsApp novamente
        </a>
        <button
          type="button"
          onClick={quiz.restart}
          className="inline-flex items-center justify-center rounded-tiny border border-maven px-6 py-[0.63rem] text-[1.05rem] font-medium leading-none text-maven transition-colors duration-300 hover:bg-maven hover:text-white"
        >
          Recomeçar
        </button>
      </div>
    </div>
  );
}

export function QuizField({
  quiz,
  step,
  id,
  className,
}: {
  quiz: Quiz;
  step: InputStep;
  id: string;
  className: string;
}) {
  const value = quiz.answers[step.field];
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => quiz.setAnswer(step.field, event.target.value);

  if (step.kind === "textarea") {
    return (
      <textarea
        id={id}
        rows={4}
        autoFocus
        value={value}
        onChange={onChange}
        className={className}
        placeholder={step.placeholder}
      />
    );
  }

  return (
    <input
      id={id}
      type={step.kind}
      inputMode={step.kind === "tel" ? "tel" : undefined}
      autoComplete={step.autoComplete}
      required={!step.optional}
      autoFocus
      value={value}
      onChange={onChange}
      className={className}
      placeholder={step.placeholder}
    />
  );
}

export function PrivacyNote() {
  return (
    <p className="mt-4 text-xs text-muted">
      Seus dados serão utilizados para entrar em contato sobre sua solicitação
      de cotação.
    </p>
  );
}

export const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-tiny border border-maven bg-maven px-6 py-[0.8rem] text-[1.05rem] font-medium leading-none text-white transition-colors duration-300 hover:border-deep hover:bg-deep";

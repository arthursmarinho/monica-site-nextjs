"use client";

import { ArrowIcon, CheckIcon, perfilIcons } from "./icons";
import { DonePanel, PrivacyNote, QuizField, primaryButtonClass } from "./parts";
import { steps, submitLabel, type Quiz } from "./quiz";

const inputClass =
  "w-full rounded-small border border-black/10 bg-natural/40 px-5 py-4 text-lg text-deepest placeholder:text-muted focus:border-maven focus:bg-white focus:outline-none";

export function QuoteQuiz({ quiz }: { quiz: Quiz }) {
  const { index, step, answers } = quiz;

  if (quiz.sentUrl) return <DonePanel quiz={quiz} />;

  return (
    <div className="rounded-medium bg-white p-6 md:p-10">
      <ol className="flex items-center" aria-label="Etapas da cotação">
        {steps.map((item, i) => {
          const done = i < index;
          const current = i === index;
          return (
            <li
              key={item.field}
              className="flex flex-1 items-center last:flex-none"
              aria-current={current ? "step" : undefined}
            >
              <button
                type="button"
                disabled={!done}
                onClick={() => quiz.goTo(i)}
                aria-label={`Etapa ${i + 1}: ${item.question}`}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors duration-300 ${
                  done
                    ? "bg-maven text-white hover:bg-deep"
                    : current
                      ? "bg-deepest text-white ring-4 ring-light-green"
                      : "bg-natural text-muted"
                }`}
              >
                {done ? <CheckIcon /> : i + 1}
              </button>
              {i < steps.length - 1 && (
                <span
                  className={`mx-1.5 h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                    done ? "bg-maven" : "bg-natural"
                  }`}
                />
              )}
            </li>
          );
        })}
      </ol>

      <form
        key={step.field}
        className="animate-quiz-in mt-10"
        onSubmit={(event) => {
          event.preventDefault();
          quiz.next();
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-maven">
          Pergunta {index + 1} de {steps.length}
        </p>
        <label
          htmlFor={`cards-${step.field}`}
          className="display-heading mt-3 block text-3xl md:text-4xl"
        >
          {step.question}
        </label>

        {step.kind === "choice" ? (
          step.field === "perfil" ? (
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {step.options.map((option, i) => {
                const Icon = perfilIcons[option.label];
                const selected = answers.perfil === option.label;
                return (
                  <button
                    key={option.label}
                    id={i === 0 ? "cards-perfil" : undefined}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => quiz.choose("perfil", option.label)}
                    className={`group flex flex-col items-start rounded-small border p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-maven hover:shadow-[0_12px_30px_-18px_rgba(1,49,38,0.45)] ${
                      selected
                        ? "border-maven bg-lightest-green"
                        : "border-black/10"
                    }`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-light-green text-maven transition-colors duration-200 group-hover:bg-maven group-hover:text-white">
                      {Icon && <Icon />}
                    </span>
                    <span className="mt-4 text-lg font-medium">
                      {option.label}
                    </span>
                    {option.hint && (
                      <span className="mt-1 text-sm text-muted">
                        {option.hint}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {step.options.map((option, i) => {
                const selected = answers[step.field] === option.label;
                return (
                  <button
                    key={option.label}
                    id={i === 0 ? `cards-${step.field}` : undefined}
                    type="button"
                    autoFocus={i === 0}
                    aria-pressed={selected}
                    onClick={() => quiz.choose(step.field, option.label)}
                    className={`rounded-full border px-4 py-3 text-[15px] transition-colors duration-200 ${
                      selected
                        ? "border-maven bg-maven text-white"
                        : "border-black/10 hover:border-maven hover:bg-lightest-green"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          )
        ) : (
          <div className="mt-8">
            <QuizField
              quiz={quiz}
              step={step}
              id={`cards-${step.field}`}
              className={inputClass}
            />
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-black/5 pt-6">
          {index > 0 ? (
            <button
              type="button"
              onClick={quiz.back}
              className="text-[15px] font-medium text-muted transition-colors hover:text-deepest"
            >
              ← Voltar
            </button>
          ) : (
            <span className="text-sm text-muted">Leva menos de 1 minuto</span>
          )}
          {step.kind !== "choice" && (
            <button type="submit" className={primaryButtonClass}>
              {submitLabel(quiz)}
              <ArrowIcon />
            </button>
          )}
        </div>

        {quiz.isLast && <PrivacyNote />}
      </form>
    </div>
  );
}

const questions = [
  {
    question: "Posso escolher o plano de acordo com meu orçamento?",
    answer:
      "Sim. Durante o atendimento, podemos considerar seu perfil e as opções disponíveis para encontrar alternativas compatíveis com suas necessidades e orçamento.",
  },
  {
    question: "Posso contratar para minha família?",
    answer:
      "Sim. Existem diferentes modalidades e condições de contratação.",
  },
  {
    question: "O corretor me ajuda depois que contrato o plano?",
    answer:
      "Sim. O atendimento continua após a contratação para orientar você em dúvidas relacionadas ao plano e ao acompanhamento da sua contratação.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-site px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-heading text-4xl md:text-5xl lg:text-[3.5rem]">
            FAQ — <em className="font-serif-italic">dúvidas frequentes</em>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-black/10 rounded-medium bg-white">
          {questions.map((item) => (
            <details key={item.question} className="group p-6 md:p-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium marker:content-none">
                {item.question}
                <span className="shrink-0 text-2xl leading-none text-maven transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

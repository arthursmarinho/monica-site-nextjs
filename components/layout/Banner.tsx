const steps = [
  {
    number: "01",
    title: "Você preenche o formulário",
    text: "Conte um pouco sobre o que está procurando.",
  },
  {
    number: "02",
    title: "Eu analiso seu perfil",
    text: "Entendo suas necessidades e apresento as opções disponíveis.",
  },
  {
    number: "03",
    title: "Você recebe as informações",
    text: "Conheça características, condições e diferenças entre as alternativas.",
  },
  {
    number: "04",
    title: "Você escolhe com segurança",
    text: "Após analisar as opções, seguimos com a contratação escolhida.",
  },
  {
    number: "05",
    title: "Continuo ao seu lado",
    text: "O atendimento não termina depois da contratação. Você também conta com suporte posteriormente.",
  },
];

export function Banner() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-site px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-heading text-4xl md:text-5xl lg:text-[3.5rem]">
            Como <em className="font-serif-italic">funciona?</em>
          </h2>
          <p className="mt-6 text-lg font-light md:text-xl">
            Do primeiro contato ao suporte pós-venda.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <p className="display-heading text-4xl text-maven md:text-5xl">
                {step.number}
              </p>
              <p className="mx-auto mt-4 max-w-[22ch] text-[15px] font-medium leading-snug">
                {step.title}
              </p>
              <p className="mx-auto mt-2 max-w-[24ch] text-[15px] leading-relaxed text-muted">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

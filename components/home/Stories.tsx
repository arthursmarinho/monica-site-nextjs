const stories = [
  {
    placeholder: false,
    quote:
      "Atendimento excelente, explicou tudo com muita clareza e me ajudou a encontrar uma opção que fazia sentido para minha família.",
    name: "[Nome do cliente]",
    note: "Exemplo enviado pela cliente — pendente de autorização para publicação como depoimento real.",
  },
  {
    placeholder: true,
    quote: "Espaço reservado para depoimento real de cliente.",
    name: "Aguardando autorização",
    note: null,
  },
  {
    placeholder: true,
    quote: "Espaço reservado para depoimento real de cliente.",
    name: "Aguardando autorização",
    note: null,
  },
];

export function Stories() {
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
            Aqui podemos colocar 3 a 5 depoimentos reais de clientes, com
            autorização para publicação.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {stories.map((story, index) => (
            <article
              key={index}
              className={`rounded-small bg-white p-6 text-deepest ${
                story.placeholder ? "opacity-70" : ""
              }`}
            >
              <p className="text-[15px] leading-relaxed">“{story.quote}”</p>
              <p className="mt-5 font-medium">{story.name}</p>
              {story.note ? (
                <p className="mt-2 text-xs text-muted">{story.note}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

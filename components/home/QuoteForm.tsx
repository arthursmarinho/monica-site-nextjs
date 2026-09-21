"use client";

const WHATSAPP_NUMBER = "5541998403859";

const support = [
  "Atendimento personalizado",
  "Orientação especializada",
  "Suporte antes e depois da contratação",
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

const inputClass =
  "w-full rounded-tiny border border-black/10 bg-white px-4 py-3 text-[15px] text-deepest placeholder:text-muted focus:border-maven focus:outline-none";

function buildWhatsappMessage(data: {
  nome: string;
  whatsapp: string;
  cidade: string;
  perfil: string;
  faixa: string;
  necessidade: string;
}) {
  return `Olá! Gostaria de solicitar uma cotação.

Nome: ${data.nome}
WhatsApp: ${data.whatsapp}
Cidade/UF: ${data.cidade}
Para quem é o plano: ${data.perfil}
Faixa etária: ${data.faixa}
O que procuro em um plano: ${data.necessidade}`;
}

export function QuoteForm() {
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
              Preencha seus dados e entrarei em contato para entender o que
              você procura.
            </p>
            <ul className="mt-8 space-y-3">
              {support.map((item) => (
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
          </div>

          <div className="rounded-medium bg-white p-6 md:p-10">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const data = new FormData(form);

                const message = buildWhatsappMessage({
                  nome: String(data.get("nome") ?? ""),
                  whatsapp: String(data.get("whatsapp") ?? ""),
                  cidade: String(data.get("cidade") ?? ""),
                  perfil: String(data.get("perfil") ?? ""),
                  faixa: String(data.get("faixa-etaria") ?? ""),
                  necessidade: String(data.get("observacoes") ?? ""),
                });

                const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  message
                )}`;

                window.open(url, "_blank", "noopener,noreferrer");
              }}
              className="grid gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-medium">
                  Nome
                  <input
                    type="text"
                    name="nome"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Seu nome completo"
                  />
                </label>

                <label className="grid gap-1.5 text-sm font-medium">
                  WhatsApp
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    className={inputClass}
                    placeholder="(00) 00000-0000"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-medium">
                  Cidade/UF
                  <input
                    type="text"
                    name="cidade"
                    required
                    className={inputClass}
                    placeholder="Ex.: Curitiba/PR"
                  />
                </label>

                <label className="grid gap-1.5 text-sm font-medium">
                  Para quem é o plano?
                  <select
                    name="perfil"
                    required
                    className={inputClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="Individual">Individual</option>
                    <option value="Familiar">Familiar</option>
                    <option value="Empresarial">Empresarial</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-1.5 text-sm font-medium">
                Faixa etária
                <select
                  name="faixa-etaria"
                  required
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {ageRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-1.5 text-sm font-medium">
                O que você busca em um plano?
                <textarea
                  name="observacoes"
                  rows={4}
                  className={inputClass}
                  placeholder="Conte um pouco sobre o que você procura"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-tiny border border-maven bg-maven px-6 py-[0.63rem] text-center text-[1.05rem] font-medium leading-none text-white transition-colors duration-300 hover:border-deep hover:bg-deep"
              >
                Quero minha cotação
              </button>

              <p className="text-xs text-muted">
                Seus dados serão utilizados para entrar em contato sobre sua
                solicitação de cotação.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

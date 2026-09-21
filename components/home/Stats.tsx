import Image from "next/image";

const billAfterAdjustment = 2900;
const adjustmentRate = 0.5;
const annualSavings = 12000;

const billBeforeAdjustment = billAfterAdjustment / (1 + adjustmentRate);
const monthlyIncrease = billAfterAdjustment - billBeforeAdjustment;
const monthlySavings = annualSavings / 12;

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

const stats = [
  {
    value: `${Math.round(adjustmentRate * 100)}%`,
    text: (
      <>
        Reajuste que uma cliente recebeu no{" "}
        <strong className="font-medium">plano de saúde</strong> — e ficou sem
        explicação no site da operadora.
      </>
    ),
  },
  {
    value: formatBRL(billAfterAdjustment),
    text: (
      <>
        Valor da fatura mensal após o aumento de{" "}
        <strong className="font-medium">
          {formatBRL(Math.round(monthlyIncrease))}
        </strong>{" "}
        em relação ao mês anterior (
        {formatBRL(Math.round(billBeforeAdjustment))} →{" "}
        {formatBRL(billAfterAdjustment)}).
      </>
    ),
  },
  {
    value: formatBRL(annualSavings),
    text: (
      <>
        Economia anual gerada com{" "}
        <strong className="font-medium">redução de custo</strong> ao migrar para
        outra operadora — caso real de uma beneficiária.
      </>
    ),
  },
  {
    value: formatBRL(monthlySavings),
    text: (
      <>
        Economia mensal equivalente ({formatBRL(annualSavings)} ÷ 12) — o que
        cabe de volta no{" "}
        <strong className="font-medium">orçamento da família</strong> todo mês.
      </>
    ),
  },
];

export function Stats() {
  return (
    <section id="resultados" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-site px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-heading text-4xl md:text-5xl lg:text-[3.5rem]">
            Reduzindo custos ao{" "}
            <em className="font-serif-italic">melhorar o cuidado</em>
          </h2>
          <p className="mt-6 text-lg font-light md:text-xl">
            Pagando alto no plano? Reajuste sem explicação? Despesa que não cabe
            no orçamento? Os números abaixo saíram de um caso real — e da
            solução.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="display-heading text-5xl text-maven md:text-6xl">
                {stat.value}
              </p>
              <p className="mx-auto mt-4 max-w-[28ch] text-[15px] leading-relaxed">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const differentiators = [
  {
    phase: "Antes da contratação",
    text: "Entendo seu perfil e apresento as opções.",
  },
  {
    phase: "Durante a contratação",
    text: "Oriento você em cada etapa do processo.",
  },
  {
    phase: "Depois da contratação",
    text: "Continuo disponível para ajudar com suas dúvidas relacionadas ao plano.",
  },
];

export function Differentiators() {
  return (
    <section id="diferencial" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-site px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-medium mx-auto lg:mx-0">
            <Image
              src="/monica-2.jpg"
              alt="Monica Gobbetti, corretora de planos de saúde e odontológicos"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>

          <div>
            <h2 className="display-heading max-w-[20ch] text-4xl md:text-5xl lg:text-[3.5rem]">
              Muito além de{" "}
              <em className="font-serif-italic">vender um plano</em>
            </h2>
            <p className="mt-5 max-w-[46ch] text-lg font-light leading-relaxed">
              Meu compromisso é ajudar você a entender o que está contratando e
              oferecer suporte quando precisar.
            </p>

            <div className="mt-8">
              {differentiators.map((item, index) => (
                <div key={item.phase} className="relative flex gap-4 pb-6 last:pb-0">
                  {index < differentiators.length - 1 ? (
                    <span className="absolute left-4 top-8 h-full w-px -translate-x-1/2 bg-maven/20" />
                  ) : null}
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-maven text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div className="pt-0.5">
                    <p className="font-medium text-deepest">{item.phase}</p>
                    <p className="mt-1 max-w-[42ch] text-[15px] leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

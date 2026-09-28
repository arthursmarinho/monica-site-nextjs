import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";

const WHATSAPP_URL = whatsappUrl(
  "Olá, Monica! Vim pelo site e tenho uma dúvida sobre planos de saúde/odontológicos."
);

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function WalletIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="6" width="18" height="14" rx="2.5" />
      <path d="M3 10h18M16 15h2M7 6l8-3 1.5 3" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="8" cy="7" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2 21a6 6 0 0 1 12 0M13.5 21a4.5 4.5 0 0 1 8.5-2" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19a3 3 0 0 1-3 3h-3" />
    </svg>
  );
}

const questions = [
  {
    question: "Posso escolher o plano de acordo com meu orçamento?",
    answer:
      "Sim. Durante o atendimento, podemos considerar seu perfil e as opções disponíveis para encontrar alternativas compatíveis com suas necessidades e orçamento.",
    Icon: WalletIcon,
  },
  {
    question: "Posso contratar para minha família?",
    answer:
      "Sim. Existem diferentes modalidades e condições de contratação.",
    Icon: FamilyIcon,
  },
  {
    question: "O corretor me ajuda depois que contrato o plano?",
    answer:
      "Sim. O atendimento continua após a contratação para orientar você em dúvidas relacionadas ao plano e ao acompanhamento da sua contratação.",
    Icon: SupportIcon,
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

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {questions.map(({ question, answer, Icon }) => (
            <li
              key={question}
              className="group flex flex-col rounded-medium bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(1,49,38,0.45)] md:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-light-green text-maven transition-colors duration-300 group-hover:bg-maven group-hover:text-white">
                <Icon />
              </span>
              <h3 className="mt-6 text-xl font-medium leading-snug">
                {question}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {answer}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-medium bg-light-green px-7 py-6 sm:flex-row sm:items-center md:px-8">
          <p className="text-lg">
            Não encontrou sua dúvida?{" "}
            <span className="text-deep/70">Pergunte direto para mim.</span>
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-tiny border border-maven bg-maven px-5 py-[0.7rem] text-[15px] font-medium leading-none text-white transition-colors duration-300 hover:border-deep hover:bg-deep"
          >
            <WhatsAppIcon />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

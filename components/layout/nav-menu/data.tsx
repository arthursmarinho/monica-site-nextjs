import { media } from "@/lib/media";

export const services = [
  {
    href: "#por-que-corretor",
    title: "Por que um corretor",
    text: "Orientação para escolher com segurança",
    image: media.navGlp1,
  },
  {
    href: "#como-funciona",
    title: "Como funciona",
    text: "Do primeiro contato ao pós-venda",
    image: media.navHormone,
  },
  {
    href: "#perfil",
    title: "Perfil",
    text: "Opções para você, sua família ou empresa",
    image: media.navVirtual,
  },
  {
    href: "#faq",
    title: "FAQ",
    text: "Respostas para as dúvidas mais comuns",
    image: media.navEmployer,
  },
];

export type MenuProps = { onSelect: (href: string) => void };

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg {...iconProps} width={16} height={16} strokeWidth={2} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

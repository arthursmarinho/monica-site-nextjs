import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";

const columns = [
  {
    title: "Sobre o atendimento",
    links: [
      { href: "#por-que-corretor", label: "Por que um corretor" },
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#diferencial", label: "Diferencial" },
    ],
  },
  {
    title: "Página",
    links: [
      { href: "#resultados", label: "Resultados" },
      { href: "#perfil", label: "Perfil" },
      { href: "#faq", label: "FAQ" },
      { href: "#cotacao", label: "Cotação" },
    ],
  },
];

const WHATSAPP_URL = whatsappUrl(
  "Olá! Vim pelo site e gostaria de saber mais sobre os planos de saúde e odontológicos."
);

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "shrink-0",
};

function PinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="p-3">
      <div className="relative overflow-hidden rounded-medium bg-deepest text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-maven/35 blur-3xl"
        />
        <div className="container-site relative px-4 pt-14 pb-8 md:px-10 md:pt-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)]">
            <div>
              {/* O PNG do logo é quadrado com bastante área transparente em
                  cima e embaixo; o object-cover recorta e deixa só a assinatura. */}
              <div className="relative -ml-2 h-20 w-44">
                <Image
                  src="/logo.png"
                  alt="Monica Gobbetti"
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 max-w-[30ch] text-[15px] font-light leading-relaxed text-white/70">
                Corretora de planos de saúde e odontológicos. Atendimento
                personalizado em todo o Brasil.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-tiny bg-electric px-5 py-[0.7rem] text-[15px] font-medium leading-none text-deepest transition-colors duration-300 hover:bg-fresh"
              >
                <WhatsAppIcon />
                Falar pelo WhatsApp
              </a>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-electric">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-white/75 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-electric">
                Contato
              </h3>
              <ul className="space-y-4 text-[15px] text-white/75">
                <li className="flex gap-3">
                  <span className="mt-0.5 text-electric">
                    <PinIcon />
                  </span>
                  R. Santa Catarina, 65 - Conj 712B - Água Verde, Curitiba - PR,
                  81620-100
                </li>
                <li>
                  <a
                    href="tel:+5541998403859"
                    className="flex items-center gap-3 transition hover:text-white"
                  >
                    <span className="text-electric">
                      <PhoneIcon />
                    </span>
                    (41) 99840-3859
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Monica Gobbetti. Todos os direitos reservados.</p>
            <p>Atendimento em todo o Brasil</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

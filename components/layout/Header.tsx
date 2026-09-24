"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { media } from "@/lib/media";
import { whatsappUrl } from "@/lib/whatsapp";

const WHATSAPP_URL = whatsappUrl(
  "Olá! Vim pelo site e gostaria de saber mais sobre os planos de saúde e odontológicos."
);

const services = [
  {
    href: "#por-que-corretor",
    title: "Por que um corretor",
    image: media.navGlp1,
  },
  {
    href: "#como-funciona",
    title: "Como funciona",
    image: media.navHormone,
  },
  {
    href: "#perfil",
    title: "Perfil",
    image: media.navVirtual,
  },
  {
    href: "#faq",
    title: "FAQ",
    image: media.navEmployer,
  },
];

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      className={`ml-1.5 opacity-70 transition ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  return <HeaderBar key={pathname} />;
}

function HeaderBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = scrolled || mobileOpen;

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`transition-colors duration-300 ${
        light ? "bg-natural/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Image
            src={light ? "/logo-dark.png" : "/logo.png"}
            alt="Monica Gobbetti"
            width={160}
            height={40}
            className="h-30 w-30"
            priority
          />
        </Link>

        <nav
          className={`hidden shrink-0 flex-nowrap items-center gap-6 text-[15px] font-medium xl:flex ${
            light ? "text-deepest" : "text-white"
          }`}
        >
          <NavItem
            label="Sobre o atendimento"
            href="#por-que-corretor"
            open={openMenu === "services"}
            onOpen={() => setOpenMenu("services")}
            onClose={() => setOpenMenu(null)}
          >
            <div className="grid w-[720px] grid-cols-2 gap-3 p-4">
              {services.map((card) => (
                <a
                  key={card.href}
                  href={card.href}
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenMenu(null);
                    scrollToSection(card.href);
                  }}
                  className="relative flex min-h-[150px] overflow-hidden rounded-small text-white"
                >
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10 mt-auto p-4">
                    <div className="font-serif-italic text-xl leading-tight">
                      {card.title}
                    </div>
                    <div className="mt-1 text-xs text-white/80">
                      Saiba mais
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </NavItem>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-tiny border border-maven bg-maven px-6 py-[0.63rem] text-center text-[1.05rem] font-medium leading-none text-white transition-colors duration-300 hover:border-deep hover:bg-deep"
          >
            <WhatsAppIcon />
            Falar pelo WhatsApp
          </a>
        </div>

        <button
          type="button"
          className={`xl:hidden ${light ? "text-deepest" : "text-white"}`}
          aria-label="Abrir menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-current" />

          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {mobileOpen ? (
        <div className="max-h-[80vh] overflow-y-auto border-t border-black/10 bg-natural px-5 py-6 xl:hidden">
          <div className="flex flex-col gap-4 text-lg text-deepest">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Sobre o atendimento
            </span>
            {services.map((card) => (
              <a
                key={card.href}
                href={card.href}
                onClick={(event) => {
                  event.preventDefault();
                  closeMobile();
                  scrollToSection(card.href);
                }}
              >
                {card.title}
              </a>
            ))}
            <div className="mt-4 flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="inline-flex items-center justify-center gap-2 rounded-tiny border border-maven bg-maven px-6 py-[0.63rem] text-[1.05rem] font-medium leading-none text-white transition-colors hover:border-deep hover:bg-deep"
              >
                <WhatsAppIcon />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function scrollToSection(hash: string) {
  const id = hash.replace("#", "");
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", hash);
}

function NavItem({
  label,
  href,
  open,
  onOpen,
  onClose,
  children,
}: {
  label: string;
  href: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <a
        href={href}
        onClick={(event) => {
          event.preventDefault();
          onClose();
          scrollToSection(href);
        }}
        className="inline-flex items-center whitespace-nowrap hover:opacity-70"
      >
        {label}
        <Chevron open={open} />
      </a>
      {open ? (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
          <div className="overflow-hidden rounded-small bg-white shadow-[0_20px_50px_rgba(1,49,38,0.16)]">
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
}

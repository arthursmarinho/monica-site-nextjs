"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { media } from "@/lib/media";

const services = [
  {
    href: "#planos-de-saude",
    title: "Planos de Saúde",
    caption: "Personalizados para cada beneficiário",
    image: media.navGlp1,
  },
  {
    href: "#revisao-de-contratos",
    title: "Revisão de contratos",
    caption: "Troca de operadora sem prejuízo, conforme a ANS",
    image: media.navHormone,
  },
  {
    href: "#planos-odontologicos",
    title: "Planos odontológicos",
    caption: "Cobertura imediata sem carência",
    image: media.navVirtual,
  },
  {
    href: "#seguro-de-vida",
    title: "Seguro de vida",
    caption: "Proteção básica ou completa para sua família",
    image: media.navEmployer,
  },
];

const navLinks = [
  { href: "#resultados", label: "Resultados" },
  { href: "#publico", label: "Público" },
  { href: "#contato", label: "Contato" },
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
            label="Serviços"
            href="#programas"
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
                      {card.caption}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </NavItem>

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Button href="#contato" className="whitespace-nowrap">
            Agendar demonstração
          </Button>
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
            <Link
              href="#programas"
              onClick={closeMobile}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-muted"
            >
              Serviços
            </Link>
            {services.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                onClick={closeMobile}
              >
                {card.title}
              </Link>
            ))}
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex gap-3">
              <Link
                href="#contato"
                onClick={closeMobile}
                className="inline-flex items-center justify-center rounded-tiny border border-maven bg-maven px-6 py-[0.63rem] text-[1.05rem] font-medium leading-none text-white transition-colors hover:border-deep hover:bg-deep"
              >
                Agendar demonstração
              </Link>
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
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
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

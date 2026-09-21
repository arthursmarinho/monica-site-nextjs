import Link from "next/link";

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

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-natural pt-16 pb-8">
      <div className="container-site px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold tracking-wide">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-deepest/80 transition hover:text-maven"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="text-[15px] text-deepest/80">
                R. Santa Catarina, 65 - Conj 712B - Água Verde, Curitiba - PR,
                81620-100
              </li>
              <li>
                <a
                  href="tel:+5541998403859"
                  className="text-[15px] text-deepest/80 transition hover:text-maven"
                >
                  (41) 99840-3859
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-black/10 pt-6 text-sm text-muted">
          <p>© 2026 Monica Gobbetti. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

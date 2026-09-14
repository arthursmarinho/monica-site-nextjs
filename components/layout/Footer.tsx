import Link from "next/link";

const columns = [
  {
    title: "Serviços",
    links: [
      { href: "#planos-de-saude", label: "Planos de Saúde" },
      {
        href: "#revisao-de-contratos",
        label: "Revisão de contratos ativos de planos de Saúde",
      },
      { href: "#planos-odontologicos", label: "Planos odontológicos" },
      { href: "#seguro-de-vida", label: "Seguro de vida" },
    ],
  },
  {
    title: "Página",
    links: [
      { href: "#programas", label: "Nossos planos" },
      { href: "#resultados", label: "Resultados" },
      { href: "#publico", label: "Público" },
      { href: "#contato", label: "Contato" },
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
        </div>

        <div className="mt-16 border-t border-black/10 pt-6 text-sm text-muted">
          <p>© 2026 Monica Gobbetti. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

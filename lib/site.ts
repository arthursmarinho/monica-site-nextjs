import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

// Domínio público do site. Defina NEXT_PUBLIC_SITE_URL no ambiente de produção
// caso o domínio seja diferente do padrão abaixo.
const url = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.monicagobbeti.com.br"
).replace(/\/$/, "");

export const site = {
  url,
  name: "Monica Gobbetti",
  title: "Monica Gobbetti | Corretora de Planos de Saúde e Odontológicos em Curitiba",
  shortDescription: "Corretora de planos de saúde e odontológicos",
  description:
    "Corretora de planos de saúde e odontológicos em Curitiba. Compare Unimed, Amil, Bradesco, SulAmérica e mais, com atendimento do primeiro contato ao pós-venda.",
  locale: "pt_BR",
  phone: `+${WHATSAPP_NUMBER}`,
  phoneDisplay: "(41) 99840-3859",
  address: {
    street: "R. Santa Catarina, 65 - Conj 712B",
    district: "Água Verde",
    city: "Curitiba",
    region: "PR",
    postalCode: "81620-100",
    country: "BR",
  },
  insurers: [
    "Unimed",
    "Amil",
    "Bradesco Saúde",
    "SulAmérica",
    "Hapvida",
    "NotreDame Intermédica",
    "MedSênior",
    "Clinipam",
    "Odontoprev",
  ],
  colors: {
    natural: "#ede9e3",
    deepest: "#013126",
    maven: "#028c74",
    electric: "#58eda2",
  },
} as const;

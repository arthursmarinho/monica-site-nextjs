import { questions } from "@/components/home/Faq";
import { site } from "@/lib/site";

const businessId = `${site.url}/#corretora`;
const personId = `${site.url}/#monica-gobbetti`;
const websiteId = `${site.url}/#website`;

const graph = [
  {
    "@type": "InsuranceAgency",
    "@id": businessId,
    name: site.name,
    alternateName: `${site.name} — ${site.shortDescription}`,
    description: site.description,
    url: site.url,
    logo: `${site.url}/logo-dark.png`,
    image: [`${site.url}/opengraph-image`, `${site.url}/monica-2.jpg`],
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.region}, ${site.address.postalCode}`,
    )}`,
    areaServed: [
      { "@type": "City", name: "Curitiba" },
      { "@type": "State", name: "Paraná" },
      { "@type": "Country", name: "Brasil" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      availableLanguage: "Portuguese",
      areaServed: "BR",
    },
    founder: { "@id": personId },
    knowsAbout: [
      "Planos de saúde",
      "Planos odontológicos",
      "Portabilidade de planos de saúde",
      ...site.insurers,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planos de saúde e odontológicos",
      itemListElement: [
        "Plano de saúde individual",
        "Plano de saúde por adesão",
        "Plano de saúde familiar",
        "Plano de saúde empresarial",
        "Plano de saúde para a melhor idade",
        "Plano odontológico",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  },
  {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    jobTitle: "Corretora de planos de saúde e odontológicos",
    image: `${site.url}/monica-2.jpg`,
    worksFor: { "@id": businessId },
    url: site.url,
  },
  {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "pt-BR",
    publisher: { "@id": businessId },
  },
  {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    isPartOf: { "@id": websiteId },
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
];

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}

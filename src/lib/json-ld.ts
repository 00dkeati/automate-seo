import { siteConfig } from "@/config/site";

export function generateJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "description": siteConfig.description,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.whatsapp,
      "contactType": "customer service",
      "email": siteConfig.contact.email,
    },
    "sameAs": [
      siteConfig.links.twitter,
      siteConfig.links.github,
    ],
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Programmatic SEO Site Build",
    "description": siteConfig.description,
    "brand": {
      "@type": "Brand",
      "name": siteConfig.name,
    },
    "offers": {
      "@type": "Offer",
      "price": siteConfig.pricing.basePrice,
      "priceCurrency": siteConfig.pricing.currency,
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split("T")[0],
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return {
    organization,
    product,
    faqPage,
  };
}

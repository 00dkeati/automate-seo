import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { ukLocations, seoServiceTypes, serviceComparisonPairs } from "@/data/programmatic-seo";
import { competitorKeywords, pricingKeywords, faqKeywords } from "@/data/additional-programmatic-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  // Static routes
  const staticRoutes = [
    "",
    "/results",
    "/pricing",
    "/check-availability",
    "/thank-you",
    "/privacy",
    "/terms",
    "/seo-services",
  ];

  // Generate programmatic routes
  const programmaticRoutes: string[] = [];

  // Location-only pages: /seo-services/london
  ukLocations.forEach((location) => {
    programmaticRoutes.push(`/seo-services/${location}`);
  });

  // Service + Location pages: /seo-services/local-seo/london
  seoServiceTypes.forEach((service) => {
    ukLocations.forEach((location) => {
      programmaticRoutes.push(`/seo-services/${service}/${location}`);
    });
  });

  // Competitor + Location pages: /competitors/seo-agency/london
  competitorKeywords.forEach((competitor) => {
    ukLocations.forEach((location) => {
      programmaticRoutes.push(`/competitors/${competitor}/${location}`);
    });
  });

  // Pricing + Location pages: /pricing/seo-cost/london
  pricingKeywords.forEach((pricing) => {
    ukLocations.forEach((location) => {
      programmaticRoutes.push(`/pricing/${pricing}/${location}`);
    });
  });

  // FAQ + Location pages: /faq/seo-cost/london
  faqKeywords.forEach((faq) => {
    ukLocations.forEach((location) => {
      programmaticRoutes.push(`/faq/${faq}/${location}`);
    });
  });

  // FAQ + Service + Location pages: /faq/local-seo/london
  faqKeywords.forEach((faq) => {
    seoServiceTypes.forEach((service) => {
      ukLocations.forEach((location) => {
        programmaticRoutes.push(`/faq/${faq}/${service}/${location}`);
      });
    });
  });

  // Service comparison pages: /compare/local-seo-vs-technical-seo/london
  serviceComparisonPairs.forEach(([service1, service2]) => {
    ukLocations.forEach((location) => {
      programmaticRoutes.push(`/compare/${service1}-vs-${service2}/${location}`);
    });
  });

  // Combine all routes
  const allRoutes = [...staticRoutes, ...programmaticRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

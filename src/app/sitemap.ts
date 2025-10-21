import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { ukLocations, seoServiceTypes } from "@/data/programmatic-seo";

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

  // Combine all routes
  const allRoutes = [...staticRoutes, ...programmaticRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

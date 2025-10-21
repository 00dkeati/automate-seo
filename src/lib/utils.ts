import { siteConfig } from "@/config/site";

export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

export function createWhatsAppLink(message?: string) {
  const defaultMessage = "Hi AutomateSEO.co, I'd like to check availability for my town";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^\d]/g, "")}?text=${encodedMessage}`;
}

export function createWhatsAppLinkWithData(data: {
  name?: string;
  business?: string;
  town?: string;
  niche?: string;
}) {
  const message = `Hi AutomateSEO.co,

I'm interested in your programmatic SEO service.

Name: ${data.name || "Not provided"}
Business: ${data.business || "Not provided"}
Town: ${data.town || "Not provided"}
Niche: ${data.niche || "Not provided"}

Please let me know about availability and next steps.`;

  return createWhatsAppLink(message);
}

export function parseUtmParams() {
  if (typeof window === "undefined") return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get("utm_source"),
    utm_medium: urlParams.get("utm_medium"), 
    utm_campaign: urlParams.get("utm_campaign"),
    utm_term: urlParams.get("utm_term"),
    utm_content: urlParams.get("utm_content"),
  };
}

export function formatPrice(amount: number, currency = "GBP") {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
  }).format(amount);
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
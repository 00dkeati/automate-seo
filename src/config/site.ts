export const siteConfig = {
  name: "AutomateSEO.co",
  description: "We build you a 1,000+ page SEO engine that ranks for every 'service + town' search. One-off £1,000 + VAT.",
  url: "https://www.automateseo.co",
  ogImage: "/og-default.jpg",
  links: {
    twitter: "https://twitter.com/automateseo",
    github: "https://github.com/automateseo",
  },
  contact: {
    email: "sales@automateseo.co",
    whatsapp: process.env.WHATSAPP_NUMBER || "+447810666662",
    bookingUrl: process.env.BOOKING_URL || "https://calendly.com/deankeatingpf/30min",
  },
  pricing: {
    basePrice: 1000,
    currency: "GBP",
    vatRate: 0.2,
  },
  stats: {
    pagesPerSite: "1,200+",
    daysToRank: "7",
    price: "£1,000",
  },
  features: [
    "1,000+ pages generated with clean URL structure",
    "Structured data & internal linking built-in", 
    "Search Console + indexation support",
    "You own the site. No monthly fees.",
  ],
  steps: [
    {
      title: "We map every keyword your customers search",
      description: "service + town, long-tail",
    },
    {
      title: "We build 1,000+ pages with on-page SEO & structured data",
      description: "Clean URLs, internal linking, schema markup",
    },
    {
      title: "We deploy, index, and monitor — you start getting found",
      description: "Search Console setup, indexation support",
    },
  ],
  faqs: [
    {
      question: "What is programmatic SEO in plain English?",
      answer: "We automatically create hundreds of pages targeting specific keyword combinations (like 'plumber in Manchester' or 'dentist in Birmingham'). Instead of manually writing each page, we use templates and data to generate them at scale.",
    },
    {
      question: "How fast can we rank?",
      answer: "Most sites start ranking within 7 days for long-tail keywords. High-volume terms may take 2-4 weeks. Our case study site Waterlooville.co ranked for multiple keywords within a week.",
    },
    {
      question: "What do you need from me?",
      answer: "Just your business details, target town/city, and service category. We handle everything else - keyword research, site building, deployment, and initial optimization.",
    },
    {
      question: "Can this work for non-local niches?",
      answer: "Yes! While we specialize in local SEO, the same approach works for any niche where you can create location-based or category-based pages (e.g., 'best restaurants in [city]', 'hotels near [landmark]').",
    },
    {
      question: "Who owns the site?",
      answer: "You do. We build it on your domain, hand over full access, and you own all the content, rankings, and traffic. No monthly fees or ongoing commitments.",
    },
    {
      question: "Is there any ongoing cost?",
      answer: "No. It's a one-off £1,000 + VAT payment. You own the site completely. Optional add-ons like logo integration or content tune-ups are available but not required.",
    },
    {
      question: "What if I already have a domain?",
      answer: "Perfect! We can build the new site on your existing domain or help you set up a subdomain. We'll work with your current setup to maximize your SEO potential.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

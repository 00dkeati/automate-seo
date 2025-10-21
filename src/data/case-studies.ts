export const caseStudies = [
  {
    id: "waterlooville",
    title: "Waterlooville.co",
    niche: "Local Services",
    town: "Waterlooville",
    daysToRank: 7,
    keywordsRanking: 10,
    pagesIndexed: 1200,
    description: "Ranked for multiple high-intent local terms within a week",
    highlights: [
      "Ranked for 10+ high-intent local terms",
      "1,200+ pages indexed", 
      "Zero monthly fees",
    ],
  },
  {
    id: "manchester-plumbers",
    title: "Manchester Plumbers Hub",
    niche: "Plumbing Services",
    town: "Manchester",
    daysToRank: 5,
    keywordsRanking: 15,
    pagesIndexed: 1100,
    description: "Emergency plumbing services dominating local search",
    highlights: [
      "15+ emergency plumbing keywords ranking",
      "1,100+ service pages",
      "First page for 'emergency plumber Manchester'",
    ],
  },
  {
    id: "birmingham-dentists",
    title: "Birmingham Dental Network",
    niche: "Dental Services", 
    town: "Birmingham",
    daysToRank: 10,
    keywordsRanking: 12,
    pagesIndexed: 1300,
    description: "Comprehensive dental services coverage across Birmingham",
    highlights: [
      "12+ dental service keywords",
      "1,300+ location-specific pages",
      "Top 3 for 'dentist near me Birmingham'",
    ],
  },
] as const;

export const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah Mitchell",
    business: "Mitchell Plumbing Services",
    town: "Waterlooville",
    quote: "Within a week of launch, we were getting calls from customers who found us on Google. The site practically runs itself now.",
    rating: 5,
  },
  {
    id: "testimonial-2", 
    name: "James Chen",
    business: "Chen Dental Practice",
    town: "Birmingham",
    quote: "Best investment we've made. We went from invisible online to dominating local dental searches in under two weeks.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Emma Thompson",
    business: "Thompson Legal Services", 
    town: "Manchester",
    quote: "The programmatic approach meant we could target every legal service in every Manchester suburb. Incredible reach.",
    rating: 5,
  },
] as const;

export type CaseStudy = typeof caseStudies[number];
export type Testimonial = typeof testimonials[number];

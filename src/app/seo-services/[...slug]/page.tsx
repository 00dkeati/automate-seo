import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/site/container";
import { CtaStrip } from "@/components/site/cta-strip";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/utils";
import { ukLocations, locationDisplayNames, seoServiceTypes, serviceDisplayNames } from "@/data/programmatic-seo";

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const params: Array<{ slug: string[] }> = [];

  // Location-only pages: /seo-services/london
  ukLocations.forEach((location) => {
    params.push({
      slug: [location],
    });
  });

  // Service + Location pages: /seo-services/local-seo/london
  seoServiceTypes.forEach((service) => {
    ukLocations.forEach((location) => {
      params.push({
        slug: [service, location],
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  
  if (slug.length === 1) {
    // Location-only page: /seo-services/london
    const location = slug[0];
    const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
    
    if (!locationName) {
      return {
        title: "SEO Services",
        description: "Professional SEO services across the UK.",
      };
    }

    return {
      title: `Best SEO Services in ${locationName}`,
      description: `Professional SEO services in ${locationName}. We help businesses in ${locationName} rank higher on Google with our proven programmatic SEO approach.`,
      alternates: {
        canonical: `${siteConfig.url}/seo-services/${location}`,
      },
      openGraph: {
        title: `Best SEO Services in ${locationName}`,
        description: `Professional SEO services in ${locationName}. We help businesses in ${locationName} rank higher on Google with our proven programmatic SEO approach.`,
        url: `${siteConfig.url}/seo-services/${location}`,
      },
      twitter: {
        title: `Best SEO Services in ${locationName}`,
        description: `Professional SEO services in ${locationName}. We help businesses in ${locationName} rank higher on Google with our proven programmatic SEO approach.`,
      },
    };
  } else if (slug.length === 2) {
    // Service + Location page: /seo-services/local-seo/london
    const [service, location] = slug;
    const serviceName = serviceDisplayNames[service as keyof typeof serviceDisplayNames];
    const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
    
    if (!serviceName || !locationName) {
      return {
        title: "SEO Services",
        description: "Professional SEO services across the UK.",
      };
    }

    return {
      title: `${serviceName} Services in ${locationName}`,
      description: `Expert ${serviceName} services for businesses in ${locationName}. Boost your online visibility and attract more local customers with our programmatic SEO solutions.`,
      alternates: {
        canonical: `${siteConfig.url}/seo-services/${service}/${location}`,
      },
      openGraph: {
        title: `${serviceName} Services in ${locationName}`,
        description: `Expert ${serviceName} services for businesses in ${locationName}. Boost your online visibility and attract more local customers with our programmatic SEO solutions.`,
        url: `${siteConfig.url}/seo-services/${service}/${location}`,
      },
      twitter: {
        title: `${serviceName} Services in ${locationName}`,
        description: `Expert ${serviceName} services for businesses in ${locationName}. Boost your online visibility and attract more local customers with our programmatic SEO solutions.`,
      },
    };
  }

  return {
    title: "SEO Services",
    description: "Professional SEO services across the UK.",
  };
}

export default function SeoServicesPage({ params }: PageProps) {
  const { slug } = params;
  
  if (slug.length === 1) {
    // Location-only page: /seo-services/london
    const location = slug[0];
    const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];

    if (!locationName) {
      notFound();
    }

    return (
      <>
        <Section className="bg-gradient-to-b from-background to-muted/20">
          <Container>
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Dominate Google in {locationName} with Programmatic SEO
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We build you a 1,000+ page SEO engine that ranks for every &apos;service + {locationName}&apos; search. One-off £1,000 + VAT.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    Message us on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <a href={siteConfig.contact.bookingUrl} target="_blank" rel="noopener noreferrer">
                    Book a 15-min call
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground justify-center">
                <span>✓ Local SEO Experts</span>
                <span>✓ No Monthly Fees</span>
                <span>✓ Built for {locationName} Businesses</span>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why {locationName} Businesses Need Programmatic SEO
              </h2>
              <p className="text-lg text-muted-foreground">
                In a competitive market like {locationName}, simply having a website isn&apos;t enough. You need to be visible for every specific search your potential customers are making. Our programmatic SEO solution creates thousands of targeted pages, ensuring you capture a massive share of local search traffic.
              </p>
              <ul className="space-y-3 text-left text-lg">
                <li className="flex items-center gap-3">
                  <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                  <span>Rank for hundreds of &apos;service + {locationName}&apos; keywords</span>
                </li>
                <li className="flex items-center gap-3">
                  <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                  <span>Attract high-intent local customers actively searching for your services</span>
                </li>
                <li className="flex items-center gap-3">
                  <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                  <span>Build a digital asset that continuously grows your organic traffic</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link href="/check-availability">Check Your Town&apos;s Availability</Link>
              </Button>
            </div>
          </Container>
        </Section>

        <CtaStrip />
      </>
    );
  } else if (slug.length === 2) {
    // Service + Location page: /seo-services/local-seo/london
    const [service, location] = slug;
    const serviceName = serviceDisplayNames[service as keyof typeof serviceDisplayNames];
    const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];

    if (!serviceName || !locationName) {
      notFound();
    }

    return (
      <>
        <Section className="bg-gradient-to-b from-background to-muted/20">
          <Container>
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  {serviceName} Services in {locationName}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We help businesses in {locationName} get found for {serviceName.toLowerCase()} searches with our programmatic SEO engine.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    Message us on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <a href={siteConfig.contact.bookingUrl} target="_blank" rel="noopener noreferrer">
                    Book a 15-min call
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground justify-center">
                <span>✓ {serviceName} Experts</span>
                <span>✓ Local Focus</span>
                <span>✓ Proven Results</span>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Boost Your {serviceName} Business in {locationName}
              </h2>
              <p className="text-lg text-muted-foreground">
                Our programmatic SEO approach is tailored to help {serviceName.toLowerCase()} businesses in {locationName} stand out. We create a vast network of SEO-optimized pages, targeting every relevant keyword combination to drive qualified local leads to your business.
              </p>
              <ul className="space-y-3 text-left text-lg">
                <li className="flex items-center gap-3">
                  <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                  <span>Capture specific &apos;{serviceName.toLowerCase()} {locationName}&apos; searches</span>
                </li>
                <li className="flex items-center gap-3">
                  <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                  <span>Increase organic traffic from high-intent customers</span>
                </li>
                <li className="flex items-center gap-3">
                  <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                  <span>Establish your authority as the go-to {serviceName.toLowerCase()} provider in {locationName}</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link href="/check-availability">Check Your Town&apos;s Availability</Link>
              </Button>
            </div>
          </Container>
        </Section>

        <CtaStrip />
      </>
    );
  }

  notFound();
}
// Force rebuild Thu Oct 23 13:34:44 BST 2025

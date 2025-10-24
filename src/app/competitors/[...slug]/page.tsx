import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/site/container";
import { CtaStrip } from "@/components/site/cta-strip";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/utils";
import { ukLocations, locationDisplayNames, competitorKeywords, competitorDisplayNames } from "@/data/additional-programmatic-seo";

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const params: Array<{ slug: string[] }> = [];

  // Competitor + Location pages: /competitors/seo-agency/london
  competitorKeywords.forEach((competitor) => {
    ukLocations.forEach((location) => {
      params.push({
        slug: [competitor, location],
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  
  if (slug.length !== 2) {
    return {
      title: "SEO Services",
      description: "Professional SEO services for your business.",
    };
  }

  const [competitor, location] = slug;
  const competitorName = competitorDisplayNames[competitor as keyof typeof competitorDisplayNames];
  const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
  
  if (!competitorName || !locationName) {
    return {
      title: "SEO Services",
      description: "Professional SEO services for your business.",
    };
  }

  return {
    title: `Best ${competitorName} in ${locationName} | AutomateSEO.co`,
    description: `Looking for ${competitorName} in ${locationName}? We offer superior programmatic SEO services that outperform traditional agencies. Get 1,000+ pages ranking for your business.`,
    keywords: `${competitorName.toLowerCase()}, ${locationName}, SEO services, programmatic SEO, local SEO, digital marketing`,
    openGraph: {
      title: `Best ${competitorName} in ${locationName} | AutomateSEO.co`,
      description: `Looking for ${competitorName} in ${locationName}? We offer superior programmatic SEO services that outperform traditional agencies.`,
      url: `https://www.automateseo.co/competitors/${competitor}/${location}`,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `Best ${competitorName} in ${locationName} | AutomateSEO.co`,
      description: `Looking for ${competitorName} in ${locationName}? We offer superior programmatic SEO services that outperform traditional agencies.`,
    },
  };
}

export default function CompetitorLocationPage({ params }: PageProps) {
  const { slug } = params;
  
  if (slug.length !== 2) {
    notFound();
  }

  const [competitor, location] = slug;
  const competitorName = competitorDisplayNames[competitor as keyof typeof competitorDisplayNames];
  const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];

  if (!competitorName || !locationName) {
    notFound();
  }

  return (
    <>
      <PageViewTracker contentType="competitor-location-page" contentId={`${competitor}-${location}`} />
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Best {competitorName} in {locationName}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Looking for {competitorName.toLowerCase()} in {locationName}? We offer superior programmatic SEO services that outperform traditional agencies.
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
              <span>✓ Better Than Traditional Agencies</span>
              <span>✓ 1,000+ Pages</span>
              <span>✓ One-off Payment</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose Us Over Traditional {competitorName} in {locationName}?
            </h2>
            <p className="text-lg text-muted-foreground">
              Most {competitorName.toLowerCase()} in {locationName} offer the same old approach: monthly fees, limited pages, and slow results. We&apos;re different.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-600">Traditional {competitorName}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Monthly fees (£500-£2000+)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Limited to 10-50 pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Slow results (6-12 months)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Generic templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Ongoing dependency</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-600">AutomateSEO.co</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>One-off payment (£1,000)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>1,000+ targeted pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Fast results (2-4 weeks)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Custom content for each page</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>You own everything</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              How Our Programmatic SEO Works in {locationName}
            </h2>
            <p className="text-lg text-muted-foreground">
              While other {competitorName.toLowerCase()} in {locationName} create a few pages and hope for the best, we build a comprehensive SEO engine.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold">Target Every Search</h3>
                <p className="text-muted-foreground">
                  We create pages for every &quot;{service} in {locationName}&quot; search your customers make.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold">Dominate Results</h3>
                <p className="text-muted-foreground">
                  With 1,000+ pages, you&apos;ll appear multiple times on page 1 for every relevant search.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold">Own Your Success</h3>
                <p className="text-muted-foreground">
                  No monthly fees. No ongoing dependency. You own the entire SEO engine.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaStrip />
    </>
  );
}

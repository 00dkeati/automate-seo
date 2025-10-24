import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/site/container";
import { CtaStrip } from "@/components/site/cta-strip";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/utils";
import { ukLocations, locationDisplayNames, pricingKeywords, pricingDisplayNames } from "@/data/additional-programmatic-seo";

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const params: Array<{ slug: string[] }> = [];

  // Pricing + Location pages: /pricing/seo-cost/london
  pricingKeywords.forEach((pricing) => {
    ukLocations.forEach((location) => {
      params.push({
        slug: [pricing, location],
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  
  if (slug.length !== 2) {
    return {
      title: "SEO Pricing",
      description: "Transparent SEO pricing for your business.",
    };
  }

  const [pricing, location] = slug;
  const pricingName = pricingDisplayNames[pricing as keyof typeof pricingDisplayNames];
  const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
  
  if (!pricingName || !locationName) {
    return {
      title: "SEO Pricing",
      description: "Transparent SEO pricing for your business.",
    };
  }

  return {
    title: `${pricingName} in ${locationName} | AutomateSEO.co`,
    description: `Transparent ${pricingName.toLowerCase()} in ${locationName}. One-off £1,000 payment for 1,000+ SEO pages. No monthly fees, no ongoing costs.`,
    keywords: `${pricingName.toLowerCase()}, ${locationName}, SEO pricing, SEO cost, affordable SEO, programmatic SEO`,
    openGraph: {
      title: `${pricingName} in ${locationName} | AutomateSEO.co`,
      description: `Transparent ${pricingName.toLowerCase()} in ${locationName}. One-off £1,000 payment for 1,000+ SEO pages.`,
      url: `https://www.automateseo.co/pricing/${pricing}/${location}`,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${pricingName} in ${locationName} | AutomateSEO.co`,
      description: `Transparent ${pricingName.toLowerCase()} in ${locationName}. One-off £1,000 payment for 1,000+ SEO pages.`,
    },
  };
}

export default function PricingLocationPage({ params }: PageProps) {
  const { slug } = params;
  
  if (slug.length !== 2) {
    notFound();
  }

  const [pricing, location] = slug;
  const pricingName = pricingDisplayNames[pricing as keyof typeof pricingDisplayNames];
  const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];

  if (!pricingName || !locationName) {
    notFound();
  }

  return (
    <>
      <PageViewTracker contentType="pricing-location-page" contentId={`${pricing}-${location}`} />
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {pricingName} in {locationName}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transparent {pricingName.toLowerCase()} in {locationName}. One-off £1,000 payment for 1,000+ SEO pages. No monthly fees, no ongoing costs.
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
              <span>✓ One-off Payment</span>
              <span>✓ No Monthly Fees</span>
              <span>✓ 1,000+ Pages</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Simple, Transparent Pricing for {locationName} Businesses
              </h2>
              <p className="text-lg text-muted-foreground">
                No hidden fees, no monthly subscriptions, no ongoing costs. Just one payment for everything.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold">Traditional SEO Agencies</h3>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-red-600">£500-£2,000/month</p>
                  <p className="text-sm text-muted-foreground">Ongoing forever</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 10-50 pages maximum</li>
                  <li>• Monthly fees forever</li>
                  <li>• Limited coverage</li>
                  <li>• Slow results</li>
                </ul>
              </div>

              <div className="border-2 border-primary rounded-lg p-6 space-y-4 bg-primary/5">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">AutomateSEO.co</h3>
                  <Badge variant="default">Best Value</Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary">£1,000</p>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 1,000+ pages</li>
                  <li>• No monthly fees</li>
                  <li>• Complete coverage</li>
                  <li>• Fast results</li>
                </ul>
              </div>

              <div className="border rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold">DIY SEO Tools</h3>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-orange-600">£50-£200/month</p>
                  <p className="text-sm text-muted-foreground">Plus your time</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Requires expertise</li>
                  <li>• Time-consuming</li>
                  <li>• Limited results</li>
                  <li>• Ongoing work</li>
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
              What You Get for £1,000 in {locationName}
            </h2>
            <p className="text-lg text-muted-foreground">
              Our programmatic SEO service includes everything you need to dominate local search in {locationName}.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Complete SEO Engine</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>1,000+ SEO-optimized pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Every service + location combination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Custom content for each page</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Mobile-optimized design</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Technical Setup</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Fast loading speeds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>SEO-friendly URLs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Schema markup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Google Analytics setup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              ROI Calculator for {locationName}
            </h2>
            <p className="text-lg text-muted-foreground">
              See how our one-off payment compares to traditional monthly SEO costs.
            </p>
            
            <div className="bg-muted/20 rounded-lg p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Traditional Agency</h3>
                  <p className="text-3xl font-bold text-red-600">£1,000/month</p>
                  <p className="text-sm text-muted-foreground">Year 1: £12,000</p>
                  <p className="text-sm text-muted-foreground">Year 2: £24,000</p>
                  <p className="text-sm text-muted-foreground">Year 3: £36,000</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">AutomateSEO.co</h3>
                  <p className="text-3xl font-bold text-green-600">£1,000</p>
                  <p className="text-sm text-muted-foreground">Year 1: £1,000</p>
                  <p className="text-sm text-muted-foreground">Year 2: £1,000</p>
                  <p className="text-sm text-muted-foreground">Year 3: £1,000</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg font-semibold">You save £35,000 over 3 years</p>
                <p className="text-sm text-muted-foreground">Plus you own everything</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaStrip />
    </>
  );
}

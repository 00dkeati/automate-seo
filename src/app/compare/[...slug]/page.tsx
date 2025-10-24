import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/site/container";
import { CtaStrip } from "@/components/site/cta-strip";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/utils";
import { ukLocations, locationDisplayNames, serviceDisplayNames, serviceComparisonPairs } from "@/data/programmatic-seo";

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const params: Array<{ slug: string[] }> = [];

  // Service comparison pages: /compare/local-seo-vs-technical-seo/london
  serviceComparisonPairs.forEach(([service1, service2]) => {
    ukLocations.forEach((location) => {
      params.push({
        slug: [`${service1}-vs-${service2}`, location],
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  
  if (slug.length !== 2) {
    return {
      title: "SEO Service Comparison",
      description: "Compare different SEO services for your business.",
    };
  }

  const [comparison, location] = slug;
  const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
  
  // Parse the comparison to get service names
  const [service1Slug, service2Slug] = comparison.split('-vs-');
  const service1Name = serviceDisplayNames[service1Slug as keyof typeof serviceDisplayNames];
  const service2Name = serviceDisplayNames[service2Slug as keyof typeof serviceDisplayNames];
  
  if (!service1Name || !service2Name || !locationName) {
    return {
      title: "SEO Service Comparison",
      description: "Compare different SEO services for your business.",
    };
  }

  return {
    title: `${service1Name} vs ${service2Name} in ${locationName} | AutomateSEO.co`,
    description: `Compare ${service1Name} vs ${service2Name} services in ${locationName}. See which SEO approach is best for your business with our programmatic SEO solution.`,
    keywords: `${service1Name.toLowerCase()}, ${service2Name.toLowerCase()}, ${locationName}, SEO comparison, programmatic SEO`,
    openGraph: {
      title: `${service1Name} vs ${service2Name} in ${locationName} | AutomateSEO.co`,
      description: `Compare ${service1Name} vs ${service2Name} services in ${locationName}. See which SEO approach is best for your business.`,
      url: `https://www.automateseo.co/compare/${comparison}/${location}`,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service1Name} vs ${service2Name} in ${locationName} | AutomateSEO.co`,
      description: `Compare ${service1Name} vs ${service2Name} services in ${locationName}. See which SEO approach is best for your business.`,
    },
  };
}

export default function ServiceComparisonPage({ params }: PageProps) {
  const { slug } = params;
  
  if (slug.length !== 2) {
    notFound();
  }

  const [comparison, location] = slug;
  const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
  
  // Parse the comparison to get service names
  const [service1Slug, service2Slug] = comparison.split('-vs-');
  const service1Name = serviceDisplayNames[service1Slug as keyof typeof serviceDisplayNames];
  const service2Name = serviceDisplayNames[service2Slug as keyof typeof serviceDisplayNames];

  if (!service1Name || !service2Name || !locationName) {
    notFound();
  }

  return (
    <>
      <PageViewTracker contentType="service-comparison-page" contentId={`${comparison}-${location}`} />
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {service1Name} vs {service2Name} in {locationName}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Compare {service1Name} vs {service2Name} services in {locationName}. See which approach delivers better results for your business.
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
              <span>✓ Expert Comparison</span>
              <span>✓ Local Focus</span>
              <span>✓ Proven Results</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                {service1Name} vs {service2Name}: Which is Right for Your {locationName} Business?
              </h2>
              <p className="text-lg text-muted-foreground">
                Both {service1Name.toLowerCase()} and {service2Name.toLowerCase()} have their place, but our programmatic SEO approach combines the best of both.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{service1Name}</h3>
                  <Badge variant="outline">Specialized</Badge>
                </div>
                <p className="text-muted-foreground">
                  {service1Name} focuses specifically on {service1Name.toLowerCase()} strategies for businesses in {locationName}.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-600">Pros:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Targeted approach</li>
                    <li>• Industry-specific expertise</li>
                    <li>• Focused results</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-600">Cons:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Limited scope</li>
                    <li>• Misses other opportunities</li>
                    <li>• Single-focus strategy</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{service2Name}</h3>
                  <Badge variant="outline">Comprehensive</Badge>
                </div>
                <p className="text-muted-foreground">
                  {service2Name} provides broader SEO coverage for businesses in {locationName}.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-600">Pros:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Broader coverage</li>
                    <li>• Multiple strategies</li>
                    <li>• Comprehensive approach</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-600">Cons:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Less specialized</li>
                    <li>• May lack focus</li>
                    <li>• Generic approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose Programmatic SEO Instead?
            </h2>
            <p className="text-lg text-muted-foreground">
              Instead of choosing between {service1Name.toLowerCase()} or {service2Name.toLowerCase()}, 
              our programmatic SEO approach gives you both - and more.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold">Best of Both Worlds</h3>
                <p className="text-muted-foreground">
                  We combine {service1Name.toLowerCase()} and {service2Name.toLowerCase()} strategies 
                  in a comprehensive programmatic approach.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold">1,000+ Pages</h3>
                <p className="text-muted-foreground">
                  Instead of choosing one approach, we create pages for every possible search 
                  your customers make in {locationName}.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold">One Payment</h3>
                <p className="text-muted-foreground">
                  No monthly fees, no ongoing costs. One £1,000 payment for everything, 
                  and you own it all.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Real Results in {locationName}
            </h2>
            <p className="text-lg text-muted-foreground">
              Our programmatic SEO approach has helped businesses in {locationName} dominate search results 
              across multiple service categories.
            </p>
            
            <div className="bg-muted/20 rounded-lg p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Traditional Approach</h3>
                  <p className="text-sm text-muted-foreground mb-4">Choose {service1Name.toLowerCase()} OR {service2Name.toLowerCase()}</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Limited to one strategy</li>
                    <li>• Misses opportunities</li>
                    <li>• Monthly fees forever</li>
                    <li>• Slow results</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Programmatic SEO</h3>
                  <p className="text-sm text-muted-foreground mb-4">Get BOTH {service1Name.toLowerCase()} AND {service2Name.toLowerCase()}</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Multiple strategies</li>
                    <li>• Complete coverage</li>
                    <li>• One-time payment</li>
                    <li>• Fast results</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg font-semibold">Why limit yourself to one approach?</p>
                <p className="text-sm text-muted-foreground">Get comprehensive SEO coverage for your {locationName} business</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaStrip />
    </>
  );
}

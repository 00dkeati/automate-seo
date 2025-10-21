import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/site/container";
import { CtaStrip } from "@/components/site/cta-strip";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/utils";
import { ukLocations, locationDisplayNames, seoServiceTypes, serviceDisplayNames } from "@/data/programmatic-seo";

interface PageProps {
  params: {
    service: string;
    location: string;
  };
}

export async function generateStaticParams() {
  const params: Array<{ service: string; location: string }> = [];
  
  seoServiceTypes.forEach((service) => {
    ukLocations.forEach((location) => {
      params.push({
        service: service,
        location: location,
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service, location } = params;
  const serviceName = serviceDisplayNames[service as keyof typeof serviceDisplayNames];
  const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
  
  if (!serviceName || !locationName) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${serviceName} Services in ${locationName} | AutomateSEO.co`,
    description: `Professional ${serviceName} services in ${locationName}. We help ${serviceName.toLowerCase()} businesses in ${locationName} dominate local search results and get more customers.`,
    keywords: [
      `${serviceName.toLowerCase()} ${locationName.toLowerCase()}`,
      `${serviceName.toLowerCase()} services ${locationName.toLowerCase()}`,
      `best ${serviceName.toLowerCase()} ${locationName.toLowerCase()}`,
      `${serviceName.toLowerCase()} company ${locationName.toLowerCase()}`,
      `${serviceName.toLowerCase()} agency ${locationName.toLowerCase()}`,
      `local ${serviceName.toLowerCase()} ${locationName.toLowerCase()}`,
      `${serviceName.toLowerCase()} near me ${locationName.toLowerCase()}`
    ],
    openGraph: {
      title: `${serviceName} Services in ${locationName} | AutomateSEO.co`,
      description: `Professional ${serviceName} services in ${locationName}. We help ${serviceName.toLowerCase()} businesses in ${locationName} dominate local search results.`,
      url: `${siteConfig.url}/seo-services/${service}/${location}`,
    },
  };
}

export default function ServiceLocationPage({ params }: PageProps) {
  const { service, location } = params;
  const serviceName = serviceDisplayNames[service as keyof typeof serviceDisplayNames];
  const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
  
  if (!serviceName || !locationName) {
    notFound();
  }

  const serviceKeywords = [
    `${serviceName.toLowerCase()} ${locationName.toLowerCase()}`,
    `${serviceName.toLowerCase()} services ${locationName.toLowerCase()}`,
    `best ${serviceName.toLowerCase()} ${locationName.toLowerCase()}`,
    `${serviceName.toLowerCase()} company ${locationName.toLowerCase()}`,
    `${serviceName.toLowerCase()} near me ${locationName.toLowerCase()}`
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">
                {serviceName} Services in {locationName}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {serviceName} Services in {locationName}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We help {serviceName.toLowerCase()} businesses in {locationName} dominate local search results. 
                Get found by customers searching for {serviceName.toLowerCase()} services in {locationName}.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a href={createWhatsAppLink(`Hi, I'm interested in ${serviceName} services for my business in ${locationName}.`)} target="_blank" rel="noopener noreferrer">
                  Get {serviceName} Quote
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href={siteConfig.contact.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Keywords We Target Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Keywords We Help You Rank For in {locationName}
              </h2>
              <p className="text-xl text-muted-foreground">
                We create targeted content for these high-value search terms
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {serviceKeywords.map((keyword, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                How We Help {serviceName} Businesses in {locationName}
              </h2>
              <p className="text-xl text-muted-foreground">
                Our proven 3-step process for {serviceName.toLowerCase()} SEO success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center">
                      1
                    </Badge>
                    <CardTitle className="text-xl">Keyword Research</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We identify every keyword your {serviceName.toLowerCase()} customers in {locationName} 
                    are searching for, including long-tail variations and local modifiers.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center">
                      2
                    </Badge>
                    <CardTitle className="text-xl">Content Generation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We create hundreds of optimized pages targeting {serviceName.toLowerCase()} keywords 
                    specific to {locationName}, with proper internal linking and schema markup.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center">
                      3
                    </Badge>
                    <CardTitle className="text-xl">Rank & Monitor</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We deploy your site, submit to search engines, and monitor rankings. 
                    Most {serviceName.toLowerCase()} businesses in {locationName} see results within 7 days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose Our {serviceName} Services for {locationName}?
              </h2>
              <p className="text-xl text-muted-foreground">
                What makes us different from other SEO agencies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Local Market Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand the {serviceName.toLowerCase()} market in {locationName} and know exactly 
                    what your customers are searching for. Our content targets real search intent.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Programmatic Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Instead of manually creating a few pages, we generate hundreds of targeted pages 
                    covering every possible {serviceName.toLowerCase()} keyword in {locationName}.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Fast Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our programmatic approach means faster indexing and ranking. Most {serviceName.toLowerCase()} 
                    businesses in {locationName} see rankings within a week.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">One-off Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    £1,000 + VAT one-time payment. You own the site and rankings forever. 
                    No monthly fees or ongoing costs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Study Section */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Real Results for {serviceName} Businesses</CardTitle>
                <p className="text-muted-foreground">
                  See how we&apos;ve helped similar businesses dominate their local market
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-sm max-w-none">
                  <p>
                    Our programmatic SEO approach has helped {serviceName.toLowerCase()} businesses across the UK 
                    achieve remarkable results. By creating hundreds of location-specific pages targeting every 
                    possible keyword combination, we&apos;ve helped businesses rank for terms they never thought possible.
                  </p>
                  
                  <p>
                    In {locationName}, the {serviceName.toLowerCase()} market is competitive, but our systematic approach 
                    ensures comprehensive coverage of local search terms. We don&apos;t just target the obvious keywords 
                    - we find the long-tail opportunities that competitors miss.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">1,200+</div>
                    <div className="text-sm text-muted-foreground">Pages Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">7</div>
                    <div className="text-sm text-muted-foreground">Days to Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">£1,000</div>
                    <div className="text-sm text-muted-foreground">One-off Fee</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CtaStrip />
    </>
  );
}

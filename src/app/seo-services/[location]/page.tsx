import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/site/container";
import { CtaStrip } from "@/components/site/cta-strip";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/utils";
import { ukLocations, locationDisplayNames } from "@/data/programmatic-seo";

interface PageProps {
  params: {
    location: string;
  };
}

export async function generateStaticParams() {
  return ukLocations.map((location) => ({
    location: location,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = params.location;
  const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
  
  if (!locationName) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `Best SEO Services in ${locationName} | AutomateSEO.co`,
    description: `Professional SEO services in ${locationName}. We help businesses in ${locationName} rank higher on Google with our proven programmatic SEO approach. Get found by your customers.`,
    keywords: [
      `seo services ${locationName.toLowerCase()}`,
      `best seo services ${locationName.toLowerCase()}`,
      `seo company ${locationName.toLowerCase()}`,
      `local seo ${locationName.toLowerCase()}`,
      `seo agency ${locationName.toLowerCase()}`,
      `digital marketing ${locationName.toLowerCase()}`,
      `google ranking ${locationName.toLowerCase()}`,
      `search engine optimization ${locationName.toLowerCase()}`
    ],
    openGraph: {
      title: `Best SEO Services in ${locationName} | AutomateSEO.co`,
      description: `Professional SEO services in ${locationName}. We help businesses in ${locationName} rank higher on Google with our proven programmatic SEO approach.`,
      url: `${siteConfig.url}/seo-services/${location}`,
    },
  };
}

export default function LocationSeoPage({ params }: PageProps) {
  const location = params.location;
  const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
  
  if (!locationName) {
    notFound();
  }

  const stats = [
    {
      value: "1,200+",
      label: "pages generated",
      description: "For your business",
    },
    {
      value: "7",
      label: "days to rank",
      description: "Average timeframe",
    },
    {
      value: "£1,000",
      label: "one-off fee",
      description: "No monthly costs",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">
                SEO Services in {locationName}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Best SEO Services in {locationName}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We help businesses in {locationName} rank higher on Google with our proven programmatic SEO approach. 
                Get found by your customers when they search for your services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a href={createWhatsAppLink(`Hi, I'm interested in SEO services for my business in ${locationName}.`)} target="_blank" rel="noopener noreferrer">
                  Get SEO Quote for {locationName}
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

      {/* Why Choose Us Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose Our SEO Services in {locationName}?
              </h2>
              <p className="text-xl text-muted-foreground">
                We understand the local market in {locationName} and know what it takes to rank
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Local Market Knowledge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand the competitive landscape in {locationName} and know exactly what keywords 
                    your customers are searching for.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our programmatic SEO approach has helped businesses in {locationName} rank for 
                    hundreds of local keywords within days.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">No Monthly Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    One-off payment of £1,000 + VAT. You own the site and rankings forever. 
                    No ongoing costs or monthly subscriptions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-muted/30">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our SEO Results in {locationName}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real results for businesses in {locationName}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                SEO Services We Offer in {locationName}
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive SEO solutions tailored for businesses in {locationName}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Local SEO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Dominate local search results in {locationName}. Get found when customers 
                    search for your services nearby.
                  </p>
                  <Badge variant="outline">Most Popular</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce SEO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Boost your online store&apos;s visibility in {locationName}. Rank for product 
                    and service keywords that drive sales.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Programmatic SEO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Scale your SEO with automated content generation. Create hundreds of 
                    targeted pages for {locationName} keywords.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                SEO Services in {locationName} - FAQ
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our SEO services
              </p>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does it take to see results in {locationName}?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most businesses in {locationName} start seeing rankings within 7 days for long-tail keywords. 
                    High-volume terms may take 2-4 weeks depending on competition.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you work with businesses outside {locationName}?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! While we specialize in local SEO for {locationName}, we also work with businesses 
                    across the UK and internationally.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What makes your SEO different for {locationName} businesses?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We use programmatic SEO to create hundreds of location-specific pages targeting 
                    every possible keyword combination in {locationName}. This gives you comprehensive 
                    coverage of local search terms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CtaStrip />
    </>
  );
}

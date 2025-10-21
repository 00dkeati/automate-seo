import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/site/container";
import { CtaStrip } from "@/components/site/cta-strip";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/utils";
import { ukLocations, seoServiceTypes, serviceDisplayNames } from "@/data/programmatic-seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best SEO Services UK | Programmatic SEO Agency",
  description: "Professional SEO services across the UK. We help businesses rank higher on Google with our proven programmatic SEO approach. One-off £1,000 + VAT.",
  keywords: [
    "best seo services uk",
    "seo services england", 
    "seo services near me",
    "programmatic seo uk",
    "local seo services",
    "seo agency uk",
    "digital marketing uk"
  ],
};

export default function SeoServicesPage() {
  const popularLocations = ukLocations.slice(0, 12);
  const popularServices = seoServiceTypes.slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">
                Best SEO Services UK
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Best SEO Services in the UK
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We help businesses across the UK rank higher on Google with our proven programmatic SEO approach. 
                Get found by your customers when they search for your services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a href={createWhatsAppLink("Hi, I'm interested in SEO services for my UK business.")} target="_blank" rel="noopener noreferrer">
                  Get SEO Quote
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

      {/* Popular Locations Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                SEO Services Across the UK
              </h2>
              <p className="text-xl text-muted-foreground">
                We provide SEO services to businesses in cities and counties across the UK
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {popularLocations.map((location) => (
                <Link key={location} href={`/seo-services/${location}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className="text-sm font-medium capitalize">
                        {location.replace(/-/g, ' ')}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/seo-services/london">View All Locations →</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                SEO Services We Offer
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive SEO solutions for every type of business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularServices.map((service) => (
                <Link key={service} href={`/seo-services/${service}/london`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {serviceDisplayNames[service as keyof typeof serviceDisplayNames]}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Professional {serviceDisplayNames[service as keyof typeof serviceDisplayNames].toLowerCase()} 
                        services across the UK
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                How Our Programmatic SEO Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Our proven 3-step process for SEO success
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
                    We identify every keyword your customers are searching for, including long-tail 
                    variations and local modifiers across the UK.
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
                    We create hundreds of optimized pages targeting location-specific keywords, 
                    with proper internal linking and schema markup.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center">
                      3
                    </Badge>
                    <CardTitle className="text-xl">Deploy & Monitor</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We deploy your site, submit to search engines, and monitor rankings. 
                    Most businesses see results within 7 days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose Our SEO Services?
              </h2>
              <p className="text-xl text-muted-foreground">
                What makes us different from other SEO agencies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Programmatic Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Instead of manually creating a few pages, we generate hundreds of targeted pages 
                    covering every possible keyword combination for your business.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Fast Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our programmatic approach means faster indexing and ranking. Most businesses 
                    see rankings within a week, not months.
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
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">UK Market Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand the UK market and know exactly what your customers are searching for. 
                    Our content targets real search intent.
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

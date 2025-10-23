import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section } from "@/components/site/container";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Thank You - Programmatic SEO Request Received | AutomateSEO.co",
  description: "Thank you for your interest in our programmatic SEO service. We've received your request and will be in touch within 1 hour to confirm your town's availability and discuss your local SEO strategy.",
};

export default function ThankYouPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Thank You!
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We&apos;ve received your request and will be in touch within 1 hour to confirm your town&apos;s availability 
                for our programmatic SEO service. We&apos;re excited to help you dominate your local market with our 
                custom SEO engine that generates thousands of location-based pages.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Next Steps */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">1</div>
                    <div>
                      <h3 className="font-semibold">We&apos;ll confirm availability</h3>
                      <p className="text-sm text-muted-foreground">
                        Within 1 hour via WhatsApp or email, we&apos;ll let you know if we can help you 
                        dominate your local market. We&apos;ll also provide initial insights about your 
                        competition and keyword opportunities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">2</div>
                    <div>
                      <h3 className="font-semibold">Schedule a strategy call</h3>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ll discuss your specific needs, timeline, and how our programmatic SEO 
                        can help you rank for every &quot;service + location&quot; search in your area. 
                        This call is completely free and no-obligation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">3</div>
                    <div>
                      <h3 className="font-semibold">Start building your SEO empire</h3>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ll begin mapping keywords and building your custom SEO engine. Within 2-3 weeks, 
                        you&apos;ll have thousands of location-based pages ranking for local searches, 
                        driving qualified leads to your business.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button asChild size="lg">
                    <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                      Message us on WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={siteConfig.contact.bookingUrl} target="_blank" rel="noopener noreferrer">
                      Book a 15-min call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* What You&apos;ll Get Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                What You&apos;ll Get With Our Programmatic SEO
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our custom SEO engine will generate thousands of location-based pages, helping you dominate 
                local search results across your entire service area.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">1,000+</div>
                <div className="text-lg font-semibold">Location Pages</div>
                <p className="text-muted-foreground text-sm">
                  Unique pages for every town, city, and village in your service area, 
                  each optimized for local search terms.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-lg font-semibold">Lead Generation</div>
                <p className="text-muted-foreground text-sm">
                  Your pages work around the clock, capturing leads from customers 
                  actively searching for your services in their area.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">2-3</div>
                <div className="text-lg font-semibold">Weeks to Launch</div>
                <p className="text-muted-foreground text-sm">
                  From keyword research to live pages, we&apos;ll have your SEO engine 
                  up and running in just 2-3 weeks.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">£1,000</div>
                <div className="text-lg font-semibold">One-Time Investment</div>
                <p className="text-muted-foreground text-sm">
                  Complete programmatic SEO system for just £1,000 + VAT. 
                  No monthly fees, no ongoing costs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Additional Resources */}
      <Section className="bg-muted/30">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                While You Wait
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Check out our case studies and see what&apos;s possible with programmatic SEO. 
                Learn how other businesses have dominated their local markets.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/results">
                  View Case Studies
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">
                  See Pricing
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/seo-services">
                  Browse SEO Services
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Information */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                Questions? We&apos;re Here to Help
              </h2>
              <p className="text-lg text-muted-foreground">
                If you have any questions about our programmatic SEO service or want to discuss 
                your specific needs, don&apos;t hesitate to reach out. We&apos;re here to help you 
                understand how we can help you dominate your local market.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Message us on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`mailto:${siteConfig.contact.email}`}>
                  Email us directly
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

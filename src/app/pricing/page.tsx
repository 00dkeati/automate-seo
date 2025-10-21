import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/site/container";
import { CtaStrip } from "@/components/site/cta-strip";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink, formatPrice } from "@/lib/utils";

export const metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for our programmatic SEO service. One-off £1,000 + VAT with no monthly fees.",
};

export default function PricingPage() {
  const addOns = [
    {
      title: "Logo & Brand Kit Integration",
      description: "Custom logo integration and brand consistency across all pages",
      price: "£200",
    },
    {
      title: "Content Tune-up",
      description: "Enhanced content optimization and additional keyword targeting",
      price: "£300",
    },
    {
      title: "Maps Pack Optimization",
      description: "Google My Business optimization and local citations setup",
      price: "£150",
    },
    {
      title: "Lead Form Integration",
      description: "Custom contact forms and lead capture optimization",
      price: "£100",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                One-off payment. No monthly fees. No hidden costs. Just results.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Pricing Card */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <Badge variant="default" className="w-fit mx-auto mb-4">
                  Most Popular
                </Badge>
                <CardTitle className="text-4xl">
                  Programmatic SEO Build
                </CardTitle>
                <div className="text-6xl font-bold text-primary mt-4">
                  {formatPrice(siteConfig.pricing.basePrice)}
                </div>
                <div className="text-xl text-muted-foreground">
                  + VAT • One-off payment
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">What&apos;s Included:</h3>
                  <div className="space-y-3">
                    {siteConfig.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                        <span>{feature}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-3">
                      <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                      <span>30-day support window</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                      <span>Training video walkthrough</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
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
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Optional Add-ons */}
      <Section className="bg-muted/30">
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Optional Add-ons
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Enhance your programmatic SEO site with these optional services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{addon.title}</CardTitle>
                      <Badge variant="outline">{addon.price}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{addon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Pricing Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our pricing
              </p>
            </div>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is this really a one-off payment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! You pay £1,000 + VAT once, and you own the site forever. 
                    No monthly fees, no ongoing costs, no subscriptions.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if I need changes after launch?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We include a 30-day support window for any issues or minor adjustments. 
                    After that, you can hire us for additional work or manage the site yourself.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer refunds?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We&apos;re confident in our service, but if you&apos;re not satisfied within the 
                    first 30 days, we&apos;ll work with you to make it right or provide a refund.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Strip */}
      <CtaStrip />
    </>
  );
}

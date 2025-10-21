import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/site/container";
import { StatRow } from "@/components/site/stat";
import { Steps } from "@/components/site/steps";
import { FAQ } from "@/components/site/faq";
import { Testimonial } from "@/components/site/testimonial";
import { CtaStrip } from "@/components/site/cta-strip";
import { SerpMock } from "@/components/site/serp-mock";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink, formatPrice } from "@/lib/utils";
import { testimonials } from "@/data/case-studies";
import { generateJsonLd } from "@/lib/json-ld";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  const stats = [
    {
      value: siteConfig.stats.pagesPerSite,
      label: "indexed pages per site",
      description: "Clean, SEO-optimized content",
    },
    {
      value: siteConfig.stats.daysToRank,
      label: "days to rank",
      description: "Case dependent",
    },
    {
      value: siteConfig.stats.price,
      label: "one-off fee",
      description: "No monthly costs",
    },
  ];

  const jsonLd = generateJsonLd();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd.organization),
        }}
      />
      <Script
        id="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd.product),
        }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd.faqPage),
        }}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  No jargon. Just results.
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Own Your Town on Google.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  {siteConfig.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>✓ Ranked sites in under a week</span>
                <span>✓ No monthly fees</span>
                <span>✓ Built to scale</span>
              </div>
            </div>

            <div className="flex justify-center">
              <SerpMock className="w-full max-w-md" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Proof/Outcome Section */}
      <Section>
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Proven Results
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Waterlooville.co ranked for multiple high-intent keywords within a week.
              </p>
            </div>
            
            <StatRow stats={stats} />
            
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="px-4 py-2">Google Partner</Badge>
              <Badge variant="outline" className="px-4 py-2">SEO Certified</Badge>
              <Badge variant="outline" className="px-4 py-2">Results Driven</Badge>
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section className="bg-muted/30">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Three simple steps to dominate your local market
              </p>
            </div>
            
            <Steps steps={[...siteConfig.steps]} />
          </div>
        </Container>
      </Section>

      {/* Case Study Snapshot */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Waterlooville.co — ranked in days
                </h2>
                <p className="text-xl text-muted-foreground">
                  Real results from our programmatic SEO approach
                </p>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                  <span>Ranked for 10+ high-intent local terms</span>
                </li>
                <li className="flex items-center gap-3">
                  <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                  <span>1,200+ pages indexed</span>
                </li>
                <li className="flex items-center gap-3">
                  <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                  <span>Zero monthly fees</span>
                </li>
              </ul>
              
              <Button asChild variant="outline">
                <Link href="/results">See more results →</Link>
              </Button>
            </div>
            
            <div className="flex justify-center">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle className="text-center">Search Console Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-green-600">1,247</div>
                    <div className="text-sm text-muted-foreground">Pages Indexed</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-blue-600">12</div>
                    <div className="text-sm text-muted-foreground">Keywords Ranking</div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-purple-600">7</div>
                    <div className="text-sm text-muted-foreground">Days to Rank</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Offer Card */}
      <Section className="bg-gradient-to-b from-muted/30 to-background">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">
                  {formatPrice(siteConfig.pricing.basePrice)} + VAT • One-off
                </CardTitle>
                <p className="text-muted-foreground">
                  Complete programmatic SEO site build
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {siteConfig.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Badge variant="default" className="w-6 h-6 rounded-full flex items-center justify-center p-0">✓</Badge>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={siteConfig.contact.bookingUrl} target="_blank" rel="noopener noreferrer">
                      Book Call
                    </a>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/check-availability">
                      Check Availability
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real businesses, real results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Testimonial key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our programmatic SEO service
              </p>
            </div>
            
            <FAQ faqs={[...siteConfig.faqs]} />
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <CtaStrip />
    </>
  );
}

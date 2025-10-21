import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container, Section } from "@/components/site/container";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Thank You",
  description: "Thank you for your interest in our programmatic SEO service. We'll be in touch soon.",
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
                We&apos;ve received your request and will be in touch within 1 hour to confirm your town&apos;s availability.
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
                        Within 1 hour via WhatsApp or email
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">2</div>
                    <div>
                      <h3 className="font-semibold">Schedule a strategy call</h3>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ll discuss your specific needs and timeline
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">3</div>
                    <div>
                      <h3 className="font-semibold">Start building your SEO empire</h3>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ll begin mapping keywords and building your site
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

      {/* Additional Resources */}
      <Section className="bg-muted/30">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                While You Wait
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Check out our case studies and see what&apos;s possible
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
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

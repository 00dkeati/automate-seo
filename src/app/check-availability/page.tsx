import { Container, Section } from "@/components/site/container";
import { LeadForm } from "@/components/site/lead-form";

export const metadata = {
  title: "Check Availability - Programmatic SEO Service | AutomateSEO.co",
  description: "Check if your town is available for our programmatic SEO service. We build 1,000+ page SEO engines that rank for every 'service + town' search. Get started with a quick availability check.",
};

export default function CheckAvailabilityPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Check Your Town&apos;s Availability
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See if we can help you dominate your local market with our programmatic SEO service. 
                We build custom SEO engines that generate thousands of location-based pages, helping you rank 
                for every &quot;service + town&quot; search in your area. We&apos;ll confirm availability within 1 hour.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                How Our Programmatic SEO Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We create a custom SEO engine that automatically generates thousands of location-based pages, 
                helping you dominate local search results across your entire service area.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">1</div>
                <h3 className="text-xl font-semibold">Keyword Research</h3>
                <p className="text-muted-foreground">
                  We identify every relevant &quot;service + location&quot; keyword combination in your area, 
                  from major cities to small towns and villages.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">2</div>
                <h3 className="text-xl font-semibold">Page Generation</h3>
                <p className="text-muted-foreground">
                  Our system automatically creates unique, optimized pages for each keyword combination, 
                  with local content, contact information, and service details.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">3</div>
                <h3 className="text-xl font-semibold">Rank & Convert</h3>
                <p className="text-muted-foreground">
                  Your pages start ranking for local searches, driving qualified leads from customers 
                  actively searching for your services in their area.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Form Section */}
      <Section className="bg-muted/20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-6 mb-8">
              <h2 className="text-3xl font-bold">Check Your Town&apos;s Availability</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we&apos;ll confirm within 1 hour whether we can help you 
                dominate your local market with programmatic SEO.
              </p>
            </div>
            <LeadForm />
          </div>
        </Container>
      </Section>

      {/* Info Section */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">1 Hour</div>
                <div className="text-lg font-semibold">Quick Response</div>
                <p className="text-muted-foreground">
                  We&apos;ll confirm your town&apos;s availability within 1 hour via WhatsApp or email. 
                  Our team works around the clock to respond to availability requests promptly.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">No Spam</div>
                <div className="text-lg font-semibold">Respect Your Time</div>
                <p className="text-muted-foreground">
                  We only contact you about your specific request. No newsletters, no spam, 
                  no unwanted follow-ups. Your privacy and time are important to us.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">No Obligation</div>
                <div className="text-lg font-semibold">Free Check</div>
                <p className="text-muted-foreground">
                  This is just a quick availability check. No commitment required, no pressure, 
                  and no hidden fees. We&apos;re here to help you understand your options.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Common questions about our programmatic SEO availability and process.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">How quickly can you confirm availability?</h3>
                <p className="text-muted-foreground">
                  We typically respond within 1 hour during business hours (9 AM - 6 PM GMT). 
                  For requests submitted outside these hours, we&apos;ll respond first thing the next business day. 
                  We understand that timing is crucial for your business decisions.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What if my town isn&apos;t available?</h3>
                <p className="text-muted-foreground">
                  If we&apos;re already working with a competitor in your area, we&apos;ll let you know immediately. 
                  However, we may be able to work with businesses in adjacent towns or suggest alternative 
                  approaches to help you dominate your local market.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What information do you need for the check?</h3>
                <p className="text-muted-foreground">
                  We need your business name, town/city, and service type. This helps us quickly determine 
                  if there are any conflicts and whether we can help you achieve your local SEO goals. 
                  The more specific you can be about your service area, the better.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Is there any cost for the availability check?</h3>
                <p className="text-muted-foreground">
                  No, the availability check is completely free. There&apos;s no obligation to proceed with our service, 
                  and we won&apos;t charge you anything for confirming whether we can help you dominate your local market.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

import { Container, Section } from "@/components/site/container";
import { LeadForm } from "@/components/site/lead-form";

export const metadata = {
  title: "Check Availability",
  description: "Check if your town is available for our programmatic SEO service. Get started with a quick availability check.",
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
                See if we can help you dominate your local market. 
                We&apos;ll confirm availability within 1 hour.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Form Section */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
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
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">No Spam</div>
                <div className="text-lg font-semibold">Respect Your Time</div>
                <p className="text-muted-foreground">
                  We only contact you about your specific request. No newsletters, no spam.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">No Obligation</div>
                <div className="text-lg font-semibold">Free Check</div>
                <p className="text-muted-foreground">
                  This is just a quick availability check. No commitment required.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

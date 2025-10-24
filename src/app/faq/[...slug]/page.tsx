import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/site/container";
import { CtaStrip } from "@/components/site/cta-strip";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink } from "@/lib/utils";
import { ukLocations, locationDisplayNames, seoServiceTypes, serviceDisplayNames, faqKeywords, faqDisplayNames } from "@/data/programmatic-seo";

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  const params: Array<{ slug: string[] }> = [];

  // FAQ + Service + Location pages: /faq/local-seo/london
  seoServiceTypes.forEach((service) => {
    ukLocations.forEach((location) => {
      faqKeywords.forEach((faq) => {
        params.push({
          slug: [faq, service, location],
        });
      });
    });
  });

  // FAQ + Location pages: /faq/seo-cost/london
  additionalFaqKeywords.forEach((faq) => {
    ukLocations.forEach((location) => {
      params.push({
        slug: [faq, location],
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  
  if (slug.length < 2) {
    return {
      title: "SEO FAQ",
      description: "Frequently asked questions about SEO services.",
    };
  }

  const faq = slug[0];
  const faqName = faqDisplayNames[faq as keyof typeof faqDisplayNames];
  
  if (slug.length === 2) {
    // FAQ + Location
    const location = slug[1];
    const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
    
    if (!faqName || !locationName) {
      return {
        title: "SEO FAQ",
        description: "Frequently asked questions about SEO services.",
      };
    }

    return {
      title: `${faqName} About SEO in ${locationName} | AutomateSEO.co`,
      description: `Common ${faqName.toLowerCase()} about SEO services in ${locationName}. Get answers about programmatic SEO, pricing, and results.`,
      keywords: `${faqName.toLowerCase()}, SEO, ${locationName}, programmatic SEO, FAQ, help`,
      openGraph: {
        title: `${faqName} About SEO in ${locationName} | AutomateSEO.co`,
        description: `Common ${faqName.toLowerCase()} about SEO services in ${locationName}. Get answers about programmatic SEO, pricing, and results.`,
        url: `https://www.automateseo.co/faq/${faq}/${location}`,
        siteName: siteConfig.name,
      },
    };
  } else if (slug.length === 3) {
    // FAQ + Service + Location
    const service = slug[1];
    const location = slug[2];
    const serviceName = serviceDisplayNames[service as keyof typeof serviceDisplayNames];
    const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];
    
    if (!faqName || !serviceName || !locationName) {
      return {
        title: "SEO FAQ",
        description: "Frequently asked questions about SEO services.",
      };
    }

    return {
      title: `${faqName} About ${serviceName} in ${locationName} | AutomateSEO.co`,
      description: `Common ${faqName.toLowerCase()} about ${serviceName} services in ${locationName}. Get expert answers about ${serviceName.toLowerCase()} and programmatic SEO.`,
      keywords: `${faqName.toLowerCase()}, ${serviceName}, ${locationName}, SEO FAQ, help, guide`,
      openGraph: {
        title: `${faqName} About ${serviceName} in ${locationName} | AutomateSEO.co`,
        description: `Common ${faqName.toLowerCase()} about ${serviceName} services in ${locationName}. Get expert answers about ${serviceName.toLowerCase()} and programmatic SEO.`,
        url: `https://www.automateseo.co/faq/${faq}/${service}/${location}`,
        siteName: siteConfig.name,
      },
    };
  }

  return {
    title: "SEO FAQ",
    description: "Frequently asked questions about SEO services.",
  };
}

export default function FAQPage({ params }: PageProps) {
  const { slug } = params;
  
  if (slug.length < 2) {
    notFound();
  }

  const faq = slug[0];
  const faqName = faqDisplayNames[faq as keyof typeof faqDisplayNames];

  if (!faqName) {
    notFound();
  }

  if (slug.length === 2) {
    // FAQ + Location
    const location = slug[1];
    const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];

    if (!locationName) {
      notFound();
    }

    return (
      <>
        <PageViewTracker contentType="faq-location-page" contentId={`${faq}-${location}`} />
        <Section className="bg-gradient-to-b from-background to-muted/20">
          <Container>
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  {faqName} About SEO in {locationName}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Get answers to the most common {faqName.toLowerCase()} about SEO services in {locationName}.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">How much does SEO cost in {locationName}?</h3>
                  <p className="text-muted-foreground">
                    Traditional SEO agencies in {locationName} charge £500-£2,000 per month with ongoing fees. 
                    Our programmatic SEO service costs £1,000 one-time for 1,000+ pages. No monthly fees, no ongoing costs.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">How long does SEO take to work in {locationName}?</h3>
                  <p className="text-muted-foreground">
                    Traditional SEO takes 6-12 months to show results. Our programmatic SEO approach delivers 
                    rankings in 2-4 weeks because we create comprehensive coverage immediately.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">What makes programmatic SEO different?</h3>
                  <p className="text-muted-foreground">
                    Instead of creating 10-50 pages like traditional agencies, we create 1,000+ pages targeting 
                    every possible search your customers make in {locationName}.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Do I own the SEO work?</h3>
                  <p className="text-muted-foreground">
                    Yes! Unlike traditional agencies where you pay monthly forever, you own everything we create. 
                    No ongoing dependency, no monthly fees.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">What if I'm not happy with the results?</h3>
                  <p className="text-muted-foreground">
                    We're confident in our approach. If you're not satisfied with the results after 30 days, 
                    we'll refund your payment. No questions asked.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Still have questions?</h2>
                <p className="text-muted-foreground">Get personalized answers for your {locationName} business.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              </div>
            </div>
          </Container>
        </Section>

        <CtaStrip />
      </>
    );
  } else if (slug.length === 3) {
    // FAQ + Service + Location
    const service = slug[1];
    const location = slug[2];
    const serviceName = serviceDisplayNames[service as keyof typeof serviceDisplayNames];
    const locationName = locationDisplayNames[location as keyof typeof locationDisplayNames];

    if (!serviceName || !locationName) {
      notFound();
    }

    return (
      <>
        <PageViewTracker contentType="faq-service-location-page" contentId={`${faq}-${service}-${location}`} />
        <Section className="bg-gradient-to-b from-background to-muted/20">
          <Container>
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  {faqName} About {serviceName} in {locationName}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Get expert answers about {serviceName} services in {locationName}.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">What is {serviceName}?</h3>
                  <p className="text-muted-foreground">
                    {serviceName} is a specialized approach to search engine optimization designed specifically 
                    for {serviceName.toLowerCase()} businesses in {locationName}. It focuses on improving your 
                    visibility for relevant local searches.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">How does {serviceName} work in {locationName}?</h3>
                  <p className="text-muted-foreground">
                    Our programmatic {serviceName.toLowerCase()} creates hundreds of targeted pages for every 
                    "{serviceName.toLowerCase()} in {locationName}" search. This comprehensive approach ensures 
                    maximum visibility for your business.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Why choose programmatic {serviceName.toLowerCase()}?</h3>
                  <p className="text-muted-foreground">
                    Traditional {serviceName.toLowerCase()} agencies create limited pages. Our programmatic 
                    approach creates 1,000+ pages, ensuring you rank for every relevant search in {locationName}.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">How much does {serviceName} cost in {locationName}?</h3>
                  <p className="text-muted-foreground">
                    Our {serviceName.toLowerCase()} service costs £1,000 one-time. This includes 1,000+ pages 
                    targeting every relevant search in {locationName}. No monthly fees, no ongoing costs.
                  </p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">How long until I see results?</h3>
                  <p className="text-muted-foreground">
                    Most {serviceName.toLowerCase()} businesses in {locationName} see rankings within 2-4 weeks. 
                    Our comprehensive approach delivers faster results than traditional SEO methods.
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Ready to dominate {serviceName} in {locationName}?</h2>
                <p className="text-muted-foreground">Get started with our programmatic SEO approach.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              </div>
            </div>
          </Container>
        </Section>

        <CtaStrip />
      </>
    );
  }

  notFound();
}

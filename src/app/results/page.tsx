import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container, Section } from "@/components/site/container";
import { Testimonial } from "@/components/site/testimonial";
import { CtaStrip } from "@/components/site/cta-strip";
import { createWhatsAppLink } from "@/lib/utils";
import { caseStudies, testimonials } from "@/data/case-studies";
import Link from "next/link";

export const metadata = {
  title: "Case Studies & Results",
  description: "Real results from our programmatic SEO service. See how businesses are ranking for their local keywords.",
};

export default function ResultsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-background to-muted/20">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Real Results, Real Fast
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how our programmatic SEO approach has helped businesses dominate their local markets in days, not months.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  Get Your Results
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/check-availability">
                  Check Your Town
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Studies Grid */}
      <Section>
        <Container>
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Case Studies
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real businesses, real results, real fast
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Card key={study.id} className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{study.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {study.niche} • {study.town}
                        </p>
                      </div>
                      <Badge variant="secondary">
                        {study.daysToRank} days
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {study.description}
                    </p>
                    
                    <div className="space-y-2">
                      {study.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <Badge variant="default" className="w-4 h-4 rounded-full flex items-center justify-center p-0 text-xs">✓</Badge>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{study.keywordsRanking}</div>
                        <div className="text-xs text-muted-foreground">Keywords</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{study.pagesIndexed}</div>
                        <div className="text-xs text-muted-foreground">Pages</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Success Story */}
      <Section className="bg-muted/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">The Waterlooville Success Story</CardTitle>
                <p className="text-muted-foreground">
                  How we helped a local business dominate their market in just 7 days
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-sm max-w-none">
                  <p>
                    When Sarah Mitchell contacted us about her plumbing business in Waterlooville, 
                    she was struggling to get found online. Despite having years of experience and 
                    excellent customer reviews, her website was invisible to potential customers 
                    searching for plumbing services in her area.
                  </p>
                  
                  <p>
                    Within 7 days of launching her programmatic SEO site, Sarah started receiving 
                    calls from customers who found her through Google searches. The site generated 
                    over 1,200 pages targeting every possible plumbing service and location combination 
                    in Waterlooville and surrounding areas.
                  </p>
                  
                  <p>
                    Today, Sarah&apos;s business ranks in the top 3 for over 10 high-intent keywords 
                    including &quot;emergency plumber Waterlooville,&quot; &quot;boiler repair Waterlooville,&quot; 
                    and &quot;drain cleaning Waterlooville.&quot; She&apos;s gone from struggling to find customers 
                    to turning away work because she&apos;s too busy.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">7</div>
                    <div className="text-sm text-muted-foreground">Days to Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">12+</div>
                    <div className="text-sm text-muted-foreground">Keywords Ranking</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">1,247</div>
                    <div className="text-sm text-muted-foreground">Pages Indexed</div>
                  </div>
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
                Don&apos;t just take our word for it
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

      {/* CTA Strip */}
      <CtaStrip />
    </>
  );
}

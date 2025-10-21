import { Container, Section } from "@/components/site/container";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for AutomateSEO.co - the terms and conditions for using our programmatic SEO services.",
};

export default function TermsPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto prose prose-sm">
          <h1>Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using AutomateSEO.co, you accept and agree to be bound 
            by the terms and provision of this agreement.
          </p>
          
          <h2>2. Services</h2>
          <p>
            AutomateSEO.co provides programmatic SEO services including:
          </p>
          <ul>
            <li>Keyword research and mapping</li>
            <li>Automated site generation (1,000+ pages)</li>
            <li>On-page SEO optimization</li>
            <li>Structured data implementation</li>
            <li>Search Console setup</li>
            <li>Indexation support</li>
          </ul>
          
          <h2>3. Payment Terms</h2>
          <p>
            Our services are provided for a one-off fee of £1,000 + VAT. Payment 
            is due before work begins. No monthly fees or ongoing costs apply.
          </p>
          
          <h2>4. Delivery Timeline</h2>
          <p>
            We aim to deliver completed sites within 7-14 days of receiving all 
            required information and payment. Actual delivery times may vary based 
            on project complexity.
          </p>
          
          <h2>5. Client Responsibilities</h2>
          <p>Clients are responsible for:</p>
          <ul>
            <li>Providing accurate business information</li>
            <li>Supplying domain access (if applicable)</li>
            <li>Responding to requests for information in a timely manner</li>
            <li>Ensuring they have rights to use any provided content</li>
          </ul>
          
          <h2>6. Intellectual Property</h2>
          <p>
            Upon completion and payment, clients own all rights to the generated 
            website content and SEO implementation. We retain rights to our 
            proprietary methods and tools.
          </p>
          
          <h2>7. Warranties and Disclaimers</h2>
          <p>
            While we strive to deliver high-quality SEO results, we cannot guarantee 
            specific ranking positions or traffic levels. SEO results depend on many 
            factors beyond our control.
          </p>
          
          <h2>8. Limitation of Liability</h2>
          <p>
            Our liability is limited to the amount paid for our services. We are not 
            liable for any indirect, incidental, or consequential damages.
          </p>
          
          <h2>9. Support</h2>
          <p>
            We provide 30 days of support following project completion for any 
            issues or minor adjustments. Additional support may be available for a fee.
          </p>
          
          <h2>10. Refund Policy</h2>
          <p>
            If you&apos;re not satisfied with our service within 30 days of completion, 
            we&apos;ll work with you to make it right or provide a refund.
          </p>
          
          <h2>11. Termination</h2>
          <p>
            Either party may terminate this agreement with written notice. Upon 
            termination, all outstanding payments become due immediately.
          </p>
          
          <h2>12. Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Any disputes 
            will be resolved in the courts of England and Wales.
          </p>
          
          <h2>13. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at:
          </p>
          <p>
            Email: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          </p>
          
          <h2>14. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will 
            be posted on this page and will become effective immediately.
          </p>
        </div>
      </Container>
    </Section>
  );
}

import { Container, Section } from "@/components/site/container";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for AutomateSEO.co - how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto prose prose-sm">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you:
          </p>
          <ul>
            <li>Fill out our contact forms</li>
            <li>Book a consultation call</li>
            <li>Contact us via WhatsApp or email</li>
            <li>Use our website services</li>
          </ul>
          
          <p>
            This information may include your name, email address, phone number, 
            business name, town/city, and any other information you choose to provide.
          </p>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Provide our programmatic SEO services</li>
            <li>Send you information about our services (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information 
            to third parties without your consent, except as described in this policy.
          </p>
          
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          
          <h2>5. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to improve your experience 
            on our website. You can control cookie settings through your browser preferences.
          </p>
          
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
          
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            Email: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          </p>
          
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you 
            of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>
      </Container>
    </Section>
  );
}



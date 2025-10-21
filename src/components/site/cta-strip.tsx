"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { createWhatsAppLink, createWhatsAppLinkWithData } from "@/lib/utils";
import { trackWhatsAppClick, trackBookingClick } from "@/lib/analytics";

interface CtaStripProps {
  variant?: "default" | "sticky";
  data?: {
    name?: string;
    business?: string;
    town?: string;
    niche?: string;
  };
}

export function CtaStrip({ variant = "default", data }: CtaStripProps) {
  const whatsAppLink = data 
    ? createWhatsAppLinkWithData(data)
    : createWhatsAppLink();

  const content = (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-center sm:text-left">
        <h3 className="text-lg font-semibold">
          {variant === "sticky" 
            ? "Get your town before a competitor does."
            : "Ready to dominate your local market?"
          }
        </h3>
        <p className="text-sm text-muted-foreground">
          Join businesses already ranking for their town&apos;s keywords
        </p>
      </div>
      <div className="flex gap-2">
        <Button asChild variant="outline">
          <a 
            href={siteConfig.contact.bookingUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => trackBookingClick(variant === "sticky" ? "sticky-cta" : "cta-strip")}
          >
            Book Call
          </a>
        </Button>
        <Button asChild>
          <a 
            href={whatsAppLink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick(variant === "sticky" ? "sticky-cta" : "cta-strip")}
          >
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );

  if (variant === "sticky") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t p-4 shadow-lg">
        <div className="container mx-auto">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted/50 py-12">
      <div className="container mx-auto">
        {content}
      </div>
    </div>
  );
}

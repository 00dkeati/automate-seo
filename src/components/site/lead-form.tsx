"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { createWhatsAppLinkWithData, parseUtmParams } from "@/lib/utils";
import { trackLeadSubmit, trackAvailabilityCheck } from "@/lib/analytics";

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  niche: string;
  town: string;
  website?: string;
}

const nicheOptions = [
  "Plumbing Services",
  "Dental Services", 
  "Legal Services",
  "Restaurants",
  "Hotels",
  "Fitness/Gyms",
  "Beauty Salons",
  "Auto Repair",
  "Real Estate",
  "Other",
];

export function LeadForm() {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    business: "",
    niche: "",
    town: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const utmParams = parseUtmParams();
      const payload = {
        ...formData,
        source: "lead-form",
        utm: utmParams,
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Track conversions
        trackLeadSubmit(formData as unknown as Record<string, unknown>);
        trackAvailabilityCheck(formData as unknown as Record<string, unknown>);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-green-600">Success!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-sm text-muted-foreground">
            We&apos;ll confirm by WhatsApp/email within 1 hour.
          </p>
          <div className="space-y-2">
            <Button asChild className="w-full">
              <a 
                href={createWhatsAppLinkWithData(formData)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message us on WhatsApp now
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a 
                href={siteConfig.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Or book a 15-min call
              </a>
            </Button>
          </div>
          <p className="text-xs text-center text-muted-foreground">
            No spam. No obligation.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Check Your Town&apos;s Availability</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name *
            </label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone *
            </label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="business" className="text-sm font-medium">
              Business Name *
            </label>
            <Input
              id="business"
              type="text"
              required
              value={formData.business}
              onChange={(e) => handleInputChange("business", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="niche" className="text-sm font-medium">
              Service Category *
            </label>
            <Select
              value={formData.niche}
              onValueChange={(value) => handleInputChange("niche", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your service category" />
              </SelectTrigger>
              <SelectContent>
                {nicheOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="town" className="text-sm font-medium">
              Town/City *
            </label>
            <Input
              id="town"
              type="text"
              required
              value={formData.town}
              onChange={(e) => handleInputChange("town", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="website" className="text-sm font-medium">
              Website (optional)
            </label>
            <Input
              id="website"
              type="url"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Checking..." : "Run quick availability check"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

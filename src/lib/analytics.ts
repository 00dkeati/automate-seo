"use client";

// Analytics tracking utilities
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("event", eventName, {
      event_category: "engagement",
      ...parameters,
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq("track", eventName, parameters);
  }
}

export function trackConversion(eventName: string, parameters?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("event", eventName, {
      event_category: "conversion",
      ...parameters,
    });
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq("track", eventName, parameters);
  }
}

// Specific tracking functions
export function trackWhatsAppClick(source: string) {
  trackConversion("whatsapp_click", {
    event_label: source,
    source: source,
  });
}

export function trackBookingClick(source: string) {
  trackConversion("booking_click", {
    event_label: source,
    source: source,
  });
}

export function trackLeadSubmit(formData: Record<string, unknown>) {
  trackConversion("lead_submit", {
    event_label: "lead_form",
    business_type: formData.niche,
    location: formData.town,
  });
}

export function trackAvailabilityCheck(formData: Record<string, unknown>) {
  trackConversion("availability_check", {
    event_label: "check_availability",
    business_type: formData.niche,
    location: formData.town,
  });
}

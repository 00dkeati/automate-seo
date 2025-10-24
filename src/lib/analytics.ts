"use client";

// Analytics tracking utilities
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Helper function to send events to Conversions API
async function sendToConversionsAPI(endpoint: string, data: Record<string, unknown>) {
  try {
    await fetch(`/api/facebook/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(`Failed to send ${endpoint} to Conversions API:`, error);
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

  // Send to Conversions API
  sendToConversionsAPI('contact', {
    contactMethod: 'whatsapp',
    sourceUrl: window.location.href,
  });
}

export function trackBookingClick(source: string) {
  trackConversion("booking_click", {
    event_label: source,
    source: source,
  });

  // Send to Conversions API
  sendToConversionsAPI('contact', {
    contactMethod: 'booking',
    sourceUrl: window.location.href,
  });
}

export function trackLeadSubmit(formData: Record<string, unknown>) {
  trackConversion("lead_submit", {
    event_label: "lead_form",
    business_type: formData.niche,
    location: formData.town,
  });

  // Send to Conversions API
  sendToConversionsAPI('lead', {
    sourceUrl: window.location.href,
    email: formData.email,
    phone: formData.phone,
    leadValue: 1000, // £1,000 service value
  });
}

export function trackAvailabilityCheck(formData: Record<string, unknown>) {
  trackConversion("availability_check", {
    event_label: "check_availability",
    business_type: formData.niche,
    location: formData.town,
  });

  // Send to Conversions API
  sendToConversionsAPI('search', {
    searchQuery: `${formData.niche} ${formData.town}`,
    sourceUrl: window.location.href,
    email: formData.email,
    phone: formData.phone,
  });
}

// Track page views for Conversions API
export function trackPageView(contentType: string, contentId?: string) {
  if (typeof window === "undefined") return;

  // Send to Conversions API
  sendToConversionsAPI('view-content', {
    contentType,
    sourceUrl: window.location.href,
    contentId,
  });
}

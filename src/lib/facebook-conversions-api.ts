import crypto from 'crypto';

// Facebook Conversions API configuration
const FACEBOOK_ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
const FACEBOOK_PIXEL_ID = process.env.FACEBOOK_PIXEL_ID;
const API_VERSION = 'v19.0';

// Hash function for user data (required by Facebook)
function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

// Generate event ID for deduplication
function generateEventId(): string {
  return crypto.randomUUID();
}

// Base user data extraction
function extractUserData(userAgent?: string) {
  return {
    client_user_agent: userAgent || '',
    // Note: We don't hash client_user_agent as per Facebook's requirements
  };
}

// Send events to Facebook Conversions API
async function sendFacebookEvent(
  eventName: string,
  eventTime: number,
  sourceUrl: string,
  userData: Record<string, unknown>,
  customData?: Record<string, unknown>,
  eventId?: string
) {
  if (!FACEBOOK_ACCESS_TOKEN || !FACEBOOK_PIXEL_ID) {
    console.warn('Facebook Conversions API credentials not configured');
    return;
  }

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: eventTime,
        action_source: 'website',
        event_source_url: sourceUrl,
        event_id: eventId || generateEventId(),
        user_data: userData,
        ...(customData && { custom_data: customData }),
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${FACEBOOK_PIXEL_ID}/events?access_token=${FACEBOOK_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Facebook Conversions API error:', response.status, errorData);
      return;
    }

    const result = await response.json();
    console.log('Facebook Conversions API success:', result);
    return result;
  } catch (error) {
    console.error('Facebook Conversions API request failed:', error);
  }
}

// Search Event - when user searches for availability
export async function trackSearchEvent(
  searchQuery: string,
  sourceUrl: string,
  userAgent?: string
) {
  const eventTime = Math.floor(Date.now() / 1000);
  const userData = extractUserData(userAgent);

  return sendFacebookEvent(
    'Search',
    eventTime,
    sourceUrl,
    userData,
    {
      search_string: searchQuery,
    }
  );
}

// ViewContent Event - when user views a page
export async function trackViewContentEvent(
  contentType: string,
  sourceUrl: string,
  userAgent?: string,
  contentId?: string
) {
  const eventTime = Math.floor(Date.now() / 1000);
  const userData = extractUserData(userAgent);

  const customData: Record<string, unknown> = {
    content_type: contentType,
  };

  if (contentId) {
    customData.content_ids = [contentId];
  }

  return sendFacebookEvent(
    'ViewContent',
    eventTime,
    sourceUrl,
    userData,
    customData
  );
}

// Contact Event - when user submits contact form or initiates contact
export async function trackContactEvent(
  contactMethod: 'email' | 'whatsapp' | 'booking' | 'form',
  sourceUrl: string,
  userAgent?: string,
  email?: string,
  phone?: string
) {
  const eventTime = Math.floor(Date.now() / 1000);
  const userData = extractUserData(userAgent);

  // Hash email and phone if provided
  if (email) {
    userData.em = [hashData(email)];
  }
  if (phone) {
    userData.ph = [hashData(phone)];
  }

  return sendFacebookEvent(
    'Contact',
    eventTime,
    sourceUrl,
    userData,
    {
      content_name: `${contactMethod} contact`,
      content_category: 'lead_generation',
    }
  );
}

// Lead Event - when user submits lead form
export async function trackLeadEvent(
  sourceUrl: string,
  userAgent?: string,
  email?: string,
  phone?: string,
  leadValue?: number
) {
  const eventTime = Math.floor(Date.now() / 1000);
  const userData = extractUserData(userAgent);

  // Hash email and phone if provided
  if (email) {
    userData.em = [hashData(email)];
  }
  if (phone) {
    userData.ph = [hashData(phone)];
  }

  const customData: Record<string, unknown> = {
    content_name: 'Programmatic SEO Lead',
    content_category: 'seo_services',
  };

  if (leadValue) {
    customData.value = leadValue;
    customData.currency = 'GBP';
  }

  return sendFacebookEvent(
    'Lead',
    eventTime,
    sourceUrl,
    userData,
    customData
  );
}

// Purchase Event - when user completes booking/purchase
export async function trackPurchaseEvent(
  value: number,
  currency: string,
  sourceUrl: string,
  userAgent?: string,
  email?: string,
  phone?: string
) {
  const eventTime = Math.floor(Date.now() / 1000);
  const userData = extractUserData(userAgent);

  // Hash email and phone if provided
  if (email) {
    userData.em = [hashData(email)];
  }
  if (phone) {
    userData.ph = [hashData(phone)];
  }

  return sendFacebookEvent(
    'Purchase',
    eventTime,
    sourceUrl,
    userData,
    {
      value: value,
      currency: currency,
      content_name: 'Programmatic SEO Service',
      content_category: 'seo_services',
    }
  );
}

// Test event function
export async function testFacebookEvent() {
  if (!FACEBOOK_ACCESS_TOKEN || !FACEBOOK_PIXEL_ID) {
    console.warn('Facebook Conversions API credentials not configured');
    return;
  }

  const testPayload = {
    data: [
      {
        event_name: 'PageView',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: 'https://www.automateseo.co/test',
        user_data: {
          client_user_agent: 'test-user-agent',
        },
        custom_data: {
          content_name: 'Test Page',
        },
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${FACEBOOK_PIXEL_ID}/events?access_token=${FACEBOOK_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testPayload),
      }
    );

    const result = await response.json();
    console.log('Facebook test event result:', result);
    return result;
  } catch (error) {
    console.error('Facebook test event failed:', error);
  }
}

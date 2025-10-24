import { NextRequest, NextResponse } from 'next/server';
import { trackContactEvent } from '@/lib/facebook-conversions-api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contactMethod, sourceUrl, email, phone } = body;

    if (!contactMethod || !sourceUrl) {
      return NextResponse.json(
        { error: 'Missing required fields: contactMethod, sourceUrl' },
        { status: 400 }
      );
    }

    // Validate contact method
    const validMethods = ['email', 'whatsapp', 'booking', 'form'];
    if (!validMethods.includes(contactMethod)) {
      return NextResponse.json(
        { error: 'Invalid contactMethod. Must be one of: email, whatsapp, booking, form' },
        { status: 400 }
      );
    }

    // Extract user agent and IP from request
    const userAgent = request.headers.get('user-agent') || undefined;
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ipAddress = forwardedFor ? forwardedFor.split(',')[0].trim() : undefined;

    // Track the contact event
    await trackContactEvent(contactMethod, sourceUrl, userAgent, ipAddress, email, phone);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact event tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track contact event' },
      { status: 500 }
    );
  }
}

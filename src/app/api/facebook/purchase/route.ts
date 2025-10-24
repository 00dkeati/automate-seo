import { NextRequest, NextResponse } from 'next/server';
import { trackPurchaseEvent } from '@/lib/facebook-conversions-api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { value, currency, sourceUrl, email, phone } = body;

    if (!value || !currency || !sourceUrl) {
      return NextResponse.json(
        { error: 'Missing required fields: value, currency, sourceUrl' },
        { status: 400 }
      );
    }

    // Extract user agent and IP from request
    const userAgent = request.headers.get('user-agent') || undefined;
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ipAddress = forwardedFor ? forwardedFor.split(',')[0].trim() : undefined;

    // Track the purchase event
    await trackPurchaseEvent(value, currency, sourceUrl, userAgent, ipAddress, email, phone);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Purchase event tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track purchase event' },
      { status: 500 }
    );
  }
}

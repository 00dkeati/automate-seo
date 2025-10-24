import { NextRequest, NextResponse } from 'next/server';
import { trackLeadEvent } from '@/lib/facebook-conversions-api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sourceUrl, email, phone, leadValue } = body;

    if (!sourceUrl) {
      return NextResponse.json(
        { error: 'Missing required field: sourceUrl' },
        { status: 400 }
      );
    }

    // Extract user agent from request
    const userAgent = request.headers.get('user-agent') || undefined;

    // Track the lead event
    await trackLeadEvent(sourceUrl, userAgent, email, phone, leadValue);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead event tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track lead event' },
      { status: 500 }
    );
  }
}

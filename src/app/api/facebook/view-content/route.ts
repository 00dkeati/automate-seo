import { NextRequest, NextResponse } from 'next/server';
import { trackViewContentEvent } from '@/lib/facebook-conversions-api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contentType, sourceUrl, contentId } = body;

    if (!contentType || !sourceUrl) {
      return NextResponse.json(
        { error: 'Missing required fields: contentType, sourceUrl' },
        { status: 400 }
      );
    }

    // Extract user agent and IP from request
    const userAgent = request.headers.get('user-agent') || undefined;
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ipAddress = forwardedFor ? forwardedFor.split(',')[0].trim() : undefined;

    // Track the view content event
    await trackViewContentEvent(contentType, sourceUrl, userAgent, ipAddress, contentId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('View content event tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track view content event' },
      { status: 500 }
    );
  }
}

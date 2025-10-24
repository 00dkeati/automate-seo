import { NextRequest, NextResponse } from 'next/server';
import { trackSearchEvent } from '@/lib/facebook-conversions-api';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { searchQuery, sourceUrl } = body;

    if (!searchQuery || !sourceUrl) {
      return NextResponse.json(
        { error: 'Missing required fields: searchQuery, sourceUrl' },
        { status: 400 }
      );
    }

    // Extract user agent from request
    const userAgent = request.headers.get('user-agent') || undefined;

    // Track the search event
    await trackSearchEvent(searchQuery, sourceUrl, userAgent);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Search event tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track search event' },
      { status: 500 }
    );
  }
}

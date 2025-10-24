"use client";

import { useEffect } from 'react';
import { trackPageView } from '@/lib/analytics';

interface PageViewTrackerProps {
  contentType: string;
  contentId?: string;
}

export function PageViewTracker({ contentType, contentId }: PageViewTrackerProps) {
  useEffect(() => {
    // Track page view after component mounts
    trackPageView(contentType, contentId);
  }, [contentType, contentId]);

  // This component doesn't render anything
  return null;
}

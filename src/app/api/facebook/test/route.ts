import { NextRequest, NextResponse } from 'next/server';
import { testFacebookEvent } from '@/lib/facebook-conversions-api';

export async function GET() {
  try {
    const result = await testFacebookEvent();
    
    if (result) {
      return NextResponse.json({ 
        success: true, 
        message: 'Facebook Conversions API test successful',
        result 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Facebook Conversions API test failed - check credentials' 
      }, { status: 400 });
    }
  } catch (error) {
    console.error('Facebook Conversions API test error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Facebook Conversions API test failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

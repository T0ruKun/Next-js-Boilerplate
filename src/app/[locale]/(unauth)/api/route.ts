// src/app/[locale]/(unauth)/api/route.ts

import { NextResponse } from 'next/server';

import { scrapeAndStoreContent } from '@/app/[locale]/(unauth)/pantip';

export async function GET() {
  const url = 'https://pantip.com';

  try {
    // Fetch content using the provided function
    const contentArray = await scrapeAndStoreContent(url);

    // Return a response using NextResponse
    return NextResponse.json(contentArray);
  } catch (error: any) {
    console.error('Error fetching content:', error.message);

    // Return an error response using NextResponse
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

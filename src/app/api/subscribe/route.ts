import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // WARNING: Cloudflare Pages uses the Edge Runtime, which does not have access to a local file system (no 'fs' module).
    // Writing to a local JSON file is physically impossible in this serverless environment.
    // For this MVP, we are logging the email to the server console to simulate a successful subscription.
    // You will need to connect a database (like Cloudflare D1, KV, Supabase, or Firebase) later.
    console.log(`[New Subscriber Collected]: ${email}`);

    return NextResponse.json({ success: true, message: 'Subscribed successfully!' });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

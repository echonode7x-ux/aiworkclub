import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'subscribers.json');

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Ensure directory exists
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing subscribers
    let subscribers = [];
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, 'utf8');
      subscribers = JSON.parse(fileData || '[]');
    }

    // Check for duplicates
    if (subscribers.some((s: any) => s.email === email)) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 400 });
    }

    // Add new subscriber
    subscribers.push({
      email,
      subscribedAt: new Date().toISOString()
    });

    // Save to file
    fs.writeFileSync(dataFilePath, JSON.stringify(subscribers, null, 2), 'utf8');

    return NextResponse.json({ success: true, message: 'Subscribed successfully!' });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

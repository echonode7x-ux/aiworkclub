import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: '请提供有效的邮箱地址' }, { status: 400 });
    }

    // Access the Cloudflare D1 database binding from process.env
    const db = (process.env as any).DB;
    
    if (!db) {
      console.warn('DB binding not found! Simulating success for local testing.', email);
      return NextResponse.json({ success: true, message: 'Subscribed successfully (Local Mock)!' });
    }

    // Check if email already exists
    const existing = await db.prepare('SELECT id FROM Subscribers WHERE email = ?').bind(email).first();
    if (existing) {
      return NextResponse.json({ error: '该邮箱已经订阅过啦' }, { status: 400 });
    }

    // Insert new email
    await db.prepare('INSERT INTO Subscribers (email) VALUES (?)').bind(email).run();

    return NextResponse.json({ success: true, message: '订阅成功！欢迎加入。' });
  } catch (error: any) {
    console.error('Subscription error:', error);
    // Handle unique constraint error specifically if needed (e.g. SQLite error 19)
    if (error.message && error.message.includes('UNIQUE constraint failed')) {
      return NextResponse.json({ error: '该邮箱已经订阅过啦' }, { status: 400 });
    }
    return NextResponse.json({ error: '服务器内部错误，请稍后再试' }, { status: 500 });
  }
}

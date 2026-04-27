export async function onRequestPost(context: any) {
  try {
    const request = context.request;
    const { email } = await request.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: '请提供有效的邮箱地址' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const db = context.env.DB;

    if (!db) {
      console.warn('DB binding not found! Simulating success for local testing.', email);
      return new Response(JSON.stringify({ success: true, message: 'Subscribed successfully (Local Mock)!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if email already exists
    const existing = await db.prepare('SELECT id FROM Subscribers WHERE email = ?').bind(email).first();
    if (existing) {
      return new Response(JSON.stringify({ error: '该邮箱已经订阅过啦' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Insert new email
    await db.prepare('INSERT INTO Subscribers (email) VALUES (?)').bind(email).run();

    return new Response(JSON.stringify({ success: true, message: '订阅成功！欢迎加入。' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Subscription error:', error);
    if (error.message && error.message.includes('UNIQUE constraint failed')) {
      return new Response(JSON.stringify({ error: '该邮箱已经订阅过啦' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response(JSON.stringify({ error: '服务器内部错误，请稍后再试' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

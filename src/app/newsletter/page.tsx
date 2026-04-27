export default function NewsletterPage() {
  return (
    <div className="container mx-auto px-4 py-32 text-center max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Stay Ahead with AI</h1>
      <p className="text-xl text-muted-foreground mb-12">
        每周分享最实用的 AI 工作流、工具评测和行业案例。加入 5,000+ 创作者和业务负责人。
      </p>
      <form className="flex flex-col gap-4">
        <input 
          type="email" 
          placeholder="your@email.com" 
          className="px-6 py-4 rounded-xl border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
          required
        />
        <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity">
          Subscribe Now
        </button>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        No spam, just value. Unsubscribe at any time.
      </p>
    </div>
  );
}

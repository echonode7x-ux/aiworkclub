import Link from "next/link";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          AI Playbooks for <span className="text-primary">Real Work</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          系统整理 AI 工具、工作流、Prompt 和真实案例，帮助你把 AI 落到具体业务动作里。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/playbooks" 
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Browse Playbooks
          </Link>
          <Link 
            href="/tools" 
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
          >
            View Tools
          </Link>
        </div>
      </div>
    </section>
  );
}

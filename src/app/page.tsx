import Link from "next/link";
import { ArrowRight, Sparkles, Zap, BookOpen, Wrench, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-amber-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-neutral-950/50 border-b border-white/10">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          AIPlaybook<span className="text-amber-500">.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer">登录</Link>
          <Link href="#pricing" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95">
            获取 Pro 权限
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {/* Hero Section */}
        <section className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            AI 时代的一人公司操作系统
          </div>
          
          <h1 className="mx-auto max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-500 leading-tight">
            把你看到的 AI 信息流，<br />
            变成<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">能赚钱的工作流</span>。
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed">
            不再贩卖焦虑，不再堆砌新闻。AIPlaybook 为独立创业者和小团队提供真实、可执行的 AI 情报、沉淀好的 SOP 与自动化轻应用。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="#pricing" className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-105">
              立即解锁全部 SOP
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#features" className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-neutral-300 transition-all hover:bg-white/10">
              了解交付内容
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "情报提纯 Digest",
              desc: "每周一份，用人话翻译各大模型更新对普通人的搞钱影响，过滤 99% 噪音。"
            },
            {
              icon: Zap,
              title: "场景 SOP 与 Prompt",
              desc: "从写痛点文案到客户转化，沉淀数十个即插即用的打单级 Prompt 和工作流模板。"
            },
            {
              icon: Wrench,
              title: "高频 SaaS 轻工具",
              desc: "封装好的云端执行器，只需输入网址即可一键自动洗稿分发，消耗 token 我们买单。"
            }
          ].map((feat, i) => (
             <div key={i} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/50 p-8 transition-all hover:bg-neutral-800/80 hover:border-amber-500/30">
               <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
               <div className="relative z-10">
                 <div className="mb-6 inline-flex rounded-2xl bg-white/10 p-4 text-amber-500 ring-1 ring-white/10">
                   <feat.icon className="h-6 w-6" />
                 </div>
                 <h3 className="mb-3 text-xl font-bold text-white">{feat.title}</h3>
                 <p className="text-neutral-400 leading-relaxed">{feat.desc}</p>
               </div>
             </div>
          ))}
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mx-auto max-w-5xl rounded-[3rem] border border-white/10 bg-neutral-900/40 p-8 md:p-16 backdrop-blur-2xl relative overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 h-full w-full bg-gradient-to-b from-amber-500/20 to-transparent blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">投资你的超级杠杆</h2>
            <p className="text-neutral-400 text-lg">今天少点一顿外卖，换取一个顶配 AI 副总。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start relative z-10">
            {/* Free */}
            <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
              <h3 className="text-xl font-semibold text-neutral-300">Free / 观望者</h3>
              <div className="my-6 flex items-baseline tracking-tight">
                <span className="text-5xl font-bold">¥0</span>
                <span className="text-neutral-500 ml-2">/ 永久</span>
              </div>
              <p className="text-neutral-400 text-sm mb-6 pb-6 border-b border-white/10">浅尝辄止，接收延时碎片信息。</p>
              <ul className="space-y-4 text-sm text-neutral-300">
                {['阅读公开版周报', '有限试用 3 次轻工具', '加入邮件订阅组'].map((item, i) => (
                  <li key={i} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-neutral-600 shrink-0" /> {item}</li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full border border-white/20 bg-transparent py-3 text-sm font-semibold transition hover:bg-white/10 cursor-pointer">
                 创建免费账号
              </button>
            </div>

            {/* Pro */}
            <div className="rounded-3xl border-2 border-amber-500 bg-gradient-to-b from-amber-950/40 to-black p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-xs font-bold text-black uppercase tracking-wider">
                极力推荐
              </div>
              <h3 className="text-xl font-semibold text-white">Pro / 一人公司</h3>
              <div className="my-6 flex items-baseline tracking-tight">
                <span className="text-5xl font-bold text-amber-500">¥99</span>
                <span className="text-neutral-400 ml-2">/ 月</span>
              </div>
              <p className="text-neutral-300 text-sm mb-6 pb-6 border-b border-white/10">解锁完整 Work OS 与自动化生产力工具。</p>
              <ul className="space-y-4 text-sm text-neutral-200">
                {[
                  '解锁全部 100+ 深度 Playbook',
                  '不限量的高阶 Prompt 模板库',
                  'SaaS 轻应用每月 500 次并发提权',
                  '一人公司建站/营销 SOP 全集',
                  '无限次云端自动化流转记录保存'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" /> {item}</li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full bg-amber-500 py-3 text-sm font-bold text-black transition-all hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] cursor-pointer">
                 升级到 Pro
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

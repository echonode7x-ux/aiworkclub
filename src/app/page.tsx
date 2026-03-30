export default function Home() {
	return (
		<main className="min-h-screen overflow-hidden px-6 py-8 sm:px-10 lg:px-14">
			<div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-between rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-[0_30px_120px_rgba(17,17,17,0.10)] backdrop-blur md:p-12">
				<header className="flex items-center justify-between gap-6">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">AI Work Club</p>
						<h1 className="mt-3 max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-7xl">
							用 Next.js 搭一个能快速上线的 AI 社群 MVP。
						</h1>
					</div>
					<div className="hidden rounded-full border border-black/10 bg-black px-4 py-2 text-sm text-white md:block">
						Cloudflare Ready
					</div>
				</header>

				<section className="grid gap-6 py-12 md:grid-cols-[1.35fr_0.9fr] md:py-16">
					<div className="space-y-6">
						<p className="max-w-2xl text-lg leading-8 text-neutral-700">
							当前仓库已经切到纯 Next.js，并按 Cloudflare 官方的 OpenNext 路线准备好了 Workers 部署骨架。接下来可以继续加登录、活动、文章、成员目录和后台表单。
						</p>
						<div className="flex flex-wrap gap-3">
							<a
								className="rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
								href="https://github.com/echonode7x-ux/aiworkclub"
								target="_blank"
								rel="noreferrer"
							>
								查看仓库
							</a>
							<a
								className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-black/20 hover:bg-neutral-50"
								href="https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/"
								target="_blank"
								rel="noreferrer"
							>
								Cloudflare Next.js 文档
							</a>
						</div>
					</div>

					<div className="grid gap-4">
						<div className="rounded-[1.75rem] border border-black/10 bg-neutral-950 p-6 text-white">
							<p className="text-sm uppercase tracking-[0.25em] text-amber-300">Stack</p>
							<ul className="mt-4 space-y-3 text-sm text-neutral-200">
								<li>Next.js App Router</li>
								<li>Cloudflare Workers via OpenNext</li>
								<li>D1 作为后续可接入的 SQLite 数据库</li>
							</ul>
						</div>
						<div className="rounded-[1.75rem] border border-black/10 bg-gradient-to-br from-amber-100 to-orange-50 p-6">
							<p className="text-sm uppercase tracking-[0.25em] text-amber-800">MVP Path</p>
							<p className="mt-4 text-sm leading-7 text-neutral-700">
								先上线首页和基础路由，再补 D1 表结构。这样能先把产品发布出去，不会在数据库建模上卡太久。
							</p>
						</div>
					</div>
				</section>

				<footer className="grid gap-3 border-t border-black/10 pt-6 text-sm text-neutral-600 md:grid-cols-3">
					<p>阶段 1：Next.js 骨架与自动部署</p>
					<p>阶段 2：D1 数据表与基础表单</p>
					<p>阶段 3：会员、内容、活动页</p>
				</footer>
			</div>
		</main>
	);
}

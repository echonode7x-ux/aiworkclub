# 11 技术架构

## 推荐技术栈
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react

## 部署
- Cloudflare Pages / Workers

## 数据
- Cloudflare D1 或 Supabase Postgres

## 资源
- Cloudflare R2

## 鉴权
- Clerk 或 Supabase Auth

## 支付
- Stripe

## 邮件
- Resend

## AI
- OpenAI / Anthropic
- 通过统一 provider abstraction

## 关键原则
- 内容页静态渲染
- 登录、支付、工具为动态
- 工具调用必须记录用量
- 权限模型清晰：guest / free / pro / admin

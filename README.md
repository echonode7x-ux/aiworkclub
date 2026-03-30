# aiworkclub

Cloudflare Workers 上运行的 Next.js MVP 项目。

## 当前技术栈

- Next.js App Router
- OpenNext Cloudflare 适配层
- Wrangler / Cloudflare Workers
- D1 预留为后续数据库方案

## 本地开发

```bash
npm install
npm run dev
```

## 本地预览 Cloudflare 运行时

```bash
npm run preview
```

## 部署

```bash
npm run deploy
```

需要先配置 Cloudflare 认证，例如 `CLOUDFLARE_API_TOKEN` 和 `CLOUDFLARE_ACCOUNT_ID`。

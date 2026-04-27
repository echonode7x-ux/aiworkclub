# AIPlaybook 内容站 PRD + 设计规格

## 1. 项目定位

项目名称：AIPlaybook Club / AIPlaybook Today

项目类型：公开内容分享网站，后期可扩展为会员订阅与 SaaS 工具平台。

核心目标：

- 建立一个结构化 AI 使用知识库。
- 用内容获取自然搜索流量。
- 通过高质量 Playbook、案例、工具教程沉淀信任。
- 后期扩展付费内容、会员订阅、AI 小工具、SaaS Dashboard。

一句话定位：

> 一个面向个人创作者、小团队和业务负责人的 AI 落地 Playbook 网站，提供可直接执行的 AI 工具、流程、案例和方法论。

## 2. 推荐技术栈

### 2.1 MVP 技术栈

- Framework：Next.js 15+
- Docs / Wiki Layer：Fumadocs
- Content：MDX
- Styling：Tailwind CSS
- UI：shadcn/ui 风格组件
- Search：Fumadocs Search / Orama / Pagefind，优先使用 Fumadocs 官方推荐方案
- Deploy：Vercel 或 Cloudflare Pages
- Analytics：Plausible / Vercel Analytics / Google Analytics

### 2.2 后期扩展技术栈

- Auth：Auth.js / Clerk / Supabase Auth
- Database：PostgreSQL / Supabase
- Payment：Stripe / Lemon Squeezy
- Email：Resend / Loops / ConvertKit
- CMS 可选：Git-based MDX，后期可接 Decap CMS / Sanity / Payload

## 3. 许可证说明

Fumadocs GitHub 仓库标注为 MIT License。通常允许免费商用、修改、分发和私有使用。项目中需要保留原始许可证和版权声明。

开发时需要注意：

- 检查 Fumadocs 主仓库 LICENSE。
- 检查新增依赖的许可证。
- 不要复制第三方商业模板或未授权设计资源。
- 图片、图标、字体需要使用可商用资源。

## 4. 产品结构

### 4.1 一级导航

建议导航：

- 首页
- Playbooks
- Workflows
- Prompts
- Tools
- Cases
- Tutorials
- Resources
- Newsletter
- Pricing，MVP 可隐藏

### 4.2 内容栏目定义

#### Playbooks

系统化方法论和执行手册。

例子：

- 如何用 AI 搭建个人内容生产系统
- 如何用 AI 做竞品研究
- 如何用 AI 建立销售线索收集流程

#### Workflows

可复制的具体工作流。

例子：

- 从网页收集到 Notion 数据库的 AI 自动化流程
- 用 ChatGPT + Perplexity + Sheets 做选题池
- 用 AI 生成短视频脚本并批量生产

#### Prompts

Prompt 模板库。

例子：

- 市场调研 Prompt
- 小红书选题 Prompt
- SaaS Landing Page 文案 Prompt

#### Tools

AI 工具目录与使用指南。

例子：

- ChatGPT
- Claude
- Perplexity
- Cursor
- Lovable
- n8n
- Make
- Zapier

#### Cases

真实应用案例。

例子：

- 一人公司如何用 AI 做客服自动化
- 小团队如何用 AI 做内容增长
- 独立开发者如何用 AI 做 MVP

#### Tutorials

基础教学。

例子：

- Cursor 入门
- ChatGPT Projects 使用方法
- 如何写一个可复用的 Prompt

#### Resources

资源集合。

例子：

- AI 工具清单
- 自动化平台清单
- 学习路线图
- 模板下载

## 5. 页面设计规格

### 5.1 首页

目标：说明网站价值，分发内容入口，沉淀订阅。

首页模块顺序：

1. Hero 区域
2. 核心分类入口
3. Featured Playbooks
4. Latest Workflows
5. Tool Directory Preview
6. Newsletter CTA
7. 后期可加入 Pricing CTA

#### Hero 文案

标题：

> AI Playbooks for Real Work

副标题：

> 系统整理 AI 工具、工作流、Prompt 和真实案例，帮助你把 AI 落到具体业务动作里。

主按钮：

> Browse Playbooks

副按钮：

> View Tools

#### 首页视觉风格

- 背景：浅色为主，支持暗色模式
- 布局：最大宽度 1200px，中间对齐
- 卡片：圆角 16px，细边框，轻阴影
- 字体：默认使用系统字体或 Geist
- 颜色：中性黑白灰 + 一个品牌强调色
- 整体风格：干净、专业、内容优先

### 5.2 内容列表页

适用页面：Playbooks / Workflows / Prompts / Tools / Cases / Tutorials

必须包含：

- 页面标题
- 页面描述
- 分类筛选
- 标签筛选
- 搜索框
- 内容卡片列表
- 空状态提示

内容卡片字段：

- title
- description
- category
- tags
- level
- updated_at
- reading_time
- is_premium，MVP 可先不用

### 5.3 内容详情页

必须包含：

- 标题
- 简介
- 标签
- 更新时间
- 阅读时间
- 目录 TOC
- 正文 MDX
- 相关内容推荐
- Newsletter CTA

Playbook 详情页建议结构：

1. 适用场景
2. 你将得到什么
3. 所需工具
4. 执行步骤
5. Prompt 模板
6. 输出示例
7. 常见问题
8. 下一步建议

### 5.4 工具详情页

工具页字段：

- 工具名称
- 官网链接
- 简短介绍
- 适合人群
- 核心能力
- 典型使用场景
- 优点
- 缺点
- 替代工具
- 推荐工作流
- 价格说明，后期需要定期更新

### 5.5 Prompt 详情页

Prompt 页面结构：

1. 使用场景
2. Prompt 正文
3. 变量说明
4. 使用步骤
5. 示例输入
6. 示例输出
7. 改写建议
8. 相关 Prompt

## 6. 内容模型

### 6.1 通用 Frontmatter

```yaml
title: "用 AI 做竞品研究的完整工作流"
description: "从信息收集、竞品拆解到输出分析报告的完整 AI 工作流。"
category: "research"
tags:
  - AI workflow
  - competitor research
  - business
level: "intermediate"
author: "AIPlaybook"
published_at: "2026-04-27"
updated_at: "2026-04-27"
reading_time: 8
is_premium: false
featured: true
related:
  - "ai-market-research"
  - "perplexity-research-workflow"
```

### 6.2 Playbook Frontmatter

```yaml
type: "playbook"
use_case: "market-research"
tools:
  - ChatGPT
  - Perplexity
  - Google Sheets
output:
  - competitor matrix
  - research summary
  - action plan
```

### 6.3 Tool Frontmatter

```yaml
type: "tool"
name: "Cursor"
website: "https://cursor.com"
pricing_type: "freemium"
use_cases:
  - coding
  - automation
  - prototyping
alternatives:
  - Windsurf
  - GitHub Copilot
```

### 6.4 Prompt Frontmatter

```yaml
type: "prompt"
prompt_category: "marketing"
variables:
  - product
  - audience
  - channel
  - tone
```

## 7. 信息架构与路由

建议路由：

```txt
/
/playbooks
/playbooks/[slug]
/workflows
/workflows/[slug]
/prompts
/prompts/[slug]
/tools
/tools/[slug]
/cases
/cases/[slug]
/tutorials
/tutorials/[slug]
/resources
/newsletter
/pricing
/about
```

MVP 阶段必须完成：

```txt
/
/playbooks
/playbooks/[slug]
/workflows
/workflows/[slug]
/prompts
/prompts/[slug]
/tools
/tools/[slug]
```

Pricing、会员中心、登录可以先预留，不一定上线。

## 8. 推荐项目目录结构

```txt
app/
  page.tsx
  layout.tsx
  globals.css
  playbooks/
    page.tsx
    [slug]/
      page.tsx
  workflows/
    page.tsx
    [slug]/
      page.tsx
  prompts/
    page.tsx
    [slug]/
      page.tsx
  tools/
    page.tsx
    [slug]/
      page.tsx
  newsletter/
    page.tsx
  pricing/
    page.tsx

content/
  playbooks/
  workflows/
  prompts/
  tools/
  cases/
  tutorials/

components/
  site-header.tsx
  site-footer.tsx
  hero.tsx
  content-card.tsx
  category-filter.tsx
  tag-filter.tsx
  search-box.tsx
  newsletter-cta.tsx
  related-content.tsx
  mdx-components.tsx

lib/
  content.ts
  metadata.ts
  constants.ts
  seo.ts

types/
  content.ts
```

## 9. 组件规格

### 9.1 SiteHeader

功能：

- Logo
- 主导航
- 搜索入口
- 暗色模式切换
- 移动端菜单

### 9.2 ContentCard

Props：

```ts
type ContentCardProps = {
  title: string;
  description: string;
  href: string;
  category?: string;
  tags?: string[];
  level?: "beginner" | "intermediate" | "advanced";
  updatedAt?: string;
  readingTime?: number;
  premium?: boolean;
};
```

### 9.3 NewsletterCTA

字段：

- title
- description
- email input
- submit button

MVP 可先跳转到外部邮件订阅平台，或只做静态表单占位。

### 9.4 RelatedContent

根据 tags / category / related 字段展示 3-6 个相关内容。

## 10. SEO 规格

每个页面必须生成：

- title
- description
- canonical URL
- Open Graph title
- Open Graph description
- Open Graph image，MVP 可使用统一默认图
- Twitter card

内容页 URL 要简洁：

```txt
/playbooks/ai-competitor-research
/tools/cursor
/prompts/landing-page-copywriting
```

禁止使用中文拼音混乱 URL。建议 slug 全部英文小写，用短横线连接。

## 11. 搜索与筛选

MVP 搜索范围：

- title
- description
- tags
- category

后期搜索范围：

- 正文全文
- 工具名称
- 相关场景
- Prompt 变量

筛选维度：

- category
- tag
- level
- content type
- tool

## 12. MVP 内容样例

上线时至少准备：

- 10 篇 Playbooks
- 10 条 Workflows
- 30 条 Prompts
- 20 个 Tools
- 5 个 Cases
- 5 篇 Tutorials

合计 80 条左右，足够形成内容站基本质感。

## 13. 商业化预留

### 13.1 会员内容

Frontmatter 预留：

```yaml
is_premium: true
premium_level: "pro"
```

展示逻辑：

- 免费用户可看摘要。
- 付费用户可看完整内容。
- 未登录用户看到 CTA。

### 13.2 订阅计划

未来 Pricing：

- Free：公开内容
- Pro：高级 Playbooks、Prompt Pack、案例库
- Team：团队模板、内部培训、工具包

### 13.3 SaaS 工具预留

未来工具模块：

- Prompt Builder
- Workflow Generator
- AI Tool Selector
- Content Calendar Generator
- Research Brief Generator

建议未来路径：

```txt
/app
/app/dashboard
/app/tools/prompt-builder
/app/tools/workflow-generator
```

## 14. 非功能性要求

性能：

- 首页 Lighthouse Performance > 90
- SEO > 90
- Accessibility > 90
- 移动端完全可用

维护：

- 内容用 MDX 管理
- 每篇内容结构统一
- 新增文章不需要改代码
- 配置集中在 constants.ts

安全：

- 不暴露私密 API Key
- 后期接支付时使用服务端校验
- 后期会员内容不能只靠前端隐藏

## 15. 开发阶段拆解

### Phase 1：基础站点

交付：

- Next.js 项目初始化
- Fumadocs 集成
- Tailwind 配置
- 首页
- 基础布局
- Header/Footer
- MDX 内容渲染

### Phase 2：内容系统

交付：

- 内容目录
- Frontmatter schema
- 列表页
- 详情页
- 分类和标签
- 相关内容

### Phase 3：搜索和体验

交付：

- 全站搜索
- 筛选
- 暗色模式
- 移动端菜单
- Newsletter CTA

### Phase 4：SEO 和部署

交付：

- Metadata
- Sitemap
- robots.txt
- Open Graph
- Vercel 部署
- Analytics

### Phase 5：商业化预留

交付：

- pricing 页面占位
- premium 字段
- paywall 组件占位
- auth/billing 目录预留

## 16. AI Coding 执行提示词

可以直接给 AI Coding / Codex：

```txt
你是一个资深 Next.js 全栈工程师。请基于以下 PRD 构建一个 AIPlaybook 内容分享网站。

技术要求：
- 使用 Next.js App Router
- 使用 TypeScript
- 使用 Tailwind CSS
- 使用 Fumadocs 或与 Fumadocs 兼容的 MDX 文档系统
- 内容存放在 content/ 目录
- 使用 MDX + frontmatter 管理内容
- 实现首页、内容列表页、内容详情页、工具页、Prompt 页
- 实现响应式布局、暗色模式、SEO metadata、sitemap、robots.txt
- 代码结构清晰，组件可复用
- 不要接入真实支付和登录，但预留 premium 字段和 paywall 组件

请一次性生成完整项目结构、核心代码、示例内容和 README。
```

## 17. 验收标准

MVP 完成后必须满足：

- 本地 `npm run dev` 可启动。
- 首页可正常访问。
- Playbooks、Workflows、Prompts、Tools 四个栏目可正常访问。
- 每个栏目至少有 2 条示例内容。
- MDX 内容页可正常渲染。
- Frontmatter 可被读取并显示在卡片和详情页。
- 移动端导航可用。
- SEO metadata 生效。
- 无明显 TypeScript 报错。
- README 写明如何新增内容。

## 18. 关键决策

最终建议：

- 不要自研 wiki。
- 不要用传统 wiki 系统做主站。
- 使用 Fumadocs + Next.js + MDX 做内容底座。
- 第一阶段只做内容分发和 SEO。
- 第二阶段加收藏、搜索增强和会员。
- 第三阶段加 AI 工具和 SaaS Dashboard。

这个项目的核心不是“文档站”，而是一个可以逐步商业化的 AI 内容操作系统。

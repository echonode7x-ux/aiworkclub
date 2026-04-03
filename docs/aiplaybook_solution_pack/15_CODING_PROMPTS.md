# 15 可直接给 AI Coding / Codex 的提示词

## Prompt 1：整站初始化
你现在是资深产品设计师 + 全栈工程师。请基于本方案包直接实现 AIPlaybook 第一版网站。

目标：
- production-ready Web 应用
- 技术栈使用 Next.js + TypeScript + Tailwind + shadcn/ui
- 风格遵循 05_UI_STYLE_GUIDE.md
- 页面结构遵循 07_PAGE_SPECS.md
- 技术架构遵循 11_TECH_ARCHITECTURE.md
- API 与数据遵循 13_API_SPEC.md 和 12_DATABASE_SCHEMA.sql

要求：
1. 先生成完整项目结构
2. 实现营销页
3. 实现内容系统
4. 实现工具系统
5. 实现登录、订阅、Dashboard
6. 代码整洁、可运行、组件化

## Prompt 2：只做 UI
请根据 05_UI_STYLE_GUIDE.md、06_DESIGN_SYSTEM.md、07_PAGE_SPECS.md 生成 AIPlaybook 完整前端 UI。
要求：
- Next.js + TypeScript + Tailwind + shadcn/ui
- 首页、Pricing、Digest、Playbooks、Templates、Tools、Dashboard 全做
- 响应式
- 高质量 mock 内容
- 接近真实上线状态

## Prompt 3：只做内容系统
请根据 08_CONTENT_MODEL.md 为 AIPlaybook 实现 MDX 内容系统。
要求：
- 支持 Digest、Playbook、Template 三种内容类型
- 自动生成列表页和详情页
- 支持 access_level 字段
- 标签和分类筛选
- 本地 content 目录读取

## Prompt 4：只做工具系统
请根据 09_TOOL_SPECS.md 和 13_API_SPEC.md 实现三个 AI 工具页。
要求：
- 每个工具单独页面
- 输入、提交、loading、输出展示完整
- 游客可试用，Pro 可解锁完整输出
- 先用 mock LLM 输出结构，后接真实 provider

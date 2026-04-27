# AIPlaybook Content Platform

A structured AI knowledge base built with Next.js, Fumadocs, and MDX.

## 🚀 Getting Started

1.  **Install dependencies**:
    ```bash
    pnpm install
    ```

2.  **Run the development server**:
    ```bash
    pnpm dev
    ```

3.  **Open the site**:
    Navigate to [http://localhost:3000](http://localhost:3000).

## 📁 Content Management

All content is managed via MDX files in the `src/content` directory.

- `playbooks/`: Systematic methodologies and execution manuals.
- `workflows/`: Replicable specific automation flows.
- `prompts/`: AI prompt template library.
- `tools/`: AI tool directory and usage guides.
- `cases/`: Real-world application case studies.
- `tutorials/`: Basic educational content.

### Adding New Content

To add a new playbook, create a file at `src/content/playbooks/your-slug.mdx`:

```yaml
---
title: "Your Title"
description: "Brief description"
category: "research"
tags: ["tag1", "tag2"]
level: "beginner"
author: "Author Name"
published_at: "2026-04-27"
updated_at: "2026-04-27"
reading_time: 5
type: "playbook"
---

Your content in Markdown here...
```

## 🛠 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Documentation Layer**: Fumadocs
- **Styling**: Tailwind CSS
- **UI Components**: custom components with Lucide icons
- **Content**: MDX with Frontmatter

## 📝 License

MIT

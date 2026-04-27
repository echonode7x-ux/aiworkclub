// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"cases/solo-creator-automation.mdx": () => import("../src/content/cases/solo-creator-automation.mdx?collection=docs"), "cases/startup-growth-hack.mdx": () => import("../src/content/cases/startup-growth-hack.mdx?collection=docs"), "playbooks/ai-competitor-research.mdx": () => import("../src/content/playbooks/ai-competitor-research.mdx?collection=docs"), "playbooks/ai-content-production.mdx": () => import("../src/content/playbooks/ai-content-production.mdx?collection=docs"), "prompts/landing-page-copywriting.mdx": () => import("../src/content/prompts/landing-page-copywriting.mdx?collection=docs"), "prompts/seo-blog-post.mdx": () => import("../src/content/prompts/seo-blog-post.mdx?collection=docs"), "workflows/notion-ai-automation.mdx": () => import("../src/content/workflows/notion-ai-automation.mdx?collection=docs"), "workflows/zapier-ai-automation.mdx": () => import("../src/content/workflows/zapier-ai-automation.mdx?collection=docs"), "tools/cursor.mdx": () => import("../src/content/tools/cursor.mdx?collection=docs"), "tools/perplexity.mdx": () => import("../src/content/tools/perplexity.mdx?collection=docs"), "tutorials/cursor-beginner-guide.mdx": () => import("../src/content/tutorials/cursor-beginner-guide.mdx?collection=docs"), "tutorials/github-copilot-guide.mdx": () => import("../src/content/tutorials/github-copilot-guide.mdx?collection=docs"), }),
};
export default browserCollections;
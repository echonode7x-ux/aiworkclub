// @ts-nocheck
import * as __fd_glob_11 from "../src/content/workflows/zapier-ai-automation.mdx?collection=docs"
import * as __fd_glob_10 from "../src/content/workflows/notion-ai-automation.mdx?collection=docs"
import * as __fd_glob_9 from "../src/content/tutorials/github-copilot-guide.mdx?collection=docs"
import * as __fd_glob_8 from "../src/content/tutorials/cursor-beginner-guide.mdx?collection=docs"
import * as __fd_glob_7 from "../src/content/tools/perplexity.mdx?collection=docs"
import * as __fd_glob_6 from "../src/content/tools/cursor.mdx?collection=docs"
import * as __fd_glob_5 from "../src/content/prompts/seo-blog-post.mdx?collection=docs"
import * as __fd_glob_4 from "../src/content/prompts/landing-page-copywriting.mdx?collection=docs"
import * as __fd_glob_3 from "../src/content/playbooks/ai-content-production.mdx?collection=docs"
import * as __fd_glob_2 from "../src/content/playbooks/ai-competitor-research.mdx?collection=docs"
import * as __fd_glob_1 from "../src/content/cases/startup-growth-hack.mdx?collection=docs"
import * as __fd_glob_0 from "../src/content/cases/solo-creator-automation.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.doc("docs", "src/content", {"cases/solo-creator-automation.mdx": __fd_glob_0, "cases/startup-growth-hack.mdx": __fd_glob_1, "playbooks/ai-competitor-research.mdx": __fd_glob_2, "playbooks/ai-content-production.mdx": __fd_glob_3, "prompts/landing-page-copywriting.mdx": __fd_glob_4, "prompts/seo-blog-post.mdx": __fd_glob_5, "tools/cursor.mdx": __fd_glob_6, "tools/perplexity.mdx": __fd_glob_7, "tutorials/cursor-beginner-guide.mdx": __fd_glob_8, "tutorials/github-copilot-guide.mdx": __fd_glob_9, "workflows/notion-ai-automation.mdx": __fd_glob_10, "workflows/zapier-ai-automation.mdx": __fd_glob_11, });

export const meta = await create.meta("meta", "src/content", {});
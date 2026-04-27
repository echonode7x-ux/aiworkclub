import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { formatDate } from "@/lib/utils";
import { Clock, Calendar, User } from "lucide-react";
import { Metadata } from "next";

export default async function PlaybookPage({ params }: { params: { slug: string } }) {
  const page = source.getPage([params.slug], "playbooks");

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4 text-sm font-medium text-primary">
          <span>{page.data.category}</span>
          <span className="text-muted-foreground">•</span>
          <span className="capitalize">{page.data.level}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{page.data.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{page.data.description}</p>
        
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-y py-6">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{page.data.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Last updated: {formatDate(page.data.updated_at || "")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{page.data.reading_time} min read</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <MDX />
        </div>
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <h4 className="font-bold mb-4 uppercase tracking-wider text-xs">Table of Contents</h4>
            <InlineTOC items={page.data.toc} />
          </div>
        </aside>
      </div>
    </article>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = source.getPage([params.slug], "playbooks");
  if (!page) return {};

  return {
    title: `${page.data.title} | AIPlaybook`,
    description: page.data.description,
  };
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs[page.slugs.length - 1],
  }));
}

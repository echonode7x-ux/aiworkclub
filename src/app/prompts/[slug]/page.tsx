import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import { Copy } from "lucide-react";

export default async function PromptPage({ params }: { params: { slug: string } }) {
  const page = source.getPage([params.slug], "prompts");

  if (!page) notFound();

  const data = page.data as any;
  const MDX = page.data.body;

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4 text-sm font-medium text-primary uppercase tracking-widest">
          <span>{data.category}</span>
          <span className="text-muted-foreground">•</span>
          <span>{data.level}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{data.description}</p>
        
        {data.variables && page.data.variables.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {data.variables.map((v) => (
              <span key={v} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-mono">
                {v}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none border-t pt-12">
        <MDX />
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs[page.slugs.length - 1],
  }));
}

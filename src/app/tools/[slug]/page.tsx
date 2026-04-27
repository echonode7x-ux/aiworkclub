import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { ExternalLink, Globe } from "lucide-react";

export default async function ToolPage({ params }: { params: { slug: string } }) {
  const page = source.getPage([params.slug], "tools");

  if (!page) notFound();

  const data = page.data as any;
  const MDX = page.data.body;

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12 flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-primary uppercase tracking-widest">
            <span>{data.category}</span>
            {data.pricing_type && (
               <>
                 <span className="text-muted-foreground">•</span>
                 <span>{data.pricing_type}</span>
               </>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{data.description}</p>
          
          <div className="flex gap-4">
             {data.website && (
               <a 
                href={data.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
               >
                <Globe className="h-4 w-4" />
                Visit Website
                <ExternalLink className="h-3 w-3" />
               </a>
             )}
          </div>
        </div>
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none border-t pt-12">
        <MDX />
      </div>

      <footer className="mt-12 pt-8 border-t text-sm text-muted-foreground">
        Last updated: {formatDate(data.updated_at || "")}
      </footer>
    </article>
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs[page.slugs.length - 1],
  }));
}

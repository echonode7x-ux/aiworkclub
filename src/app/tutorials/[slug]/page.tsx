import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { Clock, Calendar, BookOpen } from "lucide-react";

export default async function TutorialPage({ params }: { params: { slug: string } }) {
  const page = source.getPage([params.slug], "tutorials");

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4 text-sm font-medium text-primary">
          <BookOpen className="h-4 w-4" />
          <span>Tutorial</span>
          <span className="text-muted-foreground">•</span>
          <span>{page.data.category}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{page.data.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{page.data.description}</p>
        
        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-y py-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(page.data.updated_at || "")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{page.data.reading_time} min read</span>
          </div>
        </div>
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none">
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

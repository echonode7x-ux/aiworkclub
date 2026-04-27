import { ContentCard } from "@/components/content-card";
import { source } from "@/lib/source";

export default function PromptsPage() {
  const prompts = source.getPages().filter(page => page.url.startsWith('/prompts'));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">AI Prompts</h1>
        <p className="text-xl text-muted-foreground">Prompt 模板库。</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prompts.map((page) => (
          <ContentCard
            key={page.url}
            title={page.data.title}
            description={page.data.description}
            href={page.url}
            category={page.data.category}
            level={page.data.level}
            updatedAt={page.data.updated_at}
            readingTime={page.data.reading_time}
          />
        ))}
      </div>
    </div>
  );
}

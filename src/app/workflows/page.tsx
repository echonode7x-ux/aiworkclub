import { ContentCard } from "@/components/content-card";
import { source } from "@/lib/source";

export default function WorkflowsPage() {
  const workflows = source.getPages().filter(page => page.url.startsWith('/workflows'));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Workflows</h1>
        <p className="text-xl text-muted-foreground">可复制的具体工作流。</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflows.map((page) => (
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

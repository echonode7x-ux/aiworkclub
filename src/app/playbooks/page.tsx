import { ContentCard } from "@/components/content-card";
import { source } from "@/lib/source";

export default function PlaybooksPage() {
  const playbooks = source.getPages().filter(page => page.url.startsWith('/playbooks'));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Playbooks</h1>
        <p className="text-xl text-muted-foreground">系统化方法论和执行手册。</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playbooks.map((page) => (
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
      
      {playbooks.length === 0 && (
        <div className="text-center py-20 border rounded-2xl bg-muted/20">
          <p className="text-muted-foreground">No playbooks found yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}

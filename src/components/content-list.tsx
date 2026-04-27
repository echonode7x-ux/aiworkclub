import { ContentCard } from "@/components/content-card";

interface ContentListProps {
  title: string;
  description: string;
  items: any[];
}

export function ContentList({ title, description, items }: ContentListProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-muted-foreground">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((page) => (
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
      
      {items.length === 0 && (
        <div className="text-center py-20 border rounded-2xl bg-muted/20">
          <p className="text-muted-foreground">Coming soon! We are working on adding more content.</p>
        </div>
      )}
    </div>
  );
}

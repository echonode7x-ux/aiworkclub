import { ContentList } from "@/components/content-list";
import { source } from "@/lib/source";

export default function TutorialsPage() {
  const tutorials = source.getPages().filter(page => page.url.startsWith('/tutorials'));

  return (
    <ContentList 
      title="Tutorials" 
      description="基础教学。" 
      items={tutorials} 
    />
  );
}

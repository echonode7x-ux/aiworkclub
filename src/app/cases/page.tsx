import { ContentList } from "@/components/content-list";
import { source } from "@/lib/source";

export default function CasesPage() {
  const cases = source.getPages().filter(page => page.url.startsWith('/cases'));

  return (
    <ContentList 
      title="Cases" 
      description="真实应用案例。" 
      items={cases} 
    />
  );
}

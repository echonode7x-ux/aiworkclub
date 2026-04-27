import { Hero } from "@/components/hero";
import { ContentCard } from "@/components/content-card";
import { source } from "@/lib/source";

export default function Home() {
  const allContent = source.getPages();
  const featuredContent = allContent.filter(page => page.data.featured).slice(0, 3);
  const latestContent = [...allContent].sort((a, b) => 
    new Date(b.data.updated_at || "").getTime() - new Date(a.data.updated_at || "").getTime()
  ).slice(0, 6);

  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      
      {featuredContent.length > 0 && (
        <section className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Playbooks</h2>
              <p className="text-muted-foreground">Hand-picked guides to get you started.</p>
            </div>
            <a href="/playbooks" className="text-primary font-medium hover:underline">View all</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredContent.map((page) => (
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
        </section>
      )}

      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold">Latest Updates</h2>
            <p className="text-muted-foreground">Stay up to date with new workflows and tools.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestContent.map((page) => (
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
      </section>

      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-[2rem] p-8 md:p-16 text-primary-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the AIPlaybook Newsletter</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Get the latest playbooks and workflows delivered to your inbox every week.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-full bg-primary-foreground text-primary outline-none"
            />
            <button className="px-8 py-3 bg-background text-foreground rounded-full font-bold hover:bg-opacity-90">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

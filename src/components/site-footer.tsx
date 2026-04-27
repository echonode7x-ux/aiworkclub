import { SITE_CONFIG } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">{SITE_CONFIG.name}</h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              {SITE_CONFIG.description}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/playbooks" className="hover:text-foreground">Playbooks</a></li>
              <li><a href="/workflows" className="hover:text-foreground">Workflows</a></li>
              <li><a href="/tools" className="hover:text-foreground">Tools</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={SITE_CONFIG.links.twitter} className="hover:text-foreground">Twitter</a></li>
              <li><a href={SITE_CONFIG.links.github} className="hover:text-foreground">GitHub</a></li>
              <li><a href="/newsletter" className="hover:text-foreground">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-sm text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-foreground">Privacy Policy</a>
            <a href="/terms" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Clock, Tag } from "lucide-react";

interface ContentCardProps {
  title: string;
  description: string;
  href: string;
  category?: string;
  tags?: string[];
  level?: string;
  updatedAt?: string;
  readingTime?: number;
}

export function ContentCard({
  title,
  description,
  href,
  category,
  tags,
  level,
  updatedAt,
  readingTime,
}: ContentCardProps) {
  return (
    <Link 
      href={href}
      className="group block p-6 border rounded-2xl bg-card hover:shadow-lg transition-all border-border/50 hover:border-primary/20"
    >
      <div className="flex items-center gap-2 mb-3">
        {category && (
          <span className="text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
            {category}
          </span>
        )}
        {level && (
          <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
            • {level}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
        {description}
      </p>
      <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
        <div className="flex items-center gap-4">
           {updatedAt && <span>{formatDate(updatedAt)}</span>}
           {readingTime && (
             <span className="flex items-center gap-1">
               <Clock className="h-3 w-3" />
               {readingTime} min
             </span>
           )}
        </div>
      </div>
    </Link>
  );
}

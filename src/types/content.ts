export type ContentLevel = "beginner" | "intermediate" | "advanced";

export interface BaseFrontmatter {
  title: string;
  description: string;
  category: string;
  tags: string[];
  level: ContentLevel;
  author: string;
  published_at: string;
  updated_at: string;
  reading_time: number;
  is_premium?: boolean;
  featured?: boolean;
  related?: string[];
}

export interface PlaybookFrontmatter extends BaseFrontmatter {
  type: "playbook";
  use_case: string;
  tools: string[];
  output: string[];
}

export interface WorkflowFrontmatter extends BaseFrontmatter {
  type: "workflow";
  tools: string[];
}

export interface ToolFrontmatter extends BaseFrontmatter {
  type: "tool";
  name: string;
  website: string;
  pricing_type: "free" | "freemium" | "paid";
  use_cases: string[];
  alternatives: string[];
}

export interface PromptFrontmatter extends BaseFrontmatter {
  type: "prompt";
  prompt_category: string;
  variables: string[];
}

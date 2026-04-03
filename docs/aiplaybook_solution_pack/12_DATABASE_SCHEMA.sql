CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT,
  plan TEXT DEFAULT 'free',
  created_at TEXT NOT NULL,
  last_active_at TEXT
);

CREATE TABLE subscriptions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  provider TEXT NOT NULL,
  provider_subscription_id TEXT,
  status TEXT NOT NULL,
  plan TEXT NOT NULL,
  current_period_end TEXT,
  created_at TEXT NOT NULL
);

CREATE TABLE digests (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT,
  content_md TEXT NOT NULL,
  access_level TEXT NOT NULL DEFAULT 'free',
  published_at TEXT
);

CREATE TABLE playbooks (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT,
  audience_json TEXT,
  scenarios_json TEXT,
  why_it_matters TEXT,
  content_md TEXT NOT NULL,
  access_level TEXT NOT NULL DEFAULT 'pro',
  published_at TEXT
);

CREATE TABLE templates (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  summary TEXT,
  template_content TEXT NOT NULL,
  access_level TEXT NOT NULL DEFAULT 'pro',
  created_at TEXT NOT NULL
);

CREATE TABLE bookmarks (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  item_type TEXT NOT NULL,
  item_slug TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE tool_runs (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  tool_slug TEXT NOT NULL,
  input_payload_json TEXT NOT NULL,
  output_payload_json TEXT,
  status TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE advisory_leads (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  role TEXT,
  problem_summary TEXT NOT NULL,
  budget_range TEXT,
  created_at TEXT NOT NULL
);

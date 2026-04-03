# 13 API 规格

## Endpoints
### GET /api/content/digest
### GET /api/content/digest/:slug
### GET /api/content/playbooks
### GET /api/content/playbooks/:slug
### GET /api/content/templates
### GET /api/content/templates/:slug

### POST /api/tools/landing-page-generator
request:
{
  "productName": "AIPlaybook",
  "audience": "solo founders",
  "valueProp": "turn AI noise into workflows",
  "painPoints": "too much info, too little action",
  "tone": "clear and premium"
}

### POST /api/tools/content-repurposer
request:
{
  "sourceText": "",
  "platforms": ["x", "linkedin", "xiaohongshu", "email"],
  "tone": "practical",
  "language": "zh-CN"
}

### POST /api/tools/sop-builder
request:
{
  "workflowName": "",
  "goal": "",
  "inputs": "",
  "constraints": "",
  "teamSize": "solo"
}

### POST /api/bookmarks
### DELETE /api/bookmarks/:id
### GET /api/dashboard/me
### GET /api/dashboard/history
### POST /api/advisory-leads
### POST /api/webhooks/stripe

## 权限
- guest: 公开内容 + 工具试用
- free: 少量工具额度
- pro: 全量内容、收藏、历史、完整工具输出

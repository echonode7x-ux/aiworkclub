import { MetadataRoute } from 'next'
import { source } from '@/lib/source'
import { SITE_CONFIG } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages().map((page) => ({
    url: `${SITE_CONFIG.url}${page.url}`,
    lastModified: new Date(page.data.updated_at || new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const routes = ['', '/playbooks', '/workflows', '/prompts', '/tools', '/cases', '/tutorials', '/newsletter', '/pricing'].map(
    (route) => ({
      url: `${SITE_CONFIG.url}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    })
  )

  return [...routes, ...pages]
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://horizonfix.com',
  generateRobotsTxt: true,
  // Exclude internal routes and the ads conversion page (noindexed)
  exclude: ['/admin/*', '/api/*', '/auth/*', '/thank-you', '*opengraph-image*'],
  transform: async (config, path) => {
    // Town and service landing pages are core local-SEO targets
    const isLanding = path.startsWith('/plumber/') || path.startsWith('/services/')
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1 : isLanding ? 0.9 : 0.7,
      lastmod: new Date().toISOString(),
    }
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // AI assistant crawlers — explicitly welcomed for AEO
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
  },
}

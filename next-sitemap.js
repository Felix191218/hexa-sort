// next-sitemap.js
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000', // 如果找不到环境变量，默认使用 localhost
    generateRobotsTxt: true, // 生成 robots.txt 文件
    robotsTxtOptions: {
        policies: [
          // 常规搜索引擎规则
          {
            userAgent: '*',
            allow: '/',
          },
    
          // 专用 AI 爬虫 - 仅允许访问 llms 文件
          {
            userAgent: 'GPTBot',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
          {
            userAgent: 'ChatGPT-User',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
          {
            userAgent: 'OAI-SearchBot',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
          {
            userAgent: 'Claude-Web',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
          {
            userAgent: 'Anthropic-AI',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
          {
            userAgent: 'ClaudeBot',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
          {
            userAgent: 'PerplexityBot',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
          {
            userAgent: 'DeepseekBot',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
          {
            userAgent: 'cohere-ai',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
          {
            userAgent: 'YouBot',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
          {
            userAgent: 'GoogleOther',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
          {
            userAgent: 'DuckAssistBot',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
          {
            userAgent: 'Bytespider',
            disallow: '/',
            allow: ['/llms.txt', '/llms-full.txt'],
          },
        ],
        additionalSitemaps: [],
      },
  }
  
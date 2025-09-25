// next-sitemap.config.js
export default {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hexasortlevel.com/',
  generateRobotsTxt: true,
  
  // 1. 确保只生成一个 sitemap 文件
  sitemapSize: 7000, // 设置大于总页面数的值
  
  // 2. 包含所有页面类型
  additionalPaths: async (config) => {
    const paths = [
      '/', // 首页
      '/privacy',
      '/terms',
      '/blogs',
      '/blogs/hexa-sort-lion-studios-casual-puzzle-leader',
      '/leves',
      '/playonline',
      // 添加其他静态页面路径
    ];
    
    return paths.map(path => ({
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
  
  // 包含动态路由页面
  transform: async (config, path) => {
    // 包含所有页面类型
    return {
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }
  },
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
  
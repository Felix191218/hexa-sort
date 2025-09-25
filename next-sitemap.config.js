// next-sitemap.config.js
export default {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hexasortlevel.com/', // 生产环境的站点 URL
  generateRobotsTxt: true, // 生成 robots.txt 文件
  sitemapSize: 7000, // 每个 sitemap 文件最多 7000 个 URL
  
  // 生成额外的路径（静态和动态）
  additionalPaths: async (config) => {
    const paths = [
      '/', // 首页
      '/privacy',
      '/terms',
      '/playonline',
      '/download',
      // 添加其他静态页面路径
    ];
    
    // 动态博客页面路径（根据你的需求，循环生成动态博客页面）
    const blogSlugs = ['hexa-sort-lion-studios-casual-puzzle-leader', 'another-blog-slug']; // 假设有这些动态 slugs
    blogSlugs.forEach(slug => {
      paths.push(`/blogs/${slug}`);
    });

    return paths.map(path => ({
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }));
  },
  
  // 处理动态路径
  transform: async (config, path) => {
    // 针对动态路径的特殊处理
    if (path.startsWith('/blogs/')) {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    }

    // 对其他静态页面路径的处理
    return {
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
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
  

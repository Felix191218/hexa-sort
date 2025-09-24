// next-sitemap.js
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000', // 如果找不到环境变量，默认使用 localhost
    generateRobotsTxt: true, // 生成 robots.txt 文件
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  }
  
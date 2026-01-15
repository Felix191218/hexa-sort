import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // 添加这一行，开启静态导出
  images: {
    unoptimized: true, // 静态导出模式下必须禁用图片优化，或使用第三方 loader
    domains: ['picsum.photos'],
  },
};

export default nextConfig;
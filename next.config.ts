import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // 你可以在这里进行 webpack 的自定义配置
    // 在这里的配置是 Next.js 内部的 webpack 配置
    return config;
  },
  images: {
    domains: ['picsum.photos'], // 允许 picsum.photos 加载图片
  },
};

export default nextConfig;

import { Metadata } from 'next';
import Hero from "@/components/HeroMagic";
import Levels from "@/components/LevelsMagic";
import Features from "@/components/FeaturesMagic";
import Download from "@/components/DownloadMagic";
import About from "@/components/AboutMagic";
import FAQ from "@/components/FAQMagic";
import WhatIs from "@/components/WhatIs";

// 1. 动态生成元数据
export const metadata: Metadata = {
  // 替换标题，包含关键词
  title: 'Magic Sort: The Best Water Sorting Puzzle Game | Precise Pouring & Alchemy',
  
  // 替换描述，包含关键词
  description: 'Play Magic Sort, the top-rated water sorting puzzle game. Master the art of precise pouring, utilize Shuffle Magic, and brew powerful potions with the Alchemy System. Download or play online now!',
  
  // Canonical URL (替换域名和路径)
  alternates: {
    canonical: 'https://www.hexasortlevel.com/magic-sort', 
  },
  
  // OpenGraph (用于社交媒体分享预览)
  openGraph: {
    title: 'Magic Sort: The Ultimate Water Sorting & Alchemy Challenge',
    description: 'Master Spellbinding Levels, solve color sorting puzzles, and utilize the Shuffle Magic tool. Free to play on iOS, Android, and Web.',
    url: 'https://www.hexasortlevel.com/magic-sort',
    siteName: 'Magic Sort Level Guide & Strategies',
    images: [
      {
        url: '/images/magic-sort/magic-sort-logo.webp', // 确保这个图片路径存在
        width: 1200,
        height: 630,
        alt: 'Magic Sort Water Sorting Puzzle Game Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Magic Sort: Spellbinding Water Sorting Puzzle',
    description: 'Solve the color classification challenge and unlock the Alchemy System. Start your tranquil color feast today!',
    images: ['/images/magic-sort/magic-sort-logo.webp'],
  },
  
  // 机器人指令
  robots: {
    index: true,
    follow: true,
  }
};

// 2. 页面组件
export default function Home() {
  return (
    <>
      <Hero />
      <Levels />
      <Features />
      <WhatIs />
      <Download />
      <About />
      <FAQ />
    </>
  );
}
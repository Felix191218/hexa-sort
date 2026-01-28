// src/app/playonline/page.tsx
import { Metadata } from 'next';
import GameDetail from "@/components/GameDetail";
import Levels from "@/components/Levels";
import Image from 'next/image';
import AdBanner from '@/components/AdBanner';  // 引入 AdBanner 组件


export const metadata: Metadata = {
  title: 'Play Hexa Sort Online - Free Color-Matching Puzzle Game',
  description: 'A relaxing yet challenging color-matching puzzle game with multi-layered hexagonal tiles. Sort and stack tiles to clear the board and progress through hundreds of levels.',
  alternates: {
    canonical: 'https://www.hexasortlevel.com/playonline', // 添加Canonical URL
  },
  openGraph: {
    title: 'Hexa Sort Level Guides & Solutions - Play Online Free',
    description: 'Hexa Sort puzzle game guide with over 110+ level walkthroughs and expert tips.',
    images: ['/hexa-sort-social.jpg'],
    url: 'https://www.yoursite.com/playonline',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hexa Sort Level Guides & Solutions - Play Online Free',
    description: 'Hexa Sort puzzle game guide with over 110+ level walkthroughs and expert tips.',
    images: ['/hexa-sort-twitter.jpg'],
  },
};

// 客户端交互部分需要单独处理
function ClientContent() {
  // 这里可以放置需要客户端交互的代码
  // 但简单的渲染可以直接在服务端组件中进行
  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* 游戏详情组件 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <GameDetail
            title="Play Hexa Sort Online"
            subtitle="A relaxing yet challenging color-matching puzzle game"
            description="Hexa Sort is an innovative mobile puzzle game where players sort and stack multi-layered hexagonal tiles."
            image="/games/stickholeio.png"
            developer="By Byte Blasters"
            iframeSrc="https://play.gamepix.com/hexa-sort-3d/embed?sid=e4515"
            overview={
            <div className="text-gray-700">
              <p className="text-gray-700">
                Hexa Sort is an innovative puzzle game where players stack hexagonal tiles to clear the board. 
                The game features multi-layered tile designs with challenging and strategic gameplay.
              </p>
            </div>
            }
            whatIs={
            <div className="text-gray-700">
              <p className="text-gray-700">
                Hexa Sort is a game where players need to stack hexagonal tiles of the same color to clear them from the board. 
                It&#39;s challenging and requires strategic thinking to advance through hundreds of levels.
              </p>
            </div>
            }
            howToPlay={
              <div className="space-y-4 text-gray-700">
                <p>
                  Drag multi-layered hexagonal tiles onto the board and place them in suitable positions. 
                  Stack tiles of the same color together — once you stack 7 tiles, they will automatically merge and score points.
                </p>
                <p>
                  The goal of each level is to clear a required number of tiles. Players can use special boosters such as harnesses to break tiles.
                </p>
              </div>
            }
          />
        </div>
         {/* 插入广告 */}
         <AdBanner />
        
        
        {/* 关卡选择器 */}
        <Levels />

        {/* 图片渲染 */}
        <div className="flex justify-center mt-8">
          <Image
            src="/hexa-sort.png"
            alt="Hexa Sort Preview"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function HexaSortPage() {
  return <ClientContent />;
}
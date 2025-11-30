// app/magic-sort-levels/page.tsx
import LevelsAll from "@/components/LevelsAll";
import PlayNow from "@/components/PlayNow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Sort Level Guide – Walkthroughs for Spellbinding Levels 1-200",
  description: "Explore complete Magic Sort level guides with walkthroughs, tips, and strategies for Spellbinding Levels 1-200. A helpful resource for players to advance through the game.",
  alternates: {
    canonical: "https://www.magicsortlevel.com/magic-sort-levels", // 更新为正确的 URL
  },
};

export default function LevelsPage() {
  return (
    <div className="min-h-screen bg-[#f0f8f0] py-12"> {/* 添加背景色和内边距 */}
      <div className="max-w-6xl mx-auto px-4">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">
            Magic Sort: Complete Spellbinding Level Guides
          </h1>
          <p className="text-xl text-green-800">
            Master every level with our detailed walkthroughs, precise pouring strategies, and alchemy tips
          </p>
        </div>
        
        {/* 关卡列表组件 */}
        <LevelsAll />
        
        {/* 立即游玩推广 */}
        <div className="mt-16">
          <PlayNow />
        </div>
      </div>
    </div>
  );
}
// app/levels/page.tsx
import LevelsAll from "@/components/LevelsAll";
import PlayNow from "@/components/PlayNow";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hexa Sort Level Guide – Walkthroughs for Levels 1-110",
    description: "Explore complete Hexa Sort level guides with walkthroughs, tips, and strategies for levels 1-110. A helpful resource for players to advance through the game.",
    alternates: {
      canonical: "https://www.hexasortlevel.com/levels", // 具体页面的 URL
    },
  };
  

export default function LevelsPage() {
    return (
      <>
        {/* 这里可以导入 <Levels /> 组件 */}
        <LevelsAll />
        <PlayNow />

      </>
    );
  }
  
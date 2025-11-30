import data from "@/data/magic-levels.json"; // 确保使用正确的 JSON 文件
import LevelDetail from "@/components/LevelDetailMagic"; // 假设这是 LevelDetailMagic.tsx
import Levels from "@/components/LevelsMagic"; // 假设这是 LevelSelector.tsx
import { Metadata } from "next";

// 定义 Level 类型
interface Level {
  id: number;
  title: string;
  videoId: string;
  thumb: string;
}

// 动态生成元数据 (已替换为 Magic Sort 主题)
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // 获取关卡 ID
  const levelId = Number(params.id);
  
  // 假设有一个函数可以安全地获取关卡数据
  const levelData = (data as Level[]).find(l => l.id === levelId);
  
  const titleBase = `Magic Sort: Spellbinding Level ${levelId} Guide`;
  const descriptionBase = `Complete Water Sorting Puzzle walkthrough, Alchemy strategy, and tips for Magic Sort's Spellbinding Level ${levelId}. Master precise pouring and use Shuffle Magic wisely to solve this challenge.`;
  const canonicalUrl = `https://www.hexasortlevel.com/magic-sort-levels/${levelId}`;

  return {
    title: `${titleBase} – Master Precise Pouring & Alchemy`,
    description: descriptionBase,
    
    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },
    
    // OpenGraph (Facebook/LinkedIn Preview)
    openGraph: {
      title: `${titleBase} | Water Sorting Puzzle Solution`,
      description: descriptionBase,
      url: canonicalUrl,
      siteName: 'Magic Sort Level Guide & Strategies',
      images: [
        {
          url: levelData?.thumb || `/magic-sort-logo.webp`,
          width: 1200,
          height: 630,
          alt: `Magic Sort Spellbinding Level ${levelId} Water Sorting Solution`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    
    // Twitter Card Preview
    twitter: {
      card: 'summary_large_image',
      title: `${titleBase} | Alchemy Strategy`,
      description: descriptionBase,
      images: [levelData?.thumb || `/magic-sort-logo.webp`],
    },
    
    // Robots Indexing
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// 生成静态路径参数
export async function generateStaticParams() {
  return (data as Level[]).map((l) => ({ id: String(l.id) }));
}

// 详情页 - 异步组件
export default async function Page({ params }: { params: { id: string } }) {
  // 从 params 中解构 id
  const { id } = params;
  const levelId = Number(id); // 将 id 转换为数字
  const levels = data as Level[];

  const idx = levels.findIndex((l) => l.id === levelId); // 查找当前 level
  const level = idx >= 0 ? levels[idx] : null; // 如果找不到对应关卡返回 null
  
  // 找不到关卡返回错误页面
  if (!level) return <div className="p-8 text-2xl font-bold text-red-600">Magic Sort Level {levelId} not found in the Spell Book.</div>; 

  // 查找前后关卡
  const prev = idx > 0 ? levels[idx - 1] : null;
  const next = idx < levels.length - 1 ? levels[idx + 1] : null;

  // 获取邻近关卡（调整为当前关卡上下 12 个关卡，共 25 个，但需要确保不越界）
  const adjacentStart = Math.max(0, idx - 12);
  const adjacentEnd = Math.min(levels.length, idx + 13); // 13是为了包含当前关卡之后的12个
  
  // 确保 adjacent 数组中不包含当前关卡
  const rawAdjacent = levels.slice(adjacentStart, adjacentEnd);
  const adjacent = rawAdjacent.filter(l => l.id !== levelId);


  return (
    <>
      {/* LevelDetailMagic 组件包含了所有主题和关键词替换 */}
      <LevelDetail level={level} prev={prev} next={next} adjacent={adjacent} />
      {/* LevelsMagic 组件包含了关卡选择器 */}
      <Levels /> 
    </>
  );
}
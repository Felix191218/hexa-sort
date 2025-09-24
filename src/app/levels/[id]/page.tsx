import data from "@/data/levels.json";
import LevelDetail from "@/components/LevelDetail";
import Levels from "@/components/Levels";
import { Metadata } from "next";

// 定义 Level 类型
interface Level {
  id: number;
  title: string;
  videoId: string;
  thumb: string;
}

// 动态生成元数据
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = Number(params.id);
  
  return {
    title: `Hexa Sort Level ${id} Guide – Tips & Strategies`,
    description: `Complete walkthrough and solutions for Hexa Sort level ${id}. Find tips and strategies to master this level and progress through the game.`,
    alternates: {
      canonical: `https://www.hexasortlevel.com/levels/${id}`,
    },
    openGraph: {
      title: `Hexa Sort Level ${id} Guide – Tips & Strategies`,
      description: `Complete walkthrough and solutions for Hexa Sort level ${id}. Find tips and strategies to master this level and progress through the game.`,
      url: `https://www.hexasortlevel.com/levels/${id}`,
      siteName: 'Hexa Sort Level Guide',
      images: [
        {
          url: `https://www.hexasortlevel.com/images/level-${id}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `Hexa Sort Level ${id} Solution`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Hexa Sort Level ${id} Guide – Tips & Strategies`,
      description: `Complete walkthrough and solutions for Hexa Sort level ${id}. Find tips and strategies to master this level and progress through the game.`,
      images: [`https://www.hexasortlevel.com/images/level-${id}-twitter.jpg`],
    },
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

// 详情页
export default function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id); // 将 id 转换为数字
  const levels = data as Level[];

  const idx = levels.findIndex((l) => l.id === id); // 查找当前 level
  const level = idx >= 0 ? levels[idx] : null; // 如果找不到对应关卡返回 null
  if (!level) return <div className="p-8">Level not found.</div>; // 找不到关卡返回错误页面

  // 查找前后关卡
  const prev = idx > 0 ? levels[idx - 1] : null;
  const next = idx < levels.length - 1 ? levels[idx + 1] : null;

  // 获取邻近关卡（调整为上下 12 个关卡）
  const start = Math.max(0, idx - 12);
  const adjacent = levels.slice(start, start + 24); // 获取邻近 24 个关卡

  return (
    <>
      <LevelDetail level={level} prev={prev} next={next} adjacent={adjacent} />
      {/* 关卡选择器 */}
      <Levels />
    </>
  );
}
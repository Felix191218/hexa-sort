"use client"; // 添加这行，将整个组件标记为客户端组件

import Link from "next/link";
import React from 'react';

// ShareButtons 组件
const ShareButtons = ({ url, text }: { url: string, text: string }) => {
  const handleShare = () => {
    alert(`Share link for: ${text}\nURL: ${url}`);
  };
  
  return (
    <button 
      onClick={handleShare} 
      className="flex items-center px-4 py-2 bg-purple-100 rounded-lg text-purple-700 hover:bg-purple-200"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.88 12.062 9.683 11 11 11c1.317 0 2.12 1.062 2.316 2.342l1.984 2.342c.196 1.28.999 2.342 2.316 2.342 1.317 0 2.12-.918 2.316-2.342l1.984-2.342c.196-1.28.999-2.342 2.316-2.342 1.317 0 2.12 1.062 2.316 2.342" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9l-6-6-6 6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v12" />
      </svg>
      Share Spell
    </button>
  );
};

// 定义 Level 类型
interface Level {
  id: number;
  title: string;
  videoId: string;
  thumb: string;
}

// PrevNext Component
function PrevNext({ currentLevel, levels }: { currentLevel: number, levels: Level[] }) {
  const prevLevel = currentLevel > 1 ? levels.find(level => level.id === currentLevel - 1) : null;
  const nextLevel = currentLevel < 1000 ? levels.find(level => level.id === currentLevel + 1) : null;

  const Box = ({ item, label }: { item: Level | null; label: string }) => {
    if (!item) return null;
    return (
      <Link href={`/magic-sort-levels/${item.id}`} className="block rounded-xl border border-purple-300 bg-white p-4 hover:shadow-xl transition-shadow">
        <div className="text-xs text-green-700 mb-2">{label}</div>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">{item.id}</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-purple-700 line-clamp-1">Spellbinding Level {item.id}</div>
            <div className="text-xs text-green-800 mt-1">{item.title}</div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="space-y-4">
      {prevLevel && <Box item={prevLevel} label="Previous Spell (Level)" />}
      {nextLevel && <Box item={nextLevel} label="Next Challenge (Level)" />}
    </div>
  );
}

// AdjacentGrid Component
function AdjacentGrid({ currentLevel, levels }: { currentLevel: number, levels: Level[] }) {
  const adjacentLevels = levels.filter(l => l.id !== currentLevel);

  return (
    <div className="grid grid-cols-4 gap-3">
      {adjacentLevels.slice(0, 12).map((level) => (
        <Link
          key={level.id}
          href={`/magic-sort-levels/${level.id}`}
          className={`flex items-center justify-center h-12 rounded-lg border-2 text-sm font-medium transition-all shadow-md ${
            level.id === currentLevel
              ? "bg-purple-100 border-purple-600 text-purple-800 shadow-inner"
              : "bg-white border-green-300 text-green-800 hover:bg-green-50"
          }`}
        >
          {level.id}
        </Link>
      ))}
    </div>
  );
}

// 组件的 Props 类型定义
interface LevelDetailProps {
  level: Level;
  prev: Level | null;
  next: Level | null;
  adjacent: Level[]; 
}

const LevelDetail = ({ level, prev, next, adjacent }: LevelDetailProps) => {
  const youtube = `https://www.youtube.com/embed/${level.videoId}`;
  const pageUrl = `https://your-domain.com/levels/${level.id}`;
  const currentLevel = level.id;

  // 处理下载按钮点击事件
  const handleDownload = () => {
    // 这里添加实际的下载逻辑
    alert(`Download solution for level ${level.id}`);
  };

  return (
    <div className="min-h-screen bg-[#f0f8f0]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 面包屑导航 */}
        <div className="mb-6 text-sm text-green-700">
          <Link href="/">Home</Link> &gt; <Link href="/levels">Spellbinding Levels</Link> &gt; Level {level.id}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          {/* 主内容区域 */}
          <div className="bg-white rounded-xl shadow-2xl p-6 border border-purple-200">
            <h1 className="text-3xl font-bold text-purple-700 mb-2">Magic Sort: Spellbinding Level {level.id} Guide</h1>
            
            {/* 视频区域 */}
            <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={youtube}
                width="100%"
                height="400"
                className="w-full border-0"
                title={`Magic Sort Level ${level.id} - Precise Pouring Strategy & No Shuffle Magic`}
                allow="autoplay; fullscreen"
              />
            </div>


            {/* 关卡描述 */}
            <div className="bg-purple-50 rounded-xl p-4 mb-6 border border-purple-300">
              <h2 className="text-lg font-semibold text-purple-700 mb-2">Level {level.id} Solution: Mastering Precise Pouring & Bottlenecks</h2>
              <p className="text-green-800" dangerouslySetInnerHTML={{ __html: 
                "This walkthrough demonstrates the optimal <strong>Water Sorting Puzzle</strong> strategy to solve Level " + level.id + " without relying on <strong>Shuffle Magic</strong> or expensive <strong>potions</strong>. Focus on utilizing <strong>empty bottles</strong> efficiently to prevent deadlocks."
              }}></p>
            </div>

            {/* 相邻关卡导航（移动端） */}
            <div className="lg:hidden mb-6">
              <PrevNext currentLevel={currentLevel} levels={adjacent} /> 
            </div>
          </div>

          {/* 侧边栏 */}
          <aside className="space-y-6">
            {/* 相邻关卡导航（桌面端） */}
            <div className="hidden lg:block">
              <PrevNext currentLevel={currentLevel} levels={adjacent} />
            </div>
            
            {/* 相邻关卡网格 */}
            <div className="bg-white rounded-xl shadow-lg p-4 border border-green-300">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-purple-700">Adjacent Magic Sort Levels</h2>
                <Link href="/levels" className="text-sm text-purple-700 hover:underline">
                  All Challenges &rarr;
                </Link>
              </div>
              <AdjacentGrid currentLevel={currentLevel} levels={adjacent} />
            </div>

            {/* 直接玩游戏卡片 */}
            <div className="bg-purple-700 rounded-xl shadow-xl p-5 text-white">
              <div className="flex items-start mb-4">
                <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Play Magic Sort Instantly</h3>
                  <p className="text-sm text-purple-100 mb-3" dangerouslySetInnerHTML={{ __html: 
                    "Immerse in the <strong>Tranquil Color Feast</strong> now!"
                  }}></p>
                  <Link href="/play" className="inline-block bg-green-500 text-purple-900 px-4 py-2 rounded text-sm font-bold hover:bg-green-600 transition-colors">
                    Start Pouring
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default LevelDetail;
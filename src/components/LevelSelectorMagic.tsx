"use client";
import React, { useState, useEffect } from 'react';
import LevelCard from './LevelCardMagic'; // 假设这是您前面提供的 LevelCard.tsx
import { useRouter } from "next/navigation"; 

// 导入 JSON 数据
// NOTE: 假设 levels.json 路径正确且数据结构匹配 LevelData
import levelsJson from '@/data/magic-levels.json'; 

type LevelRange = {
  start: number;
  end: number;
  label: string;
};

type LevelData = {
  id: number;
  title: string;
  videoId: string;
  thumb: string;
};

const generateLevelRanges = (): LevelRange[] => {
  const ranges: LevelRange[] = [];
  
  // 划分关卡范围，保持原有的分段逻辑
  const segments = [
    { start: 1, end: 30 },
    { start: 31, end: 71 },
    { start: 72, end: 111 },
    { start: 112, end: 141 },
    // 可以继续添加更多范围
    { start: 142, end: 200 }
  ];
  
  segments.forEach(segment => {
    ranges.push({
      start: segment.start,
      end: segment.end,
      label: `Spellbinding Levels ${segment.start}-${segment.end}` // 替换标签
    });
  });
  
  return ranges;
};

const createLevelsMap = (): { [key: number]: LevelData } => {
  const map: { [key: number]: LevelData } = {};
  
  levelsJson.forEach(data => {
    map[data.id] = data;
  });
  
  return map;
};

export default function LevelSelector() {
  const router = useRouter(); 
  // 默认选择范围，确保它是一个有效的范围
  const defaultRange = generateLevelRanges()[1] || { start: 1, end: 30, label: 'Spellbinding Levels 1-30' }; 
  const [selectedRange, setSelectedRange] = useState<LevelRange>(defaultRange);
  const [levelsMap] = useState<{ [key: number]: LevelData }>(createLevelsMap());
  const [loading, setLoading] = useState<boolean>(false);
  
  const levelRanges = generateLevelRanges();
  
  const handleRangeSelect = async (range: LevelRange) => {
    setSelectedRange(range);
    setLoading(true);
    
    // 模拟加载延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setLoading(false);
  };
  
  // 跳转到关卡详情页
  const handleLevelSelect = (level: number) => {
    // 关卡跳转路径通常是 /levels/[id]
    router.push(`/magic-sort-levels/${level}`); 
  };
  
  useEffect(() => {
    handleRangeSelect(selectedRange);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#f0f8f0] p-6"> {/* 调整背景色 */}
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-purple-700 mb-4"> {/* 调整主题色 */}
            Magic Sort Level Guides & Alchemy Strategies
          </h2>
          <p className="text-xl text-green-800" dangerouslySetInnerHTML={{ __html: 
            "Find <strong>Magic Sort</strong> <strong>Water Sorting Puzzle</strong> solutions, <strong>precise pouring</strong> tips, and <strong>Shuffle Magic</strong> strategies for every <strong>Spellbinding Level</strong>."
          }}></p>
        </div>
        
        {/* 搜索框 */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search Spellbinding Levels by ID, Potion or Strategy..." // 替换搜索提示
              className="w-full p-4 pl-12 border border-purple-300 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-500 text-lg text-purple-800" // 调整颜色和阴影
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* 调整图标颜色 */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* 分段选择器 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-purple-700 mb-4 text-center">Select Spellbinding Level Range</h3> {/* 调整标题和主题色 */}
          <div className="flex flex-wrap justify-center gap-3">
            {levelRanges.map((range, index) => (
              <button
                key={index}
                onClick={() => handleRangeSelect(range)}
                className={`px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 shadow-md ${
                  selectedRange.start === range.start
                    ? 'bg-purple-700 text-white shadow-xl border-2 border-green-400' // 选中状态
                    : 'bg-white text-purple-700 border border-purple-300 hover:bg-purple-50' // 未选中状态
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* 关卡网格 */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-700"></div> {/* 调整加载颜色 */}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {Array.from({ length: selectedRange.end - selectedRange.start + 1 }, (_, i) => {
              const level = selectedRange.start + i;
              const levelData = levelsMap[level];
              
              if (levelData) {
                return (
                  <LevelCard
                    key={level}
                    level={level}
                    title={levelData.title}
                    thumbnail={levelData.thumb}
                    onSelect={handleLevelSelect} 
                  />
                );
              }
              
              // 占位符数据也进行主题替换
              return (
                <LevelCard
                  key={level}
                  level={level}
                  title={`Magic Sort Level ${level} Water Sorting Solution`} // 替换占位符标题
                  thumbnail={`/images/magic-sort/magic-sort-level-${level}.webp`} // 替换占位符路径
                  onSelect={handleLevelSelect} 
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
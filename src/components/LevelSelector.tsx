"use client";
import React, { useState, useEffect } from 'react';
import LevelCard from './LevelCard';
import { useRouter } from "next/navigation"; // 添加路由功能

// 导入 JSON 数据
import levelsJson from '@/data/levels.json';

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
  
  const segments = [
    { start: 1, end: 30 },
    { start: 31, end: 71 },
    { start: 72, end: 111 },
    { start: 112, end: 141 },
  ];
  
  segments.forEach(segment => {
    ranges.push({
      start: segment.start,
      end: segment.end,
      label: `Level ${segment.start}-${segment.end}`
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
  const router = useRouter(); // 使用路由
  const [selectedRange, setSelectedRange] = useState<LevelRange>({ start: 32, end: 71, label: 'Level 32-71' });
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
  
  // 修改为跳转到关卡详情页
  const handleLevelSelect = (level: number) => {
    router.push(`/levels/${level}`);
  };
  
  useEffect(() => {
    handleRangeSelect(selectedRange);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#f0f4f8] p-6">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Hexa Sort Level Cheats & Solutions
          </h2>
          <p className="text-xl text-amber-700">
            Find Hexa Sort Level walkthroughs, tips and strategies for each level
          </p>
        </div>
        
        {/* 搜索框 */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search levels by ID or title..."
              className="w-full p-4 pl-12 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* 分段选择器 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-blue-600 mb-4 text极center">Select Level Range</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {levelRanges.map((range, index) => (
              <button
                key={index}
                onClick={() => handleRangeSelect(range)}
                className={`px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  selectedRange.start === range.start
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
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
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
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
                    onSelect={handleLevelSelect} // 使用修改后的处理函数
                  />
                );
              }
              
              return (
                <LevelCard
                  key={level}
                  level={level}
                  title={`Hexa Sort Level ${level} Walkthrough`}
                  thumbnail={`/images/thumbnails/hxea-sort-level-${level}.webp`}
                  onSelect={handleLevelSelect} // 使用修改后的处理函数
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
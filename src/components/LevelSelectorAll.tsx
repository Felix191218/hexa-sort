"use client";
import React, { useState, useEffect } from 'react';
import LevelCard from './LevelCard';
import { useRouter } from "next/navigation";


type LevelRange = {
  start: number;
  end: number;
  label: string;
};

const generateLevelRanges = (): LevelRange[] => {
  const ranges: LevelRange[] = [];
  const maxLevel = 728;
  
  // 添加ALL选项
  ranges.push({
    start: 1,
    end: maxLevel,
    label: "ALL Levels"
  });
  
  // 根据第二张图片中的分段方式
  const segments = [
    { start: 1, end: 31 },
    { start: 32, end: 71 },
    { start: 72, end: 111 },
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

const fetchYouTubeVideos = async (level: number): Promise<{ thumbnail: string; title: string }> => {
    const thumbnail = `/images/thumbnails/hxea-sort-level-${level}.webp`; // 使用本地图片  
    return {
    thumbnail: thumbnail,
    title: `Hexa Sort Level ${level} Walkthrough`
  };
};

export default function LevelSelector() {
  const router = useRouter(); // 👈 新增
  const [selectedRange, setSelectedRange] = useState<LevelRange>({ start: 1, end: 728, label: 'ALL Levels' });
  const [levelsData, setLevelsData] = useState<{ [key: number]: { thumbnail: string; title: string } }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  const levelRanges = generateLevelRanges();
  
  const handleRangeSelect = async (range: LevelRange) => {
    setSelectedRange(range);
    setLoading(true);
    
    const newLevelsData: { [key: number]: { thumbnail: string; title: string } } = {};
    
    // 对于ALL选项，只加载前100个关卡以提高性能
    const levelsToLoad = range.label === "ALL Levels" 
      ? Array.from({ length: 100 }, (_, i) => i + 1)
      : Array.from({ length: range.end - range.start + 1 }, (_, i) => range.start + i);
    
    for (const level of levelsToLoad) {
      newLevelsData[level] = await fetchYouTubeVideos(level);
    }
    
    setLevelsData(newLevelsData);
    setLoading(false);
  };
  
  const handleLevelSelect = (level: number) => {
    router.push(`/levels/${level}`);
  };
  
  // 搜索时如果输入的是准确关卡号，也可直接跳
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      const levelNum = parseInt(searchTerm);
      if (!isNaN(levelNum) && levelNum >= 1 && levelNum <= 728) {
        router.push(`/levels/${levelNum}`); // 👈 直接跳到详情
        return;
      }
      // 不是纯数字则按标题过滤
      const range = levelRanges.find(r => levelNum >= r.start && levelNum <= r.end);
      if (range) handleRangeSelect(range);
    }
  };
  
  useEffect(() => {
    handleRangeSelect(selectedRange);
  }, []);
  
  // 获取当前显示的所有关卡
  const getLevelsToDisplay = () => {
    if (selectedRange.label === "ALL Levels") {
      // 对于ALL选项，只显示前100个关卡
      return Array.from({ length: 100 }, (_, i) => i + 1);
    } else {
      return Array.from({ length: selectedRange.end - selectedRange.start + 1 }, (_, i) => selectedRange.start + i);
    }
  };
  
  // 过滤搜索结果
  const filteredLevels = getLevelsToDisplay().filter(level => {
    if (!searchTerm) return true;
    return level.toString().includes(searchTerm) || 
           levelsData[level]?.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  return (
    <div className="min-h-screen bg-[#f0f4f8] p-6">
      <div className="max-w-6xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Hexa Sort Game Level Guide, Complete Walkthrough for Levels 1-120
          </h1>
          <p className="text-amber-700 text-lg">
            Complete Walkthrough for 120 Levels | Strategy Tips | Hole-Filling Solutions
          </p>
          
        </div>
        
        {/* 搜索框 */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search levels by ID or title..."
              className="w-full p-4 pl-12 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 极 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button 
              type="submit"
              className="absolute inset-y-0 right-0 px-6 bg-blue-600 text-white font-medium rounded-r-xl hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>
        
        {/* 分段选择器 */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">Select Level Range</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {levelRanges.map((range, index) => (
              <button
                key={index}
                onClick={() => handleRangeSelect(range)}
                className={`px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  selectedRange.start === range.start && selectedRange.end === range.end
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* 当前范围信息 */}
        <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-100 text-center">
          <p className="text-blue-600 font-medium">
            Showing {filteredLevels.length} levels: {selectedRange.label}
          </p>
        </div>
        
        {/* 关卡网格 */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          </div>
        ) : filteredLevels.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-amber-700 text-xl">No levels found matching your search</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {filteredLevels.map(level => {
              const data = levelsData[level] || { 
                thumbnail: `https://picsum.photos/200/120?random=${level}`, 
                title: `Level ${level}` 
              };
              
              return (
                <LevelCard
                  key={level}
                  level={level}
                  title={data.title}
                  thumbnail={data.thumbnail}
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
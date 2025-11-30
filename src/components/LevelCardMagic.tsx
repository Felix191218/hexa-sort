import React from 'react';
import Image from 'next/image'; // 导入 next/image 组件


type LevelCardProps = {
  level: number;
  title: string;
  thumbnail: string;
  onSelect: (level: number) => void;
};

export default function LevelCard({ level, title, thumbnail, onSelect }: LevelCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300 border border-purple-200 cursor-pointer transform hover:-translate-y-1" // 调整颜色和添加魔幻的提升效果
      onClick={() => onSelect(level)}
    >
      <Image 
        src={thumbnail} // 使用 next/image 的 src 属性
        alt={`Magic Sort Level ${level} Water Sorting Puzzle Solution`} // 替换 Alt 文本，包含关键词
        className="rounded-lg mb-3 w-full h-32 object-cover border border-green-300" // 增加边框以突出色彩盛宴
        width={400} // 根据需要指定宽度
        height={128} // 根据需要指定高度
      />
      <p className="font-bold text-purple-700 text-center text-lg">Spellbinding Level {level}</p> {/* 调整标题和主题色 */}
      <p className="text-green-800 text-sm text-center mt-1">{title}</p> {/* 调整描述和主题色 */}
    </div>
  );
}
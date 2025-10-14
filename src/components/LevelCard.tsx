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
      className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer"
      onClick={() => onSelect(level)}
    >
      <Image 
        src={thumbnail} // 使用 next/image 的 src 属性
        alt={`Hexa Sort Level ${level} Solution Walkthrough`} 
        className="rounded-lg mb-3 w-full h-32 object-cover" 
        width={400} // 根据需要指定宽度
        height={128} // 根据需要指定高度
      />
      <p className="font-bold text-blue-600 text-center">Level {level}</p>
      <p className="text-amber-700 text-sm text-center mt-1">{title}</p>
    </div>
  );
}

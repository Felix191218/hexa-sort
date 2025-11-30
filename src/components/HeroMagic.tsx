"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import React from "react"; // 导入 React

export default function Hero() {
  const router = useRouter();

  // 处理搜索表单提交
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const levelNumber = formData.get("levelNumber");
    
    if (levelNumber) {
      // 跳转到对应关卡指南页面
      router.push(`/levels/${levelNumber}`);
    }
  };

  // 处理下载游戏
  const handleDownload = () => {
    // 这里可以替换为实际的下载链接
    window.open("/download", "_blank");
  };

  // 处理立即玩游戏
  const handlePlayNow = (e: React.MouseEvent) => {
    e.preventDefault(); // 阻止默认行为
    router.push("/playonline");
  };

  return (
    <section className="bg-[#f0f8f0] py-16"> {/* 调整背景色为更清新/魔幻的颜色 */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* 左侧文字区域 */}
        <div>
          {/* Game Guides Collection 标签 */}
          <div className="inline-block bg-purple-700 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
            Magic Sort Game Guide
          </div>
          
          <h1 className="text-4xl font-bold text-purple-700 mb-4">
            Magic Sort: All Spellbinding Level Guides
          </h1>
          <p className="text-green-800 text-lg mb-6"> {/* 调整文字颜色 */}
            Uncover the secrets of precise pouring and strategic magic! Explore detailed solutions, tips, and potion-brewing strategies for every level.
          </p>
          
          {/* 统计信息 */}
          <div className="flex gap-6 mb-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-lg mr-2">
                {/* 卷轴/魔药图标 */}
                <svg className="w-5 h-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-purple-700">100+</div>
                <div className="text-sm text-green-800">Spellbinding Levels</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-lg mr-2">
                {/* 魔法工具/魔药瓶图标 */}
                <svg className="w-5 h-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-purple-700">Unlockable</div>
                <div className="text-sm text-green-800">Potions & Magic Tools</div>
              </div>
            </div>
          </div>

          {/* 搜索框 */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-purple-700 mb-2">Quick Level Search</h3>
            <form onSubmit={handleSearch} className="flex space-x-2">
              <input
                type="number"
                name="levelNumber"
                min="1"
                placeholder="Enter level number (1+)" // 调整提示文本
                className="border border-gray-300 rounded-lg px-4 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                required
              />
              <button
                type="submit"
                className="bg-purple-700 text-white px-5 py-3 rounded-lg hover:bg-purple-800 font-medium shadow-md transition-colors"
              >
                Search Guide
              </button>
            </form>
          </div>

          {/* 按钮区 */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link 
              href="/levels" 
              className="bg-purple-700 text-white px-5 py-2.5 rounded-lg hover:bg-purple-800 font-medium flex items-center shadow-md transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Browse All Level Guides
            </Link>
            <button 
              onClick={handleDownload}
              className="bg-white text-purple-700 px-5 py-2.5 rounded-lg hover:bg-gray-100 font-medium flex items-center shadow-sm transition-colors border border-gray-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Magic Sort
            </button>
          </div>

          {/* 浏览器游戏提示 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-700 rounded-full p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-purple-700 font-medium text-lg mb-1">Immerse in the Tranquil Color Feast Now</p>
                <p className="text-green-800 text-sm mb-3">Experience the dual fun of relaxation and mental challenge directly in your browser.</p>
                <button 
                  onClick={handlePlayNow}
                  className="bg-purple-700 text-white px-4 py-2 rounded text-sm font-medium hover:bg-purple-800 transition-colors"
                >
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧图片区域 */}
        <div className="flex justify-center">
          <Image
            src="/images/magic-sort/magic-sort-logo.webp" // 替换图片路径
            alt="Magic Sort Game Preview" // 替换 Alt 文本
            className="rounded-lg shadow-lg max-h-[500px] w-full object-cover"
            width={500} // Specify the width
            height={500} // Specify the height
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from 'next/image';


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
    <section className="bg-[#f0f4f8] py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* 左侧文字区域 */}
        <div>
          {/* Game Guides Collection 标签 */}
          <div className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
            Game Guides Collection
          </div>
          
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            View All Hexa Sort Level Guides
          </h1>
          <p className="text-amber-700 text-lg mb-6">
            Explore detailed walkthroughs, tips, and strategies for each level. 
            Enter a level number to jump directly to the corresponding guide.
          </p>
          
          {/* 统计信息 */}
          <div className="flex gap-6 mb-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-blue-600">100+</div>
                <div className="text-sm text-amber-700">Level Guides</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-blue-600">100+</div>
                <div className="text-sm text-amber-700">Video Tutorials</div>
              </div>
            </div>
          </div>

          {/* 搜索框 */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-blue-600 mb-2">Quick Level Search</h3>
            <form onSubmit={handleSearch} className="flex space-x-2">
              <input
                type="number"
                name="levelNumber"
                min="1"
                max="110"
                placeholder="Enter level number (1-110)"
                className="border border-gray-300 rounded-lg px-4 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 font-medium shadow-md transition-colors"
              >
                Search Guide
              </button>
            </form>
          </div>

          {/* 按钮区 */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Link 
              href="/levels" 
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 font-medium flex items-center shadow-md transition-colors"
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
              className="bg-white text-blue-600 px-5 py-2.5 rounded-lg hover:bg-gray-100 font-medium flex items-center shadow-sm transition-colors border border-gray-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Game
            </button>
          </div>

          {/* 浏览器游戏提示 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-blue-600 font-medium text-lg mb-1">Want to play games directly?</p>
                <p className="text-amber-700 text-sm mb-3">Experience games directly in your browser</p>
                <button 
                  onClick={handlePlayNow}
                  className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
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
            src="/hexa-sort.png"
            alt="Hexa Sort Preview"
            className="rounded-lg shadow-lg max-h-[500px] w-full object-cover"
            width={500} // Specify the width
            height={500} // Specify the height
          />
        </div>
      </div>
    </section>
  );
}
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PlayNow() {
  const router = useRouter();

  const handlePlayNow = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/playonline");
  };

  return (
    <section className="bg-[#f0f4f8] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
          {/* 左边：图标+文字 */}
          <div className="flex items-center gap-5">
            {/* 游戏手柄图标 */}
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8h6m-3-3v6m9 3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
    
            {/* 文本 */}
            <div>
              <h3 className="text-xl font-bold text-blue-600">
                Want to play games directly?
              </h3>
              <p className="text-amber-700 mt-2">
                Experience Hexa Sort and more games directly in your browser, no download required.
              </p>
            </div>
          </div>
    
          {/* 右边：按钮 */}
          <button
            onClick={handlePlayNow}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-3 shadow-md transition-colors min-w-[180px] justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3l14 9-14 9V3z"
              />
            </svg>
            <span className="text-lg">Play Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}
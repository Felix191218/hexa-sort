export default function Download() {
    return (
      <section className="bg-[#f0f4f8] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* 标题区域 */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Download Hexa Sort</h2>
            <p className="text-xl text-amber-700">
              A Simple Strategic Puzzle Game Loved by Millions Worldwide
            </p>
          </div>
  
          {/* 下载按钮区域 */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            {/* Google Play 按钮 */}
            <a
              href="https://play.google.com/store/apps/details?id=hexa.sort.merge.stack.puzzle"
              className="bg-white text-gray-800 px-8 py-5 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-md flex items-center justify-start gap-4 w-full sm:w-auto max-w-sm border border-gray-200"
            >
              <div className="bg-blue-600 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12L3 18C3 19.6569 4.34315 21 6 21H14M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 3C7.02944 3 3 7.02944 3 12M12 3C14.4853 3 16.7353 4.00736 18.364 5.63604M12 3V21M12 21C14.4853 21 16.7353 19.9926 18.364 18.364" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider">GET IT ON</div>
                <div className="font-bold text-xl text-blue-800">Google Play</div>
              </div>
            </a>
            
            {/* App Store 按钮 */}
            <a
              href="https://apps.apple.com/us/app/hexa-sort/id6463127238"
              className="bg-white text-gray-800 px-8 py-5 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-md flex items-center justify-start gap-4 w-full sm:w-auto max-w-sm border border-gray-200"
            >
              <div className="bg-blue-600 rounded-lg p-3 flex-shrink-0">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider">Download on</div>
                <div className="font-bold text-xl text-blue-800">App Store</div>
              </div>
            </a>
          </div>
          
          {/* 其他平台提示 */}
          <div className="bg-white p-5 rounded-xl max-w-md mx-auto border border-gray-200 shadow-sm">
            <p className="text-amber-700 text-sm font-medium">
              Also available on PC and Mac via Steam and Epic Games Store
            </p>
          </div>
        </div>
      </section>
    );
  }
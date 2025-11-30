export default function Download() {
    return (
      <section className="bg-[#f0f8f0] py-16"> {/* 调整背景色 */}
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* 标题区域 */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">Download Magic Sort: Your Mystical Water Sorting Adventure</h2>
            <p className="text-xl text-green-800" dangerouslySetInnerHTML={{ __html: 
              "Start your <strong>Tranquil Color Feast</strong> and master <strong>precise pouring</strong> today."
            }}></p>
          </div>
  
          {/* 下载按钮区域 */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            {/* Google Play 按钮 */}
            <a
              href="https://play.google.com/store/apps/details?id=com.grandgames.magicsort&hl=en" // 假设链接已更新
              className="bg-white text-gray-800 px-8 py-5 rounded-xl hover:bg-purple-50 transition-all duration-300 shadow-xl flex items-center justify-start gap-4 w-full sm:w-auto max-w-sm border border-purple-200"
            >
              <div className="bg-purple-700 rounded-lg p-3 flex-shrink-0"> {/* 调整主题色 */}
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Google Play 符号 (使用一个通用图标) */}
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 16l-4-4 4-4v8zm4 0v-8l4 4-4 4z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider" dangerouslySetInnerHTML={{ __html: 
                  "GET THE <strong>MAGIC SORT</strong> APP ON"
                }}></div>
                <div className="font-bold text-xl text-purple-800">Google Play</div> {/* 调整主题色 */}
              </div>
            </a>
            
            {/* App Store 按钮 */}
            <a
              href="https://apps.apple.com/us/app/magic-sort/id6499209744" // 假设链接已更新
              className="bg-white text-gray-800 px-8 py-5 rounded-xl hover:bg-purple-50 transition-all duration-300 shadow-xl flex items-center justify-start gap-4 w-full sm:w-auto max-w-sm border border-purple-200"
            >
              <div className="bg-purple-700 rounded-lg p-3 flex-shrink-0"> {/* 调整主题色 */}
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {/* Apple 符号 (使用一个通用图标) */}
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                  <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider" dangerouslySetInnerHTML={{ __html: 
                  "Download the <strong>Water Sorting Puzzle</strong> on"
                }}></div>
                <div className="font-bold text-xl text-purple-800">App Store</div> {/* 调整主题色 */}
              </div>
            </a>
          </div>
          
          {/* 其他平台提示/在线玩提示 */}
          <div className="bg-white p-5 rounded-xl max-w-lg mx-auto border border-purple-300 shadow-xl"> {/* 调整颜色和大小 */}
            <p className="text-purple-700 text-lg font-bold mb-2" dangerouslySetInnerHTML={{ __html: 
              "Want to start the <strong>Mystical Adventure</strong> instantly?"
            }}></p>
            <p className="text-green-800 text-sm mb-4" dangerouslySetInnerHTML={{ __html: 
              "<strong>Magic Sort</strong> is also available to play directly in your browser with full cross-device progression support."
            }}></p>
            <a
                href="/playonline"
                className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 font-medium transition-colors shadow-md inline-flex items-center"
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Play Magic Sort Online Now
            </a>
          </div>
        </div>
      </section>
    );
}
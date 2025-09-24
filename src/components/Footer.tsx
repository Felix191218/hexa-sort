import Link from 'next/link';  // <-- Add this import at the top

export default function Footer() {
    return (
      <footer className="bg-[#f0f4f8] py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo和描述 */}
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 rounded-lg p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-600">Hexa Sort</h3>
              </div>
              <p className="text-amber-700">
                    A fun and immersive puzzle game, offering strategic challenges that captivate players worldwide.
              </p>
            </div>
            
            {/* 链接 */}
            <div>
  <ul className="space-y-3">
    <li><Link href="/download" className="text-amber-700 hover:text-blue-600 transition-colors">Download</Link></li>
    <li><Link href="/levels" className="text-amber-700 hover:text-blue-600 transition-colors">Levels</Link></li>
    <li><Link href="/playonline" className="text-amber-700 hover:text-blue-600 transition-colors">Play Online</Link></li>      
    <li><Link href="/privacy" className="text-amber-700 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
    <li><Link href="/terms" className="text-amber-700 hover:text-blue-600 transition-colors">Terms of Service</Link></li>
  </ul>
</div>

            
            {/* 游戏链接 */}
            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-4">Games</h3>
              <ul className="space-y-3">
                <li><a href="/playonline" className="text-amber-700 hover:text-blue-600 transition-colors">Hexa Sort</a></li>
              </ul>
            </div>
            
            {/* 联系方式 */}
            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-4">Contact Us</h3>
              <p className="text-amber-700 mb-3">support@causalzap.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* 版权信息 */}
          <div className="border-t border-gray-300 mt-10 pt-6 text-center">
            <p className="text-amber-700">
              © 2025 Hexa Sort. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
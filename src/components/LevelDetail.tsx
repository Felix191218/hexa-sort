import Link from "next/link";
import ShareButtons from "./ShareButtons";

// 定义 Level 类型
interface Level {
  id: number;
  title: string;
  videoId: string;
  thumb: string;
}

// PrevNext 组件
function PrevNext({ currentLevel, levels }: { currentLevel: number, levels: Level[] }) {
  const prevLevel = currentLevel > 1 ? levels.find(level => level.id === currentLevel - 1) : null;
  const nextLevel = currentLevel < 728 ? levels.find(level => level.id === currentLevel + 1) : null;

  const Box = ({ item, label }: { item: Level | null; label: string }) => (
    <Link href={`/levels/${item?.id}`} className="block rounded-xl border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow">
      <div className="text-xs text-gray-500 mb-2">{label}</div>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">{item?.id}</span>
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-800 line-clamp-1">Level {item?.id}</div>
          <div className="text-xs text-gray-500 mt-1">{item?.title}</div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="space-y-4">
      {prevLevel && <Box item={prevLevel} label="Previous Level" />}
      {nextLevel && <Box item={nextLevel} label="Next Level" />}
    </div>
  );
}

// AdjacentGrid 组件
function AdjacentGrid({ currentLevel, levels }: { currentLevel: number, levels: Level[] }) {
  const adjacentLevels = generateAdjacentLevels(currentLevel, levels, 12);

  return (
    <div className="grid grid-cols-4 gap-3">
      {adjacentLevels.map((level) => (
        <Link
          key={level.id}
          href={`/levels/${level.id}`}
          className={`flex items-center justify-center h-12 rounded-lg border-2 text-sm font-medium transition-all ${
            level.id === currentLevel
              ? "bg-blue-100 border-blue-500 text-blue-700 shadow-sm"
              : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          {level.id}
        </Link>
      ))}
    </div>
  );
}

// 生成相邻关卡数据
function generateAdjacentLevels(currentLevel: number, levels: Level[], count: number = 15) {
  const levelsSet = new Set<number>(); // 使用 Set 来确保唯一性
  const maxLevel = levels.length;

  // 随机生成关卡号，确保不重复且在有效范围内
  while (levelsSet.size < count) {
    const randomLevel = Math.floor(Math.random() * maxLevel);
    if (levels[randomLevel].id !== currentLevel) { // 确保不选中当前关卡
      levelsSet.add(levels[randomLevel].id);
    }
  }

  // 将 Set 转换为数组并生成相应的标题
  return Array.from(levelsSet).map((id) => ({
    id,
    title: `Hexa Sort Level ${id} Solution`,
  }));
}

// 组件的 Props 类型定义，增加 prev, next 和 adjacent
interface LevelDetailProps {
  level: Level;
  prev: Level | null;
  next: Level | null;
  adjacent: Level[];
}

const LevelDetail = ({ level, prev, next, adjacent }: LevelDetailProps) => {
  const youtube = `https://www.youtube.com/embed/${level.videoId}`;
  const pageUrl = `https://your-domain.com/levels/${level.id}`;
  const currentLevel = level.id;

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 面包屑导航 */}
        <div className="mb-6 text-sm text-gray-600">
          <Link href="/">Home</Link> &gt; <Link href="/levels">Levels</Link> &gt; Level {level.id}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          {/* 主内容区域 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h1 className="text-3xl font-bold text-blue-600 mb-2">Hexa Sort Level {level.id}</h1>
            
            {/* 视频区域 */}
            <div className="mb-6">
              <iframe
                src={youtube}
                width="100%"
                height="400"
                className="w-full border-0 rounded-lg"
                title={`Hexa Sort-Level ${level.id} NO BOOSTERS #hexasort`}
                allow="autoplay; fullscreen"
              />
            </div>

            {/* 视频操作按钮 */}
            <div className="flex space-x-4 mb-6">
              <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Later
              </button>
              <ShareButtons url={pageUrl} text={level.title} />
            </div>

            {/* 关卡描述 */}
            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <h2 className="text-lg font-semibold text-blue-600 mb-2">Hexa Sort Level {level.id} Solution Walkthrough</h2>
              <p className="text-yellow-700">Strategy Method</p>
            </div>

            {/* 相邻关卡导航（移动端） */}
            <div className="lg:hidden mb-6">
              <PrevNext currentLevel={currentLevel} levels={adjacent} />
            </div>
          </div>

          {/* 侧边栏 */}
          <aside className="space-y-6">
            {/* 相邻关卡导航（桌面端） */}
            <div className="hidden lg:block">
              <PrevNext currentLevel={currentLevel} levels={adjacent} />
            </div>
            
            {/* 相邻关卡网格 */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-blue-600">Adjacent Levels</h2>
                <Link href="/levels" className="text-sm text-blue-600 hover:underline">
                  All Levels &rarr;
                </Link>
              </div>
              <AdjacentGrid currentLevel={currentLevel} levels={adjacent} />
            </div>

            {/* 直接玩游戏卡片 */}
            <div className="bg-white rounded-xl shadow-md p-5">
              <div className="flex items-start mb-4">
                <div className="bg-blue-500 rounded-full p-2 mr-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 mb-1">Want to play games directly?</h3>
                  <p className="text-sm text-gray-600 mb-3">Play Hexa Sort Online!</p>
                  <Link href="/play" className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700">
                    Play Now
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default LevelDetail;

import Link from "next/link";

// Generate 15 random adjacent levels
function generateAdjacentLevels(currentLevel: number, count: number = 15) {
  const levels: { id: number; title: string }[] = [];
  const allLevels = Array.from({ length: 728 }, (_, i) => i + 1); // All possible levels
  const randomLevels = new Set<number>();

  while (randomLevels.size < count) {
    const randomLevel = allLevels[Math.floor(Math.random() * allLevels.length)];
    if (randomLevel !== currentLevel) {  // Ensure not the same as current level
      randomLevels.add(randomLevel);
    }
  }

  randomLevels.forEach((id) => {
    levels.push({
      id,
      title: `Hexa Sort Level ${id} Solution`,
    });
  });

  return levels;
}

interface LevelSideProps {
  currentLevel: number;
  prevLevel?: { id: number; title: string };
  nextLevel?: { id: number; title: string };
  adjacentLevels: { id: number; title: string }[];
}

export default function LevelSide({
  currentLevel,
  prevLevel,
  nextLevel,
  adjacentLevels,
}: LevelSideProps) {
  return (
    <aside className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-6">
      {/* Previous and Next Level Navigation */}
      <div className="space-y-4">
        {prevLevel && (
          <Link
            href={`/levels/${prevLevel.id}`}
            className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="text-xs text-gray-500 mb-2">Previous Level</div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white font-bold">{prevLevel.id}</span>
              </div>
              <div>
                <div className="font-medium text-gray-800">Level {prevLevel.id}</div>
                <div className="text-xs text-gray-500 mt-1">{prevLevel.title}</div>
              </div>
            </div>
          </Link>
        )}

        {nextLevel && (
          <Link
            href={`/levels/${nextLevel.id}`}
            className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="text-xs text-gray-500 mb-2">Next Level</div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white font-bold">{nextLevel.id}</span>
              </div>
              <div>
                <div className="font-medium text-gray-800">Level {nextLevel.id}</div>
                <div className="text-xs text-gray-500 mt-1">{nextLevel.title}</div>
              </div>
            </div>
          </Link>
        )}
      </div>

      {/* Adjacent Levels Grid */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">Adjacent Levels</h3>
          <Link href="/levels" className="text-sm text-blue-600 hover:underline">
            All Levels →
          </Link>
        </div>

        {/* Adjust grid layout to 3 columns on mobile and larger columns on bigger screens */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 gap-3">
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
      </div>

      {/* Play Game Button */}
      <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
        <div className="text-sm text-gray-600 mb-3">Want to play games directly?</div>
        <div className="text-gray-800 font-medium mb-2">Play Hexa Sort Online!</div>
        <Link
          href="/play"
          className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Play Now
        </Link>
      </div>
    </aside>
  );
}

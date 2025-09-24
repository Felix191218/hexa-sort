export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* 顶部标题区域 */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">About Hexa Sort</h2>
        <p className="text-xl text-amber-700">
          A Simple Strategic Puzzle Game Loved by Millions Worldwide
        </p>
      </div>

      {/* 数据卡片区域 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
          <p className="text-4xl font-bold text-blue-600 mb-2">+1,000W+</p>
          <p className="text-amber-700">Active Players</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
          <p className="text-4xl font-bold text-blue-600 mb-2">+150</p>
          <p className="text-amber-700">Countries</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
          <p className="text-4xl font-bold text-blue-600 mb-2">+1,000</p>
          <p className="text-amber-700">Levels</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
          <p className="text-4xl font-bold text-blue-600 mb-2">3.8/5</p>
          <p className="text-amber-700">User Rating</p>
        </div>
      </div>

      {/* 底部内容区域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Us</h3>
          <p className="text-amber-700 leading-relaxed">
            Hexa Sort is a simple and fun strategic puzzle game. Our mission is to bring players 
            an engaging gaming experience through fun and challenging puzzles.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-amber-700 leading-relaxed">
            Create a relaxing and challenging puzzle game experience that lets players feel 
            accomplishment and joy through solving puzzles.
          </p>
        </div>
      </div>
    </section>
  );
}
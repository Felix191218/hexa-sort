// Magic Sort About Component (Optimized for Keywords)
export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-[#f0f8f0]"> {/* 调整为与WhatIs组件相同的背景色 */}
      {/* 顶部标题区域 */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-700 mb-4">About Magic Sort: A Mystical Water Sorting Adventure</h2>
        <p className="text-xl text-green-800" dangerouslySetInnerHTML={{ __html: 
          "Immerse in a Tranquil Color Feast – The Definitive <strong>Water Sorting Puzzle</strong> Experience"
        }}></p>
      </div>

      {/* 数据卡片区域 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-purple-100"> {/* 调整为白色背景 */}
          <p className="text-4xl font-bold text-purple-700 mb-2">Hundreds</p>
          <p className="text-green-800" dangerouslySetInnerHTML={{ __html: "<strong>Spellbinding Levels</strong>" }}></p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-purple-100"> {/* 调整为白色背景 */}
          <p className="text-4xl font-bold text-purple-700 mb-2">Dual Fun</p>
          <p className="text-green-800" dangerouslySetInnerHTML={{ __html: "Relaxation & <strong>Mental Challenge</strong>" }}></p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-purple-100"> {/* 调整为白色背景 */}
          <p className="text-4xl font-bold text-purple-700 mb-2">Magic</p>
          <p className="text-green-800" dangerouslySetInnerHTML={{ __html: "<strong>Alchemy System</strong> & Tools" }}></p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-purple-100"> {/* 调整为白色背景 */}
          <p className="text-4xl font-bold text-purple-700 mb-2">5/5</p>
          <p className="text-green-800">Tranquility Rating</p>
        </div>
      </div>

      {/* 底部内容区域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-6 bg-white rounded-xl shadow-lg border border-purple-100"> {/* 调整为白色背景 */}
          <h3 className="text-2xl font-bold text-purple-700 mb-4">The Magic Sort Vision</h3>
          <p className="text-green-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: 
            "<strong>Magic Sort</strong> is a unique <strong>water sorting puzzle game</strong> that blends the calming rhythm of color classification with the excitement of magical strategy. We aim to provide players with an <strong>immersive tranquility</strong> while challenging their logical reasoning through <strong>precise pouring</strong> and strategic use of the <strong>Magic Toolbox</strong>."
          }}></p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg border border-purple-100"> {/* 调整为白色背景 */}
          <h3 className="text-2xl font-bold text-purple-700 mb-4">Our Core Mission: Solving Puzzles, Brewing Potions</h3>
          <p className="text-green-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: 
            "Our mission is to create a stress-free environment where players can solve bottlenecks using <strong>Shuffle Magic</strong>, <strong>collect mysterious ingredients</strong>, and <strong>brew permanent potions</strong>. This depth ensures <strong>Magic Sort</strong> offers rewarding progression beyond standard <strong>color sorting puzzles</strong>."
          }}></p>
        </div>
      </div>
    </section>
  );
}
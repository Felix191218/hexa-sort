export default function Features() {
    const features = [
      {
        title: "Hexagonal Multi-Layer Tile Design",
        desc: "Unique hexagon board with stacked color tiles creates fresh puzzle patterns and higher replayability.",
      },
      {
        title: "3D Match & Auto-Stack Mechanics",
        desc: "Combine sorting with automatic stacking; complete a color match to trigger smart clears and combos.",
      },
      {
        title: "Premium 3D Graphics & Smooth Animation",
        desc: "Crisp 3D visuals, fluid transitions, and satisfying effects crafted for a modern mobile puzzle game.",
      },
      {
        title: "Easy to Learn, Deep Strategy",
        desc: "Tap to start, master with planning—optimize moves, manage layers, and chase high scores.",
      },
      {
        title: "Hundreds of Hand-Crafted Levels",
        desc: "Progress through a rich level set designed for beginners and expert puzzle players alike.",
      },
      {
        title: "Play Anywhere: iOS, Android & Web",
        desc: "Seamless cross-platform experience—pick up your Hexa Sort puzzle on phone, tablet, or browser.",
      },
      {
        title: "Relaxing ASMR Sound Design",
        desc: "Calming click, stack, and clear audio cues enhance focus and deliver a soothing puzzle flow.",
      },
      {
        title: "Helpful Power-Ups & Boosters",
        desc: "Use tools like the Hammer or Swap to fix mistakes, rescue runs, and unlock tougher wins.",
      },
      {
        title: "No Timer—Think at Your Own Pace",
        desc: "Stress-free gameplay without countdowns; perfect for casual sessions and mindful problem solving.",
      },
      {
        title: "Realistic Physics for Stacking & Clears",
        desc: "Authentic motion and gravity-inspired stacking make each clear feel tactile and rewarding.",
      },
      {
        title: "Leaderboards & Social Sharing",
        desc: "Compete with friends, track global rankings, and share your best Hexa Sort solutions.",
      },
    ];
  
    return (
      <section className="bg-[#f0f4f8] py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* 标题区域 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Hexa Sort Game Features</h2>
            <p className="text-xl text-amber-700">
              Discover what makes Hexa Sort the most engaging and innovative puzzle game experience
            </p>
          </div>
  
          {/* 特性网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-lg text-blue-600">{feature.title}</h3>
                </div>
                <p className="text-amber-700 pl-11">{feature.desc}</p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
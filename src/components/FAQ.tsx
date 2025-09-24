export default function FAQ() {
    const faqs = [
      {
        q: "Is Hexa Sort free to play?",
        a: "Yes, Hexa Sort is free to download and play. The puzzle game contains ads and optional in-app purchases for extra items.",
      },
      {
        q: "What devices does Hexa Sort support?",
        a: "Hexa Sort runs on iOS, Android smartphones, and web browsers. Cross-platform data sync is not fully available yet.",
      },
      {
        q: "How difficult is Hexa Sort?",
        a: "The game is easy to learn with intuitive mechanics, but offers deep strategy. Levels increase in difficulty, making it suitable for casual puzzle fans and brain game lovers.",
      },
      {
        q: "Does Hexa Sort have a time limit?",
        a: "No, there is no time limit. The gameplay emphasizes thoughtful strategy and relaxed problem-solving.",
      },
      {
        q: "Is there a leaderboard in Hexa Sort?",
        a: "Yes, Hexa Sort features global leaderboards so you can compare scores and rankings with friends and players worldwide.",
      },
      {
        q: "Does the game include sound effects?",
        a: "Yes, Hexa Sort includes ASMR-inspired match and clear sound effects that create a relaxing puzzle-solving experience.",
      },
      {
        q: "What power-ups are available in Hexa Sort?",
        a: "The game offers helpful boosters such as the Hammer and Swap tool to solve tricky puzzles and progress through harder levels.",
      },
      {
        q: "How often is Hexa Sort updated?",
        a: "The game is actively updated with new levels, features, and improvements to keep the puzzle experience fresh.",
      },
      {
        q: "Where can I find help or the in-game FAQ?",
        a: "You can access the FAQ and help section inside the settings menu of Hexa Sort at any time.",
      },
    ];
  
    return (
      <section className="bg-[#f0f4f8] py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* 标题区域 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Hexa Sort FAQ
            </h2>
            <p className="text-xl text-amber-700">
              Frequently asked questions about the Hexa Sort puzzle game
            </p>
          </div>
          
          {/* FAQ列表 */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="space-y-6">
              {faqs.map((item, i) => (
                <div key={i} className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                  <h3 className="font-bold text-lg text-blue-600 mb-2">{item.q}</h3>
                  <p className="text-amber-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    );
  }
// FAQMagic.tsx - Magic Sort Frequently Asked Questions (Optimized for Keywords)
export default function FAQ() {
  const faqs = [
    {
      q: "Is Magic Sort free to play and what is the monetization model? 💰",
      a: "Yes, <strong>Magic Sort</strong> is <strong>free to download</strong>. The monetization model involves advertisements and <strong>optional in-app purchases</strong>. Players can use in-game coins to purchase <strong>magic tools</strong> and <strong>potions</strong>, or buy them with real money.",
    },
    {
      q: "Does Magic Sort support cross-device progression? ☁️",
      a: "Yes! <strong>Magic Sort</strong> supports <strong>cloud saving</strong>. You can sync your progress, collected <strong>mysterious ingredients</strong>, and unlocked <strong>potions</strong> across different devices, allowing you to continue your <strong>Water Sorting Puzzle Feast</strong> wherever you go.",
    },
    {
      q: "How many levels does Magic Sort offer? 🔢",
      a: "<strong>Magic Sort</strong> contains <strong>hundreds of 'Spellbinding Levels'</strong>. The game also features engaging daily challenges and an endless mode, ensuring players are constantly provided with new <strong>color sorting puzzle</strong> content.",
    },
    {
      q: "What special tools are available to help solve difficult puzzles? 🪄",
      a: "The game offers a <strong>Magic Toolbox</strong>, most notably the <strong>Shuffle Magic</strong> tool. This power-up intelligently re-arranges the current bottle states to a solvable configuration, helping players <strong>avoid deadlocks</strong> and <strong>reshape deadlocks</strong>.",
    },
    {
      q: "Is Magic Sort a relaxing or challenging game? 🧘",
      a: "<strong>Magic Sort</strong> offers a dual experience of <strong>relaxation</strong> and <strong>mental challenge</strong>. While the visuals promote <strong>immersive tranquility</strong>, the core mechanism of <strong>precise pouring</strong> and strategic <strong>empty bottle management</strong> ensures a deep strategic challenge.",
    },
    {
      q: "What is the Alchemy System? ⚗️",
      a: "The <strong>Alchemy System</strong> is a strategic layer where players <strong>collect mysterious ingredients</strong> from solved levels. These ingredients are used to <strong>brew permanent or temporary potions</strong> that unlock new levels or enhance gameplay (e.g., increasing magic tool usage).",
    },
    {
      q: "Do the pouring rules change as I progress? ⬆️",
      a: "Yes, as players progress, <strong>advanced mechanisms</strong> are introduced. This includes new bottle shapes, modified <strong>pouring rules</strong>, or hidden elements under the colors, increasing the game's complexity and challenge.",
    },
    {
      q: "What is the best starting strategy for a new Magic Sort level? 🎯",
      a: "The recommended <strong>starting strategy</strong> is to <strong>prioritize bottles with fewer colors</strong> or those close to being filled. This reduces complexity early on and creates valuable empty space, which is crucial for solving multi-color classification.",
    },
    
  ];

  return (
    <section className="bg-[#f0f8f0] py-16"> {/* 调整背景色 */}
      <div className="max-w-6xl mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">
            Magic Sort FAQ: Mastering the Water Sorting Puzzle Feast
          </h2>
          <p className="text-xl text-green-800" dangerouslySetInnerHTML={{ __html: 
            "Get answers about the <strong>Alchemy System</strong>, <strong>Shuffle Magic</strong>, and core <strong>Water Sorting</strong> strategies."
          }}></p>
        </div>
        
        {/* FAQ列表 */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100"> {/* 调整颜色和阴影 */}
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                <h3 className="font-bold text-lg text-purple-700 mb-2">{item.q}</h3> {/* 调整主题色 */}
                <p className="text-green-800" dangerouslySetInnerHTML={{ __html: item.a }}></p> {/* 调整文本颜色 */}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
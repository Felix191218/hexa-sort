"use client";
import React from "react";

export default function Features() {
  const features = [
    {
      title: "Tranquil Water Sorting Core Loop 💧",
      desc: "<strong>Magic Sort</strong>'s core loop involves precise <strong>water sorting</strong>. Players strategically pour colored liquid to achieve pure, sorted bottles, testing logical reasoning and strategic planning.",
    },
    {
      title: "Strategic Magic Toolbox & Shuffle 🔮",
      desc: "Utilize the powerful <strong>Magic Toolbox</strong>, featuring the unique <strong>Shuffle Magic</strong>. This tool strategically re-arranges bottle states to break deadlocks, ensuring puzzles remain solvable and frustration-free.",
    },
    {
      title: "Alchemical Secret: Potion Brewing System 🧪",
      desc: "Collect <strong>mysterious ingredients</strong> from solved puzzles. Use the <strong>Alchemy System</strong> to <strong>brew potions</strong>—permanent or temporary buffs that enhance magic tool usage or puzzle-solving efficiency in <strong>Magic Sort</strong>.",
    },
    {
      title: "Immersive Color Feast & Relaxation ✨",
      desc: "The game offers a <strong>tranquil color feast</strong> with flowing watercolor effects and colorful bottles. The background atmosphere is designed for <strong>relaxation</strong> and mindful problem-solving.",
    },
    {
      title: "Precise Pouring Rules & Space Limitation 📐",
      desc: "Master the key strategy of <strong>precise pouring</strong>: match colors and efficiently manage <strong>space limitation</strong> within the wizard's gear to solve chaotic color mixing challenges in this <strong>Water Sorting Puzzle Feast</strong>.",
    },
    {
      title: "Hundreds of Spellbinding Levels 🗺️",
      desc: "<strong>Magic Sort</strong> features hundreds of challenging <strong>Spellbinding Levels</strong> designed to cater to all skill levels, plus engaging daily challenges and an endless <strong>Magic Sort</strong> mode.",
    },
    {
      title: "Growth & Evolution Theme Packaging 🧙",
      desc: "Creative theme packaging with 'wizard's gear' and 'stirring potions'. Every successful <strong>Magic Sort</strong> solution is tied to magical growth and evolution, enhancing the game's long-term appeal.",
    },
    {
      title: "Cross-Device Progression with Cloud Save ☁️",
      desc: "Enjoy <strong>Magic Sort</strong> anywhere! The game supports seamless cloud saving, allowing players to sync their progress, collected <strong>ingredients</strong>, and unlocked <strong>potions</strong> across devices.",
    },
    {
      title: "Strategic Deadlock Avoidance Guide 💡",
      desc: "Learn to manage <strong>empty bottles</strong> as precious temporary storage to avoid potential <strong>deadlocks</strong>. Strategic planning is key to smooth multi-color classification in <strong>Magic Sort</strong>.",
    },
  ];

  return (
    <section className="bg-[#f0f8f0] py-16"> {/* 调整背景色 */}
      <div className="max-w-6xl mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">Magic Sort: Key Features & Mystical Adventure Highlights</h2>
          <p className="text-xl text-green-800"> {/* 调整文本颜色 */}
            Immerse yourself in a <strong>Tranquil Color Feast</strong> and enjoy the dual fun of relaxation and mental challenge with these core <strong>Magic Sort</strong> features.
          </p>
        </div>

        {/* 特性网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 transform hover:scale-[1.02] transition duration-300" // 添加一些魔幻的悬停效果
            >
              <div className="flex items-start mb-4">
                <div className="bg-purple-700 rounded-full p-2 mr-4 flex-shrink-0"> {/* 调整主题色 */}
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="font-bold text-lg text-purple-700">{feature.title}</h3> {/* 调整主题色 */}
              </div>
              <p 
                className="text-green-800 pl-11"
                dangerouslySetInnerHTML={{ __html: feature.desc }}
              ></p> {/* 调整文本颜色 */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
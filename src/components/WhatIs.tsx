// Magic Sort WhatIs Component (Focused on Core Mechanics)
export default function WhatIs() {
    return (
      <section className="bg-[#f0f8f0] py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* 顶部标题区域 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">What is Magic Sort? Core Mechanics Explained</h2>
            <p className="text-xl text-green-800" dangerouslySetInnerHTML={{ __html: 
              "A unique blend of <strong>Water Sorting</strong> strategy, <strong>Alchemy</strong>, and <strong>Magic Tools</strong> for the ultimate puzzle feast."
            }}></p>
          </div>
  
          {/* 核心机制列表 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 核心循环 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-700">
              <h3 className="text-2xl font-bold text-purple-700 mb-3">The Core Loop: Pouring & Brewing</h3>

              <div className="mb-4">
                <img 
                  src="/images/magic-sort/magic-sort-core-loop-color-pouring.webp" 
                  alt="Magic Sort gameplay showcasing colored liquids being poured into bottles to solve color mixing puzzles. Players must strategically pour to obtain mysterious ingredients for potion brewing."
                  style={{ width: '300px', height: '300px' }}  // 直接设置图片宽度为 300px，高度自适应
                  className="rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>

              <p className="text-green-800 mb-4" dangerouslySetInnerHTML={{ __html: 
                "<strong>Magic Sort</strong> requires players to <strong>identify bottle states</strong> and <strong>strategically pour</strong> colored liquid to solve complex color mixing challenges. Success leads to obtaining <strong>mysterious ingredients</strong> for <strong>potion brewing</strong>."
              }}></p>
              <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                  <li dangerouslySetInnerHTML={{ __html: "<strong>Keyword Focus:</strong> Core Loop, Strategically Pour, Mysterious Ingredients, Brew Potions." }}></li>
              </ul>
            </div>
  
            {/* 魔法工具 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-700">
              <h3 className="text-2xl font-bold text-purple-700 mb-3">Shuffle Magic & The Toolbox</h3>
              {/* 添加图片 */}
              <div className="mb-4">
                <img 
                  src="/images/magic-sort/magic-sort-magic-toolbox-shuffle.webp" 
                  alt="Magic Sort gameplay showing the Magic Toolbox with Shuffle Magic, which allows players to intelligently re-arrange bottles and eliminate frustration. Strategic use of this tool is essential for overcoming deadlocks and advancing in higher levels."
                  className="w-full h-auto rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>

              <p className="text-green-800 mb-4" dangerouslySetInnerHTML={{ __html: 
                "The <strong>Magic Toolbox</strong> eliminates frustration. Use <strong>Shuffle Magic</strong> to intelligently re-arrange bottles, allowing you to <strong>reshape deadlocks</strong> and avoid anxiety. Strategic management of these tools is crucial for advanced levels."
              }}></p>
              <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                  <li dangerouslySetInnerHTML={{ __html: "<strong>Keyword Focus:</strong> Magic Toolbox, Shuffle Magic, Eliminate Anxiety, Reshape Deadlocks." }}></li>
              </ul>
            </div>
  
            {/* 沉浸式体验 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-700">
              <h3 className="text-2xl font-bold text-purple-700 mb-3">Immersive Tranquility & Visual Feast</h3>

              <div className="mb-4">
                <img 
                  src="/images/magic-sort/magic-sort-immersive-tranquility-visual-feast.webp" 
                  alt="Magic Sort gameplay showing colorful bottles arranged in a puzzle format. The relaxing background atmosphere, combined with fluid watercolor effects, creates an immersive visual feast perfect for casual and mindful play."
                  className="w-full h-auto rounded-lg shadow-md"
                  style={{ width: '300px', height: '300px' }}  // 直接设置图片宽度为 300px，高度自适应
                  loading="lazy"
                />
              </div>

              <p className="text-green-800 mb-4" dangerouslySetInnerHTML={{ __html: 
                "Experience the <strong>Immersive Tranquility</strong> of a <strong>Colorful Visual Feast</strong>. Relaxing background music, combined with fluid watercolor effects, makes <strong>Magic Sort</strong> the perfect game for casual and mindful play."
              }}></p>
              <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                  <li dangerouslySetInnerHTML={{ __html: "<strong>Keyword Focus:</strong> Immersive Tranquility, Colorful Visual Feast, Relaxing Background Atmosphere, Mental Challenge." }}></li>
              </ul>
            </div>
  
          </div>
  
          {/* CTA - 额外提醒 */}
          <div className="mt-12 text-center">
              <p className="text-lg font-medium text-purple-700" dangerouslySetInnerHTML={{ __html: 
                "Ready to master the <strong>key strategy of color matching</strong> and space limitation? Start your <strong>Magic Sort</strong> adventure today!"
              }}></p>
          </div>
        </div>
      </section>
    );
  }
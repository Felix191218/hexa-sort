type Section = { heading: string; content: string };

type GameDetailProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  developer: string;
  iframeSrc?: string;
  overview: React.ReactNode;   // 新增 Overview
  whatIs: React.ReactNode;     // 新增 What is
  howToPlay: React.ReactNode;  // 新增 How to Play
  sections?: Section[]; // 额外拓展小节
  children?: React.ReactNode;
};

export default function GameDetail({
  title,
  subtitle,
  description,
  iframeSrc,
  overview,
  whatIs,
  howToPlay,
  sections,
  children,
}: GameDetailProps) {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* 游戏标题 + iframe */}
        {iframeSrc && (
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
              {title} – Play Online Free
            </h1>
            <iframe
              src={iframeSrc}
              width="100%"
              height="700"
              className="w-full border border-gray-200 bg-black rounded-lg shadow-lg"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={`${title} Online Game`}
            />
          </div>
        )}

        {/* 简短副标题和描述 */}
        <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
        <p className="text-gray-600 mb-12">{description}</p>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{title} Overview</h2>
          <p className="text-gray-700 leading-relaxed">{overview}</p>
        </section>

        {/* What is */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What is {title}?</h2>
          <p className="text-gray-700 leading-relaxed">{whatIs}</p>
        </section>

        {/* How to Play */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How to Play {title}</h2>
          <p className="text-gray-700 leading-relaxed">{howToPlay}</p>
        </section>

        {/* 额外的小节（扩展用） */}
        {sections && sections.length > 0 && (
          <div className="space-y-10 mb-12">
            {sections.map((s, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-3">{s.heading}</h3>
                <p className="text-gray-600">{s.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 子组件，比如 Levels */}
      {children}
    </>
  );
}

import Download from "@/components/Download";
import Levels from "@/components/Levels";

export default function HexaSortPage() {
  return (
    <>
      <head>
        <title>Hexa Sort - Download & Play Strategic Puzzle Game</title>
        <meta 
          name="description" 
          content="Download Hexa Sort, the strategic puzzle game loved by millions. Find walkthroughs, tips, and strategies for each level on our website. Available on multiple platforms." 
        />
        <link 
          rel="canonical" 
          href="https://www.hexasortlevel.com/download" 
        />
        <meta 
          property="og:title" 
          content="Hexa Sort - Download & Play Strategic Puzzle Game" 
        />
        <meta 
          property="og:description" 
          content="Download Hexa Sort, the strategic puzzle game loved by millions. Find walkthroughs, tips, and strategies for each level on our website. Available on multiple platforms." 
        />
        <meta 
          property="og:url" 
          content="https://www.hexasortlevel.com/download" 
        />
        <meta 
          property="og:image" 
          content="https://www.hexasortlevel.com/assets/hexasort-thumbnail.jpg" 
        />
      </head>

      <main>
        <Download />
        <Levels />
      </main>
    </>
  );
}

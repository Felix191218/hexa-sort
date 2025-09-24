export default function ShareButtons({ url, text }: { url: string; text: string }) {
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(text);
    const A = "hover:opacity-80 text-[18px]";
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Share Level Guide</span>
        <a className={A} target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=${u}&text=${t}`}>🐦</a>
        <a className={A} target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${u}`}>📘</a>
        <a className={A} target="_blank" rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`}>💼</a>
        <a className={A} target="_blank" rel="noreferrer" href={`https://wa.me/?text=${t}%20${u}`}>🟢</a>
      </div>
    );
  }
  
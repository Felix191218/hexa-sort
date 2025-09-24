export default function VideoEmbed({ src, title }: { src: string; title: string }) {
    return (
      <div className="relative w-full rounded-2xl border bg-black shadow" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }
  
export default function Video({ title, src }: VideoProps) {
  return (
    <div className="relative w-full pt-[56%]">
      <iframe
        title={title}
        className="absolute top-0 left-0 w-full h-full"
        src={`${src}&autoplay=true&muted=true&controls=false&loop=true`}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
}

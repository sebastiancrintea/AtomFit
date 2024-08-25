type Props = {
  embedId: string;
};

export function YoutubeEmbed({ embedId }: Props) {
  return (
    <div className="relative aspect-video">
      <iframe
        width="1280"
        height="720"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="absolute size-full"
      />
    </div>
  );
}

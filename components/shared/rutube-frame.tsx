type RuTubeFrameProps = {
  videoId: string;
  title: string;
};

export function RuTubeFrame({ videoId, title }: RuTubeFrameProps) {
  return (
    <iframe
      allowFullScreen
      allow="clipboard-write; autoplay"
      className="w-full aspect-video p-4 border rounded-md mt-4"
      src={`https://rutube.ru/play/embed/${videoId}`}
      title={title}
    />
  );
}

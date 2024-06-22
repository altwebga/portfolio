interface RuTubePlayerProps {
  videoId: string;
}

export const RuTubePlayer: React.FC<RuTubePlayerProps> = ({ videoId }) => {
  return (
    <div className="relative pt-[56.25%] w-full h-0">
      <iframe
        allowFullScreen
        allow="autoplay; encrypted-media"
        className="absolute top-0 left-0 w-full h-full border-0"
        src={`https://rutube.ru/play/embed/${videoId}`}
        title="This is a unique title"
      />
    </div>
  );
};

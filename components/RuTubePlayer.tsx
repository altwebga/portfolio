interface RuTubePlayerProps {
  videoId: string;
}

export const RuTubePlayer: React.FC<RuTubePlayerProps> = ({ videoId }) => {
  return (
    <div className="p-2 border border-gray-500">
      <iframe
        className="w-full h-[550px]"
        allowFullScreen
        allow="autoplay; encrypted-media"
        src={`https://rutube.ru/play/embed/${videoId}`}
        title="This is a unique title"
      />
    </div>
  );
};

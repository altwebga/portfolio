import Link from "next/link";
import { Button } from "./ui/button";

type RutubePlayerProps = {
  videoId: string;
  title: string;
  url: string;
};
export function RutubePlayer({ videoId, title, url }: RutubePlayerProps) {
  return (
    <div className="flex flex-col items-end">
      <iframe
        allowFullScreen
        allow="clipboard-write; autoplay"
        className="w-full aspect-video p-4 border rounded-md mt-4"
        src={`https://rutube.ru/play/embed/${videoId}`}
        title={title}
      />
      <Button asChild className="mt-4">
        <Link href={url} target="_blank">
          Посмотреть сайт
        </Link>
      </Button>
    </div>
  );
}

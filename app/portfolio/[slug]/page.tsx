import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPost } from "@/lib/api";
import placeholderImage from "@/public/images/placeholder_image.svg";
import { RutubePlayer } from "@/components/RutubePlayer";
import { CallAction } from "@/components/CallAction";

async function getPostData(slug: string) {
  return await getPost(slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const postData = await getPostData(params.slug);
  const descriptionText = postData?.excerpt.rendered
    .replace(/<\/?[^>]+(>|$)/g, "") // Удаляем HTML теги
    .substring(0, 100); // Обрезаем до 100 символов
  return {
    title: postData?.title.rendered,
    description: descriptionText,
    openGraph: {
      title: postData?.title.rendered,
      description: descriptionText,
      images: [
        {
          url: postData?.image_url || placeholderImage,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function PortfolioSinglePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) {
    return (
      <div>
        <h1>404 Страница не найдена</h1>
        <Link href="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className="flex items-center gap-4">
        <Image
          src={post.acf?.logo || placeholderImage}
          alt={post.title.rendered}
          width={64}
          height={64}
          className="w-16 h-16 rounded-lg"
        />
        <div>
          <h1>{post.title.rendered}</h1>
          <span>{post.acf?.businessCategory}</span>
        </div>
      </div>

      <div
        className="max-w-4xl"
        dangerouslySetInnerHTML={{
          __html: post.content.rendered,
        }}
      />

      <RutubePlayer
        videoId={post.acf?.rutube || ""}
        title={post.title.rendered}
        url={post.acf?.website || ""}
      />

      <CallAction />
    </>
  );
}

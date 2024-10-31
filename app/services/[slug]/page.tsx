import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPost } from "@/lib/api";
import placeholderImage from "@/public/images/placeholder_image.svg";
import { Badge } from "@/components/ui/badge";
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

export default async function ServiceSinglePage({
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
    <div>
      <h1>{post.title.rendered}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          />
          <Badge className="p-2 mt-4" variant={"outline"}>
            {post.acf?.price}
          </Badge>
        </div>
        <Image
          src={post.image_url || placeholderImage}
          alt="post image"
          width={400}
          height={400}
          className="hidden md:block w-auto h-auto aspect-square object-cover rounded-md"
        />
      </div>
      <CallAction />
    </div>
  );
}

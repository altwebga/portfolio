import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getPost } from "@/lib/api";
import { CallAction } from "@/components/CallAction";
import { Badge } from "@/components/ui/badge";
import placeholderImage from "@/public/images/placeholder_image.svg";
import CodeHighlighter from "@/components/CodeHighlighter";

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
          url: postData?.image_url || placeholderImage.src,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function BlogSinglePage({
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
      <h1>{post.title.rendered}</h1>

      <div className="max-w-4xl mt-4">
        <CodeHighlighter content={post.content.rendered} />
      </div>

      <div className="flex gap-2 flex-wrap">
        {post.tag_names?.map((tag) => (
          <Badge key={tag} className="p-2 mt-4">
            {tag}
          </Badge>
        ))}
      </div>
      <CallAction />
    </>
  );
}

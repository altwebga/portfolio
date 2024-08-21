import type { Metadata } from "next";

import { CallAction } from "@/components/call-action";
import { getPost } from "@/config/fetch";

// Функция для получения данных сервиса
async function fetchPostData(slug: string) {
  return await getPost(slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await fetchPostData(params.slug);

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered,
  };
}

export default async function SingleServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await fetchPostData(params.slug);

  return (
    <div className="py-8">
      <h1>{post.title.rendered}</h1>
      <div className="flex flex-col-reverse md:flex-row gap-4 py-6 justify-between">
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
      <CallAction />
    </div>
  );
}

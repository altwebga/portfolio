import { getPost } from "@/actions/get-posts";
import Image from "next/image";

export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await getPost(slug);
  if (!data) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <h1>{data.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col gap-4">
          {data.description && (
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          )}
          {data.price && <div>Цена: {data.price}</div>}
        </div>
        <Image
          className="hidden md:block rounded-md"
          src={data.image || ""}
          alt={data.title || ""}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

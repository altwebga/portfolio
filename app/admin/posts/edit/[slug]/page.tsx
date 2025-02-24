import { getPost } from "@/actions/get-posts";

export default async function EditPostPage({
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
    </div>
  );
}

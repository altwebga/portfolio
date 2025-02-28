export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post, frontmatter } = await import(
    `@/content/posts/${slug}.mdx`
  );

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <Post />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { frontmatter } = await import(`@/content/posts/${slug}.mdx`);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      images: [
        {
          url: frontmatter.image,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

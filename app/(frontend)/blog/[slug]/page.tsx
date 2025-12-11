import { getSlugs } from "@/lib/content";
import "highlight.js/styles/github-dark.css";
import { CallAction } from "@/components/shared/call-action";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const slugs = await getSlugs("posts");
  return slugs.map((slug) => ({ slug }));
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
      <div className="max-w-4xl pt-4">
        <Post />
      </div>
      {frontmatter.tags && (
        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag: string) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
      <CallAction />
    </div>
  );
}

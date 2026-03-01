import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentItem, getContent } from "@/actions/get-content";
import { Markdown } from "@/components/shared/markdown";
import Link from "next/link";
import { DirectusImage } from "@/components/shared/directus-image";
import { Badge } from "@/components/ui/badge";
import { IContent } from "@/config/types";

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await getContentItem({ slug, fields: ["*", "seo.*"] });

  if (!article?.seo) {
    return { robots: { index: false, follow: false } };
  }

  const ogUrl = article.seo.og_image
    ? `${process.env.ASSETS}/${article.seo.og_image}`
    : undefined;

  return {
    title: article.seo.title,
    description: article.seo.meta_description,
    openGraph: {
      images: ogUrl
        ? [{ url: ogUrl, width: 1200, height: 630, alt: article.seo.title }]
        : undefined,
    },
  };
}

export default async function BlogPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const article = await getContentItem({ slug, fields: ["*"] });
  const articles = await getContent({ content_type: "article" });
  if (!article) notFound();

  return (
    <article className="mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-8 py-2">{article.title}</h1>
            <DirectusImage
              url={article.cover_image || ""}
              alt={article.title}
              width={1024}
              height={1024}
              className="w-4xl h-auto mb-8"
            />
            <Markdown
              markdown={article.description || ""}
              className="md:px-4"
            />
            {article.tags && (
              <div className="my-8 flex justify-end gap-4 items-center">
                <p className="m-0">Теги:</p>
                <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                  {article.tags.map((tag: string) => (
                    <li key={tag}>
                      <Badge className="px-4 py-1">{tag}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <aside className="md:w-1/3 md:border-l md:px-4">
            <div className="md:fixed md:top-24 max-w-2xl">
              <h2>Другие статьи</h2>
              <ul className="space-y-2">
                {articles
                  .filter((item: IContent) => item.slug !== slug)
                  .slice(0, 8)
                  .map((item: IContent) => (
                    <li key={item.id}>
                      <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

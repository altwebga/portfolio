import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getPublishedArticlesList,
} from "@/actions/get-content";
import { Markdown } from "@/components/shared/markdown";
import Link from "next/link";

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await getArticleBySlug(slug);

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
  const article = await getArticleBySlug(slug);
  const articles = await getPublishedArticlesList();
  if (!article) notFound();

  return (
    <article className="mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3">
            <h1>{article.title}</h1>
            <Markdown markdown={article.content || ""} />
          </div>
          <aside className="md:w-1/3 md:border-l md:px-4">
            <h2>Другие статьи</h2>
            <ul className="space-y-2">
              {articles
                .filter((item) => item.slug !== slug)
                .slice(0, 8)
                .map((item) => (
                  <li key={item.id}>
                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
            </ul>
          </aside>
        </div>
      </div>
    </article>
  );
}

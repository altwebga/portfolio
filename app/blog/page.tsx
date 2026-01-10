import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedArticlesList } from "@/actions/get-content";
import { Container } from "@/components/container/container";
import { CallActions } from "@/components/shared/call-actions";
import { DirectusImage } from "@/components/shared/directus-image";
import { MagicCard } from "@/components/ui/magic-card";
import { TextAnimate } from "@/components/ui/text-animate";

export const metadata: Metadata = {
  title: "Блог о разработке и SEO",
  description:
    "Статьи о веб-разработке, SEO-продвижении и цифровом маркетинге.",
  openGraph: {
    title: "Блог о разработке и SEO",
    description:
      "Статьи о веб-разработке, SEO-продвижении и цифровом маркетинге.",
    images: [
      {
        url: "/img/og/blog.png",
        width: 1200,
        height: 630,
        alt: "Блог о разработке и SEO",
      },
    ],
  },
};

const text = {
  title: "Блог",
  subTitle: "Заметки по web-разработке в основном что-бы не забыть",
};

export default async function BlogPage() {
  const articles = await getPublishedArticlesList();
  return (
    <Container className="my-20">
      <h1>{text.title}</h1>
      <TextAnimate animation="blurIn" as="p">
        {text.subTitle}
      </TextAnimate>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="grid grid-cols-1 gap-4 md:w-2/3">
          {articles.map((article) => (
            <Link key={article.id} href={`blog/${article.slug}`}>
              <MagicCard className="min-h-60 p-4 rounded-md">
                <div className="flex flex-col md:flex-row gap-8">
                  <DirectusImage
                    url={article.cover_image || ""}
                    width={320}
                    height={320}
                    className="object-cover w-80 h-80 bg-white"
                  />

                  <div>
                    <h3>{article.title}</h3>
                    <p className="text-muted-foreground">
                      {article.seo.meta_description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </Link>
          ))}
        </div>
        <aside className="md:w-1/3 md:border-l md:pl-4">
          <div className="md:fixed md:top-48">
            <CallActions />
          </div>
        </aside>
      </div>
    </Container>
  );
}

import { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Рассказываю про разработку сайтов и мобильных приложений. Интересные статьи и рекомендации.",
  keywords:
    "разработка сайтов, заказать, мобильное приложение, продвижение сайтов, поддержка, обслуживание, создание сайтов, seo, seo оптимизация",
  openGraph: {
    title: "Блог",
    description: "Разработка и продвижение сайтов.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    siteName: "SEOMIX",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "ru",
  },
};

export default function BlogPage() {
  return (
    <div>
      <h1>Блог</h1>
      <BlogCard />
    </div>
  );
}

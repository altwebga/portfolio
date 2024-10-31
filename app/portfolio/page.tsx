import { Metadata } from "next";
import { PortfolioCard } from "@/components/PortfolioCard";

export const metadata: Metadata = {
  title: "Портфолио",
  description:
    "Портфолио частного вебмастера в Горно-Алтайске. Разработка сайтов, продвижение, SEO оптимизация. Примеры работ.",
  keywords:
    "разработка сайтов, заказать, мобильное приложение, продвижение сайтов, поддержка, обслуживание, создание сайтов, seo, seo оптимизация",
  openGraph: {
    title: "SEOMIX",
    description: "Разработка и продвижение сайтов.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`,
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

export default function PortfolioPage() {
  return (
    <div>
      <h1>Мои работы</h1>
      <PortfolioCard />
    </div>
  );
}

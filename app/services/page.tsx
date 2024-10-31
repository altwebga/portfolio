import { Metadata } from "next";
import { ServicesCard } from "@/components/ServicesCard";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Услуги частного вебмастера в Горно-Алтайске. Разработка сайтов, продвижение, SEO оптимизация. Низкие цены и высокое качество.",
  keywords:
    "разработка сайтов, заказать, мобильное приложение, продвижение сайтов, поддержка, обслуживание, создание сайтов, seo, seo оптимизация",
  openGraph: {
    title: "SEOMIX",
    description: "Разработка и продвижение сайтов.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
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

export default function ServicesPage() {
  return (
    <div>
      <h1>Услуги</h1>
      <ServicesCard />
    </div>
  );
}

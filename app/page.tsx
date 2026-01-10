import type { Metadata } from "next";
import { Hero } from "@/components/layout/hero";
import { OurAvantage } from "@/components/layout/our-advantage";
import { OurExperience } from "@/components/layout/our-experience";
import { OurServices } from "@/components/layout/our-services";

export const metadata: Metadata = {
  title: "Веб-студия полного цикла",
  description:
    "Создание сайтов, SEO-продвижение и разработка цифровых продуктов под ключ.",
  openGraph: {
    title: "Веб-студия полного цикла",
    description:
      "Создание сайтов, SEO-продвижение и разработка цифровых продуктов под ключ.",
    images: [
      {
        url: "/img/og/home.png",
        width: 1200,
        height: 630,
        alt: "Веб-студия полного цикла",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <OurExperience />
      <OurAvantage />
    </>
  );
}

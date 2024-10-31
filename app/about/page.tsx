import { Metadata } from "next";
import { AboutMe } from "@/components/AboutMe";
import { CallAction } from "@/components/CallAction";
import { Education } from "@/components/Education";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Владею HTML5, CSS3, TypeScript и популярными фреймворками на основе React.js, такими как React Native и Next.js. Больше 7 лет разрабатываю сайты на WordPress в том числе c использованием его как Headless CMS (GraphQL, REST API).",
  keywords:
    "разработка сайтов, заказать, мобильное приложение, продвижение сайтов, поддержка, обслуживание, создание сайтов, seo, seo оптимизация",
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    description: "Разработка и продвижение сайтов.",
    url: "https://seomix.ru",
    siteName: "SEOMIX",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/me.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "ru",
  },
};

export default function AboutPage() {
  return (
    <div>
      <h1>Обо мне</h1>
      <AboutMe />
      <Education />
      <CallAction />
    </div>
  );
}

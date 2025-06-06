import { Metadata } from "next";

import { CallAction } from "@/components/shared/call-action";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Hero } from "@/components/shared/hero";
import { MyClients } from "@/components/shared/my-clients";
import { ServicesHome } from "@/components/shared/services-home";
import { StagesDevelopment } from "@/components/shared/stages-development";
// import { UsingTechnology } from "@/components/shared/using-technology";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Разработка и продвижение сайтов в Краснодаре",
  description:
    "Частный вебмастер с более чем 10-летним опытом. Разработка, продвижение и поддержка сайтов в Краснодаре и Краснодарском крае. Создаю современные и эффективные решения для вашего бизнеса.",
  keywords:
    "вебмастер, разработка сайтов, продвижение сайтов, SEO, Краснодар, Краснодарский край, создание сайтов, частный специалист, поддержка сайтов, портфолио",
  openGraph: {
    url: `${baseUrl}`,
    siteName: "SEOMIX",
    images: [
      {
        url: `${baseUrl}/images/og/home.webp`,
        width: 800,
        height: 600,
        alt: "Главная | SEOMIX",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MyClients />
      <ServicesHome />
      {/* <UsingTechnology /> */}
      <StagesDevelopment />
      <CallAction />
      <Footer />
    </>
  );
}

import { AboutMe } from "@/components/shared/about-me";
import { CallAction } from "@/components/shared/call-action";
import { PopupPhoto } from "@/components/shared/popup-photo";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Обо мне", // Будет объединено с шаблоном: "Обо мне | SEOMIX"
  description:
    "Частный вебмастер с более чем 10-летним опытом. Разработка и продвижение сайтов в Горно-Алтайске и Республике Алтай. Создаю современные и эффективные решения для вашего бизнеса.",
  keywords:
    "вебмастер, разработка сайтов, продвижение сайтов, SEO, Горно-Алтайск, Республика Алтай, создание сайтов, частный специалист, опыт, портфолио",
  openGraph: {
    url: `${baseUrl}/about`,
    siteName: "SEOMIX",
    images: [
      {
        url: `${baseUrl}/images/og/about.webp`, // Убедитесь, что изображение доступно по этому пути
        width: 800,
        height: 600,
        alt: "Обо мне | SEOMIX",
      },
    ],
  },
};
export default function AboutPage() {
  return (
    <div>
      <h1>Обо мне</h1>
      <AboutMe />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PopupPhoto title="Я.Практикум" image="/images/diploma_page_01.webp" />
        <PopupPhoto title="Я.Практикум" image="/images/diploma_page_02.webp" />
      </div>
      <CallAction />
    </div>
  );
}

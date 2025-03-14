import { AboutMe } from "@/components/shared/about-me";
import { CallAction } from "@/components/shared/call-action";
import { PopupPhoto } from "@/components/shared/popup-photo";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Разработка и продвижение сайтов в Горно-Алтайске и Республике Алтай. Более 10 лет опыта. ",
  openGraph: {
    images: [
      {
        url: `${baseUrl}/images/me.jpg`, // Must be an absolute URL
        width: 800,
        height: 600,
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

import { Metadata } from "next";
import Image from "next/image";
import { About } from "@/components/about";
import { CallAction } from "@/components/call-action";
import DiplomaImage1 from "@/public/images/diploma_page_01.webp";
import DiplomaImage2 from "@/public/images/diploma_page_02.webp";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Я предлагаю полный спектр услуг по разработке и продвижению сайтов. Независимо от масштаба проекта, будь то небольшой лендинг или крупный корпоративный сайт, я готов создать уникальный дизайн и обеспечить его высокую производительность.",
};

export default function AboutPage() {
  return (
    <div>
      <h1>Обо мне</h1>
      <About />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
        <Image
          alt="diploma"
          className="w-full h-auto object-contain shadow-lg rounded-md"
          src={DiplomaImage1}
        />
        <Image
          alt="diploma"
          className="w-full h-auto object-contain shadow-lg rounded-md"
          src={DiplomaImage2}
        />
      </div>
      <CallAction />
    </div>
  );
}

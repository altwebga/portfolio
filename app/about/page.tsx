import { Metadata } from "next";
import { Image } from "@nextui-org/image";

import { title } from "@/components/primitives";
import { AboutMe } from "@/components/AboutMe";
import Diploma1 from "@/public/image/diploma_page_01.webp";
import Diploma2 from "@/public/image/diploma_page_02.webp";
import { CallToAction } from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Разработка сайтов в Горно-Алтайске по низким ценам, частный вебмастер.",
};

export default function AboutPage() {
  return (
    <div className="py-8">
      <h1 className={title()}>Обо мне</h1>
      <AboutMe />
      <div className="flex flex-col md:flex-row gap-4 items-center py-4">
        <Image
          shadow="md"
          src={Diploma1 ? Diploma1.src : Diploma1}
          width={600}
        />
        <Image
          shadow="md"
          src={Diploma2 ? Diploma2.src : Diploma2}
          width={600}
        />
      </div>
      <CallToAction />
    </div>
  );
}

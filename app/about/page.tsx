import { Image } from "@nextui-org/image";
import { title } from "@/components/primitives";
import { AboutMe } from "@/components/AboutMe";
import Diploma1 from "@/public/image/diploma_page_01.webp";
import Diploma2 from "@/public/image/diploma_page_02.webp";
import { CallToAction } from "@/components/CallToAction";

export default function AboutPage() {
  return (
    <div className="py-4">
      <h1 className={title()}>Обо мне</h1>
      <AboutMe />
      <div className="flex flex-col md:flex-row gap-4 items-center py-4">
        <Image
          src={Diploma1 ? Diploma1.src : Diploma1}
          width={600}
          shadow="md"
        />
        <Image
          src={Diploma2 ? Diploma2.src : Diploma2}
          width={600}
          shadow="md"
        />
      </div>
      <CallToAction />
    </div>
  );
}

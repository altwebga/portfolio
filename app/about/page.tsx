import { Image } from "@nextui-org/image";

import AboutMe from "@/components/AboutMe";
import { CallToAction } from "@/components/CallToAction";
import { title } from "@/components/primitives";
import DiplomaPage1 from "@/public/images/diploma_page_01.webp";
import DiplomaPage2 from "@/public/images/diploma_page_02.webp";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>Обо мне</h1>
      <AboutMe />
      <div className="flex flex-col md:flex-row gap-4 py-4">
        <Image
          alt="Диплом Веб-разработчик"
          src={DiplomaPage1 ? DiplomaPage1.src : DiplomaPage1}
          width={600}
        />
        <Image
          alt="Диплом Веб-разработчик"
          src={DiplomaPage2 ? DiplomaPage2.src : DiplomaPage2}
          width={600}
        />
      </div>
      <CallToAction />
    </div>
  );
}

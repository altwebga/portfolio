import { AboutMe } from "@/components/shared/about-me";
import { CallAction } from "@/components/shared/call-action";
import { PopupPhoto } from "@/components/shared/popup-photo";

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

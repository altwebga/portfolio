import { ModalPhoto } from "./ModalPhoto";
import DiplomaImage1 from "@/public/images/diploma_page_01.webp";
import DiplomaImage2 from "@/public/images/diploma_page_02.webp";

export function Education() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <ModalPhoto title="Яндекс Практикум" image={DiplomaImage1} />
      <ModalPhoto title="Яндекс Практикум" image={DiplomaImage2} />
    </div>
  );
}

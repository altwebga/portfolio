import { Metadata } from "next";
import { Image } from "@nextui-org/image";

import ContactImage from "@/public/image/contact.svg";
import { title } from "@/components/primitives";
import { SocialLink } from "@/components/SocialLink";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты веб-студии по разработке и продвижению сайтов в Горно-Алтайске",
};

export default function ContactPage() {
  return (
    <div className="py-8">
      <h1 className={title()}>Мои контакты</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="py-4">
            Я не публикую номер телефона т.к. не хочу попасть в базу спам
            звонков. Вы можете легко получить его перейдя в любой из моих
            социальных аккаунтов.
          </p>
          <SocialLink color="success" size="large" />
          <div className="py-4">
            <ContactForm />
          </div>
        </div>
        <div className="flex-1">
          <Image alt="Контакты" src={ContactImage.src} />
        </div>
      </div>
    </div>
  );
}

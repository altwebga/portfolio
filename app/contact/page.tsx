import { Metadata } from "next";
import Image from "next/image";
import { SocialNetwork } from "@/components/social-network";
import QRCode from "@/public/images/qrcode.svg";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты частного веб-мастера в Горно-Алтайске. Звоните или напишите мне.",
};

export default function ContactPage() {
  return (
    <div>
      <h1>Контакты</h1>
      <p className="max-w-2xl">
        Я не публикую номер телефона т.к. не хочу попасть в базу спам звонков.
        Вы можете легко получить его перейдя в любой из моих социальных
        аккаунтов.
      </p>
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="py-8 space-y-10 md:w-1/2">
          <ContactForm />
        </div>
        <div className="flex flex-col justify-center items-center space-y-5 md:w-1/2 border p-4 rounded-lg">
          <SocialNetwork color="primary" size="large" />
          <Image
            alt="my photo"
            className="w-80 h-80"
            height={200}
            src={QRCode}
            width={200}
          />
          <p>Отсканируйте QR-код что бы добавить меня в контакты</p>
        </div>
      </div>
    </div>
  );
}

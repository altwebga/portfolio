import { Metadata } from "next";
import Image from "next/image";
import { SocialLinks } from "@/components/shared/social-links";
import { CallAction } from "@/components/shared/call-action";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контакты частного вебмастера в Горно-Алтайске. Разработка сайтов, продвижение, SEO оптимизация.",
  keywords:
    "разработка сайтов, заказать, мобильное приложение, продвижение сайтов, поддержка, обслуживание, создание сайтов, seo, seo оптимизация",
  openGraph: {
    title: "SEOMIX",
    description: "Разработка и продвижение сайтов.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    siteName: "SEOMIX",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "ru",
  },
};

export default function ContactPage() {
  return (
    <section>
      <h1>Контакты</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mt-8">
          <p>
            Я не публикую номер телефона т.к. не хочу попасть в базу спам
            звонков. Вы можете легко получить его перейдя в любой из моих
            социальных аккаунтов.
          </p>
          <SocialLinks />
          <CallAction />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/qrcode.min.svg"
            alt="qrcode"
            width={200}
            height={200}
            className="w-96 h-96 shadow-md"
          />
          <p>Отсканируйте QR-код что-бы добавить меня в контакты</p>
        </div>
      </div>
    </section>
  );
}

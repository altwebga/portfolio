import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/container/container";
import { TextAnimate } from "@/components/ui/text-animate";
import { socialLinks } from "@/config/social-links";
import { ContactForm } from "@/components/form/contact-form";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с нами для обсуждения проекта и оценки стоимости.",
  openGraph: {
    title: "Контакты",
    description: "Свяжитесь с нами для обсуждения проекта и оценки стоимости.",
    images: [
      {
        url: "/img/og/contact.png",
        width: 1200,
        height: 630,
        alt: "Контакты",
      },
    ],
  },
};

const text = {
  title: "Контакты",
  subTitle:
    "Свяжитесь с нами — обсудим ваш проект и подберём оптимальное решение.",
};

export default function ContactPage() {
  return (
    <Container className="mt-20">
      <h1>{text.title}</h1>
      <TextAnimate animation="blurIn" as="p">
        {text.subTitle}
      </TextAnimate>
      <div className="flex flex-col md:flex-row gap-4 my-8">
        <div className="w-full md:w1/2 space-y-8">
          <div className="grid grid-cols-3 gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition hover:opacity-100"
              >
                <span className="flex items-center gap-2">
                  <Image
                    unoptimized
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                  {item.title}
                </span>
              </a>
            ))}
          </div>
          <ContactForm />
        </div>
        <div className="w-full md:w1/2">
          <figure>
            <Image
              src={"/img/qrcode.min.svg"}
              alt="qrcode"
              width={460}
              height={460}
              className="aspect-square"
              loading="eager"
            />
            <figcaption className="mt-2">
              Отсканируйте QR-код, что бы добавить нас в контакты
            </figcaption>
          </figure>
        </div>
      </div>
    </Container>
  );
}

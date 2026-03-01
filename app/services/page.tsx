import type { Metadata } from "next";
import { getContent } from "@/actions/get-content";
import { Container } from "@/components/container/container";
import { DirectusImage } from "@/components/shared/directus-image";
import { MagicCard } from "@/components/ui/magic-card";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Услуги веб-студии",
  description:
    "Разработка сайтов, SEO, дизайн интерфейсов и поддержка проектов.",
  openGraph: {
    title: "Услуги веб-студии",
    description:
      "Разработка сайтов, SEO, дизайн интерфейсов и поддержка проектов.",
    images: [
      {
        url: "/img/og/services.png",
        width: 1200,
        height: 630,
        alt: "Услуги веб-студии",
      },
    ],
  },
};

const text = {
  title: "Наши услуги",
  subTitle:
    "Полный комплекс услуг для быстрого старта вашего бизнеса в интернете.",
};

export default async function ServicesPage() {
  const services = await getContent({ content_type: "service" });
  return (
    <Container className="mt-20">
      <h1>{text.title}</h1>
      <TextAnimate animation="blurIn" as="p">
        {text.subTitle}
      </TextAnimate>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        {services.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.id}>
            <MagicCard
              className="p-4 rounded-md shadow-md min-h-full"
              key={service.id}
            >
              <DirectusImage
                url={service.cover_image || "/img/no-image.png"}
                alt={service.title}
                width={600}
                height={600}
                loading="lazy"
              />
              <div className="px-4">
                <h3>{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-5">
                  {service.short_description || ""}
                </p>
              </div>
            </MagicCard>
          </Link>
        ))}
      </div>
    </Container>
  );
}

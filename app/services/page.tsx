import type { Metadata } from "next";
import { getPublishedServicesList } from "@/actions/get-content";
import { Container } from "@/components/container/container";
import { DirectusImage } from "@/components/shared/directus-image";
import { MagicCard } from "@/components/ui/magic-card";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const services = await getPublishedServicesList();
  return (
    <Container className="mt-20">
      <h1>{text.title}</h1>
      <TextAnimate animation="blurIn" as="p">
        {text.subTitle}
      </TextAnimate>
      <Carousel className="w-full">
        <CarouselContent className="p-4">
          {services.map((service) => (
            <CarouselItem
              key={service.id}
              className="pl-1 md:basis-1/3 lg:basis-1/4 transition delay-50 duration-150 hover:-translate-2"
            >
              <Link href={`/services/${service.slug}`}>
                <MagicCard className="p-4 rounded-md shadow-md min-h-full">
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
                      {service.short_content || ""}
                    </p>
                  </div>
                </MagicCard>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0" />
        <CarouselNext className="absolute right-0" />
      </Carousel>
    </Container>
  );
}

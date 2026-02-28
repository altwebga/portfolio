import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";
import { DirectusImage } from "../shared/directus-image";
import Link from "next/link";
import { Container } from "../container/container";
import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingContentType,
  SectionHeadingTitle,
} from "../ui/section-heading";
import { getContent } from "@/actions/get-content";

const text = {
  subTitle: "Наши услуги",
  title:
    "Полный спектр решений для быстрого и эффективного старта вашего бизнеса в интернете",
  description:
    "Разрабатываем современные сайты с продуманной структурой и дизайном, настраиваем контекстную рекламу в Яндекс Директ, занимаемся SEO-продвижением и аналитикой. Помогаем привлекать клиентов, увеличивать продажи и усиливать присутствие бренда в сети.",
};

export async function OurServices() {
  const services = await getContent({ content_type: "service" });

  return (
    <Container className="my-32">
      <SectionHeading alignment="left" className="md:ml-40">
        <SectionHeadingContentType>{text.subTitle}</SectionHeadingContentType>
        <SectionHeadingTitle>{text.title}</SectionHeadingTitle>
        <SectionHeadingBody>{text.description}</SectionHeadingBody>
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
        {services.slice(0, 4).map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="transition delay-50 duration-150 hover:-translate-2"
          >
            <MagicCard className="p-4 rounded-md shadow-md min-h-full">
              <DirectusImage
                url={service.cover_image || "/img/no-image.png"}
                alt={service.title}
                width={600}
                height={600}
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
      <div className="flex justify-end">
        <Button asChild size={"lg"} className="min-w-52">
          <Link href={"/services"}>Все услуги</Link>
        </Button>
      </div>
    </Container>
  );
}

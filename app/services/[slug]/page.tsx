import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentItem } from "@/actions/get-content";
import { Markdown } from "@/components/shared/markdown";
import { DirectusImage } from "@/components/shared/directus-image";
import { CallbackRequestForm } from "@/components/form/callback-request-form";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarContainer } from "@/components/container/sidebar-conteiner";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getContentItem({ slug });

  if (!service?.seo) {
    return { robots: { index: false, follow: false } };
  }

  const ogUrl = service.seo.og_image
    ? `${process.env.ASSETS}/${service.seo.og_image}`
    : undefined;

  return {
    title: service.seo.title,
    description: service.seo.meta_description,
    openGraph: {
      images: ogUrl
        ? [{ url: ogUrl, width: 1200, height: 630, alt: service.seo.title }]
        : undefined,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const service = await getContentItem({ slug });
  if (!service) notFound();

  return (
    <SidebarContainer
      sidebar={
        <DirectusImage
          url={service.cover_image || ""}
          alt={service.title}
          width={600}
          height={600}
          loading="eager"
          className="px-4 rounded-md"
        />
      }
    >
      <h1 className="mb-4">{service.title}</h1>
      <Markdown markdown={service.description || ""} />
      <Card className="my-8">
        <CardHeader>
          <CardTitle>
            <h3>Есть вопросы по услуге?</h3>
          </CardTitle>
          <CardDescription>
            <p className="max-w-2xl">
              Оставьте заявку, и мы свяжемся с вами, чтобы проконсультировать,
              уточнить детали задачи и предложить оптимальное решение под ваши
              цели.
            </p>
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <CallbackRequestForm textAction="Получить консультацию" />
        </CardFooter>
      </Card>
    </SidebarContainer>
  );
}

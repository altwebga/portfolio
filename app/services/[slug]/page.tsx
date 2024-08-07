import type { Metadata } from "next";

import { Image } from "@nextui-org/image";

import { title } from "@/components/primitives";
import { CallToAction } from "@/components/CallToAction";
import { getService } from "@/config/api";

// Функция для получения данных сервиса
async function fetchServiceData(slug: string) {
  return await getService(slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = await fetchServiceData(params.slug);

  return {
    title: service.title.rendered,
    description: service.excerpt.rendered,
    openGraph: {
      title: service.title.rendered,
      description: service.excerpt.rendered,
      images: service.featured_media_url,
    },
  };
}

export default async function SingleServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await fetchServiceData(params.slug);

  return (
    <div className="py-8">
      <h1 className={title()}>{service.title.rendered}</h1>
      <div className="flex flex-col-reverse md:flex-row gap-4 py-6 justify-between">
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: service.excerpt.rendered }}
            className="max-w-2xl"
          />
          <div
            dangerouslySetInnerHTML={{ __html: service.content.rendered }}
            className="max-w-2xl"
          />
        </div>
        <Image src={service.featured_media_url} width={400} />
      </div>
      <CallToAction />
    </div>
  );
}

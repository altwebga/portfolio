import Image from "next/image";
import { Metadata } from "next";
import { getService } from "@/config/fetch";

async function getServiceData(slug: string) {
  return await getService(slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = await getServiceData(params.slug);
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

export default async function ServiceSinglePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceData(params.slug);

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-8 justify-center">
      <div>
        <h1 className="py-8">{service.title.rendered}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: service.content.rendered }}
          className="space-y-4"
        />
      </div>
      <Image
        alt={service.title.rendered}
        className="object-contain"
        height={500}
        src={service.featured_media_url}
        width={500}
      />
    </div>
  );
}

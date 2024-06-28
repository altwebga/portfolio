import { Image } from "@nextui-org/image";
import { title } from "@/components/primitives";
import { Portfolio } from "@/types";

async function getService(slug: string): Promise<Portfolio> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/services?slug=${slug}&_fields=id,title,slug,featured_media,content,excerpt,featured_media_url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data[0];
}

export default async function SingleServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getService(params.slug);

  return (
    <div className="py-4">
      <div className="flex flex-row gap-2">
        <Image
          alt="Изображение услуги"
          src={service.featured_media_url}
          width={80}
        />
        <div>
          <h1 className={title()}>{service.title.rendered}</h1>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: service.content.rendered }}
        className="py-4 max-w-4xl"
      />
      <div className="w-full text-right py-6"></div>
    </div>
  );
}

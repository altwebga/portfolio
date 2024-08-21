import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { getCase } from "@/config/fetch";
import { CallAction } from "@/components/call-action";

async function getCaseData(slug: string) {
  return await getCase(slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const caseData = await getCaseData(params.slug);
  const descriptionText = caseData.content.rendered
    .replace(/<\/?[^>]+(>|$)/g, "") // Удаляем HTML теги
    .substring(0, 100); // Обрезаем до 100 символов
  return {
    title: caseData.title.rendered,
    description: descriptionText,
    openGraph: {
      title: caseData.title.rendered,
      description: descriptionText,
      images: caseData.featured_media_url,
    },
  };
}

export default async function SinglePortfolioPage({
  params,
}: {
  params: { slug: string };
}) {
  const caseData = await getCase(params.slug);

  return (
    <div>
      <div className="flex gap-4 items-center w-full">
        <Image
          className="aspect-square"
          height={100}
          src={caseData.logo_url}
          width={100}
          alt="Логотип"
        />
        <div>
          <h1>{caseData.title.rendered}</h1>
          <span className="text-sm md:text-xl">
            {caseData.acf.businessCategory}
          </span>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: caseData.content.rendered }}
        className="max-w-5xl my-8"
      />
      <div className="w-full text-right">
        <Button asChild className="w-48" variant="default">
          <Link href={caseData.acf.website} target="_blank" rel="noreferrer">
            Посмотреть сайт
          </Link>
        </Button>
      </div>
      <div className="w-full mt-8 border border-gray-500 p-2 rounded-md mb-8">
        <iframe
          allowFullScreen
          allow="clipboard-write; autoplay"
          className="w-full aspect-video"
          src={`https://rutube.ru/play/embed/${caseData.acf.rutube}/`}
          title={caseData.title.rendered}
        />
      </div>
      <CallAction />
    </div>
  );
}

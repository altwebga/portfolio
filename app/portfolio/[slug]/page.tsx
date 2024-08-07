import type { Metadata } from "next";

import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import { RuTubePlayer } from "@/components/RuTubePlayer";
import { CallToAction } from "@/components/CallToAction";
import { title } from "@/components/primitives";
import { getCase } from "@/config/api";

// Функция для получения данных сервиса
async function fetchPortfolioData(slug: string) {
  return await getCase(slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = await fetchPortfolioData(params.slug);

  return {
    title: service.title.rendered,
    description: `Разработка сайта ${service.title.rendered}`,
    openGraph: {
      title: service.title.rendered,
      description: `Разработка сайта ${service.title.rendered}`,
      images: service.featured_media_url,
    },
  };
}

export default async function SinglePortfolioPage({
  params,
}: {
  params: { slug: string };
}) {
  const portfolio = await fetchPortfolioData(params.slug);

  return (
    <div className="py-8">
      <div className="flex flex-row gap-2">
        <Image alt="Логотип" src={portfolio.logo_url} width={80} />
        <div>
          <h1 className={title()}>{portfolio.title.rendered}</h1>
          <p>{portfolio.acf.businessCategory}</p>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: portfolio.content.rendered }}
        className="py-4 max-w-4xl"
      />
      <div className="w-full text-right py-6">
        <Link
          isBlock
          isExternal
          showAnchorIcon
          color="success"
          href={portfolio.acf.website}
        >
          Посмотреть сайт
        </Link>
      </div>

      <RuTubePlayer videoId={portfolio.acf.rutube} />
      <div className="py-8">
        <CallToAction />
      </div>
    </div>
  );
}

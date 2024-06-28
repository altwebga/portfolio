// app/portfolio/[slug]/page.tsx
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { RuTubePlayer } from "@/components/RuTubePlayer";
import { CallToAction } from "@/components/CallToAction";
import { title } from "@/components/primitives";

interface Portfolio {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  acf: {
    logo: number;
    businessCategory: string;
    website: string;
    rutube: string;
    release: string;
    youtube: string;
  };
}

interface Media {
  source_url: string;
}

async function getCase(slug: string): Promise<Portfolio> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio?slug=${slug}&_fields=id,title,content,slug,featured_media,acf`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data[0];
}

async function getMedia(id: number): Promise<Media> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/media/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch media");
  }

  return res.json();
}

export default async function SinglePortfolioPage({
  params,
}: {
  params: { slug: string };
}) {
  const portfolio = await getCase(params.slug);
  const featuredMedia = await getMedia(portfolio.featured_media);
  const logoMedia = await getMedia(portfolio.acf.logo);

  return (
    <div className="py-4">
      <div className="flex flex-row gap-2">
        <Image alt="Логотип" src={logoMedia.source_url} width={80} />
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

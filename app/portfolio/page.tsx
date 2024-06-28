import { title } from "@/components/primitives";
import { PortfolioCard } from "@/components/PortfolioCard";

async function getCases() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio?_fields=id,title,slug,featured_media,acf`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getImage(id: number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/media/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PortfolioPage() {
  const data = await getCases();

  const imagePromises = data.map(async (item: any) => {
    const featuredMedia = item.featured_media
      ? await getImage(item.featured_media)
      : null;
    const logo = item.acf.logo ? await getImage(item.acf.logo) : null;

    return {
      ...item,
      featuredMediaUrl: featuredMedia ? featuredMedia.source_url : null,
      logoUrl: logo ? logo.source_url : null,
      businessCategory: item.acf.businessCategory,
    };
  });

  const portfolioWithImages = await Promise.all(imagePromises);

  return (
    <div className="py-4">
      <h1 className={title()}>Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioWithImages.map((item: any) => (
          <PortfolioCard
            slug={item.slug}
            key={item.id}
            title={item.title.rendered}
            logo={item.logoUrl}
            image={item.featuredMediaUrl}
            businessCategory={item.businessCategory} // Используем правильное поле
          />
        ))}
      </div>
    </div>
  );
}

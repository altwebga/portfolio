import { title } from "@/components/primitives";
import { PortfolioCard } from "@/components/PortfolioCard";
import NoImage from "@/public/image/image not found.webp";

async function getCases() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio?_fields=id,title,slug,featured_media,acf,featured_media_url,logo_url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PortfolioPage() {
  const data = await getCases();

  const portfolioWithImages = data.map((item: any) => ({
    ...item,
    featuredMediaUrl: item.featured_media_url || NoImage.src,
    logoUrl: item.logo_url || NoImage.src,
    businessCategory: item.acf.businessCategory,
  }));

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
            businessCategory={item.businessCategory}
          />
        ))}
      </div>
    </div>
  );
}

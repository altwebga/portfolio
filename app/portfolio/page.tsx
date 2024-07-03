import { title } from "@/components/primitives";
import { PortfolioCard } from "@/components/PortfolioCard";
import NoImage from "@/public/image/image_not_found.webp";
import { getCases } from "@/config/api";
import { Portfolio } from "@/types";

export default async function PortfolioPage() {
  const data: Portfolio[] = await getCases();

  const portfolioWithImages = data.map((item: Portfolio) => ({
    ...item,
    featuredMediaUrl: item.featured_media_url || NoImage.src,
    logoUrl: item.logo_url || NoImage.src,
    businessCategory: item.acf.businessCategory,
  }));

  return (
    <div className="py-8">
      <h1 className={title()}>Мои работы</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {portfolioWithImages.map((item: any) => (
          <PortfolioCard
            key={item.id}
            businessCategory={item.businessCategory}
            image={item.featuredMediaUrl}
            logo={item.logoUrl}
            slug={item.slug}
            title={item.title.rendered}
          />
        ))}
      </div>
    </div>
  );
}

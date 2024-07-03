// app/services/page.tsx
import { title } from "@/components/primitives";
import { ServicesCard } from "@/components/ServicesCard";
import { Service } from "@/types";
import NoImage from "@/public/image/image_not_found.webp";
import { getServices } from "@/config/api"; // Импортируем функцию из нового файла

export default async function ServicesPage() {
  const data: Service[] = await getServices();

  const servicesWithImages = data.map((service: Service) => ({
    ...service,
    featuredMediaUrl: service.featured_media_url || NoImage.src,
  }));

  return (
    <div className="py-4">
      <h1 className={title()}>Мои услуги</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        {servicesWithImages.map((service) => (
          <ServicesCard
            key={service.id}
            excerpt={service.excerpt.rendered}
            image={service.featuredMediaUrl}
            slug={service.slug}
            title={service.title.rendered}
          />
        ))}
      </div>
    </div>
  );
}

import { title } from "@/components/primitives";
import { ServicesCard } from "@/components/ServicesCard";
import { Service } from "@/types";
import NoImage from "@/public/image/image_not_found.webp";

async function getServices(): Promise<Service[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/services?_fields=id,title,slug,featured_media,excerpt,featured_media_url`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

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
            title={service.title.rendered}
            excerpt={service.excerpt.rendered}
            slug={service.slug}
            image={service.featuredMediaUrl}
          />
        ))}
      </div>
    </div>
  );
}

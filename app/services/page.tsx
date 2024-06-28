import { title } from "@/components/primitives";
import { ServicesCard } from "@/components/ServicesCard";
import { Service } from "@/types";
import NoImage from "@/public/image/image not found.webp";

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
    <div>
      <h1 className={title()}>Services</h1>
      <div className="services-container">
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

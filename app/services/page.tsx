// app/services/page.tsx
import type { Metadata } from "next";

import { title } from "@/components/primitives";
import { ServicesCard } from "@/components/ServicesCard";
import { Service } from "@/types";
import NoImage from "@/public/image/image_not_found.webp";
import { getServices } from "@/config/api";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Профессиональные услуги по разработке и продвижению сайтов. Создание современных и эффективных веб-ресурсов, SEO-оптимизация и маркетинг.",
  keywords:
    "разработка сайтов, продвижение сайтов, создание веб-ресурсов, SEO-оптимизация, веб-дизайн, интернет-маркетинг",
};

export default async function ServicesPage() {
  const { services } = await getServices();

  const servicesWithImages = services.map((service: Service) => ({
    ...service,
    featuredMediaUrl: service.featured_media_url || NoImage.src,
  }));

  return (
    <div className="py-8">
      <h1 className={title()}>Мои услуги</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        {servicesWithImages.map((service) => (
          <ServicesCard
            key={service.id}
            excerpt={service.excerpt.rendered}
            image={service.featuredMediaUrl}
            price={service.acf.price}
            slug={service.slug}
            title={service.title.rendered}
          />
        ))}
      </div>
    </div>
  );
}

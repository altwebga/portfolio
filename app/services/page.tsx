import { Metadata } from "next";
import { ServicesCard } from "@/components/services-card";
import { getServices } from "@/config/fetch";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Предлагаю полный спектр услуг по разработке и продвижению сайтов. Независимо от масштаба проекта, будь то небольшой лендинг или крупный корпоративный сайт",
};

export default async function ServicesPage() {
  const { services } = await getServices();

  return (
    <div>
      <h1>Услуги</h1>
      <p>
        Я предлагаю полный спектр услуг по разработке и продвижению сайтов.
        Независимо от масштаба проекта, будь то небольшой лендинг или крупный
        корпоративный сайт, я готов создать уникальный дизайн и обеспечить его
        высокую производительность. Моей целью является помочь вашему бизнесу
        достичь успеха в онлайн-пространстве через эффективные маркетинговые
        стратегии и качественную техническую реализацию.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        {services.map((item) => (
          <ServicesCard
            key={item.id}
            excerpt={item.excerpt.rendered}
            image={item.featured_media_url}
            price={item.acf.price}
            slug={item.slug}
            title={item.title.rendered}
          />
        ))}
      </div>
    </div>
  );
}

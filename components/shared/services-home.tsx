import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const serviceList = [
  {
    title: "Разработка сайтов",
    description:
      "Создаю современные и функциональные сайты, которые отвечают потребностям бизнеса. От лендингов до сложных интернет-магазинов — я разрабатываю уникальные решения с адаптивным дизайном, удобной навигацией и высокой скоростью загрузки. Мои сайты помогают привлекать клиентов и увеличивать продажи.",
  },
  {
    title: "Продвижение сайтов",
    description:
      "Обеспечиваю рост позиций сайта в поисковых системах с помощью комплексного SEO-продвижения. Я работаю над технической оптимизацией, улучшением контента и повышением видимости ресурса. Моя цель — привлечь целевой трафик и увеличить конверсию.",
  },
  {
    title: "Интернет-реклама",
    description:
      "Запускаю эффективные рекламные кампании в поисковых системах и социальных сетях. Я настраиваю таргетированную рекламу, которая достигает целевой аудитории и приносит результат. Контролирую бюджет и оптимизирую кампании для максимальной отдачи.",
  },
  {
    title: "SMM-маркетинг",
    description:
      "Развиваю присутствие в социальных сетях, создаю вовлекающий контент и настраиваю рекламные кампании. Я помогаю увеличить узнаваемость бренда, привлекать новых клиентов и укреплять лояльность аудитории через популярные платформы.",
  },
];
export function ServicesHome() {
  return (
    <section className="container mx-auto px-4 min-h-[40vh]]">
      <h2 className="text-4xl md:text-5xl font-bold">Услуги</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-top">
        <div className="flex flex-col gap-4">
          <p>
            Работайте с единым подрядчиком для всех Ваших интернет-активностей.
            Когда ответственность за сайт, продвижение, рекламу и социальные
            сети сосредоточена в одних руках, контроль результатов становится
            максимально прозрачным.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {serviceList.map((service, index) => (
            <div key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
          <Button asChild className="max-w-56">
            <Link href={"/services"}>Все услуги</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

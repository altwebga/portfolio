import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

import { servicesDataType } from "@/config/types";
import SiteImage from "@/public/images/site.svg";
import SeoImage from "@/public/images/seo.svg";
import SupportImage from "@/public/images/support.svg";
import IntegrationImage from "@/public/images/integration.svg";

const servicesData: servicesDataType[] = [
  {
    id: 1,
    title: "Разработка сайтов",
    description:
      "Разрабатываем все виды сайтов: интернет-магазин, корпоративный сайт, лендинг, сайт-визитка",
    image: SiteImage,
  },
  {
    id: 2,
    title: "Продвижение сайтов",
    description:
      "Выводим Ваш сайт на первую страницу Яндекс и Google, выполняя настройки SEO и рекламы",
    image: SeoImage,
  },
  {
    id: 3,
    title: "Интеграция сайтов по API",
    description:
      "Настройка взаимодействия сайта со сторонними системами, в том числе с 1С",
    image: IntegrationImage,
  },
  {
    id: 4,
    title: "Техподдержка",
    description:
      "Возьмем ответственность за работоспособность Вашего сайта 24/7",
    image: SupportImage,
  },
];

export function Services() {
  return (
    <section className="w-full bg-services-bg bg-no-repeat bg-center">
      <div className="container mx-auto py-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center justify-between mb-4">
          <div className="max-w-3xl">
            <h2>Какие услуги я предлагаю</h2>
            <p>
              Работайте с единым подрядчиком для всех Ваших
              интернет-активностей. Когда ответственность за сайт, продвижение,
              рекламу и социальные сети сосредоточена в одних руках, управление
              и результаты становятся максимально простыми и прозрачными
            </p>
          </div>
          <div className="w-full text-right py-4">
            <Button asChild className="w-48" variant="default">
              <Link href="/services">Все услуги</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {servicesData.map((item) => (
            <Card key={item.id} className="shadow-lg p-4">
              <CardContent className="flex flex-col-reverse md:flex-row gap-4 justify-between">
                <Image
                  alt={item.title}
                  className="w-48 h-48"
                  height={200}
                  src={item.image}
                  width={200}
                />
                <div className="p-4">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

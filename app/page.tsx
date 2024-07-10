import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { SpinningCube } from "@/components/SpinningCube";
import { title, subtitle } from "@/components/primitives";
import { Clients } from "@/components/ClientCard";
import { getServices } from "@/config/api";
import { Service } from "@/types";
import { IntegrationChart } from "@/components/IntegrationChart";
import { DevelopmentSteps } from "@/components/DevelopmentSteps";

export default async function Home() {
  const { services } = await getServices();
  const sortedServices = services.sort((a, b) => a.id - b.id);

  return (
    <div className="px-4">
      <section className="bg-hero-grid bg-repeat bg-center h-full">
        <div className="container mx-auto max-w-7xl py-16">
          <div className="flex flex-col md:flex-row items-center md:pt-16">
            <div className="flex-1 space-y-6 md:space-y-8">
              <h1 className={title()}>Разработка и продвижение сайтов</h1>
              <h1 className={title({ color: "violet" })}> в Горно-Алтайске</h1>
              <p className={subtitle({ class: "mt-4" })}>
                Адекватный креатив и технологичные решения для вашего бизнеса.
              </p>
              <div className="flex flex-col md:flex-row gap-4 pt-8">
                <Button
                  as={Link}
                  className="py-2 px-6 text-lg"
                  color="primary"
                  href="/contact"
                  variant="solid"
                >
                  Начать проект
                </Button>
                <Button
                  as={Link}
                  className="py-2 px-6 text-lg"
                  color="default"
                  href="/portfolio"
                  variant="solid"
                >
                  Примеры работ
                </Button>
              </div>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
              <SpinningCube />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl py-12">
        <h2 className={title({ size: "sm" })}>Среди моих клиентов</h2>
        <p className={subtitle()}>Государственные и частные компании</p>
        <div className="py-6">
          <Clients />
        </div>
      </section>

      <section className="container mx-auto max-w-7xl py-12">
        <div>
          <h2 className={title()}>Полный цикл</h2>
          <p className={subtitle()}>Весь спектр услуг для старта в интернете</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            {sortedServices.map((item: Service) => (
              <Link
                key={item.id}
                className="flex flex-row gap-2 items-center bg-white shadow-md p-4 rounded-lg hover:bg-gray-100 transition"
                href={`/services/${item.slug}`}
              >
                <IoMdCheckmarkCircleOutline className="w-6 h-6 text-green-600" />
                <p className="text-xl">{item.title.rendered}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl py-6">
          <h2 className={title()}>Этапы разработки</h2>
          <p className={subtitle()}>Фиксированные сроки и сумма</p>
          <div className="py-6">
            <DevelopmentSteps />
          </div>
        </div>
      </section>

      <section className="py-16 bg-integration-bg bg-no-repeat bg-center h-full">
        <div className="container mx-auto max-w-7xl py-6">
          <div className="flex flex-col md:flex-row gap-8 py-4 items-center justify-between">
            <div className="flex-1 space-y-4">
              <h2 className={title()}>Интеграции</h2>
              <p className={subtitle()}>Один сайт, все каналы продаж.</p>
              <p>
                Сайт может быть использован как мастер-система для хранения
                данных и интеграции с внешними платформами, такими как
                маркетплейсы, социальные сети и CRM и т.д., что позволяет
                управлять процессами централизованно, автоматизировать их,
                улучшить обслуживание клиентов, сэкономить время и ресурсы,
                повысить гибкость, масштабируемость и безопасность данных.
              </p>
            </div>
            <div className="flex-1">
              <IntegrationChart />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { SpinningCube } from "@/components/SpinningCube";
import { title, subtitle } from "@/components/primitives";
import { Clients } from "@/components/ClientCard";
import { getServices } from "@/config/api";
import { Service } from "@/types";
import { IntegrationChart } from "@/components/IntegrationChart";

export default async function Home() {
  const { services } = await getServices();
  const sortedServices = services.sort((a, b) => a.id - b.id);

  return (
    <div className="px-4">
      <section className="bg-hero-grid bg-repeat bg-center h-full">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row items-center md:pt-12">
            <div className="flex-1">
              <h1 className={title()}>Разработка и&nbsp;</h1>
              <h1 className={title({ color: "violet" })}>продвижение&nbsp;</h1>
              <br />
              <h1 className={title()}>сайтов в Горно-Алтайске</h1>
              <p className={subtitle({ class: "mt-4" })}>
                Адекватный креатив и технологичные решения для вашего бизнеса.
              </p>
            </div>
            <div className="flex-1">
              <SpinningCube />
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-6">
            <Button as={Link} color="primary" href="/contact" variant="solid">
              Начать проект
            </Button>
            <Button as={Link} color="default" href="/portfolio" variant="solid">
              Примеры работ
            </Button>
          </div>
          <div className="pt-12">
            <h2>Среди моих клиентов</h2>
            <div className="py-8">
              <Clients />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-6">
        <div>
          <h2 className={title()}>Весь спектр услуг для старта в интернете</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            {sortedServices.map((item: Service) => (
              <Link
                key={item.id}
                className="flex flex-row gap-2 items-center"
                href={`/services/${item.slug}`}
              >
                <IoMdCheckmarkCircleOutline className="w-6 h-6 text-green-600" />
                <p className="text-xl">{item.title.rendered}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-integration-bg bg-no-repeat bg-center h-full">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 py-4 items-center justify-between">
            <div className="flex-1">
              <h2 className={title()}>Интеграции</h2>
              <p className={subtitle()}>Один сайт, все каналы продаж.</p>
              <p className="py-4">
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

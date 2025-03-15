import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Card, CardTitle, CardContent, CardHeader } from "../ui/card";

export const services = [
  {
    title: "Разработка сайтов",
    description: [
      "Создание корпоративных сайтов",
      "Разработка интернет-магазинов",
      "Адаптивная верстка для всех устройств",
      "Интеграция с CRM и платежными системами",
      "Техническая поддержка и обновления",
    ],
    bgGradient: "bg-gradient-to-r from-teal-700 to-cyan-700",
    textColor: "text-white",
  },
  {
    title: "SEO-оптимизация",
    description: [
      "Комплексный аудит сайта",
      "Оптимизация контента и метатегов",
      "Улучшение технической SEO",
      "Построение ссылочной стратегии",
      "Аналитика и отчетность",
    ],
    bgGradient: "bg-gradient-to-r from-cyan-700 to-blue-700",
    textColor: "text-white",
  },
  {
    title: "Дизайн интерфейсов",
    description: [
      "Создание прототипов и макетов",
      "Дизайн пользовательских интерфейсов (UI)",
      "Исследование пользовательского опыта (UX)",
      "Адаптивный дизайн для всех устройств",
      "Тестирование и доработка интерфейсов",
    ],
    bgGradient: "bg-gradient-to-r from-blue-700 to-indigo-700",
    textColor: "text-white",
  },
  {
    title: "Поддержка сайтов",
    description: [
      "Регулярное обновление контента",
      "Техническое обслуживание и мониторинг",
      "Оперативное устранение неполадок",
      "Резервное копирование данных",
      "Консультации по улучшению сайта",
    ],
    bgGradient: "bg-gradient-to-r from-indigo-700 to-purple-700",
    textColor: "text-white",
  },
  {
    title: "Мобильная разработка",
    description: [
      "Создание приложений для iOS и Android",
      "Кроссплатформенная разработка",
      "Интеграция с API и сервисами",
      "Тестирование и оптимизация приложений",
      "Публикация в магазинах приложений",
    ],
    bgGradient: "bg-gradient-to-r from-purple-700 to-pink-700",
    textColor: "text-white",
  },
  {
    title: "Контекстная реклама",
    description: [
      "Настройка Google Ads и Яндекс.Директ",
      "Создание рекламных кампаний",
      "Анализ и оптимизация бюджета",
      "А/B тестирование объявлений",
      "Отчетность и аналитика",
    ],
    bgGradient: "bg-gradient-to-r from-pink-700 to-rose-700",
    textColor: "text-white",
  },
];

export function ServicesHome() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Услуги</h2>
      <div className="w-full flex flex-col md:flex-row gap-4 md:items-center justify-between py-4">
        <p>
          Каждый проект уникален, каждый набор услуг будет подобран под вашу
          конкретную ситуацию и задачи.
        </p>
        <Button variant="secondary" size="lg" className="min-w-56" asChild>
          <Link href={"/services"}>Все услуги</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
        {services.map((service, index) => (
          <Card
            key={index}
            className={cn(
              service.bgGradient,
              service.textColor,
              "shadow-md py-4 md:p-8"
            )}
          >
            <CardHeader>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {service.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

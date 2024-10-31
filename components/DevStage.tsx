import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Договор и ТЗ",
    description:
      "Составляем договор, который включает бюджет, сроки и условия. Делаем подробное описание требований и функционала веб-приложения в виде ТЗ.",
  },
  {
    number: "02",
    title: "Анализ и планирование",
    description:
      "Изучаем требования, определяем цели и задачи, собираем и анализируем информацию. Создаем детальный план проекта.",
  },
  {
    number: "03",
    title: "Проектирование",
    description:
      "Разрабатываем архитектуру приложения, выбираем технологии и инструменты. Создаем схему базы данных и проектируем пользовательский интерфейс (UI/UX).",
  },
  {
    number: "04",
    title: "Разработка",
    description:
      "Пишем код для фронтенда и бэкенда. Интегрируем пользовательский интерфейс с серверной частью, настраиваем базу данных. Реализуем функциональность и обеспечиваем безопасность.",
  },
  {
    number: "05",
    title: "Тестирование",
    description:
      "Проводим всестороннее тестирование, включая юнит-тесты, интеграционные и нагрузочные тесты. Обнаруживаем и исправляем ошибки.",
  },
  {
    number: "06",
    title: "Развертывание и поддержка",
    description:
      "Переносим приложение в рабочую среду, настраиваем серверы и инфраструктуру, разворачиваем базу данных. Мониторим работу, оперативно решаем проблемы, обновляем и улучшаем функциональность.",
  },
];

export function DevStage() {
  return (
    <section className="mt-16">
      <h2>Этапы разработки</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
        {steps.map((step, index) => (
          <Card key={index} className="shadow-lg p-4 relative">
            <CardHeader>
              <CardTitle>{step.title}</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <p>{step.description}</p>
            </CardContent>
            <span className="text-[12rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500/10">
              {step.number}
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

// Словарь для сопоставления сегментов с названиями страниц
const segmentToNameMap: Record<string, string> = {
  "": "Главная",
  services: "Услуги",
  "web-development": "Разработка сайтов",
  seo: "SEO-продвижение",
  portfolio: "Портфолио",
  contact: "Контакты",
  blog: "Блог",
};

export function BreadcrumbWithCustomSeparator() {
  const segments = useSelectedLayoutSegments();

  // Функция для получения названия страницы по сегменту
  const getPageName = (segment: string) => {
    return segmentToNameMap[segment] || segment; // Если название не найдено, вернуть сам сегмент
  };
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem key="home">
          <BreadcrumbLink asChild>
            <Link href={"/"}>{getPageName("")}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => (
          <>
            <BreadcrumbSeparator key={`separator-${index}`} />
            <BreadcrumbItem key={index}>
              {index === segments.length - 1 ? (
                <span>{getPageName(segment)}</span>
              ) : (
                <BreadcrumbLink
                  href={`/${segments.slice(0, index + 1).join("/")}`}
                >
                  {getPageName(segment)}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

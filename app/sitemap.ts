import { MetadataRoute } from "next";

import { navLinks } from "@/config/site";
import { getServices, getCases, getPosts } from "@/config/fetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error(
      "NEXT_PUBLIC_BASE_URL is not defined in the environment variables"
    );
  }

  // Получение данных через API
  const servicesData = await getServices();
  const casesData = await getCases();
  const postsData = await getPosts();

  // Главная страница
  const mainPage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1.0,
  };

  // Статические страницы
  const sitePages = navLinks.map((page) => ({
    url: `${baseUrl}${page.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Динамические страницы услуг
  const dynamicServicePages = servicesData.services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Динамические страницы портфолио
  const dynamicPortfolioPages = casesData.map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Динамические страницы блога
  const dynamicPostPages = postsData.posts.map((item) => ({
    url: `${baseUrl}/blog/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    mainPage,
    ...sitePages,
    ...dynamicServicePages,
    ...dynamicPortfolioPages,
    ...dynamicPostPages,
  ];
}

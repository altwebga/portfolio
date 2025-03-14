import { promises as fs } from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { navItems } from "@/lib/nav-items";

// Универсальная функция для получения MDX-файлов из указанной директории
async function getMdxFiles(directoryPath: string) {
  const files = await fs.readdir(directoryPath);
  return files.filter((file) => file.endsWith(".mdx"));
}

// Функция для преобразования файлов в URL-адреса
function generateUrls(files: string[], basePath: string, priority: number) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000";
  return files.map((file) => ({
    url: `${baseUrl}${basePath}/${file.replace(".mdx", "")}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority,
  }));
}

// Функция для создания статических страниц из navItems
function generateStaticPages() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000";

  // Проверяем, что navItems является массивом
  if (!Array.isArray(navItems)) {
    console.error("navItems не является массивом:", navItems);
    return [];
  }

  return navItems.map((item) => ({
    url: `${baseUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));
}

export async function getPages() {
  // Пути к папкам с MDX-файлами
  const directoryPathServices = path.join(process.cwd(), "content/services");
  const directoryPathPortfolio = path.join(process.cwd(), "content/portfolio");
  const directoryPathBlog = path.join(process.cwd(), "content/posts");

  // Получаем MDX-файлы из каждой директории
  const services = await getMdxFiles(directoryPathServices);
  const portfolio = await getMdxFiles(directoryPathPortfolio);
  const blog = await getMdxFiles(directoryPathBlog);

  // Преобразуем файлы в URL-адреса
  const serviceUrls = generateUrls(services, "/services", 0.7);
  const portfolioUrls = generateUrls(portfolio, "/portfolio", 0.7);
  const blogUrls = generateUrls(blog, "/blog", 0.5);

  // Возвращаем все URL-адреса
  return [...serviceUrls, ...portfolioUrls, ...blogUrls];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamicPages = await getPages(); // Динамически сгенерированные страницы
  const staticPages = generateStaticPages(); // Статические страницы из navItems

  return [...staticPages, ...dynamicPages]; // Объединяем статические и динамические страницы
}

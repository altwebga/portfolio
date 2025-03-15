import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Портфолио",
  description:
    "Контакты частного вебмастера в Горно-Алтайске. Разработка сайтов, продвижение, SEO оптимизация.",
  keywords:
    "разработка сайтов, заказать, мобильное приложение, продвижение сайтов, поддержка, обслуживание, создание сайтов, seo, seo оптимизация",
  openGraph: {
    url: `${baseUrl}/contact`,
    siteName: "SEOMIX",
    images: [
      {
        url: `${baseUrl}/images/og/contact.webp`,
        width: 800,
        height: 600,
      },
    ],
  },
};

export default async function PortfolioPage() {
  // Путь к папке с MDX-файлами
  const directoryPath = path.join(process.cwd(), "content/portfolio");

  // Получаем список всех MDX-файлов
  const files = (await fs.readdir(directoryPath)).filter((file) =>
    file.endsWith(".mdx")
  );

  // Динамически импортируем каждый MDX-файл и извлекаем frontmatter
  const portfolio = await Promise.all(
    files.map(async (file) => {
      const { frontmatter } = await import(`@/content/portfolio/${file}`);
      return {
        filename: file,
        frontmatter,
      };
    })
  );

  // Сортируем portfolio по дате created (новые сверху)
  const sortedPortfolio = portfolio.sort((a, b) => {
    return b.frontmatter.created.localeCompare(a.frontmatter.created);
  });

  return (
    <div>
      <h1>Портфолио</h1>
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {sortedPortfolio.map((item) => (
            <Link
              href={`/portfolio/${item.filename.split(".")[0]}`}
              key={item.filename}
            >
              <Card className="transition delay-50 duration-150 ease-in-out hover:-translate-y-1 hover:scale-105">
                <CardHeader>
                  <Image
                    src={item.frontmatter.image}
                    alt={item.frontmatter.title}
                    width={300}
                    height={300}
                    className="aspect-4/3 w-auto h-auto"
                    priority
                  />
                </CardHeader>
                <CardFooter>{item.frontmatter.title}</CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

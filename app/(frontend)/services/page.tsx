import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Card, CardFooter } from "@/components/ui/card";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Профессиональные услуги по разработке сайтов, SEO оптимизации, продвижению и поддержке. Создаем современные сайты и приложения для вашего бизнеса.",
  keywords:
    "разработка сайтов, заказать сайт, мобильное приложение, продвижение сайтов, SEO, SEO оптимизация, поддержка сайтов, создание сайтов, digital агентство",
  openGraph: {
    images: [
      {
        url: `${baseUrl}/images/og/services.webp`,
        width: 800,
        height: 600,
        alt: "Услуги SEOMIX",
      },
    ],
  },
};

export default async function ServicesPage() {
  // Путь к папке с MDX-файлами
  const directoryPath = path.join(process.cwd(), "content/services");

  // Получаем список всех MDX-файлов
  const files = (await fs.readdir(directoryPath)).filter((file) =>
    file.endsWith(".mdx")
  );

  // Динамически импортируем каждый MDX-файл и извлекаем frontmatter
  const services = await Promise.all(
    files.map(async (file) => {
      const { frontmatter } = await import(`@/content/services/${file}`);
      return {
        filename: file,
        frontmatter,
      };
    })
  );
  const sortedServices = services.sort((a, b) => {
    const idA = parseInt(a.frontmatter.id);
    const idB = parseInt(b.frontmatter.id);
    return idA - idB;
  });
  return (
    <div>
      <h1>Мои услуги</h1>
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {sortedServices.map((service) => (
            <Link
              href={`/services/${service.filename.split(".")[0]}`}
              key={service.filename}
            >
              <Card className="relative shadow-md overflow-hidden h-96 transition delay-50 duration-150 ease-in-out hover:-translate-y-1 hover:scale-105">
                {/* Контейнер для изображения */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={
                      service.frontmatter.image || "/images/placeholder.min.svg"
                    }
                    alt={service.frontmatter.title || "Service Image"}
                    fill
                    className="object-cover aspect-square"
                    sizes="(max-width: 768px) 100vw"
                    priority={false}
                    quality={75}
                  />
                </div>
                {/* Размытый футер */}
                <CardFooter className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm px-4 py-6">
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-white font-semibold">
                      {service.frontmatter.title}
                    </h4>
                    {service.frontmatter.price && (
                      <span className="text-white">
                        {service.frontmatter.price}
                      </span>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

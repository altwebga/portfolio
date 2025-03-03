import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { Card, CardFooter } from "@/components/ui/card";

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

  return (
    <div>
      <h1>Наши услуги</h1>
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {portfolio.map((item) => (
            <Link
              href={`/portfolio/${item.filename.split(".")[0]}`}
              key={item.filename}
            >
              <Card className="relative shadow-md overflow-hidden h-96 transition delay-50 duration-150 ease-in-out hover:-translate-y-1 hover:scale-105">
                {/* Контейнер для изображения */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={
                      item.frontmatter.image || "/images/placeholder.min.svg"
                    }
                    alt={item.frontmatter.title || "item Image"}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw"
                    priority={false}
                    quality={75}
                  />
                </div>
                {/* Размытый футер */}
                <CardFooter className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm px-4 py-6">
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-white font-semibold">
                      {item.frontmatter.title}
                    </h4>
                    {item.frontmatter.price && (
                      <span className="text-white">
                        {item.frontmatter.price}
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

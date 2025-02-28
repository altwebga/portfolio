import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { Card, CardFooter } from "@/components/ui/card";

export default async function BlogPage() {
  // Путь к папке с MDX-файлами
  const directoryPath = path.join(process.cwd(), "content/posts");

  // Получаем список всех MDX-файлов
  const files = (await fs.readdir(directoryPath)).filter((file) =>
    file.endsWith(".mdx")
  );

  // Динамически импортируем каждый MDX-файл и извлекаем frontmatter
  const posts = await Promise.all(
    files.map(async (file) => {
      const { frontmatter } = await import(`@/content/posts/${file}`);
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
          {posts.map((post) => (
            <Link
              href={`/blog/${post.filename.split(".")[0]}`}
              key={post.filename}
            >
              <Card className="relative shadow-md overflow-hidden h-96 transition delay-50 duration-150 ease-in-out hover:-translate-y-1 hover:scale-105">
                {/* Контейнер для изображения */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={
                      post.frontmatter.image || "/images/placeholder.min.svg"
                    } // Замените на fallback изображение
                    alt={post.frontmatter.title || "post Image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw"
                    priority={false}
                    quality={75}
                  />
                </div>
                {/* Размытый футер */}
                <CardFooter className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm px-4 py-6">
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-white font-semibold">
                      {post.frontmatter.title}
                    </h4>
                    {post.frontmatter.price && (
                      <span className="text-white">
                        {post.frontmatter.price}
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

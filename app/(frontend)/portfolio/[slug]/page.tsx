import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { RuTubeFrame } from "@/components/shared/rutube-frame";
import { promises as fs } from "fs";
import path from "path";

export default async function SinglePortfolioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post, frontmatter } = await import(
    `@/content/portfolio/${slug}.mdx`
  );

  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <Image
          src={frontmatter.logo}
          alt={frontmatter.title}
          width={100}
          height={100}
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.client_category}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-end">
        <div className="max-w-3xl md:pl-4">
          <Post />
        </div>
        <Button asChild variant="outline" className="mt-4">
          <Link
            href={`${frontmatter.site}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Перейти на сайт
          </Link>
        </Button>
      </div>
      <RuTubeFrame videoId={frontmatter.videoId} title={frontmatter.title} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { frontmatter } = await import(`@/content/portfolio/${slug}.mdx`);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      images: [
        {
          url: frontmatter.image,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}
export async function generateStaticParams() {
  // Путь к папке с MDX-файлами
  const directoryPath = path.join(process.cwd(), "content/portfolio");

  // Получаем список всех MDX-файлов
  const files = (await fs.readdir(directoryPath)).filter((file) =>
    file.endsWith(".mdx")
  );
  return [
    ...files.map((file) => ({
      slug: file.split(".")[0],
    })),
  ];
}

export const dynamicParams = false;

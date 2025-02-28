import { promises as fs } from "fs";
import path from "path";
import "highlight.js/styles/github-dark.css";

export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post, frontmatter } = await import(
    `@/content/posts/${slug}.mdx`
  );

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div className="max-w-3xl pt-4">
        <Post />
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { frontmatter } = await import(`@/content/posts/${slug}.mdx`);
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
  const directoryPath = path.join(process.cwd(), "content/posts");

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

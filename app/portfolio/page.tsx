import fs from "fs";
import path from "path";

import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import matter from "gray-matter";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  logo: string;
}

const Portfolio = async () => {
  let projects: Project[] = [];

  try {
    const files = fs.readdirSync(path.join("content", "portfolio"));

    projects = files.map((filename) => {
      const slug = filename.replace(".mdx", "");
      const markdownWithMeta = fs.readFileSync(
        path.join("content", "portfolio", filename),
        "utf-8",
      );
      const { data } = matter(markdownWithMeta);

      return {
        slug,
        date: data.date || "",
        title: data.title || slug,
        description: data.description || "",
        image: data.image || "",
        logo: data.logo || "",
      };
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error reading portfolio content:", error);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Портфолио</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link key={project.slug} href={`/portfolio/${project.slug}`}>
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-7 border border-gray-400"
              shadow="md"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {project.date}
                </p>
              </CardHeader>
              <Image
                removeWrapper
                alt={project.title}
                className="z-0 w-full h-full object-cover"
                src={project.image}
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="Логотип"
                    className="w-11 h-11 bg-black"
                    src={project.logo}
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">{project.title}</p>
                    <p className="text-tiny text-white/60">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

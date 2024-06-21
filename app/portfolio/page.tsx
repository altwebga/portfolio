import fs from "fs";
import path from "path";

import Link from "next/link";
import matter from "gray-matter";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
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
        title: data.title || slug,
        description: data.description || "",
        image: data.image || "",
      };
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error reading portfolio content:", error);
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Портфолио</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <Link key={project.slug} href={`/portfolio/${project.slug}`}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              {project.image && (
                <img
                  alt={project.title || "Project Image"}
                  className="w-full h-48 object-cover"
                  src={project.image}
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">
                  {project.title || "Untitled Project"}
                </h2>
                <p>{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

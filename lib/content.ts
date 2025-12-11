import { promises as fs } from "fs";
import path from "path";

export async function getSlugs(section: string) {
  const dir = path.join(process.cwd(), "content", section);

  const files = (await fs.readdir(dir)).filter((f) => f.endsWith(".mdx"));

  return files.map((f) => f.replace(/\.mdx$/, ""));
}

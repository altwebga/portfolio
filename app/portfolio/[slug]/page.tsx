import path from "path";
import { promises as fs } from "fs";

import { Metadata } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

import MdxContent from "@/components/MdxContent";
import { RuTubePlayer } from "@/components/RuTubePlayer";
import { title } from "@/components/primitives";

interface PortfolioPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { slug } = params;
  const filePath = path.join("content", "portfolio", `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf-8");
  const { data } = matter(source);

  return {
    title: data.title || "Portfolio",
  };
}

const PortfolioPage = async ({ params }: PortfolioPageProps) => {
  const { slug } = params;
  const filePath = path.join("content", "portfolio", `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf-8");
  const { content, data } = matter(source);
  const mdxSource: MDXRemoteSerializeResult = await serialize(content);

  return (
    <div>
      <h1 className={title()}>{data.title || "Untitled Project"}</h1>
      <MdxContent source={mdxSource} />
      <RuTubePlayer videoId={data.rutube} />
    </div>
  );
};

export default PortfolioPage;

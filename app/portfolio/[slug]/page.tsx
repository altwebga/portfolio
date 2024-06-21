import fs from "fs";
import path from "path";

import { Metadata } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

import MdxContent from "@/components/MdxContent";

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
  const source = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(source);

  return {
    title: data.title || "Portfolio",
  };
}

const PortfolioPage = async ({ params }: PortfolioPageProps) => {
  const { slug } = params;
  const filePath = path.join("content", "portfolio", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);
  const mdxSource: MDXRemoteSerializeResult = await serialize(content);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">
        {data.title || "Untitled Project"}
      </h1>
      {data.image && (
        <img
          alt={data.title || "Project Image"}
          className="w-full h-auto mb-4"
          src={data.image}
        />
      )}
      <MdxContent source={mdxSource} />
    </div>
  );
};

export default PortfolioPage;

import type { Metadata } from "next";

import Link from "next/link";
import { Card, CardBody } from "@nextui-org/card";

import { title } from "@/components/primitives";
import { getPosts } from "@/config/api";
import { Post } from "@/types";

export const metadata: Metadata = {
  title: "Заметки и мысли",
  description:
    "Разработка сайтов в Горно-Алтайске по низким ценам, частный вебмастер.",
};

export default async function BlogPage() {
  const { posts } = await getPosts();

  return (
    <div className="py-8">
      <h1 className={title()}>Заметки и мысли</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {posts.map((item: Post) => (
          <Link key={item.id} href={`/blog/${item.slug}`}>
            <Card>
              <CardBody>
                <h3>{item.title.rendered}</h3>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

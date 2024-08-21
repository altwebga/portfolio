import type { Metadata } from "next";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { getPosts } from "@/config/fetch";
import { Post } from "@/config/types";

export const metadata: Metadata = {
  title: "Заметки и мысли",
  description:
    "Разработка сайтов в Горно-Алтайске по низким ценам, частный вебмастер.",
};

export default async function BlogPage() {
  const { posts } = await getPosts();

  return (
    <div>
      <h1>Заметки и мысли</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 mt-8">
        {posts.map((item: Post) => (
          <Link key={item.id} href={`/blog/${item.slug}`}>
            <Card className="min-h-72">
              <CardHeader>
                <p>
                  {item.category_names ? item.category_names.join(", ") : ""}
                </p>
              </CardHeader>
              <CardContent>
                <h3>{item.title.rendered}</h3>
              </CardContent>
              <Separator className="my-2" />
              <CardFooter>
                <p>{item.tag_names ? item.tag_names.join(", ") : ""}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

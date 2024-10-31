import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/api";
import { Post } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import placeholderImage from "@/public/images/placeholder_image.svg";

export async function BlogCard() {
  const posts: Post[] = await getPosts(2, 12);
  if (!posts) {
    return <h3>Записи не найдены</h3>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
      {posts.map((post: Post) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          <Card className="shadow-lg relative hover:transform hover:scale-105 transition duration-300">
            <CardHeader>
              <Image
                src={post.image_url || placeholderImage}
                alt={post.title.rendered}
                width={300}
                height={200}
                className="w-auto h-auto object-cover aspect-video rounded-md"
              />
            </CardHeader>
            <CardContent>
              <h3>{post.title.rendered}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

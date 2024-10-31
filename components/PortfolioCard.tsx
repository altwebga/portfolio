import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/api";
import { Post } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import placeholderImage from "@/public/images/placeholder_image.svg";

export async function PortfolioCard() {
  const posts: Post[] = await getPosts(3, 21);
  if (!posts) {
    return <h3>услуг не найдено</h3>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
      {posts.map((post: Post) => (
        <Link href={`/portfolio/${post.slug}`} key={post.id}>
          <Card className="shadow-lg relative min-h-80 hover:transform hover:scale-105 transition duration-300">
            <CardHeader>
              <Image
                src={post.image_url || placeholderImage}
                alt={post.title.rendered}
                width={300}
                height={300}
                className="w-auto h-auto object-cover rounded-md"
              />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Image
                  src={post.acf?.logo || placeholderImage}
                  alt={post.title.rendered}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-lg"
                />
                <div>
                  <h3>{post.title.rendered}</h3>
                  <span className="text-sm">{post.acf?.businessCategory}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

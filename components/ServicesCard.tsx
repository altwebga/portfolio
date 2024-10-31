import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/api";
import { Post } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import placeholderImage from "@/public/images/placeholder_image.svg";

export async function ServicesCard() {
  const posts: Post[] = await getPosts(4, 12);
  if (!posts) {
    return <h3>услуг не найдено</h3>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
      {posts.map((post: Post) => (
        <Link href={`/services/${post.slug}`} key={post.id}>
          <Card className="shadow-lg relative min-h-80 hover:transform hover:scale-105 transition duration-300">
            <CardHeader>
              <Image
                src={post.image_url || placeholderImage}
                alt={post.title.rendered}
                width={300}
                height={300}
                className="w-auto h-auto aspect-square object-cover rounded-md"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{post.title.rendered}</CardTitle>
            </CardContent>
            <CardFooter>
              <Badge variant="outline" className="p-2 text-green-600">
                {post.acf?.price}
              </Badge>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}

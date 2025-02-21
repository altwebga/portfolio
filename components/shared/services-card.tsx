"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPostsByType } from "@/actions/get-posts";
import { Post } from "@prisma/client";
import { Card, CardFooter } from "@/components/ui/card";

export function ServicesCard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPostsByType("SERVICE");
        setPosts(data);
      } catch {
        setError("Не удалось загрузить данные");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/services/${post.slug}`}>
            <Card className="relative shadow-md overflow-hidden h-96 transition delay-50 duration-150 ease-in-out hover:-translate-y-1 hover:scale-105">
              {/* Контейнер для изображения */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={post.image || "/placeholder-image.jpg"} // Замените на fallback изображение
                  alt={post.title || "Service Image"}
                  fill // Заполняет весь родительский контейнер
                  className="object-cover"
                />
              </div>
              {/* Размытый футер */}
              <CardFooter className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm px-4 py-6">
                <div className="flex justify-between items-center w-full">
                  <h4 className="text-white font-semibold">{post.title}</h4>
                  {post.price && (
                    <span className="text-white">{post.price}</span>
                  )}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

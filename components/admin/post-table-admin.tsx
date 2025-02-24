"use client";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@prisma/client";
import { useState, useEffect } from "react";
import { getPosts } from "@/actions/get-posts";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

export function PostTableAdmin() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getPosts();
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
    <Table>
      <TableCaption>Опубликованные посты</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Фото</TableHead>
          <TableHead>Заголовок</TableHead>
          <TableHead>Тип поста</TableHead>
          <TableHead>Обновлено</TableHead>
          <TableHead>Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell>
              <Image
                src={post.image || "/images/placeholder_image.svg"}
                alt={post.title || "Image"}
                width={50}
                height={50}
                className="rounded-full"
              />
            </TableCell>
            <TableCell className="font-medium">{post.title}</TableCell>
            <TableCell>{post.postType}</TableCell>
            <TableCell>{new Date(post.updatedAt).toLocaleString()}</TableCell>
            <TableCell>
              <Link href={`/admin/posts/edit/${post.slug}`}>
                <Button variant={"outline"}>Редактировать</Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Всего</TableCell>
          <TableCell className="text-right">{posts.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

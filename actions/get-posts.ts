"use server";
import { PostType, Post } from "@prisma/client";
import { prisma } from "@/prisma";

export async function getPosts(): Promise<Post[]> {
  try {
    return await prisma.post.findMany();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    return await prisma.post.findUnique({ where: { slug } });
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error("Failed to fetch post");
  }
}

export async function getPostsByType(postType: PostType): Promise<Post[]> {
  try {
    const posts = await prisma.post.findMany({
      where: { postType },
    });
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
}

export async function getPostsByTypeAndSlug(postType: PostType, slug: string) {
  try {
    return await prisma.post.findMany({ where: { postType, slug } });
  } catch (error) {
    console.log(error);
  }
}

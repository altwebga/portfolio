"use server";
import { prisma } from "@/prisma";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

"use server";
import { prisma } from "@/prisma";
import { User } from "@prisma/client";

export async function getUsers(): Promise<User[] | undefined> {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
}

export async function getUser(id: string) {
  try {
    return await prisma.user.findUnique({ where: { id } });
  } catch (error) {
    console.log(error);
  }
}

export async function getUserByEmail(email: string) {
  try {
    return await prisma.user.findUnique({ where: { email } });
  } catch (error) {
    console.log(error);
  }
}

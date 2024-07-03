// config/api.ts
import { Service, Portfolio, Client } from "@/types";

export async function getServices(): Promise<Service[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/services?_fields=id,title,slug,featured_media,excerpt,featured_media_url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getService(slug: string): Promise<Service> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/services?slug=${slug}&_fields=id,title,slug,featured_media,content,excerpt,featured_media_url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data[0];
}

export async function getCases(): Promise<Portfolio[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio?_fields=id,title,slug,featured_media,acf,featured_media_url,logo_url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getCase(slug: string): Promise<Portfolio> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio?slug=${slug}&_fields=id,title,content,slug,featured_media,acf,featured_media_url,logo_url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data[0];
}

export async function getClients(): Promise<Client[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/clients?_fields=id,name,acf,description,client_logo_url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

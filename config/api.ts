import { Service, Portfolio, Client, Post } from "@/types";

const DEFAULT_ITEMS_PER_PAGE = 20; // значение по умолчанию

export async function getServices(
  page: number = 1,
  perPage: number = DEFAULT_ITEMS_PER_PAGE
): Promise<{ services: Service[]; totalPages: number }> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services?_fields=id,title,slug,featured_media,excerpt,featured_media_url,acf&per_page=${perPage}&page=${page}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const services = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "0", 10);

  return { services, totalPages };
}

export async function getService(slug: string): Promise<Service> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services?slug=${slug}&_fields=id,title,slug,featured_media,content,excerpt,featured_media_url,acf`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data[0];
}

export async function getCases(): Promise<Portfolio[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/portfolio?_fields=id,title,slug,featured_media,acf,featured_media_url,logo_url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getCase(slug: string): Promise<Portfolio> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/portfolio?slug=${slug}&_fields=id,title,content,slug,featured_media,acf,featured_media_url,logo_url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data[0];
}

export async function getClients(): Promise<Client[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clients?_fields=id,name,acf,description,client_logo_url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getPosts(
  page: number = 1,
  perPage: number = DEFAULT_ITEMS_PER_PAGE
): Promise<{ posts: Post[]; totalPages: number }> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?_fields=id,title,date,slug,excerpt,categories,tags,category_names,tag_names&per_page=${perPage}&page=${page}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const posts = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "0", 10);

  return { posts, totalPages };
}

export async function getPost(slug: string): Promise<Post> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?slug=${slug}&_fields=id,title,content,date,slug,excerpt,categories,tags,category_names,tag_names`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data[0];
}

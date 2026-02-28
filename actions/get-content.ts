"use server";

import { IContent } from "@/config/types";

const API_URL = process.env.API_URL || "https://localhost:8055";
const TOKEN = process.env.TOKEN || "";

type getContentProps = {
  content_type?: "service" | "article" | "project";
  status?: "draft" | "published" | "archived";
  fields?: string[];
  slug?: string;
};

export async function getContent({
  content_type,
  status = "published",
  fields = [
    "id",
    "title",
    "slug",
    "description",
    "short_description",
    "cover_image",
  ],
}: getContentProps): Promise<IContent[]> {
  try {
    const res = await fetch(
      `${API_URL}/items/content?filter[content_type][_eq]=${content_type}&filter[status][_eq]=${status}&fields=${fields.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch content: ${res.status}`);
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("getContent error:", error);
    return [];
  }
}

export async function getContentItem({
  status = "published",
  slug,
  fields = ["id", "title", "slug", "description", "cover_image"],
}: getContentProps) {
  try {
    const res = await fetch(
      `${API_URL}/items/content?filter[slug][_eq]=${slug}&filter[status][_eq]=${status}&fields=${fields.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch content: ${res.status}`);
    }

    const json = await res.json();
    return json.data[0];
  } catch (error) {
    console.error("getContent error:", error);
    return [];
  }
}

export async function getCustomers() {
  try {
    const res = await fetch(`${API_URL}/items/customers`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch content: ${res.status}`);
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("getCustomers error:", error);
    return [];
  }
}

export async function getTeams() {
  try {
    const res = await fetch(`${API_URL}/items/team?fields=*,education.*`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch content: ${res.status}`);
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("getCustomers error:", error);
    return [];
  }
}

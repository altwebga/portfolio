"use server";

import { cache } from "react";
import directus from "@/lib/directus";
import { readItems, readSingleton } from "@directus/sdk";

// -------------------------
// Articles
// -------------------------

export const getArticlesSEO = cache(async () => {
  return directus.request(
    readItems("articles", {
      fields: ["slug", "seo", "date_created", "date_updated"],
      filter: { status: { _eq: "published" } },
    })
  );
});

export const getArticleBySlug = cache(async (slug: string) => {
  const posts = await directus.request(
    readItems("articles", {
      limit: 1,
      fields: ["title", "content", "cover_image", "seo"],
      filter: {
        slug: { _eq: slug },
        status: { _eq: "published" },
      },
    })
  );

  return posts?.[0] ?? null;
});

export const getPublishedArticlesList = cache(async () => {
  return directus.request(
    readItems("articles", {
      fields: ["slug", "title", "date_created", "id", "cover_image", "seo"],
      sort: ["-date_created"],
      filter: { status: { _eq: "published" } },
    })
  );
});

// -------------------------
// Projects
// -------------------------

export const getProjectsSEO = cache(async () => {
  return directus.request(
    readItems("projects", {
      fields: ["slug", "seo", "date_created", "date_updated"],
      filter: { status: { _eq: "published" } },
    })
  );
});

export const getProjectBySlug = cache(async (slug: string) => {
  const projects = await directus.request(
    readItems("projects", {
      limit: 1,
      fields: [
        "title",
        "content",
        "cover_image",
        "seo",
        "rutube_id",
        "client",
        "site_url",
      ],
      filter: {
        slug: { _eq: slug },
        status: { _eq: "published" },
      },
    })
  );

  return projects?.[0] ?? null;
});

export const getPublishedProjectsList = cache(async () => {
  return directus.request(
    readItems("projects", {
      fields: [
        "slug",
        "title",
        "date_created",
        "id",
        "cover_image",
        "seo",
        "release_date",
      ],
      sort: ["-release_date"],
      filter: { status: { _eq: "published" } },
    })
  );
});

// -------------------------
// Customers
// -------------------------

export const getCustomerById = cache(async (clientId: number) => {
  const items = await directus.request(
    readItems("customers", {
      fields: ["id", "title", "content", "cover_image"],
      filter: { id: { _eq: clientId } },
      limit: 1,
    })
  );

  return items?.[0] ?? null;
});

// -------------------------
// Services
// -------------------------

export const getServicesSEO = cache(async () => {
  return directus.request(
    readItems("services", {
      fields: ["slug", "seo", "date_created", "date_updated"],
      filter: { status: { _eq: "published" } },
    })
  );
});

export const getPublishedServicesList = cache(async () => {
  return directus.request(
    readItems("services", {
      fields: [
        "slug",
        "title",
        "date_created",
        "id",
        "cover_image",
        "seo",
        "short_content",
        "price",
      ],
      sort: ["id"],
      filter: { status: { _eq: "published" } },
    })
  );
});

export const getServiceBySlug = cache(async (slug: string) => {
  const services = await directus.request(
    readItems("services", {
      limit: 1,
      fields: [
        "title",
        "content",
        "cover_image",
        "seo",
        "short_content",
        "price",
      ],
      filter: {
        slug: { _eq: slug },
        status: { _eq: "published" },
      },
    })
  );

  return services?.[0] ?? null;
});

export const getPrivacyPolicy = cache(async () => {
  return directus.request(
    readSingleton("privacy_policy", {
      fields: ["title", "content"],
    })
  );
});

export const getTeams = cache(async () => {
  return directus.request(
    readItems("teams", {
      fields: [
        "title",
        "id",
        "content",
        "position",
        "photo",
        {
          certificates: ["directus_files_id"],
        },
      ],
      sort: ["id"],
      filter: { status: { _eq: "published" } },
    })
  );
});

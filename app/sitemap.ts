import type { MetadataRoute } from "next";
import { menuLinks } from "@/config/menu-links";
import {
  getServicesSEO,
  getProjectsSEO,
  getArticlesSEO,
} from "@/actions/get-content";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://seomix.ru";

// чтобы lastmod у статики не менялся на каждый элемент
const BUILD_TIME = new Date();

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

type SeoSitemap = {
  change_frequency?: string;
  priority?: string;
};

type ItemWithSeo = {
  slug: string;
  seo?: {
    sitemap?: SeoSitemap;
    no_index?: boolean;
  };
  date_created: string;
  date_updated: string | null;
};

const CHANGE_FREQUENCIES: readonly ChangeFrequency[] = [
  "always",
  "hourly",
  "daily",
  "weekly",
  "monthly",
  "yearly",
  "never",
];

function parseChangeFrequency(value?: string): ChangeFrequency {
  if (!value) return "weekly";
  return CHANGE_FREQUENCIES.includes(value as ChangeFrequency)
    ? (value as ChangeFrequency)
    : "weekly";
}

function parsePriority(value?: string): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0.5;
}

function parseLastModified(item?: ItemWithSeo): Date {
  if (!item) return BUILD_TIME; // статика
  return new Date(item.date_updated ?? item.date_created);
}

function buildEntry(
  path: string,
  item?: ItemWithSeo
): MetadataRoute.Sitemap[number] {
  const sitemap = item?.seo?.sitemap;

  return {
    url: `${BASE_URL}${path}`,
    lastModified: parseLastModified(item),
    changeFrequency: parseChangeFrequency(sitemap?.change_frequency),
    priority: parsePriority(sitemap?.priority),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, articles, projects] = await Promise.all([
    getServicesSEO(),
    getArticlesSEO(),
    getProjectsSEO(),
  ]);

  const staticEntries: MetadataRoute.Sitemap = menuLinks.map((link) =>
    buildEntry(link.href)
  );

  const serviceEntries: MetadataRoute.Sitemap = (services ?? [])
    .filter((item: ItemWithSeo) => !item.seo?.no_index)
    .map((item: ItemWithSeo) => buildEntry(`/services/${item.slug}`, item));

  const articleEntries: MetadataRoute.Sitemap = (articles ?? [])
    .filter((item: ItemWithSeo) => !item.seo?.no_index)
    .map((item: ItemWithSeo) => buildEntry(`/blog/${item.slug}`, item));

  const projectEntries: MetadataRoute.Sitemap = (projects ?? [])
    .filter((item: ItemWithSeo) => !item.seo?.no_index)
    .map((item: ItemWithSeo) => buildEntry(`/portfolio/${item.slug}`, item));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...articleEntries,
    ...projectEntries,
  ];
}

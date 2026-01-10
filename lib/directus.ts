import { createDirectus, rest, authentication } from "@directus/sdk";
import {
  Article,
  Project,
  Service,
  Customer,
  Hero,
  Team,
  PrivacyPolicy,
  RequestWebsite,
  TeamFile,
} from "@/config/types";

export interface Schema {
  articles: Article[];
  projects: Project[];
  services: Service[];
  customers: Customer[];
  hero: Hero;
  teams: Team[];
  teams_files: TeamFile[];
  privacy_policy: PrivacyPolicy;
  requests_website: RequestWebsite[];
}

const directusUrl = process.env.ENDPOINT ?? "http://localhost:8055";
const token = process.env.TOKEN ?? "";

const directus = createDirectus<Schema>(directusUrl)
  .with(authentication())
  .with(
    rest({
      onRequest: (options) => {
        const method = (options.method ?? "GET").toUpperCase();
        if (method === "GET") {
          return { ...options, revalidate: 86400 };
        }
        return options;
      },
    })
  );

if (token) {
  await directus.setToken(token);
}

export default directus;

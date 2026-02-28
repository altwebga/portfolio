export interface IContent {
  id: string;
  sort: number | null;
  status: "draft" | "published" | "archived";
  user_created: string;
  date_created: string;
  user_updated: string | null;
  date_updated: string | null;
  title: string;
  slug: string;
  content_type: "article" | "project" | "service" | "customers";
  description: string;
  short_description: string | null;
  cover_image: string;
  client: string | null;
  release_date: string | null;
  rutube_id: string | null;
  site_url: string | null;
  tags: string[] | null;
  price: string | null;
  seo: ISeo;
  logo: string;
}

export interface ISeo {
  title: string;
  meta_description: string;
  og_image?: string;
  additional_fields?: {
    canonical_url: string;
    custom_meta_tag: string;
  };
  sitemap?: {
    change_frequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
    priority: string;
  };
  no_index: boolean;
  no_follow: boolean;
}

export interface ICustomer {
  id: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string | null;
  date_updated: string | null;
  title: string;
  description: string;
  logo: string;
}

export interface IRequest {
  name: string;
  phone: string;
  url: string;
  message?: string;
}

export interface IPrivacyPolicy {
  data: {
    title: string;
    description: string;
  };
}

export interface ITeam {
  id: string;
  status: "draft" | "published" | "archived";
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string | null;
  date_updated: string | null;
  title: string;
  description: string;
  photo: string;
  position: string;
  education: IEducation[] | [];
}

export interface IEducation {
  id: string;
  team_id: string;
  directus_files_id: string;
}

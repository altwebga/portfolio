export interface Image {
  id: string;
  filename_disk?: string | null;
  title?: string | null;
}

export interface Base {
  id: number;
  slug: string;
  date_created: string;
  date_updated: string | null;
  status: string;
  title: string;
  content: string | null;
  cover_image: string | null;
}

export interface SEO {
  title: string;
  meta_description: string;
  og_image?: string;
  focus_keyphrase?: string;
  additional_fields?: {
    canonical_url?: string;
    custom_meta_tag?: string;
  };
  sitemap?: {
    change_frequency?: string;
    priority?: string;
  };
  no_index?: boolean;
  no_follow?: boolean;
}

export interface Hero extends Base {
  city: string;
}

export interface Article extends Base {
  seo: SEO;
}

export interface Project extends Base {
  release_date: string | null;
  client: number | null;
  site_url: string | null;
  rutube_id: string | null;
  seo: SEO;
}

export interface Service extends Base {
  short_content: string | null;
  price: string | null;
  seo: SEO;
}

export interface Customer {
  id: number;
  title: string;
  content: string;
  cover_image: string;
}

export interface TeamFile {
  id: number;
  teams_id: number;
  directus_files_id: string;
}

export interface Team {
  id: number;
  title: string;
  position: string;
  content: string;
  photo: string;
  certificates: TeamFile[] | [];
  status: string;
}

export interface PrivacyPolicy {
  title: string;
  content: string;
}

export interface RequestWebsite {
  id: string;
  client: string;
  phone: string;
  agreement: boolean;
  created_at?: string;
  page_url?: string;
  message?: string | null;
}

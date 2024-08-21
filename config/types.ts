import { IconType } from "react-icons/lib";
export type navLinksType = {
  id: number;
  title: string;
  href: string;
};

export type techBadgesType = {
  id: number;
  title: string;
  image: string;
};

export type servicesDataType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type socialLinksType = {
  title: string;
  url: string;
  icon: IconType;
};

export type Service = {
  id: number;
  slug: string;
  image: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  featured_media_url: string;
  acf: {
    price: string;
  };
};

export type Portfolio = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  featured_media_url: string;
  logo_url: string;
  acf: {
    logo: number;
    businessCategory: string;
    website: string;
    rutube: string;
    release: string;
    youtube: string;
  };
};

export type Client = {
  id: number;
  description: string;
  name: string;
  acf: {
    "client-logo": number;
  };
  client_logo_url: string;
};

export type Post = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  date: string;
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  categories: number[];
  tags: number[];
  category_names: string[];
  tag_names: string[];
};

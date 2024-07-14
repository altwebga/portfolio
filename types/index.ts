import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
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
};

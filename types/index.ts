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
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  featured_media_url: string;
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

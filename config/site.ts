import {
  FaWhatsapp,
  FaTelegram,
  FaVk,
  FaGithub,
  FaYandex,
  FaSkype,
} from "react-icons/fa6";

import { navLinksType, socialLinksType } from "@/config/types";

export const siteMetaData = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "SEOMIX",
  description:
    "Разработка и продвижение сайтов в Горно-Алтайске по адекватным ценам.",
  keywords:
    "SEO, SEO оптимизация, разработка сайтов, разработка мобильных приложений",
};

export const navLinks: navLinksType[] = [
  {
    id: 1,
    title: "Услуги",
    href: "/services",
  },
  {
    id: 2,
    title: "Портфолио",
    href: "/portfolio",
  },
  {
    id: 3,
    title: "Обо мне",
    href: "/about",
  },
  {
    id: 4,
    title: "Контакты",
    href: "/contact",
  },
  {
    id: 5,
    title: "Блог",
    href: "/blog",
  },
];

export const socialLinks: socialLinksType[] = [
  {
    title: "WhatsApp",
    url: "https://wa.me/79236609500",
    icon: FaWhatsapp,
  },
  {
    title: "Telegram",
    url: "https://t.me/sib_kos",
    icon: FaTelegram,
  },
  {
    title: "ВКонтакте",
    url: "https://vk.com/kuznecov_kn",
    icon: FaVk,
  },
  {
    title: "GitHub",
    url: "https://github.com/altwebga",
    icon: FaGithub,
  },
  {
    title: "Яндекс.Услуги",
    url: "https://uslugi.yandex.ru/profile/KonstantinK-2288483",
    icon: FaYandex,
  },
  {
    title: "Skype",
    url: "https://join.skype.com/invite/bQh27VHgyxIW",
    icon: FaSkype,
  },
];

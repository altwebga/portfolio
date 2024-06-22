import {
  FaWhatsapp,
  FaTelegram,
  FaVk,
  FaGithub,
  FaYandex,
  FaSkype,
} from "react-icons/fa6";
import { Link } from "@nextui-org/link";

export const socialLinks = [
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

type SocialLinkProps = {
  color:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
};

export const SocialLink = ({ color }: SocialLinkProps) => {
  return (
    <div className="flex flex-row gap-4 h-14">
      {socialLinks.map((item) => (
        <Link
          key={item.url}
          isExternal
          className="flex items-center gap-2"
          color={color}
          href={item.url}
        >
          <item.icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
};

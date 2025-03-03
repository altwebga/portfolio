import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";
export const socialLinks = [
  {
    title: "WhatsApp",
    url: "https://wa.me/79236609500",
  },
  {
    title: "Telegram",
    url: "https://t.me/sib_kos",
  },
  {
    title: "ВКонтакте",
    url: "https://vk.com/kuznecov_kn",
  },
  {
    title: "GitHub",
    url: "https://github.com/altwebga",
  },
  {
    title: "Яндекс.Услуги",
    url: "https://uslugi.yandex.ru/profile/KonstantinK-2288483",
  },
  {
    title: "Skype",
    url: "https://join.skype.com/invite/bQh27VHgyxIW",
  },
];

export function SocialLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {socialLinks.map((link, index) => (
        <Button key={index} variant="outline" className="w-full">
          <Link href={link.url} target="_blank" rel="noopener noreferrer">
            {link.title}
          </Link>
          <ExternalLinkIcon className="w-4 h-4" />
        </Button>
      ))}
    </div>
  );
}

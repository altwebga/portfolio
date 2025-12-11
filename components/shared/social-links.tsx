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
    title: "MAX",
    url: "https://vk.com/kuznecov_kn",
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

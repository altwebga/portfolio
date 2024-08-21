import { socialLinks } from "@/config/site";

type SocialLinkProps = {
  color:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size: "small" | "medium" | "large";
};

export function SocialNetwork({ color, size }: SocialLinkProps) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  };

  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.title}
          href={link.url}
          rel="noopener noreferrer"
          target="_blank"
          color={color}
        >
          <link.icon className={sizeClasses[size]} />
        </a>
      ))}
    </div>
  );
}

import { Customer } from "@/config/types";
import { DirectusImage } from "./directus-image";

type CustomerCardProps = Pick<Customer, "cover_image" | "title" | "content">;

export function CustomerCard({
  cover_image,
  title,
  content,
}: CustomerCardProps) {
  return (
    <div className="flex items-center gap-3">
      <DirectusImage
        url={cover_image}
        alt={title}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div>
        <h3 className="text-base font-medium m-0">{title}</h3>
        <p className="text-sm text-muted-foreground m-0">{content}</p>
      </div>
    </div>
  );
}

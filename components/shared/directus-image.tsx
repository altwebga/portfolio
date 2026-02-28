import Image from "next/image";
import { cn } from "@/lib/utils";

type DirectusImageProps = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
};

const assets = process.env.NEXT_PUBLIC_ASSETS;

export function DirectusImage({
  url,
  loading = "lazy",
  alt = "",
  width = 300,
  height = 300,
  className = "",
}: DirectusImageProps) {
  return (
    <Image
      src={`${assets}/${url}`}
      alt={alt}
      width={width}
      height={height}
      className={cn("rounded-md", className)}
      loading={loading}
    />
  );
}

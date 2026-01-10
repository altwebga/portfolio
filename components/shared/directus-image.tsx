import Image from "next/image";

type DirectusImageProps = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
};

const assets = process.env.ASSETS || "https://api.seomix.ru/assets";

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
      className={className}
      loading={loading}
    />
  );
}

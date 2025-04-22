import Image from "next/image";

interface BlogImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function BlogImage({
  src,
  alt,
  width = 1000,
  height = 1000,
  className,
}: BlogImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={true}
    />
  );
}

import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";

type ServicesCardProps = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
};

export const ServicesCard = ({
  slug,
  title,
  image,
  excerpt,
}: ServicesCardProps) => {
  return (
    <Link href={`services/${slug}`}>
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt={title}
              className="object-cover"
              height={200}
              shadow="md"
              src={image}
              width="100%"
            />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{excerpt}</p>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

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
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] min-h-80"
        shadow="sm"
      >
        <CardBody>
          <div className="flex flex-col md:flex-row gap-8 items-center ">
            <div className="flex-1">
              <Image
                alt={title}
                shadow="md"
                src={image}
                width={400}
                height={400}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl">{title}</h3>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

type ServicesCardProps = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  price: string;
};

export const ServicesCard = ({
  slug,
  title,
  image,
  excerpt,
  price,
}: ServicesCardProps) => {
  return (
    <Link href={`services/${slug}`}>
      <Card className="transition-transform duration-300 transform hover:scale-105 peer shadow-lg">
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            <Image
              alt={title}
              height={300}
              src={image}
              width={300}
              className="object-contain rounded-xl p-4"
            />
            <div className="lg:w-1/2">
              <h3 className="text-xl">{title}</h3>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
              <p className="pt-4 text-green-600">{price}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

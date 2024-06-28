import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";

type PortfolioCardProps = {
  slug: string;
  title: string;
  logo: string;
  image: string;
  businessCategory: string;
};

export const PortfolioCard = ({
  slug,
  title,
  logo,
  image,
  businessCategory,
}: PortfolioCardProps) => {
  return (
    <Link href={`portfolio/${slug}`}>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7 border border-gray-400"
        shadow="md"
      >
        <Image
          removeWrapper
          alt={title}
          className="z-0 w-full h-full object-cover"
          src={image}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image alt="Логотип" className="w-11 h-11 bg-black" src={logo} />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">{title}</p>
              <p className="text-tiny text-white/60">{businessCategory}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

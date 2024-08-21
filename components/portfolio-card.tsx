import { Card, CardFooter } from "./ui/card";
import Image from "next/image";
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
      <Card className="transition-transform duration-300 transform hover:scale-105 peer shadow-lg">
        <Image
          alt={title}
          className="z-0 w-full h-full object-contain"
          src={image}
          width={500}
          height={500}
        />
        <CardFooter className="absolute bottom-0 z-10 bg-black/20 backdrop-blur-sm w-full">
          <div className="flex flex-grow gap-2 items-center pt-2">
            <Image
              alt="Логотип"
              className="w-11 h-11 rounded-full"
              src={logo}
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <h4 className="text-white">{title}</h4>
              <span className="text-white">{businessCategory}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

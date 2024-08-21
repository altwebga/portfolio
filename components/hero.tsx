import HeroImage from "@/public/images/hero.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { PopupForm } from "./popup-form";
export function Hero() {
  return (
    <section className="bg-hero-bg bg-contain bg-no-repeat w-full h-screen flex flex-col justify-center">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="space-y-8 md:w-1/2">
          <h1>
            Разработка и продвижение сайтов{" "}
            <span className="text-blue-500">в Горно-Алтайске</span>
          </h1>
          <div className="flex gap-4 items-center pt-4">
            <PopupForm />
            <Button asChild className="w-40" variant="outline">
              <Link href="/portfolio">Примеры работ</Link>
            </Button>
          </div>
        </div>
        <Image src={HeroImage} alt="Hero" />
      </div>
    </section>
  );
}

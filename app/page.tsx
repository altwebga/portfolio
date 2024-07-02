import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { SpinningCube } from "@/components/SpinningCube";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <div className="bg-hero-grid bg-repeat bg-center h-full">
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col md:flex-row items-center md:pt-12">
          <div className="flex-1">
            <h1 className={title()}>Разработка и&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>продвижение&nbsp;</h1>
            <br />
            <h1 className={title()}>сайтов в Горно-Алтайске</h1>
            <p className={subtitle({ class: "mt-4" })}>
              Адекватный креатив и технологичные решения для вашего бизнеса.
            </p>
          </div>
          <div className="flex-1">
            <SpinningCube />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Button as={Link} color="primary" href="/contact" variant="solid">
            Начать проект
          </Button>
          <Button as={Link} color="default" href="/portfolio" variant="solid">
            Примеры работ
          </Button>
        </div>
        <div className="pt-12">
          <h2 className={title({ size: "sm" })}>Весь спектр услуг</h2>
        </div>
      </div>
    </div>
  );
}

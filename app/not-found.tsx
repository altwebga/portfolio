import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { title } from "@/components/primitives";

export default function NotFound() {
  return (
    <div className="bg-hero-grid h-full flex items-center justify-center">
      <div className="text-center space-y-6">
        <h2 className={title({ color: "violet", size: "lg" })}>
          Страница не найдена
        </h2>
        <p>Не удалось найти запрашиваемый ресурс</p>
        <Button
          as={Link}
          className="w-48"
          color="primary"
          href="/"
          variant="solid"
        >
          На главную
        </Button>
      </div>
    </div>
  );
}

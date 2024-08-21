import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-hero-grid h-full flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1>Страница не найдена</h1>
        <p>Не удалось найти запрашиваемый ресурс</p>
        <Button asChild>
          <Link href="/">На главную</Link>
        </Button>
      </div>
    </div>
  );
}

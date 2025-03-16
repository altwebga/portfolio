import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Упс! Страница не найдена.</h1>
      <p>Вернитесь на главную и попробуйте еще раз.</p>
      <Button asChild variant="secondary" size="lg">
        <Link href="/">На главную.</Link>
      </Button>
    </div>
  );
}

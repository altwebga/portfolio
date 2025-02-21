import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="h-[80vh] flex flex-col items-center justify-center gap-4 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-9xl text-center">404</CardTitle>
          <CardDescription className="text-center text-4xl">
            Страница не найдена
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Страница, которую вы ищете, не существует, или перемещена. Вернитесь
            на главную и попробуйте снова.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">На главную</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

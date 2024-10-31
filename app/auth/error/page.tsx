"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

enum Error {
  Configuration = "Configuration",
  Verification = "Verification",
}

const errorMap = {
  [Error.Configuration]: (
    <p>
      При попытке пройти аутентификацию возникла проблема. Пожалуйста, свяжитесь
      с нами, если это ошибка сохраняется. Код ошибки:{" "}
      <code className="rounded-sm p-2 text-xs">Configuration</code>
    </p>
  ),
  [Error.Verification]: (
    <p>
      Проблема с проверкой аутентификации. Пожалуйста, повторите попытку. Код
      ошибки: <code className="rounded-sm p-2 text-xs">Verification</code>
    </p>
  ),
};

export default function AuthErrorPage() {
  const search = useSearchParams();
  const error = search.get("error");

  // Проверяем, есть ли ошибка в errorMap, и если нет, отображаем текст по умолчанию
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>Что-то пошло не так!</CardTitle>
          <CardDescription>Произошла ошибка.</CardDescription>
        </CardHeader>
        <CardContent>
          {errorMap[error as Error] ||
            "Пожалуйста, свяжитесь с нами, если эта ошибка повторится."}
        </CardContent>
        <CardFooter>
          <Button asChild variant="default" className="w-full">
            <Link href="/" className="text-sm hover:underline">
              На главную
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

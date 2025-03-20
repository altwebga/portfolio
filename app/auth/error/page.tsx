"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

enum Error {
  Configuration = "Configuration",
  Verification = "Verification",
  AccessDenied = "AccessDenied",
  Default = "Default",
}

const errorMap = {
  [Error.Configuration]: (
    <p>
      При попытке пройти аутентификацию возникла проблема. Пожалуйста, свяжитесь
      с нами, если это ошибка сохраняется. Код ошибки:
      <code className="rounded-sm p-2 text-xs">Configuration</code>
    </p>
  ),
  [Error.Verification]: (
    <p>
      Проблема с проверкой аутентификации. Пожалуйста, повторите попытку. Код
      ошибки: <code className="rounded-sm p-2 text-xs">Verification</code>
    </p>
  ),
  [Error.AccessDenied]: (
    <p>
      Пользователь не имеет доступа к данному ресурсу. Пожалуйста, свяжитесь с
      нами, если это ошибка сохраняется. Код ошибки:
      <code className="rounded-sm p-2 text-xs">AccessDenied</code>
    </p>
  ),
  [Error.Default]: (
    <p>
      При попытке пройти аутентификацию возникла проблема. Пожалуйста, свяжитесь
      с нами, если это ошибка сохраняется. Код ошибки:
      <code className="rounded-sm p-2 text-xs">Default</code>
    </p>
  ),
};

export default function AuthErrorPage() {
  const search = useSearchParams();
  const error = search.get("error");

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 container mx-auto px-4">
      <h1 className="text-3xl font-bold">Что-то пошло не так!</h1>
      <p>Произошла ошибка.</p>

      {errorMap[error as Error] ||
        "Пожалуйста, свяжитесь с нами, если эта ошибка повторится."}

      <Button asChild variant="default">
        <Link href="/" className="text-sm hover:underline">
          На главную
        </Link>
      </Button>
    </div>
  );
}

"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

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

function AuthErrorContent() {
  const search = useSearchParams();
  const error = search.get("error");

  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Что-то пошло не так!</h1>
      <p>Произошла ошибка.</p>
      <pre>
        {errorMap[error as Error] ||
          "Пожалуйста, свяжитесь с нами, если эта ошибка повторится."}
      </pre>
      <Link href="/" className="text-sm hover:underline">
        На главную
      </Link>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <AuthErrorContent />
    </Suspense>
  );
}

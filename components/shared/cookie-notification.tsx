"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const KEY = "cookie_consent_v1";

export function CookieNotification() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const v = localStorage.getItem(KEY);
    setOpen(v !== "1");
  }, []);

  function accept() {
    const days = 365;
    const expiresAt = Date.now() + days * 24 * 60 * 60 * 1000;
    localStorage.setItem(KEY, "1");
    localStorage.setItem(`${KEY}_exp`, String(expiresAt)); // если захочешь проверять срок
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 w-[min(360px,calc(100vw-2rem))]">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Cookies</CardTitle>
        </CardHeader>
        <CardDescription>
          <p className="text-sm px-6">
            Мы используем cookie. Продолжая пользоваться сайтом, вы соглашаетесь
            c{" "}
            <Link href={"/privacy-policy"} className="text-primary">
              Нашей политикой конфеденциальности
            </Link>
          </p>
        </CardDescription>
        <CardFooter>
          <Button onClick={accept} className="w-full">
            Принять
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

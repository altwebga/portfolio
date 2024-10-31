import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MagicLinks } from "./MagicLinks";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Войти</CardTitle>
        <CardDescription>
          Введите свой адрес электронной почты ниже, чтобы войти в свою учетную
          запись
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <MagicLinks />
          <form
            action={async () => {
              "use server";
              await signIn("yandex");
            }}
          >
            <div className="grid gap-4">
              <Button
                className="bg-yellow-600"
                variant={"outline"}
                type="submit"
              >
                Войти через Яндекс
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}

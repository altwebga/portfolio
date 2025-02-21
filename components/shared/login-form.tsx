import { providerMap, signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Добро пожаловать!</CardTitle>
        <CardDescription>Войдите через Яндекс или GitHub</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {Object.values(providerMap).map((provider) => (
            <form
              key={provider.id}
              action={async () => {
                "use server";
                try {
                  await signIn(provider.id, {
                    redirectTo: "/dashboard",
                  });
                } catch (error) {
                  if (error instanceof AuthError) {
                    return redirect(`${"/auth/error"}?error=${error.type}`);
                  }
                  throw error;
                }
              }}
            >
              <Button type="submit" variant={"default"} className="w-full">
                <span>Войти через {provider.name}</span>
              </Button>
            </form>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
          Регистрируясь, вы соглашаетесь с нашими условиями.{" "}
          <a href="#">использования сайта</a> и{" "}
          <a href="#">политикой конфиденциальности</a>.
        </div>
      </CardFooter>
    </Card>
  );
}

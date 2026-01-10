import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container/container";

const text = {
  title: "Упс! Страница не найдена",
  content:
    "Похоже, вы перешли по несуществующему адресу или страница была удалена.",
  buttonText: "На главную",
};

export default function NotFound() {
  return (
    <Container className="flex flex-col h-full justify-center items-center">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-9xl font-bold tracking-tight text-muted-foreground">
          404
        </div>
        <h1 className="text-2xl font-semibold">{text.title}</h1>
        <p className="text-muted-foreground">{text.content}</p>
        <Button asChild size="lg">
          <Link href="/">{text.buttonText}</Link>
        </Button>
      </div>
    </Container>
  );
}

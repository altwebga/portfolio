import { Button } from "../ui/button";
import { socialLinks } from "@/config/social-links";
import { ArrowDown } from "lucide-react";
import { CallbackRequestForm } from "../form/callback-request-form";
import Link from "next/link";

const text = {
  title: "Разработка и продвижение сайтов",
  inCity: "в Краснодаре",
  description:
    "Создаем эффективные сайты, запускаем SEO и рекламу, настраиваем аналитику и помогаем бизнесу расти. Работаем на результат — если не понравится, вернем деньги.",
};

export function Hero() {
  return (
    <section className="bg-[url(/img/hero_bg.svg)] bg-cover bg-center bg-no-repeat h-[calc(100vh-6rem)]">
      <div className="container mx-auto px-4 mt-20 md:mr-20 flex flex-col justify-between h-full w-full bg-[url(/img/hero_1.png)] bg-position-[right_top_1rem] bg-no-repeat">
        <div className="flex flex-col gap-8 mt-48">
          <h1 className="text-4xl font-bold flex flex-col">
            {text.title}
            <span className="text-primary text-5xl md:text-8xl">
              {text.inCity}
            </span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">{text.description}</p>
          <div className="flex flex-wrap gap-3">
            <CallbackRequestForm />
            <Button size="lg" variant={"outline"} asChild>
              <Link href={"/portfolio"}>Примеры работ</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-end justify-between pb-8">
          <div className="grid grid-cols-3 gap-8">
            {socialLinks.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition hover:opacity-100"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

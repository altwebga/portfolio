import { Button } from "../ui/button";
import { socialLinks } from "@/config/social-links";
import { ArrowDown } from "lucide-react";
import { CallbackRequestForm } from "../form/callback-request-form";
import Link from "next/link";

const text = {
  title: "Разработка и продвижение сайтов",
  city: "в Краснодаре",
  content:
    "Создаем эффективные сайты, запускаем SEO и рекламу, настраиваем аналитику и помогаем бизнесу расти. Работаем на результат — если не понравится, вернем деньги.",
};

export function Hero() {
  return (
    <section
      className="
        relative h-screen overflow-hidden
        bg-[url(/img/hero_bg.svg)] bg-cover bg-no-repeat bg-center
        before:absolute before:inset-0 before:content-['']
        before:bg-[radial-gradient(ellipse_90%_90%_at_0%_100%,#1291f34d_0%,#1291f33d_35%,transparent_70%)]
      "
    >
      {/* контент всегда выше псевдо-элемента */}
      <div className="relative container mx-auto flex h-full flex-col justify-between px-4">
        <div className="mt-80 flex max-w-5xl flex-col space-y-8 md:ml-54">
          <h1 className="flex flex-col font-extrabold text-2xl md:text-5xl">
            {text.title}
            <span className="text-4xl md:text-9xl"> {text.city}</span>
          </h1>

          <p className="max-w-2xl">{text.content}</p>

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

          <div className="text-muted-foreground hidden md:flex flex-row gap-2 items-center">
            <p>скрольте вниз</p>
            <ArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
}

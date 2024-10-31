import Link from "next/link";
import { Button } from "./ui/button";
import { ContactForm } from "./ContactForm";

export function Hero() {
  return (
    <section className="bg-bg-grid bg-contain bg-no-repeat h-[80vh] flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Разработка и продвижение сайтов{" "}
            <span className="text-sky-500">в Горно-Алтайске</span>
          </h1>
          <p>Адекватный креатив и технологичные решения для вашего бизнеса.</p>
          <div className="flex gap-4 mt-8">
            <ContactForm />
            <Button variant="outline" asChild>
              <Link href="/portfolio">Портфолио</Link>
            </Button>
          </div>
        </div>
        <div className="hidden dark:block">
          <video
            src="/videos/hero-3.webm" // Укажите путь к вашему видео
            loop // Видео будет зациклено
            autoPlay // Видео будет запускаться автоматически
            muted // Отключает звук (нужно для автозапуска во многих браузерах)
            className="absolute top-0 right-0 w-full h-full object-cover z-[-1]"
          />
        </div>
      </div>
    </section>
  );
}

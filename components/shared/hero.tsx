import Link from "next/link";
import { Button } from "../ui/button";
import { ContactDialog } from "./contact-dialog";
export function Hero() {
  return (
    <section className="h-[80vh] bg-[url(/images/hero-bg.min.svg)]">
      <div className="h-full container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        <div className="px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Разработка и продвижение сайтов
            <br />
            <span className="text-4xl md:text-8xl bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
              в Горно-Алтайске
            </span>
          </h1>
          <p className="text-xl">
            Адекватный креатив и технологичные решения для вашего бизнеса
          </p>
          <div className="flex gap-4 mt-8">
            <ContactDialog />
            <Button variant="secondary" asChild size="lg" className="w-40">
              <Link href="/portfolio">Портфолио</Link>
            </Button>
          </div>
        </div>
        <div></div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-screen object-cover z-[-1] hidden dark:block"
      >
        <source src="/videos/hero.webm" type="video/webm" />
      </video>
    </section>
  );
}

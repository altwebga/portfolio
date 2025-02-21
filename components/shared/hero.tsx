import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./contact-dialog";
export function Hero() {
  return (
    <section>
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-4 h-[80vh] bg-[url(/images/hero-bg.min.svg)]">
        <div className="px-4">
          <h1 className="text-5xl font-bold">
            Разработка и продвижение сайтов
            <br />
            <span className="text-primary text-7xl">в Горно-Алтайске</span>
          </h1>
          <p>адекватный креатив и технологичные решения для вашего бизнеса</p>
          <div className="flex gap-4 mt-8">
            <ContactDialog />
            <Button variant="outline" asChild>
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
        <source src="/videos/hero-3.webm" type="video/webm" />
      </video>
    </section>
  );
}

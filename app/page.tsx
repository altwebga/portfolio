import { Metadata } from "next";
import { CallAction } from "@/components/call-action";
import { DevStages } from "@/components/dev-stages";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Technology } from "@/components/technology";

export const metadata: Metadata = {
  title: "SEOMIX - Разработка сайтов в Горно-Алтайске",
  description:
    "Работайте с единым подрядчиком для всех Ваших интернет-активностей. Когда ответственность за сайт, продвижение, рекламу и социальные сети сосредоточена в одних руках, управление и результаты становятся максимально простыми и прозрачными",
  keywords:
    "SEO, SEO оптимизация, SEO оптимизация сайтов в Горно-Алтайске, разработка сайтов, разработка мобильных приложений",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Technology />
      <DevStages />
      <div className="container mx-auto">
        <CallAction />
      </div>
    </>
  );
}

"use client";

import animationData from "@/assets/animate/home_banner.json";
import dynamic from "next/dynamic";
import Headline from "@/components/Headline";
import GradientButton from "@/components/GradientButton";
import SimpleButton from "@/components/SimpleButton";
import ServicesCard from "@/components/ServicesCard";
import ClientCard from "@/components/ClientCard";

export default function Home() {
  const LottieAnimation = dynamic(
    () => import("../components/LottieAnimation"),
    { ssr: false }
  );

  return (
    <>
      <section className="flex flex-col md:flex-row">
        <div className="md:w-1/2 py-20">
          <Headline text="Разработка" />
          <h1 className="text-xl md:text-4xl py-5 font-bold">
            сайтов и мобильных приложений в Горно-Алтайске
          </h1>
          <p className="mt-2">
            Создаю по-настоящему эффективные сайты: внедряю актуальные
            IT-разработки, уделяю максимум внимания дизайну и юзабилити.
          </p>
          <p className="mt-2">Хотите узнать больше о том, как мы можем сотрудничать? Обращайтесь!</p>
          <div className=" flex flex-col md:flex-row gap-4 md:gap-10 mt-8" >
          <GradientButton text="Начать проект" href="/contact" />
          <SimpleButton text="Примеры работ" href="/portfolio" />
          </div>
          
        </div>
        <div className="md:w-1/2">
          <LottieAnimation
            animationData={animationData}
            height="300px md:height-[600px]"
            width="300px md:width-[600px]"
          />
        </div>
      </section>
      <section>
        <h2 className="text-xl md:text-4xl font-bold">Мои услуги</h2>
        <p>Весть спектр услуг для старта продаж в интернете.</p>
        <ServicesCard/>
        <GradientButton text="Все услуги" href="/services" />
      </section>
      <section className="mt-8">
      <h2 className="text-xl md:text-4xl font-bold">Среди моих клиентов</h2>
      <p>малый и средний бизнес</p>
      <ClientCard/>
      </section>
    </>
  );
}

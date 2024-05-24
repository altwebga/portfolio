"use client";

import animationData from "@/assets/animate/home_banner.json";
import dynamic from "next/dynamic";

export default function Home() {
  const LottieAnimation = dynamic(
    () => import("../components/LottieAnimation"),
    { ssr: false }
  );

  return (
    <>
      <section className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 py-20">
          <h1 className="text-4xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Разработка
          </h1>
          <h1 className="text-xl md:text-4xl py-5 font-bold">
            сайтов и мобильных приложений в Горно-Алтайске
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <LottieAnimation
            animationData={animationData}
            height="300px md:height-[600px]"
            width="300px md:width-[600px]"
          />
        </div>
      </section>
    </>
  );
}

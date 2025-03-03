import { CallAction } from "@/components/shared/call-action";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Hero } from "@/components/shared/hero";
import { ServicesHome } from "@/components/shared/services-home";
import { UsingTechnology } from "@/components/shared/using-technology";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesHome />
      <UsingTechnology />
      <CallAction />
      <Footer />
    </>
  );
}

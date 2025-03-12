import { CallAction } from "@/components/shared/call-action";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Hero } from "@/components/shared/hero";
import { MyClients } from "@/components/shared/my-clients";
import { StagesDevelopment } from "@/components/shared/stages-development";
import { UsingTechnology } from "@/components/shared/using-technology";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MyClients />
      <UsingTechnology />
      <StagesDevelopment />
      <CallAction />
      <Footer />
    </>
  );
}

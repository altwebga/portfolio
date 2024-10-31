import { CallAction } from "@/components/CallAction";
import { DevStage } from "@/components/DevStage";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <DevStage />
      <Technologies />
      <CallAction />
    </div>
  );
}

import AboutMe from "@/components/AboutMe";
import { CallToAction } from "@/components/CallToAction";
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>Обо мне</h1>
      <AboutMe />
      <CallToAction />
    </div>
  );
}

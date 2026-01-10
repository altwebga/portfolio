import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingTitle,
} from "../ui/section-heading";
import { Container } from "../container/container";

const text = {
  subTitle: "CTA",
  title: "Готовы начать новый проект?",
  description:
    "Разрабатываем современные сайты с продуманной структурой и дизайном, настраиваем контекстную рекламу в Яндекс Директ, занимаемся SEO-продвижением и аналитикой. Помогаем привлекать клиентов, увеличивать продажи и усиливать присутствие бренда в сети.",
};

export function CTA() {
  return (
    <Container className="my-32">
      <SectionHeading alignment="center" className="md:ml-40">
        <SectionHeadingTitle>{text.title}</SectionHeadingTitle>
        <SectionHeadingBody>{text.description}</SectionHeadingBody>
      </SectionHeading>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button variant={"outline"} size={"lg"}>
          Наши контакты
          <ArrowRightIcon className="size-4" />
        </Button>
      </div>
    </Container>
  );
}

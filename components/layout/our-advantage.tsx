import { Container } from "../container/container";
import {
  SectionHeading,
  SectionHeadingTitle,
  SectionHeadingBody,
  SectionHeadingContentType,
} from "../ui/section-heading";
import { Button } from "../ui/button";
import { CallbackRequestForm } from "../form/callback-request-form";

const text = {
  subTitle: "Наши преимущества",
  title: "Берём задачи на себя, без лишних вопросов и затянутых согласований.",
  description:
    "Прозрачно объясняем каждый этап работы и всегда держим вас в курсе процесса. Никаких сложных ТЗ и брифов — все ключевые вопросы выясняем в разговоре или на встрече. Контент для сайта создаём сами: от текстов до визуальных решений. Если у вас ещё нет фотографий, подберём качественные изображения, которые усилят впечатление от проекта.",
};

export function OurAvantage() {
  return (
    <div className="bg-[url(/img/fog.png)] bg-cover bg-center py-32">
      <Container>
        <div className="flex flex-col gap-4 md:ml-40">
          <SectionHeading alignment="left">
            <SectionHeadingContentType>
              {text.subTitle}
            </SectionHeadingContentType>
            <SectionHeadingTitle>{text.title}</SectionHeadingTitle>
            <SectionHeadingBody>{text.description}</SectionHeadingBody>
          </SectionHeading>
          <div className="flex flex-row gap-4 mt-8">
            <CallbackRequestForm />
            <Button
              size={"lg"}
              disabled
              variant={"destructive"}
              className="line-through"
            >
              Заполнить бриф
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

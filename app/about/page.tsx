import type { Metadata } from "next";
import { Container } from "@/components/container/container";
import { TextAnimate } from "@/components/ui/text-animate";
import { getTeams } from "@/actions/get-content";
import { DirectusImage } from "@/components/shared/directus-image";
import { Markdown } from "@/components/shared/markdown";
import { CertificatesGallery } from "@/components/shared/certificates-gallery";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LightRays } from "@/components/ui/light-rays";
import {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingTitle,
} from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "О веб-студии",
  description:
    "Команда специалистов по разработке, дизайну и SEO. Работаем на результат.",
  openGraph: {
    title: "О веб-студии",
    description:
      "Команда специалистов по разработке, дизайну и SEO. Работаем на результат.",
    images: [
      {
        url: "/img/og/about.png",
        width: 1200,
        height: 630,
        alt: "О веб-студии",
      },
    ],
  },
};

const text = {
  title: "О нас",
  subTitle:
    "SEOMIX — веб-студия полного цикла, выросшая из хобби в профессиональную деятельность",
};

export default async function AboutPage() {
  const teams = await getTeams();
  return (
    <Container className="my-20">
      <h1>{text.title}</h1>
      <TextAnimate animation="blurIn" as="p">
        {text.subTitle}
      </TextAnimate>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {teams.map((team) => (
          <Card key={team.id}>
            <CardHeader className="flex flex-col md:flex-row gap-4">
              <DirectusImage
                url={team.photo}
                width={120}
                height={120}
                className="object-cover w-30 h-30 bg-white rounded-2xl"
              />
              <div>
                <h3>{team.title}</h3>
                <p>{team.position}</p>
              </div>
            </CardHeader>
            <CardContent>
              <Markdown
                markdown={team.content || ""}
                className="text-muted-foreground text-sm"
              />
              {team.certificates && team.certificates.length > 0 && (
                <CertificatesGallery certificates={team.certificates} />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <SectionHeading className="mt-4">
        <SectionHeadingTitle>Предыстория</SectionHeadingTitle>
        <SectionHeadingBody>
          Всё началось в 2012 году с веб-разработки и интереса к тому, как
          создаются сайты. Со временем опыт, технологии и подходы позволили
          перейти к созданию современных, удобных и производительных
          веб-решений.
        </SectionHeadingBody>
        <SectionHeadingBody>
          Сегодня мы разрабатываем сайты и веб-приложения, продумывая
          архитектуру, интерфейсы и SEO с самого начала. Работаем компактно,
          внимательно относясь к деталям и задачам бизнеса, чтобы каждый проект
          приносил реальный результат.
        </SectionHeadingBody>
      </SectionHeading>
      <LightRays />
    </Container>
  );
}

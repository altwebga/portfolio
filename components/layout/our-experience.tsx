import { Marquee } from "../ui/marquee";
import { Container } from "../container/container";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import {
  SectionHeading,
  SectionHeadingTitle,
  SectionHeadingBody,
  SectionHeadingContentType,
} from "../ui/section-heading";
import { CustomerCard } from "../shared/customer-card";
import { Customer } from "@/config/types";

const text = {
  subTitle: "Опыт",
  title: "Мы уже работали с проектами из вашей сферы",
  description:
    "Мы работали с проектами в туризме и гостиничном бизнесе, медицине и частных клиниках, торговле, строительстве и девелопменте, а также с образовательными платформами, корпоративными системами и цифровыми сервисами для бизнеса.",
};

async function getClients(): Promise<Customer[]> {
  return directus.request(
    readItems("customers", {
      fields: ["id", "title", "content", "cover_image"],
    })
  );
}

export async function OurExperience() {
  const customers = await getClients();
  if (!customers?.length) return null;

  const mid = Math.ceil(customers.length / 2);
  const firstRow = customers.slice(0, mid);
  const secondRow = customers.slice(mid);

  return (
    <Container className="my-32">
      <SectionHeading alignment="center">
        <SectionHeadingContentType>{text.subTitle}</SectionHeadingContentType>
        <SectionHeadingTitle>{text.title}</SectionHeadingTitle>
        <SectionHeadingBody>{text.description}</SectionHeadingBody>
      </SectionHeading>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((customer) => (
            <CustomerCard
              key={customer.id}
              cover_image={customer.cover_image}
              title={customer.title}
              content={customer.content}
            />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:50s]">
          {secondRow.map((customer) => (
            <CustomerCard
              key={customer.id}
              cover_image={customer.cover_image}
              title={customer.title}
              content={customer.content}
            />
          ))}
        </Marquee>

        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l" />
      </div>
    </Container>
  );
}

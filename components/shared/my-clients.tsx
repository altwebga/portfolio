import Image from "next/image";
import { Card, CardContent } from "../ui/card";
export const client = [
  {
    title: "ООО Созвездие Алтая",
    client_category: "Турфирма",
    logo: "/images/logo/logo_13.png",
  },
  {
    title: "ООО Гармония Здоровья",
    client_category: "Медицинский центр",
    logo: "/images/logo/logo_09.png",
  },
  {
    title: "ГАПК",
    client_category: "Образовательное учреждение",
    logo: "/images/logo/gapk_logo.jpg",
  },
  {
    title: "АО АЛИРА Групп",
    client_category: "Парк-отель",
    logo: "/images/logo/aya-logo.png",
  },
];

export function MyClients() {
  return (
    <section className="container mx-auto px-4">
      <h2>Мне доверяют</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-subgrid gap-6  py-6">
        {client.map((item) => (
          <Card key={item.title} className="max-w-sm">
            <CardContent className="flex gap-2">
              <Image
                src={item.logo}
                alt={item.title}
                width={48}
                height={48}
                className="rounded-full h-14 w-14"
              />
              <div>
                <p>{item.title}</p>
                <p>{item.client_category}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

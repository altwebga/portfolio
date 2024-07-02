import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";

import { Client } from "@/types";

async function getClients() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/clients?_fields=id,name,acf,description,client_logo_url`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const Clients = async () => {
  const clients: Client[] = await getClients();

  // Перемешиваем массив клиентов
  const shuffledClients = clients.sort(() => 0.5 - Math.random());

  // Берем первых 6 клиентов
  const displayedClients = shuffledClients.slice(0, 6);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedClients.map((client, index) => (
          <Card key={index} className="p-4" shadow="md">
            <div className="flex flex-row gap-2 items-center">
              <Image
                alt={client.name}
                className="w-12 h-auto"
                src={client.client_logo_url}
                width={60}
              />
              <CardBody>
                <p>{client.name}</p>
                <p>{client.description}</p>
              </CardBody>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

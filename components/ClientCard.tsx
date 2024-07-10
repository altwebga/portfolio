import { Image } from "@nextui-org/image";

import { Client } from "@/types";
import { getClients } from "@/config/api";

export const Clients = async () => {
  const clients: Client[] = await getClients();

  // Перемешиваем массив клиентов
  const shuffledClients = clients.sort(() => 0.5 - Math.random());

  // Берем первых 8 клиентов
  const displayedClients = shuffledClients.slice(0, 8);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {displayedClients.map((client, index) => (
        <div key={index} className="p-4">
          <div className="flex flex-row gap-2 items-center">
            <Image
              alt={client.name}
              className="w-12 h-auto"
              src={client.client_logo_url}
              width={60}
            />
            <div>
              <p>{client.name}</p>
              <p>{client.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

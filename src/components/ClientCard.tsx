import Parnas from "@/assets/image/client_1.png";
import Kalina from "@/assets/image/client_2.png";
import MCAltay from "@/assets/image/client_3.png";
import GAZdorovie from "@/assets/image/client_4.png";
import TransferAltay from "@/assets/image/client_5.png";
import Inovamed from "@/assets/image/client_6.png";
import Omma from "@/assets/image/client_7.png";
import AltaiActive from "@/assets/image/client_8.jpg";
import Image from "next/image";

const ClientItem = [
  { logo: Parnas, name: "Гостиница Парнас", url: "https://hotel-parnas.ru/" },
  { logo: Kalina, name: "Калина мебель", url: "https://mebel-kalina.ru/" },
  {
    logo: MCAltay,
    name: "Медицинский центр Алтай",
    url: "https://mc-altay.ru/",
  },
  {
    logo: GAZdorovie,
    name: "Гармония Здоровья",
    url: "https://ga-zdorovie.ru/",
  },
  {
    logo: TransferAltay,
    name: "Трансфер Алтай",
    url: "https://transfer-altay.ru/",
  },
  { logo: Inovamed, name: "ИнноваМед", url: "https://inovamed.ru/" },
  { logo: Omma, name: "ОММА", url: "https://omma.pro/" },
  {
    logo: AltaiActive,
    name: "Бюро путешествий Созвездие",
    url: "https://altaiactive.ru/",
  },
];

const ClientCard = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ClientItem.map((client, index) => (
          <a
            key={index}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-4 flex flex-col items-center justify-center">
              <Image src={client.logo} alt={client.name} width={150} height={150} className="mb-4" />
            </div>
          </a>
        ))}
      </div>
    );
  };
  
  export default ClientCard;
  
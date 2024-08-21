import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import { techBadgesType } from "@/config/types";

const techBadges: techBadgesType[] = [
  {
    id: 1,
    title: "HTML5",
    image:
      "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  },
  {
    id: 2,
    title: "CSS3",
    image:
      "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  },
  {
    id: 3,
    title: "JavaScript",
    image:
      "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  },
  {
    id: 4,
    title: "TypeScript",
    image:
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  },
  {
    id: 5,
    title: "React",
    image:
      "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  },
  {
    id: 6,
    title: "React Native",
    image:
      "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  },
  {
    id: 7,
    title: "Next JS",
    image:
      "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
  },
  {
    id: 8,
    title: "Expo",
    image:
      "https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37",
  },
  {
    id: 9,
    title: "MongoDB",
    image:
      "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
  },
  {
    id: 10,
    title: "Express.js",
    image:
      "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
  },
  {
    id: 11,
    title: "WordPress",
    image:
      "https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white",
  },
  {
    id: 12,
    title: "Figma",
    image:
      "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
  },
  {
    id: 13,
    title: "Adobe Photoshop",
    image:
      "https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white",
  },
  {
    id: 14,
    title: "TailwindCSS",
    image:
      "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
  },
  {
    id: 15,
    title: "Nginx",
    image:
      "https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white",
  },
  {
    id: 16,
    title: "NodeJS",
    image:
      "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
  },
  {
    id: 17,
    title: "Prisma",
    image:
      "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white",
  },
  {
    id: 18,
    title: "Apollo-GraphQL",
    image:
      "https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql",
  },
];

export function Technology() {
  return (
    <section className="py-8 container mx-auto">
      <h2>Современные технологии</h2>
      <p>
        Использую только самые современные технологии, никаких шаблонных
        решений.
      </p>
      <Separator className="my-4" />
      <div className="flex flex-wrap justify-center gap-4">
        {techBadges.map((item) => (
          <Image
            key={item.id}
            alt={item.title}
            className="w-auto h-auto"
            height={200}
            src={item.image}
            width={200}
          />
        ))}
      </div>
      <Separator className="mt-8" />
    </section>
  );
}

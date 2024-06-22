// app/portfolio/page.tsx
"use client";

import { gql, useQuery } from "@apollo/client";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";

import { title } from "@/components/primitives";

const GET_CASES = gql`
  query GetCases {
    cases {
      nodes {
        id
        slug
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        portfolio {
          businessCategory
          logo {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

export default function PortfolioPage() {
  const { loading, error, data } = useQuery(GET_CASES);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div className="py-4">
      <h1 className={title()}>Портфолио</h1>
      <div className="cases grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {data.cases.nodes.map((caseItem: any) => (
          <Link key={caseItem.id} passHref href={`/portfolio/${caseItem.slug}`}>
            <div className="block">
              <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-7 border border-gray-400"
                shadow="md"
              >
                <Image
                  removeWrapper
                  alt={caseItem.title}
                  className="z-0 w-full h-full object-cover"
                  src={caseItem.featuredImage.node.mediaItemUrl}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="Логотип"
                      className="w-11 h-11 bg-black"
                      src={caseItem.portfolio.logo.node.mediaItemUrl}
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">
                        {caseItem.title}
                      </p>
                      <p className="text-tiny text-white/60">
                        {caseItem.portfolio.businessCategory}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

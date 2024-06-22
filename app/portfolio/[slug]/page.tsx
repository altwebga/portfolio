// app/portfolio/[slug]/page.tsx

import { gql } from "@apollo/client";
import { notFound } from "next/navigation";

import { client } from "@/config/apollo-client";
import { RuTubePlayer } from "@/components/RuTubePlayer";

const GET_CASES = gql`
  query GetCases {
    cases {
      nodes {
        id
        slug
      }
    }
  }
`;

const GET_CASE_BY_ID = gql`
  query GetCaseById($id: ID!) {
    case(id: $id) {
      title
      content
      portfolio {
        rutube
        logo {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

interface SinglePortfolioPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { data } = await client.query({
    query: GET_CASES,
  });

  return data.cases.nodes.map((caseItem: any) => ({
    slug: caseItem.slug,
  }));
}

export default async function SinglePortfolioPage({
  params,
}: SinglePortfolioPageProps) {
  const { slug } = params;

  const { data: casesData } = await client.query({
    query: GET_CASES,
  });

  const caseItem = casesData.cases.nodes.find(
    (caseItem: any) => caseItem.slug === slug,
  );

  if (!caseItem) {
    notFound();
  }

  const { data: caseData } = await client.query({
    query: GET_CASE_BY_ID,
    variables: { id: caseItem.id },
  });

  const { title, content, portfolio } = caseData.case;

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <img alt="Logo" src={portfolio.logo.node.mediaItemUrl} />
      <RuTubePlayer videoId={portfolio.rutube} />
    </div>
  );
}

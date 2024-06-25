"use client";

import { gql, useQuery } from "@apollo/client";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import { subtitle, title } from "@/components/primitives";
import { RuTubePlayer } from "@/components/RuTubePlayer";
import { CallToAction } from "@/components/CallToAction";

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
        website
        businessCategory
        logo {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export default function Page({ params }: { params: { slug: string } }) {
  // Выполнение запроса для получения всех кейсов
  const {
    loading: loadingCases,
    error: errorCases,
    data: dataCases,
  } = useQuery(GET_CASES);

  // Определение ID кейса на основе slug
  const caseItem = dataCases?.cases.nodes.find(
    (item: any) => item.slug === params.slug,
  );
  const caseId = caseItem?.id;

  // Выполнение запроса для получения данных конкретного кейса по ID
  const {
    loading: loadingCase,
    error: errorCase,
    data: dataCase,
  } = useQuery(GET_CASE_BY_ID, {
    skip: !caseId,
    variables: { id: caseId },
  });

  if (loadingCases || loadingCase) return <p>Загрузка...</p>;
  if (errorCases || errorCase)
    return <p>Ошибка: {errorCases?.message || errorCase?.message}</p>;
  if (!caseItem) return <p>Кейс не найден</p>;

  const caseData = dataCase.case;

  return (
    <div className="py-4">
      <div className="flex flex-row gap-2">
        <Image
          alt={caseData.title}
          src={caseData.portfolio.logo.node.mediaItemUrl}
          width={80}
        />
        <div>
          <h1 className={title()}>{caseData.title}</h1>
          <p className={subtitle()}>{caseData.portfolio.businessCategory}</p>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: caseData.content }}
        className="py-4 max-w-4xl"
      />
      <div className="w-full text-right py-6">
        <Link
          isBlock
          isExternal
          showAnchorIcon
          color="success"
          href={caseData.portfolio.website}
        >
          Посмотреть сайт
        </Link>
      </div>

      <RuTubePlayer videoId={caseData.portfolio.rutube} />
      <div className="py-8">
        <CallToAction />
      </div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const sectors = [
  { title: "Маркетплейсы", color: "#005BFF" },
  { title: "Яндекс.Бизнес", color: "#ff3700" },
  { title: "2ГИС", color: "#009e58" },
  { title: "Платежные шлюзы", color: "#702ff4" },
  { title: "CRM-системы", color: "#EF5350" },
  { title: "Социальные сети", color: "#26A69A" },
];

export const IntegrationChart = () => {
  const radius = 200;
  const innerRadius = 70;
  const textRadius = (radius + innerRadius) / 2; // радиус для размещения текста
  const center = radius + 10;
  const angleStep = (2 * Math.PI) / sectors.length;

  return (
    <svg height={2 * center} width={2 * center}>
      {sectors.map((sector, index) => {
        const startAngle = index * angleStep;
        const endAngle = (index + 1) * angleStep;
        const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;

        const x1 = center + radius * Math.cos(startAngle);
        const y1 = center + radius * Math.sin(startAngle);
        const x2 = center + radius * Math.cos(endAngle);
        const y2 = center + radius * Math.sin(endAngle);

        const pathData = [
          `M ${center},${center}`,
          `L ${x1},${y1}`,
          `A ${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2}`,
          "Z",
        ].join(" ");

        const textPathData = [
          `M ${center + textRadius * Math.cos(startAngle)},${
            center + textRadius * Math.sin(startAngle)
          }`,
          `A ${textRadius},${textRadius} 0 ${largeArcFlag} 1 ${
            center + textRadius * Math.cos(endAngle)
          },${center + textRadius * Math.sin(endAngle)}`,
        ].join(" ");

        return (
          <g key={index}>
            <motion.path
              animate={{ opacity: 1 }}
              d={pathData}
              fill={sector.color}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
            <defs>
              <path d={textPathData} id={`textPath-${index}`} />
            </defs>
            <text>
              <textPath
                fill="white"
                fontSize="12"
                href={`#textPath-${index}`}
                startOffset="50%"
                textAnchor="middle"
              >
                {sector.title}
              </textPath>
            </text>
          </g>
        );
      })}
      <circle cx={center} cy={center} fill="white" r={innerRadius} />
      <motion.text
        animate={{ opacity: 1 }}
        dominantBaseline="middle"
        fontSize="20"
        fontWeight="bold"
        initial={{ opacity: 0 }}
        textAnchor="middle"
        transition={{ duration: 1 }}
        x={center}
        y={center}
      >
        <Link href="/contact">Ваш сайт</Link>
      </motion.text>
    </svg>
  );
};

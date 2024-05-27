import {
  GlobeAltIcon,
  PhotoIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const servicesItems = [
  {
    title: "Разработка веб-сайтов",
    description:
      "Делаю индивидуальные, отзывчивые веб-сайты, которые отлично выглядят на всех устройствах, обеспечивая удобный пользовательский интерфейс и оптимизацию под поисковые системы.",
    icon: GlobeAltIcon,
  },
  {
    title: "Дизайн и брендинг",
    description:
      "Помогу разработать уникальный и запоминающийся бренд, включая логотипы, фирменный стиль и рекламные материалы.",
    icon: PhotoIcon,
  },
  {
    title: "Электронная коммерция",
    description:
      "Делаю интуитивно понятные и безопасные интернет-магазины, которые помогают увеличивать продажи и расширять рынок сбыта.",
    icon: CreditCardIcon,
  },
  {
    title: "Мобильная разработка",
    description:
      "Разрабатываю мобильные приложения для iOS и Android, обеспечивая высокое качество и функциональность для лучшего взаимодействия с вашей аудиторией.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "SEO и продвижение сайтов",
    description:
      "Комплексные услуги по поисковой оптимизации и интернет-маркетингу для улучшения видимости вашего сайта и привлечения целевой аудитории.",
    icon: PresentationChartLineIcon,
  },
  {
    title: "Техническая поддержка и обслуживание",
    description:
      "Обеспечиваю надежную техническую поддержку и регулярное обновление вашего сайта для его бесперебойной работы.",
    icon: WrenchScrewdriverIcon,
  },
];

const ServicesCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
      {servicesItems.map((item, index) => (
        <div
          key={index}
          className="relative shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-700 bg-gradient-to-br from-slate-800 to-slate-900"
        >
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 400 400"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <item.icon className="h-12 w-12 text-sky-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-white">
            {item.title}
          </h3>
          <p className="text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;

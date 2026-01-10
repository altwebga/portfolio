import Link from "next/link";

type LogoProps = {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
};
export const Logo: React.FC<LogoProps> = ({
  width = "28px",
  height = "28px",
  fill = "currentColor",
  className,
}) => (
  <Link className="flex flex-row gap-2 items-center" href={"/"}>
    <svg
      width={width}
      height={height}
      viewBox="0 0 577 510"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M130.869 18.2813C137.4 6.96883 149.47 2.23625e-05 162.533 2.25974e-05L414.474 0C427.537 0 439.607 6.96874 446.138 18.2813L572.109 236.469C578.64 247.781 578.64 261.719 572.109 273.031L475.141 440.984L443.477 386.14L519.335 254.75L403.919 54.8437L173.088 54.8438L97.6215 185.555H34.2934L130.869 18.2813Z"
        fill={fill}
      />
      <path
        d="M404.463 453.715L433.564 504.121C427.912 507.58 421.33 509.5 414.474 509.5H162.533C149.471 509.5 137.4 502.531 130.869 491.219L4.89845 273.031C1.52243 267.184 -0.10853 260.635 0.00559793 254.11L273.587 254.108C283.405 254.108 292.474 259.357 297.364 267.87L404.294 454.007L404.463 453.715Z"
        fill={fill}
      />
    </svg>

    <span className="p-0 m-0 text-xl font-bold">seomix.</span>
  </Link>
);

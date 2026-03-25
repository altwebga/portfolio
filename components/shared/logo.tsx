import Link from "next/link";

type LogoProps = {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
};
export const Logo: React.FC<LogoProps> = ({
  width = "32px",
  height = "32px",
  fill = "currentColor",
  className,
}) => (
  <Link className="flex flex-row gap-2 items-center justify-center" href={"/"}>
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12.5259 6.32759C13.0013 5.50608 13.8799 5 14.8307 5L33.1693 5C34.1201 5 34.9987 5.50607 35.4741 6.32759L44.6434 22.1724C45.1189 22.9939 45.1189 24.0061 44.6434 24.8276L37.5853 37.0243L35.2804 33.0416L40.8021 23.5L32.401 8.98277L15.5989 8.98277L10.1058 18.4751H5.4962L12.5259 6.32759Z" />
      <path d="M32.4406 37.9489L34.5589 41.6094C34.1475 41.8606 33.6683 42 33.1693 42H14.8307C13.8799 42 13.0013 41.4939 12.5259 40.6724L3.35656 24.8276C3.11082 24.4029 2.9921 23.9274 3.00041 23.4535L22.9142 23.4534C23.6289 23.4534 24.289 23.8345 24.645 24.4528L32.4283 37.9701L32.4406 37.9489Z" />
    </svg>

    <span className="p-0 m-0 text-xl">seomix.</span>
  </Link>
);

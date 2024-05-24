import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

interface GradientButtonProps {
  text: string;
  href: string;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  href,
  className = "",
}) => {
  return (
    <Link href={href}>
      <button
        title={text}
        className={`inline-flex items-center px-6 py-4 bg-gradient-to-r 
  from-blue-500 via-purple-500 to-pink-500
  text-white font-medium rounded-lg shadow-lg 
  hover:from-pink-500 hover:via-purple-500 hover:to-blue-500
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
  transition duration-300 ease-in-out
  ${className}
`}
      >
        <span className="mr-2">{text}</span>
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    </Link>
  );
};

export default GradientButton;

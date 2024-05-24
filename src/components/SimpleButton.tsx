import React from "react";
import Link from "next/link";

interface SimpleButtonProps {
  text: string;
  href: string;
  className?: string;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
  text,
  href,
  className = "",
}) => {
  return (
    <Link href={href}>
      <button
        title={text}
        className={`inline-flex items-center px-6 py-4 bg-slate-300 border border-transparent rounded-md font-medium text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition duration-300 ease-in-out
  ${className}
`}
      >
        <span className="mr-2">{text}</span>
      </button>
    </Link>
  );
};

export default SimpleButton;

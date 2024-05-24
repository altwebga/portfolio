"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeaderMenu from "@/config/menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    router.push(href);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header className="bg-slate-950 text-white py-4 border-b border-gray-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl">
          <Link
            href="/"
            className="text-white hover:text-gray-400 flex flex-row gap-2 items-center"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5L11 12L3 19M12 19H21"
              />
            </svg>
            <p>seomix.</p>
          </Link>
        </div>
        <button onClick={toggleMenu} className="block md:hidden">
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <nav className={`hidden md:flex md:items-center md:space-x-4`}>
          <ul className="flex space-x-4">
            {HeaderMenu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="text-white hover:text-gray-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Мобильное меню */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-slate-950 text-white z-50 transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-4 text-center">
            {HeaderMenu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="text-white hover:text-gray-400 text-lg"
                  onClick={() => handleLinkClick(item.link)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

"use client";

import { urlFor } from "@/sanity/lib/imageUrlBuilder";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  label: string;
  image: { asset: any };
  navigationItems: { label: string; link: string }[];
  buttonLabel: string;
}

export default function Header({
  label,
  image,
  navigationItems,
  buttonLabel,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center gap-5 w-full">
      {/* Logo */}
      <Image
        src={urlFor(image.asset).url() || ""}
        height="300"
        width="300"
        className="h-10 w-52"
        alt={label}
      />

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex items-center gap-3">
          {navigationItems.map((navItem) => (
            <li key={navItem.label}>
              <Link
                href={navItem.link}
                className="hover:text-red-500 transition duration-300 px-3 py-2 rounded-md text-lg font-sans"
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <button className="text-white bg-gray-700 py-3 px-5 font-bold rounded-full hover:bg-red-600 transition duration-300">
          {buttonLabel}
        </button>
      </div>

      {/* Hamburger Button */}
      <div className="block md:hidden">
        <button
          className="text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute md:hidden  right-0 top-0 w-4/5 h-screen bg-black text-white shadow-lg rounded-md transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-6 p-5">
          {/* Close Button (❌) */}
          <li className="self-end">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl font-semibold"
              aria-label="Close Menu"
            >
              ❌
            </button>
          </li>

          {/* Navigation Links */}
          {navigationItems.map((navItem) => (
            <li key={navItem.label} className="w-full">
              <Link
                href={navItem.link}
                className="hover:text-red-500 transition duration-300 px-3 py-2 text-lg font-semibold block w-full"
              >
                {navItem.label}
              </Link>
            </li>
          ))}

          {/* Button */}
          <li>
            <button className="text-white bg-gray-700 py-2 px-4 font-bold rounded-full hover:bg-red-600 transition duration-300 w-full">
              {buttonLabel}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

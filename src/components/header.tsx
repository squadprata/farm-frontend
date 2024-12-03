"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto pt-6 px-20">
      <nav className="flex items-center justify-between pb-10 border-b-2">
        <Link className="font-bold text-2xl" href="/">
          FarmApp
        </Link>
        <div className="hidden lg:flex flex-grow justify-center gap-6">
          <ul className="flex gap-6">
            <li>
              <Link href="/funcionalidades">Funcionalidades</Link>
            </li>
            <li>
              <Link href="/quem-somos">Quem somos</Link>
            </li>
            <li>
              <Link href="/fale-conosco">Fale conosco</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-primary-100 p-2 px-4 rounded-sm">
            <Link className="text-sm text-white" href="/login">
              Login
            </Link>
          </button>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 focus:outline-none"
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col gap-6 mt-4">
            <li>
              <Link href="/funcionalidades">Funcionalidades</Link>
            </li>
            <li>
              <Link href="/quem-somos">Quem somos</Link>
            </li>
            <li>
              <Link href="/fale-conosco">Fale conosco</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

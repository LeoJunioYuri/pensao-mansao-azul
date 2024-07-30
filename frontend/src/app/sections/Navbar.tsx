"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "/public/pensaoLogoSVG.svg";

interface NavbarProps {
  activePath: string;
}

export default function Navbar({ activePath }: NavbarProps) {
  const [openNav, setOpenNav] = useState(false);

  const handleToggleNav = () => {
    setOpenNav(!openNav);
  };

  const getLinkClasses = (path: string) => {
    return activePath === path
      ? "block py-2 pl-3 pr-4 text-botticelli bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
      : "block py-2 pl-3 pr-4 text-botticelli rounded hover:sail md:hover:bg-transparent md:border-0 md:hover:text-sail md:p-0 dark:text-white md:dark:hover:sail dark:hover:sail dark:hover:sail md:dark:hover:bg-transparent";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-navyBlue border-gray-200 dark:bg-darkNavyBlue shadow-lg px-0 sm:px-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            className="mr-3 w-[70px] h-[70px]"
            alt="Logo Pensão"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white pt-2">
            Pensão Mansão Azul
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={openNav ? "true" : "false"}
          onClick={handleToggleNav}
        >
          <span className="sr-only">Open main menu</span>
          {openNav ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
        <div
          className={`${
            openNav ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link href="/">
                <a className={getLinkClasses("/")}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <a className={getLinkClasses("/sobre")}>
                  Sobre
                </a>
              </Link>
            </li>
            <li>
              <Link href="/quartos">
                <a className={getLinkClasses("/quartos")}>
                  Quartos
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#vantagens">
                <a className={getLinkClasses("/#vantagens")}>
                  Serviços
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#contato">
                <a className={getLinkClasses("/#contato")}>
                  Contato
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

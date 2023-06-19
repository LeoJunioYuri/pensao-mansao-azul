'use client'
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo-example.svg";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleToggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-navyBlue border-gray-200 dark:bg-darkNavyBlue shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image src={logo} className="h-8 mr-3" alt="Logo Pensão" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Pensão Mansão Azul
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={openNav}
          onClick={handleToggleNav}
        >
          <span className="sr-only">Open main menu</span>
          {openNav ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
        {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default"> */}
        <div
          className={`${
            openNav ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <Link href="/">
                <span
                  className="block py-2 pl-3 pr-4 text-botticelli bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  onClick={handleToggleNav}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              {/* <Link to={`/sobre`}>Your Name</Link> */}
              <Link
                href="/sobre"
                className="block py-2 pl-3 pr-4 text-botticelli rounded hover:sail md:hover:bg-transparent md:border-0 md:hover:text-sail md:p-0 dark:text-white md:dark:hover:sail dark:hover:sail dark:hover:sail md:dark:hover:bg-transparent"
                onClick={handleToggleNav}
              >
                Sobre
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-botticelli rounded hover:sail md:hover:bg-transparent md:border-0 md:hover:text-sail md:p-0 dark:text-white md:dark:hover:sail dark:hover:sail dark:hover:sail md:dark:hover:bg-transparent"
                onClick={handleToggleNav}
              >
                Quartos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-botticelli rounded hover:sail md:hover:bg-transparent md:border-0 md:hover:text-sail md:p-0 dark:text-white md:dark:hover:sail dark:hover:sail dark:hover:sail md:dark:hover:bg-transparent"
                onClick={handleToggleNav}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-botticelli rounded hover:sail md:hover:bg-transparent md:border-0 md:hover:text-sail md:p-0 dark:text-white md:dark:hover:sail dark:hover:sail dark:hover:sail md:dark:hover:bg-transparent"
                onClick={handleToggleNav}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

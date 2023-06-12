import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Image from "next/image";
import logo from "/public/logo-example.svg";
import AboutUs from "../pages/AboutUs";

export default function Navbar() {
  return (
    <Router>
      <nav className="fixed top-0 z-50 w-full bg-navyBlue border-gray-200 dark:bg-navyBlue">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <Link to="/" className="flex items-center">
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
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-navyBlue md:flex-row md:space-x-8 md:mt-0 md:border-0 md:navyBlue dark:navyBlue md:dark:navyBlue dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-botticelli bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
              <Link
                  to="/sobre"
                  className="block py-2 pl-3 pr-4 text-botticelli rounded hover:sail md:hover:bg-transparent md:border-0 md:hover:text-sail md:p-0 dark:text-white md:dark:hover:sail dark:hover:sail dark:hover:sail md:dark:hover:bg-transparent"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-botticelli rounded hover:sail md:hover:bg-transparent md:border-0 md:hover:text-sail md:p-0 dark:text-white md:dark:hover:sail dark:hover:sail dark:hover:sail md:dark:hover:bg-transparent"
                >
                  Quartos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-botticelli rounded hover:sail md:hover:bg-transparent md:border-0 md:hover:text-sail md:p-0 dark:text-white md:dark:hover:sail dark:hover:sail dark:hover:sail md:dark:hover:bg-transparent"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-botticelli rounded hover:sail md:hover:bg-transparent md:border-0 md:hover:text-sail md:p-0 dark:text-white md:dark:hover:sail dark:hover:sail dark:hover:sail md:dark:hover:bg-transparent"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/sobre" element={<AboutUs />} />
        </Routes>
      </nav>
    </Router>
  );
}

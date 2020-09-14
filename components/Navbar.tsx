import React from "react";
import { attributes as navbar } from "../content/navbar.md";

type MenuItem = {
  title?: string;
  url?: string;
  subMenu?: MenuItem[];
};

type Props = {
  data?: {
    logo?: string;
    header?: string;
    cta?: {
      title?: string;
      url?: string;
    };
    menu?: MenuItem[];
  };
};
export const Navbar = ({ data }: Props) => {
  const { logo, header, cta, menu = [] } = data ? data : navbar;

  return (
    <nav className="bg-white shadow w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              {/*<!-- Mobile menu button -->}*/}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                {/*<!-- Icon when menu is closed. -->*/}
                {/*<!-- Menu open: "hidden", Menu closed: "block" -->*/}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/*<!-- Icon when menu is open. -->*/}
                {/*<!-- Menu open: "block", Menu closed: "hidden" -->*/}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center">
              <a href="/">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src={logo}
                  alt="devfair logo"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src={logo}
                  alt="devfair logo"
                />
              </a>
            </div>
            <div className="hidden md:ml-6 md:flex">
              {menu.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          {cta && (
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                  <span>{cta.title}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/*!-
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
    -->-*/}
      <div className="hidden md:hidden">
        <div className="pt-2 pb-3">
          <a
            href="#"
            className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out sm:pl-5 sm:pr-6"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6"
          >
            Team
          </a>
          <a
            href="#"
            className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6"
          >
            Projects
          </a>
          <a
            href="#"
            className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out sm:pl-5 sm:pr-6"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

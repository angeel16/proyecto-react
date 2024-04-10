import { Link } from "react-scroll";
import React from 'react';
import cyberBgImg from '../assets/1.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-12 w-auto" src={cyberBgImg} alt="Logo" />
              <img className="hidden lg:block h-12 w-auto" src={cyberBgImg} alt="Logo" />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                spy={true}
                smooth={true}
                duration={500}
                className="inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium text-gray-900 border-gray-500 hover:text-gray-900 hover:border-gray-900"
              >
                Home
              </Link>
              <Link
                to="acerca"
                spy={true}
                smooth={true}
                duration={500}
                className="inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium text-gray-500 hover:text-gray-900 hover:border-gray-900"
              >
                Acerca
              </Link>
              <Link
                to="soporte"
                spy={true}
                smooth={true}
                duration={500}
                className="inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium text-gray-500 hover:text-gray-900 hover:border-gray-900"
              >
                Soporte
              </Link>
              <Link
                to="contacto"
                spy={true}
                smooth={true}
                duration={500}
                className="inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium text-gray-500 hover:text-gray-900 hover:border-gray-900"
              >
                Contacto
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 left-0 z-50 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-[1]"
          >
            {['Home','About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((item, index) => (
              <li key={index} className="hover:text-blue-600">
                <Link to={item} smooth={true} duration={500}
                offset={-70}
                activeClass='active'>
                  {item}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="https://github.com/SAHILTHESPIDER"
                className="btn text-sm w-full bg-gray-800 text-white hover:bg-gray-700"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <a href='/' className="btn btn-ghost normal-case text-xl">Sahil Gupta</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">
          {['Home','About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((item, index) => (
            <li key={index} className="hover:text-blue-600">
              <Link to={item} smooth={true} duration={500}
               offset={-70}
               activeClass='active'>
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/SAHILTHESPIDER"
          className="btn bg-gray-800 text-white ml-4 hover:bg-gray-700"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

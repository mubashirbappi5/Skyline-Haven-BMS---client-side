import React, { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { ImCancelCircle } from "react-icons/im";
import logo from "../assets/image/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider/AuthProvider";
const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signoutUser } = useContext(Authcontext);

  const [isOpenpro, setIsOpenpro] = useState(false);

  const toggleDropdown = () => setIsOpenpro(!isOpenpro);

  const closeDropdown = () => setIsOpenpro(false);

  const handlelogout = () => {
    signoutUser();
  };

  const links = (
    <>
      <NavLink
        to={"/"}
        className="md:hover:text-secondary md:focus:bg-green-100 md:focus:btn md:focus:btn-sm hover:text-white"
      >
        Home
      </NavLink>
      <NavLink
        to={"/apartments"}
        className="md:hover:text-secondary md:focus:bg-green-100 md:focus:btn md:focus:btn-sm hover:text-white"
      >
        Apartment
      </NavLink>
    </>
  );

  return (
    <div>
      <nav className="text-black shadow-md fixed w-full z-10 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div>
              <img className="w-40" src={logo} alt="Skyline Haven" />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-6">{links}</div>

            {/* Login Button (visible on all screens) */}

            <div className="flex">
              {user ? (
                <>
                  {" "}
                  <div className="relative inline-block">
                    {/* Dropdown toggle button */}
                    <button
                      onClick={toggleDropdown}
                      className="relative  z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md  "
                    >
                      <img
                        className="object-cover w-12 h-12 rounded-full ring ring-accent dark:ring-gray-600"
                        src={user?.photoURL}
                        alt=""
                      />
                    </button>

                    {/* Dropdown menu */}
                    {isOpenpro && (
                      <div
                        onClick={closeDropdown}
                        className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                      >
                        <h1 className="block px-4 py-3 text-sm text-gray-600 bg-secondary capitalize  dark:text-gray-300  dark:hover:bg-gray-700 ">
                          {user.displayName}
                        </h1>
                        <Link
                        to={'/'}
                        
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          Dashboard
                        </Link>

                        <hr className="border-gray-200 dark:border-gray-700" />

                        <button
                          onClick={handlelogout}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="flex items-center gap-4">
                    <Link to={"/login"}>
                      <button className="btn bg-primary text-white px-4 py-2 rounded hover:bg-green-600">
                        Login
                      </button>
                    </Link>

                    {/* Hamburger Menu for Mobile */}
                  </div>
                </>
              )}

              <button
                className="md:hidden flex items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <ImCancelCircle className="font-bold text-2xl" />
                ) : (
                  <HiBars3CenterLeft className="font-bold text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden bg-secondary">
            <div className="flex flex-col space-y-4 px-4 py-6">{links}</div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navber;

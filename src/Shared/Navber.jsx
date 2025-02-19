import React, { useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { ImCancelCircle } from "react-icons/im";
import logo from "../assets/image/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useMember from "../Hooks/useMember";
import Swal from "sweetalert2";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signoutUser } = useContext(Authcontext);

  const [isOpenpro, setIsOpenpro] = useState(false);

  const toggleDropdown = () => setIsOpenpro(!isOpenpro);

  const closeDropdown = () => setIsOpenpro(false);

  const handlelogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout it!",
    }).then((result) => {
      if (result.isConfirmed) {
        signoutUser()
          .then(() => {
            Swal.fire({
              title: "Logout!",
              text: "You are successfully logout.",
              icon: "success",
            });
          })
          .catch((error) => console.log(error));
      }
    });
  };
  const [isAdmin] = useAdmin();
  const [isMember] = useMember();
  const links = (
    <>
      <NavLink
        to={"/"}
        className="md:hover:text-secondary text-lg md:focus:bg-green-100 md:focus:btn md:focus:btn-sm hover:text-white"
      >
        Home
      </NavLink>
      <NavLink
        to={"/apartments"}
        className="md:hover:text-secondary text-lg md:focus:bg-green-100 md:focus:btn md:focus:btn-sm hover:text-white"
      >
        Apartment
      </NavLink>
      {
        user?<NavLink
        to={"/apartments"}
        className="md:hover:text-secondary text-lg md:focus:bg-green-100 md:focus:btn md:focus:btn-sm hover:text-white"
      >
      Dashboard
      </NavLink>:''
      }
      <NavLink
        to={"/apartments"}
        className="md:hover:text-secondary text-lg md:focus:bg-green-100 md:focus:btn md:focus:btn-sm hover:text-white"
      >
       About Us
      </NavLink>
      <NavLink
        to={"/apartments"}
        className="md:hover:text-secondary text-lg md:focus:bg-green-100 md:focus:btn md:focus:btn-sm hover:text-white"
      >
       Contact Us
      </NavLink>
    </>
  );

  return (
    <div>
      <nav className="text-black shadow-md fixed w-full z-10 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <img className="w-40" src={logo} alt="Skyline Haven" />
            </div>

            <div className="hidden md:flex items-center space-x-10">{links}</div>

            <div className="flex">
              {user ? (
                <>
                  {" "}
                  <div className="relative inline-block">
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

                    {isOpenpro && (
                      <div
                        onClick={closeDropdown}
                        className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                      >
                        <h1 className="block px-4 py-3 text-sm text-gray-600 bg-secondary capitalize  dark:text-gray-300  dark:hover:bg-gray-700 ">
                          {user.displayName}
                        </h1>
                        <Link
                          to={
                            isAdmin
                              ? "dashboard/adminprofile"
                              : isMember
                              ? "dashboard/memberprofile"
                              : "dashboard/userprofile"
                          }
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

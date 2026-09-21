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
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaBell } from "react-icons/fa";

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
      confirmButtonColor: "#39d42c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        signoutUser()
          .then(() => {
            Swal.fire({
              title: "Logout!",
              text: "You are successfully logged out.",
              icon: "success",
            });
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const [isAdmin] = useAdmin();
  const [isMember] = useMember();
  
  const axiosSecure = useAxiosSecure();
  const { data: notifications = [] } = useQuery({
    queryKey: ["paymentNotifications", user?.email],
    enabled: !!user?.email && isMember,
    queryFn: async () => {
      const res = await axiosSecure.get(`/accept/${user.email}`);
      return res.data;
    },
  });

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const toggleNotif = () => setIsNotifOpen(!isNotifOpen);
  
  const linkStyles = "text-text font-bold tracking-wide hover:text-primary transition-colors duration-300 relative group";
  const getActiveClass = ({isActive}) => isActive ? "text-primary" : linkStyles;

  const links = (
    <>
      <NavLink to={"/"} className={getActiveClass}>
        Home
        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink to={"/apartments"} className={getActiveClass}>
        Apartments
        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      {user && (
        <NavLink
          to={isAdmin ? "dashboard/adminprofile" : isMember ? "dashboard/memberprofile" : "dashboard/userprofile"}
          className={getActiveClass}
        >
          Dashboard
          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      )}
      <NavLink to={"/about"} className={getActiveClass}>
        About Us
        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink to={"/contact"} className={getActiveClass}>
        Contact Us
        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
    </>
  );

  return (
    <div className="w-full relative z-50">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div>
              <Link to="/">
                <img className="w-48 transform hover:scale-105 transition-transform duration-300" src={logo} alt="Skyline Haven" />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-10">{links}</div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4">
                  {/* Notification Bell */}
                  {isMember && (
                    <div className="relative">
                      <button 
                        onClick={toggleNotif}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors relative focus:outline-none"
                      >
                        <FaBell className="text-2xl text-gray-600" />
                        {notifications.length > 0 && (
                          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white">
                            {notifications.length}
                          </span>
                        )}
                      </button>
                      
                      {isNotifOpen && (
                        <div className="absolute right-0 z-50 w-72 py-2 mt-4 origin-top-right bg-white rounded-2xl shadow-2xl border border-gray-100 max-h-96 overflow-y-auto">
                          <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-gray-800">Notifications</h3>
                            {notifications.length > 0 && (
                              <span className="text-xs font-semibold bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                {notifications.length} New
                              </span>
                            )}
                          </div>
                          {notifications.length > 0 ? (
                            notifications.map(notif => (
                              <Link 
                                key={notif._id}
                                to="/dashboard/makepay"
                                onClick={() => setIsNotifOpen(false)}
                                className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                              >
                                <p className="text-sm text-gray-700">
                                  Your request for <span className="font-bold">Apt {notif.apartmentNo}</span> was accepted. Please proceed to payment.
                                </p>
                              </Link>
                            ))
                          ) : (
                            <div className="px-4 py-6 text-center text-sm text-gray-500">
                              No new notifications
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="relative inline-block">
                    <button
                      onClick={toggleDropdown}
                      className="relative z-10 block rounded-full focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all shadow-md hover:shadow-lg"
                    >
                      <img
                        className="object-cover w-14 h-14 rounded-full border-2 border-primary"
                        src={user?.photoURL}
                        alt={user?.displayName}
                      />
                    </button>

                  {isOpenpro && (
                    <div className="absolute right-0 z-20 w-56 py-2 mt-4 origin-top-right bg-white rounded-2xl shadow-2xl border border-gray-100">
                      <div className="px-6 py-4 bg-gray-50/50 rounded-t-2xl border-b border-gray-100">
                        <h1 className="text-sm font-bold text-text capitalize truncate">
                          {user.displayName}
                        </h1>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      
                      <Link
                        to={isAdmin ? "dashboard/adminprofile" : isMember ? "dashboard/memberprofile" : "dashboard/userprofile"}
                        onClick={closeDropdown}
                        className="block px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        Dashboard
                      </Link>

                      <button
                        onClick={() => { closeDropdown(); handlelogout(); }}
                        className="block w-full text-left px-6 py-3 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors rounded-b-2xl"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
              ) : (
                <div className="hidden md:flex items-center gap-4">
                  <Link to={"/login"}>
                    <button className="px-8 py-3 bg-text text-white font-bold rounded-full hover:bg-primary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                      Login
                    </button>
                  </Link>
                </div>
              )}

              {/* Mobile Toggle */}
              <button
                className="md:hidden flex items-center justify-center p-2 rounded-xl bg-gray-50 text-text hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <ImCancelCircle className="text-2xl" /> : <HiBars3CenterLeft className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-3xl border-t border-gray-100 absolute w-full shadow-2xl">
            <div className="flex flex-col space-y-6 px-6 py-8">
              {links}
              {!user && (
                  <Link to={"/login"} className="pt-4 border-t border-gray-100">
                      <button className="w-full px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg">
                          Login
                      </button>
                  </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navber;

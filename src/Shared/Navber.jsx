import React, { useState } from 'react';
import { HiBars3CenterLeft } from 'react-icons/hi2';
import { ImCancelCircle } from 'react-icons/im';
import logo from '../assets/image/logo.png'
import { NavLink } from 'react-router-dom';
const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = <>
    <NavLink className='md:hover:text-secondary md:focus:bg-green-100 md:focus:btn md:focus:btn-sm hover:text-white'>
              Home
            </NavLink>
    <NavLink className='md:hover:text-secondary md:focus:bg-green-100 md:focus:btn md:focus:btn-sm hover:text-white'>
    Apartment
            </NavLink>
  
    
    </>

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
            <div className="hidden md:flex items-center space-x-6">
              {links}
            </div>

            {/* Login Button (visible on all screens) */}
           
              <div className='flex items-center gap-4'>
              <button className="btn bg-secondary text-white px-4 py-2 rounded hover:bg-green-600">
                Login
              </button>
           

            {/* Hamburger Menu for Mobile */}
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
            <div className="flex flex-col space-y-4 px-4 py-6">
              {links}
            </div>
          </div>
        )}
      </nav>
            
        </div>
    );
};

export default Navber;
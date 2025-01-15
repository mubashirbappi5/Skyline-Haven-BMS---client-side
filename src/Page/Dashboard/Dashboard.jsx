import React, { useState } from 'react';
import useAuth from './../../Hooks/useAuth';
import { Link, Outlet } from 'react-router-dom';
import logo from '../.././assets/image/logo.png'
import { FaUserAlt } from 'react-icons/fa';
import { GrAnnounce } from 'react-icons/gr';
import { RiNewspaperLine } from 'react-icons/ri';
import { BiSolidCoupon } from 'react-icons/bi';
const Dashboard = () => {
    const {user} = useAuth()
   
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleDrawer = () => setIsOpen(!isOpen);
        const  admin = true
    const  member = false;
    
  
    return (
        <div className='md:grid grid-cols-12'>
        <section className='col-span-2'>
        <div className="sm:hidden bg-secondary dark:bg-gray-900 p-4 flex items-center justify-between">
        <button
          onClick={toggleDrawer}
          className="text-gray-700 dark:text-gray-200 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
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
        </button>
        <h1 className="text-lg font-bold text-gray-800 bg-white dark:text-gray-200">
        <img className='w-28' src={logo} alt="" />
        </h1>
      
      </div>

      {/* Sidebar / Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50  h-screen w-64 bg-secondary dark:bg-gray-900 p-4 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:relative sm:translate-x-0 sm:w-64`}
      >
        <div className="flex items-center sm:flex-col sm:mt-6 -mx-2">
        
        
          <img
            className="object-cover w-10 h-10 sm:w-24 sm:h-24 mx-2 rounded-full"
            src={user.photoURL}
            alt="avatar"
          />
          <div className="sm:mt-4">
            <h4 className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200">
              {user.displayName}
            </h4>
            
            <p className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-400">
              {user.email}
            </p>
          </div>
        </div>
        <div className="divider"></div>
      {
        (admin? 
        <nav className="mt-6 flex flex-col space-y-3">
            <Link
              to={""}
              className="flex items-center px-4 py-2 text-gray-700 focus-within:bg-slate-50 hover:bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-4  font-medium">Admin Dashboard</span>
            </Link>
  
            <Link
              to={"managemember"}
              className="flex items-center focus:bg-slate-50 px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
            >
             <FaUserAlt /> 
              <span className="ml-4  font-medium"> Manage Members</span>
            </Link>
            <Link
              to={"makeannounce"}
              className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
            >
             <GrAnnounce />
              <span className="ml-4  font-medium">Make Announcement
              </span>
            </Link>
            <Link
              to={"agreeRequest"}
              className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
            >
             <RiNewspaperLine />
              <span className="ml-4  font-medium">Agreement Requests
              </span>
            </Link>
            <Link
              to={"manageCoupon"}
              className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
            >
             <BiSolidCoupon />
              <span className="ml-4  font-medium">Manage Coupons</span>
            </Link>

         
        

          </nav>:member?
           <nav className="mt-6 flex flex-col space-y-3">
          <Link
            to={"/"}
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-4  font-medium"> member Dashboard</span>
          </Link>

          <Link
            to={"/login"}
            className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-4  font-medium">Accounts</span>
          </Link>
        </nav>:
         <nav className="mt-6 flex flex-col space-y-3">
          <Link
            to={"/"}
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-4  font-medium">User Dashboard</span>
          </Link>

          <Link
            to={"/login"}
            className="flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-4  font-medium">Accounts</span>
          </Link>
        </nav>)
      }
       
      </aside>

      {/* Overlay for drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={toggleDrawer}
        ></div>
      )}
         
         </section>
         <section className='col-span-10'>
               <Outlet/>
         


         </section>

      
      </div>
      
    );
};

export default Dashboard;
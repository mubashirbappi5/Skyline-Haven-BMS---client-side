import React, { useState } from 'react';
import Register from '../Register/Register';
import SocialLogin from '../../../Shared/SocialLogin';
import logo from '../../../assets/image/logo.png'
import bg1 from '../../../assets/image/circle-scatter-haikei.png'
import bg2 from '../../../assets/image/bg2.png'

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    return (
        <div>
            <section className="bg-white min-h-screen dark:bg-gray-900">
      <div className="container  flex  justify-center  px-6  mx-auto">
        <form className="w-full my-4 lg:my-0 max-w-md">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-10 sm:h-8"
              src={logo}
              alt="Logo"
            />
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              type="button"
              onClick={() => setIsSignUp(false)}
              className={`w-1/3 pb-4 font-medium text-center capitalize ${
                !isSignUp
                  ? "border-b-2 text-gray-800 border-blue-500 dark:border-blue-400 dark:text-white"
                  : "text-gray-500 dark:text-gray-300"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setIsSignUp(true)}
              className={`w-1/3 pb-4 font-medium text-center capitalize ${
                isSignUp
                  ? "border-b-2 text-gray-800 border-blue-500 dark:border-blue-400 dark:text-white"
                  : "text-gray-500 dark:text-gray-300"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Conditional Rendering */}
          {!isSignUp ? (
            // Sign In Form
            <div>
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
              </div>

              <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign In
                </button>
              </div>
              <SocialLogin/>
            </div>
          ) : (
            // Sign Up Form
            <Register/>
          )}
        </form>
      </div>
      <div className={` w-96 hidden lg:flex absolute ${isSignUp?'lg:-bottom-44  left-0':' -bottom-20 left-0'}`}>
      <img src={bg1} alt="" />
    
      </div>
      <div className={`w-80 hidden lg:flex  absolute ${isSignUp?'-bottom-44 right-0':' -bottom-20 right-0'}`}>
      <img src={bg2} alt="" />
      </div>
    </section>
   
            
        </div>
    );
};

export default Login;
import React, { useContext, useState } from "react";
import Register from "../Register/Register";
import SocialLogin from "../../../Shared/SocialLogin";
import logo from "../../../assets/image/logo.png";
import bgImg from "../../../assets/image/building.jpg";
import { Authcontext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Loading from "../../../Shared/Loading";
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { signinUser, loading, setloading } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();
  const froms = location.state?.from?.pathname || "/";

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signinUser(email, password)
      .then((res) => {
        Swal.fire({
          title: "Login",
          text: "Your login successful!.",
          icon: "success",
        });
        navigate(froms, { replace: true });
      })
      .catch((error) => {
        setloading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <section className="flex min-h-screen w-full bg-white relative">
          
          {/* Left Side: Premium Image Splash */}
          <div className="hidden lg:flex lg:w-1/2 relative bg-text overflow-hidden">
             <div 
                className="absolute inset-0 bg-cover bg-center opacity-50 transform hover:scale-105 transition-transform duration-[10s]"
                style={{ backgroundImage: `url(${bgImg})` }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-t from-text via-text/50 to-transparent"></div>
             
             {/* Text Content over Image */}
             <div className="absolute inset-0 flex flex-col justify-center p-16 z-10 text-white space-y-6">
                <Link to="/">
                    <img className="h-10 mb-8" src={logo} alt="Skyline Haven Logo" />
                </Link>
                <h1 className="text-5xl font-black leading-tight">
                    Welcome to<br/>Modern Luxury.
                </h1>
                <p className="text-gray-300 text-lg font-light max-w-md">
                    Access your personalized dashboard to manage your properties, monitor payments, and seamlessly control your living experience.
                </p>
             </div>
          </div>

          {/* Right Side: Authentication Panel */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-20 bg-gray-50/50">
             <div className="w-full max-w-md bg-white p-10 rounded-[2rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="lg:hidden flex justify-center mb-8">
                   <Link to="/">
                      <img className="h-8" src={logo} alt="Skyline Haven Logo" />
                   </Link>
                </div>

                <div className="text-center mb-10">
                   <h2 className="text-3xl font-black text-text mb-2">
                       {isSignUp ? "Create an Account" : "Welcome Back"}
                   </h2>
                   <p className="text-gray-400 font-light text-sm">
                       {isSignUp ? "Sign up to start your journey." : "Please enter your details to sign in."}
                   </p>
                </div>

                {/* Custom Toggle Switch */}
                <div className="flex bg-gray-100 rounded-full p-1 mb-8 relative">
                   <div 
                      className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${isSignUp ? 'left-[calc(50%+2px)]' : 'left-1'}`}
                   ></div>
                   <button
                      type="button"
                      onClick={() => setIsSignUp(false)}
                      className={`w-1/2 py-3 text-sm font-bold z-10 transition-colors duration-300 rounded-full ${!isSignUp ? 'text-text' : 'text-gray-500'}`}
                   >
                      Sign In
                   </button>
                   <button
                      type="button"
                      onClick={() => setIsSignUp(true)}
                      className={`w-1/2 py-3 text-sm font-bold z-10 transition-colors duration-300 rounded-full ${isSignUp ? 'text-text' : 'text-gray-500'}`}
                   >
                      Sign Up
                   </button>
                </div>

                {!isSignUp ? (
                  <form onSubmit={handlelogin} className="space-y-6 relative z-10">
                    
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                       <div className="relative flex items-center">
                          <span className="absolute left-4 text-gray-400">
                             <FaEnvelope />
                          </span>
                          <input
                            type="email"
                            name="email"
                            className="w-full py-4 pl-12 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-text focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                            placeholder="john@example.com"
                            required
                          />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Password</label>
                       <div className="relative flex items-center">
                          <span className="absolute left-4 text-gray-400">
                             <FaLock />
                          </span>
                          <input
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            className="w-full py-4 pl-12 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-text focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                            placeholder="••••••••"
                            required
                          />
                       </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 mt-2 text-sm font-black tracking-widest uppercase rounded-xl bg-text text-white hover:bg-primary shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Sign In
                    </button>

                    <SocialLogin />
                  </form>
                ) : (
                  <Register />
                )}
             </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Login;

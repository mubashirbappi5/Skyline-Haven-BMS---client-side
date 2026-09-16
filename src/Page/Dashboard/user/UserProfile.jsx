import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBuilding, FaKey, FaCalendarCheck, FaMoneyBillWave, FaClock } from "react-icons/fa";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-12 font-sans relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 overflow-hidden mb-12 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-center p-8 md:p-12 gap-10 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50"></div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              <img
                src={user?.photoURL || "https://ui-avatars.com/api/?name=Guest&background=random"}
                alt="Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg relative z-10 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="text-center md:text-left flex-1 relative z-10">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Resident Profile</h2>
              <h1 className="text-4xl md:text-5xl font-black text-text mb-4 tracking-tight">
                Welcome back, <span className="bg-clip-text text-transparent bg-gradient-to-r from-text to-gray-500">{user?.displayName || "Guest"}</span>
              </h1>
              <p className="text-lg text-gray-500 font-medium">{user?.email}</p>
            </div>
            
            <div className="relative z-10 w-full md:w-auto">
              <Link to="/apartments">
                <button className="w-full md:w-auto px-8 py-4 bg-text text-white rounded-2xl font-bold tracking-wide shadow-xl shadow-text/20 hover:bg-primary hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
                  Find New Apartment
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Current Lease", value: "None Active", icon: <FaKey />, color: "text-blue-500", bg: "bg-blue-50" },
            { title: "Pending Requests", value: "0 Requests", icon: <FaClock />, color: "text-primary", bg: "bg-primary/10" },
            { title: "Next Payment", value: "--", icon: <FaMoneyBillWave />, color: "text-rose-500", bg: "bg-rose-50" },
            { title: "Member Since", value: new Date().getFullYear(), icon: <FaCalendarCheck />, color: "text-purple-500", bg: "bg-purple-50" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100 border border-gray-50 flex items-center gap-6 hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.title}</p>
                <h3 className="text-2xl font-black text-text">{stat.value}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agreements Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-100 border border-gray-50"
        >
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-text mb-2">My Agreements</h2>
              <p className="text-gray-400 font-medium">Track your apartment requests and active leases</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Apartment Details</th>
                  <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Request Date</th>
                  <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Rent</th>
                  <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                  <th className="text-left py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="py-24 text-center">
                    <div className="flex flex-col items-center justify-center space-y-6">
                      <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 text-5xl">
                        <FaBuilding />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-400 mb-2">No Active Agreements</h3>
                        <p className="text-gray-400 font-medium">You haven't requested any apartments yet.</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default UserProfile;

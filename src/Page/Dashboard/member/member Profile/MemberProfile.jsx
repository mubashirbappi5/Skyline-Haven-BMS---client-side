import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../../Hooks/useAxiosSecure";
import moment from "moment";
import { FaUserCircle, FaBuilding, FaRegCalendarAlt, FaCheckCircle, FaMoneyCheckAlt } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { BsBuilding, BsFileEarmarkText } from "react-icons/bs";

const MemberProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myAgreement = [] } = useQuery({
    queryKey: "myrequest",
    queryFn: async () => {
      const res = await axiosSecure.get(`/accept/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 p-8 md:p-12 shadow-2xl text-white">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-20">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M45.7,-76.4C58.8,-69.3,68.7,-55.5,77.5,-41.2C86.3,-26.9,94,-12.1,92.5,2.1C91,16.2,80.4,29.7,70.5,41.7C60.6,53.8,51.3,64.5,39.4,72.4C27.5,80.3,13.8,85.5,-0.6,86.6C-15,87.7,-30,84.7,-43.3,77.3C-56.5,70,-68.1,58.3,-75.7,44.7C-83.3,31.1,-86.9,15.6,-85.7,0.7C-84.5,-14.2,-78.6,-28.4,-70.5,-41.1C-62.5,-53.8,-52.3,-65,-40,-72.1C-27.7,-79.1,-13.9,-82,1.3,-83.9C16.4,-85.8,32.7,-83.5,45.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-white opacity-30 rounded-full blur transition duration-500 group-hover:opacity-60"></div>
                <img
                  className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-xl"
                  src={user?.photoURL || "https://i.ibb.co/1q2x7vX/avatar.png"}
                  alt="Member Avatar"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-emerald-50 text-sm font-bold tracking-wide border border-white/30 backdrop-blur-sm mb-3">
                   <IoDiamondOutline /> Premium Member
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-md">
                  Welcome, {user?.displayName}
                </h1>
                <p className="text-emerald-100 flex items-center justify-center md:justify-start gap-2 text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {user?.email}
                </p>
              </div>
            </div>
            
            <div className="hidden lg:flex gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-center">
                 <p className="text-emerald-100 text-sm font-medium uppercase tracking-wider mb-1">Agreements</p>
                 <p className="text-4xl font-black text-white">{myAgreement.length}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Agreements Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mt-8">
          
          <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
               <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl">
                 <BsFileEarmarkText className="text-2xl" />
               </div>
               <div>
                 <h2 className="text-2xl font-bold text-gray-800">My Agreements</h2>
                 <p className="text-gray-500 text-sm">Review your active apartment leases</p>
               </div>
            </div>
            <Link to="/apartments">
              <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <HiOutlineHome className="text-xl" />
                Find New Rent
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Apartment Details</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Accept Date</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Rent</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="py-5 px-6 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {myAgreement && myAgreement.length > 0 ? (
                  myAgreement.map((agree, idx) => (
                    <tr key={agree._id || idx} className="hover:bg-emerald-50/30 transition-colors duration-200 group">
                      <td className="py-4 px-6">
                         <div className="flex items-center gap-3">
                           <div className="p-2 bg-teal-50 text-teal-500 rounded-lg group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                             <BsBuilding className="text-lg" />
                           </div>
                           <div>
                             <p className="text-sm font-bold text-gray-800">Apt: {agree.apartmentNo}</p>
                             <p className="text-xs text-gray-500">Block {agree.blockName} • Floor {agree.floorNo}</p>
                           </div>
                         </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600 font-medium">
                        {moment(agree.accept_date).subtract(10, "days").calendar()}
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-lg font-bold text-gray-800">${agree.rent}</span>
                        <span className="text-xs text-gray-500 block">/month</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {agree.Status || "Active"}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Link to="/dashboard/makepay" className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white font-bold transition-all duration-300 focus:ring-2 focus:ring-emerald-200 group-hover:shadow-md">
                          Pay Now
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-16 text-center">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                           <BsFileEarmarkText className="text-5xl text-gray-300" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">No Agreements Found</h3>
                        <p className="text-sm text-gray-500 max-w-sm">
                          You don't have any active apartment agreements yet. Browse available apartments to get started.
                        </p>
                        <Link to="/apartments" className="mt-4 inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition duration-300">
                          Browse Apartments
                        </Link>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MemberProfile;

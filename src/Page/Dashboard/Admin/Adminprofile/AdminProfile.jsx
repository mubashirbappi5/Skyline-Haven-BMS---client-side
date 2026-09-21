import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaUsers, FaUserTie, FaBuilding, FaFileContract, FaCheckCircle } from "react-icons/fa";

const AdminProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: report = [], isLoading } = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminreport");
      return res.data;
    },
  });

  if (isLoading) {
    return <div className="flex justify-center mt-20"><span className="loading loading-spinner loading-lg text-green-500"></span></div>;
  }

  const availableApartmets = report.totalApartments - (report.totalAgreement || 0);
  const PercentageofAgreement = report.totalApartments ? 
    (report.totalAgreement / report.totalApartments) * 100 : 0;
  const PercentageofavailableApartment = report.totalApartments ? 
    (availableApartmets / report.totalApartments) * 100 : 0;

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 p-8 md:p-12 shadow-2xl text-white">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-20">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M45.7,-76.4C58.8,-69.3,68.7,-55.5,77.5,-41.2C86.3,-26.9,94,-12.1,92.5,2.1C91,16.2,80.4,29.7,70.5,41.7C60.6,53.8,51.3,64.5,39.4,72.4C27.5,80.3,13.8,85.5,-0.6,86.6C-15,87.7,-30,84.7,-43.3,77.3C-56.5,70,-68.1,58.3,-75.7,44.7C-83.3,31.1,-86.9,15.6,-85.7,0.7C-84.5,-14.2,-78.6,-28.4,-70.5,-41.1C-62.5,-53.8,-52.3,-65,-40,-72.1C-27.7,-79.1,-13.9,-82,1.3,-83.9C16.4,-85.8,32.7,-83.5,45.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-white opacity-30 rounded-full blur transition duration-500 group-hover:opacity-60"></div>
              <img
                className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-xl"
                src={user?.photoURL || "https://i.ibb.co/1q2x7vX/avatar.png"}
                alt="Admin"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-green-100 mb-1">System Administrator</h2>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white drop-shadow-md">
                Welcome, {user?.displayName}
              </h1>
              <p className="text-green-50 flex items-center justify-center md:justify-start gap-2 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                <FaUsers className="text-2xl" />
              </div>
              <span className="text-xs font-semibold text-blue-500 bg-blue-50 px-3 py-1 rounded-full">+ Total</span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">Total Registered Users</h3>
            <p className="text-3xl font-bold text-gray-800 mt-1">{report.totalUsers || 0}</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                <FaUserTie className="text-2xl" />
              </div>
              <span className="text-xs font-semibold text-purple-500 bg-purple-50 px-3 py-1 rounded-full">Active</span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">Verified Members</h3>
            <p className="text-3xl font-bold text-gray-800 mt-1">{report.totalMembers || 0}</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <FaBuilding className="text-2xl" />
              </div>
              <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">Properties</span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">Total Apartments</h3>
            <p className="text-3xl font-bold text-gray-800 mt-1">{report.totalApartments || 0}</p>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          {/* Agreement Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-50 text-indigo-500 rounded-lg">
                  <FaFileContract className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Occupancy Overview</h3>
              </div>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-extrabold text-gray-900">{report.totalAgreement || 0}</span>
                <span className="text-gray-500 text-sm mb-1 font-medium">rented out of {report.totalApartments || 0}</span>
              </div>
              
              <div className="w-full bg-gray-100 rounded-full h-2.5 mt-4 overflow-hidden">
                <div 
                  className="bg-indigo-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${PercentageofAgreement}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs font-medium text-gray-500">
                <span>0%</span>
                <span>{PercentageofAgreement.toFixed(1)}% Rented</span>
              </div>
            </div>
          </div>

          {/* Availability Stats */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-50 text-emerald-500 rounded-lg">
                  <FaCheckCircle className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Available Units</h3>
              </div>
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-extrabold text-gray-900">{availableApartmets || 0}</span>
                <span className="text-gray-500 text-sm mb-1 font-medium">units ready to rent</span>
              </div>
              
              <div className="w-full bg-gray-100 rounded-full h-2.5 mt-4 overflow-hidden">
                <div 
                  className="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${PercentageofavailableApartment}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs font-medium text-gray-500">
                <span>0%</span>
                <span>{PercentageofavailableApartment.toFixed(1)}% Available</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminProfile;

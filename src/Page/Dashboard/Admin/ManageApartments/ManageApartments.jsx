import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaBuilding, FaUserCircle, FaMoneyCheckAlt, FaCheckCircle, FaHourglassHalf, FaRegCircle } from "react-icons/fa";

const ManageApartments = () => {
  const axiosSecure = useAxiosSecure();
  
  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ["admin-apartments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/apartments");
      return res.data;
    },
  });

  if (isLoading) {
    return <div className="flex justify-center mt-20"><span className="loading loading-spinner loading-lg text-green-500"></span></div>;
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'available':
        return <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><FaRegCircle /> Available</span>;
      case 'pending':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><FaHourglassHalf /> Pending</span>;
      case 'booked':
        return <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><FaCheckCircle /> Booked</span>;
      default:
        return <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><FaRegCircle /> {status}</span>;
    }
  };

  const getPaymentBadge = (paymentStatus) => {
    if (paymentStatus === 'paid') {
      return <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><FaMoneyCheckAlt /> Paid</span>;
    }
    return <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-bold flex items-center gap-1 w-fit"><FaMoneyCheckAlt /> Unpaid</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-20">
             <FaBuilding className="text-[12rem]" />
          </div>
          <div className="relative z-10 flex items-center gap-4">
             <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 hidden md:block">
                 <FaBuilding className="text-4xl text-white" />
             </div>
             <div>
               <h1 className="text-3xl font-extrabold tracking-tight">
                 Manage Apartments
               </h1>
               <p className="mt-2 text-green-100 text-lg">
                 Overview of all apartments, booking status, and ownership details.
               </p>
             </div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center bg-white/20 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/30 min-w-[140px]">
            <span className="text-sm font-semibold uppercase tracking-wider text-green-50">Total</span>
            <span className="text-4xl font-bold">{apartments.length}</span>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mt-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Apartment Details</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Booked By</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Payment Status</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Rent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {apartments.length > 0 ? (
                  apartments.map((apt) => (
                    <tr
                      key={apt._id}
                      className="hover:bg-green-50/30 transition-colors duration-200 group"
                    >
                      <td className="py-4 px-6">
                         <div className="flex items-center gap-3">
                           <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden">
                               {apt.imageUrl ? (
                                   <img src={apt.imageUrl} alt="Apartment" className="w-full h-full object-cover" />
                               ) : (
                                   <div className="w-full h-full flex items-center justify-center text-gray-400"><FaBuilding /></div>
                               )}
                           </div>
                           <div>
                             <p className="text-sm font-bold text-gray-800">Apt: {apt.apartmentNo}</p>
                             <p className="text-xs text-gray-500">Block {apt.blockName} • Floor {apt.floorNo}</p>
                           </div>
                         </div>
                      </td>
                      <td className="py-4 px-6">
                        {getStatusBadge(apt.status)}
                      </td>
                      <td className="py-4 px-6">
                        {apt.bookedBy ? (
                            <div className="flex items-center gap-2">
                                <FaUserCircle className="text-emerald-500 text-lg" />
                                <span className="text-sm font-medium text-gray-700">{apt.bookedBy}</span>
                            </div>
                        ) : (
                            <span className="text-sm text-gray-400 italic">None</span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        {getPaymentBadge(apt.paymentStatus)}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="text-lg font-bold text-gray-800">${apt.rent}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-16 text-center text-gray-500">
                        No apartments found.
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

export default ManageApartments;

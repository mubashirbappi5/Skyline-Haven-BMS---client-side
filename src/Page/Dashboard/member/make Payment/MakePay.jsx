import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { Link, Outlet } from "react-router-dom";
import { FaBuilding, FaMoneyCheckAlt, FaCheckCircle } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import Loading from "../../../../Shared/Loading";

const MakePay = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: myAgreements = [], isLoading } = useQuery({
      queryKey: ['myrequest'],
      queryFn: async () => {
        const res = await axiosSecure.get(`/accept/${user.email}`);
        return res.data;
      }
    });

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600 p-8 md:p-12 shadow-xl text-white text-center">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-20">
             <MdOutlinePayments className="text-[12rem]" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 mb-4 inline-block">
               <MdOutlinePayments className="text-4xl text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
              Complete Your Payment
            </h1>
            <p className="mt-4 text-emerald-100 text-lg max-w-2xl mx-auto">
              Easily make your payment for the selected apartment. Secure, fast, and convenient!
            </p>
          </div>
        </div>

        {/* Agreements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myAgreements.map((agreement) => (
            <div
              key={agreement._id}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between border-b border-gray-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                   <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                     <FaBuilding className="text-xl" />
                   </div>
                   <div>
                     <p className="text-sm text-gray-500 font-medium">Apartment</p>
                     <h2 className="text-2xl font-black text-gray-800">Apt {agreement.apartmentNo}</h2>
                   </div>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <FaCheckCircle /> {agreement.Status}
                </span>
              </div>

              <div className="mb-6 bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                <p className="text-sm text-gray-500 font-medium mb-1">Monthly Rent</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-3xl font-extrabold text-gray-800">${agreement.rent}</span>
                </div>
              </div>

              <Link to={`payform/${agreement._id}`} className="block">
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 px-6 rounded-2xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md group-hover:shadow-lg">
                  <FaMoneyCheckAlt className="text-xl" />
                  Proceed to Pay
                </button>
              </Link>
            </div>
          ))}
          {myAgreements.length === 0 && (
            <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-gray-100">
              <MdOutlinePayments className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800">No Pending Payments</h3>
              <p className="text-gray-500 mt-2">You do not have any apartment agreements requiring payment at this time.</p>
            </div>
          )}
        </div>

        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default MakePay;

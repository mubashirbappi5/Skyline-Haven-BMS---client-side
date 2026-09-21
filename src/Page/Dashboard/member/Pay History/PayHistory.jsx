import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import { FaHistory, FaCalendarAlt, FaHashtag, FaMoneyBillWave, FaFileInvoiceDollar } from "react-icons/fa";
import Loading from "../../../../Shared/Loading";

const PayHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payhistory = [], isLoading } = useQuery({
    queryKey: ["payhistory", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600 p-8 md:p-12 shadow-xl text-white text-center">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-20">
             <FaHistory className="text-[12rem]" />
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 mb-4 inline-block">
               <FaFileInvoiceDollar className="text-4xl text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
              Payment History
            </h1>
            <p className="mt-4 text-emerald-100 text-lg max-w-2xl mx-auto">
              Keep track of your payments, transactions, and rental history effortlessly.
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mt-8">
          
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="p-3 bg-emerald-50 text-emerald-500 rounded-xl">
                 <FaHistory className="text-2xl" />
               </div>
               <div>
                 <h2 className="text-2xl font-bold text-gray-800">Transaction Log</h2>
                 <p className="text-gray-500 text-sm">Your recent payment activities</p>
               </div>
            </div>
            <div className="hidden sm:block px-4 py-2 bg-gray-50 rounded-lg border border-gray-100">
               <span className="text-sm font-bold text-gray-600">Total Records: <span className="text-emerald-600">{payhistory.length}</span></span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider w-16 text-center">#</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">
                     <span className="flex items-center gap-2"><FaCalendarAlt className="text-emerald-500"/> Date</span>
                  </th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">
                     <span className="flex items-center gap-2"><FaHashtag className="text-emerald-500"/> Transaction ID</span>
                  </th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">
                     <span className="flex items-center gap-2"><FaMoneyBillWave className="text-emerald-500"/> Rent Paid</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {payhistory && payhistory.length > 0 ? (
                  payhistory.map((history, idx) => (
                    <tr key={idx} className="hover:bg-emerald-50/30 transition-colors duration-200 group">
                      <td className="py-4 px-6 text-center text-sm font-bold text-gray-400 group-hover:text-emerald-500">
                         {idx + 1}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600 font-medium">
                        {moment(history.createdAt).calendar()}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono bg-gray-100 text-gray-700 border border-gray-200">
                           {history._id}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-lg font-bold text-emerald-600">${history.amount}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-16 text-center">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                           <FaHistory className="text-5xl text-gray-300" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">No Payment History</h3>
                        <p className="text-sm text-gray-500 max-w-sm">
                          You haven't made any payments yet. Once you make a payment, it will appear here.
                        </p>
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

export default PayHistory;

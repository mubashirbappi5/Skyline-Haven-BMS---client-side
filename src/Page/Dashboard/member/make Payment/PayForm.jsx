import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUser, FaEnvelope, FaBuilding, FaLayerGroup, FaHashtag, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import Loading from '../../../../Shared/Loading';

const PayForm = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { user } = useAuth();
    
    const { data, isLoading } = useQuery({
      queryKey: ['myrequest', id],
      queryFn: async () => {
         const res = await axiosSecure.get(`/accept/${user.email}`);
         const allagreemet = res.data;
         const agreement = allagreemet.find(agree => agree._id === id);
         return agreement || null;
      }
    });
   
    const agreement = Array.isArray(data) ? data[0] : data;


    const handlepay = (e) => {
      e.preventDefault();
      const form = e.target;
      const apartmentNo = form.apartmentNo.value;
      const floorNo = form.floorNo.value;
      const Rent = agreement?.rent;
      const month = form.month.value;
      const totalPay = Rent;
      const agreementconfim_id = id;
      
      const payinfo = {
          apartmentNo,
          floorNo,
          Rent,
          month,
          blockName,
          email,
          totalPay,
          agreementconfim_id
      };
      
      navigate('confimpay', { state: payinfo });
    };

    if (isLoading) return <Loading />;
    if (!agreement) return null; // Simple guard

    return (
        <div className="py-8">
          <section className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            
            {/* Form Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <MdOutlinePayments className="text-5xl mx-auto mb-3 relative z-10" />
              <h2 className="text-3xl font-extrabold relative z-10">
                Payment Details
              </h2>
              <p className="text-emerald-100 mt-2 relative z-10">Review your information and proceed to checkout.</p>
            </div>

            <form onSubmit={handlepay} className="p-8 md:p-10 space-y-8">
              
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <FaUser className="text-emerald-500" /> Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={agreement?.userName || ''}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all text-gray-600 cursor-not-allowed"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <FaEnvelope className="text-emerald-500" /> Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={agreement?.userEmail || ''}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all text-gray-600 cursor-not-allowed"
                  />
                </div>

                {/* Block Name */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <FaBuilding className="text-emerald-500" /> Block Name
                  </label>
                  <input
                    name="block"
                    type="text"
                    value={agreement?.blockName || ''}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all text-gray-600 cursor-not-allowed"
                  />
                </div>

                {/* Floor */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <FaLayerGroup className="text-emerald-500" /> Floor Number
                  </label>
                  <input
                    name="floorNo"
                    type="number"
                    value={agreement?.floorNo || ''}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all text-gray-600 cursor-not-allowed"
                  />
                </div>

                {/* Apartment No */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <FaHashtag className="text-emerald-500" /> Apartment Number
                  </label>
                  <input
                    name="apartmentNo"
                    type="number"
                    value={agreement?.apartmentNo || ''}
                    readOnly
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all text-gray-600 cursor-not-allowed"
                  />
                </div>

                {/* Rent */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <FaMoneyBillWave className="text-emerald-500" /> Monthly Rent
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 font-bold">$</div>
                    <input
                      name="rent"
                      type="number"
                      value={agreement?.rent || ''}
                      readOnly
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all text-gray-600 font-bold cursor-not-allowed"
                    />
                  </div>
                </div>
                
                <div className="col-span-1 md:col-span-2 border-t border-gray-100 pt-6 mt-2"></div>

                {/* Month Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <FaCalendarAlt className="text-emerald-500" /> Payment Month
                  </label>
                  <select
                    name='month'
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-emerald-500/50 outline-none transition-all text-gray-700"
                  >
                    <option value="" disabled selected>Select Month</option>
                    <option value="jan">January</option>
                    <option value="feb">February</option>
                    <option value="mar">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="jun">June</option>
                    <option value="jul">July</option>
                    <option value="aug">August</option>
                    <option value="sep">September</option>
                    <option value="oct">October</option>
                    <option value="nov">November</option>
                    <option value="dec">December</option>
                  </select>
                </div>

              </div>

              {/* Total Calculation summary */}
              <div className="bg-emerald-50 rounded-2xl p-6 mt-8 border border-emerald-100 flex flex-col md:flex-row justify-between items-center gap-4">
                 <div>
                   <h3 className="text-lg font-bold text-gray-800">Payment Summary</h3>
                 </div>
                 <div className="text-right">
                   <p className="text-sm text-gray-500 font-medium mb-1">Total to Pay</p>
                   <p className="text-4xl font-black text-emerald-600">${agreement?.rent}</p>
                 </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 font-bold text-white transition-all duration-300 transform bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl hover:from-emerald-600 hover:to-teal-700 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-500/30 text-lg flex items-center justify-center gap-2"
                >
                  <MdOutlinePayments className="text-xl" />
                  Proceed to Checkout
                </button>
              </div>
            </form>
          </section> 
        </div>
    );
};

export default PayForm;
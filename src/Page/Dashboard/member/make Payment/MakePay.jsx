import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import { Link, Outlet } from "react-router-dom";

const MakePay = () => {
    const{user}=useAuth()
    const axiosSecure = useAxiosSecure()
   const {data:myAgreements=[]}=useQuery({
     queryKey:'myrequest',
     queryFn:async()=>{
        const res = await axiosSecure.get(`/accept/${user.email}`)
        return res.data
     }
   })
  return (
    <div className="container min-h-screen mx-auto py-12 px-8">
  <section className="text-center mb-10">
    <h1 className="text-4xl font-extrabold text-[#94f08c]">Complete Your Payment</h1>
    <p className="text-lg text-gray-600 mt-4">Easily make your payment for the selected apartment. Secure, fast, and convenient!</p>
  </section>
  <div className="divider"></div>

  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {myAgreements.map((agreement) => (
      <div
        key={agreement._id}
        className="bg-white p-6 border-b-2 border-t-2 border-primary rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
      >
        <div className="border-b-2 border-[#94f08c] pb-4 mb-4">
          <h2 className="text-2xl font-semibold text-[#2f4f4f]">Apartment No. {agreement.apartmentNo}</h2>
          <h3 className="text-lg text-gray-700">Status: {agreement.Status}</h3>
        </div>

        <div className="mb-4">
          <h3 className="text-xl text-gray-800">Rent: ${agreement.rent}</h3>
        </div>

        <div className="flex justify-center mt-4">
          <Link to={`payform/${agreement._id}`}>
            <button className="btn bg-[#94f08c] text-white hover:bg-green-500 transition duration-300 px-8 py-2 rounded-full shadow-md transform hover:scale-105">
              Pay Now
            </button>
          </Link>
        </div>
      </div>
    ))}
  </section>

  <section>
    <Outlet />
  </section>
</div>

  );
};

export default MakePay;

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
    <div>
      <h1>this is pay</h1>

      <section className="grid  grid-cols-4 gap-4">
    {
       myAgreements.map(agreement=><section className="p-4 border-2 rounded-lg">
        <h1>Apartment No.{agreement.apartmentNo}</h1>
        <h1>Status:{agreement.Status}</h1>
        <h1>Rent:${agreement.rent}</h1>

       <Link to={`payform/${agreement._id}`}><button className="btn">Pay</button> </Link>
       </section>) 
    }

      

 
      </section>
      <section>
        <Outlet/>
      </section>
    </div>
  );
};

export default MakePay;

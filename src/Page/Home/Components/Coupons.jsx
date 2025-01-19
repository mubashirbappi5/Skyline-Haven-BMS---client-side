import React from "react";
import CommonHeader from "../../../Shared/CommonHeader";
import useCoupon from "./../../../Hooks/useCoupon";
import { Link } from "react-router-dom";

const Coupons = () => {
  const [coupons] = useCoupon();
 
const activeCoupon = coupons.filter(coupon=> coupon.status==='active')
  return (
    <div>
      <CommonHeader
        title={"Exclusive Offers Just for You!"}
        subtitle={"coupons"}
      ></CommonHeader>
      <section>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 bg-gradient-to-br from-green-100 via-gray-50 to-green-50">
          {
            activeCoupon.map(coupon=>
               
          <div className="relative bg-white shadow-2xl rounded-lg mx-auto   w-80  overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="absolute top-10 -left-4 bg-gradient-to-r from-primary to-green-500 text-white px-6 py-1 text-sm font-bold rotate-[-45deg] -translate-y-6 translate-x-6 shadow-md">
           {coupon.discountPercentage}% OFF
          </div>
          <div className="p-8 text-center">
            <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
              Exclusive Coupon!
            </h2>
            <p className="text-gray-500 text-base mb-6">
             {coupon.Description}
            </p>
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-dashed border-green-300 text-primary font-bold py-3 px-6 rounded-lg text-xl tracking-wider mb-8 shadow-inner">
             {coupon.coupon_code}
            </div>
           <Link to={'/apartments'}>
           <button className="bg-primary text-white w-full py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
              Redeem Now
            </button>
           </Link>
          </div>
          <div className="bg-gray-100 text-gray-400 text-xs p-4 border-t border-gray-200">
            * Terms & conditions apply.
          </div>
        </div>
            )
          }
          
         
          
        </div>
      </section>
    </div>
  );
};

export default Coupons;

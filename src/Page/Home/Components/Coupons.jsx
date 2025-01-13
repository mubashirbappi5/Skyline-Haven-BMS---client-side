import React from 'react';
import CommonHeader from '../../../Shared/CommonHeader';

const Coupons = () => {
    return (
        <div>
            <CommonHeader title={'Exclusive Offers Just for You!'} subtitle={'coupons'}></CommonHeader>
            <section>
          
            <div className="grid grid-cols-3 gap-6 p-5 bg-gradient-to-br from-green-100 via-gray-50 to-green-50">
  <div className="relative bg-white shadow-2xl rounded-lg   overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out">
   
    <div className="absolute top-10 -left-4 bg-gradient-to-r from-primary to-green-500 text-white px-6 py-1 text-sm font-bold rotate-[-45deg] -translate-y-6 translate-x-6 shadow-md">
      15% OFF
    </div>
    <div className="p-8 text-center">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Exclusive 15% Off Your First Rent!</h2>
      <p className="text-gray-500 text-base mb-6">
      Save 15% on your first month's rent when you sign the lease at Skyline Haven.

      </p>
      <div className="bg-gradient-to-r from-green-50 to-green-100 border border-dashed border-green-300 text-primary font-bold py-3 px-6 rounded-lg text-xl tracking-wider mb-8 shadow-inner">
      NEW15
      </div>
      <button className="bg-primary text-white w-full py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
        Redeem Now
      </button>
    </div>
    <div className="bg-gray-100 text-gray-400 text-xs p-4 border-t border-gray-200">
      * Valid until 31st December. Terms & conditions apply.
    </div>
  </div>
  <div className="relative bg-white shadow-2xl rounded-lg max-w-sm w-full overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out">
   
    <div className="absolute top-10 -left-4 bg-gradient-to-r from-primary to-green-500 text-white px-6 py-1 text-sm font-bold rotate-[-45deg] -translate-y-6 translate-x-6 shadow-md">
      50% OFF
    </div>
    <div className="p-8 text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Limited-Time Exclusive Offer</h2>
      <p className="text-gray-500 text-base mb-6">
      Refer a friend to Skyline Haven and get 50% off your rent for the next month!
      </p>
      <div className="bg-gradient-to-r from-green-50 to-green-100 border border-dashed border-green-300 text-primary font-bold py-3 px-6 rounded-lg text-xl tracking-wider mb-8 shadow-inner">
        SKY50
      </div>
      <button className="bg-primary text-white w-full py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
        Redeem Now
      </button>
    </div>
    <div className="bg-gray-100 text-gray-400 text-xs p-4 border-t border-gray-200">
      * Valid until 31st December. Terms & conditions apply.
    </div>
  </div>
  <div className="relative bg-white shadow-2xl rounded-lg max-w-sm w-full overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300 ease-in-out">
   
    <div className="absolute top-10 -left-4 bg-gradient-to-r from-primary to-green-500 text-white px-6 py-1 text-sm font-bold rotate-[-45deg] -translate-y-6 translate-x-6 shadow-md">
      50% OFF
    </div>
    <div className="p-8 text-center">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4"> 10% Discount on Rent Payments!</h2>
      <p className="text-gray-500 text-base mb-6">
      Enjoy a 10% discount on your next month's rent. Don't miss out on this special offer!
      </p>
      <div className="bg-gradient-to-r from-green-50 to-green-100 border border-dashed border-green-300 text-primary font-bold py-3 px-6 rounded-lg text-xl tracking-wider mb-8 shadow-inner">
        PAY10
      </div>
      <button className="bg-primary text-white w-full py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-green-600 transition-colors duration-300 ease-in-out">
        Redeem Now
      </button>
    </div>
    <div className="bg-gray-100 text-gray-400 text-xs p-4 border-t border-gray-200">
      * Valid until 31st December. Terms & conditions apply.
    </div>
  </div>
</div>

            </section>
            
        </div>
    );
};

export default Coupons;
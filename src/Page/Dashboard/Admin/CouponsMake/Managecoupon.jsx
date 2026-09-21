import React from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useCoupon from "../../../../Hooks/useCoupon";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { RiCoupon3Line, RiAddCircleFill } from "react-icons/ri";
import { MdOutlineDiscount, MdDescription } from "react-icons/md";
import { BsQrCode } from "react-icons/bs";

const Managecoupon = () => {
  const axioSecure = useAxiosSecure();
  const [coupons, refetch] = useCoupon();
  
  const handlecoupon = (e) => {
    e.preventDefault();
    const form = e.target;
    const couponCode = form.coupon_code.value;
    const discountPars = form.discount.value;
    const couponDescription = form.description.value;
    const status = "active";
   
    const couponinfo = {
      coupon_code: couponCode,
      discountPercentage: discountPars,
      Description: couponDescription,
      status: status,
    };

    const modal = document.getElementById("my_modal_5");
    modal.close();

    Swal.fire({
      title: "Create Coupon?",
      text: "You are about to generate a new discount coupon.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, create it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axioSecure.post("/coupons", couponinfo).then((res) => {
          Swal.fire({
            title: "Coupon Created!",
            text: "Your new discount coupon was created successfully.",
            icon: "success",
            confirmButtonColor: "#22c55e",
          });
          refetch();
          form.reset();
        });
      } else {
        // If canceled, show modal again so they don't lose the form
        modal.showModal();
      }
    });
  };

  const handlestatus = (id, isActive) => {
    const status = isActive ? "active" : "Inactive";

    axioSecure.patch(`/coupons/${id}`, { status }).then((res) => {
      Swal.fire({
        title: "Status Updated!",
        text: `Coupon status changed to ${status}.`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
      refetch();
    });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-20">
             <RiCoupon3Line className="text-[12rem]" />
          </div>
          
          <div className="relative z-10 flex items-center gap-4">
             <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 hidden md:block">
                 <RiCoupon3Line className="text-4xl text-white" />
             </div>
             <div>
               <h1 className="text-3xl font-extrabold tracking-tight">
                 Manage Coupons
               </h1>
               <p className="mt-2 text-emerald-100 text-lg">
                 Create and manage discount codes for your properties.
               </p>
             </div>
          </div>
          
          <div className="relative z-10 flex flex-wrap items-center gap-4 justify-center">
            <div className="flex flex-col items-center bg-white/20 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/30">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100">Total</span>
              <span className="text-3xl font-bold">{coupons.length}</span>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="flex items-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              <RiAddCircleFill className="text-2xl group-hover:rotate-90 transition-transform duration-300" />
              <span>Create Coupon</span>
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">#</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Coupon Code</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Discount</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {coupons.map((coupon, idx) => (
                  <tr key={coupon._id || idx} className="hover:bg-emerald-50/30 transition-colors duration-200">
                    <td className="py-4 px-6 text-sm text-gray-500 font-medium">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-blue-50 text-blue-500 rounded-lg">
                           <BsQrCode className="text-lg" />
                         </div>
                         <span className="font-mono text-lg font-bold text-gray-800 tracking-wider">
                           {coupon.coupon_code}
                         </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-bold text-sm">
                        <MdOutlineDiscount />
                        {coupon.discountPercentage}% OFF
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                       <label className="inline-flex relative items-center cursor-pointer" title={coupon.status === "active" ? "Deactivate Coupon" : "Activate Coupon"}>
                         <input
                           onChange={(e) => handlestatus(coupon._id, e.target.checked)}
                           type="checkbox"
                           className="sr-only peer"
                           defaultChecked={coupon.status === "active"}
                         />
                         <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-emerald-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                       </label>
                    </td>
                  </tr>
                ))}
                {coupons.length === 0 && (
                  <tr>
                    <td colSpan="4" className="py-16 text-center">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                           <RiCoupon3Line className="text-5xl text-gray-300" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">No Coupons Available</h3>
                        <p className="text-sm text-gray-500 max-w-sm">
                          You haven't created any discount coupons yet. Click the 'Create Coupon' button to get started.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Create Coupon Modal */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
          <div className="modal-box bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(16,185,129,0.3)] p-0 overflow-visible relative border border-emerald-100">
            {/* Decorative Top Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl shadow-lg border-4 border-white z-20">
              <RiCoupon3Line />
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 pt-12 pb-6 px-6 text-center relative overflow-hidden rounded-t-[2.5rem]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-40 -mr-10 -mt-10"></div>
              <h3 className="font-black text-3xl text-gray-800 relative z-10">
                 Create New Coupon
              </h3>
              <p className="text-gray-500 text-sm mt-2 relative z-10 font-medium">Generate a new discount code for your residents.</p>
            </div>
            
            <form onSubmit={handlecoupon} className="p-8 space-y-6 relative z-10 bg-white">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                   <BsQrCode className="text-emerald-500 text-lg" /> Coupon Code
                </label>
                <input
                  required
                  name="coupon_code"
                  type="text"
                  placeholder="e.g. SUMMER2024"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 bg-gray-50/50 hover:bg-white focus:bg-white focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-mono uppercase text-lg font-bold text-gray-800 placeholder:font-sans placeholder:font-normal placeholder:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                   <MdOutlineDiscount className="text-emerald-500 text-lg" /> Discount Percentage
                </label>
                <div className="relative">
                  <input
                    required
                    name="discount"
                    type="number"
                    min="1"
                    max="100"
                    placeholder="e.g. 15"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 bg-gray-50/50 hover:bg-white focus:bg-white focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-lg font-bold text-gray-800 placeholder:font-normal placeholder:text-base"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none text-emerald-500 font-black text-xl">
                    %
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                   <MdDescription className="text-emerald-500 text-lg" /> Description
                </label>
                <textarea
                  required
                  name="description"
                  rows={2}
                  placeholder="What is this coupon for?"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 bg-gray-50/50 hover:bg-white focus:bg-white focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none font-medium text-gray-700"
                ></textarea>
              </div>

              <div className="pt-6 flex gap-4">
                <form method="dialog" className="w-1/3">
                  <button type="button" onClick={() => document.getElementById('my_modal_5').close()} className="w-full py-4 rounded-2xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 hover:shadow-inner transition-all">
                    Cancel
                  </button>
                </form>
                <button
                  type="submit"
                  className="w-2/3 py-4 rounded-2xl font-bold text-white text-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Generate Coupon
                </button>
              </div>
            </form>
          </div>
          
          {/* Backdrop for click outside to close */}
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>

      </div>
    </div>
  );
};

export default Managecoupon;

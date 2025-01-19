import React from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useCoupon from "../../../../Hooks/useCoupon";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

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
    axioSecure.post("/coupons", couponinfo).then((res) => {
   
      const modal = document.getElementById("my_modal_5");
      modal.close();
      Swal.fire({
        title: "Coupon!",
        text: "Your coupon created successfully!.",
        icon: "success",
      });
      refetch();
    });
    form.reset();
  };

  const handlestatus = (id, isActive) => {
    const status = isActive ? "active" : "Inactive";

    axioSecure.patch(`/coupons/${id}`, { status }).then((res) => {
      Swal.fire({
        title: "Update Coupon!",
        text: "Your coupon update Successful!.",
        icon: "success",
      });
      refetch();
    });
  };
  return (
    <div className="bg-gray-50 p-8 rounded-lg ">
      <h1 className="text-3xl font-semibold text-center text-[#94f08c] mb-6">
        Manage Coupons
      </h1>
      <div className="divider mt-4 mb-6"></div>
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-800">
            Total Coupons:{" "}
            <span className="text-[#94f08c]">{coupons.length}</span>
          </h2>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn bg-[#94f08c] text-white hover:bg-green-600 transition duration-300"
          >
            Add Coupon
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#94f08c] text-white">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-left">No</th>
                <th className="px-6 py-3 text-sm font-medium text-left">
                  Coupon Code
                </th>
                <th className="px-6 py-3 text-sm font-medium text-left">
                  Discount (%)
                </th>
                <th className="px-6 py-3 text-sm font-medium text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {coupons.map((coupon, idx) => (
                <tr key={coupon.id}>
                  <td className="px-6 py-4 text-sm text-gray-700">{idx + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {coupon.coupon_code}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {coupon.discountPercentage}%
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <input
                      onChange={(e) =>
                        handlestatus(coupon._id, e.target.checked)
                      }
                      type="checkbox"
                      className="toggle toggle-success"
                      defaultChecked={coupon.status === "active"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#f7f7f7] rounded-lg shadow-lg">
          <h3 className="font-bold text-xl text-center text-[#94f08c] mb-6">
            Add Coupon
          </h3>
          <form onSubmit={handlecoupon}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Coupon Code</span>
              </label>
              <input
                name="coupon_code"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Discount (%)</span>
              </label>
              <input
                name="discount"
                type="number"
                placeholder="Discount percentage"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered"
                rows={2}
                placeholder="Type description here..."
              ></textarea>
            </div>
            <div className="form-control mt-4">
              <input
                type="submit"
                className="btn bg-[#94f08c] text-white hover:bg-green-600 transition duration-300"
                value="Submit"
              />
            </div>
          </form>

          <div className="modal-action flex justify-center mt-6">
            <form method="dialog">
              <button className="btn btn-wide text-white bg-gray-500 hover:bg-gray-400">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Managecoupon;

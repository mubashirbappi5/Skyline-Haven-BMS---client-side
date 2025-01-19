import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";

const PayHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payhistory = [] } = useQuery({
    queryKey: ["payhistory", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    
    <div className="bg-gray-100 p-8 rounded-lg md:min-h-screen ">
  <h1 className="text-3xl font-extrabold text-center mb-6 text-secondary">
    Payment History
  </h1>
  <p className="text-center text-gray-600 mb-8">
    Keep track of your payments, transactions, and rental history effortlessly.
  </p>

  <section>
    <div className="divider"></div>
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="table-auto w-full border-collapse">
        
        <thead className="bg-[#94f08c] text-white">
          <tr>
            <th className="py-3 px-6 text-left">#</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Transaction ID</th>
            <th className="py-3 px-6 text-left">Rent Paid</th>
          </tr>
        </thead>
        <tbody>
          {payhistory.map((history, idx) => (
            <tr
              key={idx}
              className={`${
                idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              } hover:bg-gray-200 transition-all`}
            >
              <td className="py-3 px-6">{idx + 1}</td>
              <td className="py-3 px-6">
                {moment(history.date).subtract(10, "days").calendar()}
              </td>
              <td className="py-3 px-6">{history.transactionId}</td>
              <td className="py-3 px-6 font-semibold text-green-600">
                ${history.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
</div>

  );
};

export default PayHistory;

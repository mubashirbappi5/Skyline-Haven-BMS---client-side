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
    <div>
      <h1>this is pay history</h1>

      <section>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Date.</th>
                <th>Transaction Id</th>
                <th>Rent Pay</th>
              </tr>
            </thead>
            <tbody>
              {payhistory.map((history, idx) => (
                <tr className="bg-base-200">
                  <th>{idx + 1}</th>
                  <td>
                    {moment(history.date).subtract(10, "days").calendar()}
                  </td>
                  <td>{history.transactionId}</td>
                  <td>{history.price}</td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PayHistory;

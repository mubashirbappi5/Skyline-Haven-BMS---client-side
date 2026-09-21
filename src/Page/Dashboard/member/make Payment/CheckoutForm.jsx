import React, { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { FaUserLock } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const CheckoutForm = ({ paydata }) => {
  const axiosscure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Dummy transaction ID
      const dummyTransactionId = "txn_dummy_" + Math.random().toString(36).substr(2, 9);
      
      const payment = {
        email: user.email,
        transactionId: dummyTransactionId,
        date: new Date(),
        amount: paydata.totalPay, // Prisma Payment schema expects `amount`
        confim_id: paydata.agreementconfim_id,
      };

      const res = await axiosscure.post("/payments", payment);

      if (res.data?.paymentResult?.insertedId) {
        Swal.fire({
          title: "Payment!",
          text: "Your dummy payment was successful.",
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      toast.error("An error occurred during payment processing.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-t-2 border-primary max-w-lg mx-auto">
      <h1 className="text-2xl font-extrabold text-gray-800 text-center mb-6">
        Make Your Payment (Dummy Mode)
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Click below to simulate a successful payment transaction.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border border-secondary rounded-md p-4 bg-gray-50 text-center text-gray-700">
          <p className="font-semibold text-lg">Total Amount: ${paydata?.totalPay}</p>
          <p className="text-sm mt-2 text-gray-500">Stripe has been disabled. This is a simulated checkout.</p>
        </div>

        <button
          className="w-full py-3 text-white bg-[#94f08c] rounded-full font-semibold hover:bg-green-500 transition-all duration-300 disabled:opacity-50"
          type="submit"
          disabled={loading || !paydata}
        >
          {loading ? "Processing..." : "Confirm Dummy Payment"}
        </button>
      </form>
      <Toaster />
      <p className="text-center text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
        <FaUserLock />
        Simulated and Secure.
      </p>
    </div>
  );
};

export default CheckoutForm;

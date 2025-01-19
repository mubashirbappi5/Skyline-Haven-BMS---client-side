
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";

import { FaUserLock } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({paydata}) => {
    const stripe = useStripe();
  const elements = useElements();
  const  axiosscure =useAxiosSecure()
  const{user}=useAuth()
  const [clientSecret,setclientSecret]=useState('')
  const [error,seterror] = useState('')
 const navigate = useNavigate()

  useEffect(()=>{
    if (paydata?.totalPay) {
    axiosscure.post('create-payment-intent',{price:paydata.totalPay
    })
    .then(res=>{
        console.log(res.data.clientSecret)
        setclientSecret(res.data.clientSecret)
    })
    }
    },[ axiosscure,paydata])
  const handleSubmit = async(e)=>{
    e.preventDefault();

    if(!stripe || !elements){
        seterror("Stripe is not loaded yet. Please try again.");
        return
    }
    const card = elements.getElement(CardElement)

    if(card === null){
        seterror("Payment card details are required.");
        return
    }
    const {error: paymentError, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (paymentError) {
        console.error("Payment method error:", paymentError);
        seterror(paymentError.message);
        return;
      }
       
      else {
        console.log('[PaymentMethod]', paymentMethod);
        seterror(null)
      }
    //   confim pay
    const {paymentIntent,error:confimerror} = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "Anonymous User",
              email: user?.email || "no-email@example.com",
            },
        }
    })
    if(confimerror){
        console.log('confim error:',confimerror)
        seterror(confimerror.message);
    }
    else{
        console.log(paymentIntent)
        if(paymentIntent.status==='succeeded'){
           
            console.log('transaction id', paymentIntent.id);
    

            // save payment
            const payment = {
                email:user.email,
                transactionId:paymentIntent.id,
                date:new Date(),
                price:paydata.totalPay,
                confim_id: paydata.agreementconfim_id

            }
            console.log(payment)
            const res = await axiosscure.post('/payments', payment)
         
            if (res.data?.paymentResult?.insertedId) {
              Swal.fire({
                title: "Payment!",
                text: "Your  payment succesful.",
                icon: "success"
              });
              navigate('dashboard/memberprofile')

            }
        }
    
    }
   
  

}

    return (
      
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-2 border-primary max-w-lg mx-auto">
  <h1 className="text-2xl font-extrabold text-gray-800 text-center mb-6">Make Your Payment</h1>
  <p className="text-gray-600 text-center mb-8">
    Enter your payment details below to complete your transaction securely.
  </p>
  
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Card Input */}
    <div className="border border-secondary rounded-md p-4 hover:shadow-lg transition-shadow duration-300">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
    </div>

    {/* Pay Button */}
    <button
      className="w-full py-3 text-white bg-[#94f08c] rounded-full font-semibold hover:bg-green-500 transition-all duration-300 disabled:opacity-50"
      type="submit"
      disabled={!stripe || !clientSecret}
    >
      Pay Now
    </button>
  </form>

  {/* Security Note */}
  <p className="text-center text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
  <FaUserLock/>
     secure and encrypted.
  </p>
</div>

    );
};

export default CheckoutForm;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";

const CheckoutForm = ({paydata}) => {
    const stripe = useStripe();
  const elements = useElements();
  const  axiosscure =useAxiosSecure()
  const{user}=useAuth()
  const [clientSecret,setclientSecret]=useState('')
  const [error,seterror] = useState('')


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
              alert('payment succesful!')
            }
        }
    
    }
   
  

}

    return (
        <div>
             <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
           
        
        </form>
        </div>
    );
};

export default CheckoutForm;

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
    axiosscure.post('create-payment-intent',{price:paydata.totalPay
    })
    .then(res=>{
        console.log(res.data.clientSecret)
        setclientSecret(res.data.clientSecret)
    })

    },[paydata])
  const handleSubmit = async(e)=>{
    e.preventDefault();

    if(!stripe || !elements){
        return
    }
    const card = elements.getElement(CardElement)

    if(card === null){
        return
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        seterror(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        seterror(null)
      }
    //   confim pay
    const {paymentIntent,error:confimerror} = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                name:user?.displayName || 'anonymous',
                email:user?.email || 'anonymous',
            }
        }
    })
    if(confimerror){
        console.log('confim error:',confimerror)
    }
    else{
        console.log(paymentIntent)
        // if(paymentIntent.status==='succeeded'){
           


        //     // save payment
        //     const payment = {
              

        //     }
        //     const res = await axiosscure.post('/payments', payment)
        //     refetch();
        //     if (res.data?.paymentResult?.insertedId) {
        //       alert('payment succesful!')
        //     }
        // }
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
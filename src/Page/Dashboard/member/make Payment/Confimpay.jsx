import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Confimpay = () => {
    const location = useLocation();
    const paydata = location.state;
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
   
    return (
        <div className='md:min-h-screen'>
        <div className='flex justify-center items-center my-10'>
        
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm paydata={paydata}></CheckoutForm>
                </Elements>
            </div>
        </div>
        </div>
    );
};

export default Confimpay;
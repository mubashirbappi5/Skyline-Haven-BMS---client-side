import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from 'react-router-dom';
import CommonHeader from '../../../../Shared/CommonHeader';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Confimpay = () => {
    const location = useLocation();
    const paydata = location.state;
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
   
    return (
        <div>
        <div>
            <CommonHeader title="Payment" subtitle="Please pay to eat"></CommonHeader>
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
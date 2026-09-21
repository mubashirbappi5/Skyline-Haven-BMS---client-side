import React from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Confimpay = () => {
    const location = useLocation();
    const paydata = location.state;
   
    return (
        <div className='md:min-h-screen'>
            <div className='flex justify-center items-center my-10'>
                <div>
                    <CheckoutForm paydata={paydata} />
                </div>
            </div>
        </div>
    );
};

export default Confimpay;
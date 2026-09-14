import React from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Coupons = () => {
    const axiosPublic = useAxiosPublic();
    const { data: coupons = [], isLoading } = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const res = await axiosPublic.get('/coupons');
            return res.data;
        }
    });

    if (isLoading) return null; // Don't show loading on this sleek layout

    return (
        <section className="w-full bg-white relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-gradient-to-r from-text to-gray-800 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[60px] -translate-x-1/2 translate-y-1/2"></div>

                    <div className="relative z-10 text-center lg:text-left space-y-6 max-w-2xl">
                        <span className="text-primary font-bold tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full inline-block">Exclusive Offers</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Unlock Special Discounts on Your Next Lease
                        </h2>
                        <p className="text-gray-300 text-lg">
                            Apply our limited-time promotional codes during checkout to enjoy premium living at an unbeatable value.
                        </p>
                    </div>

                    <div className="relative z-10 w-full lg:w-auto flex flex-col sm:flex-row gap-6">
                        {coupons.slice(0, 2).map((coupon, idx) => (
                            <div key={coupon._id || idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl flex flex-col items-center justify-center min-w-[200px] hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                                <span className="text-accent text-3xl font-black mb-2">{coupon.discountPercentage}% OFF</span>
                                <span className="text-white font-mono text-xl tracking-widest border border-dashed border-gray-400 px-4 py-2 rounded-lg group-hover:border-white transition-colors">{coupon.coupon_code}</span>
                                <span className="text-gray-400 text-sm mt-3">{coupon.Description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coupons;

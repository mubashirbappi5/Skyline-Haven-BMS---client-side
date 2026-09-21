import React from "react";
import useApartment from "../../../Hooks/useApartment";
import Card from "../../../Shared/Card";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Featured = () => {
    const [apartments] = useApartment();
    const LuxuryApartments = apartments.filter(apartment => apartment.rent >= 880).slice(0, 5); // Take top 5

  return (
    <section className="w-full bg-[#f8fafc] relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div className="space-y-4">
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-sm"
                    >
                        Exclusives
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight"
                    >
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Residences</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full origin-left"
                    ></motion.div>
                </div>
                <Link to={'/apartments'} className="hidden md:flex items-center gap-3 text-gray-500 font-bold hover:text-emerald-600 transition-colors group mt-6 md:mt-0">
                    View All Gallery <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>

            {/* Asymmetrical Masonry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px]">
                {LuxuryApartments.map((apartment, index) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        key={apartment._id || index} 
                        className={`h-full ${index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''} ${index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                    >
                        <div className="h-full w-full rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] transition-shadow duration-500">
                            <Card apart={apartment} isLarge={index === 0} />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center mt-12 md:hidden">
                <Link to={'/apartments'}>
                    <button className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-colors duration-300 shadow-xl shadow-emerald-500/20 flex items-center gap-3">
                        View All Gallery <FaArrowRight />
                    </button>
                </Link>
            </div>
        </div>
    </section>
  );
};

export default Featured;

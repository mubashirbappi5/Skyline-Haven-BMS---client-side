import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BannerImg = ({title, subtitle, img}) => {
    return (
        <div className='relative w-full h-full flex items-center justify-center overflow-hidden bg-black'>
            {/* Parallax Background Image */}
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            ></motion.div>
            
            {/* Dark Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-black/50 to-black/80 z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/60 z-10"></div>
            
            <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center h-full text-center mt-[-80px]">
                <motion.span 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-emerald-400 tracking-[0.4em] uppercase font-bold text-xs md:text-sm mb-6 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-md"
                >
                    Premium Real Estate
                </motion.span>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mb-6 text-5xl md:text-7xl lg:text-[5.5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 leading-[1.1] drop-shadow-2xl max-w-5xl"
                >
                    {title}
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mb-12 text-lg md:text-2xl text-gray-300 font-light max-w-3xl"
                > 
                    {subtitle}
                </motion.p>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                >
                    <Link to={'/apartments'} className="w-full sm:w-auto">
                        <button className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold rounded-full shadow-[0_10px_40px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center gap-3 w-full text-lg relative overflow-hidden group">
                            <span className="relative z-10 flex items-center gap-3">Explore Apartments <FaArrowRight className="group-hover:translate-x-2 transition-transform" /></span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        </button>
                    </Link>
                    <Link to={'/contact'} className="w-full sm:w-auto">
                        <button className="px-10 py-5 bg-white/5 border border-white/20 hover:border-white/60 hover:bg-white/10 text-white font-bold rounded-full transition-all duration-300 transform hover:-translate-y-2 w-full text-lg backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
                            Contact Agent
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default BannerImg;
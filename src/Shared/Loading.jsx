import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding } from 'react-icons/fa';

const Loading = () => {
    return (
        <div className='fixed inset-0 z-[100] flex flex-col justify-center items-center bg-gray-50/80 backdrop-blur-sm'>
            <div className="relative">
                {/* Glowing backdrop */}
                <div className="absolute inset-0 bg-emerald-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                
                <motion.div 
                    animate={{ 
                        scale: [1, 1.15, 1],
                        rotate: [0, 5, -5, 0],
                        y: [0, -10, 0]
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative z-10 w-24 h-24 bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-3xl shadow-[0_10px_40px_rgba(16,185,129,0.4)] flex items-center justify-center text-white text-5xl border-[3px] border-white/40"
                >
                    <FaBuilding />
                </motion.div>
                
                {/* Orbiting element */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 rounded-full border-2 border-dashed border-emerald-400/50"
                ></motion.div>
            </div>
            
            <motion.h2 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-10 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 tracking-[0.2em] uppercase drop-shadow-sm"
            >
                Loading
            </motion.h2>
        </div>
    );
};

export default Loading;
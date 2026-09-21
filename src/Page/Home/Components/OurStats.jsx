import React from 'react';
import CountUp from 'react-countup';
import { FaBuilding, FaMapMarkedAlt, FaUsers, FaKey } from 'react-icons/fa';
import { motion } from 'framer-motion';

const statsData = [
  { id: 1, title: 'Total Apartments', count: 30, suffix: '+', icon: <FaBuilding /> },
  { id: 2, title: 'Floors per Block', count: 5, suffix: '', icon: <FaMapMarkedAlt /> },
  { id: 3, title: 'Happy Residents', count: 200, suffix: '+', icon: <FaUsers /> },
  { id: 4, title: 'Units Available', count: 12, suffix: '', icon: <FaKey /> },
];

const OurStats = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-80px] md:mt-[-120px] z-30 relative">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/50 p-8 md:p-12 relative overflow-hidden"
            >
                {/* Decorative background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[100px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl pointer-events-none"></div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-gray-100 relative z-10">
                    {statsData.map((stat, index) => (
                        <motion.div 
                            key={stat.id} 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex flex-col items-center justify-center text-center group ${index % 2 !== 0 ? 'border-l border-gray-100 md:border-l-0' : ''}`}
                        >
                            <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-500 flex items-center justify-center text-3xl mb-6 group-hover:from-emerald-500 group-hover:to-teal-600 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)]">
                                {stat.icon}
                            </div>
                            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-3 tracking-tighter">
                                <CountUp end={stat.count} duration={3} />
                                <span className="text-emerald-500">{stat.suffix}</span>
                            </div>
                            <div className="text-sm md:text-base text-gray-500 font-bold uppercase tracking-[0.2em]">
                                {stat.title}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default OurStats;
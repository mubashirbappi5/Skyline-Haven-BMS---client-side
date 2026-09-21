import React from 'react';
import { FaParking, FaWifi } from 'react-icons/fa';
import { FaPersonSwimming } from 'react-icons/fa6';
import { GiCctvCamera, GiLift, GiPowerGenerator } from 'react-icons/gi';
import { motion } from 'framer-motion';

const facilities = [
    { title: "High-Speed WiFi", icon: <FaWifi />, description: "Gigabit internet in every apartment." },
    { title: "Secure Parking", icon: <FaParking />, description: "Designated covered parking spots." },
    { title: "Rooftop Pool", icon: <FaPersonSwimming />, description: "Infinity pool with city views." },
    { title: "24/7 Security", icon: <GiCctvCamera />, description: "CCTV and live guards around the clock." },
    { title: "Smart Elevators", icon: <GiLift />, description: "High-speed and eco-friendly." },
    { title: "Power Backup", icon: <GiPowerGenerator />, description: "100% generator backup for all units." }
];

const WeProvide = () => {
    return (
        <section className="w-full bg-[#0f172a] py-32 text-white overflow-hidden relative">
            {/* Background Glow Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-sm"
                    >
                        Premium Amenities
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white"
                    >
                        Everything You Need, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Right at Home.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((fac, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-500 overflow-hidden">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative z-10 flex flex-col gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-3xl text-emerald-400 group-hover:scale-110 group-hover:text-white group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                                        {fac.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{fac.title}</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed">{fac.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeProvide;
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import img1 from '../../../assets/image/about.jpg';
import img2 from '../../../assets/image/about2.jpg';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="w-full bg-[#f8fafc] relative py-32 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-white to-transparent"></div>
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
                    
                    {/* Left Sticky Content */}
                    <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit space-y-8 pt-10 lg:pt-0">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-sm"
                        >
                            The Vision
                        </motion.span>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight"
                        >
                            Redefining <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Luxury Living.</span>
                        </motion.h2>
                        
                        <motion.div 
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full origin-left"
                        ></motion.div>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-lg"
                        >
                            Skyline Haven isn't just a place to live; it's a lifestyle statement. Experience the perfect harmony of breathtaking city views, state-of-the-art amenities, and unparalleled architectural elegance.
                        </motion.p>
                        
                        <div className="space-y-6 pt-6">
                            {[
                                "Prime central location",
                                "24/7 Concierge & Security",
                                "Smart Home Integration",
                                "Eco-friendly architecture"
                            ].map((item, index) => (
                                <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300 transform group-hover:scale-110">
                                        <FaCheckCircle className="text-xl" />
                                    </div>
                                    <span className="text-xl font-semibold text-gray-800">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="pt-8 pb-10"
                        >
                            <button className="px-10 py-5 bg-gray-900 text-white hover:bg-emerald-500 font-bold rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.3)] transition-all duration-300 transform hover:-translate-y-2 text-lg">
                                Discover More
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Scrolling Images */}
                    <div className="lg:w-1/2 space-y-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 border border-gray-100"
                        >
                            <img src={img1} alt="Luxury Interior" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-[10000ms] ease-linear" />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 md:ml-12 border border-gray-100"
                        >
                            <img src={img2} alt="Building Exterior" className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-[10000ms] ease-linear" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
import React from 'react';
import { FaParking, FaWifi } from 'react-icons/fa';
import { FaPersonSwimming } from 'react-icons/fa6';
import { GiCctvCamera, GiLift, GiPowerGenerator } from 'react-icons/gi';

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
        <section className="w-full bg-text py-24 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <span className="text-primary font-bold tracking-widest uppercase">Amenities</span>
                    <h2 className="text-5xl md:text-6xl font-black leading-tight text-white">
                        Everything You Need, <br/><span className="text-gray-400">Right at Home.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {facilities.map((fac, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="flex flex-col gap-6">
                                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl text-gray-300 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500 transform group-hover:-translate-y-2">
                                    {fac.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{fac.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed">{fac.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeProvide;
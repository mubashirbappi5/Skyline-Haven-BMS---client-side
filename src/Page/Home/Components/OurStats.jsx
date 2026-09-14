import React from 'react';
import CountUp from 'react-countup';
import { FaBuilding, FaMapMarkedAlt, FaUsers, FaKey } from 'react-icons/fa';

const statsData = [
  { id: 1, title: 'Total Apartments', count: 30, suffix: '+', icon: <FaBuilding /> },
  { id: 2, title: 'Floors per Block', count: 5, suffix: '', icon: <FaMapMarkedAlt /> },
  { id: 3, title: 'Happy Residents', count: 200, suffix: '+', icon: <FaUsers /> },
  { id: 4, title: 'Units Available', count: 12, suffix: '', icon: <FaKey /> },
];

const OurStats = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-80px] md:mt-[-120px] z-30 relative">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-primary/10 border border-white/50 p-6 md:p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-200">
                    {statsData.map((stat, index) => (
                        <div key={stat.id} className={`flex flex-col items-center justify-center text-center p-4 group ${index % 2 !== 0 ? 'border-l md:border-l-0 border-gray-200' : ''}`}>
                            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg shadow-transparent group-hover:shadow-primary/30">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-black text-text mb-2 tracking-tight">
                                <CountUp end={stat.count} duration={3} />{stat.suffix}
                            </div>
                            <div className="text-sm md:text-base text-gray-500 font-semibold uppercase tracking-wider">
                                {stat.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurStats;
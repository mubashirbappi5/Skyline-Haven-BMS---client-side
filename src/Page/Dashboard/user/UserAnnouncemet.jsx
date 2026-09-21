import React from 'react';
import useAnnouncement from '../../../Hooks/useAnnouncement';
import NoticeCard from '../../../Shared/NoticeCard';
import { motion } from 'framer-motion';
import { HiSpeakerphone } from 'react-icons/hi';
import { MdCampaign, MdNotificationsActive } from 'react-icons/md';
import Loading from '../../../Shared/Loading';

const UserAnnouncemet = () => {
    const [notice, isLoading] = useAnnouncement();
    
    if (isLoading) return <Loading />;
    
    return (
        <div className="min-h-screen bg-gray-50/50 p-4 md:p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-12">
                
                {/* Enhanced Premium Header Section */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 p-10 md:p-16 shadow-2xl text-white text-center">
                    {/* Decorative SVGs and Animations */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                        </svg>
                    </div>
                    
                    <motion.div 
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-10 opacity-30"
                    >
                       <MdCampaign className="text-[14rem]" />
                    </motion.div>
                    
                    <motion.div 
                        animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-10 left-10 opacity-20"
                    >
                       <MdNotificationsActive className="text-[10rem]" />
                    </motion.div>

                    {/* Main Header Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <div className="relative group mb-6">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-300 to-emerald-300 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                            <div className="relative p-5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/40 shadow-xl">
                               <HiSpeakerphone className="text-5xl text-white" />
                            </div>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-lg mb-2">
                            Community <span className="text-emerald-200">Announcements</span>
                        </h1>
                        
                        <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-300 to-white mx-auto rounded-full mt-4 mb-6 opacity-80"></div>
                        
                        <p className="text-emerald-50 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
                            Stay perfectly in the loop. Discover the latest news, exclusive events, and vital updates directly from the Skyline Haven management team.
                        </p>
                    </motion.div>
                </div>
            
                {/* Announcements Grid */}
                {notice.length > 0 ? (
                    <motion.section 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, staggerChildren: 0.15 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {notice.map((announce, idx) => (
                            <NoticeCard key={announce._id || idx} announce={announce} idx={idx} />
                        ))}
                    </motion.section>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl p-16 text-center shadow-lg border border-gray-100 max-w-2xl mx-auto mt-12"
                    >
                        <div className="w-28 h-28 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-400 text-5xl mx-auto mb-6 shadow-inner">
                            <HiSpeakerphone />
                        </div>
                        <h3 className="text-3xl font-extrabold text-gray-800 mb-3">No Announcements Yet</h3>
                        <p className="text-gray-500 text-lg font-medium">Check back later for exciting updates and news from the management.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default UserAnnouncemet;
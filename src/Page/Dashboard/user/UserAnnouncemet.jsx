import React from 'react';
import useAnnouncement from '../../../Hooks/useAnnouncement';
import NoticeCard from '../../../Shared/NoticeCard';
import { motion } from 'framer-motion';
import { HiSpeakerphone } from 'react-icons/hi';
import { MdCampaign } from 'react-icons/md';

const UserAnnouncemet = () => {
    const [notice] = useAnnouncement();
    
    return (
        <div className="min-h-screen bg-gray-50/50 p-4 md:p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">
                
                {/* Header Section */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-600 p-8 md:p-12 shadow-xl text-white text-center">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-20">
                       <MdCampaign className="text-[12rem]" />
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 mb-4 inline-block">
                           <HiSpeakerphone className="text-4xl text-white" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
                            Community Announcements
                        </h1>
                        <p className="mt-4 text-emerald-100 text-lg max-w-2xl mx-auto">
                            Stay up to date with the latest news, events, and important notices from Skyline Haven management.
                        </p>
                    </motion.div>
                </div>
            
                {notice.length > 0 ? (
                    <motion.section 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, staggerChildren: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {notice.map((announce, idx) => (
                            <NoticeCard key={announce._id || idx} announce={announce} idx={idx} />
                        ))}
                    </motion.section>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100 max-w-2xl mx-auto mt-12"
                    >
                        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-300 text-4xl mx-auto mb-6">
                            <HiSpeakerphone />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No Announcements Yet</h3>
                        <p className="text-gray-500 font-medium">Check back later for updates from the management.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default UserAnnouncemet;
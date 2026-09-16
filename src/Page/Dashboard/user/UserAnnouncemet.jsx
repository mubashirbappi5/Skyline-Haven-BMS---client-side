import React from 'react';
import useAnnouncement from '../../../Hooks/useAnnouncement';
import NoticeCard from '../../../Shared/NoticeCard';
import { motion } from 'framer-motion';
import { HiSpeakerphone } from 'react-icons/hi';

const UserAnnouncemet = () => {
    const [notice] = useAnnouncement();
    
    return (
        <div className="min-h-screen bg-gray-50/50 p-6 md:p-12 font-sans relative overflow-hidden">
            {/* Background Decorative Blur */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center mb-12"
                >
                    <div className="w-16 h-16 bg-gradient-to-tr from-primary to-green-400 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg shadow-green-200">
                        <HiSpeakerphone />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-text mb-4 tracking-tight">
                        Community <span className="text-primary">Announcements</span>
                    </h1>
                    <p className="text-gray-500 font-medium text-lg max-w-2xl">
                        Stay up to date with the latest news, events, and important notices from Skyline Haven management.
                    </p>
                </motion.div>
                
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full mb-12"></div>
            
                {notice.length > 0 ? (
                    <motion.section 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, staggerChildren: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {notice.map((announce, idx) => (
                            <NoticeCard key={announce._id || idx} announce={announce} idx={idx} />
                        ))}
                    </motion.section>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-[2rem] p-12 text-center shadow-xl shadow-gray-100 border border-gray-50 max-w-2xl mx-auto mt-12"
                    >
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 text-4xl mx-auto mb-6">
                            <HiSpeakerphone />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-400 mb-2">No Announcements Yet</h3>
                        <p className="text-gray-400 font-medium">Check back later for updates from the management.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default UserAnnouncemet;
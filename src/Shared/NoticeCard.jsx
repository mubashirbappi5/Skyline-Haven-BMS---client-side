import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const NoticeCard = ({ announce, idx }) => {
    // Fallback to notice for older records, content for new ones
    const { title, notice, content, createdAt } = announce;
    
    // Parse the date if it exists, otherwise use current date as fallback for demo
    const displayDate = createdAt 
        ? new Date(createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_30px_rgb(148,240,140,0.2)] transition-all duration-300"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-green-400 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-black text-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {idx + 1}
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full text-xs font-bold text-gray-400">
                    <FaCalendarAlt />
                    <span>{displayDate}</span>
                </div>
            </div>
            
            <h2 className="text-xl font-black text-text mb-3 line-clamp-2 leading-snug group-hover:text-primary transition-colors duration-300">
                {title}
            </h2>
            
            <p className="text-gray-500 font-medium leading-relaxed line-clamp-4">
                {content || notice || "No content provided."}
            </p>
        </motion.div>
    );
};

export default NoticeCard;
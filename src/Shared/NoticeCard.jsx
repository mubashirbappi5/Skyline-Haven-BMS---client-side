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
            className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {idx + 1}
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full text-xs font-bold text-gray-500">
                    <FaCalendarAlt className="text-emerald-500" />
                    <span>{displayDate}</span>
                </div>
            </div>
            
            <h2 className="text-xl font-black text-gray-800 mb-3 line-clamp-2 leading-snug group-hover:text-emerald-600 transition-colors duration-300">
                {title}
            </h2>
            
            <p className="text-gray-500 font-medium leading-relaxed line-clamp-4">
                {content || notice || "No content provided."}
            </p>
        </motion.div>
    );
};

export default NoticeCard;
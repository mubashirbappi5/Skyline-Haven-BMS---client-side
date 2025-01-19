import React from 'react';

const NoticeCard = ({announce,idx}) => {
    const{title,notice}=announce
    return (
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-r-4 border-[#94f08c] hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div className="bg-[#94f08c] text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg shadow-md">
            {idx + 1}
          </div>
          <span className="text-gray-400 text-sm">{new Date().toLocaleDateString()}</span>
        </div>
      
        <div className="mt-4">
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600 mt-2">{notice}</p>
        </div>
      </div>
      
    );
};

export default NoticeCard;
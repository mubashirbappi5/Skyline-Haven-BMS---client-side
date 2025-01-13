import React from 'react';

const CommonHeader = ({title,subtitle}) => {
    return (
        <div className='flex flex-col justify-center items-center mb-14'>
            
            <p>---{subtitle}---</p>
            <h1 className='text-2xl font-bold'>{title}</h1>
            
        </div>
    );
};

export default CommonHeader;
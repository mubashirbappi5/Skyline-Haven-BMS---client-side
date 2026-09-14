import React from 'react';

const CommonHeader = ({title, subtitle}) => {
    return (
        <div className='flex flex-col justify-center items-center mb-16 text-center space-y-2'>
            {subtitle && (
                <span className='text-primary font-semibold tracking-wider uppercase text-sm md:text-base'>
                    {subtitle}
                </span>
            )}
            <h1 className='text-3xl md:text-5xl font-extrabold text-text capitalize'>
                {title}
            </h1>
            <div className='w-20 h-1 bg-accent rounded-full mt-4'></div>
        </div>
    );
};

export default CommonHeader;
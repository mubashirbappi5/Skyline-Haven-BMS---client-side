import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const BannerImg = ({title, subtitle, img}) => {
    return (
        <div className='relative w-full h-full flex items-center justify-center overflow-hidden bg-black'>
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-[10000ms] ease-linear hover:scale-110 scale-105"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            ></div>
            
            {/* Dark Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/80 z-10"></div>
            
            <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center h-full text-center mt-[-100px]">
                <span className="text-accent tracking-[0.3em] uppercase font-bold text-sm md:text-base mb-6 animate-fade-in-up">Premium Real Estate</span>
                
                <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight drop-shadow-2xl max-w-5xl animate-fade-in-up animation-delay-200">
                    {title}
                </h1>
                
                <p className="mb-12 text-xl md:text-2xl text-gray-300 font-light max-w-2xl animate-fade-in-up animation-delay-400"> 
                    {subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-600">
                    <Link to={'/apartments'}>
                        <button className="px-10 py-5 bg-primary hover:bg-secondary text-white font-bold rounded-full shadow-[0_0_40px_rgba(57,212,44,0.4)] transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center gap-3 w-full sm:w-auto text-lg">
                            Explore Apartments <FaArrowRight />
                        </button>
                    </Link>
                    <Link to={'/contact'}>
                        <button className="px-10 py-5 bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-bold rounded-full transition-all duration-300 transform hover:-translate-y-2 w-full sm:w-auto text-lg backdrop-blur-sm">
                            Contact Agent
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerImg;
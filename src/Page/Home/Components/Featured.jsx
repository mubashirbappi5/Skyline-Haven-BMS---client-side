import React from "react";
import useApartment from "../../../Hooks/useApartment";
import Card from "../../../Shared/Card";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Featured = () => {
    const [apartments] = useApartment();
    const LuxuryApartments = apartments.filter(apartment => apartment.rent >= 880).slice(0, 5); // Take top 5

  return (
    <section className="w-full bg-background relative py-12">
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div className="space-y-4">
                    <span className="text-primary font-bold tracking-widest uppercase">Exclusives</span>
                    <h2 className="text-4xl md:text-5xl font-black text-text">
                        Featured Residences
                    </h2>
                    <div className="w-20 h-1 bg-accent rounded-full"></div>
                </div>
                <Link to={'/apartments'} className="hidden md:flex items-center gap-3 text-primary font-bold hover:text-secondary transition-colors group mt-6 md:mt-0">
                    View All Gallery <FaArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>

            {/* Asymmetrical Masonry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px]">
                {LuxuryApartments.map((apartment, index) => (
                    <div 
                        key={apartment._id || index} 
                        className={`h-full ${index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''} ${index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                    >
                        <Card apart={apartment} isLarge={index === 0} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12 md:hidden">
                <Link to={'/apartments'}>
                    <button className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary transition-colors duration-300 shadow-xl shadow-primary/20 flex items-center gap-3">
                        View All Gallery <FaArrowRight />
                    </button>
                </Link>
            </div>
        </div>
    </section>
  );
};

export default Featured;

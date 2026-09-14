import React from "react";
import { Map, Marker } from "pigeon-maps";
import { FaLandmark, FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Location = () => {
  return (
    <section className="w-full relative h-[700px] bg-gray-100 overflow-hidden mt-20">
        {/* Full-width Map */}
        <div className="absolute inset-0 z-0">
            <Map height="100%" defaultCenter={[24.8998, 91.8719]} defaultZoom={15} zoomSnap={false} mouseEvents={false}>
                <Marker width={50} anchor={[24.8998, 91.8719]} color="#39d42c" />
            </Map>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10 hidden lg:block"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10 lg:hidden"></div>
        </div>

        {/* Floating Glass Card */}
        <div className="container mx-auto px-4 md:px-8 h-full relative z-20 flex items-end lg:items-center pb-12 lg:pb-0">
            <div className="w-full lg:w-1/3 bg-white/70 backdrop-blur-2xl p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50">
                <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Neighborhood</span>
                <h1 className="text-4xl font-black text-text mb-6">Prime Location</h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Situated in the heart of Sylhet city, Skyline Haven offers seamless access to essential services, fine dining, and vibrant lifestyle opportunities.
                </p> 
                
                <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-5">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                            <FaLocationDot size={20}/>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 text-lg">Address</h4>
                            <p className="text-gray-600">123 Skyline Avenue, Mirboxtula, Sylhet</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                            <FaLandmark size={20}/>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 text-lg">Landmarks</h4>
                            <p className="text-gray-600">Adjacent to SWMC</p>
                        </div>
                    </div>
                </div>

                <a href="https://www.google.com/maps/dir//24.8997746,91.8719169" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-text text-white font-bold rounded-2xl shadow-xl hover:bg-primary transition-all duration-300 transform hover:-translate-y-1">
                    Get Directions <FaArrowRight />
                </a>
            </div>
        </div>
    </section>
  );
};

export default Location;

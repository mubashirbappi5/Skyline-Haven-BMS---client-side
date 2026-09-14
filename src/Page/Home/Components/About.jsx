import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import img1 from '../../../assets/image/about.jpg';
import img2 from '../../../assets/image/about2.jpg';

const About = () => {
    return (
        <section className="w-full bg-white relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
                    
                    {/* Left Sticky Content */}
                    <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit space-y-8 pt-10 lg:pt-0">
                        <span className="text-primary font-bold tracking-widest uppercase">The Vision</span>
                        <h2 className="text-5xl md:text-6xl font-black text-text leading-tight">
                            Redefining Luxury Living.
                        </h2>
                        <div className="w-20 h-1 bg-accent rounded-full"></div>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
                            Skyline Haven isn't just a place to live; it's a lifestyle statement. Experience the perfect harmony of breathtaking city views, state-of-the-art amenities, and unparalleled architectural elegance.
                        </p>
                        
                        <div className="space-y-6 pt-6">
                            {[
                                "Prime central location",
                                "24/7 Concierge & Security",
                                "Smart Home Integration",
                                "Eco-friendly architecture"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <FaCheckCircle className="text-xl" />
                                    </div>
                                    <span className="text-xl font-semibold text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="pt-8 pb-10">
                            <button className="px-10 py-5 bg-text text-white hover:bg-primary font-bold rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-lg">
                                Discover More
                            </button>
                        </div>
                    </div>

                    {/* Right Scrolling Images */}
                    <div className="lg:w-1/2 space-y-12">
                        <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                            <img src={img1} alt="Luxury Interior" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-[10000ms] ease-linear" />
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 ml-0 md:ml-12">
                            <img src={img2} alt="Building Exterior" className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-[10000ms] ease-linear" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
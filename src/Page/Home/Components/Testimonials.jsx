import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <section className="w-full bg-background relative py-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 rounded-r-full blur-3xl -translate-y-1/2"></div>
            
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-primary font-bold tracking-widest uppercase">Testimonials</span>
                    <h2 className="text-5xl md:text-6xl font-black text-text leading-tight">
                        Stories from <br/><span className="text-gray-400">Our Residents</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-center items-stretch max-w-6xl mx-auto">
                    {/* Review 1 */}
                    <div className="flex-1 bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl shadow-primary/5 border border-white relative group hover:-translate-y-2 transition-all duration-500">
                        <FaQuoteLeft className="text-7xl text-primary/10 absolute top-12 left-12 group-hover:text-primary/20 transition-colors duration-500" />
                        
                        <div className="relative z-10 pt-8">
                            <p className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed mb-12 italic">
                                "The view from the top floors is simply breathtaking, and the amenities are world-class. It's the perfect blend of comfort and luxury."
                            </p>

                            <div className="flex items-center gap-6 mt-auto">
                                <img
                                    className="object-cover rounded-full w-20 h-20 shadow-xl border-4 border-white"
                                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                    alt="Bappi Hassan"
                                />
                                <div>
                                    <h1 className="font-black text-text text-xl">Bappi Hassan</h1>
                                    <span className="text-primary font-bold uppercase tracking-wider text-xs">Resident</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="flex-1 bg-text p-12 md:p-16 rounded-[3rem] shadow-2xl shadow-black/20 relative group hover:-translate-y-2 transition-all duration-500 mt-0 lg:mt-12">
                        <FaQuoteLeft className="text-7xl text-white/5 absolute top-12 left-12 group-hover:text-white/10 transition-colors duration-500" />
                        
                        <div className="relative z-10 pt-8">
                            <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed mb-12 italic">
                                "I love the convenience of having everything I need right here. The 24/7 security gives me peace of mind, and the community vibe is fantastic."
                            </p>

                            <div className="flex items-center gap-6 mt-auto">
                                <img
                                    className="object-cover rounded-full w-20 h-20 shadow-xl border-4 border-gray-800"
                                    src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt="Faiza Hassan"
                                />
                                <div>
                                    <h1 className="font-black text-white text-xl">Faiza Hassan</h1>
                                    <span className="text-accent font-bold uppercase tracking-wider text-xs">Resident</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
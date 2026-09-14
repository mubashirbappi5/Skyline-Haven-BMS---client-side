import React from 'react';

const ContactSection = () => {
    return (
        <section className="w-full relative bg-white pb-32">
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-primary rounded-[3rem] overflow-hidden relative shadow-2xl shadow-primary/30 flex flex-col md:flex-row items-center justify-between p-12 md:p-20">
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                    {/* Text Content */}
                    <div className="relative z-10 w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 text-white">
                        <span className="text-white/80 font-bold tracking-widest uppercase mb-4 block">Take the Next Step</span>
                        <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
                            Ready to Elevate Your Lifestyle?
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto md:mx-0">
                            Join the Skyline Haven community today. Send us a message and our premium concierge team will get back to you immediately.
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="relative z-10 w-full md:w-5/12 bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
                        <h3 className="text-2xl font-bold text-text mb-8">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                                <input id="name" type="text" placeholder="John Doe" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                                <input id="email" type="email" placeholder="john@example.com" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-gray-500 uppercase tracking-wider">Your Message</label>
                                <textarea id="message" rows="3" placeholder="How can we help you?" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full py-5 font-black tracking-widest uppercase rounded-xl bg-text text-white shadow-xl hover:bg-primary transition-colors duration-300 transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;

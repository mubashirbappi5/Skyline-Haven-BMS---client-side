import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import bgImg from '../assets/image/building.jpg';

const ContactPage = () => {
    return (
        <div className="w-full bg-white relative overflow-hidden pb-32">
            
            {/* Hero Section with Parallax Background */}
            <div className="relative w-full h-[60vh] md:h-[70vh]">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${bgImg})` }}
                ></div>
                <div className="absolute inset-0 bg-text/80 backdrop-blur-sm"></div>
                
                <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center items-center text-center">
                    <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Get in Touch</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                        We're Here to Help.
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl font-light">
                        Our concierge team is available around the clock to assist you with any inquiries, maintenance requests, or general information.
                    </p>
                </div>
            </div>

            {/* Overlapping Content Section */}
            <div className="container mx-auto px-6 md:px-12 relative z-20 -mt-32">
                <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-gray-100 flex flex-col lg:flex-row gap-16">
                    
                    {/* Left: Contact Information Panel */}
                    <div className="lg:w-1/3 space-y-12">
                        <div>
                            <h3 className="text-3xl font-black text-text mb-2">Contact Info</h3>
                            <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Don't hesitate to reach out. Whether you're a current resident or looking to move in, we provide priority support to ensure your seamless living experience.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-text mb-1">Our Location</h4>
                                    <p className="text-gray-500">123 Skyline Street,<br/>Sylhet, Bangladesh</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-text mb-1">Phone Number</h4>
                                    <p className="text-gray-500">+880 123 456 789<br/>+880 987 654 321</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-text mb-1">Email Address</h4>
                                    <p className="text-gray-500">support@skylinehaven.com<br/>leasing@skylinehaven.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                    <FaClock />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-text mb-1">Office Hours</h4>
                                    <p className="text-gray-500">Monday - Friday<br/>9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Premium Form */}
                    <div className="lg:w-2/3 bg-gray-50/50 p-8 md:p-12 rounded-3xl border border-gray-100 relative overflow-hidden">
                        {/* Decorative Blur inside form */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        
                        <h3 className="text-3xl font-black text-text mb-8 relative z-10">Send a Message</h3>
                        
                        <form className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="subject" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"
                                />
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Write your message here..."
                                    className="w-full p-4 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 text-sm font-black tracking-widest uppercase rounded-xl bg-text text-white hover:bg-primary shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;

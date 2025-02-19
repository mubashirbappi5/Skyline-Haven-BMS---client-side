import React from 'react';
import img1 from '../assets/image/Contact us-bro.png';

const ContactPage = () => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-8 py-16">
            
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Let's <span className='text-primary'>Talk!</span></h2>
                    <p className="text-lg text-gray-600 mt-4">We're here to assist you – Get in touch with us today!</p>
                </div>

                
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
                  
                    <div className="flex justify-center">
                        <img src={img1} alt="Contact Us" className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg" />
                    </div>

                   
                    <div>
                        <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                            
                            <div>
                                <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full p-4 rounded-md border border-gray-300 mt-2 focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                            </div>

                            
                            <div>
                                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-4 rounded-md border border-gray-300 mt-2 focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Write your message"
                                    className="w-full p-4 rounded-md border border-gray-300 mt-2 focus:ring-2 focus:ring-primary focus:outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full p-4 text-sm font-semibold tracking-wide uppercase rounded-md bg-primary text-white hover:bg-primary-dark focus:outline-none"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

              
                <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
                    <p className="text-lg text-gray-600 mt-4">Our support team is here to help you with any questions or concerns you may have about Skyline Haven BMS.</p>

                    <div className="mt-8 space-y-4">
                        <div>
                            <strong className="text-gray-800">Email:</strong>
                            <p className="text-gray-600">support@skylinehaven.com</p>
                        </div>
                        <div>
                            <strong className="text-gray-800">Phone:</strong>
                            <p className="text-gray-600">+880 123 456 789</p>
                        </div>
                        <div>
                            <strong className="text-gray-800">Office Hours:</strong>
                            <p className="text-gray-600">Monday – Friday, 9:00 AM – 6:00 PM</p>
                        </div>
                        <div>
                            <strong className="text-gray-800">Address:</strong>
                            <p className="text-gray-600">123 Skyline Street, Sylhet, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

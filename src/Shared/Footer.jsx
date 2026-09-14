import React from 'react';
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-text text-gray-300 py-16 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <img className='w-48 bg-white p-2 rounded-xl shadow-lg' src={logo} alt="Skyline Haven" />
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Experience the perfect harmony of breathtaking city views, state-of-the-art amenities, and unparalleled architectural elegance.
                        </p>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-white font-bold text-xl mb-6 flex items-center">
                            Services <span className="w-12 h-0.5 bg-primary ml-4"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li><Link to={'/apartments'} className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Available Apartments</Link></li>
                            <li><Link to={'/dashboard/makeannounce'} className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Announcements</Link></li>
                            <li><Link to={'/contact'} className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Maintenance Request</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-bold text-xl mb-6 flex items-center">
                            Company <span className="w-12 h-0.5 bg-accent ml-4"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li><Link to={'/about'} className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">About Us</Link></li>
                            <li><Link to={'/contact'} className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Contact & Support</Link></li>
                            <li><Link to={'/apartments'} className="hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-300">Our Properties</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact */}
                    <div>
                        <h4 className="text-white font-bold text-xl mb-6 flex items-center">
                            Stay Updated <span className="w-12 h-0.5 bg-white ml-4"></span>
                        </h4>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
                        <div className="flex bg-white/10 rounded-full p-1 border border-white/20">
                            <input type="email" placeholder="Email Address" className="bg-transparent w-full px-4 text-white focus:outline-none" />
                            <button className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-secondary transition-colors">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Skyline Haven. All rights reserved.
                    </p>
                    
                    {/* Socials */}
                    <div className="flex gap-4">
                        <a href="https://x.com/mubashirbappi" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href="https://www.youtube.com/@earth-explorer-1" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                        </a>
                        <a href="https://www.facebook.com/mubashirbappi/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
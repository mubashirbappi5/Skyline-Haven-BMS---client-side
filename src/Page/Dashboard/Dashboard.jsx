import React, { useState } from 'react';
import useAuth from './../../Hooks/useAuth';
import { NavLink, Link, Outlet } from 'react-router-dom';
import logo from '../.././assets/image/logo.png'
import { FaUserAlt, FaUserCircle, FaBars, FaTimes, FaBuilding } from 'react-icons/fa';
import { GrAnnounce } from 'react-icons/gr';
import { RiHistoryFill, RiNewspaperLine, RiArrowLeftLine } from 'react-icons/ri';
import { BiSolidCoupon } from 'react-icons/bi';
import { MdPayment, MdDashboard } from 'react-icons/md';
import { HiSpeakerphone } from 'react-icons/hi';
import useAdmin from '../../Hooks/useAdmin';
import useMember from '../../Hooks/useMember';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => setIsOpen(!isOpen);
    const [isAdmin] = useAdmin();
    const [isMember] = useMember();

    // NavLink active styling
    const navLinkClass = ({ isActive }) =>
        `flex items-center px-6 py-3.5 my-2 transition-all duration-300 transform rounded-xl font-medium ${
            isActive
                ? 'bg-gradient-to-r from-[#94f08c] to-green-500 text-white shadow-lg shadow-green-200'
                : 'text-gray-600 hover:bg-gray-50 hover:text-green-600 hover:translate-x-2'
        }`;

    return (
        <div className="flex h-screen bg-gray-50/50 overflow-hidden font-sans">
            
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 px-4 py-3 flex items-center justify-between border-b border-gray-100">
                <button
                    onClick={toggleDrawer}
                    className="p-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                    {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
                <img className="h-8" src={logo} alt="Skyline Haven" />
                <div className="w-8"></div> {/* Placeholder for centering */}
            </div>

            {/* Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                        onClick={toggleDrawer}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                className={`fixed lg:static top-0 left-0 z-50 h-full w-72 bg-white border-r border-gray-100 shadow-[4px_0_24px_rgba(0,0,0,0.02)] flex flex-col transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}
            >
                <div className="p-6 flex flex-col h-full">
                    
                    {/* Logo & Back */}
                    <div className="flex items-center justify-between mb-8 mt-12 lg:mt-0">
                        <img className="w-32 hidden lg:block" src={logo} alt="Skyline" />
                        <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-green-500 transition-colors bg-gray-50 px-3 py-2 rounded-lg">
                            <RiArrowLeftLine /> Home
                        </Link>
                    </div>

                    {/* User Info Profile Box */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4 mb-8 group hover:shadow-md transition-shadow">
                        <div className="relative">
                            <img
                                className="w-12 h-12 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                                src={user?.photoURL || "https://ui-avatars.com/api/?name=Guest&background=random"}
                                alt="avatar"
                            />
                            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="overflow-hidden">
                            <h4 className="text-sm font-bold text-gray-800 truncate">{user?.displayName || "Guest"}</h4>
                            <p className="text-xs font-medium text-gray-400 truncate">{isAdmin ? "Admin" : isMember ? "Member" : "Resident"}</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">Menu</div>
                        
                        {isAdmin ? (
                            <div className="space-y-1">
                                <NavLink to="adminprofile" className={navLinkClass}>
                                    <MdDashboard size={20} className="mr-3" /> Admin Dashboard
                                </NavLink>
                                <NavLink to="addApartment" className={navLinkClass}>
                                    <MdDashboard size={20} className="mr-3" /> Add Apartment
                                </NavLink>
                                <NavLink to="managemember" className={navLinkClass}>
                                    <FaUserAlt size={20} className="mr-3" /> Manage Members
                                </NavLink>
                                <NavLink to="makeannounce" className={navLinkClass}>
                                    <GrAnnounce size={20} className="mr-3" /> Make Announcement
                                </NavLink>
                                <NavLink to="agreeRequest" className={navLinkClass}>
                                    <RiNewspaperLine size={20} className="mr-3" /> Agreement Requests
                                </NavLink>
                                <NavLink to="manageApartments" className={navLinkClass}>
                                    <FaBuilding size={20} className="mr-3" /> Manage Apartments
                                </NavLink>
                                <NavLink to="manageCoupon" className={navLinkClass}>
                                    <BiSolidCoupon size={20} className="mr-3" /> Manage Coupons
                                </NavLink>
                            </div>
                        ) : isMember ? (
                            <div className="space-y-1">
                                <NavLink to="memberprofile" className={navLinkClass}>
                                    <FaUserCircle size={20} className="mr-3" /> My Profile
                                </NavLink>
                                <NavLink to="makepay" className={navLinkClass}>
                                    <MdPayment size={20} className="mr-3" /> Make Payment
                                </NavLink>
                                <NavLink to="payhistory" className={navLinkClass}>
                                    <RiHistoryFill size={20} className="mr-3" /> Payment History
                                </NavLink>
                                <NavLink to="mamberAnnounce" className={navLinkClass}>
                                    <HiSpeakerphone size={20} className="mr-3" /> Announcements
                                </NavLink>
                            </div>
                        ) : (
                            <div className="space-y-1">
                                <NavLink to="userprofile" className={navLinkClass}>
                                    <FaUserCircle size={20} className="mr-3" /> My Profile
                                </NavLink>
                                <NavLink to="userannounce" className={navLinkClass}>
                                    <HiSpeakerphone size={20} className="mr-3" /> Announcements
                                </NavLink>
                            </div>
                        )}
                    </nav>
                </div>
            </motion.aside>

            {/* Main Content Area */}
            <main className="flex-1 relative overflow-y-auto pt-16 lg:pt-0 bg-gray-50/50">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>
                <div className="relative z-10 w-full h-full">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
import React, { useContext } from 'react';
import Banner from './Components/Banner';
import BannerImg from '../../Shared/BannerImg';
import OurStats from './Components/OurStats';
import About from './Components/About';
import Coupons from './Components/coupons';
import Location from './Components/Location';
import { Authcontext } from '../../Provider/AuthProvider/AuthProvider';
import WeProvide from './Components/WeProvide';
import Testimonials from './Components/Testimonials';
import Featured from './Components/Featured';
import FAQ from './Components/FAQ';
import ContactSection from './Components/ContactSection';

const Home = () => {
    const {name}=useContext(Authcontext)
    
    return (
    <div className="bg-background min-h-screen overflow-x-hidden font-inter selection:bg-primary selection:text-white">
        <Banner/>
        <div className="relative z-20">
            <OurStats/>
        </div>
        <div className='flex flex-col space-y-40 mb-40'>
            <About/>
            <Featured/>
            <WeProvide/>
            <Coupons/>
            <FAQ/>
            <Testimonials/>
            <Location/>
            <ContactSection/>
        </div>
    </div>
    );
};

export default Home;
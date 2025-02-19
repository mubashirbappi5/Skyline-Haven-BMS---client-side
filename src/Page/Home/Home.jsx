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

const Home = () => {
    const {name}=useContext(Authcontext)
    
    return (
    <div>
        <Banner/>
        <div className='md:w-11/12 mx-auto'>
           
            
            <OurStats/>
            <Featured/>
            <About/>
            <Coupons/>
            <Location/>
            <WeProvide/>
            <FAQ/>
            <Testimonials/>

        </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Components/Banner';
import BannerImg from '../../Shared/BannerImg';
import OurStats from './Components/OurStats';
import About from './Components/About';
import Coupons from './Components/coupons';
import Location from './Components/Location';

const Home = () => {
    return (
        <div className='md:w-11/12 mx-auto'>
           
            <Banner/>
            <OurStats/>
            <About/>
            <Coupons/>
            <Location/>

        </div>
    );
};

export default Home;
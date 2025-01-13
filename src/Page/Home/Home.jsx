import React from 'react';
import Banner from './Components/Banner';
import BannerImg from '../../Shared/BannerImg';
import OurStats from './Components/OurStats';
import About from './Components/About';

const Home = () => {
    return (
        <div className='md:w-11/12 mx-auto'>
           
            <Banner/>
            <OurStats/>
            <About/>

        </div>
    );
};

export default Home;
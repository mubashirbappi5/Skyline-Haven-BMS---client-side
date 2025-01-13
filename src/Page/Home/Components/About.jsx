import React from 'react';
import CommonHeader from '../../../Shared/CommonHeader';
import about from '../../../assets/image/about2.jpg'
const About = () => {
    return (
        <div className='my-20'>
            <CommonHeader title={'Discover Skyline Haven'} subtitle={'About'}/>
            <section className='grid grid-cols-12 gap-6'>
                <div className='col-span-4 border rounded-lg p-2 border-accent'>
                    <img className='h-96 rounded-lg object-cover'  src={about} alt="" />
               
                </div>
                <div className='col-span-8 '>
                 <h2 className='text-lg font-semibold my-2'>Welcome to our premium residential building, where modern design meets timeless comfort.</h2>
                   <p>Nestled in a prime location, our building offers state-of-the-art amenities, spacious apartments, and a vibrant community atmosphere. Designed to cater to your every need, it provides the perfect blend of style and functionality.</p>  

                   <div className='space-y-4'>
                    <li>Prime Location: Situated in the heart of the city, with easy access to transportation, schools, and shopping centers.</li>
                    <li>Modern Amenities: Rooftop garden, fitness center, 24/7 security, and high-speed elevators for your convenience.</li>
                    <li>Spacious Apartments: Choose from 30 beautifully designed apartments spread across 5 floors, each crafted to provide comfort and luxury.</li>
                    <li>Community Focused: A friendly and inclusive environment where residents feel right at home.</li>
                   </div>
                </div>
            </section>

           
            
        </div>
    );
};

export default About;
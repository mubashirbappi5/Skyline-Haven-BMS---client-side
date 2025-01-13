import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import BannerImg from '../../../Shared/BannerImg';
import img1 from '../../../assets/image/building.jpg'
import img2 from '../../../assets/image/living-room-8442897_1920.jpg'
import img3 from '../../../assets/image/apartment-2094702_1920.jpg'
import img4 from '../../../assets/image/kitchen-416027_1920.jpg'
const Banner = () => {
    return (
        <div>
            <Swiper
        spaceBetween={30}
        effect={'fade'}
       
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
        <BannerImg  title={'Welcome to Your Dream Residence'} subtitle={'Modern Living with Comfort and Convenience'} img={img1}></BannerImg>
        </SwiperSlide>
        <SwiperSlide>
        <BannerImg title={'Discover the Ultimate Living Experience'} subtitle={'Designed for Comfort, Built for You'}  img={img2}></BannerImg>
        </SwiperSlide>
        <SwiperSlide>
        <BannerImg title={'Unlock Your New Lifestyle'} subtitle={'Sip, Relax, and Enjoy Your Space'}  img={img3}></BannerImg>
        </SwiperSlide>
        <SwiperSlide>
        <BannerImg title={'Cook, Create, and Celebrate'} subtitle={'Beautiful Kitchens Designed for Memorable Moments'}  img={img4}></BannerImg>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;
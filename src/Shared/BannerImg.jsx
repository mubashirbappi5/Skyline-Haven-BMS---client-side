import React from 'react';
import { Link } from 'react-router-dom';

const BannerImg = ({title,subtitle,img}) => {
    return (
        <div className=''>
            <div
  className="hero h-96  "
  style={{
    backgroundImage: `url(${img})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 md:text-4xl  text-xl font-bold">{title}</h1>
      <p className="mb-5"> 
      {subtitle}
      </p>
      <Link to={'/apartments'}><button className="btn bg-primary border-none text-white">Get Started</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default BannerImg;
import React from 'react';
import { FaParking } from 'react-icons/fa';
import { FaPersonSwimming, FaWifi } from 'react-icons/fa6';
import { GiCctvCamera, GiLift, GiPowerGenerator } from 'react-icons/gi';

const WeProvide = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="my-8 ">
	<h2 className="mb-8 text-3xl font-bold  text-center">What do we have to offer?</h2>
	<ul className="grid gap-3 grid-cols-2 lg:grid-cols-3 border-l-2 border-r-2 border-accent p-8 rounded-2xl">
		<li className="flex items-center space-x-2">
        <FaWifi/>
			<span>Wifi</span>
		</li>
		<li className="flex items-center space-x-2">
        <FaParking />
			<span>Parking </span>
		</li>
		<li className="flex items-center space-x-2">
        <GiCctvCamera />
			<span>24/7 Security</span>
		</li>
		<li className="flex items-center space-x-2">
        <GiLift />
			<span>Lift</span>
		</li>
		<li className="flex items-center space-x-2">
        <GiPowerGenerator />
			<span>Free UPS</span>
		</li>
		<li className="flex items-center space-x-2">
        <FaPersonSwimming/>
			<span>Swimming </span>
		</li>
	</ul>
</div>
            
        </div>
    );
};

export default WeProvide;
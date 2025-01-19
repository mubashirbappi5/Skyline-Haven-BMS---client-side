import React from 'react';
import { FaBuilding, FaUserAlt } from 'react-icons/fa';
import { PiBuildingApartmentBold } from 'react-icons/pi';
import { TbCircleLetterBFilled } from 'react-icons/tb';

const OurStats = () => {
    return (
        <div>
            <section className="p-6 my-6 dark:bg-gray-100  dark:text-gray-800">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-100 dark:bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle bg-secondary rounded-lg sm:p-4 dark:bg-violet-600">
			<PiBuildingApartmentBold className='text-5xl' />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">30</p>
				<p className="capitalize">Apartment</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-100  dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle bg-secondary rounded-lg sm:p-4 dark:bg-violet-600">
			<FaBuilding className='text-5xl' />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">05</p>
				<p className="capitalize">Floor</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-100 dark:bg-gray-50 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle bg-secondary rounded-lg sm:p-4 dark:bg-violet-600">
			<TbCircleLetterBFilled className='text-5xl' />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">03</p>
				<p className="capitalize">Block</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-100 dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle bg-secondary rounded-lg sm:p-4 dark:bg-violet-600">
			<FaUserAlt className='text-5xl' />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">10</p>
				<p className="capitalize">User</p>
			</div>
		</div>
	</div>
</section>
            
        </div>
    );
};

export default OurStats;
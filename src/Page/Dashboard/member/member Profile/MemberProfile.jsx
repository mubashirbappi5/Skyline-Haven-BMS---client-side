import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './../../../../Hooks/useAxiosSecure';
import moment from 'moment';

const MemberProfile = () => {
    const{user}=useAuth()
   const axiosSecure = useAxiosSecure()
  const {data:myAgreement=[]}=useQuery({
    queryKey:'myrequest',
    queryFn:async()=>{
       const res = await axiosSecure.get(`/accept/${user.email}`)
       return res.data
    }
  })


    return (
    
    <div>
  <div className="md:p-6 min-h-screen bg-gradient-to-r from-blue-50 to-purple-100">
  <div className="bg-gradient-to-r from-[#94f08c] to-green-500 text-white mt-6 md:mt-0 py-6 px-8 rounded-xl shadow-xl">
  <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
  
    <div className="text-center lg:text-left space-y-4 lg:w-1/2">
      <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight tracking-wide">
        Welcome Back, <span className="text-yellow-300">{user.displayName}</span>!
      </h1>
      <p className="text-lg sm:text-xl text-gray-200">
      Manage Your Apartment Details Effortlessly
      </p>
    </div>
    <div>
    <section className="flex justify-center ">
  <div className="bg-white rounded-xl shadow-xl p-4 ">
    <div className="flex items-center justify-center mb-3">
      <div className="border-4 border-[#94f08c] rounded-full p-4 shadow-2xl transform transition-transform duration-300 hover:scale-105">
        <img className="rounded-full w-24 h-24 object-cover" src={user.photoURL} alt="User" />
      </div>
    </div>
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-[#94f08c]">{user.displayName}</h2>
      <h5 className="text-lg text-gray-500">{user.email}</h5>
    </div>
  </div>
</section>
    </div>

    
  </div>
  
</div>



    <div className="divider my-8"></div>

    <section>
      <section className="container px-4 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">My Agreements</h2>
          <div className="flex items-center mt-4 gap-x-3">
            <Link to={'/apartments'}>
              <button className="flex items-center justify-center rounded-lg px-5 py-3 text-lg font-medium text-white bg-[#94f08c]  hover:bg-green-600 transition duration-300">
                New Rent
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gradient-to-r from-[#94f08c] to-green-400 text-white">
                    <tr>
                      <th className="px-12 py-3 text-sm font-normal text-left">Apartment No.</th>
                      <th className="px-4 py-3 text-sm font-normal text-left">Accept Date</th>
                      <th className="px-4 py-3 text-sm font-normal text-left">Rent</th>
                      <th className="px-4 py-3 text-sm font-normal text-left">Floor No.</th>
                      <th className="px-4 py-3 text-sm font-normal text-left">Block No.</th>
                      <th className="px-4 py-3 text-sm font-normal text-left">Status</th>
                      <th className="px-4 py-3 text-sm font-normal text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                    {myAgreement && myAgreement.length > 0 ? (
                      myAgreement.map((agree, idx) => (
                        <tr className="hover:bg-blue-100 transition-colors duration-300">
                          <td className="px-12 py-4 text-sm font-normal text-gray-700">{agree.apartmentNo}</td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{moment(agree.accept_date).subtract(10, 'days').calendar()}</td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{agree.rent}</td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{agree.floorNo}</td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{agree.blockName}</td>
                          <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300">{agree.Status}</td>
                          <td className="px-4 py-4 text-sm text-blue-500 hover:text-blue-700 cursor-pointer">
                            <Link to={'/dashboard/makepay'}>Pay</Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center py-4">No data available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</div>

    );
};

export default MemberProfile;
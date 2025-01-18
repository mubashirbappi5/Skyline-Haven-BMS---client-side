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
         <div className="md:p-4 h-screen">
      <Link to={"/"}>
        <button className=" btn btn-primary ">back</button>
      </Link>
      <section className="flex flex-col justify-center items-center text-center">
        <div className="border-2 rounded-full border-accent p-2">
          <img className="rounded-full w-20" src={user.photoURL} alt="" />
        </div>
        <div>
          <h1>{user.displayName}</h1>
          <h5>{user.email}</h5>
        </div>
      </section>
      <div className="divider"></div>
      <section>
        <section className="container px-4 mx-auto">
          <div className="sm:flex sm:items-center sm:justify-between">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">
             My Agreements
            </h2>

            <div className="flex items-center mt-4 gap-x-3">
              <Link to={'/apartments'}>
              <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                <span>New Rent</span>
              </button>

              </Link>

             
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Apartment No.
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Accept date
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                        Rent
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                         Floor No.
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Block No.
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                         Action
                        </th>

                       
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                     {
                      myAgreement && myAgreement.length > 0 ?
                         
                          (  myAgreement.map(agree=> <tr>
                                <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                               {agree.apartmentNo}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                {moment(agree.accept_date)
                                  .subtract(10, "days")
                                  .calendar()}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                 {agree.rent}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                 {agree.floorNo}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {agree.blockName}
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                  {agree.Status}
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                <Link to={'/dashboard/makepay'}>Pay</Link>
                                </td>
                              </tr>)
                        ):(<h1>No data</h1>)  
                     }
                     
                     
                      
                     

                   
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
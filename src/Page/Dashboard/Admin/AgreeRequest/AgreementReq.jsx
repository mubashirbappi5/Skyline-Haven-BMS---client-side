import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./../../../../Hooks/useAxiosSecure";
import moment from "moment";

const AgreementReq = () => {
  const axiosSecure = useAxiosSecure();
  const { data: agreementreq = [],refetch } = useQuery({
    queryKey: ["agreementreq"],
    queryFn: async () => {
      const res = await axiosSecure.get("/request");
      return res.data;
    },
  });
  const handleacceptreq = (request)=>{
        console.log(request._id)
        const acceptedagreement = {
            rent:request.rent,
            userName:request.userName,
            userEmail:request.userEmail,
            floorNo:request.floorNo,
            apartmentNo:request.apartmentNo,
            blockName:request.blockName,
           
            Status:'checked',
            apartment_id:request.apartment_id

        }
       axiosSecure.post('/accept',acceptedagreement)
       .then(res=>{
       if(res.data.insertedId){
        axiosSecure.delete(`/request/${request._id}`)
        .then(res=>{
            console.log('done')
         
            axiosSecure.patch(`/users/${request.userEmail}`)
            .then(res=>{
                console.log(res.data)
                refetch()
            })
        })
       }
       })
  }
  return (
    <div>  
      <section className="flex justify-center items-center">
        <h1 className="text-2xl font-bold">Agreement Request</h1>
      </section>
      <div className="divider"></div>
      <section>
        <section>
          <section className="container px-4 mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
              <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                Total Apartment Request: {agreementreq.length}
              </h2>

              <div className="flex items-center mt-4 gap-x-3"></div>
            </div>

            <div className="flex flex-col w-full mx-auto mt-6">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                        >
                          User Info
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                        >
                          Request Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                        >
                          Apartment Details
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                        >
                          Rent
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                        >
                          Status
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {agreementreq.map((request) => (
                        <tr key={request.id}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                            <div>
                              <h1>{request.userName}</h1>
                              <p className="text-gray-500">
                                {request.userEmail}
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            {moment(request.Agreement_req_date)
                              .subtract(10, "days")
                              .calendar()}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            <div>
                              <p>Apartment No: {request.apartmentNo}</p>
                              <p>Floor No: {request.floorNo}</p>
                              <p>Block : {request.blockName}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                            ${request.rent}
                          </td>
                          <td className="px-6 py-4 text-sm whitespace-nowrap">
                            <button onClick={()=>handleacceptreq(request)} className="px-2 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                              accept
                            </button>
                            <button className="px-2 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                              Reject
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default AgreementReq;

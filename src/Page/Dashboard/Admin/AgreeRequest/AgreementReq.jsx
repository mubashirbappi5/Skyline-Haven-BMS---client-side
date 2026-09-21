import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./../../../../Hooks/useAxiosSecure";
import moment from "moment";
import Swal from "sweetalert2";
import { MdOutlineDomainVerification, MdCheckCircle, MdCancel } from "react-icons/md";
import { FaUserCircle, FaBuilding, FaRegCalendarAlt } from "react-icons/fa";

const AgreementReq = () => {
  const axiosSecure = useAxiosSecure();
  const { data: agreementreq = [], refetch } = useQuery({
    queryKey: ["agreementreq"],
    queryFn: async () => {
      const res = await axiosSecure.get("/request");
      return res.data;
    },
  });

  const handleacceptreq = (request) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to accept this agreement request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, accept it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const acceptedagreement = {
          rent: request.rent,
          userName: request.userName,
          userEmail: request.userEmail,
          floorNo: request.floorNo,
          apartmentNo: request.apartmentNo,
          blockName: request.blockName,
          accept_date: new Date(),
          Status: "checked",
          apartment_id: request.apartment_id,
        };
        axiosSecure.post("/accept", acceptedagreement).then((res) => {
          if (res.data.insertedId || res.data.id) {
            axiosSecure.delete(`/request/${request._id}`).then((res) => {
              Swal.fire({
                title: "Accepted!",
                text: "User Agreement was accepted successfully.",
                icon: "success",
                confirmButtonColor: "#22c55e",
              });

              axiosSecure
                .patch(`/users/${request.userEmail}`, { role: "member" })
                .then((res) => {
                  refetch();
                });
            });
          }
        });
      }
    });
  };

  const handleReject = (request) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to reject this agreement request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject it!"
    }).then((result) => {
      if (result.isConfirmed) {
        const rejectedagreement = {
          rent: request.rent,
          userName: request.userName,
          userEmail: request.userEmail,
          floorNo: request.floorNo,
          apartmentNo: request.apartmentNo,
          blockName: request.blockName,
          Reject_date: new Date(),
          Status: "checked",
          apartment_id: request.apartment_id,
        };

        axiosSecure.post("/accept", rejectedagreement).then((res) => {
          if (res.data.insertedId || res.data.id) {
            axiosSecure.delete(`/request/${request._id}`).then((res) => {
              Swal.fire({
                title: "Rejected!",
                text: "Agreement was rejected.",
                icon: "success",
                confirmButtonColor: "#ef4444",
              });

              refetch();
            });
          }
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-20">
             <MdOutlineDomainVerification className="text-[12rem]" />
          </div>
          <div className="relative z-10 flex items-center gap-4">
             <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 hidden md:block">
                 <MdOutlineDomainVerification className="text-4xl text-white" />
             </div>
             <div>
               <h1 className="text-3xl font-extrabold tracking-tight">
                 Agreement Requests
               </h1>
               <p className="mt-2 text-green-100 text-lg">
                 Review and manage pending apartment lease agreements.
               </p>
             </div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center bg-white/20 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/30 min-w-[140px]">
            <span className="text-sm font-semibold uppercase tracking-wider text-green-50">Pending</span>
            <span className="text-4xl font-bold">{agreementreq.length}</span>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mt-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">User Info</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Apartment Details</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Request Date</th>
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Rent</th>
                  <th className="py-5 px-6 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {agreementreq.length > 0 ? (
                  agreementreq.map((request) => (
                    <tr
                      key={request._id}
                      className="hover:bg-green-50/30 transition-colors duration-200 group"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                             <FaUserCircle className="text-2xl" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-800">{request.userName}</p>
                            <p className="text-xs text-gray-500">{request.userEmail}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                         <div className="flex items-center gap-3">
                           <div className="p-2 bg-blue-50 text-blue-500 rounded-lg">
                             <FaBuilding className="text-lg" />
                           </div>
                           <div>
                             <p className="text-sm font-bold text-gray-800">Apt: {request.apartmentNo}</p>
                             <p className="text-xs text-gray-500">Block {request.blockName} • Floor {request.floorNo}</p>
                           </div>
                         </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                           <FaRegCalendarAlt className="text-gray-400" />
                           {moment(request.Agreement_req_date)
                             .subtract(10, "days")
                             .calendar()}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className="text-lg font-bold text-gray-800">${request.rent}</span>
                        <span className="text-xs text-gray-500 block">/month</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() => handleacceptreq(request)}
                            className="flex items-center gap-1 px-4 py-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-xl text-sm font-bold transition-all duration-300 focus:ring-2 focus:ring-emerald-200"
                          >
                            <MdCheckCircle className="text-lg" /> Accept
                          </button>
                          <button
                            onClick={() => handleReject(request)}
                            className="flex items-center gap-1 px-4 py-2 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl text-sm font-bold transition-all duration-300 focus:ring-2 focus:ring-red-200"
                          >
                            <MdCancel className="text-lg" /> Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-16 text-center">
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                           <MdOutlineDomainVerification className="text-5xl text-gray-300" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">No Pending Requests</h3>
                        <p className="text-sm text-gray-500 max-w-sm">
                          There are currently no apartment lease agreement requests waiting for your approval.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgreementReq;

import React from "react";
import useAxiosSecure from "./../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever, MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const Managemember = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: "users",
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      const alluser = res.data;
      const members = alluser.filter((user) => user.role === "member");
      return members;
    },
  });

  const handlemembers = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Remove This Member!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/${user.userEmail}`, { role: "user" })
          .then((res) => {
            Swal.fire({
              title: "Removed!",
              text: "This member was removed successfully.",
              icon: "success",
            });
            refetch();
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold flex items-center gap-3">
              <MdOutlineAdminPanelSettings className="text-4xl" />
              Manage Members
            </h1>
            <p className="mt-2 text-green-100 text-lg">
              View and manage the active members of the properties.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center bg-white/20 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/30">
            <span className="text-sm font-semibold uppercase tracking-wider text-green-50">Total Members</span>
            <span className="text-4xl font-bold">{users.length}</span>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="py-5 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
                  <th className="py-5 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Member Info</th>
                  <th className="py-5 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="py-5 px-6 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {users.map((user, idx) => (
                  <tr
                    key={user._id || idx}
                    className="hover:bg-green-50/30 transition-colors duration-200 group"
                  >
                    <td className="py-4 px-6 text-sm text-gray-500 font-medium">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                           <FaUserCircle className="text-2xl" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">{user.userName || 'N/A'}</p>
                          <p className="text-xs text-gray-500">{user.userEmail}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handlemembers(user)}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-200 group-hover:shadow-md tooltip tooltip-left"
                        data-tip="Remove Member"
                      >
                        <MdDeleteForever className="text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
                
                {users.length === 0 && (
                  <tr>
                    <td colSpan="4" className="py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center">
                        <MdOutlineAdminPanelSettings className="text-6xl text-gray-300 mb-3" />
                        <p className="text-lg font-medium">No members found</p>
                        <p className="text-sm">There are currently no users with member role.</p>
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

export default Managemember;

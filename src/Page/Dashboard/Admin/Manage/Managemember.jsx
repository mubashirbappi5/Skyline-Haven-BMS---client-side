import React from "react";
import useAxiosSecure from "./../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";

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

 const handlemembers = (user)=>{
  console.log(user._id)
   



 }

  return (
    <div>
      <div className="overflow-x-auto bg-gray-50 rounded-lg  p-6">
      <section className="flex justify-center items-center">
    <h1 className="text-3xl font-semibold text-[#94f08c]">Manage Members</h1>
  </section>
  <div className="divider mt-4 mb-6"></div>
        <table className="table-auto w-full bg-white rounded-lg ">
          <thead className="bg-gradient-to-r from-[#94f08c] to-green-400 text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold"></th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Email
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr
                className={`${
                  idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200 transition-colors`}
              >
                <th className="px-6 py-4 text-gray-800 text-sm">{idx + 1}</th>
                <td className="px-6 py-4 text-gray-800 text-sm font-medium">
                  {user.userName}
                </td>
                <td className="px-4 py-4 text-gray-600 text-sm">
                  {user.userEmail}
                </td>
                <td className=" py-4 text-center">
                  <button onClick={()=>handlemembers(user)} className="btn btn-sm bg-red-500 text-white font-bold py-2 px-2 rounded-full hover:bg-red-600 transition-all">
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Managemember;

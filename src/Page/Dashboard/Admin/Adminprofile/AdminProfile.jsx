import React from "react";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const AdminProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: report = [] } = useQuery({
    queryKey: "report",
    queryFn: async () => {
      const res = await axiosSecure.get("/adminreport");
      return res.data;
    },
  });
  const availableApartmets = report.totalApartments - report.totalAgreement;
  const PercentageofAgreement =
    (report.totalAgreement / report.totalApartments) * 100;
  const PercentageofavailableApartment =
    (availableApartmets / report.totalApartments) * 100;
  return (
    <div>
      <section className="p-8 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg shadow-lg">
        <header className="bg-gradient-to-r from-[#94f08c] to-green-500 text-white py-10 px-8 rounded-xl shadow-md">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-4xl font-extrabold">
                Welcome Back, {user.displayName}!
              </h1>
              <p className="text-xl mt-2">
                We’re glad to have you here. Manage the system with ease and
                efficiency!
              </p>
            </div>
            <div className="h-2 bg-white rounded-full w-full lg:w-3/12 mt-4 lg:mt-0">
              <div
                className="h-2 bg-[#94f08c] rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </header>

        <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col lg:flex-row items-center lg:items-start p-6">
          <img
            className="w-40 h-40 object-cover rounded-full border-4 border-[#94f08c] shadow-lg"
            src={user.photoURL}
            alt="User"
          />
          <div className="mt-6 lg:mt-0 lg:ml-8 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-gray-800">
              {user.displayName}
            </h1>
            <p className="text-gray-600 text-lg">{user.email}</p>
            <h2 className="text-lg font-semibold border border-[#94f08c] text-[#94f08c] bg-green-100 px-5 py-1 rounded-lg mt-4">
              Owner
            </h2>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="stat bg-gradient-to-r from-[#94f08c] to-green-400 text-white rounded-xl shadow-md p-6">
            <div className="stat-title text-lg font-semibold">Users</div>
            <div className="stat-value text-4xl font-bold">
              {report.totalUsers}
            </div>
          </div>

          <div className="stat bg-gradient-to-r from-[#94f08c] to-green-400 text-white rounded-xl shadow-md p-6">
            <div className="stat-title text-lg font-semibold">Members</div>
            <div className="stat-value text-4xl font-bold">
              {report.totalMembers}
            </div>
          </div>

          <div className="stat bg-gradient-to-r from-[#94f08c] to-green-400 text-white rounded-xl shadow-md p-6">
            <div className="stat-title text-lg font-semibold">
              Total Apartments
            </div>
            <div className="stat-value text-4xl font-bold">
              {report.totalApartments}
            </div>
          </div>

          <div className="stat bg-white border border-gray-300 rounded-xl shadow-md p-6">
            <div className="stat-title text-lg font-semibold text-gray-800">
              Total Agreement
            </div>
            <div className="stat-value text-4xl font-bold text-[#94f08c]">
              {report.totalAgreement}
            </div>
            <div className="stat-desc text-gray-500 mt-2">
              Percentage: ↘︎ {report.totalApartments} ({PercentageofAgreement}%)
            </div>
          </div>

          <div className="stat bg-white border border-gray-300 rounded-xl shadow-md p-6">
            <div className="stat-title text-lg font-semibold text-gray-800">
              Available Apartments
            </div>
            <div className="stat-value text-4xl font-bold text-[#94f08c]">
              {availableApartmets}
            </div>
            <div className="stat-desc text-gray-500 mt-2">
              Percentage: ↘︎ {report.totalApartments} (
              {PercentageofavailableApartment}%)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminProfile;

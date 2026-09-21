import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdTitle, MdDescription } from "react-icons/md";
import { IoSend } from "react-icons/io5";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();
  const Navigate = useNavigate();
  
  const handleannounce = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const announce = form.announcement.value;

    const announcement = {
      title: title,
      notice: announce,
    };
    
    Swal.fire({
      title: "Publish Announcement?",
      text: "This will be visible to all members.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, publish it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/notice", announcement).then((res) => {
          if (res.data.insertedId || res.data.id) {
            Swal.fire({
              title: "Announcement Sent!",
              text: "Your new announcement has been published successfully.",
              icon: "success",
              confirmButtonColor: "#22c55e"
            });
            form.reset();
            Navigate("/");
          }
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-8">
        
        {/* Header Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 p-8 md:p-12 shadow-2xl text-white text-center flex flex-col items-center">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 opacity-10">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFFFFF" d="M45.7,-76.4C58.8,-69.3,68.7,-55.5,77.5,-41.2C86.3,-26.9,94,-12.1,92.5,2.1C91,16.2,80.4,29.7,70.5,41.7C60.6,53.8,51.3,64.5,39.4,72.4C27.5,80.3,13.8,85.5,-0.6,86.6C-15,87.7,-30,84.7,-43.3,77.3C-56.5,70,-68.1,58.3,-75.7,44.7C-83.3,31.1,-86.9,15.6,-85.7,0.7C-84.5,-14.2,-78.6,-28.4,-70.5,-41.1C-62.5,-53.8,-52.3,-65,-40,-72.1C-27.7,-79.1,-13.9,-82,1.3,-83.9C16.4,-85.8,32.7,-83.5,45.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30">
              <HiOutlineSpeakerphone className="text-5xl text-white drop-shadow-md" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-sm">
              Make an Announcement
            </h1>
            <p className="text-green-50 text-lg max-w-xl mx-auto">
              Share important updates and news with your apartment community instantly.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4">
             <div className="w-16 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
          </div>
          
          <form onSubmit={handleannounce} className="space-y-8 mt-4">
            
            {/* Title Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                 <MdTitle className="text-emerald-500 text-lg" />
                 Announcement Title
              </label>
              <div className="relative">
                <input
                  required
                  name="title"
                  type="text"
                  placeholder="e.g. Monthly Maintenance Notice"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 text-gray-700 shadow-sm"
                />
              </div>
            </div>

            {/* Description Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                 <MdDescription className="text-emerald-500 text-lg" />
                 Description
              </label>
              <div className="relative">
                <textarea
                  required
                  name="announcement"
                  rows={6}
                  placeholder="Write the full details of your announcement here..."
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300 text-gray-700 shadow-sm resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto md:px-12 flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mx-auto"
              >
                <span>Publish Announcement</span>
                <IoSend className="text-xl" />
              </button>
            </div>
            
          </form>
        </div>

      </div>
    </div>
  );
};

export default MakeAnnouncement;

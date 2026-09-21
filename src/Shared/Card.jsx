import React, { useState } from "react";
import { FaBuilding } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import useAuth from "./../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Card = ({ apart, isLarge = false }) => {
  const { apartmentNo, blockName, floorNo, rent, imageUrl, id, status, paymentStatus } = apart;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiossecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (!user) {
      return navigate("/login");
    }
    setIsModalOpen(true);
  };

  const handleagreement = (id) => {
    const agreementData = {
      userName: user?.displayName,
      userEmail: user?.email,
      floorNo: floorNo,
      apartmentNo: apartmentNo,
      blockName: blockName,
      rent: rent,
      apartment_id: id,
      Agreement_req_date: new Date(),
      Status: "pending",
    };
    
    axiossecure.post("/request", agreementData).then((res) => {
      if (res.data.id || res.data.insertedId) {
        setIsModalOpen(false);
        Swal.fire({
          title: "Agreement!",
          text: "Your Agreement request sent.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="w-full h-full flex">
      <div className="flex flex-col w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2 group">
        <div className={`relative overflow-hidden ${isLarge ? 'h-full min-h-[300px] md:min-h-[500px]' : 'h-64'}`}>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
          <img className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" src={imageUrl} alt={`Apartment ${apartmentNo}`} />
          
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full z-20 shadow-lg border border-primary/20">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Apt {apartmentNo}</span>
          </div>

          {(status === 'booked' || paymentStatus === 'paid') && (
            <div className={`absolute top-4 left-4 backdrop-blur-sm px-4 py-2 rounded-full z-20 shadow-lg border ${paymentStatus === 'paid' ? 'bg-green-500/90 border-green-600' : 'bg-red-500/90 border-red-600'}`}>
              <span className="text-white font-bold tracking-wider uppercase text-sm">
                {paymentStatus === 'paid' ? 'Sold' : 'Already Booked'}
              </span>
            </div>
          )}
          
          {/* If it's large, overlay the content on the image */}
          {isLarge && (
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent z-20 hidden md:flex flex-col">
                  <div className="flex justify-between items-end mb-4">
                      <div>
                          <h1 className="text-5xl font-black text-white drop-shadow-lg mb-2">
                            ${rent} <span className="text-lg font-medium text-gray-300">/ mo</span>
                          </h1>
                          <div className="flex gap-4 text-white">
                              <span className="flex items-center gap-2"><RiCommunityFill/> Block {blockName}</span>
                              <span className="flex items-center gap-2"><FaBuilding/> Floor {floorNo}</span>
                          </div>
                      </div>
                      <button 
                        onClick={handleOpenModal} 
                        disabled={status !== 'available'}
                        className={`px-8 py-4 font-bold uppercase rounded-xl transition-colors shadow-lg ${
                          status === 'available'
                            ? 'bg-primary text-white hover:bg-secondary'
                            : 'bg-gray-500 text-gray-200 cursor-not-allowed'
                        }`}>
                          {status === 'available' ? 'Request Agreement' : (status === 'pending' ? 'Pending Request' : 'Already Booked')}
                      </button>
                  </div>
              </div>
          )}
        </div>

        {/* Normal Content (Hidden on large screens if isLarge is true, but visible on mobile) */}
        <div className={`p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-background ${isLarge ? 'md:hidden' : ''}`}>
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-black text-text">
              ${rent} <span className="text-sm font-medium text-gray-500 tracking-normal">/ month</span>
            </h1>
          </div>

          <div className="flex flex-col gap-3 mb-6 flex-grow">
            <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
              <div className="p-2 bg-primary/10 text-primary rounded-lg"><RiCommunityFill size={20}/></div>
              <span className="font-medium text-lg">Block: <span className="text-text font-bold">{blockName}</span></span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
              <div className="p-2 bg-primary/10 text-primary rounded-lg"><FaBuilding size={20}/></div>
              <span className="font-medium text-lg">Floor: <span className="text-text font-bold">{floorNo}</span></span>
            </div>
          </div>

          <button
            onClick={handleOpenModal}
            disabled={status !== 'available'}
            className={`w-full py-4 mt-auto font-bold text-white uppercase tracking-wider transition-all duration-300 transform rounded-xl focus:outline-none ${
              status === 'available' 
                ? 'bg-text hover:bg-primary shadow-xl hover:shadow-primary/30 active:scale-95' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {status === 'available' ? 'Agreement Request' : (status === 'pending' ? 'Pending Request' : 'Already Booked')}
          </button>
        </div>
      </div>

      {/* Agreement Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl transform transition-all">
            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
              <h2 className="text-2xl font-bold tracking-wide">Apartment Agreement</h2>
              <p className="text-white/80 mt-1">Review the details and accept the terms to proceed.</p>
            </div>
            
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              {/* User Details */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Your Information</h3>
                <p className="font-bold text-gray-800">{user?.displayName}</p>
                <p className="text-sm text-gray-600">{user?.email}</p>
              </div>

              {/* Apartment Details */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Apartment Details</h3>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Apt No</p>
                  <p className="font-bold text-gray-800">{apartmentNo}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Block</p>
                  <p className="font-bold text-gray-800">{blockName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Floor</p>
                  <p className="font-bold text-gray-800">{floorNo}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Monthly Rent</p>
                  <p className="font-bold text-primary text-lg">${rent}</p>
                </div>
              </div>

              {/* Rules and Regulations */}
              <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100">
                <h3 className="text-sm font-semibold text-orange-600 uppercase mb-2">Rules & Regulations</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Rent must be paid within the first 5 days of the month.</li>
                  <li>Maintain noise levels after 10 PM.</li>
                  <li>No unauthorized modifications to the apartment.</li>
                  <li>Pets require prior management approval.</li>
                  <li>By accepting, you agree to these terms.</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 rounded-xl font-semibold text-gray-600 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => handleagreement(id)}
                className="px-6 py-2.5 rounded-xl font-bold text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
              >
                Accept & Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

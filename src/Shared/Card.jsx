import React from "react";
import { FaBuilding } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import useAuth from "./../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Card = ({ apart, isLarge = false }) => {
  const { apartmentNo, blockName, floorNo, rent, imageUrl, id } = apart;
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiossecure = useAxiosSecure();

  const handleagreement = (id) => {
    if (!user) {
      return navigate("/login");
    }
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
                      <button onClick={() => handleagreement(id)} className="px-8 py-4 bg-primary text-white font-bold uppercase rounded-xl hover:bg-secondary transition-colors shadow-lg">
                          Request Agreement
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
            onClick={() => handleagreement(id)}
            className="w-full py-4 mt-auto font-bold text-white uppercase tracking-wider transition-all duration-300 transform bg-text rounded-xl hover:bg-primary shadow-xl hover:shadow-primary/30 focus:outline-none active:scale-95"
          >
            Agreement Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

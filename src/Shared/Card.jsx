import React from "react";

import { FaBuilding } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import useAuth from "./../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const Card = ({ apart }) => {
  const { apartmentNo, blockName, floorNo, rent, imageUrl, _id } = apart;
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
      apartment_id: _id,
      Agreement_req_date: new Date(),
      Status: "pending",
    };
    
    axiossecure.post("/request", agreementData).then((res) => {
      
      if (res.data.insertedId) {
        Swal.fire({
          title: "Agreement!",
          text: "Your Agreement request sent.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <div className="flex flex-col max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="">
          <img className="h-60 w-full" src={imageUrl} alt="" />
        </div>

        <div className="w-2/3 p-4 md:p-4 space-y-2">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Apartment No:{apartmentNo}
          </h1>

          <h4 className="flex gap-2 items-center">
            <RiCommunityFill />
            Block: {blockName}
          </h4>
          <h4 className="flex gap-2 items-center">
            <FaBuilding /> Floor: {floorNo}
          </h4>

          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
            Rent: ${rent}
          </h1>

          <button
            onClick={() => handleagreement(_id)}
            className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
          >
            Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

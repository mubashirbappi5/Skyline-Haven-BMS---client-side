import React, { useState } from "react";
import CommonHeader from "../../../Shared/CommonHeader";
import { Map, Marker } from "pigeon-maps";
import { FaLandmark, FaLocationDot } from "react-icons/fa6";

const Location = () => {
  
  return (
    <div>
      <CommonHeader
        title={"Find Us in the Heart of the City"}
        subtitle={"location"}
      />
      <section className="grid  grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4">
          <Map height={300} defaultCenter={[24.8998, 91.8719]} defaultZoom={16} zoomSnap={true} className='rounded-lg'>
            <Marker
              width={50}
              anchor={[24.8998, 91.8719]}
           
             
            />
          
                
                   
                <div
                    className="absolute bg-secondary text-white text-sm py-1 px-3 rounded shadow-md"
                    style={{
                      top: "35%",
                      left: "50%",
                      transform: "translate(-50%, -100%)",
                    }}
                  >
                   Skyline Haven, Sylhet 3320
                  </div>
                 
          </Map>
        </div>
        <div className="space-y-4  md:px-2 px-4">
           <h1 className="text-xl font-semibold">Location</h1>
           <p>Skyline Haven is located at a prime address in the Sylhet city, offering seamless access to essential services, public transport, and vibrant lifestyle opportunities. Whether it's work, school, shopping, or leisure, everything is just a step away.</p> 
           <h2 className="flex  items-center"><FaLocationDot />Address: 123 Skyline Avenue, Mirboxtula, Sylhet city</h2>
           <h2 className="flex items-center"><FaLandmark /> Landmarks:Nearby SWMC</h2>
           <a href="https://www.google.com/maps/dir//24.8997746,91.8719169/@24.8995007,91.8719378,19.04z?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="btn bg-[#94f08c] text-white hover:bg-green-600 transition duration-300">See Map</a>

        </div>
      </section>
    </div>
  );
};

export default Location;

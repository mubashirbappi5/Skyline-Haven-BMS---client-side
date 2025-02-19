import React from "react";
import CommonHeader from "../../../Shared/CommonHeader";
import useApartment from "../../../Hooks/useApartment";
import Card from "../../../Shared/Card";
import { Link } from "react-router-dom";

const Featured = () => {
    const [apartments] = useApartment();

    const LuxuryApartments = apartments.filter(apartment => apartment.rent >= 880);
console.log(LuxuryApartments)

  return (
    <div className="mx-auto">
      <CommonHeader
        title={"Discover Our Exclusive Luxury Apartments"}
        subtitle={"Apartments"}
      ></CommonHeader>
    <section className="grid   lg:grid-cols-3  gap-4 grid-cols-1 ">
    {LuxuryApartments.map((apartment) => (
              <Card key={apartment.id} apart={apartment} />
            ))}


    </section>

 <div className="flex justify-center my-10">
 <Link to={'/apartments'}><button className="btn bg-primary border-none text-white">See more</button></Link>
 </div>

    </div>
  );
};

export default Featured;

import React from "react";
import img1 from "../assets/image/about2.jpg";

import {
  FaRegLightbulb,
  FaChartLine,
  FaCreditCard,
  FaEye,
  FaBullseye,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            About Skyline Haven
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Skyline Haven is a revolutionary Building Management System (BMS)
            designed to make living in luxury apartments more comfortable and
            convenient.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div className="flex justify-center">
            <img
              src={img1}
              alt="About Us"
              className="w-full max-w-xs md:max-w-md rounded-lg shadow-xl transform transition-all hover:scale-105"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-600 mt-4">
              At Skyline Haven, we believe in creating a seamless living
              experience for our residents. From smart home automation to
              advanced payment integration, our BMS platform ensures that
              everything runs smoothly, efficiently, and securely.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Our team has dedicated countless hours to perfecting every detail
              of the system, from ensuring robust security measures to
              delivering real-time monitoring of building utilities. With
              Skyline Haven, you get the comfort and reliability that you
              deserve.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-xl transform transition-all hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 text-4xl">
                <FaEye />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-gray-600 mt-4">
              Our vision is to redefine modern living by providing
              state-of-the-art technological solutions that enhance the quality
              of life for building residents. We aim to create smart,
              sustainable communities where technology and human experience
              seamlessly blend.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl transform transition-all hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="text-green-500 text-4xl">
                <FaBullseye />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-600 mt-4">
              Our mission is to develop a scalable, intuitive, and secure BMS
              platform that empowers building managers, homeowners, and
              residents. By continuously innovating, we strive to make life
              easier, safer, and more enjoyable for everyone in our connected
              communities.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Key Features of Skyline Haven BMS
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transform transition-all hover:scale-105">
              <div className="text-blue-500 text-3xl">
                <FaRegLightbulb />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Smart Automation
              </h3>
              <p className="text-gray-600 mt-4">
                Control your apartment’s lights, HVAC, and other systems from
                your smartphone with our intuitive app.
              </p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transform transition-all hover:scale-105">
              <div className="text-green-500 text-3xl">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-600 mt-4">
                Stay informed with live updates about building utilities and
                security. Our platform keeps track of all building systems.
              </p>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transform transition-all hover:scale-105">
              <div className="text-yellow-500 text-3xl">
                <FaCreditCard />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Payment Integration
              </h3>
              <p className="text-gray-600 mt-4">
                Pay your rent, utilities, and other charges seamlessly using
                integrated payment gateways like Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

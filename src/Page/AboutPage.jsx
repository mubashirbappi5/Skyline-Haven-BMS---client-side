import React from "react";
import img1 from "../assets/image/about2.jpg";
import img2 from "../assets/image/building.jpg";

import {
  FaRegLightbulb,
  FaChartLine,
  FaCreditCard,
  FaEye,
  FaBullseye,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="w-full bg-white relative overflow-hidden pt-24 pb-32">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 space-y-40">
        
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-12">
          <span className="text-primary font-bold tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full inline-block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-black text-text leading-tight">
            Elevating the Standard of Modern Living.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed font-light mx-auto max-w-2xl">
            Skyline Haven is a revolutionary Building Management System (BMS)
            designed to make living in luxury apartments more comfortable and
            convenient.
          </p>
        </div>

        {/* Story Section - Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] transform -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
            <img
              src={img1}
              alt="About Us"
              className="relative w-full h-[600px] object-cover rounded-[3rem] shadow-2xl border-4 border-white"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block border border-gray-100">
                <div className="text-5xl font-black text-primary mb-2">10+</div>
                <div className="text-gray-500 font-bold uppercase tracking-wider text-sm">Years of<br/>Excellence</div>
            </div>
          </div>

          <div className="space-y-8 lg:pl-10">
            <h2 className="text-4xl md:text-5xl font-black text-text leading-tight">
                Seamless Living,<br/>Perfected.
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full"></div>
            <div className="space-y-6 text-lg text-gray-500 font-light leading-relaxed">
                <p>
                At Skyline Haven, we believe in creating a seamless living
                experience for our residents. From smart home automation to
                advanced payment integration, our BMS platform ensures that
                everything runs smoothly, efficiently, and securely.
                </p>
                <p>
                Our team has dedicated countless hours to perfecting every detail
                of the system, from ensuring robust security measures to
                delivering real-time monitoring of building utilities. With
                Skyline Haven, you get the comfort and reliability that you
                deserve.
                </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission - Glassmorphism Overlaps */}
        <div className="relative">
            <div className="absolute inset-0 bg-text rounded-[4rem] transform rotate-1 scale-105"></div>
            <div className="relative bg-gradient-to-br from-text to-gray-900 rounded-[4rem] p-12 md:p-20 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl hover:bg-white/15 transition-colors duration-300">
                        <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary text-3xl mb-8">
                            <FaEye />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                        <p className="text-gray-300 text-lg leading-relaxed font-light">
                            Our vision is to redefine modern living by providing
                            state-of-the-art technological solutions that enhance the quality
                            of life for building residents. We aim to create smart,
                            sustainable communities where technology and human experience
                            seamlessly blend.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl hover:bg-white/15 transition-colors duration-300 mt-0 md:mt-12">
                        <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent text-3xl mb-8">
                            <FaBullseye />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-gray-300 text-lg leading-relaxed font-light">
                            Our mission is to develop a scalable, intuitive, and secure BMS
                            platform that empowers building managers, homeowners, and
                            residents. By continuously innovating, we strive to make life
                            easier, safer, and more enjoyable for everyone in our connected
                            communities.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Key Features */}
        <div className="pt-10">
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-text leading-tight">
                Key Features of Skyline Haven BMS
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: <FaRegLightbulb />, title: "Smart Automation", desc: "Control your apartment’s lights, HVAC, and other systems from your smartphone with our intuitive app.", color: "text-blue-500", bg: "bg-blue-50" },
                { icon: <FaChartLine />, title: "Real-Time Monitoring", desc: "Stay informed with live updates about building utilities and security. Our platform keeps track of all building systems.", color: "text-green-500", bg: "bg-green-50" },
                { icon: <FaCreditCard />, title: "Payment Integration", desc: "Pay your rent, utilities, and other charges seamlessly using integrated payment gateways like Stripe.", color: "text-yellow-500", bg: "bg-yellow-50" }
            ].map((feature, idx) => (
                <div key={idx} className="group bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
                    <div className={`w-20 h-20 mx-auto rounded-full ${feature.bg} ${feature.color} flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-text mb-4">
                        {feature.title}
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                        {feature.desc}
                    </p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

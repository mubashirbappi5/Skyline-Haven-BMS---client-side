import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What types of apartments are available at Skyline Haven?",
    answer: "Skyline Haven offers a range of modern one, two, and three-bedroom apartments designed for both comfort and luxury. Each unit is built with high-end finishes and optimized for contemporary living."
  },
  {
    question: "What amenities are included in the Skyline Haven apartments?",
    answer: "Our apartments come with top-notch amenities, including a fully-equipped gym, swimming pool, 24/7 security, parking spaces, high-speed internet, and access to common areas like a lounge and rooftop garden."
  },
  {
    question: "Are the apartments at Skyline Haven pet-friendly?",
    answer: "Yes! We understand that pets are family, and Skyline Haven is a pet-friendly community. We provide designated pet areas and parks within the premises."
  },
  {
    question: "How can I schedule a viewing for an apartment at Skyline Haven?",
    answer: "To schedule a viewing, simply visit our website and fill out the contact form, or call our office directly. We’ll be happy to arrange a tour of the apartments at your convenience."
  },
  {
    question: "Is there parking available for residents at Skyline Haven?",
    answer: "Yes, Skyline Haven offers ample parking spaces for residents. There are both indoor and outdoor parking options available, as well as electric vehicle charging stations."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white relative">
      <div className="container px-4 md:px-8 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest uppercase">Support</span>
                <h2 className="text-5xl md:text-6xl font-black text-text leading-tight">
                    Any Questions? <br/> We've Got Answers.
                </h2>
            </div>
            <div className="w-24 h-1 bg-accent rounded-full mt-6 md:mt-0"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b-2 transition-all duration-300 ${activeIndex === index ? 'border-primary' : 'border-gray-200 hover:border-gray-400'}`}
            >
              <button
                className="flex items-center justify-between w-full py-8 text-left focus:outline-none group"
                onClick={() => toggleAnswer(index)}
              >
                <h1 className={`font-bold text-2xl md:text-3xl transition-colors duration-300 pr-8 ${activeIndex === index ? 'text-primary' : 'text-text group-hover:text-gray-600'}`}>
                  {faq.question}
                </h1>
                <span className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 transform ${activeIndex === index ? 'bg-primary text-white rotate-180 shadow-lg shadow-primary/40' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:scale-110'}`}>
                  {activeIndex === index ? <FaMinus size={20} /> : <FaPlus size={20} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-64 pb-10 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-4xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

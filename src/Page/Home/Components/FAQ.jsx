import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="w-full bg-white relative py-20">
      <div className="container px-4 md:px-8 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="space-y-4">
                <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-sm"
                >
                    Support
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight"
                >
                    Any Questions? <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">We've Got Answers.</span>
                </motion.h2>
            </div>
            <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-6 md:mt-0 origin-left"
            ></motion.div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index} 
              className={`rounded-3xl p-6 md:p-8 transition-all duration-500 border ${activeIndex === index ? 'bg-emerald-50 border-emerald-100 shadow-lg shadow-emerald-500/10' : 'bg-white border-gray-100 hover:border-emerald-200 hover:shadow-md'}`}
            >
              <button
                className="flex items-center justify-between w-full text-left focus:outline-none group"
                onClick={() => toggleAnswer(index)}
              >
                <h1 className={`font-bold text-2xl md:text-3xl transition-colors duration-300 pr-8 ${activeIndex === index ? 'text-emerald-600' : 'text-gray-800 group-hover:text-emerald-500'}`}>
                  {faq.question}
                </h1>
                <span className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-500 transform ${activeIndex === index ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/40' : 'bg-gray-100 text-gray-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 group-hover:scale-110'}`}>
                  {activeIndex === index ? <FaMinus size={20} /> : <FaPlus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl pt-8 border-t border-emerald-200/50 mt-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

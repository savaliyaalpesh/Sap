import React from "react";
import Main from '../../Componets/Main';
import Expertise from '../../Componets/Expertise'
import Technologies from '../../Componets/Technologies';
import Testimonial from '../../Componets/Testimonial'
import Faqs from "../../Componets/Faqs"



const Company = () => {
  return (
    <>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 relative">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="z-10 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-500 leading-tight tracking-tight mb-4">
              Rise and Grow<br />with SAP
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-6 tracking-wide">
              THE ROADMAP OF YOUR DIGITAL<br />TRANSFORMATION
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide mb-8">
              Experience digital transformation with "Rise and Grow with SAP," your roadmap to success. This comprehensive solution helps businesses seamlessly navigate digital transformation. This transformative platform enables businesses to thrive in today's dynamic enterprise landscape by streamlining processes, enhancing customer experiences, unlocking new opportunities, and driving sustainable growth. Rise and Grow with SAP to embrace digitalization and grow your business.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-600 border border-transparent hover:border-blue-600 font-medium py-3 px-6 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base">
                Services
              </button>
              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-600 border border-transparent hover:border-blue-600 font-medium py-3 px-6 sm:px-8 rounded-full transition duration-300 text-sm sm:text-base">
                Solutions
              </button>
              <button className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-medium py-3 px-6 sm:px-8 rounded-full border border-blue-500 transition duration-300 text-sm sm:text-base">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Dots Background (Left Side) */}
        <div className="absolute left-0 bottom-0 grid grid-cols-6 gap-2 opacity-20 hidden md:grid">
          {Array(36).fill().map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-blue-200"></div>
          ))}
        </div>
      </div>


      <Main />
      <Expertise />
      <Technologies />
      <Testimonial />
      <Faqs />
    </>
  );
};

export default Company;
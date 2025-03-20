import React from "react";
import Main from '../../Componets/Main';
import Expertise from '../../Componets/Expertise';
import Technologies from '../../Componets/Technologies';
import Testimonial from '../../Componets/Testimonial';
import Faqs from "../../Componets/Faqs";
import Rise from "../../Assets/Rise and Grow.png";
import Form from "../Form";

const Company = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-20 relative">
          {/* Hero Section with Background Image */}
          <div className="relative min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">
            {/* Background Image Container (visible on all devices) */}
            <div className="absolute inset-0 z-0 opacity-15">
              <div className="h-full w-full">
                <img 
                  src={Rise} 
                  alt="Rise and Grow with SAP" 
                  className="w-full h-full object-cover md:object-contain lg:object-cover"
                />
              </div>
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center md:items-start md:max-w-2xl lg:max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-500 leading-tight tracking-tight mb-3 md:mb-4 text-center md:text-left">
                Rise and Grow<br />with SAP
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 md:mb-6 tracking-wide text-center md:text-left">
                THE ROADMAP OF YOUR DIGITAL<br className="hidden sm:block" />TRANSFORMATION
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide mb-6 md:mb-8 text-center md:text-left">
                Experience digital transformation with "Rise and Grow with SAP," your roadmap to success. This comprehensive solution helps businesses seamlessly navigate digital transformation. This transformative platform enables businesses to thrive in today's dynamic enterprise landscape by streamlining processes, enhancing customer experiences, unlocking new opportunities, and driving sustainable growth. Rise and Grow with SAP to embrace digitalization and grow your business.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 w-full">
                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-600 border border-transparent hover:border-blue-600 font-medium py-2 sm:py-3 px-5 sm:px-6 md:px-8 rounded-full transition duration-300 text-sm sm:text-base shadow-md hover:shadow-lg">
                  Services
                </button>
                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-600 border border-transparent hover:border-blue-600 font-medium py-2 sm:py-3 px-5 sm:px-6 md:px-8 rounded-full transition duration-300 text-sm sm:text-base shadow-md hover:shadow-lg">
                  Solutions
                </button>
                <button className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-medium py-2 sm:py-3 px-5 sm:px-6 md:px-8 rounded-full border border-blue-500 transition duration-300 text-sm sm:text-base shadow-md hover:shadow-lg mt-3 sm:mt-0">
                  Schedule a Free Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Dots Background (Left Side) */}
          <div className="absolute left-0 bottom-0 grid grid-cols-6 gap-2 opacity-20 md:grid">
            {Array(36).fill().map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-blue-200"></div>
            ))}
          </div>

          {/* Additional decorative elements */}
          <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-blue-200 opacity-20 hidden lg:block"></div>
          <div className="absolute bottom-20 right-20 w-8 h-8 rounded-full bg-blue-300 opacity-30 hidden lg:block"></div>
        </div>
      </section>

      <Main />
      <Expertise />
      <Technologies />
      <Testimonial />
      <Faqs />

      {/* Form Title */}
      <div className="text-center md:mb-8">
        <p className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-2 tracking-widest">Get in touch with</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
          India's Leading SAP Digital Transformation and Consulting Partner
        </h1>
      </div>

      <Form />
    </>
  );
};

export default Company;
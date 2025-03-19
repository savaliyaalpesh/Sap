import React from "react";
import Main from '../../Componets/Main';
import Expertise from '../../Componets/Expertise';
import Technologies from '../../Componets/Technologies';
import Testimonial from '../../Componets/Testimonial';
import Faqs from "../../Componets/Faqs";
import imgs from "../../Assets/Automation.jpg"

const Company = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-20 relative">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="z-10 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-500 leading-tight tracking-tight mb-3 md:mb-4">
                Rise and Grow<br />with SAP
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 md:mb-6 tracking-wide">
                THE ROADMAP OF YOUR DIGITAL<br className="hidden sm:block" />TRANSFORMATION
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
                Experience digital transformation with "Rise and Grow with SAP," your roadmap to success. This comprehensive solution helps businesses seamlessly navigate digital transformation. This transformative platform enables businesses to thrive in today's dynamic enterprise landscape by streamlining processes, enhancing customer experiences, unlocking new opportunities, and driving sustainable growth. Rise and Grow with SAP to embrace digitalization and grow your business.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-600 border border-transparent hover:border-blue-600 font-medium py-2 sm:py-3 px-5 sm:px-6 md:px-8 rounded-full transition duration-300 text-sm sm:text-base shadow-md hover:shadow-lg">
                  Services
                </button>
                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-600 border border-transparent hover:border-blue-600 font-medium py-2 sm:py-3 px-5 sm:px-6 md:px-8 rounded-full transition duration-300 text-sm sm:text-base shadow-md hover:shadow-lg">
                  Solutions
                </button>
                <button className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-medium py-2 sm:py-3 px-5 sm:px-6 md:px-8 rounded-full border border-blue-500 transition duration-300 text-sm sm:text-base shadow-md hover:shadow-lg mt-3 md:mt-0 w-full md:w-auto">
                  Schedule a Free Consultation
                </button>
              </div>
            </div>

            <div className="hidden md:block relative">
              {/* Placeholder for an image or additional content */}
              <div className="bg-blue-100 bg-opacity-50 rounded-lg h-80 lg:h-96 w-full flex items-center justify-center">
                {/* <img src={imgs} alt="" /> */}
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 opacity-10 rounded-full"></div>
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
    </>
  );
};

export default Company;
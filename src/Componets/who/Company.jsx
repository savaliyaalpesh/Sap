import React from "react";

const Company = () => {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="z-10">
          <h1 className="text-6xl font-bold text-blue-400 leading-tight mb-4">
            Rise and Grow<br />with SAP
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            THE ROADMAP OF YOUR DIGITAL<br />TRANSFORMATION
          </h2>
          <p className="text-gray-600 mb-8">
            Experience digital transformation with 'Rise and Grow with SAP' your roadmap to success. This comprehensive solution helps businesses seamlessly navigate digital transformation. This transformative platform enables businesses to thrive in today's dynamic enterprise panorama by streamlining tactics, enhancing client studies, unlocking new possibilities, and driving sustainable increases. Rise and Grow with SAP to embrace digitalization and grow your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-400 hover:bg-white text-white hover:text-blue-600 border border-transparent hover:border-blue-600 font-medium py-3 px-8 rounded-full transition duration-300">
              Services
            </button>
            <button className="bg-blue-400 hover:bg-white text-white hover:text-blue-600 border border-transparent hover:border-blue-600 font-medium py-3 px-8 rounded-full transition duration-300">
              Solutions
            </button>
            <button className="bg-white hover:bg-blue-400 text-blue-500 hover:text-white font-medium py-3 px-8 rounded-full border border-blue-400 transition duration-300">
              Schedule a Free Consultation
            </button>
          </div>
        </div>

        <div className="relative hidden md:block">
          {/* Hexagon Grid Background */}
          <div className="absolute inset-0 z-0">
            <div className="grid grid-cols-3 gap-4">
              {Array(9)
                .fill()
                .map((_, index) => (
                  <div key={index} className="relative">
                    <svg className="w-full h-auto" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                    </svg>
                  </div>
                ))}
            </div>
          </div>

          {/* Feature Hexagons */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { title: "ABAP", img: "/api/placeholder/30/30" },
              { title: "AMS", img: "/api/placeholder/30/30" },
              { title: "Basis", img: "/api/placeholder/30/30" },
              { title: "BTP", img: "/api/placeholder/30/30" },
              { title: "Fiori UI5", img: "/api/placeholder/30/30" },
              { title: "Process", img: "/api/placeholder/30/30" },
              { title: "People", img: "/api/placeholder/30/30" },
              { title: "Upgrade", img: "/api/placeholder/30/30" },
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-90 shadow-sm rounded-lg p-4 text-center">
                <div className="flex justify-center mb-2">
                  <img src={item.img} alt={item.title} className="h-8" />
                </div>
                <p className="text-gray-800 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Background (Left Side) */}
      <div className="absolute left-0 bottom-0 grid grid-cols-6 gap-2 opacity-20">
        {Array(36)
          .fill()
          .map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-blue-200"></div>
          ))}
      </div>
    </div>
  );
};

export default Company;

import React from 'react';
import IT from "../Assets/IT.jpg"
import Textile from "../Assets/Textile.jpg"
import Pharma from "../Assets/Pharma.jpg"
import Construction from "../Assets/Construction.jpg"

const Technologies = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Why VSD Technologies Section */}
      <div className="mb-12 sm:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Why VSD Technologies?</h1>
          <p className="text-gray-500 max-w-3xl mx-auto px-2">
            We provide excellent SAP services due to our expertise, reliability, dedication to excellence, and success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Reliability Column */}
          <div className="border border-gray-100 rounded-lg p-4 sm:p-6 bg-white shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 5c0-1.1.9-2 2-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
                  <path d="M8 10h8v6a2 2 0 01-2 2h-4a2 2 0 01-2-2v-6z" />
                  <path d="M9 16h6" />
                  <path d="M12 10v6" />
                </svg>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-blue-500 text-center mb-3 sm:mb-4">Reliability</h2>
            <p className="text-gray-600 text-sm sm:text-base text-balance tracking-wide">
              We guarantee system reliability and uptime with a track record of excellent SAP solutions. We provide fast support, proactive maintenance, and innovative solutions tailored to your needs from our experts. We know how important your SAP environment is and strive to provide reliable, high-quality services.
            </p>
          </div>

          {/* Customer Focus Column */}
          <div className="border border-gray-100 rounded-lg p-4 sm:p-6 bg-white shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-blue-500 text-center mb-3 sm:mb-4">Customer Focus</h2>
            <p className="text-gray-600 text-sm sm:text-base text-balance tracking-wide">
              Choose us for superior SAP services and customer service. We prioritize your challenges to provide enterprise-targeted answers. Our team goes above and beyond to ensure your pleasure, supplying personalized assistance and steerage. SAP know-how allows us to create innovative solutions that exceed expectations.
            </p>
          </div>

          {/* Experienced Consultants Column */}
          <div className="border border-gray-100 rounded-lg p-4 sm:p-6 bg-white shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-blue-500 text-center mb-3 sm:mb-4">Experienced Consultants</h2>
            <p className="text-gray-600 text-sm sm:text-base text-balance tracking-wide">
              Choose us for top-notch SAP consultants who meet your business needs. We guarantee seamless integration and maximum ROI with years of SAP implementation, customization, and support experience. We provide customized solutions, fast delivery, and ongoing support to help your business succeed.
            </p>
          </div>

          {/* Timely Delivery Column */}
          <div className="border border-gray-100 rounded-lg p-4 sm:p-6 bg-white shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-blue-500 text-center mb-3 sm:mb-4">Timely Delivery</h2>
            <p className="text-gray-600 text-sm sm:text-base text-balance tracking-wide">
              Choose us for fast, high-quality SAP services because we prioritize project deadlines. Our expert team ensures your SAP implementation or upgrade runs smoothly and on time. Our efficient processes, proactive communication, and meticulous project management ensure top-notch service without compromise.
            </p>
          </div>

          {/* Dedicated Team Work Column */}
          <div className="border border-gray-100 rounded-lg p-4 sm:p-6 bg-white shadow-sm hover:shadow-md transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-blue-500 text-center mb-3 sm:mb-4">Dedicated Team Work</h2>
            <p className="text-gray-600 text-sm sm:text-base text-balance tracking-wide">
              Choose us for dedicated teamwork and top SAP services because of our expertise and dedication to your success. Our SAP experts understand your business needs and provide customized solutions that deliver results. We seamlessly integrate, optimize, and support all your SAP initiatives.
            </p>
          </div>

        </div>
      </div>

      {/* Case Study Section */}
      <div className="mt-12 sm:mt-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-blue-500 tracking-wider">CASE STUDY</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-balance px-2">
            We Changing the Dynamics of Your Business through SAP Automation for Your Success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Information and Technology Card */}
          <div className="relative rounded-lg overflow-hidden h-64 sm:h-72 md:h-80 group transform transition duration-300 hover:scale-[1.02]">
            <img
              src={IT}
              alt="Information and Technology"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold text-lg sm:text-xl">Information Technology</h3>
            </div> */}
          </div>

          {/* Textile / Manufacturing Card */}
          <div className="relative rounded-lg overflow-hidden h-64 sm:h-72 md:h-80 group transform transition duration-300 hover:scale-[1.02]">
            <img
              src={Textile}
              alt="Textile / Manufacturing"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold text-lg sm:text-xl">Textile / Manufacturing</h3>
            </div> */}
          </div>

          {/* Pharmaceutical Card */}
          <div className="relative rounded-lg overflow-hidden h-64 sm:h-72 md:h-80 group transform transition duration-300 hover:scale-[1.02]">
            <img
              src={Pharma}
              alt="Pharmaceutical"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold text-lg sm:text-xl">Pharmaceutical</h3>
            </div> */}
          </div>

          {/* Engineering & Construction Card */}
          <div className="relative rounded-lg overflow-hidden h-64 sm:h-72 md:h-80 group transform transition duration-300 hover:scale-[1.02]">
            <img
              src={Construction}
              alt="Engineering & Construction"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold text-lg sm:text-xl">Engineering & Construction</h3>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
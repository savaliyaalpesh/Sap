import React from 'react';
import IT from "../Assets/IT.jpg"
import Textile from "../Assets/Textile.jpg"
import Pharma from "../Assets/Pharma.jpg"
import Construction from "../Assets/Construction.jpg"


const Technologies = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Why VSD Technologies Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Why VSD Technologies?</h1>
          <p className="text-gray-500 max-w-3xl mx-auto">
            We provide excellent SAP services due to our expertise, reliability, dedication to excellence, and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Reliability Column */}
          <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 5c0-1.1.9-2 2-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
                  <path d="M8 10h8v6a2 2 0 01-2 2h-4a2 2 0 01-2-2v-6z" />
                  <path d="M9 16h6" />
                  <path d="M12 10v6" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-blue-500 text-center mb-4">Reliability</h2>
            <p className="text-gray-600 text-sm">
              We guarantee system reliability and uptime with a track record of excellent SAP solutions. We provide fast support, proactive maintenance, and innovative solutions tailored to your needs from our experts. We know how important your SAP environment is and strive to provide reliable, high-quality services.
            </p>
          </div>

          {/* Customer Focus Column */}
          <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-blue-500 text-center mb-4">Customer Focus</h2>
            <p className="text-gray-600 text-sm">
              Choose us for superior SAP services and customer service. We prioritize your challenges to provide enterprise-targeted answers. Our team goes above and beyond to ensure your pleasure, supplying personalized assistance and steerage. SAP know-how allows us to create innovative solutions that exceed expectations. You can assume us to deliver superb value and help your commercial enterprise reach today's aggressive market. Discover our customer-centric SAP services and maximize your commercial enterprise.
            </p>
          </div>

          {/* Experienced Consultants Column */}
          <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-blue-500 text-center mb-4">Experienced Consultants</h2>
            <p className="text-gray-600 text-sm">
              Choose us for top-notch SAP consultants who meet your business needs. We guarantee seamless integration and maximum ROI with years of SAP implementation, customization, and support experience. We provide customized solutions, fast delivery, and ongoing support to help your business succeed. Every project benefit from our consultants' expertise and dedication, ensuring smooth operations and growth.
            </p>
          </div>

          {/* Timely Delivery Column */}
          <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-blue-500 text-center mb-4">Timely Delivery</h2>
            <p className="text-gray-600 text-sm">
              Choose us for fast, high-quality SAP services because we prioritize project deadlines. Our expert team ensures your SAP implementation or upgrade runs smoothly and on time. Our efficient processes, proactive communication, and meticulous project management ensure top-notch service without compromise.
            </p>
          </div>

          {/* Timely Delivery Column */}
          <div className="border border-gray-100 rounded-lg p-6 bg-white shadow-sm">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-200 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-blue-500 text-center mb-4">Dedicated Team Work</h2>
            <p className="text-gray-600 text-sm">
              Choose us for dedicated teamwork and top SAP services because of our expertise and dedication to your success. Our SAP experts understand your business needs and provide customized solutions that deliver results. We seamlessly integrate, optimize, and support all your SAP initiatives with years of experience and a proven track record of excellence.
            </p>
          </div>

        </div>
      </div>

      {/* Case Study Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-500">CASE STUDY</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We Changing the Dynamics of Your Business through SAP Automation for Your Success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Information and Technology Card */}
          <div className="relative rounded-lg overflow-hidden h-80 group">
            <img
              src={IT}
              alt="Information and Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
          </div>

          {/* Textile / Manufacturing Card */}
          <div className="relative rounded-lg overflow-hidden h-72 group">
            <img
              src={Textile}
              alt="Textile / Manufacturing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>

          </div>

          {/* Pharmaceutical Card */}
          <div className="relative rounded-lg overflow-hidden h-72 group">
            <img
              src={Pharma}
              alt="Pharmaceutical"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
          </div>

          {/* Engineering & Construction Card */}
          <div className="relative rounded-lg overflow-hidden h-72 group">
            <img
              src={Construction}
              alt="Engineering & Construction"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
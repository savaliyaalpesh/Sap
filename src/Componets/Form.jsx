import React, { useState } from 'react';
import Discuss from "../Assets/Discuss.jpg"

const SAPConsultingContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add actual form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto"> 
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12">
          {/* Left Side - Illustration and Contact Details */}
          <div className="flex flex-col justify-center  sm:p-6 bg-white rounded-lg shadow-sm">
            {/* Image first */}
            <div className="flex justify-center mb-4 md:mb-6">
              <img 
                src={Discuss}
                alt="Conversation illustration" 
                className="w-full max-w-sm md:max-w-md object-contain h-auto"
                loading="lazy"
              />
            </div>
            
            {/* Let's Discuss section below the image */}
            <div className="md:mt-2">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Let's Discuss</h2>
              
              {/* Horizontal layout for contact details */}
              <div className="flex flex-wrap justify-left gap-4">
                {/* Call us */}
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-500 font-medium">Call us</p>
                    <p className="text-gray-700 text-sm sm:text-base">+91 79356 67629</p>
                  </div>
                </div>
                
                {/* WhatsApp */}
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-500 font-medium">WhatsApp</p>
                    <p className="text-gray-700 text-sm sm:text-base">+91 79356 67629</p>
                  </div>
                </div>

                {/* Mail on */}
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-blue-500 font-medium">Mail on</p>
                    <p className="text-gray-700 text-sm sm:text-base">support@titantechnology.co.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md mt-4 lg:mt-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 md:mb-2">Let's Connect</h2>
            <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">We are Delivering SAP Solutions Globally</p>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Name*</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name..." 
                    className="w-full p-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company..." 
                    className="w-full p-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Mail address..." 
                    className="w-full p-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Mobile No*</label>
                  <input 
                    type="tel" 
                    id="mobile" 
                    name="mobile" 
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile number..." 
                    className="w-full p-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Select SAP</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select SAP</option>
                  <option value="SAP S/4HANA">SAP S/4HANA</option>
                  <option value="SAP Business One">SAP Business One</option>
                  <option value="SAP SuccessFactors">SAP SuccessFactors</option>
                  <option value="SAP Ariba">SAP Ariba</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message..." 
                  rows={3} 
                  className="w-full p-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm md:text-base font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Submit Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAPConsultingContact;
import React from 'react';
import logo from '../Assets/header-logo.png'
import { Link } from "react-router-dom";

const SAPLandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <header className="py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="VSD SAP Gold Partner" className="h-12" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 font-medium flex items-center">
                Who We Are
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown menu that appears on hover */}
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top duration-200 ease-in-out z-10">
                <div className="py-2 border-b border-blue-500 bg-blue-400 text-white px-4 font-medium">
                  Industries
                </div>
                <div className="py-2 hover:bg-gray-100 px-4 text-purple-600">
                  Company
                </div>
                <div className="py-2 hover:bg-gray-100 px-4 text-purple-600">
                  VSD - Leadership
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 font-medium flex items-center">
                Solution
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown menu that appears on hover */}
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top duration-200 ease-in-out z-10">
                <div className="py-2 border-b border-blue-500 bg-blue-400 text-white px-4 font-medium">
                  RISE With SAP
                </div>
                <div className="py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP S 4hana Migration
                </div>
                <div className="py-2 hover:bg-gray-100 px-4 text-purple-600">
                  EXIM
                </div>
                <div className="py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP Fiori Consultanst
                </div>
                <div className="py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP Successfactors Integration
                </div>
                <div className="py-2 hover:bg-gray-100 px-4 text-purple-600">
                  Open Ui5 Demo
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 font-medium flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown menu that appears on hover */}
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top duration-200 ease-in-out z-10">
                <div className="py-2 border-b border-blue-500 bg-blue-400 text-white px-4 font-medium">
                  SAP Consulting Services
                </div>
                <div className="py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP Technical
                </div>
                <div className="py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP Migration
                </div>
                <div className="py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP AMS SUpport Service
                </div>
                <div className="py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP BTP
                </div>
              </div>
            </div>



            <Link to="/knowledge-center" className="text-gray-700 hover:text-blue-500 font-medium">
              Knowledge Center
            </Link>
            <Link to="/career" className="text-gray-700 hover:text-blue-500 font-medium">
              Career
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500 font-medium">
              Contact Us
            </Link>
            <Link to="/blogs" className="text-gray-700 hover:text-blue-500 font-medium">
              Blogs
            </Link>
          </nav>
          <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-3 px-8 border border-transparent hover:border-blue-600 rounded-full transition duration-300">
            Request a Demo
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h1 className="text-6xl font-bold text-blue-400 leading-tight mb-4">
              Rise and Grow<br />with SAP
            </h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              THE ROADMAP OF YOUR DIGITAL<br />TRANSFORMATION
            </h2>
            <p className="text-gray-600 mb-8">
              Experience digital transformation with 'Rise and Grow with SAP' your roadmap to success. This comprehensive solution helps businesses seamlessly navigate digital transformation. This transformative platform enables businesses to thrive in today's dynamic enterprise panorama by streamlining tactics, enhancing client studies, unlocking new possibilities, and riding sustainable increases. Rise and Grow with SAP to embrace digitalization and grow your business.
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
            {/* <div className="absolute inset-0 z-0">
              <div className="grid grid-cols-3 gap-4">
                {Array(9).fill().map((_, index) => (
                  <div key={index} className="relative">
                    <svg className="w-full h-auto" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                    </svg>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Feature Hexagons */}
            {/* <div className="grid grid-cols-3 gap-4">
              <div className="col-start-2 row-start-1">
                <div className="bg-white bg-opacity-90 shadow-sm rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <img src="/api/placeholder/30/30" alt="ABAP" className="h-8" />
                  </div>
                  <p className="text-gray-800 font-medium">ABAP</p>
                </div>
              </div>
              <div className="col-start-3 row-start-1">
                <div className="bg-white bg-opacity-90 shadow-sm rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <img src="/api/placeholder/30/30" alt="AMS" className="h-8" />
                  </div>
                  <p className="text-gray-800 font-medium">AMS</p>
                </div>
              </div>
              <div className="col-start-1 row-start-2">
                <div className="bg-white bg-opacity-90 shadow-sm rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <img src="/api/placeholder/30/30" alt="Basis" className="h-8" />
                  </div>
                  <p className="text-gray-800 font-medium">Basis</p>
                </div>
              </div>
              <div className="col-start-2 row-start-2">
                <div className="bg-white bg-opacity-90 shadow-sm rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <img src="/api/placeholder/30/30" alt="BTP" className="h-8" />
                  </div>
                  <p className="text-gray-800 font-medium">BTP</p>
                </div>
              </div>
              <div className="col-start-3 row-start-2">
                <div className="bg-white bg-opacity-90 shadow-sm rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <img src="/api/placeholder/30/30" alt="Fiori UI5" className="h-8" />
                  </div>
                  <p className="text-gray-800 font-medium">Fiori UI5</p>
                </div>
              </div>
              <div className="col-start-1 row-start-3">
                <div className="bg-white bg-opacity-90 shadow-sm rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <img src="/api/placeholder/30/30" alt="Process" className="h-8" />
                  </div>
                  <p className="text-gray-800 font-medium">Process</p>
                </div>
              </div>
              <div className="col-start-2 row-start-3">
                <div className="bg-white bg-opacity-90 shadow-sm rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <img src="/api/placeholder/30/30" alt="People" className="h-8" />
                  </div>
                  <p className="text-gray-800 font-medium">People</p>
                </div>
              </div>
              <div className="col-start-3 row-start-3">
                <div className="bg-white bg-opacity-90 shadow-sm rounded-lg p-4 text-center">
                  <div className="flex justify-center mb-2">
                    <img src="/api/placeholder/30/30" alt="Upgrade" className="h-8" />
                  </div>
                  <p className="text-gray-800 font-medium">Upgrade</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Dots Background (Left Side) */}
        <div className="absolute left-0 bottom-0 grid grid-cols-6 gap-2 opacity-20">
          {Array(36).fill().map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-blue-200"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SAPLandingPage;
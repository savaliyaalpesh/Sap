import React from 'react';
import logo from '../Assets/header-logo.png'
import { Link } from "react-router-dom";

const SAPLandingPage = () => {
  return (
    <div className="bg-slate-50">
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
                <Link to="/industries" className="block py-2 bg-blue-400 text-white px-4 font-medium hover:bg-blue-500">
                  Industries
                </Link>
                <Link to="/" className="block py-2 hover:bg-gray-100 px-4 text-purple-600">
                  Company
                </Link>
                <Link to="/leadership" className="block py-2 hover:bg-gray-100 px-4 text-purple-600">
                  VSD - Leadership
                </Link>
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
                <Link to="/rise-with-sap" className="block py-2 border-b border-blue-500 bg-blue-400 text-white px-4 font-medium hover:bg-blue-500">
                  RISE With SAP
                </Link>
                <Link to="/s4hana-migration" className="block py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP S 4hana Migration
                </Link>
                <Link to="/exim" className="block py-2 hover:bg-gray-100 px-4 text-purple-600">
                  EXIM
                </Link>
                <Link to="/fiori-consultants" className="block py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP Fiori Consultanst
                </Link>
                <Link to="/successfactors-integration" className="block py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP Successfactors Integration
                </Link>
                <Link to="/openui5-demo" className="block py-2 hover:bg-gray-100 px-4 text-purple-600">
                  Open Ui5 Demo
                </Link>
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
                <Link to="/consulting-services" className="block py-2 border-b border-blue-500 bg-blue-400 text-white px-4 font-medium hover:bg-blue-500">
                  SAP Consulting Services
                </Link>
                <Link to="/technical" className="block py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP Technical
                </Link>
                <Link to="/migration" className="block py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP Migration
                </Link>
                <Link to="/ams-support" className="block py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP AMS SUpport Service
                </Link>
                <Link to="/sap-btp" className="block py-2 hover:bg-gray-100 px-4 text-purple-600">
                  SAP BTP
                </Link>
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
          <Link to="/request-demo" className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-3 px-8 border border-transparent hover:border-blue-600 rounded-full transition duration-300">
            Request a Demo
          </Link>
        </div>
      </header>
    </div>
  );
};

export default SAPLandingPage;
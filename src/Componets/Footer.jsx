import React from 'react';
import logo from '../Assets/footerlogo.png';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="container mx-auto py-8 px-4">
        {/* Grid layout with improved responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Titan Technology" className="h-12 sm:h-16 mb-4 invert brightness-0" />
            <p className="text-sm leading-relaxed">
              A SAP Gold Partner & Consumer Driven Consulting & Services Company, VSD Technologies, is headquartered at Ahmedabad, Gujarat with 9+ year's hands on experience in SAP ECC & S/4 HANA Solution Services.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-200 transition-colors duration-200">SAP S/4 HANA Implementation & Rollout</li>
              <li className="hover:text-blue-200 transition-colors duration-200">SAP Technical Services</li>
              <li className="hover:text-blue-200 transition-colors duration-200">SAP S/4 HANA Migration</li>
              <li className="hover:text-blue-200 transition-colors duration-200">SAP ECC & S/4 HANA Support</li>
            </ul>
          </div>

          {/* Our Solution */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Solution</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-200 transition-colors duration-200">RISE with SAP</li>
              <li className="hover:text-blue-200 transition-colors duration-200">SAP S/4 HANA</li>
              <li className="hover:text-blue-200 transition-colors duration-200">SAP BTP/Fiori/UI5</li>
              <li className="hover:text-blue-200 transition-colors duration-200">SAP SuccessFactor/HXM/HCM</li>
              <li className="hover:text-blue-200 transition-colors duration-200">EXIM</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="mt-1 mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-sm">+91 7935667629</p>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm break-all">support@titantechnology.co.in</p>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm">
                  TIMES CORPORATE PARK Opp. Copper Stone,
                  Near Dev Vihar, 2, Thaltej - Shilaj Rd, Thaltej,
                  Ahmedabad, Gujarat 380059
                </p>
              </div>
            </div>

            {/* Social Icons - improved for touch targets */}
            <div className="flex mt-5 space-x-5">
              <Link className="text-white hover:text-gray-300 transition-colors duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link className="text-white hover:text-gray-300 transition-colors duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </Link>
              <Link className="text-white hover:text-gray-300 transition-colors duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link className="text-white hover:text-gray-300 transition-colors duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link className="text-white hover:text-gray-300 transition-colors duration-200">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom - improved for mobile */}
        <div className="mt-8 pt-6 border-t border-blue-600 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-sm space-y-2 md:space-y-0">
            <span className="block md:inline md:mr-4 hover:text-blue-200 transition-colors duration-200 cursor-pointer">Terms & Conditions</span>
            <span className="block md:inline hover:text-blue-200 transition-colors duration-200 cursor-pointer">Privacy Policy</span>
          </div>
          <div className="text-sm mt-4 md:mt-0">
            ©2025 VSD Technologies Pvt. Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
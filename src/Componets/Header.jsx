"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import logo from "../Assets/header-logo.png"

const SAPLandingPage = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  // Navigation data structure to avoid repetition
  const navigationItems = [
    {
      name: "Who We Are",
      id: "whoWeAre",
      links: [
        { to: "/industries", label: "Industries" },
        { to: "/", label: "Company" },
        { to: "/leadership", label: "VSD - Leadership" },
      ],
    },
    {
      name: "Solution",
      id: "solution",
      links: [
        { to: "/rise-with-sap", label: "RISE With SAP" },
        { to: "/s4hana-migration", label: "SAP S 4hana Migration" },
        { to: "/exim", label: "EXIM" },
        { to: "/fiori-consultants", label: "SAP Fiori Consultants" },
        { to: "/successfactors-integration", label: "SAP Successfactors Integration" },
      ],
    },
    {
      name: "Services",
      id: "services",
      links: [
        { to: "/consulting-services", label: "SAP Consulting Services" },
        { to: "/technical", label: "SAP Technical" },
        { to: "/migration", label: "SAP Migration" },
        { to: "/ams-support", label: "SAP AMS Support Service" },
        { to: "/sap-btp", label: "SAP BTP" },
      ],
    },
  ]

  const directLinks = [
    { to: "/knowledge-center", label: "Knowledge Center" },
    { to: "/career", label: "Career" },
    { to: "/contact", label: "Contact Us" },
    { to: "/blogs", label: "Blogs" },
  ]

  // Reusable dropdown arrow component
  const DropdownArrow = ({ isOpen }) => (
    <svg
      className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  )

  return (
    <div className="bg-slate-50 w-full">
      <header className="py-4 w-full">
        <div className="container mx-auto px-4 flex items-center justify-between w-full">
          {/* Logo - Ensure visibility on all screen sizes */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src={logo || "/placeholder.svg"} 
              alt="VSD SAP Gold Partner" 
              className="h-10 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6">
            {/* Dropdown Menus */}
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group">
                <button className="text-gray-700 hover:text-blue-500 font-medium flex items-center py-2">
                  {item.name}
                  <DropdownArrow isOpen={false} />
                </button>

                <div className="absolute left-0 top-full z-20 w-64">
                  <div className="bg-white shadow-lg rounded-md overflow-hidden mt-2">
                    {item.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`block py-2 px-4 font-medium hover:bg-blue-500 hover:text-white ${
                          location.pathname === link.to ? "bg-blue-500 text-white" : "text-purple-600"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Direct Links */}
            {directLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-gray-700 hover:text-blue-500 font-medium ${
                  location.pathname === link.to ? "text-blue-500" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Request Demo Button (Desktop and Large Tablet) */}
          <Link
            to="/request-demo"
            className="hidden lg:inline-block xl:inline-block bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 px-6 border border-transparent hover:border-blue-600 rounded-full transition duration-300"
          >
            Request a Demo
          </Link>

          {/* Hamburger Menu Button (Mobile, Tablet, and Small Desktop) */}
          <button
            className="block xl:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>

          {/* Mobile/Tablet Full Width Menu */}
          <div
            className={`fixed inset-0 bg-blue-500 z-30 transition-transform duration-300 transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } block xl:hidden`}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-between mb-8">
                <img 
                  src={logo || "/placeholder.svg"} 
                  alt="VSD SAP Gold Partner" 
                  className="h-10 brightness-0 invert w-auto" 
                />
                <button onClick={() => setMenuOpen(false)} className="text-white" aria-label="Close menu">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col space-y-4">
                {/* Dropdown Menus */}
                {navigationItems.map((item) => (
                  <div key={item.id} className="border-b border-blue-400 pb-4">
                    <button
                      className="w-full text-left text-white font-medium flex items-center justify-between py-2"
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={activeDropdown === item.id}
                    >
                      {item.name}
                      <DropdownArrow isOpen={activeDropdown === item.id} />
                    </button>
                    {activeDropdown === item.id && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            className="block py-2 font-medium text-white hover:text-blue-200"
                            onClick={() => setMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Direct Links */}
                {directLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-white font-medium py-2 border-b border-blue-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Demo Button in Mobile Menu */}
              <div className="mt-8 text-center">
                <Link
                  to="/request-demo"
                  className="bg-white text-blue-500 font-medium py-3 px-8 border border-white rounded-full transition duration-300 inline-block"
                  onClick={() => setMenuOpen(false)}
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
     
    </div>
  )
}

export default SAPLandingPage
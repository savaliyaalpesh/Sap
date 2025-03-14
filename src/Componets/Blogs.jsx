import React from 'react'

import Overcoming from "../Assets/Overcoming.jpg"
import Software from "../Assets/Software.jpg"
import SAPConsultants from "../Assets/SAP Consultants.jpg"
import Automation from "../Assets/Automation.jpg"
import Consultants from "../Assets/Consultants.jpg"
import Technology from "../Assets/Business Technology.jpg"

const Blogs = () => {

  const blogPosts = [
    {
      id: 1,
      title: "SAP BTP: The Key to Overcoming Today's Challenges in Construction Management",
      date: "February 21, 2025",
      excerpt: "The framework conditions for companies are currently more challenging than ever before. The demanding task of determining the organization's future...",
      image: Overcoming
    },
    {
      id: 2,
      title: "Unlocking the Potential of SAP ABAP: Key Functions for Optimizing IT & Software Operations",
      date: "February 17, 2025",
      excerpt: "ABAP is a programming language used to develop SAP, which plays a significant role in IT & Software development. Because...",
      image: Software
    },
    {
      id: 3,
      title: "How Skilled SAP Consultants Enhance Efficiency in the Energy, Gas, and Utility Sectors",
      date: "February 10, 2025",
      excerpt: "SAP Basis is required for an organization's SAP systems to integrate and function properly. It is an important aspect of...",
      image: SAPConsultants
    },
    {
      id: 4,
      title: "Automate Your Business with SAP BTP Automation!",
      date: "February 5, 2025",
      excerpt: "For this purpose, an effective and sophisticated intelligent software has been developed, which will help to automate and integrate business…",
      image: Automation
    },
    {
      id: 5,
      title: "How Skilled SAP Consultants Enhance Efficiency in the Energy, Gas, and Utility Sectors",
      date: "February 10, 2025",
      excerpt: "SAP Basis is required for an organization's SAP systems to integrate and function properly. It is an important aspect of...",
      image: Consultants
    },
    {
      id: 6,
      title: "How Skilled SAP Consultants Enhance Efficiency in the Energy, Gas, and Utility Sectors",
      date: "February 10, 2025",
      excerpt: "SAP Basis is required for an organization's SAP systems to integrate and function properly. It is an important aspect of...",
      image: Technology
    },
  ];


  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <div className="relative h-48 bg-custom flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white z-10">Blogs</h1>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Blog Post */}
          <div className="flex flex-col">
            <div className="mb-2">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{blogPosts[0].title}</h3>
            <p className="text-gray-500 text-sm mt-1">{blogPosts[0].date}</p>
            <p className="text-gray-600 mt-2 text-sm">{blogPosts[0].excerpt}</p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm">
                Read More
              </button>
            </div>
          </div>

          {/* Second Blog Post */}
          <div className="flex flex-col">
            <div className="mb-2">
              <img
                src={blogPosts[1].image}
                alt={blogPosts[1].title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{blogPosts[1].title}</h3>
            <p className="text-gray-500 text-sm mt-1">{blogPosts[1].date}</p>
            <p className="text-gray-600 mt-2 text-sm">{blogPosts[1].excerpt}</p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm">
                Read More
              </button>
            </div>
          </div>

          {/* Third Blog Post */}
          <div className="flex flex-col">
            <div className="mb-2">
              <img
                src={blogPosts[2].image}
                alt={blogPosts[2].title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{blogPosts[2].title}</h3>
            <p className="text-gray-500 text-sm mt-1">{blogPosts[2].date}</p>
            <p className="text-gray-600 mt-2 text-sm">{blogPosts[2].excerpt}</p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm">
                Read More
              </button>
            </div>
          </div>

          {/* four Blog Post */}
          <div className="flex flex-col">
            <div className="mb-2">
              <img
                src={blogPosts[3].image}
                alt={blogPosts[3].title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{blogPosts[3].title}</h3>
            <p className="text-gray-500 text-sm mt-1">{blogPosts[3].date}</p>
            <p className="text-gray-600 mt-2 text-sm">{blogPosts[3].excerpt}</p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm">
                Read More
              </button>
            </div>
          </div>

          {/* Five Blog Post */}
          <div className="flex flex-col">
            <div className="mb-2">
              <img
                src={blogPosts[4].image}
                alt={blogPosts[4].title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{blogPosts[4].title}</h3>
            <p className="text-gray-500 text-sm mt-1">{blogPosts[4].date}</p>
            <p className="text-gray-600 mt-2 text-sm">{blogPosts[4].excerpt}</p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm">
                Read More
              </button>
            </div>
          </div>

          {/* Six Blog Post */}
          <div className="flex flex-col">
            <div className="mb-2">
              <img
                src={blogPosts[5].image}
                alt={blogPosts[5].title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="font-bold text-lg text-gray-800">{blogPosts[5].title}</h3>
            <p className="text-gray-500 text-sm mt-1">{blogPosts[5].date}</p>
            <p className="text-gray-600 mt-2 text-sm">{blogPosts[5].excerpt}</p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm">
                Read More
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blogs

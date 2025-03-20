import React, { useState } from 'react';
import migration from "../../Assets/migration.png";
import solution from "../../Assets/solution.png";
import userscog from "../../Icons/users-cog.svg"
import users from "../../Icons/users.svg"
import sun from "../../Icons/sun.svg"
import moneycheck from "../../Icons/money-check.svg"
import coin from "../../Icons/coins.svg"
import peoplearrows from "../../Icons/people-arrows.svg"
import Form from "../Form"

const Migration = () => {

  const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    return (
      <div className="mb-4">
        <div className="flex items-center cursor-pointer" onClick={onToggle}>
          <span className={`mr-2 ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            )}
          </span>
          <h3 className={`font-medium ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>
            {question}
          </h3>
        </div>
        {isOpen && (
          <div className="pl-7 mt-2 text-gray-700">
            {answer}
          </div>
        )}
      </div>
    );
  };

  const Faqs = () => {
    const [openItem, setOpenItem] = useState(0);

    const faqs = [
      {
        question: 'Can you explain SAP S/4 HANA migration?',
        answer:
          'Migrating to SAP S/4HANA can improve real-time analytics, financial closings, AI and process automation access, and business model update management.',
      },
      {
        question: 'What is the total number of SAP migration types?',
        answer:
          'In SAP technology, a heterogeneous copy and a homogeneous copy are the two kinds of system migrations. ',
      },
      {
        question: 'The switch from ECC to 4HANA: what are the benefits?',
        answer:
          'An improvement over ECC, S/4HANA promotes digital transformation by increasing business agility, providing flexible deployment options, and enabling many new features.',
      }
    ];

    const toggleItem = (index) => {
      setOpenItem((prevOpen) => (prevOpen === index ? null : index));
    };

    return (
      <div className="p-6 max-w-4xl mx-auto min-w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">FAQs</h1>
        <div className="bg-blue-50 rounded-lg p-6 w-full">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItem === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    );
  };




  return (
    <>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section with Background */}
        <div className="w-full h-56 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-auto">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-5xl font-bold text-white z-10">SAP S 4hana Migration</h1>
          <p className="text-white z-10 max-w-5xl mt-2 text-left">
            Use our SAP S/4HANA migration experts. Our consultants have SAP implementation and migration experience to ease S/4HANA migration. We understand system migration complexities and can solve any problems. To maximize your SAP S/4HANA investment and ensure a smooth migration, let our experienced consultants guide you from planning and preparation to execution and beyond.
          </p>
          <button className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-medium py-2 px-8 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
            Schedule a Free Consultation
          </button>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-16 px-4 md:px-6">


          {/* Original content from the first component */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900">Why SAP S/4 HANA?</h2>

              <p className="text-gray-700 mt-4">
                SAP S/4HANA migration transforms businesses for digital evolution. Our migration services help organizations adopt SAP’s intelligent ERP platform with agility, innovation, and efficiency. Our proven expertise and robust methodology minimize disruption and maximize value during migration. The <b>sap s 4hana migration</b> simplifies processes, provides real-time analytics, and improves user experiences. Grow your business digitally with VSD Technologies’ comprehensive migration solutions—partner with us for SAP S/4HANA digital transformation.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-1 w-60 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={migration}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Benefits section (from original component) */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900">SAP S/4 HANA is a complete solution that comes with the following:</h2>

              <p className="text-gray-700 mt-4">
                SAP Automation’s S/4HANA migration expertise can digitize your business. Our success with migrations ensures a smooth transition to the next-generation ERP platform. We reduce migration downtime and increase efficiency using cutting-edge automation tools and methods. Our SAP professionals offer assessment, planning, implementation, and submit-migration guides. The <b>sap s 4hana implementation</b> will improve your commercial enterprise tactics, agility, and opportunities. Experience seamless migration and accelerated digital transformation with SAP Automation as your trusted partner.
              </p>

              <p className="text-gray-700 mt-4">
                VSD Technologies prioritizes customer focus throughout the SAP S/4HANA migration process, so choose us. Our dedicated team collaborates with you to understand your business needs and customize our migration services. We meet your goals and expectations precisely and efficiently with a customer-centric approach. We provide open communication, timely updates, and personalized solutions to any issues, from planning to post-migration support. Trust us to provide a smooth migration that prioritizes your business.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-1 w-60 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={solution}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>


          {/* Introduction text */}
          <div className="text-center mb-12  mx-auto mt-40">
            <h1 className="text-4xl font-bold text-gray-900 pb-2">SAP S/4 HANA is designed to meet your unique needs.</h1>
            <p className="text-gray-700 text-left my-3">
              We at VSD Technologies provide a smooth SAP S/4HANA migration, minimal disruption, and maximum benefits. Choose us for <b>sap s 4hana enterprise management</b> and get timely delivery. Choose reliability, efficiency, and excellence with our timely delivery.
            </p>

            <p className="text-gray-700 text-left my-3">
              We offer the best SAP S/4HANA migration reliability. Our expertise and dedication ensure a smooth S/4HANA transition, minimizing risks and maximizing business-critical system uptime.
            </p>
            <p className="text-gray-700 text-left my-3">
              Our experienced team carefully plans and executes each migration using best practices and robust methodologies to ensure SAP landscape reliability. Our experts work hard to meet project deadlines without sacrificing quality. With streamlined processes and project management, VSD Technologies ensures your migration goes smoothly and on time.
            </p>
          </div>




          {/* SAP Solutions Grid */}
          <div className="mb-16">


            {/* box grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1 */}

              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={userscog}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">SAP S/4 HANA Asset Management</h4>
                <p className="text-gray-700 text-left my-3">
                  This module focuses on managing an organization’s assets throughout their lifecycle. It includes functionalities for asset accounting, asset tracking, maintenance planning, and optimization.
                </p>

              </div>
              {/* Box 2 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-5 rounded-full mb-4">
                  <img
                    src={users}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />

                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">SAP S/4 HANA Human Resource Management</h4>
                <p className="text-gray-700 text-left my-3">
                  This module covers all aspects of human resource management, including personnel administration, payroll processing, talent management, workforce planning, and employee self-service.
                </p>
              </div>



              {/* Box 3 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={sun}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">SAP S/4 HANA Manufacturing</h4>
                <p className="text-gray-700 text-left my-3">
                  This module is designed to streamline and optimize manufacturing processes. It includes features for production planning, scheduling, shop floor management, quality control, and resource optimization.
                </p>
              </div>

              {/* Box 4 */}

              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={moneycheck}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">SAP S/4 HANA Finance</h4>
                <p className="text-gray-700 text-left my-3">
                  This module focuses on financial management and accounting processes. It includes functionalities for general ledger accounting, accounts payable/receivable, asset accounting, financial reporting, and compliance.
                </p>
              </div>



              {/* Box 5 */}

              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={coin}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">S/4 HANA Sourcing and Procurement</h4>
                <p className="text-gray-700 text-left my-3">
                  This module deals with the sourcing of goods and services, as well as procurement processes. It includes functionalities for supplier management, sourcing strategies, contract management, purchase requisitions, and purchase orders.
                </p>
              </div>

              {/* Box 6 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={peoplearrows}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">SAP S/4 HANA Supply Chain</h4>
                <p className="text-gray-700 text-left my-3">
                  This module encompasses the entire supply chain management process, from planning and forecasting to logistics and fulfillment. It includes features for demand planning, inventory management, order management, warehouse management, and transportation management.
                </p>
              </div>
            </div>

            {/* Section divider with title */}
            <div className="text-center mt-40">
              <h2 className="text-4xl font-bold text-gray-900 pb-2">SAP S/4 HANA for all your business needs.</h2>
              <div className="h-1 max-w-xl bg-blue-500 mx-auto my-8"></div>
            </div>

            <div className="text-center mb-8">
              <p className="text-gray-700 max-w-7xl mx-auto mt-10 text-left">
                We offer dedicated SAP S/4HANA migration teamwork for a smooth transition. Our team has SAP system experts and S/4HANA migration specialists. We prioritize collaboration, communication, and transparency during migration to meet your business goals efficiently. We guarantee results that exceed your expectations with a track record of successful migrations and satisfied clients.
              </p>
            </div>

          </div>
        </div>
      </div>
      <Faqs />
      
      {/* Form Title */}
      <div className="text-center  md:mb-8">
        <p className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-2 tracking-widest">Let's Talk!!</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
          How Your Business can get benefitted from Rise With SAP Solutions?
        </h1>
      </div>

      <Form/>
    </>
  );
};

export default Migration;
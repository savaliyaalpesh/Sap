import React, { useState } from 'react';
import Eximimg from "../../Assets/Exim.png"
import Business from "../../Assets/Business.png"
import cloudsun from "../../Icons/cloudsun.svg"
import resolving from "../../Icons/resolving.svg"
import mountain from "../../Icons/mountain.svg"
import filealt from "../../Icons/file-alt.svg"


const Exim = () => {

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
        question: 'Why is EXIM used?',
        answer:
          'In its entirety, EXIM stands for the United States Export-Import Bank. The official export credit agency of the United States federal government is EXIM.',
      },
      {
        question: 'How does EXIM function?',
        answer:
          'The EXIM Bank facilitates the country’s financial exports and imports of goods and services through Exim trade. It is useful for funding both the import and export of machinery.',
      },
      {
        question: "What's import/export?",
        answer: 'Exporting sells home-made goods and services abroad. Importing involves bringing foreign goods and services home.',
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
        <div className="w-full h-80 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-4">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-5xl font-bold text-white z-10">EXIM</h1>
          <p className="text-white z-10 max-w-5xl mt-2">
            With our EXIM solution, experience global trade power. EXIM streamlines every aspect of export-import with unmatched efficiency and reliability. By managing documentation, compliance, and supply chain logistics, our solution simplifies international commerce for all sizes of businesses. Tracking and analytics in real-time help you make decisions and seize market opportunities.  Trust our EXIM solution to streamline export-import operations, cut costs, and boost global profits.
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
              <h2 className="text-4xl font-bold text-gray-900">Why EXIM?</h2>

              <p className="text-gray-700 mt-4">
                EXIM is your trusted partner for seamless export-import operations. Exim simplifies international trade with a complete set of tools and resources. EXIM automates documentation and complies with global regulations to reduce risks, streamline operations, and increase efficiency. Real-time tracking and analytics let you optimize your supply chain and seize opportunities. Exim helps you navigate global trade and find growth opportunities.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Eximimg}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Benefits section (from original component) */}
          <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:px-28 py-10">
            {/* Left side content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                EXIM is a blessing for your Export-Import Business that comes with the following:
              </h2>

              <div className="flex flex-col space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Better Supply Chain Management for Operational Efficiency</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Smooth System Integration Improves Data Accuracy</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Informed Decision-Making and Performance Optimization with Advanced Analytics</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Scalable Business Solutions for Long-Term Success</p>
                </div>
              </div>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-64 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Right side illustration */}
            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
              <img
                src={Business}
                alt="SAP digital transformation illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Introduction text */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 pb-2">Manage Smartly Your Export-Import Business with EXIM Solution</h1>
            <p className="text-gray-700">
              Our EXIM solution streamlines and optimizes your export-import business to maximize its potential. Our comprehensive platform lets you manage international trade smartly and efficiently. To improve logistics and supply chain operations and track shipments, inventory, and transactions in real-time. Our EXIM solution provides advanced market, customer, and competitor analytics and reporting. Data-driven decision-making improves trading strategies, growth opportunities, and risk management. Simple export document management and compliance ensures regulatory compliance and reduces costly errors and delays. Our automated documentation workflows reduce administrative burdens and save time and resources for strategic business initiatives.
            </p>
          </div>

          {/* SAP Solutions Grid */}
          <div className="mb-16">

            {/* box grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-5 rounded-full mb-4">
                  <img
                    src={cloudsun}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />

                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Get rid of Manual Entry Errors.</h4>
                <p className="text-gray-700">
                  Our EXIM solution streamlines import-export processes to reduce costly errors. Stop manual data entry errors that disrupt operations and lower profits. Our automated system ensures accuracy and efficiency in all trade transactions, giving you peace of mind and increasing productivity.
                </p>
              </div>

              {/* Box 2 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={resolving}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">One-Stop Solution</h4>
                <p className="text-gray-700">
                  Our One-Stop Solution for EXIM offers convenience and a complete solution. Manage your export-import processes from documentation to logistics seamlessly. Streamline operations, reduce errors, and boost efficiency with our integrated platform. Our customized EXIM solution streamlines compliance, workflows, and international trade. Expand your options and grow easily.
                </p>
              </div>

              {/* Box 3 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={mountain}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Real-Time Tracking</h4>
                <p className="text-gray-700">
                  Experience seamless logistics management with our real-time EXIM tracking solutions. Monitor your shipments throughout their journey for transparency and efficiency in export-import operations.
                </p>
              </div>

              {/* Box 4 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={filealt}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Efficient Documentation and Tracking</h4>
                <p className="text-gray-700">
                  Manage export-import processes and comply with regulations easily. Our efficient tools help you manage documentation and track shipments in real-time. Use simple interfaces and robust tracking features to stay ahead of the competition and optimize international trade operations.
                </p>
              </div>
            </div>
          </div>

          {/* Section divider with title */}
          <div className="text-center my-16">
            <h2 className="text-4xl font-bold text-gray-900 pb-2">EXIM for Export-Import.</h2>
            <div className="h-1 max-w-xl bg-blue-500 mx-auto mt-5"></div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">EXIM Solution</h3>
            <p className="text-gray-700 max-w-7xl mx-auto mt-2 text-left">
              EXIM for Export-Import opens global trade. Our comprehensive solution helps businesses navigate international commerce seamlessly. EXIM streamlines export-import processes from documentation and compliance to supply chain logistics. With actual-time monitoring and analytics, groups could make smart selections and capture new market opportunities. EXIM assists small and massive groups in worldwide enlargement, chance mitigation, and sustainable growth. Join the many businesses worldwide that use EXIM for Export-Import to streamline, reduce costs, and increase profits. Experience EXIM’s efficiency, reliability, and innovation today to grow your export-import business.
            </p>
          </div>


        </div>
      </div>
      <Faqs />
    </>
  );
};

export default Exim;
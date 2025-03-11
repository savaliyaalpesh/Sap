import React, { useState } from 'react';
import consulting from "../../Assets/sap data services pricing.png";
import services from "../../Assets/Rise With SAP Services.png";
import cloudsun from "../../Icons/cloudsun.svg"
import business from "../../Icons/business-time.svg"
import chartbar from "../../Icons/chart-bar.svg"
import networkwired from "../../Icons/network-wired.svg"
import userscog from "../../Icons/users-cog.svg"
import cloud from "../../Icons/cloud.svg"
import clouddownload from "../../Icons/cloud-download.svg"

const RiseWithSap = () => {

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
        question: 'Does "rise with SAP" imply anything?',
        answer:
          'SAP RISE needs clarification. The managed cloud service RISE with SAP helps organisations using on-premise ERP software migrate to the cloud securely and smoothly.',
      },
      {
        question: 'Can you tell me how SAP HEC differs from Rise with SAP?',
        answer:
          'As a BTaaS, RISE with SAP equips clients with the practical resources and technical know-how to transition to SAP Cloud infrastructure. Businesses can move their whole SAP environment from on-premises to the cloud with SAP HEC.',
      },
      {
        question: 'When it comes to SAP and BTP, what’s new?',
        answer:
          'SAP Business Technology Platform (BTP) enhances your RISE with SAP investment. It allows you to build applications, automate processes, manage data, perform analytics, plan, integrate systems, and leverage AI.',
      },
      {
        question: 'What differentiates "grow with SAP" from "rise with SAP"?',
        answer:
          'To summarise, the two offerings differ primarily in their adaptability and personalizability. With RISE and SAP, bigger and more complicated companies can meet their unique needs, while GROW with SAP is more suited to medium-sized businesses with more standardised processes.',
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
        <div className="w-full h-56 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-4">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-5xl font-bold text-white z-10">Experience the value of RISE with SAP</h1>
          <p className="text-white z-10 max-w-2xl mt-2">
            Are you looking to transform to cloud ERP and intelligent ERP, which can fuel innovation and automate business processes? We can help you with business process optimization and digital transformation.
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
              <h2 className="text-4xl font-bold text-gray-900">Why RISE with SAP?</h2>

              <p className="text-gray-700 mt-4">
                Try our RISE with SAP services to transform. We must stay ahead in today's fast-changing business environment, which requires agility, efficiency and innovation. Our comprehensive RISE with SAP solutions helps your company grow, streamline, and maximise value. We offer customised strategies and expert advice throughout digital transformation and cloud migration. Let us grow your business to its full potential. Use our RISE with SAP services to face the future confidently.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={consulting}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Benefits section (from original component) */}
          <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:px-28 py-10">
            {/* Left side content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="text-blue-500 text-sm font-medium mb-2">GET IN TOUCH TO KNOW...</div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                RISE with SAP is a holistic solution that comes with
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
                  <p className="text-gray-700">RISE with SAP provides complete business transformation.</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">It improves efficiency, productivity, and growth.</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Integration, automation, and scalability are seamless with our SAP solution.</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Explore new business opportunities and accelerate digital transformation.</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">RISE with SAP provides insights, agility, and innovation.</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Enhance resource optimization, employee empowerment, and operational efficiency.</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Improve your competitiveness with advanced technologies and their best practices.</p>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-2 flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 flex items-center justify-center rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">Please work with us on a customised SAP solution.</p>
                </div>
              </div>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-64 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Right side illustration */}
            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
              <img
                src={services}
                alt="SAP digital transformation illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Introduction text */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 pb-2">Experience the value of RISE with SAP</h1>
            <p className="text-gray-700">
              Our experts deliver SAP-connected ROI while the competition struggles. We transform your business into digital excellence. The RISE with SAP suite of tools and services
              optimizes processes, boosts productivity, and sustains growth. Our solutions help organizations maximize efficiency and opportunity, from seamless integration to advanced
              analytics. We help your business stay ahead in today's dynamic market with agility, scalability, and innovation. Partnering with VSD Technologies gives you access to cutting-edge
              technologies and best practices to achieve your strategic goals efficiently. We'll help you with strategy, implementation, and beyond for your digital transformation. Explore the future
              of business with RISE and SAP and maximize your company's potential.
            </p>
          </div>


          {/* Section divider with title */}
          <div className="text-center my-16">
            <h2 className="text-4xl font-bold text-gray-900 pb-2">RISE with SAP is designed to meet your unique needs.</h2>
            <div className="h-1 w-64 bg-blue-500 mx-auto"></div>
          </div>

          {/* SAP Solutions Grid */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">RISE with SAP solution</h3>
              <p className="text-gray-700 max-w-3xl mx-auto mt-2">
                RISE with SAP is a comprehensive solution that provides support for your business needs in any industry, geography, or regulatory environment. SAP is responsible for the overall service level agreement (SLA), cloud operations, and technical support. RISE with SAP includes:
              </p>
            </div>

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
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Cloud ERP</h4>
              </div>

              {/* Box 2 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={business}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Business Process Transformation</h4>

              </div>

              {/* Box 3 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={chartbar}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Business Platform and Analytics</h4>

              </div>

              {/* Box 4 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={networkwired}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Business Networks</h4>

              </div>

              {/* Box 5 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={userscog}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">Outcomes-Driven Services and Tools</h4>

              </div>

              {/* Box 6 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={cloud}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">S/4 HANA Private cloud</h4>

              </div>

              {/* Box 7 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={clouddownload}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">S/4 HANA Public cloud</h4>

              </div>

              {/* Box 8 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={business}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">BTP (Business Technology Platform)</h4>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Faqs />
    </>
  );
};

export default RiseWithSap;
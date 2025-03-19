import React, { useState } from 'react';
import migration from "../../../Assets/Technologies.png";
import Interview from "../../../Assets/Interview.png"
import Clock from "../../../Icons/clock.svg"
import Dashcube from "../../../Icons/dashcube.svg"
import Chart from "../../../Icons/chart-pie.svg"
import searchengin from '../../../Icons/searchengin.svg'
import filecode from '../../../Icons/file-code.svg'
import chalkboard from '../../../Icons/chalkboard.svg'
import Lifecycles from "../../../Assets/Life.png"


const BoService = () => {

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
        question: 'Can SAP BO be considered an enterprise resource planning (ERP) system?',
        answer:
          'Tell me about SAP Business One. Everything your small business needs to run smoothly, from financials and accounting to buying and inventory management, sales and customer relationships, reporting and analytics—all in one reasonably priced ERP system.',
      },
      {
        question: 'Who needs SAP BO anymore?',
        answer:
          'Private Cloud Edition, which includes the SAP BusinessObjects main code line, will likely continue beyond the BI 2025 sunset, but there currently needs to be plans for an on-premise version.',
      },
      {
        question: 'Can you explain the function of an SAP BO consultant?',
        answer:
          'The consultant’s role typically falls into two categories: development or support. -obtaining UAT from the company.',
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


  const [selectedStep, setSelectedStep] = useState('Planning and Assessment');


  const steps = [
    {
      id: 'Planning and Assessment',
      title: 'Understanding Your Requirements',
      icon: searchengin
    },
    {
      id: 'Implementation',
      title: 'Build Solution for Your Business',
      icon: filecode
    },
    {
      id: 'Monitor and optimization',
      title: 'Guiding Your Team',
      icon: chalkboard
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section with Background */}
        <div className="w-full h-56 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-auto">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-5xl font-bold text-white z-10">SAP bi bo Consultantation</h1>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-16 px-4 md:px-6">


          {/* Original content from the first component */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900">Drive Your Business Growth through Data-Driven SAP BI/BO Solutions</h2>

              <p className="text-gray-700 mt-4">
                Our SAP BO consulting services boost business intelligence. At VSD Technologies, our experienced experts optimize reporting and analytics processes with deep knowledge. Our speciality is designing, implementing, and maintaining <b>sap bi bo</b> solutions for your business. From dashboard development to data visualization, we help your company use SAP BO to make smart decisions and achieve strategic goals. Our comprehensive support and personalized approach maximize your SAP investment by guiding you through every step.
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


          <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:px-28 py-10 mt-12">
            {/* Left side content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-2 tracking-widest uppercase">why us?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perks of Associating with VSD Technologies for SAP Implementation & Rollout:
              </h2>

              <p className="text-gray-700 mt-4">
                Top SAP Basis consultants in India, VSD Technologies, can help your business thrive. They bring your business into the digital age by seamlessly integrating SAP automation, streamlining processes, and improving efficiency and scalability. Their expertise, experience, and dedication to excellence enable customized solutions that boost performance, cut costs, and sustain growth. Trust their skills to transform your business and stay ahead in today’s competitive market.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-64 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Right side illustration */}
            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-10">
              <img
                src={Interview}
                alt="SAP digital transformation illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-12">Our Process</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`border rounded-lg p-8 flex flex-col items-center cursor-pointer transition duration-300 ${selectedStep === step.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white hover:text-blue-500'
                    }`}
                  onClick={() => setSelectedStep(step.id)}
                >
                  <div className="mb-4">
                    <img
                      src={step.icon}
                      alt=""
                      className={`w-[50px] h-[50px] transition duration-300 ${selectedStep === step.id
                        ? 'filter brightness-0 invert' // White when selected
                        : 'text-blue-500' // Blue by default
                        }`}
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-center mb-2">{step.title}</h2>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-gray-600">
                {steps.find(step => step.id === selectedStep)?.description}
              </p>
            </div>
            <p className="text-gray-600">We at VSD Technologies offer SAP BO consulting with unmatched expertise, customized solutions, and seamless integration to maximize business success. Our process first step includes understanding requirement of our customers. </p>
          </div>


          <div className="container mx-auto py-20 px-4 md:px-6">
            {/* Original content from the first component */}
            <div className="flex flex-col md:flex-row items-center gap-8 mx-20">
              {/* Text content - left side */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-gray-900">Analytics that Help Your Business Grow Exponentially</h2>

                <p className="text-gray-700 mt-4">
                A reporting and analytics business intelligence (BI) platform geared toward business users is SAP BI/BO. It consists of several reporting systems that let users find data, analyze it to get insights, and then produce reports that show the insights. In order for business users to prepare reports and carry out procedures like predictive analytics without the assistance of data analysts, SAP BI/BO is designed to make reporting and analysis simple. Users of SAP Business Objects BI apps can search and analyze data from a number of sources using drag-and-drop features. Since SAP BI/BO is a front-end BI platform, the data is combined from numerous back-end sources rather than being kept at the application level. 
                </p>

                <p className="text-gray-700 mt-4">
                Our SAP BI/BO knowledge spans the entire lifecycle, including administration, implementation, and strategy. Our industry-leading expertise in integrating SAP BI/BO with the whole SAP BI ecosystem is one of the significant areas where Visual BI stands apart.
                </p>

                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                  Schedule a Free Consultation
                </button>
              </div>

              {/* Image - right side */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={Lifecycles}
                  alt="Team collaborating on digital transformation"
                  className="max-w-full h-full "
                />
              </div>
            </div>
          </div>

          {/* SAP Solutions Grid */}
          <div className="mb-16">

            <div className="py-10">
              <h1 className="text-4xl font-bold text-gray-900 text-center">SAP BI/BO Services</h1>
              <p className="text-gray-700 mt-4 text-center">Choose us as a sap bi bo expert with unmatched expertise and value for your company. With years of hands-on experience and SAP Business Objects expertise, our consultants design and implement customized solutions.</p>
            </div>

            {/* box grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1 */}

              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={Clock}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">SAP BI/BO Implementation with Timely Support</h4>
                <p className="text-gray-700 text-left my-3">
                  Receive SAP BO consultants on time and experience unmatched professionalism and efficiency. Due to our track record, we prioritize deadlines and deliver high-quality services quickly. Our experts will meet your project deadlines and provide reliable support and guidance. From consultation to implementation and beyond, we guarantee a smooth process.
                </p>
              </div>
              {/* Box 2 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-5 rounded-full mb-4">
                  <img
                    src={Dashcube}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />

                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">SAP BI/BO Dashboard Support</h4>
                <p className="text-gray-700 text-left my-3">
                  Experience unmatched expertise and personalized service with our SAP BO consultant team. Our team tailors’ solutions to your business needs and delivers results. We at VSD Technologies provide initial consultation and ongoing maintenance with extensive experience. Trust our excellence, reliability, and client satisfaction as we optimize your SAP environment.
                </p>
              </div>
              {/* Box 3 */}
              <div className="border rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition duration-300">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <img
                    src={Chart}
                    alt=""
                    className="w-[50px] h-[50px] filter invert hover:invert-0 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blue-500 mb-2">SAP BI/BO Upgrade, Migration and Integration</h4>
                <p className="text-gray-700 text-left my-3">
                  Our priorities are client satisfaction, seamless integration, optimized processes, and measurable results. Our team is committed to your success, from requirement analysis to post-implementation support. We provide SAP BI/BO Upgrade, Migration and Integration to our customers at reasonable rates.
                </p>
              </div>
            </div>

            {/* Section divider with title */}


          </div>

        </div>
      </div>
      <Faqs />
    </>
  );
};

export default BoService;
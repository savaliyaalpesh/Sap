import React, { useState } from 'react';
import Consultant from "../../../Assets/sap pi po consultant.jpg";
import Consultanting from "../../../Assets/SAP Consulting Services.jpg";
import Interview from "../../../Assets/Interview.png"
import searchengin from '../../../Icons/searchengin.svg'
import code from '../../../Icons/code.svg'
import cogs from '../../../Icons/cogs-blue.svg'
import Services from "../../../Assets/sap consulting services.png"
import Consulting from '../Consulting-services';


const PiPoConsultant = () => {

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
        question: 'What is the role of an SAP CPI expert?',
        answer:
          'Expertise in creating incoming and outbound cloud interfaces for On-Premise and Cloud SAP Product instances.',
      },
      {
        question: 'Can I expect a good career with SAP CPI?',
        answer:
          'This is a great career path to pursue for those looking to make a difference in the SAP ecosystem by helping with data flow optimization and seamless integration.',
      },
      {
        question: 'Does SAP CPI necessitate creating code?',
        answer:
          'You don’t need a deep understanding of code to use the SAP CPI. Working on SAP CPI requires only a fundamental knowledge of computer programming. You have a lot of leeway with SAP Cloud Integration.',
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


  const [selectedStep, setSelectedStep] = useState('Development');


  const steps = [
    {
      id: 'Development',
      title: 'Development',
      icon: searchengin
    },
    {
      id: 'Implementation',
      title: 'Testing',
      icon: code
    },
    {
      id: 'Monitor and optimization',
      title: 'Deployment',
      icon: cogs
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section with Background */}
        <div className="w-full h-56 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-auto">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-5xl font-bold text-white z-10">SAP cpi Consultant</h1>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-16 px-4 md:px-6">


          {/* Original content from the first component */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900">We Provide the Best Way to Your Digital Transformation</h2>

              <p className="text-gray-700 mt-4">
                Our SAP CPI consultants maximize your SAP ecosystem. Our <b>SAP CPI consultant</b> has extensive experience integrating and automating business processes across SAP and non-SAP applications. We at VSD Technologies customize solutions for your business, from data integration to workflow optimization. Having successfully implemented many projects, our team ensures efficient deployment, smooth operation, and ongoing support. At VSD Technologies, we optimize SAP CPI, improve collaboration, and drive digital transformation.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-1 w-60 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Consultant}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>


          <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:px-28 py-10 mt-12">
            {/* Left side content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">

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
            <p className="text-gray-600">Our SAP CPI consulting experts will integrate systems, optimize workflows, and confidently drive digital transformation.</p>
          </div>


          <div className="container mx-auto py-20 px-4 md:px-6">
            {/* Original content from the first component */}
            <div className="flex flex-col md:flex-row items-center gap-8 mx-20">
              {/* Text content - left side */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-gray-900">Automations to take your Business Growth Story Forward</h2>

                <p className="text-gray-700 mt-4">
                  Customer Focus offers unmatched SAP CPI expertise and dedication. Your SAP CPI consultants will understand your business needs and deliver customized solutions that deliver results. Customer satisfaction is our top priority, and we ensure seamless integration, efficient workflows, and optimal performance. Implementation and support are smooth, thanks to our sap pi/po expert. Our expertise and dedication to your success will elevate your SAP CPI projects.
                </p>

                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                  Schedule a Free Consultation
                </button>
              </div>

              {/* Image - right side */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={Services}
                  alt="Team collaborating on digital transformation"
                  className="max-w-full h-full "
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 mx-20">

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Consultanting}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-full "
              />
            </div>


            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 my-10">
              <h2 className="text-4xl font-bold text-gray-900">SAP PI/PO/CPI Services</h2>

              <p className="text-gray-700 mt-4">
                Our SAP CPI consultants are successful and experienced, so choose us. Our SAP Cloud Platform Integration (CPI) experts bring industry knowledge and insights to every project. AT VSD Technologies, we focus on understanding your business needs and providing customized solutions that work. Our experienced consultants ensure seamless integration and maximum <b>SAP PI PO CPI</b> ROI from design and implementation to ongoing support and optimization.
              </p>

              <p className="text-gray-700 mt-4">
                Timely Delivery offers SAP CPI consulting with unmatched expertise and dedication. Our  consultants deliver projects on time and efficiently meet your business needs. We ensure seamless integration and optimized workflows to maximize your business potential with quality and reliability. Trust Timely Delivery for top SAP CPI solutions.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>


          </div>

        </div>
      </div>
      <Faqs />
    </>
  );
};

export default PiPoConsultant;
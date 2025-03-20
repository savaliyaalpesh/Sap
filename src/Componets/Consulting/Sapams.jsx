import React, { useState } from 'react';
import Technologies from "../../Assets/Technologies.png"
import Interview from "../../Assets/Interview.png"
import Lifecycle from "../../Assets/Lifecycle.png"
import usertie from '../../Icons/user-tie.svg'
import check from '../../Icons/check.svg'
import dollar from '../../Icons/dollar.svg'
import Form from "../Form"

const Sapams = () => {

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
        question: 'SAP AMS—what is it?',
        answer:
          'Many companies offer SAP Application Management Services to companies that outsource SAP enterprise application support. AMS providers provide IT and application management services to other companies.',
      },
      {
        question: 'What are SAP AMS activities?',
        answer:
          'The SAP AMS processes maintain, enhance, and manage enterprise SAP environments. It involves SAP enterprise application development, customization, implementation, testing, maintenance, and support.',
      },
      {
        question: "What exactly does AMS do?",
        answer: 'The term “AMS interventions” refers to the measures taken to improve and alter antibiotic prescription practices. They are fantastic examples of what antimicrobial stewardship teams do best.',
      }
    ];

    const toggleItem = (index) => {
      setOpenItem((prevOpen) => (prevOpen === index ? null : index));
    };

    return (
      <div className="p-6 max-w-4xl mx-auto min-w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">FAQ</h1>
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


  const [selectedStep, setSelectedStep] = useState('Analyze');


  const steps = [
    {
      id: 'Analyze',
      title: 'Evaluating your Business & Organization',
      icon: usertie,
      description: 'Choose our SAP Application Management Services (AMS) reliability for uninterrupted business operations and maximum system efficiency. Due to our reliable AMS solutions, we prioritize uptime, performance optimization, and issue resolution. Our professionals provide proactive monitoring, around-the-clock support, and instant solving to boost productivity and minimize downtime. '
    },
    {
      id: 'Assemble',
      title: 'Maintenance and Support',
      icon: check,
      description: 'Choose our SAP Application Management Services (AMS) reliability for uninterrupted business operations and maximum system efficiency. Due to our reliable AMS solutions, we prioritize uptime, performance optimization, and issue resolution. Our professionals provide proactive monitoring, around-the-clock support, and instant solving to boost productivity and minimize downtime. '
    },
    {
      id: 'Transition',
      title: 'Continuous Improvement',
      icon: dollar,
      description: 'Choose our SAP Application Management Services (AMS) reliability for uninterrupted business operations and maximum system efficiency. Due to our reliable AMS solutions, we prioritize uptime, performance optimization, and issue resolution. Our professionals provide proactive monitoring, around-the-clock support, and instant solving to boost productivity and minimize downtime. '
    }
  ];

  return (


    <>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section with Background */}
        <div className="w-full h-40 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-4">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-5xl font-bold text-white z-10">SAP AMS Support Service</h1>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-16 px-4 md:px-6">


          {/* Original content from the first component */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900">Complete AMS Services for your SAP System from VSD Technologies</h2>
              <p className="text-gray-700 mt-4">
                Use SAP Application Management Services to grow with SAP. Businesses can optimize SAP systems, boost efficiency, and grow with our SAP AMS solutions. Our expert team provides customized support and maintenance for your business. Troubleshooting, performance monitoring, and system upgrades keep your SAP environment running smoothly. Please work with VSD Technologies to maximize SAP investment, streamline operations, and meet business goals.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Technologies}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Benefits section (from original component) */}
          <div className="flex flex-col md:flex-row items-start gap-8 px-4 md:px-28 py-10 mt-12">
            {/* Left side content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perks of Associating with VSD Technologies for SAP AMS Services:
              </h2>

              <p className="text-gray-700">
                Digitalize your business with SAP Automation’s SAP Application Management Services. AMS streamlines SAP operations for optimal performance, reliability, and scalability. Our expert SAP consultants support your SAP landscape with system monitoring, maintenance, incident management, and enhancement implementation. By using SAP Automation’s AMS, you can maximize SAP investment value, reduce downtime, and boost productivity. Our innovative AMS solutions streamline SAP operations and improve service.
              </p>

              <p className="text-gray-700">
                Choose us for <b>SAP AMS</b> for expert support, proactive maintenance, and optimized SAP landscape performance.
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`border-2 border-blue-600 rounded-lg p-8 flex flex-col items-center cursor-pointer transition duration-300 ${selectedStep === step.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white hover:text-blue-500'
                    }`}
                  onClick={() => setSelectedStep(step.id)}
                >
                  <div className="mb-4 ">
                    <img
                      src={step.icon}
                      alt=""
                      className={`w-[50px] h-[50px] transition duration-300 ${selectedStep === step.id
                        ? 'filter brightness-0 invert' // White when selected
                        : 'filter invert-0 sepia-0 saturate-100 hue-rotate-[190deg] brightness-[0.4] contrast-[3]' // Blue filter
                        }`}
                      style={{
                        filter: selectedStep === step.id
                          ? 'brightness(0) invert(1)'
                          : 'invert(36%) sepia(61%) saturate(5823%) hue-rotate(210deg) brightness(103%) contrast(101%)'
                      }}
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
          </div>

          {/* Main content section */}
          <div className="container mx-auto py-20 px-4 md:px-6">
            {/* Original content from the first component */}
            <div className="flex flex-col md:flex-row items-center gap-8 mx-20">
              {/* Text content - left side */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-gray-900">Digitally Transform your Organization with SAP Lifecycle</h2>

                <p className="text-gray-700 mt-4">
                  Our SAP Application Management Services (AMS) prioritize customer satisfaction. Our dedicated team understands your business needs and delivers customized solutions that boost value and efficiency. Your needs are our top priority, so we respond quickly, solve problems, and improve—Optimise SAP system performance and reliability with our industry knowledge, technical expertise, and responsive support. As your <b>SAP AMS support</b> partner, we will always exceed your expectations and provide excellent service.
                </p>

                <p className="text-gray-700 mt-4">
                  Choose our experienced <b>SAP AMS services</b> consultants for SAP landscape optimization and business efficiency. Our AMS experts provide reliable SAP system support and proactive maintenance. Our customer-centric approach prioritizes your unique business needs and provides tailored solutions to streamline operations and drive innovation. Trust VSD Technologies’ skilled consultants to provide high-quality AMS services, maximize your SAP investment, and help your company achieve its goals.
                </p>

                <p className="text-gray-700 mt-4">
                  Choose us for timely SAP Application Management Services (AMS) delivery to keep your SAP systems running smoothly. We guarantee minimal downtime and maximum productivity for your business processes with proactive monitoring, efficient troubleshooting, and quick resolution.
                </p>

                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                  Schedule a Free Consultation
                </button>
              </div>

              {/* Image - right side */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={Lifecycle}
                  alt="Team collaborating on digital transformation"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>


          {/* Introduction text */}
          <div className="text-left mb-12 max-w-full mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 pb-2">SAP AMS SERVICES</h1>
            <p className="text-gray-700">
              At VSD Technologies, we offer dedicated <b>SAP AMS services</b> (AMS) teamwork to maximize your SAP landscape. Professional SAP consultants provide customized AMS solutions for your business. Our dedicated team provides high-quality support and maintenance to optimize SAP system performance, reliability, and efficiency. We aim to exceed customer expectations through proactive communication, prompt service, and continuous improvement.
            </p>

            <p className="text-gray-700 mt-10">
              At VSD Technologies, our SAP technical support services are strategically designed to elevate and optimize your ERP system. We offer expertise that can enhance your application portfolio, unlocking additional value for your business.
            </p>
          </div>
        </div>
      </div>
      <Faqs />

      {/* Form Title */}
      <div className="text-center  md:mb-8">
        <p className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-2 tracking-widest">Let's Talk!!</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
          How Your Business can get benefitted from SAP AMS Services.
        </h1>
      </div>

      <Form />
    </>
  );
};

export default Sapams;
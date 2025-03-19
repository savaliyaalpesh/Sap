import React, { useState } from 'react';
import Support from "../../../Assets/sap_basis.png"
import Interview from "../../../Assets/Interview.png"
import Digital_Transformation from "../../../Assets/Vision.jpg"
import searchengin from '../../../Icons/searchengin.svg'
import filecode from '../../../Icons/file-code.svg'
import chalkboard from '../../../Icons/chalkboard.svg'

const SapBasis = () => {

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
        question: 'How do you define an SAP basis consultant?',
        answer:
          'Implementing a general overview of SAP is the responsibility of an SAP Basis consultant.',
      },
      {
        question: 'Is a career in SAP Basis rewarding?',
        answer:
          'SAP Basis may be the right career path for tech enthusiasts looking to enter the IT industry or experienced professionals looking to expand their skills.  ',
      },
      {
        question: "Does coding apply to SAP bases?",
        answer: 'The job you will receive training—SAP System Administration—does not require coding.',
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


  const [selectedStep, setSelectedStep] = useState('Planning and Assessment');


  const steps = [
    {
      id: 'Planning and Assessment',
      title: 'Planning and Assessment',
      icon: searchengin,
      description: 'Examine business procedures and essential needs. In order to achieve organization-wide business process clarity, and schedules, make sure that collaboration and communication are constant.'
    },
    {
      id: 'Implementation',
      title: 'Implementation',
      icon: filecode,
      description: 'Examine business procedures and essential needs. In order to achieve organization-wide business process clarity, and schedules, make sure that collaboration and communication are constant.'
    },
    {
      id: 'Monitor and optimization',
      title: 'Monitor and optimization',
      icon: chalkboard,
      description: 'Examine business procedures and essential needs. In order to achieve organization-wide business process clarity, and schedules, make sure that collaboration and communication are constant.'
    }
  ];

  return (


    <>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section with Background */}
        <div className="w-full h-40 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-4">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-5xl font-bold text-white z-10">SAP Basis Consultantation</h1>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-16 px-4 md:px-6">


          {/* Original content from the first component */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-gray-900">Establish the Core for Digitalization of Your Business with SAP BASIS</h2>

              <p className="text-gray-700 mt-4">
                Are you looking for the best Indian <b>sap basis consultant?</b> Look no further than VSD Technologies! Our SAP Basis administrators are highly skilled and experienced. As a successful SAP implementation and optimization firm, we guarantee smooth SAP operations for your business. Trust us to deliver reliable, customized solutions that maximize SAP landscape efficiency and performance. For SAP Basis consultancy excellence and results, contact us today.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Support}
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
            <p className="text-gray-600">Our <b>sap basis consultant</b> in India offers unmatched expertise, seamless solutions, and transformative digital business strategies. </p>
          </div>
          {/* Main content section */}
          <div className="container mx-auto py-20 px-4 md:px-6">
            {/* Original content from the first component */}
            <div className="flex flex-col md:flex-row items-center gap-8 mx-20">
              {/* Text content - left side */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-gray-900">We allocate the best suitable resource for your requirement</h2>

                <p className="text-gray-700 mt-4">
                  Trust us—we’re India’s top SAP Basis consultant. With our proven track record, we guarantee your SAP infrastructure runs smoothly. Every project receives our experts’ unmatched expertise, dedication, and attention to detail, ensuring your business operations remain uninterrupted and optimized. For SAP environment confidence and peace of mind, we prioritize reliability from initial consultation to ongoing support.
                </p>

                <p className="text-gray-700 mt-4">
                  Choose us for the <b>sap basis services</b> in India, which has unmatched expertise and customer focus. We prioritize your needs and provide customized business solutions. Our experienced team delivers excellence, provides 24/7 support, and optimizes your SAP environment for maximum efficiency and performance. We at VSD Technologies exceed your expectations and build long-term partnerships based on trust and success with a customer-centric approach. Our customer-focused approach lets you maximize your SAP landscape with confidence and peace of mind.
                </p>

                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                  Schedule a Free Consultation
                </button>
              </div>

              {/* Image - right side */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={Digital_Transformation}
                  alt="Team collaborating on digital transformation"
                  className="max-w-full h-full "
                />
              </div>
            </div>
          </div>


          {/* Introduction text */}
          <div className="bg-blue-50 pt-10 pb-20">
            {/* Text content - right side */}
           
              <h2 className="text-4xl font-bold text-gray-900 text-center">SAP BASIS Services</h2>

              <p className="text-gray-700 mt-4">
                We have India’s top SAP Basis consultants. Expertise, innovation, and dedication go into every project, and we succeed. Our SAP expertise lets us create customized business solutions.
              </p>

              <p className="text-gray-700 mt-4">
                We at VSD Technologies provide system implementations, performance optimization, and troubleshooting with industry-leading expertise. You can trust us to manage your SAP environment for seamless operations, maximum efficiency, and long-term business success.
              </p>

              <p className="text-gray-700 mt-4">
                As India’s top SAP Basis consultants, we deliver on time. From our outstanding track record, we understand the importance of on-time project delivery. Our experts strive to complete projects on time without sacrificing quality. Modern technology and best practices optimize workflows, reduce delays, and streamline processes.
              </p>

              <p className="text-gray-700 mt-4">
                Select India’s top <b>sap basis consultant</b> for dedicated teamwork and unmatched expertise. Our experts provide complete business solutions for seamless integration and optimal performance. Our proactive approach and industry knowledge produce results-driven strategies that drive efficiency, cost reduction, and productivity.
              </p>

              <p className="text-gray-700 mt-4">
                Contact us, VSD Technologies, India’s top <b>sap basis services</b>, for digital transformation expertise.
              </p>
           
          </div>

        </div>
      </div>
      <Faqs />
    </>
  );
};

export default SapBasis


import React, { useState } from 'react';
import migration from "../../../Assets/ecc to s4 hana migration-Photoroom.png";
import Technologies from "../../../Assets/data_migration_from_ecc_to_s4_hana.png";
import Growth from "../../../Assets/Photoroom.png";
import searchengin from '../../../Icons/searchengin.svg';
import filecode from '../../../Icons/file-code.svg';
import chalkboard from '../../../Icons/chalkboard.svg';
import Form from "../../Form"

const HanaMigration = () => {
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
        question: 'What are s4 HANA \'s advantages over SAP ECC?',
        answer:
          'Investing in hardware infrastructure and ongoing maintenance was necessary for organisations deploying SAP ECC on-premises. But, by providing cloud-based alternatives, SAP S/4 HANA broadens deployment possibilities.',
      },
      {
        question: 'In comparison to s4 HANA, what are the main differences between ECC?',
        answer:
          'S/4HANA is SAP HANA only, but ECC can connect to databases from other vendors like Db2, Oracle, and Informix. Consequently, S/4HANA\'s in-memory database allows for significantly quicker reaction times.',
      },
      {
        question: 'Can you explain the s4 HANA migration?',
        answer:
          'A "lift-and-shift" transfer of SAP systems to SAP S/4HANA.',
      }
    ];

    const toggleItem = (index) => {
      setOpenItem((prevOpen) => (prevOpen === index ? null : index));
    };

    return (
      <div className="p-4 md:p-6  mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900">FAQs</h1>
        <div className="bg-blue-50 rounded-lg p-4 md:p-6 w-full">
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

  const [selectedStep, setSelectedStep] = useState('Devlopment');

  const steps = [
    {
      id: 'Devlopment',
      title: 'Devlopment',
      icon: searchengin,
      description: 'Our development phase focuses on creating custom solutions tailored to your business needs.'
    },
    {
      id: 'Implementation',
      title: 'Testing',
      icon: filecode,
      description: 'Rigorous testing ensures all migrated systems function perfectly before deployment.'
    },
    {
      id: 'Monitor and optimization',
      title: 'Deployment',
      icon: chalkboard,
      description: 'After deployment, we continuously monitor and optimize your systems for peak performance.'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-black font-sans">
        {/* Hero Section with Background */}
        <div className="w-full h-48 md:h-56 flex flex-col items-center justify-center relative overflow-hidden bg-custom text-center px-4">
          <div className="absolute inset-0 opacity-70"></div>
          <h1 className="text-3xl md:text-5xl font-bold text-white z-10">SAP MIGRATION</h1>
          <h1 className="text-3xl md:text-5xl font-bold text-white z-10">ECC to S/4 HANA SERVICES</h1>
        </div>

        {/* Main content section */}
        <div className="container mx-auto py-8 md:py-16 px-4 md:px-6">
          {/* First section */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Text content - left side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Integrations that Help Your Business to take Shape for Tomorrow</h2>

              <p className="text-gray-700 mt-4">
                Experience digital transformation with our <b>ecc to s4 hana migration</b> services. Using the latest SAP technologies to streamline operations, improve efficiency, and boost growth, our roadmap ensures a smooth transition. Choose us for <b>data migration from ecc to s4 hana</b> for smooth transitions and digital business potential.
              </p>

              <p className="text-gray-700 mt-4">
                At VSD Technologies, we help your business build a future-ready infrastructure with expert guidance and customised solutions to stay ahead in today's dynamic market. Unleash SAP S4 HANA's full potential with seamless migration, optimised processes, and superior performance.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-1 w-full md:w-60 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Image - right side */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src={migration}
                alt="Team collaborating on digital transformation"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Second section */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 px-0 md:px-8 lg:px-28 py-10 mt-8 md:mt-12">
            {/* Left side content */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perks of Associating with VSD Technologies for SAP PI/PO/CPI:
              </h2>

              <p className="text-gray-700 font-bold">Transforming Business Digitally With SAP Automation</p>

              <p className="text-gray-700 mt-4">
                SAP Automation's ecc to s4 hana migrations services maximise business potential. Transfer to the next generation of SAP ERP systems and use advanced features to boost performance, scalability, and efficiency. Migration is smooth with minimal downtime and maximum ROI by our experts. Transform your business digitally with SAP Automation for unmatched agility and innovation. Join VSD Technologies today to achieve digital success and sustainable growth.
              </p>

              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-full md:w-64 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                Schedule a Free Consultation
              </button>
            </div>

            {/* Right side illustration */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-10">
              <img
                src={Technologies}
                alt="SAP digital transformation illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Process section */}
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Process</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`border rounded-lg p-6 md:p-8 flex flex-col items-center cursor-pointer transition duration-300 ${selectedStep === step.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white hover:text-blue-500'
                    }`}
                  onClick={() => setSelectedStep(step.id)}
                >
                  <div className="mb-4">
                    <img
                      src={step.icon}
                      alt=""
                      className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] transition duration-300 ${selectedStep === step.id
                        ? 'filter brightness-0 invert' // White when selected
                        : 'text-blue-500' // Blue by default
                        }`}
                    />
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold text-center mb-2">{step.title}</h2>
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8">
              <p className="text-gray-600">
                {steps.find(step => step.id === selectedStep)?.description}
              </p>
            </div>
            <p className="text-gray-600 mt-4">SAP Automation offers unmatched data migration services from ecc to s4 hana reliability. With years of experience and a track record, we guarantee smooth transitions, minimal disruptions, and data integrity. Our specialists plan and execute each migration reliably to maximise business results. VSD Technologies will migrate ECC to S4 HANA precisely, efficiently, and reliably.</p>
          </div>

          {/* Growth section */}
          <div className="py-10 md:py-20 px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mx-0 md:mx-4 lg:mx-20">
              {/* Text content - left side */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Automations to take your Business Growth Story Forward</h2>

                <p className="text-gray-700 mt-4">
                  SAP Automation provides unmatched reliability and timely s4 hana migration services from ecc. Our dedicated team completes your migration project quickly and efficiently, minimising business disruption. Our on-time project delivery record ensures we meet your deadlines and exceed your expectations.
                </p>

                <p className="text-gray-700 mt-4">
                  We prioritise project success, so choose us for dedicated ecc to s4 hana migration teamwork. Our expert team delivers excellence to ensure a smooth transition to the next generation of SAP ERP systems. We guarantee business-specific results with personalised attention and industry-leading expertise. Let VSD Technologies transform your digital landscape and improve your company's agility, efficiency, and innovation.
                </p>

                <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-medium py-2 w-full md:w-96 border border-transparent hover:border-blue-600 rounded-full transition duration-300 z-10 mt-4">
                  Schedule a Free Consultation
                </button>
              </div>

              {/* Image - right side */}
              <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                <img
                  src={Growth}
                  alt="Team collaborating on digital transformation"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Services section */}
          <div className="py-6 md:py-10 text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">SAP PI/PO/CPI Services</h1>
            <p className="text-gray-700 mt-4">Our SAP PI/PO/CPI (Process Integration/Process Orchestration/Cloud Platform Integration) services encompass a range of offerings aimed at integrating and orchestrating business processes across various systems and applications within an organization. Our SAP PI/PO/CPI (Process Integration/Process Orchestration/Cloud Platform Integration) services are critical for ensuring seamless communication, data exchange, and process automation across different SAP and non-SAP systems.</p>
          </div>
        </div>
      </div>
      <Faqs />

      {/* Form Title */}
      <div className="text-center  md:mb-8">
        <p className="text-blue-400 text-xl sm:text-2xl md:text-3xl mb-2 tracking-widest">Let's Talk!!</p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
        How Your Business can get benefitted from SAP Migration Services.
        </h1>
      </div>
      <Form />
    </>
  );
};

export default HanaMigration;